import About from "../component/about";
import Hero from "../component/hero";
import Tracks from "../component/track";
import Testimonials from "../component/testimony";
import Facilitators from "../component/facilitators";
import Footer from "../component/footer";
import NextCohort from "../component/next-cohort";
import RegistrationForm from "./registration-form";
import Header from "../component/header";
import Community from "../component/community";
import { Link } from "react-router-dom";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function Landing() {
  return (


    <div className="p-[20px] text-white  lg:min-h-screen bg-gradient-to-b from-[#221008] via-[#0c0604] to-[#040201] border-blue-600 lg:px-[150px] lg:py-[16px]">
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/registration-form"
          element={<RegistrationForm />}
        />
      </Routes>
    </BrowserRouter> */}

      <div className="nav flex justify-between items-center lg:py-1 pt-7 pb-15 ">
        <div>
          <Link to="/" className="">
            <img
              src="\src\images\image 8.png"
              alt="logo"
              className="lg:w-[245%] w-[244px]"
            />
          </Link>
        </div>

        <navbar className="">
          <a href="" className="lg:hidden md:hidden sm:block">
            <img
              src="\src\images\Frame 2147226499.png"
              className="lg:w-[80%] w-[100%]"
            />
          </a>

          <ul className="flex hidden lg:flex lg:justify-center text-white lg:w-[420px] gap-[70px] lg:px-[4px]">
            <li>
              <a
                href=""
                className="lg:text-[15px] font-[400] leading-[100%] tracking-[1%] hover:font-[700]"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="./"
                className="lg:text-[15px] font-[400] leading-[100%] tracking-[1%] hover:font-[700]"
              >
                Tracks
              </a>
            </li>

            <li>
              <a
                href="./"
                className="lg:text-[15px] lg:font-[400] leading-[100%] tracking-[1%] lg:hover:font-[700]"
              >
                Facilitators
              </a>
            </li>
          </ul>
        </navbar>

        <div className="header-button text-white  lg:flex hidden gap-[16px] ">
          <Link to="/registration-form">
            <button className="lms border border-[#404040] lg:py-[9px] lg:w-[135px] font-[700]  rounded-3xl bg-transparent hover:bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]">
              Access LMS
            </button>
          </Link>

          <button className=" text-[16px] px-[24px] next-cohort  border border-[#404040] lg-[178px] py-2.5 font-[700] rounded-3xl hover:bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]">
            Join Next Cohort
          </button>
        </div>
      </div>

      <Hero />
      <NextCohort />
      <About />
      <Tracks />
      <Testimonials />
      <Facilitators />
      <Community />
      <Footer />

      <section className="footer">
        <div className="flex lg:flex-row flex-col w-full justify-between lg:mt-[80px] mt-[80px] mb-[20px]  lg:h-[280px] gap-[10px] lg:gap-[64px]">
          <div className="futureforge-contact flex flex-col lg:justify-between lg:h-280px lg:w-[357px] lg:gap-y-[48px] gap-y-[16px] ">
            <div className="contact-text lg:gap-y-[32px] gap-y-[16px]">
              <img
                src="src\images\image 8.png"
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
                  src="src\images\facebook.png"
                  className="lg:w-[16px] w-[20px]"
                  alt="facebook icon"
                />
              </a>
              <a href="">
                <img
                  src="src\images\twitter.png"
                  className="lg:w-[16px] w-[20px]"
                  alt="twitter icon"
                />
              </a>
              <a href="">
                <img
                  src="src\images\instagram.png"
                  className="lg:w-[16px] w-[20px]"
                  alt="instagram icon"
                />
              </a>
              <a href="">
                <img
                  src="src\images\linkedin.png"
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
                Community
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

        <div className="copyright-pricacy">
          <p className="text-[#A3A3A3] lg:text-[14px] font-[400] leading-[150%]  tracking-[0.5%] ">
            © 2026 FutureForge. All rights reserved.
          </p>

          <p className="text-[16px] font-[400] leading-[155%] tracking-[0.2%] text-[#A3A3A3] text-right">
            Privacy Policy . Terms of use
          </p>
        </div>
      </section>

      <section className="footer-logo w-full lg:pt-35">
        <img
          src="\src\images\image 9.png"
          className="w-full lg:h-[209.11px] pt-8"
          alt=""
        />
      </section>
    </div>
  );
}

export default Landing;
