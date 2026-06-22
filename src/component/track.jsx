import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";

function Tracks() {
  return (
    <section className="track-list justify-between flex lg:flex-row flex-col md:flex-col lg:gap-y-[32px] gap-y-[32px] md:gap-y-20 w-full ">
      <div className="track-intros flex flex-col lg:w-[50%] w-full lg:gap-y-[32px] gap-y-[24px] lg:items-left bg-gradient-to-b bg-[#0A0705] bg-[radial-gradient(40%_30%_at_25%_55%,_rgba(60,22,11,0.90)_30%,_rgba(146,64,14,0.15)_100%,_transparent_190%)]">
        <p className="text-[#F43F5D] lg:text-[14px] text-16px font-[700] leading-[150%] tracking-[0.5%]">
          Tracks
        </p>
        <h3 className="lg:text-[60px] text-[38px] lg:text-left md:text-center font-[700] lg:w-[80%] w-full leading-[120%] tracking-[-1%]">
          Explore career paths designed for real-world tech growth.
        </h3>
        <p className="lg:text-[#D4D4D4] text-[16px] lg:text-left md:text-center lg:w-[65%] w-full md:w-[80%] font-[400] leading-[155%] leading-[0.2%] w-full">
          Choose from beginner-friendly tracks built around practical learning,
          mentorship, and collaborative growth.
        </p>

        <div className="waitlist-button flex justify-start lg:w-[50%] w-[100%]">
          <Link to="/registration-form" className="w-[100%]">
          <button className="w-full lg:w-[207px] h-[50px] lg:py-3 py-2 rounded-3xl text-[16px] font-[700] tracking-[0.5%] leading-[100%] bg-linear-to-r from-[var(--primary-color)] to-[var(--secondary-color)] cursor-pointer flex items-center gap-[12px] justify-center">
            Join the Waitlist <CgArrowLongRight />{" "}
          </button>
          </Link>
        </div>
      </div>

      <div className="track-grid lg:w-[610px] w-full grid lg:grid-cols-2 lg:grid-rows-3 gap-[20px]">
        <div className="rounded-[24px] lg:px-4 lg:py-5 pt-10 pl-3 bg-[#171717] border border-[#404040] lg:w-[294px] w-full h-[176px]">
          <img
            src="images/Frame 2147226501.png"
            className="mb-5"
            alt="product design logo"
          />
          <p className="text-[24px] font-[700]">Product Design</p>
        </div>

        <div className="rounded-[24px] bg-[#171717] lg:px-3.5 lg:py-5 pt-10 pl-3 bg-[#171717 border border-[#404040] lg:w-[294px] w-full h-[176px]">
          <img
            src="images/Frame 2147226501 (1).png"
            className="mb-5"
            alt="frontend logo"
          />
          <p className="text-[24px] font-[700]">Frontend Development</p>
        </div>
        <div className="rounded-[24px] bg-[#171717] lg:px-4 lg:py-5 pt-10 pl-3 bg-[#171717 border border-[#404040] lg:w-[294px] w-full h-[176px]">
          <img
            src="images/Frame 2147226501 (2).png"
            className="mb-5"
            alt="backend logo"
          />
          <p className="text-[24px] font-[700]">Backend Development</p>
        </div>
        <div className="rounded-[24px] bg-[#171717] lg:px-4 lg:py-5 pt-10 pl-3 bg-[#171717 border border-[#404040] lg:w-[294px] w-full h-[176px]">
          <img
            src="images/Frame 2147226501 (4).png"
            className="mb-5"
            alt="QA logo"
          />
          <p className="text-[24px] font-[700]">Quality Assurance</p>
        </div>
        <div className="rounded-[24px] bg-[#171717] lg:px-4 lg:py-5 pt-10 pl-3 bg-[#171717 border border-[#404040] lg:w-[294px] w-full h-[176px]">
          <img
            src="images/Frame 2147226501 (5).png"
            className="mb-5"
            alt="Product management logo"
          />
          <p className="text-[24px] font-[700]">Product Management</p>
        </div>
      </div>
    </section>
  );
}

export default Tracks;
