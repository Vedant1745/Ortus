import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services.tsx';
import Contact from './pages/Contact';
import Career from './pages/Career.tsx';
import CRODevelopment from './pages/CRODevelopment';
import ProjectManagement from './pages/ProjectManagement';
import MedicalWriting from './pages/MedicalWriting';
import TranslationServices from './pages/TranslationServices';
import RegulatoryServices from './pages/RegulatoryServices';
import ClinicalServices from './pages/ClinicalServices';
import PathologyLab from './pages/PathologyLab';
import AuditingMonitoring from './pages/AuditingMonitoring';
import Training from './pages/Training';
import PharmacokineticsBiostatistics from './pages/PharmacokineticsBiostatistics';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <Contact />;
      case 'career':
        return <Career />;
      case 'cro-development':
        return <CRODevelopment setCurrentPage={setCurrentPage} />;
      case 'project-management':
        return <ProjectManagement setCurrentPage={setCurrentPage} />;
      case 'medical-writing':
        return <MedicalWriting setCurrentPage={setCurrentPage} />;
      case 'translation-services':
        return <TranslationServices setCurrentPage={setCurrentPage} />;
      case 'regulatory-services':
        return <RegulatoryServices setCurrentPage={setCurrentPage} />;
      case 'clinical-services':
        return <ClinicalServices setCurrentPage={setCurrentPage} />;
      case 'pathology-lab':
        return <PathologyLab setCurrentPage={setCurrentPage} />;
      case 'auditing-monitoring':
        return <AuditingMonitoring setCurrentPage={setCurrentPage} />;
      case 'training':
        return <Training setCurrentPage={setCurrentPage} />;
      case 'pharmacokinetics-biostatistics':
        return <PharmacokineticsBiostatistics setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="page-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;