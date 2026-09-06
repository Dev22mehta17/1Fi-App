# 1Fi Marketplace — SDE Intern Assignment

> **1Fi Product Philosophy**: Financial Product + Commerce Experience  
> India's first **LAMF-based (Loan Against Mutual Funds) Shopping Platform** — allowing users to buy what they love on **0% No-Cost EMI without selling or liquidating their mutual fund investments**, keeping their wealth compounding at market returns.

---

## 🚀 Overview

This repository contains the implementation of the **1Fi Marketplace** section within the **Shop page** of the 1Fi application, built to evaluate product understanding, component reusability, architecture, and visual consistency with the existing 1Fi app (`app.1fi.in`).

### 📱 Key User Flow
```
Shop Page → 1Fi Marketplace Tab → Product Catalog → Product Detail & Image Gallery → Variant Selection → Interactive EMI Plan Selection → 1Fi Mutual Fund Eligibility & Lien Check → Order Confirmation
```

---

## 🎯 What Was Built

### 1. Shop Page Navigation & Segmented Tabs
- Maintained consistency with the existing 1Fi design language:
  - **Top Brands**: Blank placeholder screen as permitted in assignment guidelines.
  - **Nearby Stores**: Blank placeholder screen as permitted in assignment guidelines.
  - **1Fi Marketplace**: Fully designed and interactive commerce experience.
- Top banner: *"Shop today. Pay later using mutual funds."* with authentic 1Fi visual tokens.
- Floating bottom navigation pill (`Home`, `Shop`, `EMI Dues`, `Limit`, `Profile`) matching 1Fi's mobile shell.

### 2. 1Fi Marketplace Catalog
- **Search Functionality**: Instant, debounced search across product names, brands, categories, and specifications.
- **Category Filter**: Category pills (`All`, `Smartphones`, `Laptops`, `Audio`, `Wearables`, `Tablets`).
- **Sorting Engine**: Sort by `Popularity`, `Price: Low to High`, `Price: High to Low`, and `Lowest EMI`.
- **Product Cards**: High-res product imagery, brand badge, variant counter, 0% No-Cost EMI monthly amount indicator, and zero downpayment callouts.
- **Loading & Empty States**: Pulse shimmer skeletons matching 1Fi app patterns and friendly empty state recovery.

### 3. Product Details & Dynamic Variant Engine
- **Gallery & Specs**: High-definition product showcases and detailed technical specs.
- **Interactive Variant Selection**: Changing storage capacity (e.g. 128GB vs 256GB vs 512GB) or colors dynamically updates the product price, savings, and all corresponding EMI plans in real-time.
- **Instant Calculations**: Automatic recalculation of monthly installments, discount percentages, and total payable amounts.

### 4. EMI Selection & Financial Architecture
- **Interactive Tenures**: Choose between 3, 6, 9, 12, 18, 24, and 36-month No-Cost EMI tenures.
- **1Fi Mutual Fund Benefit Callout**: Emphasizes that customer mutual funds remain invested and continue earning ~12% p.a. returns while paying 0% interest EMI.
- **Dynamic Plan Summary**: Real-time monthly breakdown and zero foreclosure charges indicator.

### 5. 1Fi Eligibility & Collateral Modal
- **10-Second Eligibility Verification**: Simulates 1Fi's digital onboarding via PAN and Mobile number.
- **Mutual Fund Collateral Allocation**: Simulates portfolio retrieval via CAMS / KFintech / MFCentral.
- **Instant Credit Approval**: Displays approved credit limit, zero upfront downpayment confirmation, and auto-debit schedule.
- **Order Confirmation**: Displays order tracking ID, monthly repayment summary, and seamless navigation back to shop.

---

## 🏗️ Technical Architecture & Engineering Decisions

The project follows a clean, decoupled architecture:

