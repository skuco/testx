# TestX Website 🚀

A modern, optimized Next.js website built with cutting-edge technologies and best practices for performance, SEO, and developer experience.

## ✨ Features

- **🎨 Modern UI**: Built with shadcn/ui components and Tailwind CSS 4.x
- **⚡ Lightning Fast**: Powered by Next.js 16.0 with Turbopack
- **🔍 SEO Optimized**: Dynamic robots.txt, automatic sitemap generation, and enhanced metadata
- **📱 Responsive Design**: Mobile-first approach with beautiful UI components
- **🎯 Type Safe**: Full TypeScript integration with strict type checking
- **🌟 Component Library**: Comprehensive UI components from Radix UI primitives
- **📊 Analytics Ready**: Vercel Analytics integration for production insights
- **🔒 Security First**: Security headers and CORS policies configured

## 🛠️ Tech Stack

### Core Framework
- **[Next.js 16.0](https://nextjs.org/)** - React framework with App Router
- **[React 19.2.0](https://react.dev/)** - Latest React with modern features
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety and developer experience

### Styling & UI
- **[Tailwind CSS 4.1.9](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable components built on Radix UI
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icons
- **[Tailwind Animate](https://www.tailwindcss-animate.com/)** - Animation utilities

### Development Tools
- **[Turbopack](https://turbo.build/pack)** - Next-generation bundler for fast builds
- **[PostCSS](https://postcss.org/)** - CSS processing and optimization
- **[ESLint](https://eslint.org/)** - Code linting and quality assurance

### Additional Libraries
- **[date-fns](https://date-fns.org/)** - Modern date utility library
- **[Recharts](https://recharts.org/)** - Composable charting library
- **[Vaul](https://vaul.emilkowal.ski/)** - Drawer component for mobile
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** (LTS recommended)
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/skuco/testx.git
   cd testx
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build optimized production bundle |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality checks |

## 🏗️ Project Structure

```
testx/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── robots/        # Dynamic robots.txt
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx          # Homepage
│   └── sitemap.ts        # Automatic sitemap generation
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── theme-provider.tsx # Theme context
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
├── styles/               # Additional styles
├── .gitignore           # Git ignore rules
├── components.json      # shadcn/ui configuration
├── next.config.mjs      # Next.js configuration
├── package.json         # Dependencies and scripts
├── postcss.config.mjs   # PostCSS configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vercel.json          # Vercel deployment settings
```

## 🌐 SEO Features

### Automatic SEO Optimization
- **Dynamic Robots.txt**: Served via `/api/robots` with environment-specific rules
- **XML Sitemap**: Automatically generated at `/sitemap.xml`
- **Enhanced Metadata**: Comprehensive meta tags, Open Graph, and Twitter Cards
- **Structured Data**: Ready for schema.org implementation

### SEO Configuration
The website includes production-ready SEO features:

```typescript
// Automatic sitemap generation
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://testx.skuco.dev',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    }
  ]
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npx vercel
   ```

2. **Configure Environment**
   - Production domain is automatically configured
   - SEO features work out of the box

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `.next` folder** to your hosting provider

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file for local development:

```bash
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Vercel Configuration

The project includes a `vercel.json` with optimized settings:

- **Security Headers**: CSP, HSTS, and more
- **CORS Configuration**: Proper cross-origin settings
- **Region**: Optimized for Frankfurt (eu-central-1)
- **API Routes**: Configured for dynamic content

## 🎨 Customization

### Adding Components

The project uses shadcn/ui. Add new components:

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
```

### Styling

- **Global Styles**: Edit `app/globals.css`
- **Tailwind Config**: Modify `tailwind.config.ts`
- **Component Styles**: Use Tailwind classes or CSS modules

### Theme

The project includes a theme provider for dark/light mode:

```tsx
import { ThemeProvider } from '@/components/theme-provider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

## 📊 Performance

### Core Web Vitals
- **LCP**: Optimized with Next.js Image component
- **FID**: Minimized with efficient JavaScript
- **CLS**: Prevented with proper layout design

### Build Performance
- **Turbopack**: Next-generation bundler for faster builds
- **Tree Shaking**: Automatic removal of unused code
- **Code Splitting**: Automatic route-based splitting

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Vercel](https://vercel.com/)** - Deployment platform
- **[shadcn](https://ui.shadcn.com/)** - Component library
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling framework
- **[Next.js](https://nextjs.org/)** - React framework

## 📞 Support

For support, email [your-email@example.com](mailto:your-email@example.com) or create an issue on GitHub.

---

**Built with ❤️ using Next.js and modern web technologies**