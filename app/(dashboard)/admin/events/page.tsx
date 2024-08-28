import { getAllData } from "@/actions/eventAction";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EventTable } from "@/components/tables/admin/event-tables/table";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { events } from "@prisma/client";
import { Plus } from "lucide-react";
import Link from "next/link";

const breadcrumbItems = [
  { title: "Dashboard", link: "/admin" },
  { title: "Event", link: "/admin/events" },
];

export default async function page() {
  const events: events[] = await getAllData();
  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <Breadcrumbs items={breadcrumbItems} />

        <Separator />

        <EventTable data={events} key={"name"} />
      </div>
    </>
  );
}
