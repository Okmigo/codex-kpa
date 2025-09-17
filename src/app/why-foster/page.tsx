import Image from "next/image";
import Link from "next/link";
import { Heart, Users, Home, Clock, CheckCircle, ArrowRight, Shield, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function WhyFoster() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Why Foster? <span className="text-orange-600">Because Every Life Matters</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Fostering gives them hope. Adoption gives them a home.
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We are a community of animal lovers in Central Florida working together to keep pets safe, 
              healthy, and out of danger. Our top priority is finding foster homes for dogs on the local 
              shelter's last-chance list.
            </p>
          </div>
        </div>
      </section>

      {/* Who Can Be a Foster? */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Can Be a Foster?</h2>
              <p className="text-xl text-gray-600">
                You don't need to be extraordinary – our foster heroes are ordinary people with big hearts.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-orange-600" />
                    All Ages Welcome
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    From young adults in their 20s fostering during college or early careers, to retirees 
                    in their 70s opening their homes to senior dogs, anyone 18+ can foster. Many of our 
                    most active foster volunteers are between 30–65 years old, but students and seniors 
                    play a vital role too.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Home className="h-6 w-6 text-orange-600" />
                    Any Household Type
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Singles, couples, families with older kids – all kinds of households foster. What 
                    matters is a stable routine and a safe home environment, not a specific family setup. 
                    Empty-nesters often find fostering especially rewarding, and even families with 
                    responsible children get involved.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Heart className="h-6 w-6 text-orange-600" />
                    Everyone is Welcome
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Women often take the lead in fostering (about 70–85% of fosters are female), but 
                    everyone is welcome – many fostering teams are couples or families doing it together.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-orange-600" />
                    Rent or Own
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Whether you rent or own, you can foster. Apartment dwellers typically foster smaller 
                    dogs (with landlord approval), while those with homes and yards might take in bigger 
                    breeds. The key is providing love and safety, not the size of your house.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes a Great Foster? */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes a Great Foster?</h2>
              <p className="text-xl text-gray-600">
                Great fosters aren't defined by age or income – it's about heart. Do these traits sound like you?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Heart className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Animal Lovers at Heart</h3>
                        <p className="text-gray-600">
                          You see pets as family. Fosters often feel it's a calling to help animals in need, 
                          driven by compassion and empathy.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <HandHeart className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Nurturing & Patient</h3>
                        <p className="text-gray-600">
                          Fosters are empathetic and patient, willing to help a scared or stressed animal blossom. 
                          You don't need special training – just love and understanding.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Belief in Second Chances</h3>
                        <p className="text-gray-600">
                          Most fosters strongly believe every animal deserves another chance. They're the kind 
                          of people who help others with no expectation of reward – pure altruism.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Community-Minded</h3>
                        <p className="text-gray-600">
                          Fostering is a team effort. Our fosters value being part of a rescue community, 
                          working together and supporting each other. They often encourage friends to join 
                          and share adoptable pets on social media.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Shield className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Resilient Helpers</h3>
                        <p className="text-gray-600">
                          It can be hard to say goodbye when a foster pet gets adopted, but our fosters balance 
                          attachment with pride. They're able to let go for the greater good, knowing they've 
                          saved a life and ready to save more.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Fostering Matters */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Fostering Matters</h2>
              <p className="text-xl text-gray-600">
                Rescues save most dogs from our shelter, but they can't do it alone – they rely on people like you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Save a Life</h3>
                  <p className="text-gray-600 text-sm">
                    Give a pet a second chance at finding their forever home.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Short-Term Commitment</h3>
                  <p className="text-gray-600 text-sm">
                    Provide temporary care while we find the perfect family.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No Cost to You</h3>
                  <p className="text-gray-600 text-sm">
                    The rescue covers food, vet care, and supplies.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Huge Rewards</h3>
                  <p className="text-gray-600 text-sm">
                    Experience unmatched joy and the satisfaction of saving a life.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-orange-50 rounded-lg p-8 text-center">
              <blockquote className="text-2xl font-medium text-gray-900 mb-4">
                "Fostering gives them hope. Adoption gives them a home."
              </blockquote>
              <p className="text-gray-600">
                This succinctly ties the two actions together and can be a memorable motto for our organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Fostering Works */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Fostering Works</h2>
              <p className="text-xl text-gray-600">
                Simple steps to get started on your fostering journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Apply</h3>
                  <p className="text-gray-600">
                    Fill out our foster application form so we can match you with the right rescue or pet.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Matched</h3>
                  <p className="text-gray-600">
                    We'll connect you with a rescue group that will provide a pet that fits your home and experience.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Short-Term Care</h3>
                  <p className="text-gray-600">
                    You take the pet home for a temporary period and care for them like your own.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">4</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Help Find Home</h3>
                  <p className="text-gray-600">
                    Work with the rescue to bring the pet to adoption events. When they get adopted, you've saved a life!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold">Ready to Open Your Heart and Home?</h2>
            <p className="text-xl opacity-90">
              Fill out the Foster Application and we'll guide you every step of the way!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" variant="secondary" className="text-lg">
                <Link href="/apply-to-foster" className="flex items-center gap-3">
                  <span>Apply to Foster</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-orange-600">
                <Link href="/success-stories" className="flex items-center gap-3">
                  <Heart className="h-5 w-5" />
                  <span>Read Success Stories</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}