import { userRouter } from "~/server/api/routers/users";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { jobRouter } from "./routers/job-listing";

export const appRouter = createTRPCRouter({
  user: userRouter,
  job: jobRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
