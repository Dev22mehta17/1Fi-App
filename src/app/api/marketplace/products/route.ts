import { NextRequest, NextResponse } from 'next/server';
import { marketplaceApi } from '@/services/marketplaceApi';
import { ProductCategory } from '@/types/marketplace';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = (searchParams.get('category') as ProductCategory) || 'all';
    const searchQuery = searchParams.get('search') || '';
    const sortBy = (searchParams.get('sortBy') as any) || 'popular';

    const products = await marketplaceApi.getProducts({
      category,
      searchQuery,
      sortBy,
    });

    return NextResponse.json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch marketplace products' },
      { status: 500 }
    );
  }
}
