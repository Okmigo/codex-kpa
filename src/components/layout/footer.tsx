import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-orange-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/kpa.png"
                alt="Keep Pets Alive"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Connecting foster families with rescue pets in need. Together, we can save lives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/why-foster" className="text-gray-600 hover:text-orange-600 text-sm transition-colors">
                  Why Foster
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-gray-600 hover:text-orange-600 text-sm transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/rescues" className="text-gray-600 hover:text-orange-600 text-sm transition-colors">
                  Our Rescues
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/apply-to-foster" className="text-gray-600 hover:text-orange-600 text-sm transition-colors">
                  Become a Foster
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-600 hover:text-orange-600 text-sm transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/trivia" className="text-gray-600 hover:text-orange-600 text-sm transition-colors">
                  Weekly Wag Trivia
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-orange-600 text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Stay Connected</h3>
            <p className="text-gray-600 text-sm mb-4">
              Get weekly rescue stories and ways to help.
            </p>
            
            {/* Newsletter Form */}
            <form className="mb-6">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-md hover:bg-orange-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="text-gray-600 hover:text-orange-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600 text-sm">
              <p>© {currentYear} Keep Pets Alive. All rights reserved.</p>
              <p className="mt-1">
                A 501(c)(3) nonprofit organization. Tax ID: 12-3456789
              </p>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-600 hover:text-orange-600 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-orange-600 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
