-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProductTocategory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "category_name_key" ON "category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductTocategory_AB_unique" ON "_ProductTocategory"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductTocategory_B_index" ON "_ProductTocategory"("B");

-- AddForeignKey
ALTER TABLE "_ProductTocategory" ADD CONSTRAINT "_ProductTocategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductTocategory" ADD CONSTRAINT "_ProductTocategory_B_fkey" FOREIGN KEY ("B") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
