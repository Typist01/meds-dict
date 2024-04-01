import { PrismaClient } from "@prisma/client";
import fs from "fs";

const prisma = new PrismaClient();
const getFileContents = () => {
  return fs.readFileSync(__dirname + "/product.txt", "utf8");
};

async function main() {
  const lines = getFileContents().split("\r\n");
  if (lines.length > 1) {
    lines.shift();
  }

  const productsToCreate = lines.map((line) => {
    const fields = line.split("\t");

    // Map fields to your Prisma model (adjust the indexes if needed)
    return {
      PRODUCTID: fields[0],
      PRODUCTNDC: fields[1],
      PRODUCTTYPENAME: fields[2],
      PROPRIETARYNAME: fields[3],
      PROPRIETARYNAMESUFFIX: fields[4],
      NONPROPRIETARYNAME: fields[5],
      DOSAGEFORMNAME: fields[6],
      ROUTENAME: fields[7],
      STARTMARKETINGDATE: fields[8],
      ENDMARKETINGDATE: fields[9],
      MARKETINGCATEGORYNAME: fields[10],
      APPLICATIONNUMBER: fields[11],
      LABELERNAME: fields[12],
      SUBSTANCENAME: fields[13],
      ACTIVE_NUMERATOR_STRENGTH: fields[14],
      ACTIVE_INGRED_UNIT: fields[15],
      PHARM_CLASSES: fields[16],
      DEASCHEDULE: fields[17],
      NDC_EXCLUDE_FLAG: fields[18],
      LISTING_RECORD_CERTIFIED_THROUGH: fields[19],
    };
  });

  await prisma.product.createMany({
    data: productsToCreate,
    skipDuplicates: true,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
