DO $$ BEGIN
 CREATE TYPE "public"."role" AS ENUM('candidate', 'recuiter');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."status" AS ENUM('applied', 'interviewing', 'hired', 'rejected');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "job-portal_application" (
	"job_id" serial NOT NULL,
	"candidate_id" serial NOT NULL,
	"status" "status",
	"resume" varchar(256),
	"skills" varchar(256),
	"experience" varchar,
	"education" varchar,
	"name" varchar,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "job-portal_companies" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"logo_url" varchar(256),
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "job-portal_job" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(256),
	"salary" varchar(64),
	"company_id" serial NOT NULL,
	"recruiter_id" serial NOT NULL,
	"description" varchar(1024),
	"location" varchar(50),
	"requirement" varchar(1024),
	"isOpen" boolean DEFAULT true,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "job-portal_saved-jobs" (
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"user_id" serial NOT NULL,
	"job_id" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "job-portal_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"email" varchar(256),
	"company_id" serial NOT NULL,
	"role" "role",
	CONSTRAINT "job-portal_users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "job-portal_application" ADD CONSTRAINT "job-portal_application_job_id_job-portal_job_id_fk" FOREIGN KEY ("job_id") REFERENCES "public"."job-portal_job"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "job-portal_application" ADD CONSTRAINT "job-portal_application_candidate_id_job-portal_users_id_fk" FOREIGN KEY ("candidate_id") REFERENCES "public"."job-portal_users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "job-portal_job" ADD CONSTRAINT "job-portal_job_company_id_job-portal_companies_id_fk" FOREIGN KEY ("company_id") REFERENCES "public"."job-portal_companies"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "job-portal_job" ADD CONSTRAINT "job-portal_job_recruiter_id_job-portal_users_id_fk" FOREIGN KEY ("recruiter_id") REFERENCES "public"."job-portal_users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "job-portal_saved-jobs" ADD CONSTRAINT "job-portal_saved-jobs_user_id_job-portal_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."job-portal_users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "job-portal_saved-jobs" ADD CONSTRAINT "job-portal_saved-jobs_job_id_job-portal_job_id_fk" FOREIGN KEY ("job_id") REFERENCES "public"."job-portal_job"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "job-portal_users" ADD CONSTRAINT "job-portal_users_company_id_job-portal_companies_id_fk" FOREIGN KEY ("company_id") REFERENCES "public"."job-portal_companies"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
