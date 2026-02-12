# ANKUARU Trading Platform (Frontend)

Low-fidelity React + Vite frontend for a digital commodity trading marketplace (coffee and spices), with flows for RFQ, auctions, order book trading, onboarding, and bank integration.

## Tech Stack

- React 18
- React Router
- Vite 6
- Tailwind CSS 4
- Lucide React icons

## Prerequisites

- Node.js 18+
- npm

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Open the app in your browser (Vite will print the local URL, usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Start development server
- `npm run start` - Alias of dev server
- `npm run build` - Production build
- `npm run preview` - Preview production build

If PowerShell blocks `npm`, use:

```bash
npm.cmd run dev
```

## App Routes

- `/` - Home
- `/marketplace` - Marketplace
- `/commodity/:id` - Commodity detail
- `/dashboard` - User dashboard
- `/rfq` - RFQ page
- `/rfq/create` - Create RFQ
- `/auctions` - Auctions page
- `/auctions/create` - Create auction
- `/tenders` - Order book / tenders
- `/trading-modes/:mode` - Learn more page for trading modes
- `/documentation` - Documentation
- `/register/buyer` - Buyer registration
- `/register/seller` - Seller registration
- `/kyc-registration` - KYC registration
- `/bank-integration` - Bank integration
- `/banks` - Bank verifications
- `/buy` - Buy flow
- `/sell` - Sell flow

## Project Structure

```text
src/
  app/
    App.tsx
    components/
  styles/
    theme.css
```

## Notes

- UI is intentionally low-fidelity (wireframe-style grayscale) across key trading pages.
- Routing is defined in `src/app/App.tsx`.
