import { CgArrowLongRight } from "react-icons/cg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// bg-[var(--primary-color)]
// border rounded-2xl border- text-center text-[12px] w-55 bg-linear-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent
function Hero() {
  return (
    <section className="hero-section grow md:flex-col gap-7 md:gap-y-10 lg:h-screen min-h-screen flex flex-col lg:flex-row justify-between">
      <div className="hero-text flex flex-col justify-center w-full lg:w-[40%]">
        <div className="text-content flex flex-col  lg:items-start items-center w-full">
          <div className="lg:full  lg:max-w-[40%] w-[75%] rounded-2xl p-px bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] mb-5">
            <p className="rounded-2xl bg-black px-4 py-2 text-center   lg:font-[700] font-[400] tracking-[1%] leading-[145%] flex justify-center grow">
              <span className=" inline-block text-[12px] text-base bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent ">
                COMMUNITY-FIRST TECH LEARNING
              </span>
            </p>
          </div>
          
          <div className="flex flex-col gap-y-[32px] lg:justify-start lg:items-start md:justify-center md:items-center ">
          <h1 className="font-inter lg:text-[72px] text-base text-[44px] font-[700] w-full lg:w-[85%] lg:leading-[110.00000000000001%] leading-[114.99999999999999%] lg:tracking-[-2%] text-center lg:text-left tracking-[-1.5%]">
            Build Your{" "}
            <span className="bg-gradient-to-r from-[#F58025] to-[#F59612] bg-clip-text text-transparent">
              Tech
            </span>{" "}
            Career{" "}
            <span className="bg-gradient-to-r from-[#F46A38] to-[#F59612] bg-clip-text text-transparent">
              Together.
            </span>
          </h1>
          <p className="lg:w-[80%] md:w-[80%] w-full lg:text-left text-center my-3 leading-[160%] text-base md:text-[18px] lg:text-[18px] text-[16px] font-[400]">
            Hands-on tech training, mentorship, and real-world learning designed
            to help graduates confidently transition into tech careers.
          </p>
        

        <div className="hero-button lg:w-full lg:gap-[20px] gap-y-6 w-full flex md:flex-col flex-col lg:flex-row md:gap-y-10 ">
          <Link to="/registration-form">
            <button className="lg:w-[210px] w-full rounded-[24px] h-[50px] cursor-pointer lg:text-[16px] text-[16px] md:text-[20px] font-[700] border border-[#404040] bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] hover:bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center gap-[12px] justify-center">
              Join Next Cohort <CgArrowLongRight />
            </button>
          </Link>

          <Link to="/cohort-story" className="">
          <button className="lg:w-[236px] w-full rounded-3xl h-[50px] text-[16px] lg:text-[16px] md:text-[20px] font-bold cursor-pointer border border-[#404040] hover:bg-[#171717] active:bg-[#404040] disabled:bg-[#262626]">
            Explore Graduate Stories
          </button>
          </Link>
          </div>
        </div>
        
        </div>
      </div>

      <div className="hero-image lg:w-[48%] md:w-full w-full lg:relative">
        <img
          src="images/Group 1.png"
          className="lg:w-[100%] md-[600px] lg:block hidden"
          alt=""
        />
        <img
          src="images/Group 2.png"
          className="lg:w-[100%] lg:hidden md:w-full block md:block"
          alt=""
        />
      </div>
    </section>
  );
}

export default Hero;
