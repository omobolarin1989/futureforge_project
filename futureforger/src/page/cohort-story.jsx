// import About from "../component/about";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { TbArrowRight } from "react-icons/tb";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { CgArrowLongRight } from "react-icons/cg";

// import RegistrationForm from "./registration-form";
// import Header from "../component/header";
import Community from "../component/community";
import Footer from "../component/footer";
import { Link } from "react-router-dom";

function CohortStory() {
  //For responsive navbar
  const [isOpen, setIsOpen] = useState(false);

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
    <section className="bg-[#000000] min-h-screen text-white py-[16px] flex flex-col gap-y-[80px] lg:gap-y-[120px] lg:px-[80px] px-[10px] ">
      

      <div className="nav flex justify-between items-center lg:py-1 pt-7 pb-15 ">
        <div>
          <Link to="/" className="">
            <img
              src="images/image 8.png"
              alt="logo"
              className="lg:w-[245%] w-[244px]"
            />
          </Link>
        </div>

        <nav className="">
          <div className="nav-bar lg:flex hidden lg:flex-row lg:justify-between  lg:w-[369px] border border-red-500">
            <Link to="/#about-us">Back to About</Link>

            <Link to="/#cohort-tracks">Tracks.</Link>

            <Link to="/#futureforge-facilitators">Facilitators</Link>
          </div>
         
          <button
            type="button"
            className="cursor-pointer block lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              "✕"
            ) : (
              <img
                src="/images/Frame 2147226499.png"
                alt="Menu"
                className="w-8 h-8"
              />
            )}
          </button>

          <div
            className={`
          ${isOpen ? "flex" : "hidden"}
          flex-col
          md:hidden
          mt-4
          text-white
          gap-4
        `}
          >
            <Link to="/#about-us">Back to About</Link>

            <Link to="/#cohort-tracks">Tracks</Link>

            <Link to="/#futureforge-facilitators">Facilitators</Link>

            <li>
              {" "}
              <button className=" text-[16px] px-[24px] next-cohort  border border-[#404040] lg-[178px] py-2.5 font-[700] rounded-3xl hover:bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]">
                Join Next Cohort
              </button>
            </li>

            <li>
              <Link to="/registration-form">
                <button className="lms border border-[#404040] lg:py-[9px] lg:w-[135px] font-[700]  rounded-3xl bg-transparent hover:bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]">
                  Access LMS
                </button>
              </Link>
            </li>
          </div>
         
        </nav>

        <div className="header-button text-white  lg:flex hidden gap-[16px] ">
          <button className="lms border border-[#404040] lg:py-[9px] lg:w-[135px] font-[700]  rounded-3xl bg-transparent hover:bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]">
            Access LMS
          </button>

          <Link to="/registration-form" className="w-[100%] lg:w-[50%]">
            <button className="lg:w-[210px] w-full rounded-3xl py-2 cursor-pointer text-[16px] font-bold border border-[#404040] hover:bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center gap-[12px] justify-center">
              Join Next Cohort <CgArrowLongRight />
            </button>
          </Link>
        </div>
      </div>

      <div className="main w-full lg:gap-y-[150px] gap-y-[70px] flex flex-col">
        <div className="w-full flex justify-center">
          <div className="story-header flex flex-col justify-center items-center lg:w-[851px] w-full gap-y-[16px]">
            <h1 className="lg:w-[851px] w-[370px] lg:text[72px] text-[44px] font-[700] lg:leading-[110%] leading-[114.999999999%] tracking-[-1.5%] lg:tracking-[-2%] text-center">
              Every Cohort Tells a Story.
            </h1>
            <p className="text-[#ffffff] lg:w-[851px] w-[370px] text-[18px] text-[16px] font-[400] leading-[160%] tracking-[0.2%] lg:tracking-[0%] text-center lg:px-[8px]">
              Explore the journeys of FutureForge graduates across different
              cohorts. Browse past classes, discover graduate stories, and see
              how learners grew through mentorship, collaboration, and practical
              learning.
            </p>

            <div className="counter flex lg:w-[492px] w-full justify-between px-[2px]">
              <p className="flex flex-col items-center lg:text-[48px] text-[36px] font-[700] leading-[120%] tracking-[1%]">
                1{" "}
                <span className="text-[#D4D4D4] text-[18px] font-[400] leading-[100%] tracking-[0%]">
                  Cohorts
                </span>
              </p>
              <p className="flex flex-col items-center lg:text-[48px] text-[36px] font-[700] leading-[120%] tracking-[1%]">
                268+
                <span className="text-[#D4D4D4] text-[18px] font-[400] leading-[100%] tracking-[0%]">
                  Graduates
                </span>
              </p>
              <p className="flex flex-col items-center lg:text-[48px] text-[36px] font-[700] leading-[120%] tracking-[1%]">
                5{" "}
                <span className="text-[#D4D4D4] text-[18px] font-[400] leading-[100%] tracking-[0%]">
                  Tracks
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="cohort-grid lg:grid flex flex-col lg:grid-cols-3 lg:justify-center lg:grid-rows-3 lg:w-full lg:place-items-center lg:gap-y-[20px] gap-y-[20px]">
         
          <div className="bg-[#171717] content-grid lg:w-[550px] lg:h-[336px] h-[335px] w-full flex flex-col gap-y-20px rounded-[24px]   lg-gap-x-0">
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
                <h3 className="text-[24px] lg:text-[32px] font-[700] leading-[130%] tracking-[0.25%] ">
                  Cohort 01
                </h3>
                <p className="text-[#A3A3A3] w-[373px] text-[14px] lg:text-[14px] font-[400] leading-[155%] lg:tracking-[0.2%] tracking-[0.5%]">
                  Cohort 01 was the year FutureForge stopped teaching tools and
                  started teaching taste. The class shipped fewer things, but
                  each one had a point of view.
                </p>
              </div>
              <div className="flex justify-between w-[50%]">
                <p class="text-[14px] font-[700] ">
                  268+{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    Graduates
                  </span>
                </p>
                <p class="text-[14px] font-[700] ">
                  7{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    {" "}
                    Tracks
                  </span>
                </p>
              </div>
               </div>
              <div className="flex justify-between items-center pt-4">
                <p className="text-[14px] font-[400] leading-[150%] tracking[0.5%]">
                  explore
                </p>
                <Link to="/Cohort1"><TbArrowRight className="rounded-[50%] text-[40px] p- bg-linear-to-r from-[var(--primary-color)] to-[var(--secondary-color)] cursor-pointer" /></Link>
              </div>
            </div>
          </div>

          <div className="bg-[#171717] content-grid lg:w-[550px] lg:h-[336px] h-[335px] w-full flex flex-col gap-y-20px rounded-[24px]   lg-gap-x-0">
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
                <p className="text-[#A3A3A3] w-[373px] text-[14px] lg:text-[14px] font-[400] leading-[155%] lg:tracking-[0.2%] tracking-[0.5%]">
                  Cohort 02 was the year FutureForge stopped teaching tools and
                  started teaching taste. The class shipped fewer things, but
                  each one had a point of view.
                </p>
              </div>
              <div className="flex justify-between w-[50%]">
                <p class="text-[14px] font-[700] ">
                  268+{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    Graduates
                  </span>
                </p>
                <p class="text-[14px] font-[700] ">
                  7{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    {" "}
                    Tracks
                  </span>
                </p>
              </div>
               </div>
              <div className="flex justify-between items-center pt-4">
                <p className="text-[14px] font-[400] leading-[150%] tracking[0.5%]">
                  explore
                </p>
                <TbArrowRight className="rounded-[50%] text-[40px] p- bg-linear-to-r from-[var(--primary-color)] to-[var(--secondary-color)] cursor-pointer" />
              </div>
            </div>
          </div>

           <div className="bg-[#171717] content-grid lg:w-[550px] lg:h-[336px] h-[335px] w-full flex flex-col gap-y-20px rounded-[24px]   lg-gap-x-0">
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
                <p className="text-[#A3A3A3] w-[373px] text-[14px] lg:text-[14px] font-[400] leading-[155%] lg:tracking-[0.2%] tracking-[0.5%]">
                  Cohort 03 was the year FutureForge stopped teaching tools and
                  started teaching taste. The class shipped fewer things, but
                  each one had a point of view.
                </p>
              </div>
              <div className="flex justify-between w-[50%]">
                <p class="text-[14px] font-[700] ">
                  268+{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    Graduates
                  </span>
                </p>
                <p class="text-[14px] font-[700] ">
                  7{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    {" "}
                    Tracks
                  </span>
                </p>
              </div>
               </div>
              <div className="flex justify-between items-center pt-4">
                <p className="text-[14px] font-[400] leading-[150%] tracking[0.5%]">
                  explore
                </p>
                <TbArrowRight className="rounded-[50%] text-[40px] p- bg-linear-to-r from-[var(--primary-color)] to-[var(--secondary-color)] cursor-pointer" />
              </div>
            </div>
          </div>

           <div className="bg-[#171717] content-grid lg:w-[550px] lg:h-[336px] h-[335px] w-full flex flex-col gap-y-20px rounded-[24px]   lg-gap-x-0">
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
                <p className="text-[#A3A3A3] w-[373px] text-[14px] lg:text-[14px] font-[400] leading-[155%] lg:tracking-[0.2%] tracking-[0.5%]">
                  Cohort 04 was the year FutureForge stopped teaching tools and
                  started teaching taste. The class shipped fewer things, but
                  each one had a point of view.
                </p>
              </div>
              <div className="flex justify-between w-[50%]">
                <p class="text-[14px] font-[700] ">
                  268+{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    Graduates
                  </span>
                </p>
                <p class="text-[14px] font-[700] ">
                  7{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    {" "}
                    Tracks
                  </span>
                </p>
              </div>
               </div>
              <div className="flex justify-between items-center pt-4">
                <p className="text-[14px] font-[400] leading-[150%] tracking[0.5%]">
                  explore
                </p>
                <TbArrowRight className="rounded-[50%] text-[40px] p- bg-linear-to-r from-[var(--primary-color)] to-[var(--secondary-color)] cursor-pointer" />
              </div>
            </div>
          </div>

           <div className="bg-[#171717] content-grid lg:w-[550px] lg:h-[336px] h-[335px] w-full flex flex-col gap-y-20px rounded-[24px]   lg-gap-x-0">
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
                <p className="text-[#A3A3A3] w-[373px] text-[14px] lg:text-[14px] font-[400] leading-[155%] lg:tracking-[0.2%] tracking-[0.5%]">
                  Cohort 05 was the year FutureForge stopped teaching tools and
                  started teaching taste. The class shipped fewer things, but
                  each one had a point of view.
                </p>
              </div>
              <div className="flex justify-between w-[50%]">
                <p class="text-[14px] font-[700] ">
                  268+{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    Graduates
                  </span>
                </p>
                <p class="text-[14px] font-[700] ">
                  7{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    {" "}
                    Tracks
                  </span>
                </p>
              </div>
               </div>
              <div className="flex justify-between items-center pt-4">
                <p className="text-[14px] font-[400] leading-[150%] tracking[0.5%]">
                  explore
                </p>
                <TbArrowRight className="rounded-[50%] text-[40px] p- bg-linear-to-r from-[var(--primary-color)] to-[var(--secondary-color)] cursor-pointer" />
              </div>
            </div>
          </div>

           <div className="bg-[#171717] content-grid lg:w-[550px] lg:h-[336px] h-[335px] w-full flex flex-col gap-y-20px rounded-[24px]   lg-gap-x-0">
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
                <p className="text-[#A3A3A3] w-[373px] text-[14px] lg:text-[14px] font-[400] leading-[155%] lg:tracking-[0.2%] tracking-[0.5%]">
                  Cohort 06 was the year FutureForge stopped teaching tools and
                  started teaching taste. The class shipped fewer things, but
                  each one had a point of view.
                </p>
              </div>
              <div className="flex justify-between w-[50%]">
                <p class="text-[14px] font-[700] ">
                  268+{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    Graduates
                  </span>
                </p>
                <p class="text-[14px] font-[700] ">
                  7{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    {" "}
                    Tracks
                  </span>
                </p>
              </div>
               </div>
              <div className="flex justify-between items-center pt-4">
                <p className="text-[14px] font-[400] leading-[150%] tracking[0.5%]">
                  explore
                </p>
                <TbArrowRight className="rounded-[50%] text-[40px] p- bg-linear-to-r from-[var(--primary-color)] to-[var(--secondary-color)] cursor-pointer" />
              </div>
            </div>
          </div>

           <div className="bg-[#171717] content-grid lg:w-[550px] lg:h-[336px] h-[335px] w-full flex flex-col gap-y-20px rounded-[24px]   lg-gap-x-0">
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
                <p className="text-[#A3A3A3] w-[373px] text-[14px] lg:text-[14px] font-[400] leading-[155%] lg:tracking-[0.2%] tracking-[0.5%]">
                  Cohort 07 was the year FutureForge stopped teaching tools and
                  started teaching taste. The class shipped fewer things, but
                  each one had a point of view.
                </p>
              </div>
              <div className="flex justify-between w-[50%]">
                <p class="text-[14px] font-[700] ">
                  268+{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    Graduates
                  </span>
                </p>
                <p class="text-[14px] font-[700] ">
                  7{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    {" "}
                    Tracks
                  </span>
                </p>
              </div>
               </div>
              <div className="flex justify-between items-center pt-4">
                <p className="text-[14px] font-[400] leading-[150%] tracking[0.5%]">
                  explore
                </p>
                <TbArrowRight className="rounded-[50%] text-[40px] p- bg-linear-to-r from-[var(--primary-color)] to-[var(--secondary-color)] cursor-pointer" />
              </div>
            </div>
          </div>

           <div className="bg-[#171717] content-grid lg:w-[550px] lg:h-[336px] h-[335px] w-full flex flex-col gap-y-20px rounded-[24px]   lg-gap-x-0">
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
                <p className="text-[#A3A3A3] w-[373px] text-[14px] lg:text-[14px] font-[400] leading-[155%] lg:tracking-[0.2%] tracking-[0.5%]">
                  Cohort 08 was the year FutureForge stopped teaching tools and
                  started teaching taste. The class shipped fewer things, but
                  each one had a point of view.
                </p>
              </div>
              <div className="flex justify-between w-[50%]">
                <p class="text-[14px] font-[700] ">
                  268+{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    Graduates
                  </span>
                </p>
                <p class="text-[14px] font-[700] ">
                  7{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    {" "}
                    Tracks
                  </span>
                </p>
              </div>
               </div>
              <div className="flex justify-between items-center pt-4">
                <p className="text-[14px] font-[400] leading-[150%] tracking[0.5%]">
                  explore
                </p>
                <TbArrowRight className="rounded-[50%] text-[40px] p- bg-linear-to-r from-[var(--primary-color)] to-[var(--secondary-color)] cursor-pointer" />
              </div>
            </div>
          </div>

           <div className="bg-[#171717] content-grid lg:w-[550px] lg:h-[336px] h-[335px] w-full flex flex-col gap-y-20px rounded-[24px]   lg-gap-x-0">
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
                <p className="text-[#A3A3A3] w-[373px] text-[14px] lg:text-[14px] font-[400] leading-[155%] lg:tracking-[0.2%] tracking-[0.5%]">
                  Cohort 09 was the year FutureForge stopped teaching tools and
                  started teaching taste. The class shipped fewer things, but
                  each one had a point of view.
                </p>
              </div>
              <div className="flex justify-between w-[50%]">
                <p class="text-[14px] font-[700] ">
                  268+{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    Graduates
                  </span>
                </p>
                <p class="text-[14px] font-[700] ">
                  7{" "}
                  <span className="text-[#A3A3A3] text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
                    {" "}
                    Tracks
                  </span>
                </p>
              </div>
               </div>
              <div className="flex justify-between items-center pt-4">
                <p className="text-[14px] font-[400] leading-[150%] tracking[0.5%]">
                  explore
                </p>
                <TbArrowRight className="rounded-[50%] text-[40px] p- bg-linear-to-r from-[var(--primary-color)] to-[var(--secondary-color)] cursor-pointer" />
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <Community />

      <Footer />

    </section>
  );
}
export default CohortStory;
