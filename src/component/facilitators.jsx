import { useState, useEffect } from "react";
import { TbArrowRight } from "react-icons/tb";
import { IoClose } from "react-icons/io5"; // Ensure this is imported for the modal!

function Facilitators() {
  const [facilitatorsData, setFacilitatorsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeModal, setActiveModal] = useState(null);

  // Fetch data from the backend on component mount
  useEffect(() => {
    const fetchFacilitators = async () => {
      try {
        // TODO: Update this URL to match your actual deployed API endpoint
        const response = await fetch("https://futureforge-api-wsre.onrender.com/api/facilitators");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setFacilitatorsData(data);
      } catch (error) {
        console.error("Error loading facilitators:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFacilitators();
  }, []);

  return (
    <section className="Facilitator-section flex flex-col lg:gap-y-[60px] gap-[32px] w-full px-4 lg:px-0">
      
      {/* Intro Section */}
      <div className="facilitator-intro flex flex-col items-center w-full lg:gap-4 gap-3 text-center">
        <p className="text-[#F43F5D] text-[14px] lg:text-[16px] font-[700] leading-[150%] tracking-[0.5%] uppercase">
          Facilitators
        </p>
        <h3 className="text-[36px] lg:text-[48px] font-[700] leading-[120%] tracking-[-1%] text-white">
          Meet the Facilitators
        </h3>
        <p className="text-[16px] text-[#D4D4D4] font-[400] max-w-[712px] leading-relaxed">
          Our facilitators combine mentorship, practical experience, and real-world insight to guide Forgers through collaborative learning journeys.
        </p>
      </div>

      {/* Loading State or Grid Section */}
      <div className="facilitator-profiles w-full max-w-[1280px] mx-auto mt-4 lg:mt-8 min-h-[300px]">
        
        {isLoading ? (
          <div className="w-full flex justify-center items-center h-[200px]">
            <div className="w-12 h-12 border-4 border-[#262626] border-t-[var(--primary-color)] rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 w-full">
            {facilitatorsData.map((person) => (
              <div 
                key={person._id} 
                onClick={() => setActiveModal(person)}
                className="group flex justify-between items-center w-full h-[100px] border border-[#262626] bg-[#111111] hover:bg-[#171717] hover:border-[#F43F5D] hover:-translate-y-1 rounded-[24px] p-4 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_10px_30px_rgba(244,63,93,0.1)]"
              >
                <div className="photo flex items-center gap-4">
                  <img 
                    src={person.imageUrl} 
                    className="w-[56px] h-[56px] lg:w-[64px] lg:h-[64px] rounded-2xl object-cover border border-[#404040] group-hover:border-[#F43F5D]/50 transition-colors" 
                    alt={`${person.name} profile`} 
                  />
                  <div className="name-track flex flex-col justify-center text-left">
                    <p className="text-[16px] lg:text-[18px] text-white font-[600] leading-tight mb-1">
                      {person.name}
                    </p>
                    <p className="text-[#A3A3A3] text-[13px] lg:text-[14px] font-[400] leading-tight">
                      {person.track}
                    </p>
                  </div>
                </div>
                
                <div className="proced-arrow flex justify-center items-center">
                  <div className="rounded-full p-2.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white shadow-md transform group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300">
                    <TbArrowRight className="text-[24px]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pop-up Modal Overlay for Facilitator Bio */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={() => setActiveModal(null)}>
          <div 
            className="relative w-full max-w-lg bg-[#0A0705] border border-[#262626] rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] p-8 lg:p-10 flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Background Glow */}
            <div className="absolute top-0 w-[150px] h-[150px] bg-[var(--primary-color)] opacity-20 blur-[80px] rounded-full pointer-events-none"></div>

            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 text-[#737373] hover:text-white hover:rotate-90 transition-all duration-300 z-20"
            >
              <IoClose size={28} />
            </button>

            <img 
              src={activeModal.imageUrl} 
              alt={activeModal.name} 
              className="w-28 h-28 rounded-2xl object-cover border border-[#404040] shadow-2xl z-10 mb-6" 
            />
            
            <h4 className="text-[28px] font-[700] text-white tracking-tight z-10">
              {activeModal.name}
            </h4>
            <p className="text-[#F43F5D] text-[15px] font-[600] uppercase tracking-wide mb-6 z-10">
              {activeModal.track}
            </p>
            
            <p className="text-[#a3a3a3] text-[16px] leading-relaxed z-10 text-left w-full">
              {activeModal.bio}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Facilitators;