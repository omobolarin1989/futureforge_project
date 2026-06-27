import { useState } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5"; 
import { Link } from "react-router-dom";

const trackData = [
  {
    id: "design",
    title: "Product Design",
    img: "/images/Frame 2147226501.png",
    description: "Master UI/UX principles, user research, and Figma to design intuitive digital products."
  },
  {
    id: "frontend",
    title: "Frontend Development",
    img: "/images/Frame 2147226501 (1).png",
    description: "Learn React, Tailwind CSS, and modern JavaScript to build responsive, dynamic web applications."
  },
  {
    id: "backend",
    title: "Backend Development",
    img: "/images/Frame 2147226501 (2).png",
    description: "Build robust APIs, manage databases, and architect scalable server-side systems."
  },
  {
    id: "qa",
    title: "Quality Assurance",
    img: "/images/Frame 2147226501 (4).png",
    description: "Ensure software reliability through manual testing, automated scripts, and bug tracking."
  },
  {
    id: "pm",
    title: "Product Management",
    img: "/images/Frame 2147226501 (5).png",
    description: "Lead teams, define product roadmaps, and bridge the gap between engineering and business."
  }
];

function Tracks() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section className="relative track-list justify-between flex lg:flex-row flex-col md:flex-col lg:gap-x-12 gap-y-[40px] w-full overflow-visible">
      
      {/* Left Section: Intro (Now taking up 40% to give cards more room) */}
      <div className="track-intros flex flex-col lg:w-[40%] w-full gap-y-[24px] lg:gap-y-[32px] justify-center z-10">
        <p className="text-[#F43F5D] text-[14px] lg:text-[16px] font-[700] leading-[150%] tracking-[0.5%] uppercase">
          Tracks
        </p>
        <h3 className="text-[38px] lg:text-[56px] lg:text-left md:text-center font-[700] leading-[1.1] tracking-[-1%] text-white">
          Explore career paths designed for real-world growth.
        </h3>
        <p className="text-[#D4D4D4] text-[16px] lg:text-left md:text-center font-[400] leading-[1.6]">
          Choose from beginner-friendly tracks built around practical learning, mentorship, and collaborative growth.
        </p>

        <div className="waitlist-button flex justify-start w-full mt-4">
          <Link to="/registration-form" className="w-full lg:w-auto">
            <button className="w-full lg:w-auto px-8 h-[54px] rounded-full text-[16px] font-[700] bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(244,63,93,0.4)] transition-all duration-300 cursor-pointer flex items-center gap-[12px] justify-center">
              Join the Waitlist <CgArrowLongRight size={20} />
            </button>
          </Link>
        </div>
      </div>

      {/* Right Section: Staggered Glassmorphism Grid (Now 60%) */}
      <div className="track-grid relative lg:w-[60%] w-full z-10 py-10 lg:py-0">
        
        {/* Ambient Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[var(--primary-color)] opacity-[0.15] blur-[100px] rounded-full pointer-events-none z-0"></div>

        {/* The Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 relative z-10">
          {trackData.map((track, index) => (
            <div
              key={track.id}
              onClick={() => setActiveModal(track)}
              className={`group relative flex flex-col items-center justify-center p-6 rounded-3xl bg-white/[0.03] backdrop-blur-md border border-white/10 cursor-pointer hover:bg-[#171717] hover:border-[#F43F5D] hover:-translate-y-3 hover:shadow-[0_15px_40px_rgba(244,63,93,0.2)] transition-all duration-500 min-h-[160px] lg:min-h-[200px]
                ${index % 3 === 1 ? "md:translate-y-12" : ""} 
                ${index === 4 ? "col-span-2 md:col-span-1" : ""}
              `}
            >
              <img
                src={track.img}
                alt={`${track.title} logo`}
                className="w-16 h-16 lg:w-20 lg:h-20 mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 drop-shadow-xl"
              />
              <p className="text-[14px] lg:text-[18px] text-center font-[600] text-[#D4D4D4] group-hover:text-white leading-tight">
                {track.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Pop-up Modal Overlay */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={() => setActiveModal(null)}>
          <div 
            className="relative w-full max-w-lg bg-[#0A0705] border border-[#262626] rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] p-8 lg:p-12 flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Background Glow inside modal */}
            <div className="absolute top-0 w-[200px] h-[200px] bg-[var(--primary-color)] opacity-20 blur-[80px] rounded-full pointer-events-none"></div>

            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 text-[#737373] hover:text-white hover:rotate-90 transition-all duration-300 z-20"
            >
              <IoClose size={32} />
            </button>

            <div className="relative w-24 h-24 rounded-3xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-8 shadow-2xl z-10">
              <img src={activeModal.img} alt={activeModal.title} className="w-14 h-14" />
            </div>
            
            <h4 className="text-[32px] font-[700] text-white mb-4 tracking-tight z-10">
              {activeModal.title}
            </h4>
            
            <p className="text-[#a3a3a3] text-[16px] leading-relaxed mb-10 z-10">
              {activeModal.description}
            </p>

            <Link to="/registration-form" className="w-full z-10">
              <button className="w-full py-4 rounded-full text-[16px] font-[700] bg-white text-black hover:bg-gray-200 hover:scale-[1.02] transition-all duration-300">
                Apply for this track
              </button>
            </Link>

          </div>
        </div>
      )}

    </section>
  );
}

export default Tracks;