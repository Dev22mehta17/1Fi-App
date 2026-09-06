'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { ProductVariant } from '@/types/marketplace';
import { formatCurrency } from '@/utils/formatters';

interface VariantSelectorProps {
  variants: ProductVariant[];
  selectedVariantId: string;
  onSelectVariant: (variantId: string) => void;
}

export default function VariantSelector({
  variants,
  selectedVariantId,
  onSelectVariant,
}: VariantSelectorProps) {
  if (!variants || variants.length <= 1) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-gray-500">
          Select Variant
        </span>
        <span className="text-[11px] text-gray-400 font-medium">
          {variants.length} options available
        </span>
      </div>

      <div className="grid grid-cols-1 gap-2">
        {variants.map((variant) => {
          const isSelected = variant.id === selectedVariantId;

          return (
            <button
              key={variant.id}
              type="button"
              onClick={() => onSelectVariant(variant.id)}
              className={`flex items-center justify-between p-3 rounded-2xl border text-left transition-all duration-150 ${
                isSelected
                  ? 'border-[#712CDC] bg-purple-50/60 ring-1 ring-[#712CDC]'
                  : 'border-gray-200 bg-white hover:border-purple-300'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className={`h-4 w-4 rounded-full border flex items-center justify-center transition-colors ${
                    isSelected
                      ? 'border-[#712CDC] bg-[#712CDC] text-white'
                      : 'border-gray-300 bg-white'
                  }`}
                >
                  {isSelected && <Check className="h-2.5 w-2.5 stroke-[3]" />}
                </div>
                <div>
                  <span className="text-[13.5px] font-bold text-gray-900 block leading-tight">
                    {variant.variantName}
                  </span>
                  {variant.attributes.storage && variant.attributes.color && (
                    <span className="text-[11px] text-gray-500">
                      {variant.attributes.storage} · {variant.attributes.color}
                    </span>
                  )}
                </div>
              </div>

              <div className="text-right">
                <span className="text-[13.5px] font-extrabold text-gray-900 block leading-tight">
                  {formatCurrency(variant.sellingPrice)}
                </span>
                {variant.mrp > variant.sellingPrice && (
                  <span className="text-[10.5px] text-emerald-600 font-semibold">
                    Save {formatCurrency(variant.mrp - variant.sellingPrice)}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
