"use client";

import { useState, useEffect } from "react";
import { X, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if popup should be shown
    const checkPopupStatus = () => {
      const suppressedUntil = localStorage.getItem('kpa_newsletter_suppressed_until');
      const now = Date.now();
      
      if (suppressedUntil && parseInt(suppressedUntil) > now) {
        return; // Still suppressed
      }

      // Show popup after 8 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 8000);

      return () => clearTimeout(timer);
    };

    // Also show on scroll (50% of page)
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent >= 50 && !isOpen) {
        const suppressedUntil = localStorage.getItem('kpa_newsletter_suppressed_until');
        const now = Date.now();
        
        if (!suppressedUntil || parseInt(suppressedUntil) <= now) {
          setIsOpen(true);
        }
      }
    };

    const timer = checkPopupStatus();
    window.addEventListener('scroll', handleScroll);

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    // Suppress for 30 days
    const suppressUntil = Date.now() + (30 * 24 * 60 * 60 * 1000);
    localStorage.setItem('kpa_newsletter_suppressed_until', suppressUntil.toString());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // TODO: Replace with actual newsletter signup API
      console.log('Newsletter signup:', email);
      
      setIsSubmitted(true);
      
      // Close popup after 3 seconds
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (error) {
      console.error('Newsletter signup error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className="relative w-full max-w-md mx-4 bg-white rounded-2xl shadow-strong">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-ink-muted hover:text-ink transition-colors"
          aria-label="Close newsletter popup"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-8">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-brand/10 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-brand" />
                </div>
                <h2 className="text-2xl font-bold text-ink mb-2">
                  🐾 Join our pack!
                </h2>
                <p className="text-ink-muted">
                  Get weekly rescue stories & ways to help.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-ink-muted" />
                    <Input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      required
                      autoFocus
                    />
                  </div>
                </div>

                <div className="flex items-start gap-2 text-sm text-ink-muted">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    className="mt-0.5 rounded border-gray-300 text-brand focus:ring-brand"
                  />
                  <label htmlFor="consent" className="leading-relaxed">
                    I agree to receive emails from Keep Pets Alive. I can unsubscribe at any time.
                  </label>
                </div>

                <div className="flex gap-3">
                  <Button
                    type="submit"
                    disabled={!email || isSubmitting}
                    className="flex-1"
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleClose}
                    className="px-6"
                  >
                    No thanks
                  </Button>
                </div>
              </form>

              <p className="text-xs text-ink-muted text-center mt-4">
                No spam, just love. Unsubscribe anytime.
              </p>
            </>
          ) : (
            /* Success State */
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-ink mb-2">
                Welcome to the pack! 🎉
              </h2>
              <p className="text-ink-muted">
                Thank you for subscribing! Check your email for a welcome message.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}



