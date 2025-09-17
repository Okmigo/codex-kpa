import Image from "next/image";
import Link from "next/link";
import { Heart, Users, Building2, Clock, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IMPACT_STATS } from "@/lib/constants";
import storiesData from "@/data/stories.json";

export default function Home() {
  const latestStory = storiesData[0];

  return (
    <div className="min-h-screen">
            {/* Hero Section */}
      <section className="relative min-h-[85vh] w-full overflow-hidden">
        {/* Full-bleed background image */}
        <div className="absolute inset-0 -z-10">
        <Image
            src="/dog.jpg"
            alt="Happy dog"
            fill
          priority
            sizes="100vw"
            className="object-cover object-left-top"
          />
          {/* Top-to-bottom gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/0" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-28 pb-16 lg:pt-36 lg:pb-24 max-w-2xl">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-orange-100 text-orange-800 mb-5">
              Fostering saves lives
            </span>

            <h1 className="text-4xl lg:text-7xl font-bold tracking-tight leading-tight text-white">
              Bring Happiness <span className="block text-orange-300">Home</span>
            </h1>

            <p className="mt-6 text-xl lg:text-2xl text-white/90 leading-relaxed">
              Connect with rescue pets in need of temporary homes. It costs nothing and
              creates lasting bonds. Join our community of heroes.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="xl" className="text-lg shadow-md">
                <Link href="#foster-program" className="flex items-center gap-3">
                  <span>Foster Program</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="xl" className="text-lg bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Link href="/success-stories" className="flex items-center gap-3">
                  <Heart className="h-5 w-5" />
                  <span>Success Stories</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-br from-white to-orange-50/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Together, we're making a real difference in the lives of rescue pets and their families.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-2">
                    {IMPACT_STATS.petsSaved.toLocaleString()}
                  </div>
                  <p className="text-gray-600 font-medium">Pets Saved This Year</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center group">
              <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-2">
                    {IMPACT_STATS.fosterFamilies}
                  </div>
                  <p className="text-gray-600 font-medium">Active Foster Families</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center group">
              <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-2">
                    {IMPACT_STATS.rescuePartners}
                  </div>
                  <p className="text-gray-600 font-medium">Rescue Partners</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Last Chance Spotlight */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Last Chance Spotlight</h2>
            <p className="text-xl text-gray-600">This week's featured pet needs your help</p>
          </div>
          
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-square bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-soft">
                      <Heart className="h-10 w-10 text-orange-600" />
                    </div>
                    <p className="text-gray-600">Photo of featured pet</p>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold text-gray-900">Featured Pet</h3>
                    <Badge className="bg-red-500 text-white">Urgent</Badge>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Age:</strong> 2 years</p>
                    <p><strong>Breed:</strong> Mixed</p>
                    <p><strong>Size:</strong> Medium</p>
                  </div>
                  <p className="text-gray-900">This sweet pet is looking for a temporary home while waiting for their forever family. They're great with kids and other pets!</p>
                  <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                    <Link href="/apply-to-foster">
                      Apply to Foster
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Overview */}
      <section id="foster-program" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Make a Difference?</h2>
            <p className="text-xl text-gray-600">Join our community of foster heroes and save lives</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Save a Life</h3>
                <p className="text-gray-600">
                  Provide temporary care for pets while they wait for their forever families.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Join Our Community</h3>
                <p className="text-gray-600">
                  Connect with like-minded animal lovers and make lasting friendships.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Support Rescues</h3>
                <p className="text-gray-600">
                  Help local rescue organizations by providing essential foster care.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button asChild size="xl" className="text-lg">
              <Link href="/why-foster" className="flex items-center gap-3">
                <span>Learn More About Fostering</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Success Story */}
      {latestStory && (
        <section className="py-16 bg-bg-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ink mb-4">Latest Success Story</h2>
              <p className="text-xl text-ink-muted">Real stories from our foster families</p>
            </div>
            
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-square bg-gradient-to-br from-accent/20 to-brand/20 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-soft">
                        <Star className="h-10 w-10 text-accent" />
                      </div>
                      <p className="text-ink-muted">Success story photo</p>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-ink">{latestStory.title}</h3>
                    <p className="text-ink-muted">{latestStory.blurb}</p>
                    <div className="flex items-center gap-2 text-sm text-ink-muted">
                      <Clock className="h-4 w-4" />
                      <span>Fostered by {latestStory.fosterFamily}</span>
                    </div>
                    <Button asChild variant="outline">
                      <Link href="/success-stories">Read More Stories</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Join the Pack CTA */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold">Join the Pack</h2>
            <p className="text-xl opacity-90">
              Get weekly rescue stories, foster tips, and ways to help. Be part of our community of animal heroes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 bg-white border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button variant="secondary" className="px-8 bg-white text-orange-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-75">
              No spam, just love. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ink mb-4">Trusted by Rescue Partners</h2>
            <p className="text-xl text-ink-muted">Working together to save lives</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <div className="w-24 h-16 mx-auto bg-bg-subtle rounded-lg flex items-center justify-center">
                  <span className="text-ink-muted text-sm">Partner {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
