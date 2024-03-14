import { createTRPCRouter, publicProcedure } from "../trpc";

export const burgerRouter = createTRPCRouter({
  get: createTRPCRouter({
    bestestFood: publicProcedure.query(() => "Burger"),
  })
});

export type AppRouter = typeof burgerRouter;