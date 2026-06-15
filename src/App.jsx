import Landing from './page/landing'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from "./page/registration-form";
import { useState } from 'react'

import './App.css'
import CohortStory from './page/cohort-story';
import Cohort1 from './page/cohort1';

function App() {
  

  return (
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/registration-form" element={<RegistrationForm />} />
        <Route path="/cohort-story" element={<CohortStory />} />
        <Route path="/cohort1" element={<Cohort1 />} />
        <Route path="/cohort1/track/:trackId" element={<Cohort1 />} />
       
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
