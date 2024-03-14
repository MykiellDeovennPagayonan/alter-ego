import { createTRPCRouter, publicProcedure } from "../trpc";

export const externalAPIRouter = createTRPCRouter({
  getData: publicProcedure.query(async () => {
    const response = await fetch("https://api.example.com/data");
    const data : string = await response.json() as string;
    return data;
  }),
});

export type ExternalAPIRouter = typeof externalAPIRouter;