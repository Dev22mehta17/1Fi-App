'use client';

import React from 'react';

export default function ProductSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {[1, 2, 3, 4, 5, 6].map((idx) => (
        <div
          key={idx}
          className="flex flex-col rounded-2xl border border-gray-100 bg-white p-3 shadow-xs animate-pulse"
        >
          {/* Image skeleton */}
          <div className="relative aspect-square w-full rounded-xl bg-gray-100 mb-2.5 overflow-hidden" />

          {/* Tag skeleton */}
          <div className="h-3 w-16 bg-gray-100 rounded-full mb-1.5" />

          {/* Title skeleton */}
          <div className="h-4 w-4/5 bg-gray-200 rounded mb-2" />

          {/* Price & EMI skeleton */}
          <div className="mt-auto space-y-1 pt-1">
            <div className="h-4 w-24 bg-gray-200 rounded" />
            <div className="h-3.5 w-28 bg-purple-100 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
