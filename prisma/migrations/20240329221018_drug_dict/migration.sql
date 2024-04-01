-- CreateTable
CREATE TABLE "Product" (
    "PRODUCTID" TEXT NOT NULL,
    "PRODUCTNDC" TEXT NOT NULL,
    "PRODUCTTYPENAME" TEXT NOT NULL,
    "PROPRIETARYNAME" TEXT NOT NULL,
    "PROPRIETARYNAMESUFFIX" TEXT NOT NULL,
    "NONPROPRIETARYNAME" TEXT NOT NULL,
    "DOSAGEFORMNAME" TEXT NOT NULL,
    "ROUTENAME" TEXT NOT NULL,
    "STARTMARKETINGDATE" TEXT NOT NULL,
    "ENDMARKETINGDATE" TEXT NOT NULL,
    "MARKETINGCATEGORYNAME" TEXT NOT NULL,
    "APPLICATIONNUMBER" TEXT NOT NULL,
    "LABELERNAME" TEXT NOT NULL,
    "SUBSTANCENAME" TEXT NOT NULL,
    "ACTIVE_NUMERATOR_STRENGTH" TEXT NOT NULL,
    "ACTIVE_INGRED_UNIT" TEXT NOT NULL,
    "PHARM_CLASSES" TEXT NOT NULL,
    "DEASCHEDULE" TEXT NOT NULL,
    "NDC_EXCLUDE_FLAG" TEXT NOT NULL,
    "LISTING_RECORD_CERTIFIED_THROUGH" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("PRODUCTID")
);