import { useState, useEffect, useCallback } from 'react';
import { Product, MarketplaceFilter, ProductCategory } from '@/types/marketplace';
import { marketplaceApi } from '@/services/marketplaceApi';

export function useProducts(initialCategory: ProductCategory = 'all') {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [category, setCategory] = useState<ProductCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc' | 'emi-asc'>('popular');

  const fetchCatalog = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await marketplaceApi.getProducts({
        category,
        searchQuery,
        sortBy,
      });
      setProducts(data);
    } catch (err) {
      setError('Unable to load 1Fi Marketplace catalog. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [category, searchQuery, sortBy]);

  useEffect(() => {
    fetchCatalog();
  }, [fetchCatalog]);

  return {
    products,
    loading,
    error,
    category,
    setCategory,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    refetch: fetchCatalog,
  };
}
