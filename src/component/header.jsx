import { CgArrowLongRight } from "react-icons/cg";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const lmsPage = () => { window.open(
    "https://future-forge-lms.vercel.app/",
    "_blank",
    "noopener,noreferrer",
  )};

  return (
    <section>
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
          <div className="nav-bar lg:flex hidden lg:flex-row lg:justify-between items-center w-full lg:w-[369px]">
            <Link
              to="/#about-us"
              className="text-[15px] font-[400] leading-[100%] tracking-[1%] hover:font-[700]"
            >
              About
            </Link>

            <Link
              to="/#cohort-tracks"
              className="text-[15px] font-[400] leading-[100%] tracking-[1%] hover:font-[700]"
            >
              Tracks
            </Link>

            <Link
              to="/#futureforge-facilitators"
              className="text-[15px] font-[400] leading-[100%] tracking-[1%] hover:font-[700]"
            >
              Facilitators
            </Link>
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

          <div
            className={`
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
  `}
          >
            <Link
              to="/#about-us"
              className="text-[15px] font-[400] leading-[100%] tracking-[1%] hover:font-[700]"
            >
              About
            </Link>

            <Link
              to="/#cohort-tracks"
              className="text-[15px] font-[400] leading-[100%] tracking-[1%] hover:font-[700]"
            >
              Tracks
            </Link>

            <Link
              to="/#futureforge-facilitators"
              className="text-[15px] font-[400] leading-[100%] tracking-[1%] hover:font-[700]"
            >
              Facilitators
            </Link>

            <Link className="lg:w-[135px] w-[full]">
              <button className=" text-[16px]  lg:w-[135px] w-full h-[50px] next-cohort  border border-[#404040] font-[700] rounded-[24px] bg-green-300 Lg:hover:bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-[#262626]">
                Access LMS
              </button>
            </Link>

            <Link to="/registration-form">
              <button className="lms border border-[#404040] lg:py-[9px] lg:w-[135px] font-[700]  rounded-3xl bg-transparent hover:bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]">
                Join Next Cohort
              </button>
            </Link>
          </div>
        </nav>

        <div className="header-button text-white  lg:flex hidden gap-[16px] ">
          <button
           type="button"
              onClick={lmsPage}
            className="lms border border-[#404040] lg:py-[9px] lg:w-[135px] font-[700]  rounded-3xl bg-transparent active:bg-[#000000] hover:border-[#404040] hover:bg-[#171717] active:border-[#404040] bg-[#262626]"
          >
            Access LMS
          </button>

          <Link to="/registration-form" className="w-[100%] lg:w-[50%]">
            <button
              
              className="lg:w-[210px] w-full rounded-3xl py-2 cursor-pointer text-[16px] font-bold border  border-[#404040] bg-gradient-to-r from-[#FF2147] to-[#FFB943] hover:bg-gradient-to-r from-[#F59E0B] to-[#FFB943] flex items-center gap-[12px] justify-center"
            >
              Join Next Cohort <CgArrowLongRight />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Header;
