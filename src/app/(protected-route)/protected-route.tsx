"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isSignedIn, isLoaded, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/?sign-in=true");
    } else if (isLoaded && isSignedIn && user && !user.unsafeMetadata.role) {
      if (window.location.pathname !== "/onboarding") {
        router.push("/onboarding");
      }
    }
  }, [isLoaded, isSignedIn, user, router]);

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
