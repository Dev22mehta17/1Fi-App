'use client';

import React, { useState } from 'react';
import MobileShell from '@/components/layout/MobileShell';
import ShopHeaderBanner from '@/components/shop/ShopHeaderBanner';
import ShopTabSwitcher, { ShopTabType } from '@/components/shop/ShopTabSwitcher';
import BlankTabPlaceholder from '@/components/shop/BlankTabPlaceholder';
import MarketplaceView from '@/components/marketplace/MarketplaceView';

export default function ShopPage() {
  // Default to 1Fi Marketplace tab as requested in the assignment
  const [activeTab, setActiveTab] = useState<ShopTabType>('marketplace');

  return (
    <MobileShell activeNav="shop">
      <div className="flex flex-col min-h-full bg-white">
        {/* Top Header Banner */}
        <ShopHeaderBanner />

        {/* 3-Option Tab Switcher: Top Brands | Nearby Stores | 1Fi Marketplace */}
        <ShopTabSwitcher
          activeTab={activeTab}
          onTabChange={(tab) => setActiveTab(tab)}
        />

        {/* Tab Contents */}
        <div className="mt-3.5 flex-1">
          {activeTab === 'top-brands' && (
            <BlankTabPlaceholder
              title="Top Brands"
              subtitle="Online partner store tie-ups and vouchers will be available here."
              onExploreMarketplace={() => setActiveTab('marketplace')}
            />
          )}

          {activeTab === 'nearby-stores' && (
            <BlankTabPlaceholder
              title="Nearby Stores"
              subtitle="Local retail stores accepting 1Fi mutual fund backed payments will appear here."
              onExploreMarketplace={() => setActiveTab('marketplace')}
            />
          )}

          {activeTab === 'marketplace' && (
            <MarketplaceView />
          )}
        </div>
      </div>
    </MobileShell>
  );
}
