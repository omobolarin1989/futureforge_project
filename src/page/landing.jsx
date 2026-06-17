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


import { CgArrowLongRight } from "react-icons/cg";

// import RegistrationForm from "./registration-form";
// import Header from "../component/header";
import Community from "../component/community";
import { Link } from "react-router-dom";

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function Landing() {
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
  }, [location]);//This line reruns whenever the URL changes


  return (
    <section className=" text-white  lg:min-h-screen bg-gradient-to-b bg-[#0A0705] bg-[radial-gradient(140%_25%_at_40%_0%,_rgba(39,15,11,0.25)_2%,_rgba(146,64,14,0.15)_23%,_transparent_50%)] bg-local bg-no-repeat lg:px-[120px] px-[8px] flex flex-col lg:gap-y-[80px] gap-y-[70px]">
   

      <div className="nav flex justify-between items-center lg:py-1 pt-7 pb-15 ">
        <div>
          <Link to="/" className="lg:w-[245px] w-[244px]">
            <img
              src="images/image 8.png"
              alt="logo"
              className="lg:w-[245%] w-[244px]"
            />
          </Link>
        </div>

        <nav className="">

           <div className="nav-bar lg:flex hidden lg:flex-row lg:justify-between items-center  lg:w-[369px]">
          <Link to="/#about-us" className="text-[15px] font-[400] leading-[100%] tracking-[1%] hover:font-[700]">About</Link>

          <Link to="/#cohort-tracks" className="text-[15px] font-[400] leading-[100%] tracking-[1%] hover:font-[700]">Tracks</Link>

          <Link to="/#futureforge-facilitators" className="text-[15px] font-[400] leading-[100%] tracking-[1%] hover:font-[700]">Facilitators</Link>
        </div>
          


          <button
            type="button"
            className="cursor-pointer block lg:hidden "
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              "✕"
            ) : (
              <img
                src="/images/Frame 2147226499.png" 
                alt="Menu"
                className="w-15 h-10 "
              />
            )}
          </button>

          
             <div className={`
    ${isOpen ? "flex" : "hidden"}
    flex-col
    justify-center
    items-center
    md:hidden
    mt-4
    text-white
    font-[700]
    gap-6
    bg-black
    bg-transparent
    w-[355px]
    border-4 border-amber-500
  `}>
          <Link to="/#about-us" className="text-[15px] font-[400] leading-[100%] tracking-[1%] hover:font-[700]">About</Link>

          <Link to="/#cohort-tracks" className="text-[15px] font-[400] leading-[100%] tracking-[1%] hover:font-[700]">Tracks</Link>

          <Link to="/#futureforge-facilitators" className="text-[15px] font-[400] leading-[100%] tracking-[1%] hover:font-[700]">Facilitators</Link>

           <Link><button className=" text-[16px]  next-cohort  border border-[#404040] lg-[178px] py-2.5 font-[700] rounded-3xl hover:bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-[#262626]">
            Access LMS
          </button></Link>

           <Link to="/registration-form">
            <button className="lms border border-[#404040] lg:py-[9px] lg:w-[135px] font-[700]  rounded-3xl bg-transparent hover:bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]">
              Join Next Cohort
            </button>
          </Link>

          
        </div>
         
        </nav> 

        <div className="header-button text-white  lg:flex hidden gap-[16px] ">
            <button className="lms border border-[#404040] lg:py-[9px] lg:w-[135px] font-[700]  rounded-3xl bg-transparent active:bg-[#000000] hover:border-[#404040] hover:bg-[#171717] active:border-[#404040] bg-[#262626]">
              Access LMS
            </button>
          

          <Link to="/registration-form" className="w-[100%] lg:w-[50%]">
                  <button className="lg:w-[210px] w-full rounded-3xl py-2 cursor-pointer text-[16px] font-bold border  border-[#404040] bg-gradient-to-r from-[#FF2147] to-[#FFB943] hover:bg-gradient-to-r from-[#F59E0B] to-[#FFB943] flex items-center gap-[12px] justify-center">
                       Join Next Cohort <CgArrowLongRight />
                  </button>
          </Link>
        </div>
      </div>

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

      {/* <section className="footer flex flex-col gap-[30px] lg:gap-y-[20px] gap-[40px] ">
        <div className="flex lg:flex-row flex-col w-full justify-between lg:mt-[80px] mt-[80px] mb-[20px] gap-y-[32px]  lg:h-[280px] gap-[10px] lg:gap-[64px]">
          <div className="futureforge-contact flex flex-col lg:h-280px lg:w-[357px] lg:gap-y-[48px] gap-y-[32px] ">
            <div className="contact-text lg:gap-y-[32px] gap-y-[16px]">
              <img
                src="/images/image 8.png"
                className="lg:w-[245px] w-[245px]"
                alt="futureforge logo"
              />
              <p className="text-[#A3A3A3] mt-3 lg:text-[16px] text-[14px] font-[400] leading-[155%] tracking-[o.2%] w-[370px] ">
                Helping graduates grow into tech careers through mentorship,
                practical learning, and community support.
              </p>
            </div>

            <div className="socials flex justify-between lg:w-[188px] w-[220px]">
              <a href="">
                <img
                  src="/images/facebook.png"
                  className="lg:w-[16px] w-[20px]"
                  alt="facebook icon"
                />
              </a>
              <a href="">
                <img
                  src="images/twitter.png"
                  className="lg:w-[16px] w-[20px]"
                  alt="twitter icon"
                />
              </a>
              <a href="">
                <img
                  src="images/instagram.png"
                  className="lg:w-[16px] w-[20px]"
                  alt="instagram icon"
                />
              </a>
              <a href="">
                <img
                  src="images/linkedin.png"
                  className="lg:w-[16px] w-[20px]"
                  alt="linkedin icon"
                />
              </a>
            </div>
          </div>

          <div className="page-content">
            <p className="text-[16px] font-[700] leading-[100%] tracking-[0.5%] mb-5.5">
              FutureForge
            </p>
            <ul className="flex flex-col gap-4 text-[16px] font-[400] leading-[155%] tracking-[0.2%] text-[#A3A3A3]">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Learning Tracks</a>
              </li>
              <li>
                <a href="">Testimonials</a>
              </li>
              <li>
                <a href="">Facilitators</a>
              </li>
            </ul>
          </div>

          <div className="futureforge-community justify-between flex flex-col">
            <div>
              <p className="text-[16px] font-[700] leading-[100%] tracking-[0.5%] mb-5.5">
                Community
              </p>
              <ul className="flex flex-col gap-4 text-[16px] font-[400] leading-[155%] tracking-[0.2%] text-[#A3A3A3]">
                <li>
                  <a href="">Join the next cohort</a>
                </li>
                <li>
                  <a href="">Access LMS</a>
                </li>
                <li>
                  <a href="">Grduate stories</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="futureforge-community justify-between flex flex-col">
            <div>
              <p className="text-[16px] font-[700] leading-[100%] tracking-[0.5%] mb-5.5">
                Contact us
              </p>
              <ul className="flex flex-col gap-4 text-[16px] font-[400] leading-[155%] tracking-[0.2%] text-[#A3A3A3]">
                <li>
                  <a href="">admin@futureforgelearning.com</a>
                </li>
                <li>
                  <a href="">+2349168095276.</a>
                </li>
              </ul>
            </div>
          </div>
      </div>

        <div className="copyright-pricacy flex lg:flex-row flex-col lg:justify-between">
          <p className="text-[#A3A3A3] lg:text-[14px] font-[400] leading-[150%]  tracking-[0.5%] ">
            © 2026 FutureForge. All rights reserved.
          </p>

          <p className="text-[16px] font-[400] leading-[155%] tracking-[0.2%] text-[#A3A3A3]">
            Privacy Policy . Terms of use
          </p>
        </div>
      </section>

      <section className="footer-logo w-full lg:pt-35">
        <img
          src="images/image 9.png"
          className="w-full lg:h-[209.11px] pt-8"
          alt=""
        />
      </section> */}
    </section>
  );
}

export default Landing;
