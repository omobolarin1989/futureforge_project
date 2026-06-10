// import { GoMail } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { useState } from "react";

function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const isValid = /\S+@\S+\.\S+/.test(email);
  const textValid = text.trim().length >= 5;
  const [focused, setFocused] = useState(false);

  const [namefocused, setNameFocused] = useState(false);
  const [linkedin, setLinkedin] = useState("");
  const [linkedinFocused, setLinkedinFocused] = useState(false);
  const linkedinValid =
    linkedin === "" || /^https?:\/\/(www\.)?linkedin\.com\/.*$/i.test(linkedin);
  const [paymentConsent, setPaymentConsent] = useState("");

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  return (
    <section className=" text-[#ffffff] form-action bg-[#000000] min-h-screen bg-gradient-to-b from-[#221008] via-[#0c0604] to-[#040201]">
      <div className="nav flex justify-between items-center lg:py-1 pt-7 pb-15">
        <div>
          <img
            src="./src/images/image 8.png"
            alt="logo"
            className="lg:w-[245%] w-[244px]"
          />
        </div>

        <navbar className="">
          <a href="" className="lg:hidden md:hidden sm:block">
            <img
              src="/src/images/Frame 2147226499.png"
              className="lg:w-[80%] w-[100%]"
            />
          </a>

          <ul className="flex hidden lg:flex lg:justify-center text-white lg:w-[420px] gap-[70px] lg:px-[4px]">
            <li>
              <a
                href=""
                className="lg:text-[15px] font-[400] leading-[100%] tracking-[1%] hover:font-[700]"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="./"
                className="lg:text-[15px] font-[400] leading-[100%] tracking-[1%] hover:font-[700]"
              >
                Tracks
              </a>
            </li>

            <li>
              <a
                href="./"
                className="lg:text-[15px] lg:font-[400] leading-[100%] tracking-[1%] lg:hover:font-[700]"
              >
                Facilitators
              </a>
            </li>
          </ul>
        </navbar>
      </div>

      <div className="form-container w-[100%] flex flex-col justify-center items-center lg:mt-50 mt-[144px] lg:gap-[64px] gap-[32px]">
        <div className="form-section lg:w-[753px] flex flex-col gap-[8px] lg:gap-[16px] ">
          <div className="form-header w-100% text-center">
            <h1 className="text-[30px] lg:text-[48px] font-[700] leading-[125%] lg:leading-[120%] tracking-[-0.5%] lg:tracking-[-1%]  ">
              Register For the Next Cohort
            </h1>
          </div>

          <div className="form-para w-[100%] text-center flex flex-col items-center">
            <p className=" w-[370px] lg:w-[575px] lg:text-center text-[#D4D4D4] text-[16px] leading-[155%] tracking-[0.2%] font-[400]">
              Choose from beginner-friendly tracks built around practical
              learning, mentorship, and collaborative growth.
            </p>
          </div>
        </div>

        <div className="main-form w-[100%] lg:w-[753px] ">
          <form
            action=""
            method="post"
            _self
            className="flex flex-col gap-y-[38px] lg:gap-y-[32px]"
          >
            <fieldset className="flex flex-col lg:flex-row w-full lg:w-[full] gap-x-[16px] lg:gap-x-[20px]">
              <legend className="p-info text-[20px] lg:text-[24px] font-[700] leading-[135%] mb-[10px] lg:mb-[20px]">
                Personal Information
              </legend>

              <div className="input-flex flex lg:flex-col flex-col w-full lg-w-[50%] gap-y-[20px]">
                <div className="flex flex-col gap-y-[8px] ">
                  <label
                    For="f-name"
                    className="text-[#d4d4d4] text-[14px] font-[700] leading-[150%] tracking-[0.5%]"
                  >
                    Full Name
                  </label>

                  <div
                    className={`relative w-full rounded-[24px] p-[2px] ${namefocused ? "bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]" : text === "" ? "bg-[#3A3A3A]" : textValid ? "bg-green-500" : "bg-red-500"}`}
                  >
                    <FaRegUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10" />
                    {text !== "" &&
                      (textValid ? (
                        <FaCheckCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500 z-10" />
                      ) : (
                        <MdError className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 z-10" />
                      ))}

                    <input
                      type="text"
                      onChange={(e) => setText(e.target.value)}
                      onFocus={() => setNameFocused(true)}
                      onBlur={() => setNameFocused(false)}
                      value={text}
                      className="w-full bg-[#111111] rounded-[22px] px-4 py-3 pl-12 pr-12 text-white outline-none"
                      placeholder="Enter your Full name"
                      id="f-name"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-y-[8px]">
                  <label
                    For=""
                    className="text-[#d4d4d4] text-[14px] font-[700] leading-[150%] tracking-[0.5%]"
                  >
                    Date of Birth
                  </label>

                  <div className="relative w-full rounded-[24px] p-[2px] bg-[#3A3A3A] focus-within:bg-gradient-to-r focus-within:from-[var(--primary-color)] focus-within:to-[var(--secondary-color)]">
                    <MdOutlineCalendarMonth className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="date"
                      className=" pl-12 pr-8 w-full bg-[#111111] rounded-[22px] px-4 py-3 text-[#888788] outline-none "
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-y-[8px]">
                  <label
                    For="gender"
                    className="text-[#d4d4d4] text-[14px] font-[700] leading-[150%] tracking-[0.5%]"
                  >
                    Gender
                  </label>
                  <div className=" w-full rounded-[24px] p-[2px] bg-[#3A3A3A] focus-within:bg-gradient-to-r focus-within:from-[var(--primary-color)] focus-within:to-[var(--secondary-color)]">
                    <select
                      name="gender"
                      className=" w-full bg-[#111111] rounded-[22px] px-4 py-3 text-white outline-none "
                      id="experience"
                    >
                      <option value="beginner selected">Gender</option>
                      <option value="intermediate">Male</option>
                      <option value="expert">Female</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-y-[8px]">
                  <label
                    For=""
                    className="text-[#d4d4d4] text-[14px] font-[700] leading-[150%] tracking-[0.5%]"
                  >
                    State
                  </label>
                  <div className=" w-full rounded-[24px] p-[2px] bg-[#3A3A3A] focus-within:bg-gradient-to-r focus-within:from-[var(--primary-color)] focus-within:to-[var(--secondary-color)]">
                    <input
                      type="text"
                      className=" w-full bg-[#111111] rounded-[22px] px-4 py-3 text-white outline-none "
                    />
                  </div>
                </div>
              </div>

              <div className="input-flex flex lg:flex-col flex-col  w-full lg-w-[50%] gap-y-[20px]">
                <div className="flex flex-col gap-y-[8px]">
                  <label
                    For=""
                    className="text-[#d4d4d4] text-[14px] font-[700] leading-[150%] tracking-[0.5%]"
                  >
                    Email
                  </label>
                  <div
                    className={`relative w-full rounded-[24px] p-[2px] ${
                      focused
                        ? "bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]"
                        : email === ""
                          ? "bg-[#3A3A3A]"
                          : isValid
                            ? "bg-green-500"
                            : "bg-red-500"
                    }`}
                  >
                    <FaRegUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10" />
                    {email !== "" &&
                      (isValid ? (
                        <FaCheckCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500 z-10" />
                      ) : (
                        <MdError className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 z-10" />
                      ))}

                    <input
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocused(true)}
                      onBlur={() => setFocused(false)}
                      value={email}
                      className="w-full bg-[#111111] rounded-[22px] px-4 py-3 pl-12 pr-12 text-white outline-none"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-y-[8px]">
                  <label
                    For=""
                    className="text-[#d4d4d4] text-[14px] font-[700] leading-[150%] tracking-[0.5%]"
                  >
                    Whatsapp
                  </label>
                  <div className=" w-full rounded-[24px] p-[2px] bg-[#3A3A3A] focus-within:bg-gradient-to-r focus-within:from-[var(--primary-color)] focus-within:to-[var(--secondary-color)]">
                    <input
                      type="tel"
                      className=" w-full bg-[#111111] rounded-[22px] px-4 py-3 text-white outline-none "
                      placeholder="0000 0000 0000"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-y-[8px] ">
                  <label
                    For=""
                    className="text-[#d4d4d4] text-[14px] font-[700] leading-[150%] tracking-[0.5%]"
                  >
                    Country
                  </label>
                  <div className=" w-full rounded-[24px] p-[2px] bg-[#3A3A3A] focus-within:bg-gradient-to-r focus-within:from-[var(--primary-color)] focus-within:to-[var(--secondary-color)]">
                    <input
                      type="text"
                      className=" w-full bg-[#111111] rounded-[22px] px-4 py-3 text-white outline-none "
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-y-[8px]">
                  <label
                    For=""
                    className="text-[#d4d4d4] text-[14px] font-[700] leading-[150%] tracking-[0.5%]"
                  >
                    Highest Level of Education
                  </label>
                  <div className=" w-full rounded-[24px] p-[2px] bg-[#3A3A3A] focus-within:bg-gradient-to-r focus-within:from-[var(--primary-color)] focus-within:to-[var(--secondary-color)]">
                    <input
                      type="text"
                      className=" w-full bg-[#111111] rounded-[22px] px-4 py-3 text-white outline-none "
                    />
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset className="">
              <legend className=" text-[24px] font-[700] leading-[135%] tracking-[0] mb-[8px]">
                Programme Information
              </legend>

              <div className="flex flex-col gap-y-[20px]">
                <div className="flex lg:flex-row flex-col gap-x-[20px] gap-y-[20px]  w-full">
                  <div className="level of experience lg:w-[50%] w-full flex flex-col gap-y-[8px] ">
                    <label
                      For="experience"
                      className="text-[#d4d4d4] text-[14px] font-[700] leading-[150%] tracking-[0.5%] mb-[8px]"
                    >
                      Level of Experience
                    </label>

                    <div className=" w-full rounded-[24px] p-[2px] bg-[#3A3A3A] focus-within:bg-gradient-to-r focus-within:from-[var(--primary-color)] focus-within:to-[var(--secondary-color)]">
                      <select
                        name="experience"
                        className=" w-full bg-[#111111] rounded-[22px] px-4 py-3 text-white outline-none "
                        id="experience"
                      >
                        <option value="default selected">
                          Select track of interest
                        </option>
                        <option value="frontend">Frontend</option>
                        <option value="backend">Backend</option>
                        <option value="product-design">Product Design</option>
                        <option value="product-design">
                          Product management
                        </option>
                        <option value="qa">Quality Assurance</option>
                      </select>
                    </div>
                  </div>

                  <div className="level of experience lg:w-[50%] w-full  flex flex-col gap-y-[8px] ">
                    <label
                      For="experience"
                      className="text-[#d4d4d4] text-[14px] font-[700] leading-[150%] tracking-[0.5%] mb-[8px]"
                    >
                      Level of Experience
                    </label>

                    <div className=" w-full rounded-[24px] p-[2px] bg-[#3A3A3A] focus-within:bg-gradient-to-r focus-within:from-[var(--primary-color)] focus-within:to-[var(--secondary-color)]">
                      <select
                        name="experience"
                        className=" w-full bg-[#111111] rounded-[22px] px-4 py-3 text-white outline-none "
                        id="experience"
                      >
                        <option value="beginner selected">Beginer</option>
                        <option value="intermediate">intermediate</option>
                        <option value="expert">Expert</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="text-area">
                  <p className="pb-2">
                    <label
                      htmlFor="motivation"
                      className="text-[#d4d4d4] text-[14px] font-[700] leading-[150%] tracking-[0.5%] mb-[8px]"
                    >
                      Why do you want to join Future Forge
                    </label>
                  </p>
                  <div className=" w-full rounded-[24px] p-[2px] bg-[#3A3A3A] focus-within:bg-gradient-to-r focus-within:from-[var(--primary-color)] focus-within:to-[var(--secondary-color)]">
                    <textarea
                      name="motivation"
                      id="motivation"
                      placeholder="Type your text here"
                      className="rounded-[24px] block w-full bg-[#111111] rounded-[22px] px-4 py-3 text-white outline-none"
                      rows={5}
                    ></textarea>
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-[#d4d4d4] text-[14px] font-[700] leading-[150%] tracking-[0.5%] mb-[8px]">
                Linkedin Profile{" "}
                <span className="text-[#A1A2A2]  text-[14px] font-[400] leading[150%] tracking[0.5%]">
                  (optional)
                </span>
              </legend>

              <p className="pb-2">
                <label
                  htmlFor="linkedin"
                  className=" text-[14px] font-[700] leading-[150%] tracking-[0.5%]"
                ></label>
              </p>

              <div
                className={`relative w-full rounded-[24px] p-[2px] ${linkedinFocused ? "bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]" : linkedin === "" ? "bg-[#3A3A3A]" : linkedinValid ? "bg-green-500" : "bg-red-500"}`}
              >
                {linkedin !== "" &&
                  (linkedinValid ? (
                    <FaCheckCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500 z-10" />
                  ) : (
                    <MdError className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 z-10" />
                  ))}
                <input
                  type="url"
                  id="linkedin"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  onFocus={() => setLinkedinFocused(true)}
                  onBlur={() => setLinkedinFocused(false)}
                  placeholder="https://linkedin.com/in/your-profile (optional)"
                  className="w-full bg-[#111111] rounded-[22px] px-4 py-3 pl-12 pr-12 text-white outline-none"
                />
              </div>
            </fieldset>

            <fieldset className="flex flex-col">
              <legend className="text-[#FFFFFF]  mb-[8px] text-[16px] font-[700] leading-[155%] tracking-[0.2%]  ">
                Do you agree to pay a non-refundable administrative fee of ...
              </legend>
              <div className="flex items-center gap-8">
                <label className="flex items-center par-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment-consent"
                    value="yes"
                    checked={paymentConsent === "yes"}
                    onChange={(e) => setPaymentConsent(e.target.value)}
                    className="hidden"
                  />

                  <div
                    className={`w-[20px] h-[20px] rounded-full flex items-center justify-center transition-all ${
                      paymentConsent === "yes"
                        ? "bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]"
                        : "border-[4px] border-[#6B6B6B]"
                    }`}
                  >
                    {paymentConsent === "yes" && (
                      <div className="w-[12px] h-[12px] rounded-full bg-black"></div>
                    )}
                  </div>
                  <span className="[#FFFFFF] ml-3 text-[16px] font-[700] leading-[155%] tracking-[0.2%]">
                    Yes
                  </span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment-consent"
                    id=""
                    value="no"
                    checked={paymentConsent === "no"}
                    onChange={(e) => setPaymentConsent(e.target.value)}
                    className="hidden"
                  />

                  <div
                    className={`w-[20px] h-[20px] rounded-full flex items-center justify-center transition-all ${
                      paymentConsent === "no"
                        ? "bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]"
                        : "border-[4px] border-[#6B6B6B]"
                    }`}
                  >
                    {paymentConsent === "no" && (
                      <div className="w-[10px] h-[10px] rounded-full bg-black"></div>
                    )}
                  </div>

                  <span className="text-[#FFFFFF] ml-3 text-[16px] font-[700] leading-[155%] tracking-[0.2%]">
                    No
                  </span>
                </label>
              </div>
            </fieldset>

            <fieldset>
              <div className="flex flex-col lg:gap-y-[20px] gap-[16px]">
                <legend></legend>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="text-[#FFFFFF] lg:text-[16px] text-[14px ]  font-[400] leading-[155%] tracking-[0.2%]"
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={() => setTermsAccepted(!termsAccepted)}
                    className="hidden"
                  />

                  <div
                    className={`cursor-pointer w-6 h-6 rounded-[8px] flex items-center justify-center transition-all ${
                      termsAccepted
                        ? "bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]"
                        : "border-2 border-[#6B6B6B]"
                    }`}
                  >
                    {termsAccepted && (
                      <span className="text-white text-lg font-bold leading-none">
                        ✓
                      </span>
                    )}
                  </div>

                  <span>
                    I agree to the{" "}
                    <a className="cursor-pointer">
                      <u>Terms and Conditions</u>
                    </a>
                  </span>
                </label>

                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="text-[#FFFFFF] lg:text-[16px] text-[14px ]  font-[400] leading-[155%] tracking-[0.2%]"
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={() => setPrivacyAccepted(!privacyAccepted)}
                    className="hidden"
                  />

                  <div
                    className={`cursor-pointer w-6 h-6 rounded-[8px] flex items-center justify-center transition-all ${
                      privacyAccepted
                        ? "bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]"
                        : "border-2 border-[#6B6B6B]"
                    }`}
                  >
                    {privacyAccepted && (
                      <span className="text-white text-lg font-bold leading-none">
                        ✓
                      </span>
                    )}
                  </div>

                  <span>
                    I agree to the{" "}
                    <a className="cursor-pointer">
                      <u>Terms and Conditions</u>
                    </a>
                  </span>
                </label>
               
              </div>
            </fieldset>

            <input type="submit" value="Submit" className="text-[#737373] text-[16px] font-[700] leading-[100%] tracking[0.5%]  w-full bg-[#262626] py-[9px] rounded-[24px]" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default RegistrationForm;
