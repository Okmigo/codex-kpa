import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-brand/5 to-accent/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-ink mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-ink-muted leading-relaxed mb-8">
              Please read these terms carefully before using our services. By using our website and services, you agree to these terms.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-ink-muted">
              <FileText className="h-4 w-4" />
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
                  <CardTitle>Acceptance of Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-ink-muted">
                    By accessing and using the Keep Pets Alive website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Description of Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-ink-muted">
                    Keep Pets Alive is a nonprofit organization that connects foster families with rescue pets in need. Our services include:
                  </p>
                  <ul className="list-disc list-inside text-ink-muted space-y-2 mt-4">
                    <li>Facilitating foster applications and placements</li>
                    <li>Providing information about available pets</li>
                    <li>Connecting users with rescue organizations</li>
                    <li>Processing donations</li>
                    <li>Providing educational resources about pet fostering</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Responsibilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-ink-muted mb-4">
                    As a user of our services, you agree to:
                  </p>
                  <ul className="list-disc list-inside text-ink-muted space-y-2">
                    <li>Provide accurate and complete information in applications</li>
                    <li>Use our services only for lawful purposes</li>
                    <li>Respect the privacy and rights of other users</li>
                    <li>Not attempt to gain unauthorized access to our systems</li>
                    <li>Not use our services to harass or harm others</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Foster Program Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-ink-muted mb-4">
                    When participating in our foster program:
                  </p>
                  <ul className="list-disc list-inside text-ink-muted space-y-2">
                    <li>Foster placements are temporary and subject to rescue organization approval</li>
                    <li>Foster families must follow the guidelines of the rescue organization</li>
                    <li>Keep Pets Alive facilitates connections but is not responsible for foster arrangements</li>
                    <li>Rescue organizations retain full responsibility for pet care and medical decisions</li>
                    <li>Foster families may be subject to background checks and home visits</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Donations and Refunds</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-ink-muted mb-4">
                    Regarding donations:
                  </p>
                  <ul className="list-disc list-inside text-ink-muted space-y-2">
                    <li>All donations are voluntary and non-refundable</li>
                    <li>Donations are used to support our mission as described on our website</li>
                    <li>Tax receipts will be provided for qualifying donations</li>
                    <li>Monthly donations can be cancelled at any time</li>
                    <li>We reserve the right to refuse donations that conflict with our mission</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Intellectual Property</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-ink-muted">
                    The content on this website, including text, graphics, logos, images, and software, is the property of Keep Pets Alive or its content suppliers and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Limitation of Liability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-ink-muted">
                    Keep Pets Alive shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, even if we have been advised of the possibility of such damages. Our total liability shall not exceed the amount paid by you for our services.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Indemnification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-ink-muted">
                    You agree to indemnify and hold harmless Keep Pets Alive, its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of our services or violation of these terms.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Termination</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-ink-muted">
                    We reserve the right to terminate or suspend your access to our services at any time, with or without notice, for any reason, including violation of these terms. Upon termination, your right to use our services will cease immediately.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Governing Law</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-ink-muted">
                    These terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved in the courts of California.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Changes to Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-ink-muted">
                    We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on this page and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the new terms.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-ink-muted mb-4">
                    If you have any questions about these terms, please contact us:
                  </p>
                  <div className="text-ink-muted space-y-1">
                    <p>Email: legal@keeppetsalive.org</p>
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



