import { Product, ProductVariant, EmiOption, MarketplaceFilter, CheckoutSummary } from '@/types/marketplace';
import { MOCK_PRODUCTS } from '@/data/products';

/**
 * Simulates network latency for realistic loading/error state evaluation
 */
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * 1Fi Standard EMI Calculation:
 * Since 1Fi provides 0% No-Cost EMI backed by Mutual Funds:
 * Monthly Installment = Principal / Tenure (rounded up)
 * For plans with interest (if configured), standard EMI formula:
 * P * r * (1+r)^n / ((1+r)^n - 1)
 */
export function calculateEmiRows(
  principalAmount: number,
  tenures: number[],
  interestRate: number = 0
): EmiOption[] {
  if (!principalAmount || principalAmount <= 0) return [];

  return tenures.map((tenure) => {
    let monthly: number;
    let total: number;

    if (interestRate <= 0) {
      // 0% No-Cost EMI
      monthly = Math.ceil(principalAmount / tenure);
      total = principalAmount;
    } else {
      const monthlyRate = interestRate / 100 / 12;
      const factor = Math.pow(1 + monthlyRate, tenure);
      monthly = Math.ceil((principalAmount * monthlyRate * factor) / (factor - 1));
      total = monthly * tenure;
    }

    return {
      tenureMonths: tenure,
      annualInterestRate: interestRate,
      monthlyInstallment: monthly,
      totalPayable: total,
      cashbackOrBenefitText: tenure >= 12 ? 'Zero Foreclosure Fee' : undefined,
      isPopular: tenure === 12 || tenure === 24,
    };
  });
}

/**
 * Dynamic API Service for 1Fi Marketplace
 */
export const marketplaceApi = {
  /**
   * Fetch product catalog with filtering, category selection, and search
   */
  async getProducts(filter?: MarketplaceFilter): Promise<Product[]> {
    await delay(300); // realistic network delay

    let results = [...MOCK_PRODUCTS];

    if (filter?.category && filter.category !== 'all') {
      results = results.filter((p) => p.category === filter.category);
    }

    if (filter?.searchQuery && filter.searchQuery.trim()) {
      const q = filter.searchQuery.toLowerCase().trim();
      results = results.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.categoryName.toLowerCase().includes(q) ||
          p.features.some((f) => f.toLowerCase().includes(q))
      );
    }

    if (filter?.sortBy) {
      switch (filter.sortBy) {
        case 'price-asc':
          results.sort((a, b) => a.startingPrice - b.startingPrice);
          break;
        case 'price-desc':
          results.sort((a, b) => b.startingPrice - a.startingPrice);
          break;
        case 'emi-asc':
          results.sort((a, b) => a.startingEmiAmount - b.startingEmiAmount);
          break;
        case 'popular':
        default:
          results.sort((a, b) => b.reviewCount - a.reviewCount);
          break;
      }
    }

    return results;
  },

  /**
   * Fetch a single product by ID
   */
  async getProductById(id: string): Promise<Product | null> {
    await delay(250);
    const product = MOCK_PRODUCTS.find((p) => p.id === id);
    return product || null;
  },

  /**
   * Retrieve EMI plans dynamically for a specific variant & amount
   */
  async getEmiPlans(
    productId: string,
    variantId: string,
    amount: number
  ): Promise<EmiOption[]> {
    await delay(200);
    const product = MOCK_PRODUCTS.find((p) => p.id === productId);
    if (!product) return [];

    return calculateEmiRows(amount, product.availableEmiTenures, 0);
  },

  /**
   * Simulates 1Fi's Loan Against Mutual Funds (LAMF) eligibility verification
   * Takes user's simulated mobile/PAN and computes collateral portfolio value via CAMS/KFintech
   */
  async checkEligibility(params: {
    mobile?: string;
    pan?: string;
    requestedAmount: number;
  }): Promise<{
    isEligible: boolean;
    approvedCreditLimit: number;
    portfolioValue: number;
    lenderPartner: string;
    depository: 'CAMS' | 'KFintech' | 'MFCentral';
    interestRate: number;
    processingFee: number;
  }> {
    await delay(600); // simulate 10-second instant check in UI
    const portfolio = Math.max(params.requestedAmount * 2.2, 185000);
    const approvedLimit = Math.round(portfolio * 0.65);

    return {
      isEligible: approvedLimit >= params.requestedAmount,
      approvedCreditLimit: approvedLimit,
      portfolioValue: portfolio,
      lenderPartner: 'Tata Capital / DSP Finance',
      depository: 'CAMS',
      interestRate: 0,
      processingFee: 0,
    };
  },

  /**
   * Finalize transaction / order
   */
  async submitOrder(summary: CheckoutSummary): Promise<{
    success: boolean;
    orderId: string;
    trackingId: string;
    message: string;
  }> {
    await delay(800);
    const randomId = Math.floor(100000 + Math.random() * 900000);
    return {
      success: true,
      orderId: `1FI-ORD-${randomId}`,
      trackingId: `DEL-IN-${Math.floor(Math.random() * 899999 + 100000)}`,
      message: 'Mutual fund lien placed successfully. Order confirmed at 0% EMI.',
    };
  },
};