```
src/
├── app/
│   ├── layout.tsx                    # Root layout with 1Fi metadata & theme
│   ├── page.tsx                      # Root route (redirects to /shop)
│   ├── globals.css                   # Tailwind directives & custom utilities
│   ├── shop/
│   │   └── page.tsx                  # Main Shop page with segmented 3-tab controller
│   └── api/
│       └── marketplace/
│           ├── products/route.ts     # REST API endpoint for catalog filtering & search
│           └── products/[id]/route.ts# REST API endpoint for product details & EMI data
├── components/
│   ├── layout/
│   │   ├── MobileShell.tsx           # Responsive container (max-w-[500px] mobile viewport)
│   │   └── BottomNav.tsx             # 1Fi floating bottom navigation bar
│   ├── shop/
│   │   ├── ShopHeaderBanner.tsx      # Top hero banner
│   │   ├── ShopTabSwitcher.tsx       # Segmented tab switcher (Top Brands | Nearby | Marketplace)
│   │   └── BlankTabPlaceholder.tsx   # Clean on-brand placeholders for un-implemented tabs
│   └── marketplace/
│       ├── MarketplaceView.tsx       # Marketplace coordinator & state management
│       ├── SearchBar.tsx             # Debounced search bar with clear action
│       ├── CategoryFilter.tsx        # Horizontal pill carousel for categories
│       ├── ProductCard.tsx           # Individual product card with starting EMI tag
│       ├── ProductGrid.tsx           # Responsive grid layout with empty state
│       ├── ProductSkeleton.tsx       # Shimmer loading skeletons
│       ├── ProductDetailView.tsx     # Full product detail view
│       ├── VariantSelector.tsx       # Storage & color variant switcher
│       ├── EmiPlanSelector.tsx       # EMI tenure cards & compounding calculator
│       └── EligibilityModal.tsx      # 1Fi LAMF collateral verification & checkout
├── data/
│   └── products.ts                   # Realistic catalog (iPhone 17, Pixel 10, Galaxy S25, MacBook Pro)
├── hooks/
│   ├── useProducts.ts                # Custom hook for catalog state, search, and filtering
│   └── useProductDetail.ts           # Custom hook for variant selection & dynamic EMI math
├── services/
│   └── marketplaceApi.ts             # Decoupled mock API service layer with network simulation
├── types/
│   └── marketplace.ts                # Strict TypeScript domain interfaces
└── utils/
    └── formatters.ts                 # Currency and number formatting helpers
```

### Decoupled Data & Mock API Layer
Per the assignment criteria, **no product or EMI data is hardcoded into UI components**.
- All data flows through `marketplaceApi.ts` and Next.js route handlers (`/api/marketplace/products`).
- Supports network latency simulation, query-based filtering, dynamic EMI calculation, and simulated depository checks (CAMS / KFintech).

---

## 🎨 Design System & Visual Consistency

Reverse-engineered directly from 1Fi's production web application (`app.1fi.in`):
- **Brand Primary**: `#712CDC` (Pill buttons, active tabs, highlights)
- **Brand Accent**: `#5c22a5` (Dark purple contrast) & `#6C28D9`
- **Surface Backgrounds**: `#f5f0ff` (Tab pill containers), `#fafafa` (Card backdrops), `#ffffff` (Cards)
- **Typography**: Clean sans-serif hierarchy with bold weights and tabular figures for currency.
- **Form Factors**: Mobile-first centered frame (`max-w-[500px]`) responsive on mobile devices and centered on desktop screens.

---

## ⚙️ Running Locally

### Prerequisites
- Node.js 18.x or higher
- npm

### Installation
```bash
# Clone the repository
git clone <your-repo-link>
cd 1Fi-App

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (automatically redirects to `/shop`).

### Building for Production
```bash
npm run build
npm run start
```

### Type Checking
```bash
npm run typecheck
```

---

## 📊 Evaluation Criteria Alignment

| Criterion | Implementation Highlights |
| :--- | :--- |
| **Product Understanding** | Captures 1Fi's core proposition: Mutual Fund backed No-Cost EMI commerce, zero downpayment, and compounding returns. |
| **UI/UX Consistency** | Exact color tokens (`#712CDC`), typography, segmented tab pill switcher, floating bottom navigation, and card aesthetics. |
| **Engineering Quality** | Strict TypeScript typing, modular reusable components, custom React hooks (`useProducts`, `useProductDetail`), and decoupled architecture. |
| **Functionality** | Complete end-to-end interactive flow: Catalog → Search & Filter → Detail View → Variant Switching → EMI Selection → Eligibility Modal → Order Confirmation. |
| **Data & API Handling** | Centralized API service with simulated network delays, error states, and REST route handlers (`/api/marketplace/products`). |
| **Attention to Detail** | Pulse loading skeletons, empty search states, mobile-responsive layout, and zero lint/type errors. |
