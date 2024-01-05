import React from 'react';
import '../css/App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Home from './Home.js';
import About from './About.js';
import Education from './Education.js';
import Experience from './Experience.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectsGrid from './Projects.js';
import SkillsSection from './Skills.js';
import ContactForm from './Contact.js';

function App() {
  return (
    <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/education' element={<Education />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' element={<ProjectsGrid />} />
          <Route path='/skills' element={<SkillsSection />} />
          <Route path='/contact' element={<ContactForm />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
