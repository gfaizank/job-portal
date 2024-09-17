"use client";

import {
  SignedIn,
  SignedOut,
  SignIn,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Briefcase, Heart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";

const Navbar = () => {
  const { user } = useUser();
  const [showSignin, setShowSignin] = useState(false);
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("sign-in")) {
      setShowSignin(true);
      query.delete("sign-in");
    }
  }, []);
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShowSignin(false);
    }
  };
  return (
    <nav className="flex items-center justify-between px-4 py-4">
      <Link href={"/"} className="font-semibold text-slate-100">
        Job Portal
      </Link>
      <div className="flex items-center gap-4">
        {user?.unsafeMetadata?.role === "recruiter" && (
          <Button size={"sm"} variant={"secondary"}>
            Post jobs
          </Button>
        )}
        <SignedOut>
          <Button variant={"outline"} onClick={() => setShowSignin(true)}>
            Get started
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-8 h-8 rounded-none",
              },
            }}
          >
            <UserButton.MenuItems>
              <UserButton.Link
                label="My Jobs"
                labelIcon={<Briefcase size={15} />}
                href="/my-jobs"
              />
              <UserButton.Link
                label="Saved Jobs"
                labelIcon={<Heart size={15} />}
                href="/saved-jobs"
              />
            </UserButton.MenuItems>
          </UserButton>
        </SignedIn>
      </div>

      {showSignin && (
        <div
          className="fixed inset-0 left-0 top-0 z-20 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleOverlayClick}
        >
          <SignIn
            routing="hash"
            signUpFallbackRedirectUrl={"/onboarding"}
            fallbackRedirectUrl={"/onboarding"}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
