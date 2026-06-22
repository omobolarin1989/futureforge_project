import { Link } from "react-router-dom"


function ErrorPage () {


   return(
         <section className="bg-[#000000] text-white h-screen flex justify-center items-center bg-gradient-to-b bg-[#0A0705] bg-[radial-gradient(150%_35%_at_45%_2%,_rgba(60,22,11,0.90)_25%,_rgba(146,64,14,0.15)_60%,_transparent_90%)] bg-no-repeat lg:px-5 px-5">
            <div className="flex flex-col items-center">
               <h1 className="lg:text-[62px] text-[32px] lg:font-[700] font-[500] ">Page Not found</h1>
               <Link to="/" className="text-center font-[500]">Return to Home Page</Link>

               <div className="footer-logo w-full">
        <img
          src="/images/image 9.png"
          className="w-full lg:h-[209.11px]"
          alt=""
        />
      </div>
            </div>
         </section>
   )
}

export default ErrorPage