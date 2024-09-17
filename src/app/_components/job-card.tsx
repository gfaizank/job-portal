interface jobTypes {
  id: number;
  createdAt: Date;
  company_id: number;
  title: string | null;
  salary: string | null;
  recruiter_id: number;
  description: string | null;
  location: string | null;
  requirement: string | null;
  isOpen: boolean | null;
}

interface jobsTypes {
  key: number;
  job: jobTypes;
}

const JobCard = ({ key, job }: jobsTypes) => {
  return <div>JobCard</div>;
};

export default JobCard;
