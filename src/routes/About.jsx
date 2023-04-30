import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

const About = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Navbar />
        <Hero
          cName="hero-mid"
          heroImg="https://risingnepaldaily.com/storage/media/22707/Screenshot-2023-04-09-125024.png"
          title="About"
          btnClass="hide"
        />
      </div>
      <AboutUs />
      <Footer />
    </div>
  );
};

export default About;
