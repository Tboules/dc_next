-- DropForeignKey
ALTER TABLE "quote" DROP CONSTRAINT "quote_desert_figure_id_fkey";

-- AlterTable
ALTER TABLE "quote" ALTER COLUMN "desert_figure_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "quote" ADD CONSTRAINT "quote_desert_figure_id_fkey" FOREIGN KEY ("desert_figure_id") REFERENCES "desert_figure"("id") ON DELETE SET NULL ON UPDATE CASCADE;
