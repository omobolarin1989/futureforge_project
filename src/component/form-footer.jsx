import { Link } from "react-router-dom";




function FormFooter() {

  
const phoneNumber = "2349168095276"; // No plus sign here
const textMessage = "Welcome to Futureforge, Please leave a message.";
const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textMessage)}`;

const lmsPage = () => {
   const newWindow = window.open(
      "https://future-forge-lms.vercel.app/",
      "_blank",
      "noopener,noreferrer",
    );

    if(newWindow){
   newWindow.opener = null;
 }
  };
    
  
  return (
    <footer className="flex flex-col lg:gap-y-20 gap-y-10">
      <div className="footer flex flex-col gap-[30px] lg:gap-y-[20px] gap-[40px] ">
        <div className="flex lg:flex-row flex-col w-full justify-between lg:mt-[80px] mt-[80px] mb-[20px] gap-y-[32px] lg:h-[280px] gap-[10px] lg:gap-[64px]">
          <div className="futureforge-contact flex flex-col lg:h-280px lg:w-[357px] lg:gap-y-[48px] gap-y-[32px] ">
            <div className="contact-text lg:gap-y-[32px] gap-y-[16px]">
              <Link to="/" className="" aria-label="Go to FutureForge homepage">
              <img
                src="images/image 8.png"
                className="lg:w-[245px] w-[245px]"
                alt=""
              />
              </Link>
              <p className="text-[#A3A3A3] mt-3 lg:text-[16px] text-[14px] font-[400] leading-[155%] tracking-[o.2%] w-[370px] ">
                Helping graduates grow into tech careers through mentorship,
                practical learning, and community support.
              </p>
            </div>

            <div className="socials flex justify-between lg:w-[188px] w-[220px]">
              <a target="_blank" href="https://www.facebook.com/share/18zk7hX5Zr/"
               rel="noopener noreferrer"
  aria-label="Visit FutureForge Facebook page">
                <img
                  src="/images/facebook.png"
                  className="lg:w-[16px] w-[20px]"
                  alt=""
                  
                />
              </a>
              <a target="_blank" href="https://x.com/FutureforgeL"
               rel="noopener noreferrer"
  aria-label="Visit FutureForge X page" 
            className="focus:outline-none focus:ring-2 focus:ring-[#A3A3A3]"
  >
                <img
                  src="/images/twitter.png"
                  className="lg:w-[16px] w-[20px]"
                  alt=""
                />
              </a>


              <a target="_blank" href="https://www.instagram.com/futureforgelearning?igsh=MXdiMWxjMW80bTgwbw=="
               rel="noopener noreferrer"
  aria-label="Visit FutureForge instagram page"
  className="focus:outline-none focus:ring-2 focus:ring-[#A3A3A3]">
                <img
                  src="/images/instagram.png"
                  className="lg:w-[16px] w-[20px]"
                  alt=""
                />
              </a>


              <a target="_blank" href="https://www.linkedin.com/company/futureforge-learning-initiative/"
               rel="noopener noreferrer"
  aria-label="Visit FutureForge linkedin page"
              className="focus:outline-none focus:ring-2 focus:ring-[#A3A3A3]"
  >
                <img
                  src="/images/linkedin.png"
                  className="lg:w-[16px] w-[20px]"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="page-content">
            <h3 className="text-[16px] font-[700] leading-[100%] tracking-[0.5%] mb-5.5">
              FutureForge
            </h3>
            <ul className="flex flex-col gap-4 text-[16px] font-[400] leading-[155%] tracking-[0.2%] text-[#A3A3A3]">
              
              <li>
                <Link to="/#about-us"
                className="focus:outline-none focus:ring-2 focus:ring-[#A3A3A3]"
                >
                About
                </Link>
              </li>
              
              <li>
                 <Link to="/#cohort-tracks"
                 className="focus:outline-none focus:ring-2 focus:ring-[#A3A3A3]"
                 >
                Learning Tracks
                </Link>
              </li>
              <li>
                <Link to="/#testimonial"
                className="focus:outline-none focus:ring-2 focus:ring-[#A3A3A3]"
                >
                Testimonials
                </Link>
              </li>
              <li>
                <Link to="/#futureforge-facilitators"
                className="focus:outline-none focus:ring-2 focus:ring-[#A3A3A3]"
                >
                Facilitators
                </Link>
              </li>
            </ul>
          </div>

          <div className="futureforge-community justify-between flex flex-col">
            <div>
              <h3 className="text-[16px] font-[700] leading-[100%] tracking-[0.5%] mb-5.5">
                Community
              </h3>
              <ul className="flex flex-col gap-4 text-[16px] font-[400] leading-[155%] tracking-[0.2%] text-[#A3A3A3]">
               
                <li>
                  <button type="button" href="" onClick={lmsPage}  aria-label="Open FutureForge LMS in a new tab"
                  className="focus:outline-none focus:ring-2 focus:ring-[#A3A3A3]">
                  Access LMS
                 </button>
                </li>
                <li>
                  <Link to="/cohort-story"
                    className="focus:outline-none focus:ring-2 focus:ring-[#A3A3A3]"                  
                  >
                  Graduate stories
                   </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="futureforge-community justify-between flex flex-col">
            <div>
              <h3 className="text-[16px] font-[700] leading-[100%] tracking-[0.5%] mb-5.5">
                Contact us
              </h3>
              <ul className="flex flex-col gap-4 text-[16px] font-[400] leading-[155%] tracking-[0.2%] text-[#A3A3A3]">
                <li>
                  <a href="mailto:admin@futureforgelearning.com"
                  className="focus:outline-none focus:ring-2 focus:ring-[#A3A3A3]">admin@futureforgelearning.com</a>
                </li>
                <li>
                  <a href={whatsappURL} 
        target="_blank" 
        rel="noopener noreferrer"
        className="focus:outline-none focus:ring-2 focus:ring-[#A3A3A3]"
        >+2349168095276.</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright-pricacy flex lg:flex-row md:flex-col flex-col lg:justify-between gap-y-2 md:gap-y-4">
          <p className="text-[#A3A3A3] lg:text-[14px] font-[400] leading-[150%]  tracking-[0.5%] ">
            © 2026 FutureForge. All rights reserved.
          </p>

          <p className="text-[16px] font-[400] leading-[155%] tracking-[0.2%] text-[#A3A3A3]">
            Privacy Policy . Terms of use
          </p>
        </div>
      </div>

      <div className="footer-logo w-full">
        <img
          src="/images/image 9.png"
          className="w-full lg:h-[209.11px]"
          alt=""
        />
      </div>
    </footer>
  );
}

export default FormFooter;
