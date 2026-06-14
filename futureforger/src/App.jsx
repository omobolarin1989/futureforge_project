import Landing from './page/landing'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from "./page/registration-form";
import { useState } from 'react'

import './App.css'
import CohortStory from './page/cohort-story';

function App() {
  

  return (
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/registration-form" element={<RegistrationForm />} />
        <Route path="/cohort-story" element={<CohortStory />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
