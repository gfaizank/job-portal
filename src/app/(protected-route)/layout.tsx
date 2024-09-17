// layout.tsx

import { ReactNode } from "react";
import ProtectedRoute from "./protected-route";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <ProtectedRoute>{children}</ProtectedRoute>;
};

export default Layout;
