import { CgArrowLongRight } from "react-icons/cg";



function NextCohort() {

    return (
       <section className="registration lg:w-full w-full text-center flex flex-col items-center ">
             <p className="text-[20px] lg:text-[48px] text-[20px] lg:font-[350] font-[400] lg:w-[1280px] text-center lg:leading-[157%] lg:tracking-[-1%] lg:px-[10px] lg:pt-0 pt-[80px] lg:pb-[80px] pb-0">FutureForge is a free, community-first learning initiative helping graduates confidently 
                transition into tech through mentorship, real-world learning, and collaborative growth.
             </p>

             <div className="registration-tab w-full lg:w-full lg:pb-[80px] lg:pt-[120px] pt-[80px] lg:px-[20px] flex lg:flex-row flex-col lg:justify-evenly lg:items-center lg:gap-y-[444px] gap-y-[24px]">

                    <div className="reg-image lg:w-[50%]">
                        <img src="src\images\Rectangle 8.png"  className=" lg:block hidden lg:w-[500px]" alt="" />
                        <img src="src\images\Rectangle 8 (1).png" className="lg:hidden" block alt="" />
                    </div>

                    <div className="reg-pub lg:w-[50%] flex flex-col lg:justify-start lg:mt-0 mt-3 gap-[24px]">

                        <h2 className="text-left lg:text-[60px] text-[32px] font-[700] lg:w-[83%] lg:text-left text-left lg:leading-[119.9999%] leading-[130%] lg:tracking-[-1.5%] tracking-[-0.25]">Cohort 2 registration is <span className="bg-gradient-to-r from-[#F4405E] to-[#F56A39] bg-clip-text text-transparent">now open!</span></h2>

                        <p className="lg:w-[638px] w-[100%] lg:text-left text-left text-[16px] font-[400] leading-[155%] tracking-[0.2%] text-[#D4D4D4]">Learn alongside ambitious graduates through mentorship, practical projects, 
                            and a community designed to help you grow confidently into tech.
                        </p>

                        <div className="waitlist-button justify-items-start flex lg:w-[100%] w-[100%]">
                            <button className="lg:w-[207px] w-full py-[9px] py- rounded-3xl lg:text-[16px] h-[50px] text-[18px] font-[700] tracking-[0.5%] leading-[100%] bg-linear-to-r from-[var(--primary-color)] to-[var(--secondary-color)] cursor-pointer flex items-center gap-[12px] justify-center">Join the Waitlist<CgArrowLongRight className="lg:block hidden" /></button>
                        </div>
                    </div>
             </div>

       </section>
    )
}

export default NextCohort