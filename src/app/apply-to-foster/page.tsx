"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ChevronLeft, ChevronRight, Check, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import adoptablesData from "@/data/adoptables.json";

// Form schemas
const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  address: z.string().min(5, "Please enter your full address"),
  city: z.string().min(2, "Please enter your city"),
  state: z.string().min(2, "Please enter your state"),
  zipCode: z.string().min(5, "Please enter a valid ZIP code"),
});

const householdSchema = z.object({
  householdSize: z.string().min(1, "Please select household size"),
  children: z.string().min(1, "Please specify if you have children"),
  childrenAges: z.string().optional(),
  otherPets: z.string().min(1, "Please specify if you have other pets"),
  otherPetsDetails: z.string().optional(),
  petExperience: z.string().min(1, "Please describe your pet experience"),
  homeType: z.string().min(1, "Please select your home type"),
  yardAccess: z.string().min(1, "Please specify yard access"),
  landlordApproval: z.string().min(1, "Please specify landlord approval"),
});

const preferencesSchema = z.object({
  petTypes: z.array(z.string()).min(1, "Please select at least one pet type"),
  petSizes: z.array(z.string()).min(1, "Please select at least one pet size"),
  specialNeeds: z.string().min(1, "Please specify if you can handle special needs"),
  timeCommitment: z.string().min(1, "Please specify your time commitment"),
  availability: z.string().min(10, "Please describe your availability"),
  additionalInfo: z.string().optional(),
});

type ContactForm = z.infer<typeof contactSchema>;
type HouseholdForm = z.infer<typeof householdSchema>;
type PreferencesForm = z.infer<typeof preferencesSchema>;

const steps = [
  { id: 1, title: "Contact & Location", description: "Basic information" },
  { id: 2, title: "Household & Experience", description: "Your home and experience" },
  { id: 3, title: "Preferences & Availability", description: "What you're looking for" },
  { id: 4, title: "Review & Submit", description: "Final review" },
];

