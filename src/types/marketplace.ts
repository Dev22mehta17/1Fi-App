export type ProductCategory = 
  | 'all'
  | 'smartphones'
  | 'laptops'
  | 'audio'
  | 'wearables'
  | 'tablets';

export interface ProductVariant {
  id: string;
  variantName: string;
  attributes: {
    color?: string;
    storage?: string;
    ram?: string;
    size?: string;
    [key: string]: string | undefined;
  };
  mrp: number;
  sellingPrice: number;
  discountPercentage: number;
  inStock: boolean;
  imageUrls?: string[];
}

export interface EmiOption {
  tenureMonths: number;
  annualInterestRate: number; // 0 for 0% No-Cost EMI
  monthlyInstallment: number;
  totalPayable: number;
  cashbackOrBenefitText?: string;
  isPopular?: boolean;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  categoryName: string;
  tagline: string;
  description: string;
  rating: number;
  reviewCount: number;
  primaryImageUrl: string;
  galleryImages: string[];
  startingPrice: number;
  startingEmiAmount: number;
  minTenureMonths: number;
  maxTenureMonths: number;
  features: string[];
  specs: Record<string, string>;
  variants: ProductVariant[];
  availableEmiTenures: number[]; // e.g. [3, 6, 9, 12, 24, 36]
  badges: string[]; // e.g. ["0% No-Cost EMI", "Mutual Fund Backed", "Instant Approval"]
}

export interface MarketplaceFilter {
  category?: ProductCategory;
  searchQuery?: string;
  sortBy?: 'popular' | 'price-asc' | 'price-desc' | 'emi-asc';
}

export interface CheckoutSummary {
  productId: string;
  productName: string;
  brand: string;
  variantId: string;
  variantName: string;
  principalAmount: number;
  tenureMonths: number;
  monthlyEmi: number;
  interestRate: number;
  downpayment: number;
  estimatedMfCollateralValue: number;
  mfProvider: 'CAMS' | 'KFintech' | 'MFCentral';
}
