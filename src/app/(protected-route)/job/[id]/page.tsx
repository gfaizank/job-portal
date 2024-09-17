"use client";
import { useParams } from "next/navigation";

const JobPage = () => {
  const { id } = useParams<{ id: string }>();
  return <div>JobPage {id}</div>;
};

export default JobPage;
