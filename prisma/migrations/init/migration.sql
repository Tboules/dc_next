-- CreateTable
CREATE TABLE "book_info" (
    "id" SMALLINT NOT NULL,
    "title" TEXT NOT NULL,
    "chapters" SMALLINT NOT NULL,

    CONSTRAINT "book_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nkjv" (
    "id" SERIAL NOT NULL,
    "book" SMALLINT NOT NULL,
    "chapter" SMALLINT NOT NULL,
    "verse" SMALLINT NOT NULL,
    "t" TEXT NOT NULL,

    CONSTRAINT "nkjv_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "book_info_title_key" ON "book_info"("title");

-- AddForeignKey
ALTER TABLE "nkjv" ADD CONSTRAINT "nkjv_book_fkey" FOREIGN KEY ("book") REFERENCES "book_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

