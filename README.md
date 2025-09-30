# Keep Pets Alive

A modern, accessible nonprofit website connecting foster families with rescue pets in need. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd keep-pets-alive
   pnpm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your OpenAI API key:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   PLAUSIBLE_DOMAIN=keeppetsalive.org
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (pages)/           # All main pages
│   ├── api/               # API routes
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── layout/           # Layout components
│   ├── ai-chat/          # AI chat widget
│   └── newsletter/       # Newsletter popup
├── data/                 # Sample data files
├── lib/                  # Utilities and constants
└── styles/               # Global styles
```

## 🎨 Design System

### Colors
- **Brand**: `#1E88E5` (Primary blue)
- **Accent**: `#43A047` (Success green)  
- **Warn**: `#E53935` (Error red)
- **Ink**: `#111827` (Text)
- **Muted**: `#475569` (Secondary text)
- **Background**: `#FFFFFF` (White)
- **Subtle**: `#F8FAFC` (Light gray)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## 📱 Features

### Core Pages
- **Home**: Hero, impact stats, featured pets, success stories
- **Why Foster**: Benefits, FAQ, compelling reasons to foster
- **Adoptables**: Filterable pet directory with search
- **Foster Application**: Multi-step form with validation
- **Success Stories**: Gallery with detailed modals
- **Rescues Directory**: Partner organizations with search
- **Donate**: Amount selection, monthly options, transparency
- **FAQ**: Comprehensive Q&A organized by category
- **Contact**: Form, business info, map placeholder
- **Trivia**: Interactive quiz with scoring and sharing
- **Legal**: Privacy Policy and Terms of Service

### Interactive Features
- **AI Chat Widget**: OpenAI-powered assistant for common questions
- **Newsletter Popup**: Smart popup with localStorage suppression
- **Responsive Design**: Mobile-first, accessible design
- **Form Validation**: React Hook Form + Zod validation
- **Search & Filtering**: Real-time search with debouncing
- **Modal System**: Accessible modals with focus management

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Tailwind Typography
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Animations**: Lottie React (for mascot)
- **State**: React hooks + localStorage
- **API**: OpenAI GPT-4o-mini
- **Testing**: Vitest + Playwright (planned)

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | OpenAI API key for chat widget | Yes |
| `NEXT_PUBLIC_SITE_URL` | Site URL for sharing | Yes |
| `PLAUSIBLE_DOMAIN` | Analytics domain | No |

### Customization

#### Brand Colors
Edit `tailwind.config.ts` to update brand colors:
```typescript
colors: {
  brand: {
    DEFAULT: "#1E88E5",    // Your primary color
    hover: "#1976D2",      // Hover state
  },
  // ... other colors
}
```

#### Content Updates
- **Pet Data**: Edit `src/data/adoptables.json`
- **Success Stories**: Edit `src/data/stories.json`  
- **Rescue Partners**: Edit `src/data/rescues.json`
- **Trivia Questions**: Edit `src/data/trivia/questions.json`
- **Site Config**: Edit `src/lib/constants.ts`

#### Weekly Updates
- **Featured Pet**: Update "Last Chance Spotlight" in home page
- **Mascot**: Change `src/data/trivia/mascot.json`
- **Newsletter**: Update popup content in `src/components/newsletter/`

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The app is a standard Next.js application and can be deployed to:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

> **Netlify tip:** if a Netlify build fails with `Host key verification failed` before the build even starts, the problem is with the Git connection. Follow the troubleshooting guide in [docs/netlify.md](docs/netlify.md) to reconnect the repository or deploy manually via the Netlify CLI.

## 🔌 Integration Points

### Payment Processing
The donate page is ready for integration with:
- Stripe
- PayPal
- Donorbox
- Other payment processors

**TODO**: Replace placeholder donation handler in `src/app/donate/page.tsx`

### Newsletter
The newsletter popup is ready for integration with:
- Mailchimp
- ConvertKit
- SendGrid
- Other email services

**TODO**: Replace placeholder signup in `src/components/newsletter/newsletter-popup.tsx`

### Analytics
Ready for integration with:
- Plausible (configured)
- Google Analytics
- Mixpanel
- Other analytics providers

## 🧪 Testing

### Running Tests
```bash
# Unit tests (when implemented)
pnpm test

# E2E tests (when implemented)  
pnpm test:e2e

# Type checking
pnpm type-check

# Linting
pnpm lint
```

### Test Coverage
- Home page rendering
- Form validation
- Navigation functionality
- Responsive design
- Accessibility compliance

## ♿ Accessibility

The site is built with accessibility in mind:
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- WCAG AA compliance
- Skip-to-content links
- Reduced motion support

## 📈 Performance

Optimizations included:
- Next.js Image optimization
- Font preloading
- Lazy loading
- Code splitting
- Bundle optimization
- Lighthouse score target: 95+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For questions or support:
- Email: info@keeppetsalive.org
- Phone: (555) 123-4567
- Website: [keeppetsalive.org](https://keeppetsalive.org)

## 🙏 Acknowledgments

- Built with ❤️ for animal rescue
- Inspired by the foster community
- Powered by open source technologies
- Designed for accessibility and inclusion

---

**Keep Pets Alive** - Connecting foster families with rescue pets in need. Together, we can save lives.
