import ContactForm from "@/components/Contact/Form";
import ContactInfo from "@/components/Contact/ContactInfo";
import Location from "@/components/Contact/OfficeLocation";
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Shubham Sanjiv Chavan",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <>
      <HeroSub
        title="Get In Touch"
        description="Have a Flutter app idea or need a mobile solution? Let’s discuss your project and transform your vision into a high-performance application."
        breadcrumbLinks={breadcrumbLinks}
      />
      <ContactInfo />
      {/* <ContactForm /> */}
      {/* <Location /> */}
    </>
  );
};

export default page;
