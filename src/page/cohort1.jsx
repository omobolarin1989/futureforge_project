import { CgArrowLongRight } from "react-icons/cg";
import { useState } from "react";
import Footer from "../component/footer";
import { useParams, NavLink, Link } from "react-router-dom";
import Community from "../component/community";

// 1. DATA ARRAY (8 Graduates)
const graduatesData = [
  {
    id: 1,
    name: "Amara Obi",
    trackId: "frontend",
    designation: "Frontend Developer",
    trackName: "Frontend Development",
    image: "/images/Rectangle 2324.png",
    testimony:
      "The coding boot camp reshaped how I think. Building responsive UIs with React feels like second nature now! I learned to love every pixel and state change.",
  },
  {
    id: 2,
    name: "Tunde Bakare",
    trackId: "frontend",
    designation: "Frontend Developer",
    trackName: "Frontend Development",
    image: "/images/Rectangle 2324 (1).png",
    testimony:
      "Learning CSS grid and state handling workflows opened so many doors. I am proud of my final capstone and ready for the tech world!",
  },
  {
    id: 3,
    name: "Chioma Nnaji",
    trackId: "backend",
    designation: "Backend Developer",
    trackName: "Backend Development",
    image: "/images/Rectangle 2324 (2).png",
    testimony:
      "Designing REST APIs and handling database systems gave me deep problem-solving skills. Back-end is pure magic and logic combined.",
  },
  {
    id: 4,
    name: "David Johnson",
    trackId: "backend",
    designation: "Backend Developer",
    trackName: "Backend Development",
    image: "/images/Rectangle 2324 (8).png",
    testimony:
      "Optimizing server speed and authentication scripts was tough but rewarding. Loved every single deployment challenge we faced!",
  },
  {
    id: 5,
    name: "Elena Rostova",
    trackId: "product-design",
    designation: "Product Designer",
    trackName: "Product Design",
    image: "/images/Rectangle 2324 (3).png",
    testimony:
      "Wireframing and user research taught me that true style must follow utility. Figma is my new creative playground for solving problems.",
  },
  {
    id: 6,
    name: "Sarah Connor",
    trackId: "product-management",
    designation: "Product Manager",
    trackName: "Product Management",
    image: "/images/Rectangle 2324 (6).png",
    testimony:
      "Steering roadmaps and practicing agile project methods changed my career path completely. Product delivery and launch strategy rule!",
  },
  {
    id: 7,
    name: "Ahmed Musa",
    trackId: "product-management",
    designation: "Product Manager",
    trackName: "Product Management",
    image: "/images/Rectangle 2324 (8).png",
    testimony:
      "Balancing engineering needs with clear stakeholder targets gave me supreme confidence to manage real, complex software builds.",
  },
  {
    id: 8,
    name: "Liam Wilson",
    trackId: "quality-assurance",
    designation: "Quality Assurance",
    trackName: "Quality Assurance",
    image: "/images/Rectangle 2324 (9).png",
    testimony:
      "Writing robust automation scripts and breaking builds systematically ensures clients only receive flawless production code.",
  },
];

