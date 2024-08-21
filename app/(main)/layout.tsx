import React from "react";
import Navbar from "@/components/Navbar";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className="h-full">{children}</main>;
    </>
  );
};

export default layout;
