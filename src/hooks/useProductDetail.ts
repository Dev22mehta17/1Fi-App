import { useState, useEffect, useMemo } from 'react';
import { Product, ProductVariant, EmiOption } from '@/types/marketplace';
import { calculateEmiRows } from '@/services/marketplaceApi';

export function useProductDetail(product: Product | null) {
  // Select first variant by default
  const [selectedVariantId, setSelectedVariantId] = useState<string>(
    product?.variants[0]?.id || ''
  );

  // Sync variant if product changes
  useEffect(() => {
    if (product?.variants?.length) {
      setSelectedVariantId(product.variants[0].id);
    }
  }, [product]);

  // Active Variant
  const selectedVariant: ProductVariant | undefined = useMemo(() => {
    if (!product) return undefined;
    return product.variants.find((v) => v.id === selectedVariantId) || product.variants[0];
  }, [product, selectedVariantId]);

  // Current Price
  const currentPrice = useMemo(() => {
    return selectedVariant ? selectedVariant.sellingPrice : (product?.startingPrice || 0);
  }, [selectedVariant, product]);

  const currentMrp = useMemo(() => {
    return selectedVariant ? selectedVariant.mrp : currentPrice;
  }, [selectedVariant, currentPrice]);

  const savingsAmount = useMemo(() => {
    return Math.max(0, currentMrp - currentPrice);
  }, [currentMrp, currentPrice]);

  // Dynamically calculate EMI rows for available tenures based on current price
  const emiPlans: EmiOption[] = useMemo(() => {
    if (!product || !currentPrice) return [];
    return calculateEmiRows(currentPrice, product.availableEmiTenures, 0);
  }, [product, currentPrice]);

  // Selected EMI plan tenure (default to 12 months or first available)
  const [selectedTenure, setSelectedTenure] = useState<number>(12);

  useEffect(() => {
    if (emiPlans.length > 0) {
      const exists = emiPlans.some((p) => p.tenureMonths === selectedTenure);
      if (!exists) {
        setSelectedTenure(emiPlans[0].tenureMonths);
      }
    }
  }, [emiPlans, selectedTenure]);

  const activeEmiPlan = useMemo(() => {
    return emiPlans.find((p) => p.tenureMonths === selectedTenure) || emiPlans[0];
  }, [emiPlans, selectedTenure]);

  return {
    selectedVariantId,
    setSelectedVariantId,
    selectedVariant,
    currentPrice,
    currentMrp,
    savingsAmount,
    emiPlans,
    selectedTenure,
    setSelectedTenure,
    activeEmiPlan,
  };
}
