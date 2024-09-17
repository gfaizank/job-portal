// import { z } from "zod";
import { db } from "~/server/db";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const jobRouter = createTRPCRouter({
  jobs: publicProcedure.query(async () => {
    const jobs = await db.query.job.findMany();
    return jobs;
  }),
});
