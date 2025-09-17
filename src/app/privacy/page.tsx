import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-brand/5 to-accent/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-ink mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-ink-muted leading-relaxed mb-8">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-ink-muted">
              <Shield className="h-4 w-4" />
              <span>Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Button asChild variant="outline">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Information We Collect</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-ink-muted mb-4">
                    We collect information you provide directly to us, such as when you:
                  </p>
                  <ul className="list-disc list-inside text-ink-muted space-y-2">
                    <li>Fill out a foster application</li>
                    <li>Make a donation</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Contact us through our website</li>
                    <li>Participate in our programs</li>
                  </ul>
                  <p className="text-ink-muted mt-4">
                    This information may include your name, email address, phone number, 
                    mailing address, and other information you choose to provide.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How We Use Your Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-ink-muted mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-ink-muted space-y-2">
                    <li>Process foster applications and connect you with rescue organizations</li>
                    <li>Process donations and provide tax receipts</li>
                    <li>Send you newsletters and updates about our programs</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Information Sharing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-ink-muted mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties, except:
                  </p>
                  <ul className="list-disc list-inside text-ink-muted space-y-2">
                    <li>With rescue organizations when you apply to foster (with your consent)</li>
                    <li>With service providers who assist us in operating our website and conducting our business</li>
                    <li>When required by law or to protect our rights</li>
                    <li>In connection with a merger, acquisition, or sale of assets</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-ink-muted">
                    We implement appropriate security measures to protect your personal information against 
                    unauthorized access, alteration, disclosure, or destruction. However, no method of 
                    transmission over the internet or electronic storage is 100% secure.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cookies and Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-ink-muted">
                    We use cookies and similar tracking technologies to enhance your experience on our website. 
                    You can control cookie settings through your browser preferences. We also use analytics 
                    services to understand how visitors use our site.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Your Rights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-ink-muted mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside text-ink-muted space-y-2">
                    <li>Access and update your personal information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt out of marketing communications</li>
                    <li>Request a copy of your data</li>
                    <li>Withdraw consent for data processing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Children's Privacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-ink-muted">
                    Our services are not directed to children under 13. We do not knowingly collect 
                    personal information from children under 13. If you believe we have collected 
                    information from a child under 13, please contact us immediately.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Changes to This Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-ink-muted">
                    We may update this privacy policy from time to time. We will notify you of any 
                    changes by posting the new policy on this page and updating the "Last updated" date. 
                    We encourage you to review this policy periodically.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-ink-muted mb-4">
                    If you have any questions about this privacy policy or our data practices, please contact us:
                  </p>
                  <div className="text-ink-muted space-y-1">
                    <p>Email: privacy@keeppetsalive.org</p>
                    <p>Phone: (555) 123-4567</p>
                    <p>Address: 123 Pet Rescue Way, San Francisco, CA 94102</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



