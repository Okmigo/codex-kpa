"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NAVIGATION } from "@/lib/constants";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // When on home and not scrolled = transparent over hero
  const headerBase =
    "sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:backdrop-blur";
  const headerColor = isHome && !scrolled
    ? "bg-transparent border-transparent"
    : "bg-white/95 border-b border-gray-200";

  const linkBase = "text-sm font-medium transition-colors";
  const linkColor = isHome && !scrolled
    ? "text-white hover:text-orange-200"
    : "text-gray-600 hover:text-orange-600";

  return (
    <header className={cn(headerBase, headerColor)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/kpa.png"
              alt="Keep Pets Alive"
              width={40}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(linkBase, linkColor, pathname === item.href && (isHome && !scrolled ? "text-orange-200" : "text-orange-600"))}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant={isHome && !scrolled ? "secondary" : "default"}>
              <Link href="/donate">Donate</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant={isHome && !scrolled ? "secondary" : "outline"}
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className={cn(
              "px-2 pt-2 pb-3 space-y-1 border-t",
              isHome && !scrolled ? "border-white/30" : "border-gray-200"
            )}>
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 text-base font-medium",
                    isHome && !scrolled ? "text-white hover:text-orange-200" : "text-gray-600 hover:text-orange-600"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button asChild variant={isHome && !scrolled ? "secondary" : "default"} className="w-full">
                  <Link href="/donate">Donate</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}