import { NextRequest, NextResponse } from "next/server";
import { productService } from "@/server/services/product.service";
import { SECURITY_HEADERS } from "@/lib/security/headers";

interface RouteParams {
  params: {
    slug: string;
  };
}

export async function GET(_req: NextRequest, { params }: RouteParams) {
  try {
    const { slug } = params;
    const product = await productService.getProductBySlug(slug);

    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404, headers: SECURITY_HEADERS }
      );
    }

    return NextResponse.json(
      {
        success: true,
        product,
      },
      {
        status: 200,
        headers: {
          ...SECURITY_HEADERS,
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (error) {
    console.error("[GET /api/products/[slug] Error]:", error);
    return NextResponse.json(
      { error: "Failed to fetch product details." },
      { status: 500, headers: SECURITY_HEADERS }
    );
  }
}
