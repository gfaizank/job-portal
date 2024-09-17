"use client";
import { useUser } from "@clerk/nextjs";
import { Button } from "~/components/ui/button";
import { BarLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Onboarding = () => {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const handleRoleSelection = async (role: string) => {
    if (!user) return;

    try {
      await user
        .update({ unsafeMetadata: { role } })
        .then(() => {
          router.push(role === "candidate" ? "/jobs" : "/post-job");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log("Error while selecting user");
    }
  };

  if (!isLoaded) {
    return <BarLoader className="mb-4" color="#36d7b7" />;
  }

  useEffect(() => {
    if (user?.unsafeMetadata.role) {
      router.push(
        user?.unsafeMetadata.role === "recruiter" ? "/post-job" : "jobs",
      );
    }
  }, [user]);

  return (
    <>
      <section className="flex flex-col items-center justify-center pt-32">
        <h2 className="gradient-title text-5xl font-extrabold tracking-wide sm:text-8xl">
          I am a...
        </h2>
        <div className="mt-6 flex w-full items-center justify-center gap-4 md:mt-16 md:px-40">
          <Button onClick={() => handleRoleSelection("candidate")}>
            Candidate
          </Button>
          <Button
            variant={"secondary"}
            onClick={() => handleRoleSelection("recruiter")}
          >
            Recruiter
          </Button>
        </div>
      </section>
    </>
  );
};

export default Onboarding;
