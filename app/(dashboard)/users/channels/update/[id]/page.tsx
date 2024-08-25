"use client";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import FileUpload from "@/components/FileUpload";
import { useEffect } from "react";

const breadcrumbItems = [
  { title: "Dashboard", link: "/users" },
  { title: "Channels", link: "/users/channels" },
  { title: "Update", link: "/users/channels/update" },
];

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
  image: z.string().min(2, {
    message: "Image must be exists.",
  }),
});

export default function Page({ params }: { params: { id: string } }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const router = useRouter();

  const isLoading = form.formState.isSubmitting;

  const updateHandler = async (values: z.infer<typeof formSchema>) => {
    try {
      const req = await fetch(
        process.env.API_BASE_URL + "/channels/" + params.id,
        {
          method: "POST",
          body: JSON.stringify(values),
        }
      );
      if (req.ok) {
        toast.success("Success!");

        router.push("/admin/tags");
      }
    } catch (err) {
      toast.error("Failed!");
      console.log(err);
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await updateHandler(values);
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Update Channel`}
            description="Lengkapi form untuk mengedit channel"
          />
        </div>
        <Separator />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Background Channel</FormLabel>
                  <FormControl>
                    <FileUpload
                      apiEndpoint="image"
                      onChange={field.onChange}
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Channel</FormLabel>
                  <FormControl>
                    <Input disabled={isLoading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Deskripsi Channel</FormLabel>
                  <FormControl>
                    <Input disabled={isLoading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : "Submit"}
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}
