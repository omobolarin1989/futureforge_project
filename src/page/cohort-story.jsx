// import About from "../component/about";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { TbArrowRight } from "react-icons/tb";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../component/header";

// import RegistrationForm from "./registration-form";
// import Header from "../component/header";
import Community from "../component/community";
import StoriesFooter from "../component/footer copy";
import { Link } from "react-router-dom";


function CohortStory() {

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
  }, [location]); //This line reruns whenever the URL changes

  return (

    
    <div className="font-Gadugi lg:w-full md-w-full w-full overflow-x-hidden bg-gradient-to-b bg-[#0A0705] bg-[radial-gradient(150%_35%_at_35%_2%,_rgba(60,22,11,0.90)_5%,_rgba(146,64,14,0.15)_20%,_transparent_90%)] bg-no-repeat text-white py-[16px] flex flex-col gap-y-[80px] lg:gap-y-[120px] lg:px-[80px] px-[20px] md:px-[30px]">
      <Header />

      <main className="flex flex-col lg:w-full w-full lg:gap-y-[120px] gap-y-[80px]">
      <div className="main w-full lg:gap-y-[150px] gap-y-[70px] flex flex-col">
        <div className="w-full flex justify-center">
          <div className="story-header flex flex-col justify-center items-center w-full lg:w-[851px] w-full gap-y-[16px]">
            <h1 className="lg:w-[851px] w-full max-w-full md:w-[440px] lg:text-[72px] md:text-[50px] text-[44px] font-[700] lg:leading-[110%] leading-[114.999999999%] tracking-[-1.5%] lg:tracking-[-2%] text-center">
              Every Cohort Tells a Story.
            </h1>
            <p className="text-[#ffffff] lg:w-full lg:max-w-[851px] w-full max-w-[320px] md:w-[90%] lg:text-[16px] text-[16px] md:text-[18px] font-[400] leading-[160%] tracking-[0.2%] lg:tracking-[0%] text-center">
              Explore the journeys of FutureForge graduates across different
              cohorts. Browse past classes, discover graduate stories, and see
              how learners grew through mentorship, collaboration, and practical
              learning.
            </p>

            <div className="counter flex lg:w- w-full justify-between px-[2px]">
              <div>
              <strong aria-label="cohort 1" className="flex flex-col items-center lg:text-[48px] text-[36px] font-[700] leading-[120%] tracking-[1%]">
                1{" "}
                <span className="text-[#D4D4D4] text-[18px] font-[400] leading-[100%] tracking-[0%]">
                  Cohorts
                </span>
                
              </strong>
              </div>
              <div aria-label="268 graduates" className="flex lg:justify-between justify-center lg:gap-10 ">
              <strong className="flex flex-col items-center lg:text-[48px] text-[36px] font-[700] leading-[120%] tracking-[1%]">
                268+
                <span className="text-[#D4D4D4] text-[18px] font-[400] leading-[100%] tracking-[0%]">
                  Graduates
                </span>
              </strong>

              </div>
              <div>
              <p className="flex flex-col items-center lg:text-[48px] text-[36px] font-[700] leading-[120%] tracking-[1%]">
                5{" "}
                <span className="text-[#D4D4D4] text-[18px] font-[400] leading-[100%] tracking-[0%]">
                  Tracks
                </span>
              </p>
              </div>
            </div>
          </div>
        </div>

        <div className="cohort-grid lg:grid flex flex-col lg:grid-cols-3 lg:justify-evenly lg:grid-rows-3 lg:w-full w-full lg:gap-y-[20px] gap-y-[20px] lg:gap-x-[20px]">
         
          <article className="bg-[#171717] content-grid lg:w-full w-full lg:h-[336px] h-auto w-full flex flex-col gap-y-20px rounded-[24px] lg-gap-x-0">
            <div className="content-container flex flex-col lg:p-[24px] p-[24px]">
               <div className="content-container flex flex-col lg:gap-y-[16px] gap-y-[36px] border-b border-[#262626] pb-4">
               <div className="flex justify-between lg:gap-y-20px gap-y-[8px]">
                <p className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%] ">
                  Completed
                </p>
                <p className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                  feb - June 2026
                </p>
              </div>
              <div className="flex flex-col lg:gap-[20px] gap-[8px]">
                <h2 className="text-[24px] lg:text-[32px] font-[700] leading-[130%] tracking-[0.25%] ">
                  Cohort 01
                </h2>
                <p className="text-[#A3A3A3] w-full md:max-w-[550px] text-[14px] md:text-[16px] lg:text-[14px] font-[400] leading-[155%] lg:tracking-[0.2%] tracking-[0.5%]">
                  Cohort 01 was the year FutureForge stopped teaching tools and
                  started teaching taste. The class shipped fewer things, but
                  each one had a point of view.
                </p>
              </div>
              <div className="flex justify-between w-[50%]">
                <p className="text-[14px] font-[700] ">
                  268+{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    Graduates
                  </span>
                </p>
                <p className="text-[14px] font-[700] ">
                  7{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    {" "}
                    Tracks
                  </span>
                </p>
              </div>
               </div>
              <div className="flex justify-between items-center lg:pt-6 pt-2 md:pt-4.5">
                <p className="text-[14px] font-[400] leading-[150%] tracking[0.5%]">
                  explore
                </p>

                <Link to="/Cohort1" aria-label="View Cohort 01 details" className="focus:outline-none
focus:ring-2
focus:ring-white">
                  
                    <TbArrowRight className="lg:rounded-[50%] rounded-[80%] lg:text-[40px] text-[30px] p- bg-linear-to-r from-[var(--primary-color)] to-[var(--secondary-color)] cursor-pointer" aria-hidden="true"/>
                  
                </Link>

              </div>
            </div>
          </article>

          <article className="bg-[#171717] content-grid lg:w-full w-full lg:h-[336px] h-auto w-full flex flex-col gap-y-20px rounded-[24px] lg-gap-x-0 ">
            <div className="content-container flex flex-col lg:p-[24px] p-[24px]">
               <div className="content-container flex flex-col lg:gap-y-[16px] gap-y-[36px] border-b border-[#262626] pb-4">
               <div className="flex justify-between lg:gap-y-20px gap-y-[8px]">
                <p className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%] ">
                  Completed
                </p>
                <p className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                  feb - June 2027
                </p>
              </div>
              <div className="flex flex-col lg:gap-[20px] gap-[8px]">
                <h3 className="text-[24px] lg:text-[32px] font-[700] leading-[130%] tracking-[0.25%] ">
                  Cohort 02
                </h3>
                <p className="text-[#A3A3A3] w-full md:max-w-[550px] text-[14px] md:text-[16px]  lg:text-[14px] font-[400] leading-[155%] lg:tracking-[0.2%] tracking-[0.5%]">
                  Cohort 02 was the year FutureForge stopped teaching tools and
                  started teaching taste. The class shipped fewer things, but
                  each one had a point of view.
                </p>
              </div>
              <div className="flex justify-between w-[50%]">
                <p className="text-[14px] font-[700] ">
                  268+{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    Graduates
                  </span>
                </p>
                <p className="text-[14px] font-[700] ">
                  7{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    {" "}
                    Tracks
                  </span>
                </p>
              </div>
               </div>
              <div className="flex justify-between items-center lg:pt-6 pt-2 md:pt-4.5">
                <p className="text-[14px] font-[400] leading-[150%] tracking[0.5%]">
                  explore
                </p>
                <TbArrowRight  className="lg:rounded-[50%] rounded-[80%] lg:text-[40px] text-[30px] p- bg-linear-to-r from-[var(--primary-color)] to-[var(--secondary-color)] cursor-pointer" aria-hidden="true" />
              </div>
            </div>
          </article>

           <article className="bg-[#171717] content-grid llg:w-full lg:h-[336px] h-auto w-full flex flex-col gap-y-20px rounded-[24px] lg-gap-x-0">
            <div className="content-container flex flex-col lg:p-[24px] p-[24px]">
               <div className="content-container flex flex-col lg:gap-y-[16px] gap-y-[36px] border-b border-[#262626] pb-4">
               <div className="flex justify-between lg:gap-y-20px gap-y-[8px]">
                <p className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%] ">
                  Completed
                </p>
                <p className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                  feb - June 2028
                </p>
              </div>
              <div className="flex flex-col lg:gap-[20px] gap-[8px]">
                <h3 className="text-[24px] lg:text-[32px] font-[700] leading-[130%] tracking-[0.25%] ">
                  Cohort 03
                </h3>
                <p className="text-[#A3A3A3] lg:w-[100%] w-full md:max-w-[550px] text-[14px] md:text-[16px] lg:text-[14px] font-[400] leading-[155%] lg:tracking-[0.2%] tracking-[0.5%]">
                  Cohort 03 was the year FutureForge stopped teaching tools and
                  started teaching taste. The class shipped fewer things, but
                  each one had a point of view.
                </p>
              </div>
              <div className="flex justify-between w-[50%]">
                <p className="text-[14px] font-[700] ">
                  268+{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    Graduates
                  </span>
                </p>
                <p className="text-[14px] font-[700] ">
                  7{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    {" "}
                    Tracks
                  </span>
                </p>
              </div>
               </div>
              <div className="flex justify-between items-center lg:pt-6 pt-2 md:pt-4.5">
                <p className="text-[14px] font-[400] leading-[150%] tracking[0.5%]">
                  explore
                </p>
                <TbArrowRight  className="lg:rounded-[50%] rounded-[80%] lg:text-[40px] text-[30px] p- bg-linear-to-r from-[var(--primary-color)] to-[var(--secondary-color)] cursor-pointer" aria-hidden="true" />
              </div>
            </div>
          </article>

           <article className="bg-[#171717] content-grid lg:w-full lg:h-[336px] h-auto w-full flex flex-col gap-y-20px rounded-[24px] lg-gap-x-0">
            <div className="content-container flex flex-col lg:p-[24px] p-[24px]">
               <div className="content-container flex flex-col lg:gap-y-[16px] gap-y-[36px] border-b border-[#262626] pb-4">
               <div className="flex justify-between lg:gap-y-20px gap-y-[8px]">
                <p className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%] ">
                  Completed
                </p>
                <p className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                  feb - June 2029
                </p>
              </div>
              <div className="flex flex-col lg:gap-[20px] gap-[8px]">
                <h3 className="text-[24px] lg:text-[32px] font-[700] leading-[130%] tracking-[0.25%] ">
                  Cohort 04
                </h3>
                <p className="text-[#A3A3A3] lg:w-[100%] w-full md:max-w-[550px] text-[14px] md:text-[16px] lg:text-[14px] font-[400] leading-[155%] lg:tracking-[0.2%] tracking-[0.5%]">
                  Cohort 04 was the year FutureForge stopped teaching tools and
                  started teaching taste. The class shipped fewer things, but
                  each one had a point of view.
                </p>
              </div>
              <div className="flex justify-between w-[50%]">
                <p className="text-[14px] font-[700] ">
                  268+{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    Graduates
                  </span>
                </p>
                <p className="text-[14px] font-[700] ">
                  7{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    {" "}
                    Tracks
                  </span>
                </p>
              </div>
               </div>
              <div className="flex justify-between items-center lg:pt-6 pt-2 md:pt-4.5">
                <p className="text-[14px] font-[400] leading-[150%] tracking[0.5%]">
                  explore
                </p>
                <TbArrowRight  className="lg:rounded-[50%] rounded-[80%] lg:text-[40px] text-[30px] p- bg-linear-to-r from-[var(--primary-color)] to-[var(--secondary-color)] cursor-pointer" aria-hidden="true" />
              </div>
            </div>
          </article>

           <article className="bg-[#171717] content-grid lg:w-full lg:h-[336px] h-auto w-full flex flex-col gap-y-20px rounded-[24px] lg-gap-x-0">
            <div className="content-container flex flex-col lg:p-[24px] p-[24px]">
               <div className="content-container flex flex-col lg:gap-y-[16px] gap-y-[36px] border-b border-[#262626] pb-4">
               <div className="flex justify-between lg:gap-y-20px gap-y-[8px]">
                <p className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%] ">
                  Completed
                </p>
                <p className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                  feb - June 2030
                </p>
              </div>
              <div className="flex flex-col lg:gap-[20px] gap-[8px]">
                <h3 className="text-[24px] lg:text-[32px] font-[700] leading-[130%] tracking-[0.25%] ">
                  Cohort 05
                </h3>
                <p className="text-[#A3A3A3] lg:w-[100%] w-full md:max-w-[550px] md:text-[16px] text-[14px] lg:text-[14px] font-[400] leading-[155%] lg:tracking-[0.2%] tracking-[0.5%]">
                  Cohort 05 was the year FutureForge stopped teaching tools and
                  started teaching taste. The class shipped fewer things, but
                  each one had a point of view.
                </p>
              </div>
              <div className="flex justify-between w-[50%]">
                <p className="text-[14px] font-[700] ">
                  268+{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    Graduates
                  </span>
                </p>
                <p className="text-[14px] font-[700] ">
                  7{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    {" "}
                    Tracks
                  </span>
                </p>
              </div>
               </div>
              <div className="flex justify-between items-center lg:pt-6 pt-2 md:pt-4.5">
                <p className="text-[14px] font-[400] leading-[150%] tracking[0.5%]">
                  explore
                </p>
                <TbArrowRight  className="lg:rounded-[50%] rounded-[80%] lg:text-[40px] text-[30px] p- bg-linear-to-r from-[var(--primary-color)] to-[var(--secondary-color)] cursor-pointer" aria-hidden="true" />
              </div>
            </div>
          </article>

           <article className="bg-[#171717] content-grid lg:w-full lg:h-[336px] h-auto w-full flex flex-col gap-y-20px rounded-[24px] lg-gap-x-0">
            <div className="content-container flex flex-col lg:p-[24px] p-[24px]">
               <div className="content-container flex flex-col lg:gap-y-[16px] gap-y-[36px] border-b border-[#262626] pb-4">
               <div className="flex justify-between lg:gap-y-20px gap-y-[8px]">
                <p className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%] ">
                  Completed
                </p>
                <p className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                  feb - June 2031
                </p>
              </div>
              <div className="flex flex-col lg:gap-[20px] gap-[8px]">
                <h3 className="text-[24px] lg:text-[32px] font-[700] leading-[130%] tracking-[0.25%] ">
                  Cohort 06
                </h3>
                <p className="text-[#A3A3A3] lg:w-[100%] w-full md:max-w-[550px] md:text-[16px] text-[14px] lg:text-[14px] font-[400] leading-[155%] lg:tracking-[0.2%] tracking-[0.5%]">
                  Cohort 06 was the year FutureForge stopped teaching tools and
                  started teaching taste. The class shipped fewer things, but
                  each one had a point of view.
                </p>
              </div>
              <div className="flex justify-between w-[50%]">
                <p className="text-[14px] font-[700] ">
                  268+{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    Graduates
                  </span>
                </p>
                <p className="text-[14px] font-[700] ">
                  7{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    {" "}
                    Tracks
                  </span>
                </p>
              </div>
               </div>
              <div className="flex justify-between items-center lg:pt-6 pt-2 md:pt-4.5">
                <p className="text-[14px] font-[400] leading-[150%] tracking[0.5%]">
                  explore
                </p>
                <TbArrowRight  className="lg:rounded-[50%] rounded-[80%] lg:text-[40px] text-[30px] p- bg-linear-to-r from-[var(--primary-color)] to-[var(--secondary-color)] cursor-pointer" aria-hidden="true" />
              </div>
            </div>
          </article>

           <article className="bg-[#171717] content-grid lg:w-full lg:h-[336px] h-auto w-full flex flex-col gap-y-20px rounded-[24px] lg-gap-x-0 ">
            <div className="content-container flex flex-col lg:p-[24px] p-[24px]">
               <div className="content-container flex flex-col lg:gap-y-[16px] gap-y-[36px] border-b border-[#262626] pb-4">
               <div className="flex justify-between lg:gap-y-20px gap-y-[8px]">
                <p className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%] ">
                  Completed
                </p>
                <p className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                  feb - June 2032
                </p>
              </div>
              <div className="flex flex-col lg:gap-[20px] gap-[8px]">
                <h3 className="text-[24px] lg:text-[32px] font-[700] leading-[130%] tracking-[0.25%] ">
                  Cohort 07
                </h3>
                <p className="text-[#A3A3A3] lg:w-[100%] w-full md:max-w-[550px] md:text-[16px] text-[14px] lg:text-[14px] font-[400] leading-[155%] lg:tracking-[0.2%] tracking-[0.5%]">
                  Cohort 07 was the year FutureForge stopped teaching tools and
                  started teaching taste. The class shipped fewer things, but
                  each one had a point of view.
                </p>
              </div>
              <div className="flex justify-between w-[50%]">
                <p className="text-[14px] font-[700] ">
                  268+{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    Graduates
                  </span>
                </p>
                <p className="text-[14px] font-[700] ">
                  7{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    {" "}
                    Tracks
                  </span>
                </p>
              </div>
               </div>
              <div className="flex justify-between items-center lg:pt-6 pt-2 md:pt-4.5">
                <p className="text-[14px] font-[400] leading-[150%] tracking[0.5%]">
                  explore
                </p>
                <TbArrowRight  className="lg:rounded-[50%] rounded-[80%] lg:text-[40px] text-[30px] p- bg-linear-to-r from-[var(--primary-color)] to-[var(--secondary-color)] cursor-pointer" aria-hidden="true" />
              </div>
            </div>
          </article>

           <article className="bg-[#171717] content-grid lg:w-full lg:h-[336px] h-auto w-full flex flex-col gap-y-20px rounded-[24px] lg-gap-x-0">
            <div className="content-container flex flex-col lg:p-[24px] p-[24px]">
               <div className="content-container flex flex-col lg:gap-y-[16px] gap-y-[36px] border-b border-[#262626] pb-4">
               <div className="flex justify-between lg:gap-y-20px gap-y-[8px]">
                <p className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%] ">
                  Completed
                </p>
                <p className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                  feb - June 2033
                </p>
              </div>
              <div className="flex flex-col lg:gap-[20px] gap-[8px]">
                <h3 className="text-[24px] lg:text-[32px] font-[700] leading-[130%] tracking-[0.25%] ">
                  Cohort 08
                </h3>
                <p className="text-[#A3A3A3] lg:w-[100%] w-full md:max-w-[550px] md:text-[16px] text-[14px] lg:text-[14px] font-[400] leading-[155%] lg:tracking-[0.2%] tracking-[0.5%]">
                  Cohort 08 was the year FutureForge stopped teaching tools and
                  started teaching taste. The class shipped fewer things, but
                  each one had a point of view.
                </p>
              </div>
              <div className="flex justify-between w-[50%]">
                <p className="text-[14px] font-[700] ">
                  268+{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    Graduates
                  </span>
                </p>
                <p className="text-[14px] font-[700] ">
                  7{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    {" "}
                    Tracks
                  </span>
                </p>
              </div>
               </div>
              <div className="flex justify-between items-center lg:pt-6 pt-2 md:pt-4.5">
                <p className="text-[14px] font-[400] leading-[150%] tracking[0.5%]">
                  explore
                </p>
                <TbArrowRight  className="lg:rounded-[50%] rounded-[80%] lg:text-[40px] text-[30px] p- bg-linear-to-r from-[var(--primary-color)] to-[var(--secondary-color)] cursor-pointer" aria-hidden="true" />
              </div>
            </div>
          </article>

           <article className="bg-[#171717] content-grid llg:w-full lg:h-[336px] h-auto w-full flex flex-col gap-y-20px rounded-[24px] lg-gap-x-0">
            <div className="content-container flex flex-col lg:p-[24px] p-[24px]">
               <div className="content-container flex flex-col lg:gap-y-[16px] gap-y-[36px] border-b border-[#262626] pb-4">
               <div className="flex justify-between lg:gap-y-20px gap-y-[8px]">
                <p className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%] ">
                  Completed
                </p>
                <p className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                  feb - June 2034
                </p>
              </div>
              <div className="flex flex-col lg:gap-[20px] gap-[8px]">
                <h3 className="text-[24px] lg:text-[32px] font-[700] leading-[130%] tracking-[0.25%] ">
                  Cohort 09
                </h3>
                <p className="text-[#A3A3A3] lg:w-full w-full md:max-w-[550px]  text-[14px] lg:text-[14px] font-[400] leading-[155%] lg:tracking-[0.2%] tracking-[0.5%]">
                  Cohort 09 was the year FutureForge stopped teaching tools and
                  started teaching taste. The class shipped fewer things, but
                  each one had a point of view.
                </p>
              </div>
              <div className="flex justify-between w-[50%]">
                <p className="text-[14px] font-[700] ">
                  268+{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    Graduates
                  </span>
                </p>
                <p className="text-[14px] font-[700] ">
                  7{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    {" "}
                    Tracks
                  </span>
                </p>
              </div>
               </div>
              <div className="flex justify-between items-center lg:pt-6 pt-2 md:pt-4.5">
                <p className="text-[14px] font-[400] leading-[150%] tracking[0.5%]">
                  explore
                </p>
                <TbArrowRight  className="lg:rounded-[50%] rounded-[80%] lg:text-[40px] text-[30px] p- bg-linear-to-r from-[var(--primary-color)] to-[var(--secondary-color)] cursor-pointer" aria-hidden="true" />
              </div>
            </div>
          </article>
          
        </div>
      </div>

      <Community />
      </main>

      <StoriesFooter />

    </div>
  );
}
export default CohortStory;
