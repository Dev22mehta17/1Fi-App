'use client';

import React from 'react';
import { Store, ArrowRight } from 'lucide-react';

interface BlankTabPlaceholderProps {
  title: string;
  subtitle: string;
  onExploreMarketplace?: () => void;
}

export default function BlankTabPlaceholder({
  title,
  subtitle,
  onExploreMarketplace,
}: BlankTabPlaceholderProps) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 text-center animate-fade-in">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ede8ff] text-[#712CDC]">
        <Store className="h-8 w-8 stroke-[1.75]" />
      </div>
      <h3 className="text-[19px] font-bold tracking-tight text-gray-900">
        {title}
      </h3>
      <p className="mt-1.5 max-w-[280px] text-[13.5px] leading-relaxed text-gray-500">
        {subtitle}
      </p>

      {onExploreMarketplace && (
        <button
          type="button"
          onClick={onExploreMarketplace}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#712CDC] px-5 py-2.5 text-[13.5px] font-bold text-white shadow-sm transition-all hover:bg-[#5e23b8] active:scale-95"
        >
          <span>Explore 1Fi Marketplace</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
