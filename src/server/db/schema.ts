import { sql } from "drizzle-orm";
import {
  boolean,
  pgEnum,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `job-portal_${name}`);

export const companies = createTable("companies", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  logo_url: varchar("logo_url", { length: 256 }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const jobRoleEnum = pgEnum("role", ["candidate", "recuiter"]);

export const users = createTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  email: varchar("email", { length: 256 }).unique(),
  company_id: serial("company_id").references(() => companies.id),
  role: jobRoleEnum("role"),
});

export const job = createTable("job", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }),
  salary: varchar("salary", { length: 64 }),
  company_id: serial("company_id").references(() => companies.id),
  recruiter_id: serial("recruiter_id").references(() => users.id),
  description: varchar("description", { length: 1024 }),
  location: varchar("location", { length: 50 }),
  requirement: varchar("requirement", { length: 1024 }),
  isOpen: boolean("isOpen").default(true),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const jobStatusEnum = pgEnum("status", [
  "applied",
  "interviewing",
  "hired",
  "rejected",
]);

export const application = createTable("application", {
  job_id: serial("job_id").references(() => job.id, { onDelete: "cascade" }),
  candidate_id: serial("candidate_id").references(() => users.id),
  status: jobStatusEnum("status"),
  resume: varchar("resume", { length: 256 }),
  skills: varchar("skills", { length: 256 }),
  experience: varchar("experience"),
  education: varchar("education"),
  name: varchar("name"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const savedJobs = createTable("saved-jobs", {
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  user_id: serial("user_id").references(() => users.id),
  job_id: serial("job_id").references(() => job.id, { onDelete: "cascade" }),
});
