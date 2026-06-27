import { BsFillPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";


function SuccessPage () {


   return (
      <section className="bg-[#000000] min-h-screen gap-y-8 flex flex-col justify-center items-center bg-gradient-to-b bg-[#0A0705] bg-[radial-gradient(150%_35%_at_45%_2%,_rgba(60,22,11,0.90)_45%,_rgba(146,64,14,0.15)_60%,_transparent_90%)]">
         <div className=" success-container lg:w-[450px] w-[350px] lg:h-[550px] h-[450px] bg-[#111111] text-white flex flex-col justify-center items-center gap-y-8 lg:px-5 px-4">
         <div className="flex flex-col items-center">
            
            <BsFillPatchCheckFill className="lg:text-[150px] text-[80px] bg-white text-green-400"/>
            <h3 className="lg:text-[32px] text-[24px]  text-green-400 ">Payment Successful</h3>

         </div>

         <div className="confirmation-text text-[16px] text-justify font-[400]">
            <p>Welcome to FurtureForge. Your #50,000 registration fee is confirmed and you are officially enrolled in your cohort. Our team will contact you shortly with your next step</p>
         </div>

         <div className="homepage-button w-full">
             <Link to="/" className="lg:w-[245px] w-[244px] md:w-[260px]">
             <button
                  
                  className="next-cohort text-[16px] lg:w-full w-full h-[55px]   border font-[700] rounded-[24px  bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] t[lg:hover:bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] cursor-pointer rounded-[24px] text-white"
                >
                  Back to Home Page
                </button>
                </Link>
         </div>

         <div>
         <p className="text-[16px] font-400">Need help? Contact <a href="mailto:admin@futureforgelearning.com" className="text-[#f66650]">admin@futureforgelearning.com</a></p>
         </div>
         </div>
      </section>
   )
}

export default SuccessPage