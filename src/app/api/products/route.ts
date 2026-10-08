import { NextRequest, NextResponse } from "next/server";
import { productService } from "@/server/services/product.service";
import { SECURITY_HEADERS } from "@/lib/security/headers";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type");

    let products;
    if (type === "ORIGINAL") {
      products = await productService.getOriginals();
    } else if (type === "BUILD") {
      products = await productService.getBuilds();
    } else {
      products = await productService.getPublicProducts();
    }

    return NextResponse.json(
      {
        success: true,
        count: products.length,
        products,
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
    console.error("[GET /api/products Error]:", error);
    return NextResponse.json(
      { error: "Unable to retrieve products." },
      { status: 500, headers: SECURITY_HEADERS }
    );
  }
}
