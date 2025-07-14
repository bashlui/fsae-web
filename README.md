# FSAE Team Website

A modern, responsive website for our Formula SAE team built with Next.js and TypeScript. This website showcases our team, cars, and involvement in the Formula SAE competition.

## About Formula SAE

Formula SAE is a student design competition organized by SAE International where teams design, build, and race small formula-style race cars. The competition involves both static events (design presentation, cost analysis) and dynamic events (acceleration, skid pad, autocross, endurance).

## Features

- Responsive design optimized for all devices
- Dark/Light theme support
- Team member showcase
- Car gallery and specifications
- Information about Formula SAE competition
- Modern UI with Tailwind CSS and shadcn/ui components

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Geist (Sans & Mono)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd fsae-web
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                 # Next.js app router pages
│   ├── about-fsae/     # About Formula SAE page
│   ├── our-cars/       # Car showcase page
│   └── our-team/       # Team members page
├── components/         # React components
│   ├── ui/            # shadcn/ui components
│   ├── Hero.tsx       # Landing page hero section
│   ├── Navbar.tsx     # Navigation component
│   └── ...
├── context/           # React context providers
└── lib/              # Utility functions
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Components

This project uses shadcn/ui for UI components. To add new components:

```bash
npx shadcn@latest add <component-name>
```

## Deployment

The application can be deployed on various platforms:

- **Vercel** (recommended): Connect your repository for automatic deployments
- **Netlify**: Deploy with continuous integration
- **Static hosting**: Run `npm run build` and deploy the `out` folder

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
