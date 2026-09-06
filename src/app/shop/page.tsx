'use client';

import React, { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import MobileShell from '@/components/layout/MobileShell';
import ShopHeaderBanner from '@/components/shop/ShopHeaderBanner';
import ShopTabSwitcher, { ShopTabType } from '@/components/shop/ShopTabSwitcher';
import BlankTabPlaceholder from '@/components/shop/BlankTabPlaceholder';
import MarketplaceView from '@/components/marketplace/MarketplaceView';
import { ProductCategory } from '@/types/marketplace';

function ShopContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab') as ShopTabType | null;
  const productParam = searchParams.get('product') || undefined;
  const modalParam = searchParams.get('modal') || undefined;
  const categoryParam = (searchParams.get('category') as ProductCategory) || 'all';

  const [activeTab, setActiveTab] = useState<ShopTabType>(tabParam || 'marketplace');

  return (
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
          <MarketplaceView
            initialProductId={productParam}
            initialModal={modalParam}
            initialCategory={categoryParam}
          />
        )}
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <MobileShell activeNav="shop">
      <Suspense
        fallback={
          <div className="p-8 text-center text-sm font-medium text-gray-500">
            Loading 1Fi Shop...
          </div>
        }
      >
        <ShopContent />
      </Suspense>
    </MobileShell>
  );
}
