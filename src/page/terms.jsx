import { CgArrowLongRight } from "react-icons/cg";
import { useState } from "react";
import { Link } from "react-router-dom";




function TermsCondition () {
const [isOpen, setIsOpen] = useState(false);
   return (
      <section className="bg-[#000000] min-h-screen text-[white] flex flex-col items-center gap-y-[15px] w-full lg:px-[0] px-[16px]">
         
         <div className="nav flex justify-between items-center lg:py-1 pt-7 pb-15 w-full ">
                 <div>
                   <Link to="/" className="">
                     <img
                       src="images/image 8.png"
                       alt="logo"
                       className="lg:w-[245%] w-[244px]"
                     />
                   </Link>
                 </div>
         
                 <nav className="">
                   <div className="nav-bar lg:flex hidden lg:flex-row lg:justify-between  lg:w-[369px]">
                     <Link to="/#about-us">Back to About</Link>
         
                     <Link to="/#cohort-tracks">Tracks.</Link>
         
                     <Link to="/#futureforge-facilitators">Facilitators</Link>
                   </div>
                   {/* <ul className="flex hidden lg:flex lg:justify-center text-white lg:w-[420px] gap-[70px] lg:px-[4px]">
                                    <li>
                                      <a
                                        href="#about-us"
                                        className="lg:text-[15px] font-[400] leading-[100%] tracking-[1%] hover:font-[700]"
                                      >
                                        About
                                      </a>
                                    </li>
                        
                                    <li>
                                      <a
                                        href="#cohort-tracks"
                                        className="lg:text-[15px] font-[400] leading-[100%] tracking-[1%] hover:font-[700]"
                                      >
                                        Tracks
                                      </a>
                                    </li>
                        
                                    <li>
                                      <a
                                        href="#futureforge-facilitators"
                                        className="lg:text-[15px] lg:font-[400] leading-[100%] tracking-[1%] lg:hover:font-[700]"
                                      >
                                        Facilitators
                                      </a>
                                    </li>
                                  </ul> */}
         
                   <button
                     type="button"
                     className="cursor-pointer block lg:hidden"
                     onClick={() => setIsOpen(!isOpen)}
                   >
                     {isOpen ? (
                       "✕"
                     ) : (
                       <img
                         src="/images/Frame 2147226499.png"
                         alt="Menu"
                         className="w-8 h-8"
                       />
                     )}
                   </button>
         
                   <div
                     className={`
                            ${isOpen ? "flex" : "hidden"}
                            flex-col
                            md:hidden
                            mt-4
                            text-white
                            gap-4
                          `}
                   >
                     <Link to="/#about-us">Back to About</Link>
         
                     <Link to="/#cohort-tracks">Tracks</Link>
         
                     <Link to="/#futureforge-facilitators">Facilitators</Link>
         
                     <li>
                       {" "}
                       <button className=" text-[16px] px-[24px] next-cohort  border border-[#404040] lg-[178px] py-2.5 font-[700] rounded-3xl hover:bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]">
                         Join Next Cohort
                       </button>
                     </li>
         
                     <li>
                       <Link to="/registration-form">
                         <button className="lms border border-[#404040] lg:py-[9px] lg:w-[135px] font-[700]  rounded-3xl bg-transparent hover:bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]">
                           Access LMS
                         </button>
                       </Link>
                     </li>
                   </div>
                   {/* <div className="">
                                    <ul
                                      className={`
                            ${isOpen ? "flex" : "hidden"}
                            flex-col
                            md:hidden
                            mt-4
                            text-white
                            gap-4
                          `}
                                    >
                                      <li>
                                        <a
                                          href="#about-us"
                                          className="lg:text-[15px] font-[400] leading-[100%] tracking-[1%] hover:font-[700]"
                                        >
                                          About
                                        </a>
                                      </li>
                        
                                      <li>
                                        <a
                                          href="#cohort-tracks"
                                          className="lg:text-[15px] font-[400] leading-[100%] tracking-[1%] hover:font-[700]"
                                        >
                                          Tracks
                                        </a>
                                      </li>
                        
                                      <li>
                                        <a
                                          href="#futureforge.facilitator"
                                          className="lg:text-[15px] lg:font-[400] leading-[100%] tracking-[1%] lg:hover:font-[700]"
                                        >
                                          Facilitators
                                        </a>
                                      </li>
                        
                                      <li><Link to="/registration-form">
                                    <button className="lms border border-[#404040] lg:py-[9px] lg:w-[135px] font-[700]  rounded-3xl bg-transparent hover:bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]">
                                      Access LMS
                                    </button>
                                  </Link></li>
                        
                                  <li> <button className=" text-[16px] px-[24px] next-cohort  border border-[#404040] lg-[178px] py-2.5 font-[700] rounded-3xl hover:bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]">
                                    Join Next Cohort
                                  </button></li>
                                    </ul>
                                    
                                  </div>*/}
                 </nav>
         
                 <div className="header-button text-white  lg:flex hidden gap-[16px] ">
                   <button className="lms border border-[#404040] lg:py-[9px] lg:w-[135px] font-[700]  rounded-3xl bg-transparent hover:bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]">
                     Access LMS
                   </button>
         
                   <Link to="/registration-form" className="w-[100%] lg:w-[50%]">
                     <button className="lg:w-[210px] w-full rounded-3xl py-2 cursor-pointer text-[16px] font-bold border border-[#404040] hover:bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center gap-[12px] justify-center">
                       Join Next Cohort <CgArrowLongRight />
                     </button>
                   </Link>
                 </div>
         </div>

        <div className="terms-section lg:w-[882px] flex flex-col lg:gap-[100px]">
               <div className="terms-header mb-[100px]">
                  <h2 className="text-center text-[24px] lg:text-[72px] lg:font-[700] lg:leading-[110%] leading-[130%] tracking-[0..2%] lg:tracking-[-2%]">Terms & Condition</h2>
               </div>
               <div className="terms-content flex flex-col">
                  <ol className="flex flex-col list-decimal pl-8 lg:space-y-[64px] space-y-[20px] lg:marker:text-[24px] lg:marker:font-[700]">
                     <li className="">
                        <h2 className="lg:text-left text-center text-[24px] lg:text-[32px] lg:font-[700]  leading-[130%] tracking-[-0.25%]">Program Commitment & Acceptance</h2>
                        <p className="lg:text-[20px] lg:font-[400] leading-[160%]   lg:leading-[165%] tracking-[0.2%] lg:tracking-[0] ">By enrolling in FutureForge Cohort 1, you (“Forger”) agree to follow all terms, conditions, rules, and policies outlined in this document. Since the program is completely free, your participation is your investment. Your commitment, consistency and accountability keep the space valuable for everyone.</p>
                     </li>

                     <li className="">
                        <h2 className="lg:text-left text-center text-[24px] lg:text-[32px] lg:font-[700]  leading-[130%] tracking-[-0.25%]">Commitment & Participation Policy</h2>
                        <div className="part-policy flex flex-col gap-y-[20px]">
                           <div className="focus">
                              <h3 className="text-[20px]  lg:text-[24px] font-[700] leading-[135%] tracking-[-0.25] lg: tracking-[0%]">Program Focus</h3>
                              <p className="text-[16px] lg:text-[20px] lg:font-[400] leading-[155%]   lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">The FutureForge program runs on commitment. Your dedication is the required contribution for your continued participation.</p>
                           </div>
                           <div className="requirements">
                               <h3 className="text-[20px]  lg:text-[24px] font-[700] leading-[135%] tracking-[-0.25] lg: tracking-[0%]">Participation Requirements</h3>
                              <p className="text-[16px] lg:text-[20px] lg:font-[400] leading-[155%]   lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">Your enrollment and continuation depend on meeting the mandatory attendance, weekly visibility requirements and task submissions.</p>
                           </div>
                           <div className="removal">
                               <h3 className="text-[20px]  lg:text-[24px] font-[700] leading-[135%] tracking-[-0.25] lg: tracking-[0%]">Program Removal & Re-enrollment</h3>
                              <p className="text-[16px] lg:text-[20px] lg:font-[400] leading-[155%]   lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">If you are removed from the program for any reason (withdrawal, strikes, or lack of commitment), your spot is forfeited immediately.</p>

                              <p className="mt-3 text-[16px] lg:text-[20px] lg:font-[400] leading-[155%]   lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">Removed Forgers may be barred from joining the next cohort to protect the space for serious learners.</p>
                           </div>
                        </div>
                     </li>
                     <li className="space-y-[24px]">
                        <div>
                           <h2 className="text-[20px]  lg:text-[24px] font-[700] leading-[135%] tracking-[-0.25] lg: tracking-[0%]">Strike System & Accountability</h2>
                        </div>
                        <div>
                           <p className="text-[16px] lg:text-[20px] lg:font-[400] leading-[155%]   lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">FutureForge uses a clear strike system to maintain fairness, discipline and commitment.</p>
                        </div>
                        <div>
                            <h3 className="text-[20px]  lg:text-[24px] font-[700] leading-[135%] tracking-[-0.25] lg: tracking-[0%]">Program Focus</h3>

                            <ul>
                              <li><p className="text-[16px] lg:text-[20px] lg:font-[400] leading-[155%]   lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">8 strikes = Immediate removal </p></li>

                              <li><p className="text-[16px] lg:text-[20px] lg:font-[400] leading-[155%]   lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> 4 strikes = Mandatory commitment review meeting</p></li>

                              <li><p className="text-[16px] lg:text-[20px] lg:font-[400] leading-[155%]   lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> 3.2 Strike-Worthy Infractions</p></li>
                              
                            </ul>
                        </div>
                        <div>
                           <h3 className="text-[20px]  lg:text-[24px] font-[700] leading-[135%] tracking-[-0.25] lg: tracking-[0%]">Program Focus</h3>
                           <ul className="list-disc px-15 marker:font-[0.3px]">
                              <li><p className="text-[16px] lg:text-[20px] lg:font-[400] leading-[155%]   lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> Missing learning sessions without valid reason  </p></li>

                              <li><p className="text-[16px] lg:text-[20px] lg:font-[400] leading-[155%]   lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">Missing scheduled Pod-Mentor Session</p></li>

                               <li><p className="text-[16px] lg:text-[20px] lg:font-[400] leading-[155%]   lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">Missing pod meetings (weekly Sunday gatherings) </p></li>

                               <li><p className="text-[16px] lg:text-[20px] lg:font-[400] leading-[155%]   lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">Missing the Weekly Visibility Post</p></li>

                           </ul>
                        </div>
                     </li>

                  </ol>
               </div>
        </div>



      </section>
   )
}

export default TermsCondition