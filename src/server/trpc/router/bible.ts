import { protectedProcedure, router } from "./../";
import { z } from "zod";

export const bibleRouter = router({
  getAllBookInfo: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.book_info.findMany();
  }),
  getVerseCount: protectedProcedure
    .input(
      z.object({
        book: z.number(),
        chapter: z.number(),
      })
    )
    .query(({ input, ctx }) => {
      return ctx.prisma.nkjv.count({
        where: {
          book: input.book,
          chapter: input.chapter,
        },
      });
    }),
  getVerse: protectedProcedure
    .input(
      z.object({
        book: z.number(),
        chapter: z.number(),
        verse: z.number(),
      })
    )
    .query(({ input, ctx }) => {
      return ctx.prisma.nkjv.findFirstOrThrow({
        where: {
          book: input.book,
          chapter: input.chapter,
          verse: input.verse,
        },
      });
    }),
});
