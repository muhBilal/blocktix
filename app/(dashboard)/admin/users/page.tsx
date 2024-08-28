import { Breadcrumbs } from "@/components/Breadcrumbs";
import { UserTable } from "@/components/tables/admin/user-tables/table";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { User } from "@/constants/data";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import { getAllData } from "@/actions/userActions";

const breadcrumbItems = [
  { title: "Dashboard", link: "/admin" },
  { title: "Users", link: "/admin/users" },
];

export default async function page() {
  const users: User[] = await getAllData();
  return (
    <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
      <Breadcrumbs items={breadcrumbItems} />
      <Separator />

      <UserTable data={users} key={"email"} />
    </div>
  );
}
