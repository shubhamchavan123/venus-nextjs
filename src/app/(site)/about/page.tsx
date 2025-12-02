import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Counter from "@/components/Home/Counter";
import Progresswork from "@/components/Home/WorkProgress";

export const metadata: Metadata = {
  title: "About | Shubham Sanjiv Chavan",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About Me" },
  ];

  return (
    <>
      <HeroSub
        title="About Me"
        description="I am Shubham Sanjiv Chavan, a passionate Flutter Developer with experience in creating scalable, performance-driven mobile applications using modern architecture, clean UI, and seamless backend integration."
        breadcrumbLinks={breadcrumbLinks}
      />

      <Counter isColorMode={true} />

      <Progresswork isColorMode={true} />
    </>
  );
};

export default page;
