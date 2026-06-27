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

// import RegistrationForm from "./registration-form";
// import Header from "../component/header";
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

  const [namefocused, setNameFocused] = useState(false);
  const [linkedin, setLinkedin] = useState("");
  const [linkedinFocused, setLinkedinFocused] = useState(false);
  const linkedinValid =
    linkedin === "" || /^https?:\/\/(www\.)?linkedin\.com\/.*$/i.test(linkedin);

  const [paymentConsent, setPaymentConsent] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const [country, setCountry] = useState(null);
  const [phone, setPhone] = useState("");
  const phoneRef = useRef(null);

  const [education, setEducation] = useState("");

  const [interest, setInterest] = useState("");
  const [experience, setExperience] = useState("");
  const [motivation, setMotivation] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validDOB = dateOfBirth !== "";

  const selectStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "#111111",
      borderRadius: "22px",
      height: "48px",
      minHeight: "48px",

      // remove react-select default blue
      borderColor: state.isFocused ? "transparent" : "#3A3A3A",

      boxShadow: "none",

      "&:hover": {
        borderColor: "transparent",
      },

      // your gradient will be handled by wrapper
    }),

    menu: (base) => ({
      ...base,
      backgroundColor: "#111111",
    }),

    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "#333333" : "#111111",
      color: "white",
    }),

    singleValue: (base) => ({
      ...base,
      color: "white",
    }),

    placeholder: (base) => ({
      ...base,
      color: "#888788",
    }),
  };

  const [isOpen, setIsOpen] = useState(false);

  //for smooth scroll and hash scrollon
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
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
    paymentConsent === "yes" &&
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
    motivation;

  const lmsPage = () => {
    window.open(
      "https://future-forge-lms.vercel.app/",
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

      agreedToFee: paymentConsent === "yes",

      agreedToTerms: termsAccepted,

      consentedToPrivacy: privacyAccepted,

      cohortId: "507f1f77bcf86cd799439011",
    };

    console.log("Sending Payload:", formData);

    try {
      const response = await fetch(
        "https://futureforge-api-wsre.onrender.com/api/applicants/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const text = await response.text();

      console.log("STATUS:", response.status);
      console.log("RAW RESPONSE:", text);

      let data;

      try {
        data = JSON.parse(text);
      } catch {
        data = {};
      }

      if (!response.ok) {
        throw new Error(data.message || text || "Registration failed");
      }

      console.log("SUCCESS:", data);

      if (data.paymentLink) {
        window.location.href = data.paymentLink;
      }
    } catch (error) {
      console.error("ERROR:", error);

      alert(error.message);
    } // Re-enable the button if something failed
    setIsSubmitting(false);
  };

  return (
    <section className="overflow-x-hidden grow xl:w-full lg:max-w-[1440px] font-gadugi w-full md:w-full xl:max-w-[2560px] text-white form-action min-h-screen bg-gradient-to-b bg-[#0A0705] bg-[radial-gradient(150%_35%_at_35%_2%,_rgba(60,22,11,0.90)_5%,_rgba(146,64,14,0.15)_20%,_transparent_90%)] bg-no-repeat px-5 lg:px-[80px]">
      <div className="nav flex justify-between items-center lg:py-10 pt-7  ">
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
            <div className=" lg:w-[100%] flex justify-between">
              <div className="nav-bar lg:flex hidden lg:flex-row lg:justify-between items-center lg:w-[55%] ">
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
              <div className="">
                <button
                  onClick={lmsPage}
                  className="next-cohort text-[16px] hidden lg:block lg:w-[190px] w-full h-[55px]   border font-[700] rounded-[24px  bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] lg:hover:bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-[#262626] cursor-pointer rounded-[24px]"
                >
                  Access LMS
                </button>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="cursor-pointer block lg:hidden "
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              "✕"
            ) : (
              <img
                src="/images/Frame 2147226499.png"
                alt="Menu"
                className="w-12 h-10 "
              />
            )}
          </button>

          <div
            className={`
    ${isOpen ? "flex" : "hidden"}
    flex-col
    text-[20px]
    justify-center
    items-center
    md:hidden
    mt-4
    py-5
    px-3
    text-white
    font-[700]
    gap-6
    bg-gradient-to-r from-[#FF2147] to-[#FFB943] hover:bg-gradient-to-r from-[#F59E0B] to-[#FFB943]
    bg-[#F43F5E]
    text-[#ffffff]
    max-w-[355px]
    rounded-[24px]
   
  `}
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

            <Link>
              <button className=" text-[16px]  next-cohort lg:block hidden  border border-[#404040] lg-[178px] py-2.5 font-[700] rounded-3xl hover:bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-[#262626]">
                Join Next Cohort
              </button>
            </Link>

            <button
              onClick={lmsPage}
              className="next-cohort text-[16px]  lg:w-[135px] w-full h-[50px] border font-[700] rounded-[24px  bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] lg:hover:bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-[#262626] cursor-pointer rounded-[24px]"
            >
              Access LMS
            </button>
          </div>
        </nav>
      </div>

      <div className="form-container w-[100%] flex flex-col justify-center items-center lg:mt-30 mt-[144px] lg:gap-[64px] gap-[32px]">
        <div className="form-section lg:w-[753px] flex flex-col gap-y-[15px] lg:gap-[16px] ">
          <div className="form-header w-100% text-center">
            <h1 className="text-[30px] lg:text-[48px] font-[700] leading-[125%] lg:leading-[120%] tracking-[-0.5%] lg:tracking-[-1%]  ">
              Register For the Next Cohort
            </h1>
          </div>

          <div className="form-para w-[100%] text-center flex flex-col items-center">
            <p className=" w-full max-w-[370px] lg:w-[575px] lg:text-center text-[#D4D4D4] text-[16px] leading-[155%] tracking-[0.2%] font-[400]">
              Choose from beginner-friendly tracks built around practical
              learning, mentorship, and collaborative growth.
            </p>
          </div>
        </div>

        <div className="main-form w-full lg:w-[753px] ">
          <form
            onSubmit={handleSubmit}
            // //            onSubmit={async (e) => {
            // //   e.preventDefault();

            // //   if (!canSubmit) {
            // //     alert("Please complete the form correctly.");
            // //     return;
            // //   }

            // //               const formData = {
            // //     fullName,
            // //     email,
            // //     dateOfBirth,

            // //     // CHANGE THIS
            // //     whatsappNumber: phone,

            // //     gender,

            // //     country: country?.label,

            // //     state: local,

            // //     // CHANGE THESE NAMES
            // //     highestEducation: education,

            // //     areaOfInterest: interest,

            // //     levelOfExperience: experience,

            // //     reasonForJoining: motivation,

            // //     // CHANGE THESE TO BOOLEAN
            // //     agreedToFee: paymentConsent === "yes",

            // //     agreedToTerms: termsAccepted,

            // //     consentedToPrivacy: privacyAccepted,

            // //   };

            // //   try {

            // //     const response = await fetch(
            // //       "https://futureforge-api-wsre.onrender.com/api/applicants/register",
            // //       {
            // //         method: "POST",

            // //         headers:{
            // //           "Content-Type":"application/json"
            // //         },

            // //         body:JSON.stringify(formData)
            // //       }
            // //     );

            // //    const text = await response.text();

            // // console.log("Status:", response.status);
            // // console.log("Backend raw:", text);

            // // let data;

            // // try {
            // //   data = JSON.parse(text);
            // // } catch {
            // //   data = {};
            // // }

            // //     if(data.paymentLink){

            // //       window.location.href = data.paymentLink;

            // //     }
            // //     else{

            // //       alert(
            // //         data.message ||
            // //         "Payment link was not generated"
            // //       );

            // //     }

            // //   } catch(error){

            // //     console.log(error);

            // //     alert("Something went wrong");

            // //   }

            // // }}

            // onSubmit={async(e)=>{

            // e.preventDefault();

            // if(!canSubmit){
            //  alert("Please complete the form correctly.");
            //  return;
            // }

            // const formData = {

            // fullName,
            // email,
            // dateOfBirth,

            // whatsappNumber: phone,

            // gender,

            // country: country?.label,

            // state: local,

            // highestEducation: education,

            // areaOfInterest: interest,

            // levelOfExperience: experience,

            // reasonForJoining: motivation,

            // agreedToFee: paymentConsent === "yes",

            // agreedToTerms: termsAccepted,

            // consentedToPrivacy: privacyAccepted,

            // };

            // console.log("Sending:",formData);

            // try{

            // const response = await fetch(
            // "https://futureforge-api-wsre.onrender.com/api/applicants/register",
            // {

            // method:"POST",

            // headers:{
            // "Content-Type":"application/json"
            // },

            // body:JSON.stringify(formData)

            // });

            // const text = await response.text();

            // console.log(
            // "Backend raw:",
            // text
            // );

            // let data;

            // try{

            // data = JSON.parse(text);

            // }

            // catch{

            // alert(text);

            // return;

            // }

            // if(data.paymentLink){

            // window.location.href=data.paymentLink;

            // }

            // else{

            // alert(
            // data.message || "No payment link returned"
            // );

            // }

            // }catch(error){

            // console.log(error);

            // alert("Request failed");

            // }

            // }}

            className="flex flex-col gap-y-[38px] lg:gap-y-[32px]"
          >
            <fieldset className="flex flex-col lg:flex-row w-full lg:w-full gap-x-[16px] lg:gap-x-[20px]">
              <legend className="p-info text-[20px] lg:text-[24px] font-[700] leading-[135%] mb-[10px] lg:mb-[20px]">
                Personal Information
              </legend>

              <div className="input-flex flex lg:flex-col flex-col w-full lg-w-[50%] gap-y-[20px]">
                <div className="flex flex-col gap-y-[8px] ">
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

                <div className="flex flex-col gap-y-[8px]">
                  <label
                    htmlFor="dob"
                    className="text-[#d4d4d4] text-[14px] font-[700] leading-[150%] tracking-[0.5%]"
                  >
                    Date of Birth
                  </label>

                  <div className="relative w-full rounded-[24px] p-[2px] bg-[#3A3A3A] focus-within:bg-gradient-to-r focus-within:from-[var(--primary-color)] focus-within:to-[var(--secondary-color)]">
                    <MdOutlineCalendarMonth className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      required
                      type="date"
                      className=" pl-12 pr-8 w-full bg-[#111111] rounded-[22px] px-4 py-3 text-[#888788] outline-none "
                      id="dob"
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-y-[8px]">
                  <label
                    htmlFor="gender"
                    className="text-[#d4d4d4] text-[14px] font-[700] leading-[150%] tracking-[0.5%]"
                  >
                    Gender
                  </label>
                  <div className=" w-full rounded-[24px] p-[2px] bg-[#3A3A3A] focus-within:bg-gradient-to-r focus-within:from-[var(--primary-color)] focus-within:to-[var(--secondary-color)]">
                    <select
                      name="gender"
                      value={gender}
                      className=" w-full bg-[#111111] rounded-[22px] px-4 py-3 text-[#888788] outline-none "
                      id="gender"
                      onChange={(e) => setGender(e.target.value)}
                      required
                    >
                      <option value="" className="]">
                        Select Gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-y-[8px]">
                  <label
                    htmlFor="state"
                    className="text-[#d4d4d4] text-[14px] font-[700] leading-[150%] tracking-[0.5%]"
                  >
                    State
                  </label>
                  <div className=" w-full rounded-[24px] p-[2px] bg-[#3A3A3A] focus-within:bg-gradient-to-r focus-within:from-[var(--primary-color)] focus-within:to-[var(--secondary-color)]">
                    <input
                      value={local}
                      id="state"
                      type="text"
                      className=" w-full bg-[#111111] rounded-[22px] px-4 py-3 outline-none "
                      onChange={(e) => setLocal(e.target.value)}
                      placeholder="Please Enter your State"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="input-flex flex lg:flex-col flex-col  w-full lg-w-[50%] gap-y-[20px]">
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
                      required
                      id="email"
                      type="email"
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
                    htmlFor="whatsapp"
                    className="text-[#d4d4d4] text-[14px] font-[700] leading-[150%] tracking-[0.5%]"
                  >
                    Whatsapp Number
                  </label>
                  <div className="relative z-50 w-full rounded-[24px] p-[2px] bg-[#3A3A3A] focus-within:bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]">
                    <PhoneInput
                      className="w-full"
                      defaultCountry={country?.value?.toLowerCase() || "ng"}
                      value={phone === "+234 " ? "" : phone}
                      onChange={setPhone}
                      inputProps={{
                        placeholder: "Enter Whatsapp Number",
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-y-[8px] ">
                  <label
                    htmlFor="country"
                    className="text-[#d4d4d4] text-[14px] font-[700] leading-[150%] tracking-[0.5%]"
                  >
                    Country
                  </label>
                  <div className=" w-full rounded-[24px] p-[2px] bg-[#3A3A3A] focus-within:bg-gradient-to-r focus-within:from-[var(--primary-color)] focus-within:to-[var(--secondary-color)]">
                    <Select
                      inputId="country"
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

                <div className="flex flex-col gap-y-[8px]">
                  <label
                    htmlFor="education"
                    className="text-[#d4d4d4] text-[14px] font-[700] leading-[150%] tracking-[0.5%]"
                  >
                    Highest Level of Education
                  </label>
                  <div className=" w-full rounded-[24px] p-[2px] bg-[#3A3A3A] focus-within:bg-gradient-to-r focus-within:from-[var(--primary-color)] focus-within:to-[var(--secondary-color)]">
                    <select
                      name="education"
                      value={education}
                      className=" w-full bg-[#111111] rounded-[22px] px-4 py-3 text-white outline-none "
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
                      htmlFor="experience"
                      className="text-[#d4d4d4] text-[14px] font-[700] leading-[150%] tracking-[0.5%] mb-[8px]"
                    >
                      Learning Track
                    </label>

                    <div className=" w-full rounded-[24px] p-[2px] bg-[#3A3A3A] focus-within:bg-gradient-to-r focus-within:from-[var(--primary-color)] focus-within:to-[var(--secondary-color)]">
                      <select
                        value={interest}
                        name="experience"
                        className=" w-full bg-[#111111] rounded-[22px] px-4 py-3 text-white outline-none "
                        id="experience"
                        onChange={(e) => setInterest(e.target.value)}
                        required
                      >
                        <option value="disabled">
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
                    </div>
                  </div>

                  <div className="level of experience lg:w-[50%] w-full  flex flex-col gap-y-[8px] ">
                    <label
                      htmlFor="experience"
                      className="text-[#d4d4d4] text-[14px] font-[700] leading-[150%] tracking-[0.5%] mb-[8px]"
                    >
                      Level of Experience
                    </label>

                    <div className=" w-full rounded-[24px] p-[2px] bg-[#3A3A3A] focus-within:bg-gradient-to-r focus-within:from-[var(--primary-color)] focus-within:to-[var(--secondary-color)]">
                      <select
                        required
                        value={experience}
                        name="experience"
                        className=" w-full bg-[#111111] rounded-[22px] px-4 py-3 text-white outline-none "
                        id="experience"
                        onChange={(e) => setExperience(e.target.value)}
                      >
                        <option value="">Level of Experience</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">intermediate</option>
                        <option value="Expert">Expert</option>
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
                      value={motivation}
                      id="motivation"
                      placeholder="Type your text here"
                      className="rounded-[24px] block w-full bg-[#111111] rounded-[22px] px-4 py-3 text-white outline-none"
                      rows={5}
                      onChange={(e) => setMotivation(e.target.value)}
                      required
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
                    <Link
                      to="/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <u>Privacy Policy and Data Protection</u>
                    </Link>
                  </span>
                </label>
              </div>
            </fieldset>

            <button
              type="submit"
              disabled={!canSubmit || isSubmitting}
              disabled={!canSubmit}
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
