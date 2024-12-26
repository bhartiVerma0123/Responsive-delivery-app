import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Section } from "./About/Section";
import { Section3 } from "./About/Section3";
import { Section5 } from "./About/Section5";
import { Section6 } from "./About/Section6";

export const Layout = () => {
  return (
    <>
      <Header />
      <Section />
      <Section3 />
      <Section5/>
      <Section6/>
      <Footer />
    </>
  );
};
