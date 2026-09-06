import { NextRequest, NextResponse } from 'next/server';
import { marketplaceApi } from '@/services/marketplaceApi';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const product = await marketplaceApi.getProductById(id);

    if (!product) {
      return NextResponse.json(
        { success: false, message: 'Product not found' },
        { status: 404 }
      );
    }

    const { searchParams } = new URL(request.url);
    const variantId = searchParams.get('variantId') || product.variants[0]?.id;
    const selectedVariant =
      product.variants.find((v) => v.id === variantId) || product.variants[0];

    const emiPlans = await marketplaceApi.getEmiPlans(
      product.id,
      selectedVariant.id,
      selectedVariant.sellingPrice
    );

    return NextResponse.json({
      success: true,
      data: {
        product,
        selectedVariant,
        emiPlans,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch product details' },
      { status: 500 }
    );
  }
}
