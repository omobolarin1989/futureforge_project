// import { GoMail } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PhoneInput } from "react-international-phone";
import Select from "react-select";
import { options } from "../page/country-flag";
import "react-international-phone/style.css";
import { useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Footer from "../component/footer";
import { Link } from "react-router-dom";

function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const isValid = /\S+@\S+\.\S+/.test(email);
  const textValid = fullName.trim().length >= 5;
  const [focused, setFocused] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [local, setLocal] = useState("");
  const [stateFocused, setStateFocused] = useState(false);

  const [namefocused, setNameFocused] = useState(false);
  const [linkedin, setLinkedin] = useState("");
  const [linkedinFocused, setLinkedinFocused] = useState(false);
  const linkedinValid =
    linkedin === "" || /^https?:\/\/(www\.)?linkedin\.com\/.*$/i.test(linkedin);

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const [country, setCountry] = useState(null);
  const [phone, setPhone] = useState("");
  const phoneRef = useRef(null);

  const [education, setEducation] = useState("");
  const [interest, setInterest] = useState("");
  const [experience, setExperience] = useState("");
  const [motivation, setMotivation] = useState("");

  const motivationValid = motivation.trim().length > 20;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validDOB = dateOfBirth !== "";
  const dateRef = useRef(null);
  const [dateError, setDateError] = useState("");

  const isEmailDuplicate = submitError.toLowerCase().includes("email");

  const selectStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "#111111",
      borderRadius: "22px",
      height: "48px",
      minHeight: "48px",
      borderColor: state.isFocused ? "transparent" : "#3A3A3A",
      boxShadow: "none",
      "&:hover": { borderColor: "transparent" },
    }),
    menu: (base) => ({ ...base, backgroundColor: "#111111" }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "#333333" : "#111111",
      color: "white",
    }),
    singleValue: (base) => ({ ...base, color: "white" }),
    placeholder: (base) => ({ ...base, color: "#888788" }),
  };

  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    if (phoneRef.current) {
      const input = phoneRef.current.querySelector("input");
      if (input) {
        input.placeholder = "Enter Whatsapp Number";
      }
    }
  }, []);

  const canSubmit =
    termsAccepted &&
    privacyAccepted &&
    isValid &&
    textValid &&
    dateOfBirth &&
    validDOB &&
    gender &&
    local &&
    phone.length > 5 &&
    country &&
    education &&
    interest &&
    experience &&
    motivationValid;

  const lmsPage = () => {
    window.open(
      "https://future-forge-lms.vercel.app/",
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    if (!canSubmit) {
      alert("Please fill in all required fields correctly.");
      return;
    }

    setIsSubmitting(true);

    const formData = {
      fullName,
      email,
      dateOfBirth,
      whatsappNumber: phone,
      gender,
      country: country?.label,
      state: local,
      highestEducation: education,
      areaOfInterest: interest,
      levelOfExperience: experience,
      reasonForJoining: motivation,
      agreedToTerms: termsAccepted,
      consentedToPrivacy: privacyAccepted,
      cohortId: "507f1f77bcf86cd799439011",
    };

    try {
      const response = await fetch(
        "https://futureforge-api-wsre.onrender.com/api/applicants/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      const text = await response.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        data = {};
      }

      if (!response.ok) {
        setSubmitError(data.error || "Registration failed. Please try again.");
        setIsSubmitting(false);
        return;
      }

      if (data.paymentLink) {
        window.location.href = data.paymentLink;
      }
    } catch (error) {
      setSubmitError("Something went wrong. Please check your connection.");
      setIsSubmitting(false);
    }
  };

  return (
    <section className="overflow-x-hidden grow xl:w-full lg:max-w-[1440px] font-gadugi w-full md:w-full xl:max-w-[2560px] text-white form-action min-h-screen bg-gradient-to-b bg-[#0A0705] bg-[radial-gradient(150%_35%_at_35%_2%,_rgba(60,22,11,0.90)_5%,_rgba(146,64,14,0.15)_20%,_transparent_90%)] bg-no-repeat px-5 lg:px-[80px]">
      <div className="nav flex justify-between items-center lg:py-10 pt-7">
        <div>
          <Link to="/" className="w-auto">
            <img
              src="images/image 8.png"
              alt="logo"
              className="lg:w-[245%] w-[180px]"
            />
          </Link>
        </div>

        <nav className="lg:w-[60%]">
          <div className="lg:[w-80%]">
            <div className="lg:w-[100%] flex justify-between">
              <div className="nav-bar lg:flex hidden lg:flex-row lg:justify-between items-center lg:w-[55%]">
                <Link
                  to="/#about-us"
                  className="text-[15px] font-[400] leading-[100%] tracking-[1%] hover:font-[700]"
                >
                  About
                </Link>
                <Link
                  to="/#cohort-tracks"
                  className="text-[15px] font-[400] leading-[100%] tracking-[1%] hover:font-[700]"
                >
                  Tracks
                </Link>
                <Link
                  to="/#futureforge-facilitators"
                  className="text-[15px] font-[400] leading-[100%] tracking-[1%] hover:font-[700]"
                >
                  Facilitators
                </Link>
              </div>
              <div>
                <button
                  onClick={lmsPage}
                  className="next-cohort text-[16px] hidden lg:block lg:w-[190px] w-full h-[55px] border font-[700] rounded-[24px] bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-[#262626] cursor-pointer"
                >
                  Access LMS
                </button>
              </div>
            </div>
          </div>

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
                className="w-12 h-10"
              />
            )}
          </button>

          <div
            className={`${isOpen ? "flex" : "hidden"} flex-col text-[20px] justify-center items-center block mt-4 py-5 px-3 text-white font-[700] gap-6 bg-gradient-to-r from-[#FF2147] to-[#FFB943] bg-[#F43F5E] text-[#ffffff] w-[355px] md:max-w-[800px] rounded-[24px]`}
          >
            <Link
              to="/#about-us"
              className="text-[18px] font-[400] leading-[100%] tracking-[1%] hover:font-[700]"
            >
              About
            </Link>
            <Link
              to="/#cohort-tracks"
              className="text-[18px] font-[400] leading-[100%] tracking-[1%] hover:font-[700]"
            >
              Tracks
            </Link>
            <Link
              to="/#futureforge-facilitators"
              className="text-[18px] font-[400] leading-[100%] tracking-[1%] hover:font-[700]"
            >
              Facilitators
            </Link>
            <button
              onClick={lmsPage}
              className="next-cohort text-[16px] lg:w-[135px] w-full h-[50px] border font-[700] rounded-[24px] bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-[#262626] cursor-pointer"
            >
              Access LMS
            </button>
          </div>
        </nav>
      </div>

      <div className="form-container w-[100%] flex flex-col justify-center items-center lg:mt-30 mt-[144px] lg:gap-[64px] gap-[32px]">
        <div className="form-section lg:w-[753px] flex flex-col gap-y-[15px] lg:gap-[16px]">
          <div className="form-header w-100% text-center">
            <h1 className="text-[30px] lg:text-[48px] font-[700] leading-[125%] lg:leading-[120%] tracking-[-0.5%] lg:tracking-[-1%]">
              Register For the Next Cohort
            </h1>
          </div>
          <div className="form-para w-full text-center flex flex-col items-center">
            <p className="w-full max-w-[370px] lg:max-w-[580px] lg:text-center text-[#D4D4D4] text-[16px] leading-[155%] tracking-[0.2%] font-[400]">
              Choose from beginner-friendly tracks built around practical
              learning, mentorship, and collaborative growth.
            </p>
          </div>
        </div>

        <div className="main-form w-full lg:w-[753px]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-[38px] lg:gap-y-[32px]"
          >
            <fieldset className="flex flex-col lg:flex-row w-full lg:w-full gap-x-[16px] lg:gap-x-[20px]">
              <legend className="p-info text-[20px] lg:text-[24px] font-[700] leading-[135%] mb-[10px] lg:mb-[20px]">
                Personal Information
              </legend>

              <div className="input-flex flex lg:flex-col flex-col w-full lg-w-[50%] gap-y-[20px]">
                {/* Full Name */}
                <div className="flex flex-col gap-y-[8px]">
                  <label
                    htmlFor="full-name"
                    className="text-[#d4d4d4] text-[14px] font-[700] leading-[150%] tracking-[0.5%]"
                  >
                    Full Name
                  </label>
                  <div
                    className={`relative w-full rounded-[24px] p-[2px] ${namefocused ? "bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]" : fullName === "" ? "bg-[#3A3A3A]" : textValid ? "bg-green-500" : "bg-red-500"}`}
                  >
                    <FaRegUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10" />
                    {fullName !== "" &&
                      (textValid ? (
                        <FaCheckCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500 z-10" />
                      ) : (
                        <MdError className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 z-10" />
                      ))}
                    <input
                      type="text"
                      onChange={(e) => setFullName(e.target.value)}
                      onFocus={() => setNameFocused(true)}
                      onBlur={() => setNameFocused(false)}
                      value={fullName}
                      className="w-full bg-[#111111] rounded-[22px] px-4 py-3 pl-12 pr-12 text-white outline-none"
                      placeholder="Enter your Full name"
                      id="full-name"
                      required
                    />
                  </div>
                </div>

                {/* Date of Birth */}
                <div className="flex flex-col gap-y-[8px]">
                  <label
                    htmlFor="dob"
                    className="text-[#d4d4d4] text-[14px] font-[700] leading-[150%] tracking-[0.5%]"
                  >
                    Date of Birth
                  </label>
                  <div
                    className={`relative w-full rounded-[24px] p-[2px] ${dateError ? "bg-red-500" : dateOfBirth ? "bg-green-500" : "bg-[#3A3A3A]"}`}
                  >
                    <MdOutlineCalendarMonth
                      onClick={() => dateRef.current.showPicker()}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer z-10"
                    />
                    <input
                      ref={dateRef}
                      required
                      type="date"
                      min={`${new Date().getFullYear() - 35}-01-01`}
                      max={`${new Date().getFullYear() - 22}-12-31`}
                      value={dateOfBirth}
                      onChange={(e) => {
                        const value = e.target.value;
                        setDateOfBirth(value);
                        if (!value) {
                          setDateError("");
                          return;
                        }
                        const selectedDate = new Date(value);
                        const minDate = new Date(
                          new Date().getFullYear() - 35,
                          0,
                          1,
                        );
                        const maxDate = new Date(
                          new Date().getFullYear() - 22,
                          11,
                          31,
                        );
                        if (selectedDate < minDate)
                          setDateError("You must be 35 years old or younger.");
                        else if (selectedDate > maxDate)
                          setDateError("You must be at least 22 years old.");
                        else setDateError("");
                      }}
                      className={`pl-12 pr-4 w-full bg-[#111111] rounded-[22px] px-4 py-3 outline-none ${
    dateOfBirth ? "text-white" : "text-[#888788]"
  }`}
                    />
                  </div>
                  {dateError && (
                    <p className="text-red-500 text-sm mt-2">{dateError}</p>
                  )}
                </div>

                {/* Gender */}
                <div className="flex flex-col gap-y-[8px]">
                  <label
                    htmlFor="gender"
                    className="text-[#d4d4d4] text-[14px] font-[700] leading-[150%] tracking-[0.5%]"
                  >
                    Gender
                  </label>
                  <div
                    className={`relative w-full rounded-[24px] p-[2px] ${gender ? "bg-green-500" : "bg-[#3A3A3A] focus-within:bg-gradient-to-r focus-within:from-[var(--primary-color)] focus-within:to-[var(--secondary-color)]"}`}
                  >
                    <select
                      name="gender"
                      value={gender}
                      className={`appearance-none w-full bg-[#111111] rounded-[22px] pl-4 pr-10 py-3 outline-none ${
    gender ? "text-white" : "text-[#888788]"
  }`}
                      id="gender"
                      onChange={(e) => setGender(e.target.value)}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    <IoIosArrowDown className="absolute right-5 top-1/2 -translate-y-1/2 text-2xl text-[#404040]" />
                  </div>
                </div>

                {/* State */}
                <div className="flex flex-col gap-y-[8px]">
                  <label
                    htmlFor="state"
                    className="text-[#d4d4d4] text-[14px] font-[700] leading-[150%] tracking-[0.5%]"
                  >
                    State
                  </label>
                  <div
                    className={`relative w-full rounded-[24px] p-[2px] ${stateFocused ? "bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]" : local === "" ? "bg-[#3A3A3A]" : "bg-green-500"}`}
                  >
                    {local !== "" && (
                      <FaCheckCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500 z-10" />
                    )}
                    <input
                      value={local}
                      id="state"
                      type="text"
                      onChange={(e) => {
                        if (/^[A-Za-z\s]*$/.test(e.target.value))
                          setLocal(e.target.value);
                      }}
                      onFocus={() => setStateFocused(true)}
                      onBlur={() => setStateFocused(false)}
                      placeholder="Please Enter your State"
                      className="w-full bg-[#111111] rounded-[22px] px-4 py-3 pr-12 text-white outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="input-flex flex lg:flex-col flex-col w-full lg-w-[50%] gap-y-[20px]">
                {/* Email */}
                <div className="flex flex-col gap-y-[8px]">
                  <label
                    htmlFor="email"
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
                          : isEmailDuplicate
                            ? "bg-red-500"
                            : isValid
                              ? "bg-green-500"
                              : "bg-red-500"
                    }`}
                  >
                    <FaRegUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10" />
                    {email !== "" &&
                      (isEmailDuplicate ? (
                        <MdError className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 z-10" />
                      ) : isValid ? (
                        <FaCheckCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500 z-10" />
                      ) : (
                        <MdError className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 z-10" />
                      ))}
                    <input
                      required
                      id="email"
                      type="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setSubmitError("");
                      }}
                      onFocus={() => setFocused(true)}
                      onBlur={() => setFocused(false)}
                      value={email}
                      className="w-full bg-[#111111] rounded-[22px] px-4 py-3 pl-12 pr-12 text-white outline-none"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Whatsapp */}
                <div className="flex flex-col gap-y-[8px]">
                  <label
                    htmlFor="whatsapp"
                    className="text-[#d4d4d4] text-[14px] font-[700] leading-[150%] tracking-[0.5%]"
                  >
                    Whatsapp Number
                  </label>
                  <div
                    className={`relative z-50 w-full rounded-[24px] p-[2px] ${phone.length > 5 ? "bg-green-500" : "bg-[#3A3A3A] focus-within:bg-gradient-to-r focus-within:from-[var(--primary-color)] focus-within:to-[var(--secondary-color)]"}`}
                  >
                    <PhoneInput
                      className="w-full"
                      defaultCountry={country?.value?.toLowerCase() || "ng"}
                      value={phone === "+234 " ? "" : phone}
                      onChange={setPhone}
                      inputProps={{ placeholder: "Enter Whatsapp Number" }}
                      disableDialCodePrefill
                    />
                  </div>
                </div>

                {/* Country */}
                <div className="flex flex-col gap-y-[8px]">
                  <label
                    htmlFor="country"
                    className="text-[#d4d4d4] text-[14px] font-[700] leading-[150%] tracking-[0.5%]"
                  >
                    Country
                  </label>
                  <div
                    className={`w-full rounded-[24px] p-[2px] ${country ? "bg-green-500" : "bg-[#3A3A3A] focus-within:bg-gradient-to-r focus-within:from-[var(--primary-color)] focus-within:to-[var(--secondary-color)]"}`}
                  >
                    <Select
                      inputId="country"
                      components={{
                        IndicatorSeparator: () => null,
                      }}
                      options={options}
                      value={country}
                      onChange={setCountry}
                      styles={selectStyles}
                      placeholder="Select Country"
                      formatOptionLabel={(option) => (
                        <div className="flex items-center gap-3 py-2.5">
                          {option.flag}
                          <span>{option.label}</span>
                        </div>
                      )}
                    />
                  </div>
                </div>

                {/* Education */}
                <div className="flex flex-col gap-y-[8px]">
                  <label
                    htmlFor="education"
                    className="text-[#d4d4d4] text-[14px] font-[700] leading-[150%] tracking-[0.5%]"
                  >
                    Highest Level of Education
                  </label>
                  <div
                    className={`relative w-full rounded-[24px] p-[2px]  ${education ? "bg-green-500" : "bg-[#3A3A3A] focus-within:bg-gradient-to-r focus-within:from-[var(--primary-color)] focus-within:to-[var(--secondary-color)]"}`}
                  >
                    <select
                      name="education"
                      value={education}
                      className="appearance-none w-full bg-[#111111] rounded-[22px] px-4 py-3 text-white outline-none"
                      id="education"
                      onChange={(e) => setEducation(e.target.value)}
                      required
                    >
                      <option value="">Select Level of Education</option>
                      <option value="High School">High School</option>
                      <option value="OND">OND</option>
                      <option value="HND">HND</option>
                      <option value="BSc">Bsc</option>
                      <option value="Masters">Masters</option>
                      <option value="PhD">Phd</option>
                    </select>
                    <IoIosArrowDown className="absolute right-5 top-1/2 -translate-y-1/2 text-2xl text-[#404040]" />
                  </div>
                </div>
              </div>
            </fieldset>

            {/* Programme Information */}
            <fieldset>
              <legend className="text-[24px] font-[700] leading-[135%] tracking-[0] mb-[8px]">
                Programme Information
              </legend>
              <div className="flex flex-col gap-y-[20px]">
                <div className="flex lg:flex-row flex-col gap-x-[20px] gap-y-[20px] w-full">
                  {/* Learning Track */}
                  <div className="lg:w-[50%] w-full flex flex-col gap-y-[8px]">
                    <label
                      htmlFor="interest"
                      className="text-[#d4d4d4] text-[14px] font-[700] leading-[150%] tracking-[0.5%] mb-[8px]"
                    >
                      Learning Track
                    </label>
                    <div
                      className={`relative w-full rounded-[24px] p-[2px] ${interest ? "bg-green-500" : "bg-[#3A3A3A] focus-within:bg-gradient-to-r focus-within:from-[var(--primary-color)] focus-within:to-[var(--secondary-color)]"}`}
                    >
                      <select
                        value={interest}
                        className={`appearance-none w-full bg-[#111111] rounded-[22px] pl-4 pr-10 py-3 outline-none ${
        interest ? "text-white" : "text-[#888788]"
      }`}
                        onChange={(e) => setInterest(e.target.value)}
                        required
                      >
                        <option value="">
                          Select track of interest
                        </option>
                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                        <option value="ProductDesign">Product Design</option>
                        <option value="ProductManagement">
                          Product management
                        </option>
                        <option value="Qa">Quality Assurance</option>
                      </select>

                      <IoIosArrowDown className="absolute right-5 top-1/2 -translate-y-1/2 text-2xl text-[#404040]" />
                    </div>
                  </div>

                  {/* Level of Experience */}
                  <div className="lg:w-[50%] w-full flex flex-col gap-y-[8px]">
                    <label
                      htmlFor="experience"
                      className="text-[#d4d4d4] text-[14px] font-[700] leading-[150%] tracking-[0.5%] mb-[8px]"
                    >
                      Level of Experience
                    </label>
                    <div
                      className={`relative w-full rounded-[24px] p-[2px] ${experience ? "bg-green-500" : "bg-[#3A3A3A] focus-within:bg-gradient-to-r focus-within:from-[var(--primary-color)] focus-within:to-[var(--secondary-color)]"}`}
                    >
                      <select
                        required
                        value={experience}
                        className={`appearance-none w-full bg-[#111111] rounded-[22px] pl-4 pr-10 py-3 outline-none ${
  experience ? "text-white" : "text-[#888788]"
}`}
                        onChange={(e) => setExperience(e.target.value)}
                      >
                        <option value="">Level of Experience</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Expert">Expert</option>
                      </select>

                      <IoIosArrowDown className="absolute right-5 top-1/2 -translate-y-1/2 text-2xl text-[#404040]" />
                    </div>
                  </div>
                </div>

                {/* Motivation */}
                <div className="text-area">
                  <p className="pb-2">
                    <label
                      htmlFor="motivation"
                      className="text-[#d4d4d4] text-[14px] font-[700] leading-[150%] tracking-[0.5%] mb-[8px]"
                    >
                      Why do you want to join Future Forge
                    </label>
                  </p>
                  <div
                    className={`relative w-full rounded-[24px] p-[2px] ${motivation === "" ? "bg-[#3A3A3A]" : motivationValid ? "bg-green-500" : "bg-red-500"}`}
                  >
                    <textarea
                      name="motivation"
                      value={motivation}
                      id="motivation"
                      placeholder="Type your text here"
                      className="block w-full h-[120px] bg-[#111111] rounded-[22px] px-4 py-3 text-white outline-none resize-none"
                      onChange={(e) => setMotivation(e.target.value)}
                      required
                    />
                  </div>
                  {motivation !== "" && !motivationValid && (
                    <p className="text-red-500 text-sm mt-2">
                      Your response must be at least 20 characters.
                    </p>
                  )}
                </div>
              </div>
            </fieldset>

            {/* LinkedIn */}
            <fieldset>
              <legend className="text-[#d4d4d4] text-[14px] font-[700] leading-[150%] tracking-[0.5%] mb-[8px]">
                Linkedin Profile{" "}
                <span className="text-[#A1A2A2] text-[14px] font-[400]">
                  (optional)
                </span>
              </legend>
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

            {/* Checkboxes */}
            <fieldset>
              <div className="flex flex-col lg:gap-y-[20px] gap-[16px]">
                <legend></legend>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={() => setTermsAccepted(!termsAccepted)}
                    className="hidden"
                  />
                  <div
                    className={`cursor-pointer w-6 h-6 rounded-[8px] flex items-center justify-center transition-all ${termsAccepted ? "bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]" : "border-2 border-[#6B6B6B]"}`}
                  >
                    {termsAccepted && (
                      <span className="text-white text-lg font-bold leading-none">
                        ✓
                      </span>
                    )}
                  </div>
                  <span>
                    I agree to the{" "}
                    <Link to="/terms" target="_blank" rel="noopener noreferrer">
                      <u>Terms and Conditions</u>
                    </Link>
                  </span>
                </label>

                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={privacyAccepted}
                    onChange={() => setPrivacyAccepted(!privacyAccepted)}
                    className="hidden"
                  />
                  <div
                    className={`cursor-pointer w-6 h-6 rounded-[8px] flex items-center justify-center transition-all ${privacyAccepted ? "bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]" : "border-2 border-[#6B6B6B]"}`}
                  >
                    {privacyAccepted && (
                      <span className="text-white text-lg font-bold leading-none">
                        ✓
                      </span>
                    )}
                  </div>

                  <span>
                    I agree to the <u>Privacy Policy and Data Protection</u>
                  </span>
                </label>
              </div>
            </fieldset>

            {/* Error Message */}
            {submitError && (
              <div className="flex items-center gap-2 bg-red-500/10 border border-red-500 text-red-400 text-sm px-4 py-3 rounded-[16px]">
                <MdError className="text-red-500 text-lg shrink-0" />
                <p>{submitError}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!canSubmit || isSubmitting}
              className={`text-[16px] font-[700] w-full py-[9px] rounded-[24px] transition-all ${
                canSubmit
                  ? "bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white cursor-pointer"
                  : "bg-[#262626] text-[#737373] cursor-not-allowed"
              }`}
            >
              {isSubmitting ? "Processing..." : "Proceed to payment"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default RegistrationForm;
