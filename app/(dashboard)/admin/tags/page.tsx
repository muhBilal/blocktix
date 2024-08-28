import { getAllData } from "@/actions/tagAction";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TagTable } from "@/components/tables/admin/tag-tables/table";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { tags } from "@prisma/client";
import { Plus } from "lucide-react";
import Link from "next/link";

const breadcrumbItems = [
  { title: "Dashboard", link: "/admin" },
  { title: "Tags", link: "/admin/tags" },
];

export default async function page() {
  const tags: tags[] = await getAllData();
  return (
    <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
      <Breadcrumbs items={breadcrumbItems} />
      <Separator />

      <TagTable data={tags} key={"name"} />
    </div>
  );
}