function Cohort1() {
  const [isOpen, setIsOpen] = useState(false);
  const { trackId } = useParams();
  // Modal tracking state
  const [selectedGrad, setSelectedGrad] = useState(null);
  // Filter strategy based on the current track URL snippet
  const filteredGraduates = trackId
    ? graduatesData.filter((grad) => grad.trackId === trackId)
    : graduatesData;
  const navBtnStyles = ({ isActive }) =>
    `text-white px-4 py-2 rounded-xl text-[16px] font-[400] tracking-wide ${isActive ? "bg-gradient-to-r from-[#F43F5E] to-[#F59E0B] text-white font-[700]" : "bg-[#171717] text-gray-600 border border-[#262626] hover:bg-gradient-to-r hover:from-[#F43F5E] hover:to-[#F59E0B] "}`;

  return (
    <section className="min-h-screen bg-[#000000] text-[white] py-[20px] lg:px-[150px] px-[16px] flex flex-col gap-20px lg:gap-y-[80px]">
      <div className="nav flex justify-between items-center lg:py-1 pt-7 pb-15 ">
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
          <div className="nav-bar lg:flex hidden lg:flex-row lg:justify-between  lg:w-[369px] border border-red-500">
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

      <div className="story lg:mt-[20px] flex flex-col gap-[40px] ">
        <div className="story-para flex flex-col gap-y-[8px] lg:w-[645px] w-full">
          <p className="text-[#D4D4D4] cohort-period text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
            Feb - Jun 2026
          </p>
          <h1 className="Period-header text-[44px] lg:text-[72px] font-[700] lg:leading-[110%] leading-[114.99999999px] tracking-[.1,5%] tracking-[-2%]">
            Cohort 01
          </h1>
          <p className="text-[#D4D4D4] cohort-period lg:text-[18px] font-[400] leading-[160%] tracking-[0.5%] ">
            Cohort 01 was the year FutureForge stopped teaching tools and
            started teaching taste. The class shipped fewer things, but each one
            had a point of view.
          </p>
        </div>

        <div className="counter flex lg:w-[485px] w-full justify-between px-[2px]">
          <p className="flex flex-col items-center lg:text-[48px] text-[36px] font-[700] leading-[120%] tracking-[1%]">
            1{" "}
            <span className="text-[#D4D4D4] text-[18px] font-[400] leading-[100%] tracking-[0%]">
              Cohort
            </span>
          </p>
          <p className="flex flex-col items-center lg:text-[48px] text-[36px] font-[700] leading-[120%] tracking-[1%]">
            268+
            <span className="text-[#D4D4D4] text-[18px] font-[400] leading-[100%] tracking-[0%]">
              Graduates
            </span>
          </p>
          <p className="flex flex-col items-center lg:text-[48px] text-[36px] font-[700] leading-[120%] tracking-[1%]">
            5{" "}
            <span className="text-[#D4D4D4] text-[18px] font-[400] leading-[100%] tracking-[0%]">
              Tracks
            </span>
          </p>
        </div>
      </div>

      <div className="bg-black text-white antialiased lg:min-h-screen h-auto">
        <div className="">
          {/* Header */}
          <header className="mb-12">
            <h1 className="lg:text-[40px] text-[30px] font-[700] leading-[125%] tracking-[-0.5%]">
              Graduation Yearbook
            </h1>
           
          </header>

          {/* Navigation Track Filters */}
          <nav className="flex lg:flex-row flex-col gap-3 mb-12">
            <NavLink to="/cohort1" end className={navBtnStyles}>
              All
            </NavLink>
            <NavLink to="/cohort1/track/frontend" className={navBtnStyles}>
              Frontend Development
            </NavLink>
            <NavLink to="/cohort1/track/backend" className={navBtnStyles}>
              Backend Development
            </NavLink>
            <NavLink
              to="/cohort1/track/product-design"
              className={navBtnStyles}
            >
              Product Design
            </NavLink>
            <NavLink
              to="/cohort1/track/product-management"
              className={navBtnStyles}
            >
              Product Management
            </NavLink>
            <NavLink
              to="/cohort1/track/quality-assurance"
              className={navBtnStyles}
            >
              Quality Assurance
            </NavLink>
          </nav>

          {/* 4 Columns and 2 Rows Layout Grid */}
          <main className="grid grid-col-1  md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-6">
            {filteredGraduates.map((grad) => (
              <div
                key={grad.id}
                className="bg-[#171717] rounded-2xl overflow-hidden border border-[#262626] flex flex-col h-auto lg:w-[330px] w-full p-3"
              >
                {/* Profile Image (Top Half) */}
                <div className="h-[238px] w-full bg-slate-200 overflow-hidden flex-shrink-0 relative rounded-[20px]">
                  <img
                    className="w-full h-full object-cover object-center"
                    src={grad.image}
                    alt={grad.name}
                  />
                  <span className="absolute bottom-2 left-2 bg-slate-900/80 backdrop-blur-sm text-white text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded">
                    {grad.trackId.replace("-", " ")}
                  </span>
                </div>

                {/* Profile Card Body (Bottom Half) */}
                <div className="p-4 flex-grow flex flex-col justify-between min-h-0 ">
                  <div className="overflow-hidden">
                    <h3 className="text-base font-bold text-slate-900 mb-1 truncate">
                      {grad.name}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed italic line-clamp-none">
                      “{grad.testimony}”
                    </p>
                  </div>

                  {/* Arrow Button Container (The Last Item on the Card) */}
                  <div className="pt-2 flex justify-between items-center">
                    <p className=" text-center text-[14px] font-[700] leading-0[150%] tracking-[0.5%] bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">
                      Read Story
                    </p>
                    <button
                      onClick={() => setSelectedGrad(grad)}
                      className="cursor-pointer p-1  rounded-full bg-slate-100 text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-[#F43F5E] hover:to-[#F59E0B] transition-colors duration-200 shadow-sm"
                      title="Open Full Profile"
                    >
                      {/* hover:bg-gradient-to-r hover:from-[#F43F5E] hover:to-[#F59E0B] */}
                      {/* SVG Right Arrow icon */}
                      <svg
                        xmlns="http://w3.org"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </main>

          {/* Blurred Backdrop Overlay Modal Panel */}
          {selectedGrad && (
            <div className=" fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-slate-900/40 transition-all duration-300 animate-fadeIn">
              {/* Modal Focus Card */}
              <div className="bg-[#171717] rounded-[24px] justify-between overflow-hidden flex 2-full p-2 lg:max-w-[600px] lg:h-[288px] h-[270px] w-full border border-[#262626] text-[white]">
                {/* Close Button Top Right */}
                <button
                  onClick={() => setSelectedGrad(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-sm transition-colors"
                >
                  <svg
                    xmlns="http://w3.org"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Large View Profile Image */}
                <div className=" bg-[#171717] lg:h-[100%] h-[100%] w-[49%] lg:flex lg:flex-col justify-center items-center">
                  <img
                    className=" lg:h-screen h-[80%] h-[100%] w-full bg-[#171717] flex flex-col justify-center items-center"
                    src={selectedGrad.image}
                    alt={selectedGrad.name}
                  />
                </div>

                {/* Full Focused Details */}
                <div className="w-[47%] flex flex-col lg:py-5">
                  <h2 className="text-[24px] font-[700] leading-[135%]">
                    {selectedGrad.name}
                  </h2>
                  <div className="mt-5 flex flex-col justify-between">
                    <p className="text-[#A3A3A3] lg:text-[14px] text-[12px] font-[400] leading-[155%] ">
                      {selectedGrad.designation}
                    </p>

                    <p className="pt-4 lg:text-[16px] text-[13px] font-[400] leading-[160%]">
                      {selectedGrad.testimony}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div>
         <Community />
      </div>

      <div className="">
        <Footer />
      </div>
    </section>
  );
}

export default Cohort1;
