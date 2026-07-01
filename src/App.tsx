import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import LeadModal from './components/LeadModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen text-white select-none relative bg-black">
        
        {/* Navigation Bar Header (Persistent across routes) */}
        <Header onContactClick={() => setIsContactOpen(true)} />

        {/* Dynamic Route Handlers */}
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                isContactOpen={isContactOpen} 
                setIsContactOpen={setIsContactOpen} 
              />
            } 
          />
          <Route 
            path="/about" 
            element={<About />} 
          />
        </Routes>

        {/* Universal Contact Lead Capture Overlay Modals */}
        <LeadModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      </div>
    </BrowserRouter>
  );
}
