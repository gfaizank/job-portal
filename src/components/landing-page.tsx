import Link from "next/link";
import { Button } from "./ui/button";
import CompanyCarousel from "./carousel";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Faq from "./faq";

const LandingPage: React.FC = () => {
  return (
    <main>
      <section className="flex w-full flex-col items-center justify-center text-center">
        <h1 className="gradient-title mt-6 max-w-4xl py-4 text-4xl font-extrabold tracking-tighter sm:text-6xl md:mt-24 lg:text-8xl">
          Find your Dream Job and get Hired
        </h1>
        <h3 className="w-3/4 text-sm text-gray-300 sm:mt-2 sm:text-2xl md:w-full">
          Explore thousands of job listings or find the perfect candidate
        </h3>
      </section>
      <div className="mt-4 flex w-full items-center justify-center gap-4 md:mt-8">
        <Link href={"/jobs"}>
          <Button>Find Jobs</Button>
        </Link>
        <Link href={"/post-job"}>
          <Button variant={"secondary"}>Post Jobs</Button>
        </Link>
      </div>

      {/* Carousel */}
      <CompanyCarousel />

      <div className="mx-auto mt-6 w-full md:mt-12 md:w-2/3">
        <Image
          src={"/companies/banner.webp"}
          alt="Banner"
          layout="responsive"
          width={1600}
          height={400}
          className="rounded-md"
        />
      </div>

      <section className="mx-auto my-12 grid max-w-7xl grid-cols-1 gap-4 px-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">
              For Job Seekers
            </CardTitle>
          </CardHeader>
          <CardContent className="leading-7 [&:not(:first-child)]:mt-2">
            Search and apply for jobs, track application, and more.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">
              For Employers
            </CardTitle>
          </CardHeader>
          <CardContent className="leading-7 [&:not(:first-child)]:mt-2">
            Post jobs, manage applicatios, and find the best candidates.
          </CardContent>
        </Card>
      </section>

      <Faq />
    </main>
  );
};

export default LandingPage;
