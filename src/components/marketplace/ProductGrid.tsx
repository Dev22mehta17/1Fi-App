'use client';

import React from 'react';
import { PackageX, RotateCcw } from 'lucide-react';
import { Product } from '@/types/marketplace';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onResetFilters: () => void;
}

export default function ProductGrid({
  products,
  onSelectProduct,
  onResetFilters,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[24px] border border-gray-200 bg-white px-6 py-12 text-center shadow-xs">
        <div className="mb-3.5 flex h-14 w-14 items-center justify-center rounded-full bg-[#f5f0ff] text-[#712CDC]">
          <PackageX className="h-6 w-6 stroke-[1.8]" />
        </div>
        <h3 className="text-[17px] font-bold tracking-tight text-gray-900">
          No matching products found
        </h3>
        <p className="mt-1 max-w-[260px] text-[13px] leading-relaxed text-gray-500">
          We couldn't find any items matching your search or category filter.
        </p>
        <button
          type="button"
          onClick={onResetFilters}
          className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-[12.5px] font-bold text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span>Reset Filters</span>
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onSelect={onSelectProduct}
        />
      ))}
    </div>
  );
}
