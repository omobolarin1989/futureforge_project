import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";

function NextCohort() {
  return (
    <section className="registration text-center flex flex-col items-center lg:py-10" aria-labelledby="cohort-title">
      <div className="">
        <p className="text-[20px] lg:text-[48px] md:text-[27px] text-[20px] font-[400] lg:pb-[220px] lg:pt-[100px] flex flex-col lg:w-[1280px] text-center lg:leading-[157%] lg:tracking-[-1%]">
          FutureForge is a free, community-first learning initiative helping
          graduates confidently transition into tech through mentorship,
          real-world learning, and collaborative growth.
        </p>
      </div>

      <div className="registration-tab w-full lg:w-full md:w-[full] flex lg:flex-row flex-col lg:justify-between justify-between lg:items-center gap-y-[35px]">
        <div className="reg-image lg:w-[50%] w-full flex ">
          <img
            src="images/Rectangle 8.png"
            className=" lg:block hidden lg:w-[75%]"
            alt="student learning with laptop"
          />
          <img
            src="images/Rectangle 8 (1).png"
            className="lg:hidden w-full block"
            
            alt=""
            aria-hidden="true"
          />
        </div>

        <div className="reg-pub lg:w-[50%] w-full flex flex-col gap-y-[24px]">
          <h2 id="cohort-title" className= " text-left lg:text-[60px] text-[32px] font-[700] lg:w-[83%] lg:text-left md:text-center text-left lg:leading-[119.9999%] leading-[130%] lg:tracking-[-1.5%] tracking-[-0.25]">
            Cohort 2 registration is{" "}
            <span className="bg-gradient-to-r from-[#F4405E] to-[#F56A39] bg-clip-text text-transparent">
              now open!
            </span>
          </h2>

          <p className="lg:w-[638px] w-[100%] lg:text-left text-left md:text-center text-[16px] md:text-[20px] lg:text-[16px] font-[400] leading-[155%] tracking-[0.2%] text-[#D4D4D4]">
            Learn alongside ambitious graduates through mentorship, practical
            projects, and a community designed to help you grow confidently into
            tech.
          </p>

          <div className="waitlist-button justify-items-start flex lg:w-[100%] w-[100%]">
            <Link to="/registration-form" className="lg:w-[207px] w-full lg:h-[50px] h-[46px] rounded-3xl lg:text-[16px] h-[50px] text-[18px] font-[700] tracking-[0.5%] leading-[100%] bg-linear-to-r from-[var(--primary-color)] to-[var(--secondary-color)] cursor-pointer flex items-center gap-[12px] justify-center focus:outline-none
focus:ring-2
focus:ring-[#f68936]">
              
                Join the Waitlist
                <CgArrowLongRight className="lg:block hidden" aria-hidden="true" />
              
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NextCohort;
