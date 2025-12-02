import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Services from "@/components/Home/Services";

export const metadata: Metadata = {
  title: "Services | Shubham Sanjiv Chavan",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
  ];

  return (
    <>
      <HeroSub
        title="My Services"
        description="I provide end-to-end Flutter development services including mobile app development, UI/UX design, API integration, performance optimization, and scalable architecture for modern applications."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Services />
    </>
  );
};

export default page;
