import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feel The Frame",
  description: "Premium video production services - from concept to creation",
};

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return <>{children}</>;
}