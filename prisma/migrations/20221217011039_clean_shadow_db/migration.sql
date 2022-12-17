-- CreateEnum
CREATE TYPE "desert_figure_types" AS ENUM ('Author', 'Subject');

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

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "desert_figure" (
    "id" UUID NOT NULL,
    "prefix" VARCHAR(10),
    "first_name" VARCHAR(50),
    "last_name" VARCHAR(50),
    "suffix" VARCHAR(100),
    "date_of_birth" DATE,
    "date_of_death" DATE,
    "region" VARCHAR(100),
    "date_added" TIMESTAMP(6) NOT NULL,
    "type" "desert_figure_types" NOT NULL DEFAULT 'Author',

    CONSTRAINT "desert_figure_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quote" (
    "id" UUID NOT NULL,
    "quote" TEXT NOT NULL,
    "date_added" TIMESTAMP(6) NOT NULL,
    "century" SMALLINT,
    "reference_text" VARCHAR(250),
    "bible_reference_id" INTEGER,
    "desert_figure_id" UUID NOT NULL,

    CONSTRAINT "quote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tag" (
    "id" UUID NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "date_added" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_quoteTotag" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "book_info_title_key" ON "book_info"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "quote_bible_reference_id_key" ON "quote"("bible_reference_id");

-- CreateIndex
CREATE UNIQUE INDEX "tag_title_key" ON "tag"("title");

-- CreateIndex
CREATE UNIQUE INDEX "_quoteTotag_AB_unique" ON "_quoteTotag"("A", "B");

-- CreateIndex
CREATE INDEX "_quoteTotag_B_index" ON "_quoteTotag"("B");

-- AddForeignKey
ALTER TABLE "nkjv" ADD CONSTRAINT "nkjv_book_fkey" FOREIGN KEY ("book") REFERENCES "book_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quote" ADD CONSTRAINT "quote_bible_reference_id_fkey" FOREIGN KEY ("bible_reference_id") REFERENCES "nkjv"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quote" ADD CONSTRAINT "quote_desert_figure_id_fkey" FOREIGN KEY ("desert_figure_id") REFERENCES "desert_figure"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_quoteTotag" ADD CONSTRAINT "_quoteTotag_A_fkey" FOREIGN KEY ("A") REFERENCES "quote"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_quoteTotag" ADD CONSTRAINT "_quoteTotag_B_fkey" FOREIGN KEY ("B") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
