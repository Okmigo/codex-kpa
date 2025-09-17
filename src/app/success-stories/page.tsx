"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Calendar, User, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Modal } from "@/components/ui/modal";
import { formatDate } from "@/lib/utils";
import storiesData from "@/data/stories.json";

type Story = typeof storiesData[0];

export default function SuccessStories() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-brand/5 to-accent/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-ink mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-ink-muted leading-relaxed mb-8">
              Real stories from our foster families. See how temporary love creates permanent happiness 
              and transforms lives—both human and animal.
            </p>
            <Button asChild size="xl" className="text-lg">
              <Link href="/apply-to-foster">
                Start Your Foster Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {storiesData.map((story) => (
              <Card 
                key={story.id} 
                className="overflow-hidden hover:shadow-medium transition-shadow cursor-pointer"
                onClick={() => setSelectedStory(story)}
              >
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-brand/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-soft">
                      <Star className="h-8 w-8 text-accent" />
                    </div>
                    <p className="text-ink-muted text-sm">Success story photo</p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-ink mb-3 line-clamp-2">
                    {story.title}
                  </h3>
                  <p className="text-ink-muted mb-4 line-clamp-3">
                    {story.blurb}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-ink-muted mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{story.fosterFamily}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(story.date)}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="h-4 w-4 text-brand" />
                    <span className="text-sm text-ink">
                      <strong>{story.petName}</strong> - {story.petBreed}
                    </span>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    Read Full Story
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold">Ready to Write Your Success Story?</h2>
            <p className="text-xl opacity-90">
              Join hundreds of families who have opened their hearts and homes to pets in need. 
              Your temporary love creates permanent happiness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="xl" className="text-lg">
                <Link href="/apply-to-foster">
                  Become a Foster
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="text-lg border-white text-white hover:bg-white hover:text-brand">
                <Link href="/adoptables">View Available Pets</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Story Modal */}
      {selectedStory && (
        <Modal
          isOpen={!!selectedStory}
          onClose={() => setSelectedStory(null)}
          title={selectedStory.title}
          className="max-w-4xl"
        >
          <div className="space-y-6">
            {/* Story Header */}
            <div className="flex items-center gap-4 text-sm text-ink-muted">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>Fostered by {selectedStory.fosterFamily}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(selectedStory.date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4 text-brand" />
                <span><strong>{selectedStory.petName}</strong> - {selectedStory.petBreed}</span>
              </div>
            </div>

            {/* Story Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {selectedStory.images.map((image, index) => (
                <div key={index} className="aspect-square bg-gradient-to-br from-accent/20 to-brand/20 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center shadow-soft">
                      <Star className="h-6 w-6 text-accent" />
                    </div>
                    <p className="text-ink-muted text-xs">Photo {index + 1}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Story Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-ink leading-relaxed whitespace-pre-line">
                {selectedStory.body}
              </p>
            </div>

            {/* Story Footer */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <div className="text-sm text-ink-muted">
                  <p>Thank you to <strong>{selectedStory.fosterFamily}</strong> for providing a loving foster home!</p>
                </div>
                <div className="flex gap-2">
                  <Button asChild variant="outline">
                    <Link href="/apply-to-foster">Start Fostering</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/adoptables">View Available Pets</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}



