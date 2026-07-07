
import Community from "../component/community";
import Footer from "../component/footer";


function TermsCondition () {
   return (
      <section className="font-gadugi bg-[#000000] min-h-screen text-[white] flex flex-col items-center lg:gap-y-[100px] gap-y-[15px] lg:py-10 w-full lg:px-[0] px-[14px]">


        <div className="terms-section lg:w-[882px] w-full flex flex-col lg:gap-[70px]">
               <div className="terms-header mb-[100px]">
                  <h2 className="text-center text-[24px] lg:text-[72px] font-[700] lg:leading-[110%] leading-[130%] tracking-[0.2%] lg:tracking-[-2%]">Terms & Condition</h2>
               </div>
               <div className="terms-content flex flex-col">
                  <ol className="flex flex-col lg:ml-1  lg:space-y-[64px] space-y-[20px] lg:marker:text-[24px] marker:font-[700] marker:text-[24px]">
                     <li className="space-y-[24px]">
                        <h2 className="text-[24px] lg:text-[32px] font-[700]  leading-[130%] tracking-[-0.25%]">1. Program Commitment & Acceptance</h2>
                        <p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">By enrolling in FutureForge Cohort 1, you (“Forger”) agree to follow all terms, conditions, rules, and policies outlined in this document. Since the program is completely free, your participation is your investment. Your commitment, consistency and accountability keep the space valuable for everyone.</p>
                     </li>

                     <li className="space-y-[24px]">
                        <h2 className="text-[24px] lg:text-[32px] font-[700]  leading-[130%] tracking-[-0.25%]">2. Commitment & Participation Policy</h2>
                        <div className="part-policy flex flex-col gap-y-[20px]">
                           <div className="focus flex flex-col gap-y-2.5">
                              <h3 className="text-[18px]  lg:text-[22px] font-[700] leading-[135%] tracking-[-0.25] lg:tracking-[0%]">Program Focus</h3>
                              <p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">The FutureForge program runs on commitment. Your dedication is the required contribution for your continued participation.</p>
                           </div>
                           <div className="requirements flex flex-col gap-y-2.5">
                               <h3 className="text-[18px]  lg:text-[22px] font-[700] leading-[135%] tracking-[-0.25] lg: tracking-[0%]">Participation Requirements</h3>
                              <p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">Your enrollment and continuation depend on meeting the mandatory attendance, weekly visibility requirements and task submissions.</p>
                           </div>
                           <div className="removal flex flex-col gap-y-2.5">
                               <h3 className="text-[18px]  lg:text-[22px] font-[700] leading-[135%] tracking-[-0.25] lg: tracking-[0%]">Program Removal & Re-enrollment</h3>
                              <p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">If you are removed from the program for any reason (withdrawal, strikes, or lack of commitment), your spot is forfeited immediately.</p>

                              <p className="mt-3 text-[16px] lg:text-[18px] lg:font-[400] leading-[155%]   lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">Removed Forgers may be barred from joining the next cohort to protect the space for serious learners.</p>
                           </div>
                        </div>
                     </li>

                     <li className="space-y-[24px]">
                        <div className="strike-system">
                           <h2 className="text-[24px] lg:text-[32px] font-[700]  leading-[130%] tracking-[-0.25%]">3. Strike System & Accountability</h2>
                        </div>
                        <div>
                           <p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">FutureForge uses a clear strike system to maintain fairness, discipline and commitment.</p>
                        </div>
                        <div className="program-focus flex flex-col gap-y-2">
                            <h3 className="text-[18px]  lg:text-[22px] font-[700] leading-[135%] tracking-[-0.25] lg: tracking-[0%]">Program Focus</h3>

                            <ul>
                              <li><p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">8 strikes = Immediate removal </p></li>

                              <li><p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> 4 strikes = Mandatory commitment review meeting</p></li>

                              <li><p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> 3.2 Strike-Worthy Infractions</p></li>
                              
                            </ul>
                        </div>
                        <div className="Full-strike program-focus flex flex-col gap-y-2">
                           <h3 className="text-[18px]  lg:text-[22px] font-[700] leading-[135%] tracking-[-0.25] lg: tracking-[0%]">FULL STRIKE <span className="font-[400]">(1.0) Infractions</span></h3>
                           <ul className=" pl-3">
                              <li><p className="before:content-['•'] lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> Missing learning sessions without valid reason  </p></li>

                              <li><p className="before:content-['•'] lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> Missing scheduled Pod-Mentor Session</p></li>

                               <li><p className="before:content-['•'] lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> Missing pod meetings (weekly Sunday gatherings) </p></li>

                               <li><p className="before:content-['•'] lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> Missing the Weekly Visibility Post</p></li>

                           </ul>
                        </div>
                     </li>

                     <li className="space-y-[24px]">
                        <div>
                           <h2 className="text-[24px] lg:text-[32px] font-[700]  leading-[130%] tracking-[-0.25%]">4. Attendance & Participation Requirement</h2>
                        </div>
                       
                        <div className="mandatory-sessions flex flex-col gap-y-2">
                            <h3 className="text-[18px]  lg:text-[22px] font-[700] leading-[135%] tracking-[-0.25] lg: tracking-[0%]">Mandatory Sessions</h3>

                            <ul>
                              <li><p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">All Forgers must attend:  </p></li>

                              <li><p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> Learning Sessions </p></li>

                              <li><p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> Pod Meetings (weekly Sundays) </p></li>

                              <li><p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> Pod-Mentor Sessions (bi-weekly Sundays)</p></li>
                              
                            </ul>
                        </div>
                        <div className="flex flex-col gap-y-2">
                           <h3 className="text-[18px]  lg:text-[22px] font-[700] leading-[135%] tracking-[-0.25] lg: tracking-[0%]">Weekly Visibility Requirement</h3>
                           <p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0] mt-3">Each Forger must complete and upload a structured weekly visibility post highlighting: </p>
                           <ul className="pl-3 flex flex-col">
                              <li><p className="before:content-['•'] lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> What you learned that week</p></li>

                              <li><p className="before:content-['•'] text-[16px] lg:text-[18px] lg:font-[400] leading-[155%]   lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> Facilitators who taught the sessions</p></li>

                               <li><p className="before:content-['•'] lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> Your personal reflection</p></li>

                               <li><p className="before:content-['•'] lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> One challenge you encountered and how you handled it</p></li>

                               <li><p className="before:content-['•'] lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> Tagging FutureForge </p></li>

                               <li><p className="before:content-['•'] lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> Missing this requirement counts as 1 strike.</p></li>

                           </ul>
                        </div>
                     </li>

                     <li className="space-y-[24px]">
                        <div>
                           <h2 className="text-[24px] lg:text-[32px] font-[700]  leading-[130%] tracking-[-0.25%]">5. Valid Reason For Absence & Excuse Limit</h2>
                        </div>

                        <div className="flex flex-col gap-y-[20px]">

                           <div className="valid-reason">
                           <h3 className="text-[18px]  lg:text-[22px] font-[700] leading-[135%] tracking-[-0.25] lg: tracking-[0%] mb-2">Valid Reasons</h3>
                           <p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">The following may be accepted as excused absences:   </p>
                           <ul className="pl-3">
                              <li><p className="before:content-['•'] lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> Medical emergencies</p></li>

                              <li><p className="before:content-['•'] lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> Family emergencies</p></li>

                               <li><p className="before:content-['•'] lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> Technical issues</p></li>

                           </ul>
                           </div>

                           <div className="notice flex flex-col gap-y-[8px]">
                              <h3 className="text-[18px]  lg:text-[22px] font-[700] leading-[135%] tracking-[-0.25] lg: tracking-[0%]">Advance Notice Required</h3>
                              <p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">You must inform the leadership team before a session whenever possible. Retroactive excuses may not be accepted unless communication was impossible.</p>
                           </div>
                           

                           <div className="excuse-limit flex flex-col gap-y-[8px]">
                              <h3 className="text-[18px]  lg:text-[22px] font-[700] leading-[135%] tracking-[-0.25] lg: tracking-[0%]">Maximum Excuse Limit</h3>
                              <p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">Each Forger has 5 excused absences total for the full cohort. After this limit, every absence results in a strike, regardless of the reason.</p>
                              
                              <p  className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0] mt-3"> Excuses cannot be recycled repeatedly to avoid accountability.</p>
                           </div>

                        </div>
                     </li>

                      <li className="space-y-[24px]">
                        <div>
                           <h2 className="text-[24px] lg:text-[32px] font-[700]  leading-[130%] tracking-[-0.25%]">6. Pod Mentorship Structure</h2>
                        </div>
                        
                        <div className="pod-meeting flex flex-col gap-y-[8px]">
                            <h3 className="text-[18px]  lg:text-[22px] font-[700] leading-[135%] tracking-[-0.25] lg: tracking-[0%]">Pod Meeting</h3>

                            <ul>
                              <li><p className="text-[16px] lg:text-[18px] lg:font-[400] leading-[155%]   lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">Pods meet every Sunday. Meetings alternate between: </p></li>

                              <li><p className="text-[16px] lg:text-[18px] lg:font-[400] leading-[155%]   lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> Pod-only sessions </p></li>

                              <li><p className="text-[16px] lg:text-[18px] lg:font-[400] leading-[155%]   lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> Pod-Mentor sessions  Infractions</p></li>
                              
                            </ul>
                        </div>

                        <div className="pod-mentor flex flex-col gap-y-[8px]">
                           <h3 className="text-[18px]  lg:text-[22px] font-[700] leading-[135%] tracking-[-0.25] lg: tracking-[0%]">Pod Mentor</h3>

                           <p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">Each pod has a facilitator serving as mentor. Missing a Pod-Mentor session counts as 1 full strike. </p>
                        </div>
                        <div className="visibility-challenge flex flex-col">
                           <h3 className="text-[18px] lg:text-[22px] font-[700] leading-[135%] tracking-[-0.25] lg: tracking-[0%]">Visibility Challenge</h3>
                           <p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0] lg:mt-[15px] mt-[9px]"> All pods participate in a weekly visibility challenge:</p>
                           <ul className="pl-3">
                              <li><p className="before:content-['•'] lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> Each Forger must create their weekly visibility post</p></li>

                              <li><p className="before:content-['•'] lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> All pods participate in a Pods support each other in structuring and completing this</p></li>

                               <li><p className="before:content-['•'] lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> Posts must be completed before the pod meeting ends </p></li>

                               <li><p className="before:content-['•'] lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> Missing a weekly visibility post results in 1 strike</p></li>

                               <li><p className="before:content-['•'] lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> Missing a weekly visibility post results in 1 strike</p></li>

                               <li><p className="before:content-['•'] lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> This strengthens consistency, teamwork, and long-term professional growth.</p></li>

                           </ul>
                        </div>
                     </li>

                      <li className="space-y-[24px]">
                        <h2 className="text-[24px] lg:text-[32px] font-[700]  leading-[130%] tracking-[-0.25%]">7. Program Structure</h2>
                        <div className="part-policy flex flex-col gap-y-[20px]">
                           <div className="learning-phases">
                              <h3 className="text-[18px]  lg:text-[22px] font-[700] leading-[135%] tracking-[-0.25] lg: tracking-[0%] mb-[8px]">Learning Phases</h3>
                              <p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">Weeks 1–7: Structured learning </p>
                              <p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> Weeks 8–12: Structured learning</p>
                           </div>
                           
                           <div className="requirements">
                               <h3 className="text-[18px]  lg:text-[24px] font-[700] leading-[135%] tracking-[-0.25] lg: tracking-[0%] mb-[8px]">Special Week 1 (After Week 7)</h3>
                              
                              <ul className="hidden lg:block">
                                 <li><p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">Quiz on Monday. Missing the Quiz ------------------------------------------------------------- 4 strikes</p></li>
                                 <li><p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> Practice Task from Tuesday to Monday. Missing the Practice Task----------------------------- 4 strikes</p></li>
                                 <li><p> Soft skills Session 1. Missing Soft skills Session -------------------------------------------------2 strikes</p></li>
                              </ul>

                               <ul className="lg:hidden block">
                                 <li><p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">Quiz on Monday. Missing the Quiz ---------------------------------------------------------------------- 4 strikes</p></li>
                                 <li><p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> Practice Task from Tuesday to Monday. Missing the Practice Task----------------------------- 4 strikes</p></li>
                                 <li><p> Soft skills Session 1. Missing Soft skills Session -------------------------------------------------------- 2 strikes</p></li>
                              </ul>

                           </div>
                           

                           <div className="requirements">
                               <h3 className="text-[18px]  lg:text-[24px] font-[700] leading-[135%] tracking-[-0.25] lg: tracking-[0%] mb-[8px]">Special Week 2 (After Week 12)</h3>
                              <ul className="lg:block hidden">
                                 
                                 <li><p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">Soft skills Session 2. Missing Soft skills Session -------------------------------------------------2 strikes</p></li>
                                 <li><p className="lg:text-[20px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">re-project Sprint (Monday to Monday). Missing or not participating in the Sprint -----------4 strikes</p></li>
                              </ul>

                               <ul className="block lg:hidde">
                                 
                                 <li><p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">Soft skills Session 2. Missing Soft skills Session --------------------------------------------------------------  2 strikes</p></li>
                                 <li><p className="lg:text-[20px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">re-project Sprint (Monday to Monday). Missing or not participating in the Sprint ---------------------  4 strikes</p></li>
                              </ul>

                           </div>
                           
                        </div>
                     </li>

                     <li className="space-y-[24px]">
                        <div>
                         <h2 className="text-[18px] lg:text-[32px] font-[700]  leading-[130%] tracking-[-0.25%]">8. Onboarding Requirement</h2>
                         </div>

                           <div>
                           <p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0] mb-[8px]"> Before the cohort begins, all Forgers must:</p>
                          
                              <ul>
                                 <li><p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">Review and sign these Terms & Conditions</p></li>
                                 <li><p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">Submit the Pre-Cohort Introduction Video</p></li>
                                 <li><p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">Attend the Onboarding Session</p></li>
                                 <li><p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">Attend the Mindset Preparation Session</p></li>
                              </ul>
                              </div>
                     </li>

                      <li className="space-y-[24px]">
                        <h2 className="text-[24px] lg:text-[32px] font-[700]  leading-[130%] tracking-[-0.25%]">9. Program Structure</h2>
                        <div className="part-policy flex flex-col gap-y-[20px]">
                           <div className="email-identity flex flex-col gap-y-[8px]">
                              <h3 className="text-[18px]  lg:text-[22px] font-[700] leading-[135%] tracking-[-0.25] lg: tracking-[0%]">Email Identity</h3>
                              <p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">Official messages will always include the sender’s name and affiliation.</p>
                           </div>
                           <div className="communication-channel flex flex-col gap-y-[8px]">
                               <h3 className="text-[18px]  lg:text-[22px] font-[700] leading-[135%] tracking-[-0.25] lg: tracking-[0%]">Communication Channels</h3>
                              <p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">Forgers must stay active on all designated communication platforms.</p>
                           </div>
                           
                        </div>
                      </li>

                      <li className="space-y-[24px]">
                        <h2 className="text-[24px] lg:text-[32px] font-[700]  leading-[130%] tracking-[-0.25%]">10. Conduct & Expectation</h2>
                        <div className="part-policy flex flex-col gap-y-[20px]">
                           <div className="professionalism flex flex-col gap-y-[8px]">
                              <h3 className="text-[20px]  lg:text-[24px] font-[700] leading-[135%] tracking-[-0.25] lg: tracking-[0%]">Professionalism</h3>
                              <p className="text-[16px] lg:text-[18px] lg:font-[400] leading-[155%]   lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">Respectful conduct is expected at all times.</p>
                           </div>
                           <div className="mindset flex flex-col gap-y-[8px]">
                               <h3 className="text-[20px]  lg:text-[22px] font-[700] leading-[135%] tracking-[-0.25] lg: tracking-[0%]">Attitude & Growth Mindset</h3>
                              <p className="text-[16px] lg:text-[18px] lg:font-[400] leading-[155%]   lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">Challenges are part of the process. Approach them with resilience, curiosity and openness to feedback.</p>
                           </div>
                           <div className="collaboration flex flex-col gap-y-[8px]">
                               <h3 className="text-[20px]  lg:text-[22px] font-[700] leading-[135%] tracking-[-0.25] lg: tracking-[0%]">Collaboration</h3>
                              <p className="text-[16px] lg:text-[18px] lg:font-[400] leading-[155%]   lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">Support and learn from one another. FutureForge thrives through shared growth.</p>
                           </div>
                           
                        </div>
                      </li>

                      <li className="space-y-[24px]">
                        
                        <div>
                           <h2 className="text-[24px] lg:text-[32px] font-[700]  leading-[130%] tracking-[-0.25%]">11. Valid Reason For Absence & Excuse Limit</h2>
                        </div>

                        <div className="ground-removal flex flex-col">
                           <h3 className="text-[20px]  lg:text-[22px] font-[700] leading-[135%] tracking-[-0.25] lg: tracking-[0%]">Grounds for Removal</h3>
                           <p className="mt-[10px]">Forgers may be removed for:  </p>
                           <div className="flex flex-col gap-y-[20px]">
                           <ul className="pl-3">
                              <li><p className="before:content-['•']  text-[16px] lg:text-[18px] lg:font-[400] leading-[155%]   lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> Reaching 8 strikes</p></li>

                              <li><p className="before:content-['•']  text-[16px] lg:text-[18px] lg:font-[400] leading-[155%]   lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> Lack of commitment</p></li>

                               <li><p className="before:content-['•']  text-[16px] lg:text-[18px] lg:font-[400] leading-[155%]   lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">  Violation of conduct rules</p></li>

                               <li><p className="before:content-['•']  text-[16px] lg:text-[18px] lg:font-[400] leading-[155%]   lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]"> Any action that harms the learning environment</p></li>

                           </ul>

                           <div className="no-return">
                              <h3 className="text-[18px]  lg:text-[22px] font-[700] leading-[135%] tracking-[-0.25] lg: tracking-[0%]">No Return Upon Removal</h3>
                              <p className="text-[16px] lg:text-[18px] lg:font-[400] leading-[155%]   lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">Removal leads to the loss of your spot and possible exclusion from the next cohort.</p>
                           </div>
                           </div>

                        </div>
                     </li>

                     <li className="space-y-[24px]">
                        <div>
                         <h2 className="text-[24px] lg:text-[32px] font-[700]  leading-[130%] tracking-[-0.25%]">12. Acknowledgment & Agreement</h2>
                         </div>

                           <div>
                           <p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0] mt-4">By signing, you confirm that:</p>
                          
                              <ul>
                                 <li><p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">You understand and accept all terms</p></li>
                                 <li><p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">You accept the visibility requirements</p></li>
                                 <li><p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">You understand the strike system</p></li>
                                 <li><p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0]">You commit to the expectations of FutureForge Cohort 1</p></li>
                              </ul>
                              </div>
                     </li>

                      <li className="space-y-[24px]">
                        <div>
                         <h2 className="text-[24px] lg:text-[32px] font-[700]  leading-[130%] tracking-[-0.25%]">13. Non-refundable payment</h2>
                         </div>

                         <div>
                           <p className="lg:text-[18px] text-[16px] font-[400] leading-[160%] lg:leading-[165%] tracking-[0.2%] lg:tracking-[0] lg:w-[75%] w-full">Kindly note that there is a non-refundable payment of 50,000 naira to be paid to have access to our learning platform</p>
                         </div>
                      </li>
                  </ol>
               </div>
        </div>

         <div className="footer-logo w-full">
        <img
          src="/images/image 9.png"
          className="w-full lg:h-[209.11px]"
          alt=""
        />
      </div>

      </section>
   )
}

export default TermsCondition