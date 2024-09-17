export interface FaqType {
  id: number;
  question: string;
  answer: string;
}
export const faq: FaqType[] = [
  {
    id: 1,
    question: "How do I post a job?",
    answer:
      "As an employer, you can post a job by navigating to the 'Post Job' section after logging in. Fill in the job details and submit the form to create a new job listing.",
  },
  {
    id: 2,
    question: "How can I search for jobs?",
    answer:
      "Job seekers can search for jobs by keywords, location, category, and other filters using the search bar on the homepage or the dedicated job search page.",
  },
  {
    id: 3,
    question: "How do I apply for a job?",
    answer:
      "To apply for a job, click on the job listing and follow the application instructions provided. You may need to upload your resume and provide additional information.",
  },
  {
    id: 4,
    question: "Can I save jobs to apply later?",
    answer:
      "Yes, you can save job listings by clicking the 'Save Job' button on the job listing. Saved jobs can be accessed from your profile under the 'Saved Jobs' section.",
  },
  {
    id: 5,
    question: "How do I track my job applications?",
    answer:
      "Job seekers can track the status of their applications from the 'Applications' section in their profile. This section provides updates on the progress of each application.",
  },
];