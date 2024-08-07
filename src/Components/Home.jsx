import React from "react";
import HeroBanner from "./HeroBanner";
import IntroductionCV from "./IntroductionCV";
import Service from "./Service";
import Experience from "./Experience";
import Works from "./Works";
import Testimonial1 from "./Testimonial1";
import Contact from "./Contact";
import ContactData from "./contactData";
import LoginForm from "./Login";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <IntroductionCV />
      <Service />
      <Experience />
      <Works />
      <Testimonial1 />
      <Contact />
    </>
  );
};

export default Home;
