import Landing from "./page/landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Scroll from "./page/scroll";
import { useState } from "react";

import CohortStory from "./page/cohort-story";
import Cohort1 from "./page/cohort1";
import TermsCondition from "./page/terms";
import PrivacyData from "./page/privacy";
import RegistrationForm from "./page/registration-form";
import ErrorPage from "./page/error";
import SuccessPage from "./page/success-page";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Scroll />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/registration-form" element={<RegistrationForm />} />
        <Route path="/cohort-story" element={<CohortStory />} />
        <Route path="/cohort1" element={<Cohort1 />} />
        <Route path="/cohort1" element={<Cohort1 />} />
        <Route path="/cohort2" element={<Cohort1 />} />
        <Route path="/cohort3" element={<Cohort1 />} />
        <Route path="/cohort4" element={<Cohort1 />} />
        <Route path="/cohort5" element={<Cohort1 />} />
        <Route path="/cohort6" element={<Cohort1 />} />
        <Route path="/cohort7" element={<Cohort1 />} />
        <Route path="/cohort8" element={<Cohort1 />} />
        <Route path="/cohort9" element={<Cohort1 />} />
        <Route path="/cohort1/track/:trackId" element={<Cohort1 />} />
        <Route path="/terms" element={<TermsCondition />} />
        <Route path="/privacy" element={<PrivacyData />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/success-page" element={<SuccessPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
