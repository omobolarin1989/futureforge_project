import Landing from './page/landing'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from "./page/registration-form";
import { useState } from 'react'

import './App.css'

function App() {
  

  return (
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/registration-form" element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
