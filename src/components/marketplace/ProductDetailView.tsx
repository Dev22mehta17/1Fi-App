'use client';

import React from 'react';
import Image from 'next/image';
import { 
  ChevronLeft, 
  Share2, 
  Star, 
  ShieldCheck, 
  Zap, 
  Truck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Product } from '@/types/marketplace';
import { useProductDetail } from '@/hooks/useProductDetail';
import { formatCurrency } from '@/utils/formatters';
import VariantSelector from './VariantSelector';
import EmiPlanSelector from './EmiPlanSelector';

interface ProductDetailViewProps {
  product: Product;
  onBack: () => void;
  onProceedToEligibility: (details: {
    product: Product;
    variantId: string;
    variantName: string;
    price: number;
    tenure: number;
    monthlyEmi: number;
  }) => void;
}

export default function ProductDetailView({
  product,
  onBack,
  onProceedToEligibility,
}: ProductDetailViewProps) {
  const {
    selectedVariantId,
    setSelectedVariantId,
    selectedVariant,
    currentPrice,
    currentMrp,
    savingsAmount,
    emiPlans,
    selectedTenure,
    setSelectedTenure,
    activeEmiPlan,
  } = useProductDetail(product);

  const handleContinue = () => {
    if (!selectedVariant || !activeEmiPlan) return;
    onProceedToEligibility({
      product,
      variantId: selectedVariant.id,
      variantName: selectedVariant.variantName,
      price: currentPrice,
      tenure: activeEmiPlan.tenureMonths,
      monthlyEmi: activeEmiPlan.monthlyInstallment,
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      {/* Top Header */}
      <div className="sticky top-0 z-30 flex items-center justify-between border-b border-gray-100 bg-white/95 px-4 py-3 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onBack}
            aria-label="Go back to Marketplace"
            className="-ml-1.5 flex h-9 w-9 items-center justify-center rounded-full text-gray-800 hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 stroke-[2.2]" />
          </button>
          <span className="text-[15px] font-bold tracking-tight text-gray-900">
            1Fi Marketplace
          </span>
        </div>

        <button
          type="button"
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: product.name,
                text: `Shop ${product.name} on 0% EMI with 1Fi!`,
                url: window.location.href,
              }).catch(() => {});
            }
          }}
          className="flex h-9 w-9 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 transition-colors"
          aria-label="Share product"
        >
          <Share2 className="h-4 w-4 stroke-[2]" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 px-4 py-4 pb-28 flex flex-col gap-5">
        {/* Product Image Gallery Card */}
        <div className="relative aspect-[4/3] w-full rounded-2xl bg-white border border-gray-200/80 p-4 shadow-fi-card flex items-center justify-center overflow-hidden">
          <Image
            src={product.primaryImageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 500px) 100vw, 460px"
            className="object-contain p-4 transition-transform duration-300 hover:scale-105"
            priority
            unoptimized
          />

          {/* Floating Brand Badge */}
          <span className="absolute top-3.5 left-3.5 text-[11px] font-extrabold uppercase tracking-wider text-gray-800 bg-white/95 border border-gray-200/90 px-2.5 py-1 rounded-full shadow-xs">
            {product.brand}
          </span>

          {/* 0% Interest Flag */}
          <span className="absolute top-3.5 right-3.5 flex items-center gap-1 text-[10.5px] font-bold text-white bg-[#712CDC] px-2.5 py-1 rounded-full shadow-xs">
            <Sparkles className="h-3 w-3" />
            0% Interest
          </span>
        </div>

        {/* Title, Rating, and Pricing Section */}
        <div className="rounded-2xl border border-gray-200/80 bg-white p-4 shadow-fi-card">
          <h1 className="text-[21px] font-extrabold tracking-tight text-gray-900 leading-tight">
            {product.name}
          </h1>

          <p className="mt-1 text-[13px] text-gray-500 leading-relaxed">
            {product.tagline}
          </p>

          {/* Rating */}
          <div className="mt-2.5 flex items-center gap-2">
            <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full text-amber-800 text-[11.5px] font-bold">
              <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
              <span>{product.rating}</span>
            </div>
            <span className="text-[11.5px] text-gray-400 font-medium">
              ({product.reviewCount} reviews)
            </span>
          </div>

          <div className="my-3.5 border-t border-gray-100" />

          {/* Price display */}
          <div className="flex items-baseline gap-2.5 flex-wrap">
            <span className="text-[26px] font-extrabold text-gray-900 tracking-tight">
              {formatCurrency(currentPrice)}
            </span>
            {currentMrp > currentPrice && (
              <span className="text-[14px] text-gray-400 line-through font-medium">
                {formatCurrency(currentMrp)}
              </span>
            )}
            {savingsAmount > 0 && (
              <span className="text-[11.5px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                Save {formatCurrency(savingsAmount)}
              </span>
            )}
          </div>

          {/* Quick LAMF highlights */}
          <div className="mt-3 grid grid-cols-2 gap-2 pt-1 text-[11px] text-gray-600 font-medium">
            <div className="flex items-center gap-1.5 bg-gray-50 rounded-lg p-2">
              <Zap className="h-3.5 w-3.5 text-[#712CDC]" />
              <span>Instant Approval</span>
            </div>
            <div className="flex items-center gap-1.5 bg-gray-50 rounded-lg p-2">
              <Truck className="h-3.5 w-3.5 text-emerald-600" />
              <span>Free Express Delivery</span>
            </div>
          </div>
        </div>

        {/* Variant Selector */}
        <div className="rounded-2xl border border-gray-200/80 bg-white p-4 shadow-fi-card">
          <VariantSelector
            variants={product.variants}
            selectedVariantId={selectedVariantId}
            onSelectVariant={setSelectedVariantId}
          />
        </div>

        {/* EMI Plan Selector (Core Differentiator) */}
        <div className="rounded-2xl border border-gray-200/80 bg-white p-4 shadow-fi-card">
          <EmiPlanSelector
            emiPlans={emiPlans}
            selectedTenure={selectedTenure}
            onSelectTenure={setSelectedTenure}
            principalAmount={currentPrice}
          />
        </div>

        {/* Product Specifications & Features */}
        <div className="rounded-2xl border border-gray-200/80 bg-white p-4 shadow-fi-card">
          <h3 className="text-[15px] font-bold text-gray-900 tracking-tight mb-3">
            Product Specifications
          </h3>

          <div className="divide-y divide-gray-100 text-[12.5px]">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="py-2.5 flex justify-between gap-4">
                <span className="text-gray-500 font-medium">{key}</span>
                <span className="text-gray-900 font-semibold text-right">{value}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-gray-100">
            <h4 className="text-[13px] font-bold text-gray-800 mb-2">Key Highlights</h4>
            <ul className="space-y-1.5 text-[12px] text-gray-600">
              {product.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#712CDC] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action Bar */}
      <div className="fixed sm:absolute inset-x-0 bottom-0 z-40 bg-white border-t border-gray-200/80 p-3.5 shadow-2xl backdrop-blur-md">
        <div className="flex items-center justify-between gap-3 max-w-[480px] mx-auto">
          <div className="flex flex-col min-w-0">
            <span className="text-[10.5px] font-bold uppercase tracking-wider text-gray-400">
              Selected EMI Plan
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-[17px] font-extrabold text-[#712CDC] tracking-tight">
                {activeEmiPlan ? formatCurrency(activeEmiPlan.monthlyInstallment) : ''}
              </span>
              <span className="text-[11px] text-gray-500 font-semibold">
                /mo for {selectedTenure}M
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleContinue}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#712CDC] hover:bg-[#5e23b8] active:scale-[0.98] text-white px-6 py-3.5 text-[14px] font-bold shadow-md shadow-[#712CDC]/25 transition-all"
          >
            <span>Continue with Plan</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
