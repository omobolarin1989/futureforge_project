import { CgArrowLongRight } from "react-icons/cg";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const lmsPage = () => {
   const newWindow = window.open(
      "https://future-forge-lms.vercel.app/",
      "_blank",
      "noopener,noreferrer",
    );


  if (newWindow) {
    newWindow.opener = null;
  }
  };

  return (
    <header className="lg:mt-7 mt-3 ">
      <div  className="nav flex justify-between items-center lg:py-1 pt-7 pb-15 ">
        <div>
          <Link to="/" className="lg:w-[245px] w-[244px] md:w-[260px]">
            <img
              src="images/image 8.png"
              alt="Future Forge logo"
              className="lg:w-[245%] w-[180px] md:w-[260px]"
            />
          </Link>
        </div>

        <nav className="" aria-label="Main navigation">
          <div className="nav-bar lg:flex hidden lg:flex-row lg:justify-between items-center w-full lg:w-[369px]">
            <Link
              to="/#about-us"
              className="text-[15px] font-[400] leading-[100%] tracking-[1%] hover:font-[700] focus:outline-none focus:ring-2 focus:ring-white"
            >
              About
            </Link>

            <Link
              to="/#cohort-tracks"
              className="text-[15px] font-[400] leading-[100%] tracking-[1%] hover:font-[700] focus:outline-none focus:ring-2 focus:ring-white"
            >
              Tracks
            </Link>

            <Link
              to="/#futureforge-facilitators"
              className="text-[15px] font-[400] leading-[100%] tracking-[1%] hover:font-[700] focus:outline-none focus:ring-2 focus:ring-white"
            >
              Facilitators
            </Link>
          </div>

          <button
            type="button"
            className="cursor-pointer block md:block lg:hidden focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setIsOpen(!isOpen)}
             aria-label={isOpen ? "Close menu" : "Open menu"}
 aria-expanded={isOpen}
 id="mobile-menu"
          >
            {isOpen ? (
             <span aria-hidden="true">✕</span>
            ) : (
              <img
                src="/images/Frame 2147226499.png"
                alt=""
                className="w-15 h-10 "
              />
            )}
          </button>

          <div
            className={`
    ${isOpen ? "flex" : "hidden"}
    flex-col
    text-[20px]
    justify-center
    items-center
    block
    mt-4
    py-5
    px-3
    text-white
    font-[700]
    gap-6
    bg-gradient-to-r from-[#FF2147] to-[#FFB943] hover:bg-gradient-to-r from-[#F59E0B] to-[#FFB943]
    bg-[#F43F5E]
    text-[#ffffff]
    w-[355px]
    md:max-w-[800px]
   rounded-[24px]
  `}
          >
            <Link
              to="/#about-us"
              className="text-[18px] font-[400] leading-[100%] tracking-[1%] hover:font-[700] focus:outline-none focus:ring-2 focus:ring-white"
               onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <Link
              to="/#cohort-tracks"
              className="text-[18px] font-[400] leading-[100%] tracking-[1%] hover:font-[700] focus:outline-none focus:ring-2 focus:ring-white"
               onClick={() => setIsOpen(false)}
            >
              Tracks
            </Link>

            <Link
              to="/#futureforge-facilitators"
              className="text-[18px] font-[400] leading-[100%] tracking-[1%] hover:font-[700] focus:outline-none focus:ring-2 focus:ring-white"
               onClick={() => setIsOpen(false)}
            >
              Facilitators
            </Link>

            
              <button 
              type="button" onClick={() => {
    lmsPage();
    setIsOpen(false);
  }} className="text-[16px]  lg:w-[135px] w-full h-[50px] next-cohort  border font-[700] bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] lg:hover:bg-gradient-to-r hover:from-[var(--primary-color)] hover:to-[var(--secondary-color)] bg-[#262626] cursor-pointer rounded-[24px] focus:outline-none focus:ring-2 focus:ring-white"
  aria-label="Open Future Forge LMS in a new tab"
              >
                Access LMS
              </button>
            

            <Link to="/registration-form" className="lg:w-[178px] w-full lg:h-[46px] rounded-3xl py-2 cursor-pointer text-[16px] font-bold border bg-gradient-to-r from-[#FF2147] to-[#FFB943] hover:bg-gradient-to-r from-[#F59E0B] to-[#FFB943] flex items-center gap-[12px] justify-center focus:outline-none focus:ring-2 focus:ring-white">
            
              Join Next Cohort <CgArrowLongRight  aria-hidden="true"/>
            
          </Link>
          </div>
        </nav>

        <div className="header-button text-white  lg:flex hidden gap-[16px] ">
          <button
            type="button"
            onClick={lmsPage}
            className="lms border border-[#404040] lg:py-[9px] lg:w-[135px] font-[700]  rounded-3xl bg-transparent active:bg-[#000000] hover:border-[#404040] hover:bg-[#171717] active:border-[#404040] bg-[#262626] cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Open Future Forge LMS in a new tab"
          >
            Access LMS
          </button>

          <Link to="/registration-form" className="lg:w-[178px] w-full lg:h-[46px] rounded-3xl py-2 cursor-pointer text-[16px] font-bold border  border-[#404040] bg-gradient-to-r from-[#FF2147] to-[#FFB943] hover:bg-gradient-to-r from-[#F59E0B] to-[#FFB943] flex items-center gap-[12px] justify-center focus:outline-none focus:ring-2 focus:ring-white">
            
              Join Next Cohort <CgArrowLongRight  aria-hidden="true" />
            
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
