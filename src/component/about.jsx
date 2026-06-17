function About() {
  return (
    <section className="about-us   lg:gap-y-[60px] gap-y-[60px]">
      <div className="about-intro text-center flex flex-col items-center lg:mb-3 gap-y-[4px]">
        <p className=" text-center text-[14px] font-[700] leading-0[150%] tracking-[0.5%] bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">
          About us
        </p>
        <h3 className="lg:text-[48px] text-[36px] font-[700] leading-[120%] tracking-[-1%] lg:w-[760px] text-center w-[400px]">
          Helping graduates confidently grow into tech careers.
        </h3>
      </div>

      <div className="about-image lg:my-[80px] my-[40px] w-full">
        <img
          src="images/Rectangle 2323.png"
          className="hidden lg:block w-[100%] h-[560px] "
          alt=""
        />
        <img
          src="images/Rectangle 2323 (1).png"
          className="block lg:hidden w-[100%]"
          alt=""
        />
      </div>

      <div className="flex lg:flex-row flex-col gap-[32px] w-full lg:w-full lg:justify-between">
        <div className="our-mission lg:w-[380px] lg:full gap-[8px]">
          <h3 className="text-[24px] font-[700] leading-[135%] mb-3">
            Our Mission
          </h3>
          <article className="text-[#D4D4D4] text-[16px] font-[400] leading-[155%] tracking-[0.2%] lg:w-full w-full">
            To make tech learning accessible, practical, and community-driven by
            helping graduates gain real-world skills, mentorship, and confidence
            to grow into successful tech careers.
          </article>
        </div>

        <div className="vision lg:w-[380px] w-full gap-[8px]">
          <h3 className="text-[24px] font-[700] leading-[135%] mb-3">Vision</h3>
          <article className="text-[#D4D4D4] text-[16px] font-[400] leading-[155%] tracking-[0.2%] lg:w-full w-[367px] text-left">
            To build a future where ambitious African graduates can confidently
            access opportunities, mentorship, and thriving careers in technology
            regardless of their background.
          </article>
        </div>

        <div className="our-values lg:w-[375px] w-full gap-[8px]">
          <h3 className="text-[24px] font-[700] leading-[135%] mb-3">
            Our Values
          </h3>
          <article className="text-[#D4D4D4] text-[16px] font-[400] leading-[155%] tracking-[0.2%] lg:w-[100%] w-[367px]">
            We believe meaningful growth comes from accessible learning,
            supportive communities, practical experience, mentorship, and
            consistent effort.
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;
