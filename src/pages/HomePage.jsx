import React from "react";

import TopSection from "./sections/HomePageSection/TopSection";
import AboutMeSection from "./sections/HomePageSection/AboutMeSection";
import ServicesSection from "./sections/HomePageSection/ServiceSection";
import ProjectSection from "./sections/HomePageSection/ProjectSection";

export default function Home() {
  return (
    <>
      <TopSection />
      <AboutMeSection />
      <ServicesSection />
      <ProjectSection/>
    </>
  );
}
