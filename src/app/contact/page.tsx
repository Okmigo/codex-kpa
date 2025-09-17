"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SITE_CONFIG } from "@/lib/constants";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  topic: z.string().min(1, "Please select a topic"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const topics = [
  "General Question",
  "Fostering Information",
  "Donation Question",
  "Partnership Inquiry",
  "Technical Support",
  "Other"
];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      topic: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactForm) => {
    // Simulate form submission
    console.log("Contact form submitted:", data);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand/5 to-accent/5 flex items-center justify-center py-20">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="text-center py-12">
            <div className="w-20 h-20 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-accent" />
            </div>
            <h1 className="text-3xl font-bold text-ink mb-4">Message Sent!</h1>
            <p className="text-xl text-ink-muted mb-6">
              Thank you for contacting us. We'll get back to you within 24 hours.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>
              Send Another Message
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-brand/5 to-accent/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-ink mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-ink-muted leading-relaxed mb-8">
              Have questions about fostering, donations, or our programs? We're here to help! 
              Reach out to us and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-ink mb-2">Name *</label>
                          <Input {...register("name")} />
                          {errors.name && (
                            <p className="text-sm text-warn mt-1">{errors.name.message}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-ink mb-2">Email *</label>
                          <Input type="email" {...register("email")} />
                          {errors.email && (
                            <p className="text-sm text-warn mt-1">{errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ink mb-2">Topic *</label>
                        <select
                          {...register("topic")}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                        >
                          <option value="">Select a topic...</option>
                          {topics.map((topic) => (
                            <option key={topic} value={topic}>
                              {topic}
                            </option>
                          ))}
                        </select>
                        {errors.topic && (
                          <p className="text-sm text-warn mt-1">{errors.topic.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ink mb-2">Message *</label>
                        <Textarea
                          rows={6}
                          placeholder="Tell us how we can help you..."
                          {...register("message")}
                        />
                        {errors.message && (
                          <p className="text-sm text-warn mt-1">{errors.message.message}</p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full"
                        size="lg"
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Get in Touch</CardTitle>
                    <CardDescription>
                      Multiple ways to reach our team
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-brand" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-ink mb-1">Email</h3>
                        <p className="text-ink-muted mb-2">Send us an email anytime</p>
                        <a 
                          href={`mailto:${SITE_CONFIG.contactEmail}`}
                          className="text-brand hover:text-brand-hover transition-colors"
                        >
                          {SITE_CONFIG.contactEmail}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-ink mb-1">Phone</h3>
                        <p className="text-ink-muted mb-2">Call us during business hours</p>
                        <a 
                          href={`tel:${SITE_CONFIG.phone}`}
                          className="text-brand hover:text-brand-hover transition-colors"
                        >
                          {SITE_CONFIG.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-warn/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-warn" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-ink mb-1">Office</h3>
                        <p className="text-ink-muted mb-2">Visit us in person</p>
                        <address className="text-ink not-italic">
                          {SITE_CONFIG.address.street}<br />
                          {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}
                        </address>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card>
                  <CardHeader>
                    <CardTitle>Business Hours</CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-ink-muted">Monday - Friday</span>
                        <span className="text-ink">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-ink-muted">Saturday</span>
                        <span className="text-ink">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-ink-muted">Sunday</span>
                        <span className="text-ink">Closed</span>
                      </div>
                    </div>
                    <p className="text-xs text-ink-muted mt-4">
                      * Emergency foster situations are handled 24/7
                    </p>
                  </CardContent>
                </Card>

                {/* Quick Links */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Links</CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      <a 
                        href="/apply-to-foster"
                        className="block text-brand hover:text-brand-hover transition-colors"
                      >
                        Become a Foster Parent
                      </a>
                      <a 
                        href="/donate"
                        className="block text-brand hover:text-brand-hover transition-colors"
                      >
                        Make a Donation
                      </a>
                      <a 
                        href="/faq"
                        className="block text-brand hover:text-brand-hover transition-colors"
                      >
                        View FAQ
                      </a>
                      <a 
                        href="/adoptables"
                        className="block text-brand hover:text-brand-hover transition-colors"
                      >
                        Browse Available Pets
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-bg-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-ink mb-4">Find Us</h2>
              <p className="text-xl text-ink-muted">Visit our office in Orlando, Florida</p>
            </div>
            
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-brand/20 to-accent/20 flex items-center justify-center rounded-lg">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-soft">
                      <MapPin className="h-8 w-8 text-brand" />
                    </div>
                    <p className="text-ink-muted">Interactive map will go here</p>
                    <p className="text-sm text-ink-muted">{SITE_CONFIG.address.street}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

