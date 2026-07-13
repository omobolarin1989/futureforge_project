import { useState } from "react";
import Footer from "../component/footer";
import { useParams, NavLink } from "react-router-dom";
import Community from "../component/community";
import Header from "../component/header";



// 1. DATA ARRAY (8 Graduates)
const graduatesData = [
  {
    id: 1,
    name: "Olaniyi",
    trackId: "frontend",
    designation: "Frontend Developer",
    trackName: "Frontend Development",
    image: "/images/Olaniyi(Frontend).jpeg",
    testimony:
      "The coding boot camp reshaped how I think even when I have tried few before. Building responsive UIs with React feels like second nature now! I learned to love every pixel and state change. Its a process and this is a big eye opener.",
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
    name: "Bryce",
    trackId: "backend",
    designation: "Backend Developer",
    trackName: "Backend Development",
    image: "/images/David Bryce (backend).jpg",
    testimony:
      "Designing REST APIs and handling database systems gave me deep problem-solving skills. Back-end is pure magic and logic combined.",
  },
  {
    id: 4,
    name: "Oma",
    trackId: "backend",
    designation: "Backend Developer",
    trackName: "Backend Development",
    image: "/images/Oma … backend track .jpg",
    testimony:
      "Optimizing server speed and authentication scripts was tough but rewarding. Loved every single deployment challenge we faced!",
  },
  {
    id: 5,
    name: "OluwaKemi",
    trackId: "product-design",
    designation: "Product Designer",
    trackName: "Product Design",
    image: "/images/OluwaKemi(Product Design).jpeg",
    testimony:
      "Wireframing and user research taught me that true style must follow utility. Figma is my new creative playground for solving problems.",
  },
  {
    id: 6,
    name: "Ashabi",
    trackId: "product-management",
    designation: "Product Manager",
    trackName: "Product Management",
    image: "/images/Ashabi (pm).jpg",
    testimony:
      "Steering roadmaps and practicing agile project methods changed my career path completely. Product delivery and launch strategy rule!",
  },
  {
    id: 7,
    name: "Karl",
    trackId: "product-management",
    designation: "Product Manager",
    trackName: "Product Management",
    image: "/images/Karl(PM).jpeg",
    testimony:
      "Balancing engineering needs with clear stakeholder targets gave me supreme confidence to manage real, complex software builds.",
  },
  {
    id: 8,
    name: "Liam Wilson",
    trackId: "quality-assurance",
    designation: "Quality Assurance",
    trackName: "Quality Assurance",
    image: "/images/Esther (tester).jpg",
    testimony:
      "Transitioning from medicine to tech has been both challenging. Thanks to FutureForge, I gained valuable software testing (QA) skills and grew through an incredible learning experience. This is just the beginning, better days ahead",
  },
];



function Cohort1() {
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
    <section className="font-gadugi min-h-screen text-[white] py-[20px] lg:px-[150px] px-[16px] flex flex-col gap-20px lg:gap-y-[110px] bg-gradient-to-b bg-[#0A0705] bg-[radial-gradient(150%_35%_at_35%_2%,_rgba(60,22,11,0.90)_5%,_rgba(146,64,14,0.15)_25%,_transparent_60%)] bg-no-repeat bg-local bg-no-repeat">
      
      <Header />

      <div className="story lg:mt-[20px] flex flex-col gap-[40px] ">
        <div className="story-para flex flex-col gap-y-[8px] lg:w-[645px] w-full">
          <p className="text-[#D4D4D4] cohort-period text-[14px] font-[400] leading-[150%] tracking-[0.5%]">
            Feb - Jun 2026
          </p>
          <h2 className="Period-header text-[44px] lg:text-[72px] font-[700] lg:leading-[110%] leading-[114.99999999px] tracking-[.1,5%] tracking-[-2%]">
            Cohort 01
          </h2>
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
              The graduates
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
          <main className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-6">
            {filteredGraduates.map((grad) => (
              <div 
                key={grad.id}
                className="bg-[#171717] rounded-2xl overflow-hidden border border-[#262626] flex flex-col h-[100%] lg:w-[370px] w-full p-3 "
              >
                {/* Profile Image (Top Half) */}
                <div className="h-[75%] w-full bg-slate-200 overflow-hidden flex-shrink-0 relative rounded-[20px]">
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
                    <h3 className="text-base font-bold text-[#d4d4d4] mb-1 truncate">
                      {grad.name}
                    </h3>
                    <p className="text-[#d4d4d4] text-xs leading-relaxed italic line-clamp-none">
                      “{grad.testimony}”
                    </p>
                  </div>

                  {/* Arrow Button Container (The Last Item on the Card) */}
                  <div className="pt-2 flex justify-between items-center">
                    <p className=" text-center text-[14px] font-[700] leading-0[150%] tracking-[0.5%] bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">
                      Read Story
                    </p>
                    <button
                    aria-label="Open Amara Obi full profile"
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
              <div className="bg-[#171717] rounded-[24px] justify-between overflow-hidden flex 2-full p-2 lg:max-w-[600px] lg:h-[400px] h-[270px] w-full border border-[#262626] text-[white]">
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
                <div className=" bg-[#171717] lg:h-full h-[100%] w-[49%] lg:flex lg:flex-col justify-center items-center">
                  <img
                    className=" lg:h-screen h-[100%] w-full bg-[#171717] flex flex-col justify-center items-center"
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

                    <p className=" pt-4 lg:text-[16px] text-[13px] font-[400] leading-[160%]">
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
