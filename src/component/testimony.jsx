import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const cards = [
    <div className="bg-[#141414] h-[218px] md:h-[270px] md:w-[450px] m-auto flex items-center justify-center w-full border border-[#404040] rounded-[24px]">
       <div className="bg-[#141414] rounded-[24px] w-[362px] md:w-[450px] h-[196px] px-[16px] py-[20px] m-auto">
                <figure className="flex flex-col gap-y-8">
                  <blockquote className="text-[14px] md:text-[16px] font-[400] leading-[155%] tracking-[0.5%] text-[#D4D4D4]">
                    “Before FutureForge, I was learning design alone without
                    structure. The mentorship and community helped me build
                    confidence, improve my thinking, and grow faster than I
                    expected.”
                  </blockquote>
                  <div className="flex gap-x-7 ">
                    <img
                      src="images/Avatar.png"
                      alt="Annet Black image"
                      className=""
                    />
                    <div>
                      <p className="text-[white] text-[16px] md:text-[17px] font-[500]">
                        Annet Black
                      </p>
                      <p className="text-[14px] md:text-[17px] font-[400] text-[#D4D4D4]">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </figure>
       </div>
    </div>,

    <div className="bg-[#141414] h-[218px] md:h-[270px] md:w-[450px] m-auto flex items-center justify-center w-full border border-[#404040] rounded-[24px]">
      <div className="bg-[#141414] rounded-[24px] w-[362px] md:w-[450px] h-[196px] px-[16px] py-[20px] m-auto">
                <figure className="flex flex-col gap-y-8">
                  <blockquote className="text-[14px] md:text-[16px] font-[400] leading-[155%] tracking-[0.5%] text-[#D4D4D4]">
                    “Before FutureForge, I was learning design alone without
                    structure. The mentorship and community helped me build
                    confidence, improve my thinking, and grow faster than I
                    expected.”
                  </blockquote>
                  <div className="flex gap-x-7 ">
                    <img
                      src="images/Avatar.png"
                      alt="Annet Black image"
                      className=""
                    />
                    <div>
                      <p className="text-[white] text-[16px] md:text-[17px] font-[500]">
                        Annet Black
                      </p>
                      <p className="text-[14px] md:text-[17px] font-[400] text-[#D4D4D4]">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </figure>
       </div>
    </div>,

    <div className="bg-[#141414] h-[218px] md:h-[270px] md:w-[450px] m-auto flex items-center justify-center w-full border border-[#404040] rounded-[24px]">
       <div className="bg-[#141414] rounded-[24px] w-[362px] md:w-[450px] h-[196px] px-[16px] py-[20px] m-auto">
                <figure className="flex flex-col gap-y-8">
                  <blockquote className="text-[14px] md:text-[16px] font-[400] leading-[155%] tracking-[0.5%] text-[#D4D4D4]">
                    “Before FutureForge, I was learning design alone without
                    structure. The mentorship and community helped me build
                    confidence, improve my thinking, and grow faster than I
                    expected.”
                  </blockquote>
                  <div className="flex gap-x-7 ">
                    <img
                      src="images/Avatar.png"
                      alt="Annet Black image"
                      className=""
                    />
                    <div>
                      <p className="text-[white] text-[16px] md:text-[17px] font-[500]">
                        Annet Black
                      </p>
                      <p className="text-[14px] md:text-[17px] font-[400] text-[#D4D4D4]">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </figure>
       </div>
    </div>,

    <div className="bg-[#141414] h-[218px] md:h-[270px] md:w-[450px] m-auto flex items-center justify-center w-full border border-[#404040] rounded-[24px]">
        <div className="bg-[#141414] rounded-[24px] w-[362px] md:w-[450px] h-[196px] px-[16px] py-[20px] m-auto">
                <figure className="flex flex-col gap-y-8">
                  <blockquote className="text-[14px] md:text-[16px] font-[400] leading-[155%] tracking-[0.5%] text-[#D4D4D4]">
                    “Before FutureForge, I was learning design alone without
                    structure. The mentorship and community helped me build
                    confidence, improve my thinking, and grow faster than I
                    expected.”
                  </blockquote>
                  <div className="flex gap-x-7 ">
                    <img
                      src="images/Avatar.png"
                      alt="Annet Black image"
                      className=""
                    />
                    <div>
                      <p className="text-[white] text-[16px] md:text-[17px] font-[500]">
                        Annet Black
                      </p>
                      <p className="text-[14px] md:text-[17px] font-[400] text-[#D4D4D4]">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </figure>
       </div>
    </div>,

    <div className="bg-[#141414] h-[218px] md:h-[270px] md:w-[450px] m-auto flex items-center justify-center w-full border border-[#404040] rounded-[24px]">
       <div className="bg-[#141414] rounded-[24px] w-[362px] md:w-[450px] h-[196px] px-[16px] py-[20px] m-auto">
                <figure className="flex flex-col gap-y-8">
                  <blockquote className="text-[14px] md:text-[16px] font-[400] leading-[155%] tracking-[0.5%] text-[#D4D4D4]">
                    “Before FutureForge, I was learning design alone without
                    structure. The mentorship and community helped me build
                    confidence, improve my thinking, and grow faster than I
                    expected.”
                  </blockquote>
                  <div className="flex gap-x-7 ">
                    <img
                      src="images/Avatar.png"
                      alt="Annet Black image"
                      className=""
                    />
                    <div>
                      <p className="text-[white] text-[16px] md:text-[17px] font-[500]">
                        Annet Black
                      </p>
                      <p className="text-[14px] md:text-[17px] font-[400] text-[#D4D4D4]">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </figure>
       </div>
    </div>,

     <div className="bg-[#141414] h-[218px] md:h-[270px] md:w-[450px] m-auto flex items-center justify-center w-full border border-[#404040] rounded-[24px]">
       <div className="bg-[#141414] rounded-[24px] w-[362px] md:w-[450px] h-[196px] px-[16px] py-[20px] m-auto">
                <figure className="flex flex-col gap-y-8">
                  <blockquote className="text-[14px] md:text-[16px] font-[400] leading-[155%] tracking-[0.5%] text-[#D4D4D4]">
                    “Before FutureForge, I was learning design alone without
                    structure. The mentorship and community helped me build
                    confidence, improve my thinking, and grow faster than I
                    expected.”
                  </blockquote>
                  <div className="flex gap-x-7 ">
                    <img
                      src="images/Avatar.png"
                      alt="Annet Black image"
                      className=""
                    />
                    <div>
                      <p className="text-[white] text-[16px] md:text-[17px] font-[500]">
                        Annet Black
                      </p>
                      <p className="text-[14px] md:text-[17px] font-[400] text-[#D4D4D4]">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </figure>
       </div>
    </div>,

     <div className="bg-[#141414] h-[218px] md:h-[270px] md:w-[450px] m-auto flex items-center justify-center w-full border border-[#404040] rounded-[24px]">
      <div className="bg-[#141414] rounded-[24px] w-[362px] md:w-[450px] h-[196px] px-[16px] py-[20px] m-auto">
                <figure className="flex flex-col gap-y-8">
                  <blockquote className="text-[14px] md:text-[16px] font-[400] leading-[155%] tracking-[0.5%] text-[#D4D4D4]">
                    “Before FutureForge, I was learning design alone without
                    structure. The mentorship and community helped me build
                    confidence, improve my thinking, and grow faster than I
                    expected.”
                  </blockquote>
                  <div className="flex gap-x-7 ">
                    <img
                      src="images/Avatar.png"
                      alt="Annet Black image"
                      className=""
                    />
                    <div>
                      <p className="text-[white] text-[16px] md:text-[17px] font-[500]">
                        Annet Black
                      </p>
                      <p className="text-[14px] md:text-[17px] font-[400] text-[#D4D4D4]">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </figure>
       </div>
    </div>,

     <div className="bg-[#141414] h-[218px] md:h-[270px] md:w-[450px] m-auto flex items-center justify-center w-full border border-[#404040] rounded-[24px]">
       <div className="bg-[#141414] rounded-[24px] w-[362px] md:w-[450px] h-[196px] px-[16px] py-[20px] m-auto">
                <figure className="flex flex-col gap-y-8">
                  <blockquote className="text-[14px] md:text-[16px] font-[400] leading-[155%] tracking-[0.5%] text-[#D4D4D4]">
                    “Before FutureForge, I was learning design alone without
                    structure. The mentorship and community helped me build
                    confidence, improve my thinking, and grow faster than I
                    expected.”
                  </blockquote>
                  <div className="flex gap-x-7 ">
                    <img
                      src="images/Avatar.png"
                      alt="Annet Black image"
                      className=""
                    />
                    <div>
                      <p className="text-[white] text-[16px] md:text-[17px] font-[500]">
                        Annet Black
                      </p>
                      <p className="text-[14px] md:text-[17px] font-[400] text-[#D4D4D4]">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </figure>
       </div>
    </div>,

     <div className="bg-[#141414] h-[218px] md:h-[270px] md:w-[450px] m-auto flex items-center justify-center w-full border border-[#404040] rounded-[24px]">
       <div className="bg-[#141414] rounded-[24px] w-[362px] md:w-[450px] h-[196px] px-[16px] py-[20px] m-auto">
                <figure className="flex flex-col gap-y-8">
                  <blockquote className="text-[14px] md:text-[16px] font-[400] leading-[155%] tracking-[0.5%] text-[#D4D4D4]">
                    “Before FutureForge, I was learning design alone without
                    structure. The mentorship and community helped me build
                    confidence, improve my thinking, and grow faster than I
                    expected.”
                  </blockquote>
                  <div className="flex gap-x-7 ">
                    <img
                      src="images/Avatar.png"
                      alt="Annet Black image"
                      className=""
                    />
                    <div>
                      <p className="text-[white] text-[16px] md:text-[17px] font-[500]">
                        Annet Black
                      </p>
                      <p className="text-[14px] md:text-[17px] font-[400] text-[#D4D4D4]">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </figure>
       </div>
    </div>,
  ];

  const nextCard = () => {
    setCurrent((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const previousCard = () => {
    setCurrent((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  return (
    <section className="testimony-area lg:gap-y-[60px] gap-y-[50px] flex flex-col ">
      <div className="testimony-intro flex flex-col items-center">
        <p className=" text-[var(--primary-color)] lg:text-[14px] text-[16px] font-[700] leading-[120%] tracking-[0.5%]">
          Testimonials
        </p>
        <h3 className="lg:text-[48px] text-[36px]  lg:text-center text-center font-[700] leading-[120%] tracking-[1%] mb-2">
          From uncertainty to confidence in tech.
        </h3>
        <p className="text-[#D4D4D4] text-[16px] font-[400] text-center  leading-[155%] tracking-[0.2%] lg:w-[40%] w-full">
          Explore stories from Forgers who started with curiosity and grew
          through mentorship, practical learning, and community support.
        </p>
      </div>

      <div className="lg:hidden block">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {cards.map((card, index) => (
              <div key={index} className="min-w-full px-4">
                {card}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-5 mt-6">
          <button
            onClick={previousCard}
            className="
            bg-linear-to-r from-[var(--primary-color)] to-[var(--secondary-color)] cursor-pointer
            rounded-full 
            border 
            border-[#404040]
            p-3
            "
            aria-label="Previous testimonial"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={nextCard}
            className="
            rounded-full 
            bg-linear-to-r from-[var(--primary-color)] to-[var(--secondary-color)] cursor-pointer
            bg-[#755342]
            border-[#404040]
            p-3
            "
            aria-label="next testimonial"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="hidden lg:block relative overflow-hidden group">
        <div
          className=" absolute inset-0 z-10 pointer-events-none
    bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,.8),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(0,0,0,.8),transparent_60%)]"
        ></div>{" "}
        {/* left shadow overlay */}
        <div className="flex w-max animate-scroll will-change-transform gap-x-2">
          <div className="flex gap-x-3 shrink-0">
            <div className=" lg:flex lg:flex-col lg:gap-y-2 lg:h-[434px]">
              <div className="bg-[#141414] lg:w-[362px] lg:h-[218px] border border-[#404040] rounded-[24px] lg:px-[16px] lg:py-[20px]">
                <figure className="flex flex-col gap-y-8">
                  <blockquote className="text-[14px] font-[400] leading-[155%] tracking-[0.5%] text-[#D4D4D4]">
                    “Before FutureForge, I was learning design alone without
                    structure. The mentorship and community helped me build
                    confidence, improve my thinking, and grow faster than I
                    expected.”
                  </blockquote>
                  <div className="flex gap-x-7 ">
                    <img
                      src="images/Avatar.png"
                      alt="Annet Black image"
                      className=""
                    />
                    <div>
                      <p className="text-[white] text-[16px] font-[500]">
                        Annet Black
                      </p>
                      <p className="text-[14px] font-[400] text-[#D4D4D4]">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </figure>
              </div>
              <div className="bg-[#141414] border border-[#404040] rounded-[24px] lg:w-[362px] lg:h-[196px] lg:px-[16px] lg:py-[20px]">
                <figure className="flex flex-col gap-y-8">
                  <blockquote className="text-[14px] font-[400] leading-[155%] tracking-[0.5%] text-[#D4D4D4]">
                    “Before FutureForge, I was learning design alone without
                    structure. The mentorship and community helped me build
                    confidence, improve my thinking, and grow faster than I
                    expected.”
                  </blockquote>
                  <div className="flex gap-x-7 ">
                    <img
                      src="images/Avatar.png"
                      alt="Annet Black image"
                      className=""
                    />
                    <div>
                      <p className="text-[white] text-[16px] font-[500]">
                        Annet Black
                      </p>
                      <p className="text-[14px] font-[400] text-[#D4D4D4]">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
            <div className=" lg:h-[434px] flex lg:flex-col lg:gap-2">
              <div className="bg-[#141414] border border-[#404040] rounded-[24px] lg:w-[362px] lg:h-[240px] lg:px-[16px] lg:py-[20px]">
                <figure className="flex flex-col gap-y-8">
                  <blockquote className="text-[14px] font-[400] leading-[155%] tracking-[0.5%] text-[#D4D4D4]">
                    “Before FutureForge, I was learning design alone without
                    structure. The mentorship and community helped me build
                    confidence, improve my thinking, and grow faster than I
                    expected.”
                  </blockquote>
                  <div className="flex gap-x-7 ">
                    <img
                      src="images/Avatar.png"
                      alt="Annet Black image"
                      className=""
                    />
                    <div>
                      <p className="text-[white] text-[16px] font-[500]">
                        Annet Black
                      </p>
                      <p className="text-[14px] font-[400] text-[#D4D4D4]">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </figure>
              </div>
              <div className="bg-[#141414] border border-[#404040] rounded-[24px] lg:w-[362px] lg:h-[196px] lg:px-[16px] lg:py-[20px]">
                <figure className="flex flex-col gap-y-8">
                  <blockquote className="text-[14px] font-[400] leading-[155%] tracking-[0.5%] text-[#D4D4D4]">
                    “Before FutureForge, I was learning design alone without
                    structure. The mentorship and community helped me build
                    confidence, improve my thinking, and grow faster than I
                    expected.”
                  </blockquote>
                  <div className="flex gap-x-7 ">
                    <img
                      src="images/Avatar.png"
                      alt="Annet Black image"
                      className=""
                    />
                    <div>
                      <p className="text-[white] text-[16px] font-[500]">
                        Annet Black
                      </p>
                      <p className="text-[14px] font-[400] text-[#D4D4D4]">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
            <div className=" lg:h-[434px] flex lg:flex-col lg:gap-y-2">
              <div className="bg-[#141414] border-[#404040] rounded-[24px] lg:w-[362px] lg:h-[196px] border lg:px-[16px] lg:py-[20px]">
                <figure className="flex flex-col gap-y-8">
                  <blockquote className="text-[14px] font-[400] leading-[155%] tracking-[0.5%] text-[#D4D4D4]">
                    “Before FutureForge, I was learning design alone without
                    structure. The mentorship and community helped me build
                    confidence, improve my thinking, and grow faster than I
                    expected.”
                  </blockquote>
                  <div className="flex gap-x-7 ">
                    <img
                      src="images/Avatar.png"
                      alt="Annet Black image"
                      className=""
                    />
                    <div>
                      <p className="text-[white] text-[16px] font-[500]">
                        Annet Black
                      </p>
                      <p className="text-[14px] font-[400] text-[#D4D4D4]">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </figure>
              </div>
              <div className="bg-[#141414] border border-[#404040] rounded-[24px] lg:w-[362px] lg:h-[196px] lg:px-[16px] lg:py-[20px]">
                <figure className="flex flex-col gap-y-8">
                  <blockquote className="text-[14px] font-[400] leading-[155%] tracking-[0.5%] text-[#D4D4D4]">
                    “Before FutureForge, I was learning design alone without
                    structure. The mentorship and community helped me build
                    confidence, improve my thinking, and grow faster than I
                    expected.”
                  </blockquote>
                  <div className="flex gap-x-7 ">
                    <img
                      src="images/Avatar.png"
                      alt="Annet Black image"
                      className=""
                    />
                    <div>
                      <p className="text-[white] text-[16px] font-[500]">
                        Annet Black
                      </p>
                      <p className="text-[14px] font-[400] text-[#D4D4D4]">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
            <div className=" lg:h-[434px] flex lg:flex-col lg:gap-y-2">
              <div className="bg-[#141414] border border-[#404040] rounded-[24px] lg:w-[362px] lg:h-[218px] lg:px-[16px] lg:py-[20px]">
                <figure className="flex flex-col gap-y-8">
                  <blockquote className="text-[14px] font-[400] leading-[155%] tracking-[0.5%] text-[#D4D4D4]">
                    “Before FutureForge, I was learning design alone without
                    structure. The mentorship and community helped me build
                    confidence, improve my thinking, and grow faster than I
                    expected.”
                  </blockquote>
                  <div className="flex gap-x-7 ">
                    <img
                      src="images/Avatar.png"
                      alt="Annet Black image"
                      className=""
                    />
                    <div>
                      <p className="text-[white] text-[16px] font-[500]">
                        Annet Black
                      </p>
                      <p className="text-[14px] font-[400] text-[#D4D4D4]">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </figure>
              </div>
              <div className="bg-[#141414] border border-[#404040] rounded-[24px] lg:w-[362px] lg:h-[218px] border lg:px-[16px] lg:py-[20px] ">
                <figure className="flex flex-col gap-y-8">
                  <blockquote className="text-[14px] font-[400] leading-[155%] tracking-[0.5%] text-[#D4D4D4]">
                    “Before FutureForge, I was learning design alone without
                    structure. The mentorship and community helped me build
                    confidence, improve my thinking, and grow faster than I
                    expected.”
                  </blockquote>
                  <div className="flex gap-x-7 ">
                    <img
                      src="images/Avatar.png"
                      alt="Annet Black image"
                      className=""
                    />
                    <div>
                      <p className="text-[white] text-[16px] font-[500]">
                        Annet Black
                      </p>
                      <p className="text-[14px] font-[400] text-[#D4D4D4]">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          </div>

          <div className="flex gap-x-3 shrink-0">
            <div className=" lg:flex lg:flex-col lg:gap-y-2 lg:h-[434px]">
              <div className="bg-[#141414] lg:w-[362px] lg:h-[218px] border border-[#404040] rounded-[24px] lg:px-[16px] lg:py-[20px]">
                <figure className="flex flex-col gap-y-8">
                  <blockquote className="text-[14px] font-[400] leading-[155%] tracking-[0.5%] text-[#D4D4D4]">
                    “Before FutureForge, I was learning design alone without
                    structure. The mentorship and community helped me build
                    confidence, improve my thinking, and grow faster than I
                    expected.”
                  </blockquote>
                  <div className="flex gap-x-7 ">
                    <img
                      src="images/Avatar.png"
                      alt="Annet Black image"
                      className=""
                    />
                    <div>
                      <p className="text-[white] text-[16px] font-[500]">
                        Annet Black
                      </p>
                      <p className="text-[14px] font-[400] text-[#D4D4D4]">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </figure>
              </div>
              <div className="bg-[#141414] border border-[#404040] rounded-[24px] lg:w-[362px] lg:h-[196px] lg:px-[16px] lg:py-[20px]">
                <figure className="flex flex-col gap-y-8">
                  <blockquote className="text-[14px] font-[400] leading-[155%] tracking-[0.5%] text-[#D4D4D4]">
                    “Before FutureForge, I was learning design alone without
                    structure. The mentorship and community helped me build
                    confidence, improve my thinking, and grow faster than I
                    expected.”
                  </blockquote>
                  <div className="flex gap-x-7 ">
                    <img
                      src="images/Avatar.png"
                      alt="Annet Black image"
                      className=""
                    />
                    <div>
                      <p className="text-[white] text-[16px] font-[500]">
                        Annet Black
                      </p>
                      <p className="text-[14px] font-[400] text-[#D4D4D4]">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
            <div className=" lg:h-[434px] flex lg:flex-col lg:gap-2">
              <div className="bg-[#141414] border border-[#404040] rounded-[24px] lg:w-[362px] lg:h-[240px] lg:px-[16px] lg:py-[20px]">
                <figure className="flex flex-col gap-y-8">
                  <blockquote className="text-[14px] font-[400] leading-[155%] tracking-[0.5%] text-[#D4D4D4]">
                    “Before FutureForge, I was learning design alone without
                    structure. The mentorship and community helped me build
                    confidence, improve my thinking, and grow faster than I
                    expected.”
                  </blockquote>
                  <div className="flex gap-x-7 ">
                    <img
                      src="images/Avatar.png"
                      alt="Annet Black image"
                      className=""
                    />
                    <div>
                      <p className="text-[white] text-[16px] font-[500]">
                        Annet Black
                      </p>
                      <p className="text-[14px] font-[400] text-[#D4D4D4]">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </figure>
              </div>
              <div className="bg-[#141414] border border-[#404040] rounded-[24px] lg:w-[362px] lg:h-[196px] lg:px-[16px] lg:py-[20px]">
                <figure className="flex flex-col gap-y-8">
                  <blockquote className="text-[14px] font-[400] leading-[155%] tracking-[0.5%] text-[#D4D4D4]">
                    “Before FutureForge, I was learning design alone without
                    structure. The mentorship and community helped me build
                    confidence, improve my thinking, and grow faster than I
                    expected.”
                  </blockquote>
                  <div className="flex gap-x-7 ">
                    <img
                      src="images/Avatar.png"
                      alt="Annet Black image"
                      className=""
                    />
                    <div>
                      <p className="text-[white] text-[16px] font-[500]">
                        Annet Black
                      </p>
                      <p className="text-[14px] font-[400] text-[#D4D4D4]">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
            <div className=" lg:h-[434px] flex lg:flex-col lg:gap-y-2">
              <div className="bg-[#141414] border-[#404040] rounded-[24px] lg:w-[362px] lg:h-[196px] border lg:px-[16px] lg:py-[20px]">
                <figure className="flex flex-col gap-y-8">
                  <blockquote className="text-[14px] font-[400] leading-[155%] tracking-[0.5%] text-[#D4D4D4]">
                    “Before FutureForge, I was learning design alone without
                    structure. The mentorship and community helped me build
                    confidence, improve my thinking, and grow faster than I
                    expected.”
                  </blockquote>
                  <div className="flex gap-x-7 ">
                    <img
                      src="images/Avatar.png"
                      alt="Annet Black image"
                      className=""
                    />
                    <div>
                      <p className="text-[white] text-[16px] font-[500]">
                        Annet Black
                      </p>
                      <p className="text-[14px] font-[400] text-[#D4D4D4]">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </figure>
              </div>
              <div className="bg-[#141414] border border-[#404040] rounded-[24px] lg:w-[362px] lg:h-[196px] lg:px-[16px] lg:py-[20px]">
                <figure className="flex flex-col gap-y-8">
                  <blockquote className="text-[14px] font-[400] leading-[155%] tracking-[0.5%] text-[#D4D4D4]">
                    “Before FutureForge, I was learning design alone without
                    structure. The mentorship and community helped me build
                    confidence, improve my thinking, and grow faster than I
                    expected.”
                  </blockquote>
                  <div className="flex gap-x-7 ">
                    <img
                      src="images/Avatar.png"
                      alt="Annet Black image"
                      className=""
                    />
                    <div>
                      <p className="text-[white] text-[16px] font-[500]">
                        Annet Black
                      </p>
                      <p className="text-[14px] font-[400] text-[#D4D4D4]">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
            <div className=" lg:h-[434px] flex lg:flex-col lg:gap-y-2">
              <div className="bg-[#141414] border border-[#404040] rounded-[24px] lg:w-[362px] lg:h-[218px] lg:px-[16px] lg:py-[20px]">
                <figure className="flex flex-col gap-y-8">
                  <blockquote className="text-[14px] font-[400] leading-[155%] tracking-[0.5%] text-[#D4D4D4]">
                    “Before FutureForge, I was learning design alone without
                    structure. The mentorship and community helped me build
                    confidence, improve my thinking, and grow faster than I
                    expected.”
                  </blockquote>
                  <div className="flex gap-x-7 ">
                    <img
                      src="images/Avatar.png"
                      alt="Annet Black image"
                      className=""
                    />
                    <div>
                      <p className="text-[white] text-[16px] font-[500]">
                        Annet Black
                      </p>
                      <p className="text-[14px] font-[400] text-[#D4D4D4]">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </figure>
              </div>
              <div className="bg-[#141414] border border-[#404040] rounded-[24px] lg:w-[362px] lg:h-[218px] border lg:px-[16px] lg:py-[20px]">
                <figure className="flex flex-col gap-y-8">
                  <blockquote className="text-[14px] font-[400] leading-[155%] tracking-[0.5%] text-[#D4D4D4]">
                    “Before FutureForge, I was learning design alone without
                    structure. The mentorship and community helped me build
                    confidence, improve my thinking, and grow faster than I
                    expected.”
                  </blockquote>
                  <div className="flex gap-x-7 ">
                    <img
                      src="images/Avatar.png"
                      alt="Annet Black image"
                      className=""
                    />
                    <div>
                      <p className="text-[white] text-[16px] font-[500]">
                        Annet Black
                      </p>
                      <p className="text-[14px] font-[400] text-[#D4D4D4]">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
