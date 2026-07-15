import React from "react";

import TopSection from "./sections/HomePageSection/TopSection";
import EducationSection from "./sections/HomePageSection/EducationSection";
import AboutMeSection from "./sections/HomePageSection/AboutMeSection";
import ServicesSection from "./sections/HomePageSection/ServiceSection";

export default function Home() {
  return (
    <>
      <TopSection />
      <EducationSection />
      <AboutMeSection />
      <ServicesSection />
    </>
  );
}
