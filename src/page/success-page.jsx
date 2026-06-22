import { BsFillPatchCheckFill } from "react-icons/bs";


function SuccessPage () {


   return (
      <section className="bg-[#000000] min-h-screen gap-y-8 flex flex-col justify-center items-center bg-gradient-to-b bg-[#0A0705] bg-[radial-gradient(150%_35%_at_45%_2%,_rgba(60,22,11,0.90)_45%,_rgba(146,64,14,0.15)_60%,_transparent_90%)] ">
         <div className=" lg:w-[450px] lg:h-[550px] bg-white flex flex-col justify-center items-center gap-y-3">
            
            <BsFillPatchCheckFill className="text-[150px] bg-white text-green-400"/>
            <h3 className="text-[32px] text-green-400 ">Payment Succes</h3>

         </div>

         <div>
         <p className="text-[20px] text-[white] font-400">Kindly check your email for next step regarding your registration</p>
         </div>
      </section>
   )
}

export default SuccessPage