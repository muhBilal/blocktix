import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import { categories } from "@prisma/client";
import { getAllData } from "@/actions/categoryAction";
import { CategoryTable } from "@/components/tables/admin/categories-tables/table";

const breadcrumbItems = [
  { title: "Dashboard", link: "/admin" },
  { title: "Categories", link: "/admin/categories" },
];

export default async function page() {
  const categories: categories[] = await getAllData();
  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <Separator />

        <CategoryTable data={categories} key={"name"} />
      </div>
    </>
  );
}
