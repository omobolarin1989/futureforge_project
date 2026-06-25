import { TbArrowRight } from "react-icons/tb";
import { Link } from "react-router-dom";

function Community() {
  return (
    <section
      aria-labelledby="community-title"
      className="join-community flex flex-col justify-center gap-[20px] lg:gap-[32px] lg:px-0 px-3 lg:py-[0] py-10 md:py-30 bg-linear-to-r  from-[var(--primary-color)] to-[var(--secondary-color)] rounded-[32px]"
    >
      <div className="w-full lg:h-[470px] flex flex-col justify-center items-center lg:gap-[16px] gap-[20px]">
        <h2
          className="text-center lg:text-[60px] text-[36px] font-[700] lg:w-[766px] lg:leading-[114.99999%] leading-[120%] tracking-[-1%] lg:tracking-[-1.5%]"
          id="community-title"
        >
          Your journey into tech should not happen alone.
        </h2>

        <p className="text-center lg:text-[18px] text-[16px] font-[400] lg:w-[932px] w-full leading-[160%] lg:tracking-normal tracking-[0.2%]">
          Join a community of ambitious graduates learning, growing, and
          building real-world tech skills together through mentorship and
          collaborative learning.
        </p>

        <Link
          to="/registration-form"
          className="lg:mt-3.5 flex items-center justify-center gap-[20px] text-[#000000] text-[16px] font-[700] rounded-[24px] lg:w-[239px] h-[50px] w-full bg-[#ffffff] lg:py-3.5 py-[18px] leading-[100%] tracking-[0.5%] cursor-pointer"
        >
          Join the Next Cohort
          <TbArrowRight aria-hidden="true" />{" "}
        </Link>
      </div>
    </section>
  );
}

export default Community;
