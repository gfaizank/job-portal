import JobCard from "~/app/_components/job-card";
import { api } from "~/trpc/server";

const Jobs = async () => {
  const jobs = await api.job.jobs();
  return (
    <div>
      <h1 className="gradient-title pb-8 text-center text-6xl font-extrabold sm:text-7xl">
        Latest Jobs
      </h1>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default Jobs;
