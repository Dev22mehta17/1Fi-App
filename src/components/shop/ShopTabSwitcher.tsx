'use client';

import React from 'react';

export type ShopTabType = 'top-brands' | 'nearby-stores' | 'marketplace';

interface ShopTabSwitcherProps {
  activeTab: ShopTabType;
  onTabChange: (tab: ShopTabType) => void;
}

export default function ShopTabSwitcher({
  activeTab,
  onTabChange,
}: ShopTabSwitcherProps) {
  const tabs: { id: ShopTabType; label: string; highlight?: boolean }[] = [
    { id: 'top-brands', label: 'Top Brands' },
    { id: 'nearby-stores', label: 'Nearby Stores' },
    { id: 'marketplace', label: '1Fi Marketplace', highlight: true },
  ];

  return (
    <div className="relative z-10 -mt-6 px-4">
      <div
        className="flex gap-1 rounded-full border border-[#ece5ff] bg-[#f5f0ff] p-1.5 shadow-[0_1px_3px_rgba(113,44,220,0.08)]"
        role="tablist"
        aria-label="Shop Navigation Tabs"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onTabChange(tab.id)}
              className={`relative flex-1 rounded-full py-2.5 px-1 text-center text-[12px] sm:text-[13px] font-semibold tracking-[-0.01em] transition-all duration-150 ${
                isActive
                  ? 'bg-white text-[#712CDC] shadow-[0_1px_3px_rgba(20,14,50,0.10),0_0_0_1px_rgba(113,44,220,0.08)] font-bold'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              <span className="truncate block">{tab.label}</span>
              {isActive && (
                <span
                  className="absolute bottom-1 left-1/2 h-[2.5px] w-5 -translate-x-1/2 rounded-full bg-[#712CDC]"
                  aria-hidden="true"
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
