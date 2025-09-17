"use client";

import { useState } from "react";
import { Heart, Shield, CheckCircle, DollarSign, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DONATION_AMOUNTS, SITE_CONFIG } from "@/lib/constants";

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const getFinalAmount = () => {
    if (selectedAmount) return selectedAmount;
    if (customAmount) return parseFloat(customAmount) || 0;
    return 0;
  };

  const handleDonate = () => {
    const amount = getFinalAmount();
    if (amount > 0) {
      // TODO: Integrate with payment processor (Stripe, PayPal, etc.)
      console.log(`Donating $${amount} ${isMonthly ? 'monthly' : 'one-time'}`);
      alert(`Thank you! This would process a $${amount} ${isMonthly ? 'monthly' : 'one-time'} donation. Payment integration coming soon!`);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-brand/5 to-accent/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-ink mb-6">
              Support Our Mission
            </h1>
            <p className="text-xl text-ink-muted leading-relaxed mb-8">
              Your donation helps us connect foster families with rescue pets in need. 
              Every dollar makes a difference in saving lives and creating happy endings.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-ink-muted">
              <Shield className="h-4 w-4" />
              <span>Tax-deductible donations • 501(c)(3) nonprofit</span>
            </div>
          </div>
        </div>
      </section>

      {/* Where Funds Go */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ink mb-4">Where Your Donation Goes</h2>
              <p className="text-xl text-ink-muted">Transparency in how we use your support</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center">
                      <Heart className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="text-xl font-semibold text-ink">Direct Pet Care</h3>
                  </div>
                  <p className="text-ink-muted">
                    Medical care, food, supplies, and emergency treatment for pets in foster care.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-ink">Foster Support</h3>
                  </div>
                  <p className="text-ink-muted">
                    Training, resources, and support for foster families to ensure successful placements.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-warn/10 rounded-lg flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-warn" />
                    </div>
                    <h3 className="text-xl font-semibold text-ink">Rescue Partnerships</h3>
                  </div>
                  <p className="text-ink-muted">
                    Supporting our network of rescue organizations with resources and funding.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="text-xl font-semibold text-ink">Program Development</h3>
                  </div>
                  <p className="text-ink-muted">
                    Expanding our reach, improving our platform, and developing new programs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-bg-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Make a Donation</CardTitle>
                <CardDescription className="text-center">
                  Choose an amount and help us save more lives
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Monthly Toggle */}
                <div className="flex items-center justify-center gap-4 p-4 bg-white rounded-lg border">
                  <span className={`text-sm font-medium ${!isMonthly ? 'text-ink' : 'text-ink-muted'}`}>
                    One-time
                  </span>
                  <button
                    onClick={() => setIsMonthly(!isMonthly)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      isMonthly ? 'bg-brand' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        isMonthly ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                  <span className={`text-sm font-medium ${isMonthly ? 'text-ink' : 'text-ink-muted'}`}>
                    Monthly
                  </span>
                  {isMonthly && (
                    <Badge variant="accent" className="ml-2">
                      Save 20%
                    </Badge>
                  )}
                </div>

                {/* Amount Selection */}
                <div>
                  <h3 className="text-lg font-semibold text-ink mb-4">Select Amount</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                    {DONATION_AMOUNTS.map((option) => (
                      <button
                        key={option.amount}
                        onClick={() => handleAmountSelect(option.amount)}
                        className={`p-4 rounded-lg border-2 text-center transition-colors ${
                          selectedAmount === option.amount
                            ? 'border-brand bg-brand/5 text-brand'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="text-xl font-bold">${option.amount}</div>
                        <div className="text-xs text-ink-muted mt-1">
                          {option.description}
                        </div>
                      </button>
                    ))}
                  </div>
                  
                  {/* Custom Amount */}
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-ink mb-2">
                      Custom Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ink-muted">
                        $
                      </span>
                      <input
                        type="number"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={(e) => handleCustomAmount(e.target.value)}
                        className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Donation Summary */}
                {getFinalAmount() > 0 && (
                  <div className="p-4 bg-white rounded-lg border">
                    <div className="flex justify-between items-center">
                      <span className="text-ink">Donation Amount:</span>
                      <span className="text-xl font-bold text-brand">
                        ${getFinalAmount()}
                        {isMonthly && <span className="text-sm text-ink-muted">/month</span>}
                      </span>
                    </div>
                    {isMonthly && (
                      <div className="text-sm text-ink-muted mt-1">
                        Annual total: ${(getFinalAmount() * 12).toLocaleString()}
                      </div>
                    )}
                  </div>
                )}

                {/* Donate Button */}
                <Button
                  onClick={handleDonate}
                  disabled={getFinalAmount() <= 0}
                  className="w-full"
                  size="lg"
                >
                  {getFinalAmount() > 0 ? (
                    <>
                      Donate ${getFinalAmount()}
                      {isMonthly && " monthly"}
                    </>
                  ) : (
                    "Select an amount to continue"
                  )}
                </Button>

                {/* Trust Badges */}
                <div className="flex items-center justify-center gap-6 text-sm text-ink-muted">
                  <div className="flex items-center gap-1">
                    <Shield className="h-4 w-4" />
                    <span>Secure</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4" />
                    <span>Tax-deductible</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    <span>501(c)(3)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ink mb-4">Donation FAQ</h2>
              <p className="text-xl text-ink-muted">Common questions about donating</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-ink mb-2">Is my donation tax-deductible?</h3>
                  <p className="text-ink-muted">
                    Yes! Keep Pets Alive is a 501(c)(3) nonprofit organization. All donations are tax-deductible to the full extent allowed by law.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-ink mb-2">How do I get a receipt?</h3>
                  <p className="text-ink-muted">
                    You'll receive an email receipt immediately after your donation. We can also provide additional documentation for tax purposes.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-ink mb-2">Can I cancel my monthly donation?</h3>
                  <p className="text-ink-muted">
                    Absolutely! You can cancel or modify your monthly donation at any time by contacting us or through your account settings.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-ink mb-2">What payment methods do you accept?</h3>
                  <p className="text-ink-muted">
                    We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-bg-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-ink">Questions About Donating?</h2>
            <p className="text-xl text-ink-muted">
              We're here to help! Contact us with any questions about donations, tax receipts, or how your money is used.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="xl" className="text-lg">
                <a href={`mailto:${SITE_CONFIG.donationsEmail}`}>
                  Email Donations Team
                </a>
              </Button>
              <Button asChild size="xl" className="text-lg">
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

