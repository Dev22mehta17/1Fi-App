'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, Layers } from 'lucide-react';
import { Product } from '@/types/marketplace';
import { formatCurrency } from '@/utils/formatters';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  const variantCount = product.variants?.length || 1;
  const startingEmi = product.startingEmiAmount;

  return (
    <div
      onClick={() => onSelect(product)}
      className="group flex flex-col overflow-hidden rounded-[20px] border border-gray-200/80 bg-white p-3 shadow-fi-card transition-all duration-200 hover:-translate-y-1 hover:shadow-fi-hover hover:border-[#712CDC]/30 cursor-pointer text-left"
    >
      {/* Product Image Area */}
      <div className="relative aspect-square w-full rounded-xl bg-[#fafafa] overflow-hidden flex items-center justify-center p-2 mb-2.5">
        <Image
          src={product.primaryImageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 500px) 50vw, 220px"
          className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
          unoptimized
        />

        {/* Brand Chip */}
        <span className="absolute top-2 left-2 text-[10px] font-bold tracking-wide uppercase text-gray-700 bg-white/95 px-2 py-0.5 rounded-full shadow-xs border border-gray-100">
          {product.brand}
        </span>

        {/* Variant Count Chip */}
        {variantCount > 1 && (
          <span className="absolute bottom-2 right-2 flex items-center gap-1 text-[9.5px] font-semibold text-gray-600 bg-white/95 px-2 py-0.5 rounded-full shadow-xs border border-gray-100">
            <Layers className="h-2.5 w-2.5 text-gray-500" />
            <span>{variantCount} variants</span>
          </span>
        )}
      </div>

      {/* Product Information */}
      <div className="flex-1 flex flex-col">
        <h4 className="text-[13.5px] font-bold text-gray-900 leading-snug line-clamp-2 min-h-[38px] group-hover:text-[#712CDC] transition-colors">
          {product.name}
        </h4>

        {/* Pricing */}
        <div className="mt-1.5 flex items-baseline gap-1.5 flex-wrap">
          <span className="text-[15px] font-extrabold text-gray-900 tracking-tight">
            {formatCurrency(product.startingPrice)}
          </span>
          {product.variants[0]?.mrp > product.startingPrice && (
            <span className="text-[11.5px] text-gray-400 line-through font-medium">
              {formatCurrency(product.variants[0].mrp)}
            </span>
          )}
        </div>

        {/* 1Fi EMI Highlight Banner */}
        <div className="mt-2.5 rounded-xl border border-[#ece5ff] bg-[#f7f3ff] p-2 flex flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-[#5c22a5] uppercase tracking-wide">
              No-Cost EMI
            </span>
            <span className="text-[9px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-1.5 py-0.2 rounded-md">
              0% Interest
            </span>
          </div>

          <p className="text-[12.5px] font-bold text-gray-900 tracking-tight">
            From <span className="text-[#712CDC]">{formatCurrency(startingEmi)}</span>
            <span className="text-[10px] text-gray-500 font-normal">/mo</span>
          </p>
        </div>

        {/* Action button */}
        <button
          type="button"
          className="mt-3 w-full rounded-xl bg-gray-50 hover:bg-[#712CDC] text-[#712CDC] hover:text-white border border-gray-200/80 hover:border-transparent py-2 text-[12px] font-bold tracking-tight transition-all duration-150 text-center"
        >
          View Plans
        </button>
      </div>
    </div>
  );
}
