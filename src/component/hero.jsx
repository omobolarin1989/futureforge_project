import { CgArrowLongRight } from "react-icons/cg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// bg-[var(--primary-color)]
// border rounded-2xl border- text-center text-[12px] w-55 bg-linear-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent
function Hero() {
  return (
    <section className="hero-section  lg:h-screen min-h-screen flex flex-col lg:flex-row w-full lg:w-full justify-between">
      <div className="hero-text flex flex-col justify-center w-full lg:w-[40%]">
        <div className="text-content flex flex-col  lg:items-start items-center w-full">
          <div className="lg:full  lg:w-[40%] w-[75%] rounded-2xl p-px bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] mb-5">
            <p className="rounded-2xl bg-black px-4 py-2 text-center text-[12px]  lg:font-[700] font-[400] tracking-[1%] leading-[145%] flex justify-center">
              <span className="inline-block bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">
                COMMUNITY-FIRST TECH LEARNING
              </span>
            </p>
          </div>
          
          <div className="flex flex-col gap-[32px]">
          <h1 className="font-inter lg:text-[72px] text-[44px] font-[700] w-full lg:w-[85%] lg:leading-[110.00000000000001%] leading-[114.99999999999999%] lg:tracking-[-2%] text-center lg:text-left tracking-[-1.5%]">
            Build Your{" "}
            <span className="bg-gradient-to-r from-[#F58025] to-[#F59612] bg-clip-text text-transparent">
              Tech
            </span>{" "}
            Career{" "}
            <span className="bg-gradient-to-r from-[#F46A38] to-[#F59612] bg-clip-text text-transparent">
              Together.
            </span>
          </h1>
          <p className="lg:w-[80%] w-full lg:text-left text-center my-3 leading-[160%] lg:text-[18px] text-[16px] font-[400]">
            Hands-on tech training, mentorship, and real-world learning designed
            to help graduates confidently transition into tech careers.
          </p>
        

        <div className="hero-button lg:w-full gap-[10px] w-full  flex flex-col lg:flex-row mt-6 ">
          <Link to="/registration-form">
            <button className="lg:w-[210px] w-full rounded-[24px] py-4.5 cursor-pointer text-[16px] font-[700] border border-[#404040] bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] hover:bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center gap-[12px] justify-center">
              Join Next Cohort <CgArrowLongRight />
            </button>
          </Link>

          <Link to="/cohort-story" className="">
          <button className="lg:w-[236px] w-full rounded-3xl py-4.5 text-[16px] font-bold cursor-pointer border border-[#404040] hover:bg-[#171717] active:bg-[#404040] disabled:bg-[#262626]">
            Explore Graduate Stories
          </button>
          </Link>
          </div>
        </div>
        
        </div>
      </div>

      <div className="hero-image lg:w-[48%] w-full lg:relative">
        <img
          src="images/Group 1.png"
          className="lg:w-[100%] lg:block hidden"
          alt=""
        />
        <img
          src="images/Group 2.png"
          className="lg:w-[100%] lg:hidden block"
          alt=""
        />
      </div>
    </section>
  );
}

export default Hero;
