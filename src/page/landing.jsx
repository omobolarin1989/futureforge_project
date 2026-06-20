import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "../component/about";
import Hero from "../component/hero";
import Tracks from "../component/track";
import Testimonials from "../component/testimony";
import Facilitators from "../component/facilitators";
import Footer from "../component/footer";
import NextCohort from "../component/next-cohort";
import Header from "../component/header";


import Community from "../component/community";

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function Landing() {

  //for smooth scroll and hash scrollon
   const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, [location]);//This line reruns whenever the URL changes


  return (
    <section className=" text-white grow lg:w-full lg:max-w-[1440px] md xl:max-w-[2560px] lg:min-h-screen bg-gradient-to-b bg-[#0A0705] bg-[radial-gradient(140%_25%_at_40%_0%,_rgba(39,15,11,0.25)_2%,_rgba(146,64,14,0.15)_23%,_transparent_50%)] bg-local bg-no-repeat lg:px-[120px] px-[8px] flex flex-col lg:gap-y-[80px] gap-y-[70px] grow overflow-hidden">
   

      <Header />

      <Hero />
      <NextCohort />

        <section id="about-us">
          <About />
        </section>

      
      
        <section id="cohort-tracks">        
         <Tracks />
       </section>
       <section id="testimonial">
      <Testimonials />
      </section>

      <section id="futureforge-facilitators">
        <Facilitators />
      </section>
      <Community />
      
      <Footer />

      
    </section>
  );
}

export default Landing;
