import { router, publicProcedure } from "../";
import { z } from "zod";
import { exampleRouter } from "./exampleRouter";
import { bibleRouter } from "./bible";

export const appRouter = router({
  example: exampleRouter,
  bible: bibleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
