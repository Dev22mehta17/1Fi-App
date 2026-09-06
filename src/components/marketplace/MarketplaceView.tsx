'use client';

import React, { useState } from 'react';
import { Sparkles, ArrowUpDown, AlertCircle, RefreshCw } from 'lucide-react';
import { Product } from '@/types/marketplace';
import { useProducts } from '@/hooks/useProducts';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import ProductGrid from './ProductGrid';
import ProductSkeleton from './ProductSkeleton';
import ProductDetailView from './ProductDetailView';
import EligibilityModal from './EligibilityModal';

export default function MarketplaceView() {
  const {
    products,
    loading,
    error,
    category,
    setCategory,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    refetch,
  } = useProducts();

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [eligibilityDetails, setEligibilityDetails] = useState<{
    product: Product;
    variantId: string;
    variantName: string;
    price: number;
    tenure: number;
    monthlyEmi: number;
  } | null>(null);

  // If a product is selected, render ProductDetailView
  if (selectedProduct) {
    return (
      <>
        <ProductDetailView
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
          onProceedToEligibility={(details) => setEligibilityDetails(details)}
        />

        <EligibilityModal
          isOpen={Boolean(eligibilityDetails)}
          onClose={() => setEligibilityDetails(null)}
          details={eligibilityDetails}
          onOrderComplete={() => {
            setEligibilityDetails(null);
            setSelectedProduct(null);
          }}
        />
      </>
    );
  }

  return (
    <div className="flex flex-col gap-4 px-4 py-3">
      {/* Search Bar */}
      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search devices, iPhones, MacBooks..."
      />

      {/* Category Pills */}
      <CategoryFilter
        selectedCategory={category}
        onSelectCategory={setCategory}
      />

      {/* Title & Sorting Bar */}
      <div className="flex items-center justify-between gap-2 pt-1">
        <div className="flex items-center gap-1.5">
          <h2 className="text-[17px] font-extrabold tracking-tight text-gray-900">
            Featured Products
          </h2>
          <span className="text-[11px] font-bold text-[#712CDC] bg-[#f5f0ff] px-2 py-0.5 rounded-full border border-[#ece5ff]">
            {products.length}
          </span>
        </div>

        {/* Sort selector */}
        <div className="flex items-center gap-1">
          <ArrowUpDown className="h-3 w-3 text-gray-400" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-transparent border-0 text-[11.5px] font-bold text-gray-600 focus:outline-none focus:ring-0 cursor-pointer"
          >
            <option value="popular">Popular</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="emi-asc">Lowest EMI</option>
          </select>
        </div>
      </div>

      {/* Error state */}
      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-center">
          <AlertCircle className="h-6 w-6 text-red-600 mx-auto mb-1.5" />
          <p className="text-[13px] font-bold text-red-800">{error}</p>
          <button
            type="button"
            onClick={refetch}
            className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-red-600 text-white px-4 py-1.5 text-[12px] font-bold hover:bg-red-700 transition-colors"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Try Again</span>
          </button>
        </div>
      )}

      {/* Loading Skeleton */}
      {loading && <ProductSkeleton />}

      {/* Product Grid */}
      {!loading && !error && (
        <ProductGrid
          products={products}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onResetFilters={() => {
            setSearchQuery('');
            setCategory('all');
          }}
        />
      )}
    </div>
  );
}
