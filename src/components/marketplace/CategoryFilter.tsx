'use client';

import React from 'react';
import { ProductCategory } from '@/types/marketplace';

interface CategoryFilterProps {
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
}

const CATEGORIES: { id: ProductCategory; label: string }[] = [
  { id: 'all', label: 'All Products' },
  { id: 'smartphones', label: 'Smartphones' },
  { id: 'laptops', label: 'Laptops' },
  { id: 'audio', label: 'Audio' },
  { id: 'wearables', label: 'Wearables' },
  { id: 'tablets', label: 'Tablets' },
];

export default function CategoryFilter({
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto py-1 -mx-4 px-4 scrollbar-none select-none">
      {CATEGORIES.map((cat) => {
        const isSelected = selectedCategory === cat.id;

        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelectCategory(cat.id)}
            className={`shrink-0 text-[12.5px] font-semibold px-3.5 py-1.5 rounded-full border transition-all duration-150 whitespace-nowrap cursor-pointer ${
              isSelected
                ? 'bg-[#712CDC] text-white border-[#712CDC] shadow-xs'
                : 'bg-white text-gray-600 border-gray-200 hover:border-[#712CDC]/40 hover:text-[#712CDC]'
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
