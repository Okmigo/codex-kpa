export const SITE_CONFIG = {
  name: "Keep Pets Alive",
  description: "Connecting foster families with rescue pets in need",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  contactEmail: "infokpacfl@gmail.com",
  donationsEmail: "donations@keeppetsalive.org",
  partnershipsEmail: "partnerships@keeppetsalive.org",
  phone: "(407) 555-0123",
  address: {
    street: "123 Pet Rescue Way",
    city: "Orlando",
    state: "FL",
    zip: "32801"
  },
  social: {
    facebook: "https://facebook.com/keeppetsalive",
    instagram: "https://instagram.com/keeppetsalive",
    twitter: "https://twitter.com/keeppetsalive",
  },
} as const;

export const NAVIGATION = [
  { name: "Home", href: "/" },
  { name: "Why Foster?", href: "/why-foster" },
  { name: "Apply to Foster", href: "/apply-to-foster" },
  { name: "Foster Stories", href: "/success-stories" },
  { name: "Rescue Partners", href: "/rescues" },
  { name: "Resources", href: "/resources" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
] as const;

export const DONATION_AMOUNTS = [
  { amount: 25, description: "Covers food for one pet for a week" },
  { amount: 50, description: "Pays for a vet checkup" },
  { amount: 100, description: "Covers spay/neuter surgery" },
  { amount: 250, description: "Pays for emergency medical care" },
  { amount: 500, description: "Supports a foster family for a month" },
] as const;

export const IMPACT_STATS = {
  petsSaved: 1247,
  fosterFamilies: 89,
  rescuePartners: 23,
} as const;

export const TRIVIA_CONFIG = {
  passingScore: 3,
  totalQuestions: 5,
  mascot: {
    breed: "Golden Retriever",
    lottieFile: "/lottie/golden-retriever.json",
  },
} as const;
