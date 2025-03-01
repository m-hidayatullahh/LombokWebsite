import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import PortfolioDetailPage from './pages/PortfolioDetailPage';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:id" element={<PortfolioDetailPage />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;