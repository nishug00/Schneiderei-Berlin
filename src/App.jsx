import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartNow from './Components/StartNow/StartNow';
import Navbar from './Components/Navbar/Navbar';
import HowItWorks from './Components/HowItWorks/HowItWorks';
import MyAccount from './Components/MyAccount/MyAccount';
import Contact from './Components/Contact/Contact';
import Basket from './Components/Basket/Basket';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<HowItWorks/>} />
        <Route path="/startNow" element={<StartNow />} />
        <Route path="/work" element={<HowItWorks />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
}