function ApplyToFosterContent() {
  const searchParams = useSearchParams();
  const petId = searchParams.get("petId");
  const selectedPet = petId ? adoptablesData.find(pet => pet.id === petId) : null;

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactForm = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
    },
  });

  const householdForm = useForm<HouseholdForm>({
    resolver: zodResolver(householdSchema),
    defaultValues: {
      householdSize: "",
      children: "",
      childrenAges: "",
      otherPets: "",
      otherPetsDetails: "",
      petExperience: "",
      homeType: "",
      yardAccess: "",
      landlordApproval: "",
    },
  });

  const preferencesForm = useForm<PreferencesForm>({
    resolver: zodResolver(preferencesSchema),
    defaultValues: {
      petTypes: [],
      petSizes: [],
      specialNeeds: "",
      timeCommitment: "",
      availability: "",
      additionalInfo: "",
    },
  });

  const nextStep = async () => {
    let isValid = false;
    
    if (currentStep === 1) {
      isValid = await contactForm.trigger();
    } else if (currentStep === 2) {
      isValid = await householdForm.trigger();
    } else if (currentStep === 3) {
      isValid = await preferencesForm.trigger();
    }

    if (isValid && currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: any) => {
    // Simulate form submission
    console.log("Form submitted:", {
      contact: contactForm.getValues(),
      household: householdForm.getValues(),
      preferences: preferencesForm.getValues(),
      selectedPet,
    });
    
    setIsSubmitted(true);
  };

  const toggleArrayValue = (field: any, value: string) => {
    const currentValues = field.value || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v: string) => v !== value)
      : [...currentValues, value];
    field.onChange(newValues);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand/5 to-accent/5 flex items-center justify-center py-20">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="text-center py-12">
            <div className="w-20 h-20 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
              <Check className="h-10 w-10 text-accent" />
            </div>
            <h1 className="text-3xl font-bold text-ink mb-4">Application Submitted!</h1>
            <p className="text-xl text-ink-muted mb-6">
              Thank you for your interest in fostering. We'll review your application and contact you within 2-3 business days.
            </p>
            <div className="space-y-4">
              <p className="text-ink">
                <strong>What happens next?</strong>
              </p>
              <ul className="text-left text-ink-muted space-y-2 max-w-md mx-auto">
                <li>• We'll review your application</li>
                <li>• A rescue partner will contact you</li>
                <li>• You'll discuss available pets and preferences</li>
                <li>• You'll be matched with your first foster pet!</li>
              </ul>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href="/">Return Home</a>
              </Button>
              <Button asChild variant="outline">
                <a href="/adoptables">View Available Pets</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand/5 to-accent/5 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-ink mb-4">Foster Application</h1>
            <p className="text-xl text-ink-muted">
              Help us match you with the perfect foster pet
            </p>
            {selectedPet && (
              <div className="mt-6 inline-flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-soft">
                <Heart className="h-4 w-4 text-brand" />
                <span className="text-sm text-ink">Applying to foster <strong>{selectedPet.name}</strong></span>
              </div>
            )}
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep >= step.id
                        ? "bg-brand text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {currentStep > step.id ? <Check className="h-4 w-4" /> : step.id}
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <p className="text-sm font-medium text-ink">{step.title}</p>
                    <p className="text-xs text-ink-muted">{step.description}</p>
                  </div>
                  {step.id < steps.length && (
                    <div
                      className={`hidden sm:block w-16 h-0.5 mx-4 ${
                        currentStep > step.id ? "bg-brand" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Steps */}
          <Card>
            <CardContent className="p-8">
              {/* Step 1: Contact & Location */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-ink mb-2">Contact Information</h2>
                    <p className="text-ink-muted">Tell us how to reach you</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-ink mb-2">First Name *</label>
                      <Input {...contactForm.register("firstName")} />
                      {contactForm.formState.errors.firstName && (
                        <p className="text-sm text-warn mt-1">{contactForm.formState.errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink mb-2">Last Name *</label>
                      <Input {...contactForm.register("lastName")} />
                      {contactForm.formState.errors.lastName && (
                        <p className="text-sm text-warn mt-1">{contactForm.formState.errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-ink mb-2">Email *</label>
                      <Input type="email" {...contactForm.register("email")} />
                      {contactForm.formState.errors.email && (
                        <p className="text-sm text-warn mt-1">{contactForm.formState.errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink mb-2">Phone *</label>
                      <Input type="tel" {...contactForm.register("phone")} />
                      {contactForm.formState.errors.phone && (
                        <p className="text-sm text-warn mt-1">{contactForm.formState.errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-ink mb-2">Address *</label>
                    <Input {...contactForm.register("address")} />
                    {contactForm.formState.errors.address && (
                      <p className="text-sm text-warn mt-1">{contactForm.formState.errors.address.message}</p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-ink mb-2">City *</label>
                      <Input {...contactForm.register("city")} />
                      {contactForm.formState.errors.city && (
                        <p className="text-sm text-warn mt-1">{contactForm.formState.errors.city.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink mb-2">State *</label>
                      <Input {...contactForm.register("state")} />
                      {contactForm.formState.errors.state && (
                        <p className="text-sm text-warn mt-1">{contactForm.formState.errors.state.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink mb-2">ZIP Code *</label>
                      <Input {...contactForm.register("zipCode")} />
                      {contactForm.formState.errors.zipCode && (
                        <p className="text-sm text-warn mt-1">{contactForm.formState.errors.zipCode.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Household & Experience */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-ink mb-2">Household & Experience</h2>
                    <p className="text-ink-muted">Tell us about your home and experience with pets</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-ink mb-2">Household Size *</label>
                      <select {...householdForm.register("householdSize")} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand">
                        <option value="">Select...</option>
                        <option value="1">Just me</option>
                        <option value="2">2 people</option>
                        <option value="3">3 people</option>
                        <option value="4">4 people</option>
                        <option value="5+">5+ people</option>
                      </select>
                      {householdForm.formState.errors.householdSize && (
                        <p className="text-sm text-warn mt-1">{householdForm.formState.errors.householdSize.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink mb-2">Do you have children? *</label>
                      <select {...householdForm.register("children")} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand">
                        <option value="">Select...</option>
                        <option value="no">No children</option>
                        <option value="yes">Yes, I have children</option>
                      </select>
                      {householdForm.formState.errors.children && (
                        <p className="text-sm text-warn mt-1">{householdForm.formState.errors.children.message}</p>
                      )}
                    </div>
                  </div>

                  {householdForm.watch("children") === "yes" && (
                    <div>
                      <label className="block text-sm font-medium text-ink mb-2">Children's Ages</label>
                      <Input placeholder="e.g., 8 and 12 years old" {...householdForm.register("childrenAges")} />
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-ink mb-2">Do you have other pets? *</label>
                      <select {...householdForm.register("otherPets")} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand">
                        <option value="">Select...</option>
                        <option value="no">No other pets</option>
                        <option value="yes">Yes, I have other pets</option>
                      </select>
                      {householdForm.formState.errors.otherPets && (
                        <p className="text-sm text-warn mt-1">{householdForm.formState.errors.otherPets.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink mb-2">Home Type *</label>
                      <select {...householdForm.register("homeType")} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand">
                        <option value="">Select...</option>
                        <option value="house">House</option>
                        <option value="apartment">Apartment</option>
                        <option value="condo">Condo</option>
                        <option value="townhouse">Townhouse</option>
                      </select>
                      {householdForm.formState.errors.homeType && (
                        <p className="text-sm text-warn mt-1">{householdForm.formState.errors.homeType.message}</p>
                      )}
                    </div>
                  </div>

                  {householdForm.watch("otherPets") === "yes" && (
                    <div>
                      <label className="block text-sm font-medium text-ink mb-2">Other Pets Details</label>
                      <Textarea placeholder="e.g., 2 cats, 1 dog, all spayed/neutered" {...householdForm.register("otherPetsDetails")} />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-ink mb-2">Pet Experience *</label>
                    <Textarea placeholder="Describe your experience with pets, including any training or medical care experience" {...householdForm.register("petExperience")} />
                    {householdForm.formState.errors.petExperience && (
                      <p className="text-sm text-warn mt-1">{householdForm.formState.errors.petExperience.message}</p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-ink mb-2">Yard Access *</label>
                      <select {...householdForm.register("yardAccess")} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand">
                        <option value="">Select...</option>
                        <option value="fenced">Fenced yard</option>
                        <option value="unfenced">Unfenced yard</option>
                        <option value="none">No yard access</option>
                      </select>
                      {householdForm.formState.errors.yardAccess && (
                        <p className="text-sm text-warn mt-1">{householdForm.formState.errors.yardAccess.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink mb-2">Landlord Approval *</label>
                      <select {...householdForm.register("landlordApproval")} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand">
                        <option value="">Select...</option>
                        <option value="owned">I own my home</option>
                        <option value="approved">Landlord approved</option>
                        <option value="pending">Need to check with landlord</option>
                      </select>
                      {householdForm.formState.errors.landlordApproval && (
                        <p className="text-sm text-warn mt-1">{householdForm.formState.errors.landlordApproval.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Preferences & Availability */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-ink mb-2">Preferences & Availability</h2>
                    <p className="text-ink-muted">Help us match you with the right pets</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-ink mb-2">Pet Types *</label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Dogs", "Cats", "Small Animals", "Birds"].map((type) => (
                        <label key={type} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={preferencesForm.watch("petTypes").includes(type)}
                            onChange={() => toggleArrayValue(preferencesForm.register("petTypes"), type)}
                            className="rounded border-gray-300 text-brand focus:ring-brand"
                          />
                          <span className="text-sm text-ink">{type}</span>
                        </label>
                      ))}
                    </div>
                    {preferencesForm.formState.errors.petTypes && (
                      <p className="text-sm text-warn mt-1">{preferencesForm.formState.errors.petTypes.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-ink mb-2">Pet Sizes *</label>
                    <div className="grid grid-cols-3 gap-2">
                      {["Small", "Medium", "Large"].map((size) => (
                        <label key={size} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={preferencesForm.watch("petSizes").includes(size)}
                            onChange={() => toggleArrayValue(preferencesForm.register("petSizes"), size)}
                            className="rounded border-gray-300 text-brand focus:ring-brand"
                          />
                          <span className="text-sm text-ink">{size}</span>
                        </label>
                      ))}
                    </div>
                    {preferencesForm.formState.errors.petSizes && (
                      <p className="text-sm text-warn mt-1">{preferencesForm.formState.errors.petSizes.message}</p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-ink mb-2">Special Needs *</label>
                      <select {...preferencesForm.register("specialNeeds")} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand">
                        <option value="">Select...</option>
                        <option value="yes">Yes, I can handle special needs</option>
                        <option value="limited">Limited special needs only</option>
                        <option value="no">No special needs</option>
                      </select>
                      {preferencesForm.formState.errors.specialNeeds && (
                        <p className="text-sm text-warn mt-1">{preferencesForm.formState.errors.specialNeeds.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink mb-2">Time Commitment *</label>
                      <select {...preferencesForm.register("timeCommitment")} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand">
                        <option value="">Select...</option>
                        <option value="1-2 weeks">1-2 weeks</option>
                        <option value="2-4 weeks">2-4 weeks</option>
                        <option value="1-2 months">1-2 months</option>
                        <option value="2+ months">2+ months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                      {preferencesForm.formState.errors.timeCommitment && (
                        <p className="text-sm text-warn mt-1">{preferencesForm.formState.errors.timeCommitment.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-ink mb-2">Availability *</label>
                    <Textarea placeholder="Describe your daily schedule, work hours, and when you're available to care for pets" {...preferencesForm.register("availability")} />
                    {preferencesForm.formState.errors.availability && (
                      <p className="text-sm text-warn mt-1">{preferencesForm.formState.errors.availability.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-ink mb-2">Additional Information</label>
                    <Textarea placeholder="Anything else you'd like us to know?" {...preferencesForm.register("additionalInfo")} />
                  </div>
                </div>
              )}

              {/* Step 4: Review & Submit */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-ink mb-2">Review Your Application</h2>
                    <p className="text-ink-muted">Please review your information before submitting</p>
                  </div>

                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Contact Information</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p><strong>Name:</strong> {contactForm.getValues("firstName")} {contactForm.getValues("lastName")}</p>
                            <p><strong>Email:</strong> {contactForm.getValues("email")}</p>
                            <p><strong>Phone:</strong> {contactForm.getValues("phone")}</p>
                          </div>
                          <div>
                            <p><strong>Address:</strong> {contactForm.getValues("address")}</p>
                            <p><strong>City, State ZIP:</strong> {contactForm.getValues("city")}, {contactForm.getValues("state")} {contactForm.getValues("zipCode")}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Household & Experience</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p><strong>Household Size:</strong> {householdForm.getValues("householdSize")} people</p>
                            <p><strong>Children:</strong> {householdForm.getValues("children")}</p>
                            <p><strong>Other Pets:</strong> {householdForm.getValues("otherPets")}</p>
                          </div>
                          <div>
                            <p><strong>Home Type:</strong> {householdForm.getValues("homeType")}</p>
                            <p><strong>Yard Access:</strong> {householdForm.getValues("yardAccess")}</p>
                            <p><strong>Landlord Approval:</strong> {householdForm.getValues("landlordApproval")}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Preferences & Availability</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <p><strong>Pet Types:</strong> {preferencesForm.getValues("petTypes").join(", ")}</p>
                          <p><strong>Pet Sizes:</strong> {preferencesForm.getValues("petSizes").join(", ")}</p>
                          <p><strong>Special Needs:</strong> {preferencesForm.getValues("specialNeeds")}</p>
                          <p><strong>Time Commitment:</strong> {preferencesForm.getValues("timeCommitment")}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>

                {currentStep < 4 ? (
                  <Button type="button" onClick={nextStep}>
                    Next
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button type="button" onClick={onSubmit}>
                    Submit Application
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default function ApplyToFoster() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ApplyToFosterContent />
    </Suspense>
  );
}
