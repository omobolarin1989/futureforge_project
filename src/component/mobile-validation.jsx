import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import { options } from "../page/country-flag";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";

import Select from "react-select";

import "react-international-phone/style.css";

export default function MobileValidator() {

    
     const [text, setText] = useState("");
     const [dateOfBirth, setDateOfBirth] = useState("");
     const [gender, setGender] = useState("");
     const [state, setState] = useState("")
      const [email, setEmail] = useState("");
   const isValid = /\S+@\S+\.\S+/.test(email);
   const [focused, setFocused] = useState(false);
     
   
     const textValid = text.trim().length >= 5;
   
   
     const [namefocused, setNameFocused] = useState(false);
     
   
     
   


  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState(null)
  const [result, setResult] = useState(null);
  const [education, setEducation] = useState ("")

  
 const handleSubmit = (e) => {
   e.preventDefault(); // STOP PAGE RELOAD
  const payload = {
    phone: phone,
    country: country?.value, // "NG"
    countryName: country?.label,
    fullName: text,
    dateOfBirth: dateOfBirth,
    gender: gender,
    state: state,
    email: email,
    education:education
  };

   setResult(payload);
};

{result && (
  <pre className="bg-white p-2 mt-4">
    {JSON.stringify(result, null, 2)}
  </pre>
)}
  return (

   
   
    <div className="bg-blue-600">


{result && (
  <pre className="bg-white text-black p-2 mt-4">
    {JSON.stringify(result, null, 2)}
  </pre>
)}

      <form action="">
      <div>
      <h1 style={{ color: "black" }}>Test</h1>

      <label htmlFor="phoneInput">Phone Number</label>
      <PhoneInput className=""
        defaultCountry={country?.value?.toLowerCase() || "ng"}
        id = "phoneInput"
        defaultCountry="ng"
        value={phone}
        onChange={setPhone} 
      />
      </div>

      
   <div>
      <Select
  inputId="country"
  options={options}
  value={country}
  onChange={setCountry}
  placeholder="Select Country"
  formatOptionLabel={(option) => (
    <div className="flex items-center gap-3">
      {option.flag}
      <span>{option.label}</span>
    </div>
  )}
/>
   </div>

   <div>

       <label
                    htmlFor="full-name"
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
                                        id="full-name"
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
                      className=" w-full bg-[#111111] rounded-[22px] px-4 py-3 text-white outline-none "
                      id="gender"
                      onChange={(e) => setGender(e.target.value)}
                      required
                      
                    >
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
                    value = {state}
                    id="state"
                     type="text"
                      className=" w-full bg-[#111111] rounded-[22px] px-4 py-3 text-white outline-none "
                      onChange={(e) => setState(e.target.value)}
                      required

                    />
                  </div>
                </div>

                <div className="flex flex-col gap-y-[8px]">
                  <label
                    hmlFor=""
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
                      <option value="high-school">High School</option>
                      <option value="ond">OND</option>
                      <option value="hnd">HND</option>
                      <option value="bsc">Bsc</option>
                      <option value="masters">Masters</option>
                      <option value="phd">Phd</option>
                    </select>
                  </div>
                </div>

    <button type="submit" onClick={handleSubmit}>Submit</button>

      </form>

    </div>
  );
}