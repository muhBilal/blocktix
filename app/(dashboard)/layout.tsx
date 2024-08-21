import { checkUser } from "@/actions/userActions";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Annect - Dashboard Page",
  description: "Dashboard Page",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await checkUser();
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-hidden pt-16">{children}</main>
      </div>
    </>
  );
}
