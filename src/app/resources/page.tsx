import Link from "next/link";
import { Heart, Users, Shield, Lightbulb, ArrowRight, BookOpen, MessageCircle, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Resources() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Resources & <span className="text-orange-600">Support</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Tools, tips, and strategies to help you succeed in animal rescue and fostering.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardHeader className="bg-orange-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <Badge className="bg-orange-600 text-white mb-2">Featured Article</Badge>
                    <CardTitle className="text-2xl">7 Compassionate Strategies to Cultivate a Positive Shelter Environment</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-lg">
                  Working or volunteering at a public shelter can be emotionally exhausting – high intake, euthanasia, and constant exposure to suffering take a toll. If you've felt burned out or noticed negativity creeping in, you're not alone. Here are some practical, compassionate strategies to help shift the shelter environment toward positivity and teamwork.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-8">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-orange-600" />
                      1. Acknowledge the Pain and Burnout
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Start by recognizing that the emotional weight of shelter work is real and valid. Create space for honest conversations about the challenges.
                    </p>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-gray-700 italic">
                        "I know this work is really hard. It's okay to feel overwhelmed sometimes. What's one thing that's been particularly challenging for you this week?"
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Heart className="h-5 w-5 text-orange-600" />
                      2. Create a Culture of Micro-Kindness
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Small acts of kindness can transform the workplace atmosphere. Encourage team members to recognize each other's efforts.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Leave thank-you notes for colleagues who went above and beyond</li>
                      <li>Share positive outcomes and success stories in team meetings</li>
                      <li>Celebrate small wins, like a difficult animal finally trusting someone</li>
                      <li>Offer to help with tasks when you see someone struggling</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Users className="h-5 w-5 text-orange-600" />
                      3. Provide or Advocate for Emotional Support Tools
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Ensure team members have access to resources that support their mental health and well-being.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Schedule regular meditation or mindfulness breaks</li>
                      <li>Create a quiet corner for staff to decompress</li>
                      <li>Organize support groups for staff to share experiences</li>
                      <li>Encourage leadership to normalize taking breaks and seeking help</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-orange-600" />
                      4. Promote Shared Purpose
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Regularly remind everyone why their work matters and the impact they're making.
                    </p>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-gray-700 italic">
                        "Remember, every animal we care for is one step closer to a loving home. Each life we save matters. We're not just cleaning kennels – we're saving lives."
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 text-orange-600" />
                      5. Practice and Model Non-Reactivity
                    </h3>
                    <p className="text-gray-700 mb-4">
                      When stress levels are high, respond with calm rather than adding to the chaos.
                    </p>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-gray-700 italic">
                        "Hey, sounds like it's been a rough day. Want to take five? I can cover for you while you take a breather."
                      </p>
                    </div>
                    <p className="text-gray-700 mt-4">
                      Learn to disrupt stress cycles with calm responses and de-escalation techniques.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Users className="h-5 w-5 text-orange-600" />
                      6. Offer Opportunities for Everyone to Be Heard
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Create channels for all team members to share ideas, concerns, and feedback.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Hold regular team huddles where everyone can speak</li>
                      <li>Implement a suggestion box (physical or digital)</li>
                      <li>Ensure leadership gives weight to feedback from all levels</li>
                      <li>Create anonymous reporting systems for sensitive issues</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <HandHeart className="h-5 w-5 text-orange-600" />
                      7. Highlight the Human-Animal Connection
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Focus on the positive moments and the unique bond between humans and animals.
                    </p>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-gray-700 italic">
                        "Did you see how that scared dog finally wagged its tail when Sarah walked by? That's why we do this work – those moments of trust and connection."
                      </p>
                    </div>
                    <p className="text-gray-700 mt-4">
                      These "emotional wins" help refill everyone's cup and remind them of the meaningful impact they're making.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">More Resources</h2>
              <p className="text-xl text-gray-600">Additional tools and information to support your journey</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Fostering Guide</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Complete guide to becoming a successful foster parent, from application to adoption.
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/why-foster">Read Guide</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Success Stories</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Inspiring stories from foster families who have made a difference in pets' lives.
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/success-stories">Read Stories</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Rescue Partners</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Connect with trusted rescue organizations in your area for support and resources.
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/rescues">Find Partners</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <MessageCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">FAQ</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Common questions and answers about fostering, donations, and our programs.
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/faq">View FAQ</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety Guidelines</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Important safety information for fostering pets and protecting your family.
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <HandHeart className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Volunteer Opportunities</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Other ways to help beyond fostering, from events to transportation.
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/contact">Get Involved</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold">Ready to Make a Difference?</h2>
            <p className="text-xl opacity-90">
              Whether you're interested in fostering, volunteering, or supporting our mission, 
              we're here to help you get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" variant="secondary" className="text-lg">
                <Link href="/apply-to-foster" className="flex items-center gap-3">
                  <span>Apply to Foster</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-orange-600">
                <Link href="/contact" className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5" />
                  <span>Contact Us</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


