import Link from "next/link";
import { HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { SITE_CONFIG } from "@/lib/constants";

const faqs = [
  {
    category: "About Keep Pets Alive",
    questions: [
      {
        question: "Who is Keep Pets Alive?",
        answer: "Keep Pets Alive is a nonprofit organization dedicated to connecting foster families with rescue pets in need. We work with a network of trusted rescue organizations to help pets find temporary homes while they wait for their forever families."
      },
      {
        question: "Are you affiliated with Best Friends Animal Society?",
        answer: "While we share similar goals with Best Friends Animal Society, we are an independent nonprofit organization. We focus specifically on fostering programs and connecting foster families with rescue pets."
      },
      {
        question: "How long has Keep Pets Alive been operating?",
        answer: "Keep Pets Alive was founded to address the growing need for foster families in animal rescue. We've been connecting foster families with rescue pets and helping save lives since our establishment."
      }
    ]
  },
  {
    category: "Fostering",
    questions: [
      {
        question: "How do I become a foster parent?",
        answer: "Start by filling out our foster application form. We'll review your information and connect you with rescue organizations in your area that match your preferences and availability. The process typically takes 2-3 business days."
      },
      {
        question: "What are the requirements to foster?",
        answer: "Requirements vary by rescue organization, but generally include: being 18+ years old, having a stable living situation, landlord approval (if renting), and the ability to provide a safe, loving environment. Some rescues may have additional requirements."
      },
      {
        question: "How long does fostering typically last?",
        answer: "Most foster periods last 2-8 weeks, though this can vary based on the pet's needs, medical requirements, and how quickly they find their forever home. Some pets may need longer-term care."
      },
      {
        question: "What costs am I responsible for?",
        answer: "None! Rescue organizations cover all expenses including food, medical care, supplies, and medications. You provide the love, time, and home environment."
      },
      {
        question: "What if I can't foster anymore?",
        answer: "No problem at all. Life happens, and rescue organizations understand. Simply contact them, and they'll arrange for the pet to move to another foster home or back to the rescue."
      },
      {
        question: "Can I choose what type of pet to foster?",
        answer: "Absolutely! You can specify preferences for size, age, breed, temperament, and special needs. Rescue organizations work to match you with pets that fit your lifestyle and experience level."
      }
    ]
  },
  {
    category: "Donations",
    questions: [
      {
        question: "How are donations used?",
        answer: "Donations support our mission in several ways: direct pet care (medical, food, supplies), foster family support and training, rescue organization partnerships, and program development to expand our reach."
      },
      {
        question: "Is my donation tax-deductible?",
        answer: "Yes! Keep Pets Alive is a 501(c)(3) nonprofit organization. All donations are tax-deductible to the full extent allowed by law. You'll receive a receipt for your records."
      },
      {
        question: "Can I specify how my donation is used?",
        answer: "While we appreciate your interest in specific programs, we use donations where they're needed most to maximize impact. This allows us to respond quickly to urgent needs and support all aspects of our mission."
      }
    ]
  },
  {
    category: "Getting Help",
    questions: [
      {
        question: "I can't foster but want to help. What can I do?",
        answer: "There are many ways to help! You can donate, volunteer at rescue events, share our posts on social media, or help with transportation. Contact us to learn about volunteer opportunities in your area."
      },
      {
        question: "What if I need to surrender my pet?",
        answer: "We focus on fostering rescue pets, not intake. If you need to surrender a pet, contact your local animal shelter or rescue organization. They can provide guidance and resources for your situation."
      },
      {
        question: "How do I report a concern about a foster situation?",
        answer: "If you have concerns about a foster situation, please contact us immediately. We take all reports seriously and will work with the appropriate rescue organization to address any issues."
      }
    ]
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-brand/5 to-accent/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-ink mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-ink-muted leading-relaxed mb-8">
              Find answers to common questions about fostering, donations, and our organization. 
              Can't find what you're looking for? We're here to help!
            </p>
            <Button asChild size="xl" className="text-lg">
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-ink mb-6 flex items-center gap-2">
                  <HelpCircle className="h-6 w-6 text-brand" />
                  {category.category}
                </h2>
                
                <Card>
                  <CardContent className="p-0">
                    <Accordion>
                      {category.questions.map((faq, faqIndex) => (
                        <AccordionItem
                          key={faqIndex}
                          title={faq.question}
                          isOpen={categoryIndex === 0 && faqIndex === 0}
                        >
                          {faq.answer}
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-bg-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ink mb-4">Quick Links</h2>
              <p className="text-xl text-ink-muted">Common actions and resources</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-medium transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-brand/10 rounded-full flex items-center justify-center">
                    <HelpCircle className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="text-lg font-semibold text-ink mb-2">Become a Foster</h3>
                  <p className="text-ink-muted text-sm mb-4">
                    Ready to open your heart and home to a pet in need?
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/apply-to-foster">Apply Now</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-medium transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                    <HelpCircle className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-ink mb-2">View Available Pets</h3>
                  <p className="text-ink-muted text-sm mb-4">
                    See pets currently in need of foster homes.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/adoptables">Browse Pets</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-medium transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-warn/10 rounded-full flex items-center justify-center">
                    <HelpCircle className="h-6 w-6 text-warn" />
                  </div>
                  <h3 className="text-lg font-semibold text-ink mb-2">Make a Donation</h3>
                  <p className="text-ink-muted text-sm mb-4">
                    Support our mission with a tax-deductible donation.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/donate">Donate Now</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-brand text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold">Still Have Questions?</h2>
            <p className="text-xl opacity-90">
              Our team is here to help! Contact us with any questions about fostering, 
              donations, or how you can get involved in saving lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="xl" className="text-lg">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="text-lg border-white text-white hover:bg-white hover:text-brand">
                <Link href={`mailto:${SITE_CONFIG.contactEmail}`}>Email Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

