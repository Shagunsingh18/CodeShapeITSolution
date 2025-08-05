
import { useState } from 'react';
import './App.css';
import Home from './home';
import About from './about';
import Cuisine from './cuisine';
import PrivateDin from './private_din';
import Details from './Details/details_1'; 
import Details_2 from './Details/details_2'; 
import Menu from './menu';
import Navigation_page from './navigation';
import ReviewPage from './ReviewPage';

import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import ReserveTable from './reserve_table';

function ScrollSections() {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app ">
      {/* Navbar */}
    
      <nav className="navbar -translate-x-4 backdrop-blur-sm  font-bold">
        <button onClick={() => navigate('menu')}>View Menu</button>
        <button onClick={() => navigate('reserve_table')}>Reserve a Table</button>
        <button onClick={() => scrollToSection('about')}>Explore Our Story</button>

        {/* Icon Button */}
<div className="icon-wrapper" onClick={() => navigate('/navigation')}>
  <img src="/menus.png" alt="Menu" className="menu-icon" />
</div>

      </nav>

      {/* Scrollable Sections */}
      <section id="home" className="section"><Home /></section>
      <section id="about" className="section"><About /></section>
      <section id="cuisine" className="section"><Cuisine /></section>
      <section id="private_din" className="section"><PrivateDin /></section>
      <section id="details_1" className="section"><Details /></section>
       <section id="details_2" className="section"><Details_2 /></section>
       <section id="ReviewPage" className="section"><ReviewPage/></section>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScrollSections />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reserve_table" element={<ReserveTable/>} />
        <Route path="/Details/details_1" element={<Details />} />
        <Route path="/navigation" element={<Navigation_page />} />
        <Route path="/Details/details_2" element={<Details_2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/cuisine" element={<Cuisine />} />
      </Routes>
    </Router>
  );
}   

