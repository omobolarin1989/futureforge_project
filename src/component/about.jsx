function About() {
  return (
    <section className="lg:gap-y-[60px] md:gap-y-[100px] gap-y-[60px]" aria-labelledby="about-title" id="about-us">
      <div className="about-intro text-center flex flex-col items-center">
        <span className=" text-center text-[14px] font-[700] leading-0[150%] tracking-[0.5%] bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">
          About us
        </span>
        <h3 className="lg:text-[48px] text-[36px] font-[700] leading-[120%] tracking-[-1%] lg:w-[760px] md:w-[550px] text-center w-[400px]">
          Helping graduates confidently grow into tech careers.
        </h3>
      </div>

      <div className="about-image lg:my-[80px] my-[40px] w-full">
        <img
          src="images/Rectangle 2323.png"
          className="hidden lg:block w-[100%] h-[560px] "
          alt="futureforge student concentrating while learning"
        />
        <img
          src="images/Rectangle 2323 (1).png"
          className="block lg:hidden w-[100%]"
          alt=""
          aria-hidden="true"
        />
      </div>

      <div className="flex lg:flex-row flex-col gap-[32px] w-full lg:w-full lg:justify-between">
        <div className="our-mission lg:w-[380px] lg:full gap-[8px]">
          <h3 className="text-[24px] font-[700] leading-[135%] mb-3">
            Our Mission
          </h3>
          <p className="text-[#D4D4D4]lg:text-[16px] text-[16px] font-[400] lg:font-[400] font-[400] md:font-[600] leading-[155%] tracking-[0.2%] lg:w-full w-full">
            To make tech learning accessible, practical, and community-driven by
            helping graduates gain real-world skills, mentorship, and confidence
            to grow into successful tech careers.
          </p>
        </div>

        <div className="vision lg:w-[380px] w-full gap-[8px]">
          <h3 className="text-[24px] font-[700] leading-[135%] mb-3">Vision</h3>
          <p className="text-[#D4D4D4] lg:text-[16px] text-[16px] md:text-[18px] lg:font-[400] font-[400] md:font-[600] leading-[155%] tracking-[0.2%] lg:w-full w-[367px] md:w-full text-left">
            To build a future where ambitious African graduates can confidently
            access opportunities, mentorship, and thriving careers in technology
            regardless of their background.
          </p>
        </div>

        <div className="our-values lg:w-[375px] w-full gap-[8px]">
          <h3 className="text-[24px] font-[700] leading-[135%] mb-3">
            Our Values
          </h3>
          <p className="text-[#D4D4D4] lg:text-[16px] text-[16px] md:text-[18px] text-[16px] lg:font-[400] font-[400] md:font-[600] leading-[155%] tracking-[0.2%] lg:w-[100%] w-[367px] md:w-full">
            We believe meaningful growth comes from accessible learning,
            supportive communities, practical experience, mentorship, and
            consistent effort.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
