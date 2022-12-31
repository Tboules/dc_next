import { protectedProcedure, router } from "./../";
import { z } from "zod";

export const bibleRouter = router({
  getAllBookInfo: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.book_info.findMany();
  }),
});
