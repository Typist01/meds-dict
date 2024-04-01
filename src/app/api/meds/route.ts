import { Prisma, PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: Response) {
  const query = req.nextUrl.searchParams.get("query") || "";
  const page = req.nextUrl.searchParams.get("page");
  const pageSize = req.nextUrl.searchParams.get("pageSize");

  const currentPage = (page && parseInt(page)) || 1;
  const itemsPerPage = (pageSize && parseInt(pageSize)) || 10;
  const whereConditions: Prisma.ProductWhereInput = {
    OR: [
      { PRODUCTNDC: { contains: query, mode: "insensitive" } },
      { PRODUCTTYPENAME: { contains: query, mode: "insensitive" } },
      { PROPRIETARYNAME: { contains: query, mode: "insensitive" } },
      { PROPRIETARYNAMESUFFIX: { contains: query, mode: "insensitive" } },
      { NONPROPRIETARYNAME: { contains: query, mode: "insensitive" } },
      { DOSAGEFORMNAME: { contains: query, mode: "insensitive" } },
      { ROUTENAME: { contains: query, mode: "insensitive" } },
      { STARTMARKETINGDATE: { contains: query, mode: "insensitive" } },
      { ENDMARKETINGDATE: { contains: query, mode: "insensitive" } },
      { MARKETINGCATEGORYNAME: { contains: query, mode: "insensitive" } },
      { APPLICATIONNUMBER: { contains: query, mode: "insensitive" } },
      { LABELERNAME: { contains: query, mode: "insensitive" } },
      { SUBSTANCENAME: { contains: query, mode: "insensitive" } },
      {
        ACTIVE_NUMERATOR_STRENGTH: { contains: query, mode: "insensitive" },
      },
      { ACTIVE_INGRED_UNIT: { contains: query, mode: "insensitive" } },
      { PHARM_CLASSES: { contains: query, mode: "insensitive" } },
      { DEASCHEDULE: { contains: query, mode: "insensitive" } },
      { NDC_EXCLUDE_FLAG: { contains: query, mode: "insensitive" } },
      {
        LISTING_RECORD_CERTIFIED_THROUGH: {
          contains: query,
          mode: "insensitive",
        },
      },
    ],
  };

  try {
    const products = await prisma.product.findMany({
      where: whereConditions,
      skip: (currentPage - 1) * itemsPerPage,
      take: itemsPerPage,
    });

    console.log(products);

    const totalItems = await prisma.product.count({ where: whereConditions });

    return new NextResponse(
      JSON.stringify({
        products,
        pagination: {
          currentPage,
          itemsPerPage,
          totalPages: Math.ceil(totalItems / itemsPerPage),
        },
      })
    );
  } catch (error: any) {
    console.error("error", error);
    return new NextResponse(JSON.stringify({ error }), {
      status: error.status || 500,
    });
  }
}
