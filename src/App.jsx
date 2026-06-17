import Landing from './page/landing'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from "./page/registration-form";
import Scroll from './page/scroll';
import { useState } from 'react'

import './App.css'
import CohortStory from './page/cohort-story';
import Cohort1 from './page/cohort1';
import TermsCondition from './page/terms';
import PrivacyData from './page/privacy';

function App() {
  

  return (
 <BrowserRouter>
 <Scroll />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/registration-form" element={<RegistrationForm />} />
        <Route path="/cohort-story" element={<CohortStory />} />
        <Route path="/cohort1" element={<Cohort1 />} />
        <Route path="/cohort1/track/:trackId" element={<Cohort1 />} />
        <Route path="/terms" element={<TermsCondition />} />
        <Route path="/privacy" element={<PrivacyData />} />
       
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
