import { Link } from "react-router-dom";




function Footer() {

  
const phoneNumber = "2349168095276"; // No plus sign here
const textMessage = "Welcome to Futureforge, Please leave a message.";
const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textMessage)}`;

    
  
  return (
    <section className="h-fit w-full">
      <div className="footer flex flex-col gap-[30px] lg:gap-y-[20px] gap-[40px] ">
        <div className="flex lg:flex-row flex-col w-full justify-between lg:mt-[80px] mt-[80px] mb-[20px] gap-y-[32px] lg:h-[280px] gap-[10px] lg:gap-[64px]">
          <div className="futureforge-contact flex flex-col lg:h-280px lg:w-[357px] lg:gap-y-[48px] gap-y-[32px] ">
            <div className="contact-text lg:gap-y-[32px] gap-y-[16px]">
              <Link to="/" className="">
              <img
                src="images/image 8.png"
                className="lg:w-[245px] w-[245px]"
                alt="futureforge logo"
              />
              </Link>
              <p className="text-[#A3A3A3] mt-3 lg:text-[16px] text-[14px] font-[400] leading-[155%] tracking-[o.2%] w-[370px] ">
                Helping graduates grow into tech careers through mentorship,
                practical learning, and community support.
              </p>
            </div>

            <div className="socials flex justify-between lg:w-[188px] w-[220px]">
              <a href="https://www.facebook.com/share/18zk7hX5Zr/">
                <img
                  src="/images/facebook.png"
                  className="lg:w-[16px] w-[20px]"
                  alt="facebook icon"
                />
              </a>
              <a href="https://x.com/FutureforgeL">
                <img
                  src="/images/twitter.png"
                  className="lg:w-[16px] w-[20px]"
                  alt="twitter icon"
                />
              </a>
              <a href="https://www.instagram.com/futureforgelearning?igsh=MXdiMWxjMW80bTgwbw==">
                <img
                  src="/images/instagram.png"
                  className="lg:w-[16px] w-[20px]"
                  alt="instagram icon"
                />
              </a>
              <a href="https://www.linkedin.com/company/futureforge-learning-initiative/">
                <img
                  src="/images/linkedin.png"
                  className="lg:w-[16px] w-[20px]"
                  alt="linkedin icon"
                />
              </a>
            </div>
          </div>

          <div className="page-content">
            <p className="text-[16px] font-[700] leading-[100%] tracking-[0.5%] mb-5.5">
              FutureForge
            </p>
            <ul className="flex flex-col gap-4 text-[16px] font-[400] leading-[155%] tracking-[0.2%] text-[#A3A3A3]">
              
              <li>
                <Link to="/#about-us">
                About
                </Link>
              </li>
              
              <li>
                 <Link to="/#cohort-tracks">
                Learning Tracks
                </Link>
              </li>
              <li>
                <Link to="/#testimonial">
                Testimonials
                </Link>
              </li>
              <li>
                <Link to="/#futureforge-facilitators">
                Facilitators
                </Link>
              </li>
            </ul>
          </div>

          <div className="futureforge-community justify-between flex flex-col">
            <div>
              <p className="text-[16px] font-[700] leading-[100%] tracking-[0.5%] mb-5.5">
                Community
              </p>
              <ul className="flex flex-col gap-4 text-[16px] font-[400] leading-[155%] tracking-[0.2%] text-[#A3A3A3]">
                <li>
                  <Link to="/registration-form">
                  Join the next cohort
                  </Link>
                </li>
                <li>
                  
                  Access LMS
                 
                </li>
                <li>
                  <Link to="/cohort-story">
                  Grduate stories
                   </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="futureforge-community justify-between flex flex-col">
            <div>
              <p className="text-[16px] font-[700] leading-[100%] tracking-[0.5%] mb-5.5">
                Contact us
              </p>
              <ul className="flex flex-col gap-4 text-[16px] font-[400] leading-[155%] tracking-[0.2%] text-[#A3A3A3]">
                <li>
                  <a href="mailto:admin@futureforgelearning.com">admin@futureforgelearning.com</a>
                </li>
                <li>
                  <a href={whatsappURL} 
        target="_blank" 
        rel="noopener noreferrer">+2349168095276.</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright-pricacy flex lg:flex-row flex-col lg:justify-between">
          <p className="text-[#A3A3A3] lg:text-[14px] font-[400] leading-[150%]  tracking-[0.5%] ">
            © 2026 FutureForge. All rights reserved.
          </p>

          <p className="text-[16px] font-[400] leading-[155%] tracking-[0.2%] text-[#A3A3A3]">
            Privacy Policy . Terms of use
          </p>
        </div>
      </div>

      <div className="footer-logo w-full lg:pt-35">
        <img
          src="/images/image 9.png"
          className="w-full lg:h-[209.11px] pt-8"
          alt=""
        />
      </div>
    </section>
  );
}

export default Footer;
