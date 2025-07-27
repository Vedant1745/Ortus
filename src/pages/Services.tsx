import React from 'react';
import { Building, Users, FileText, Globe, Shield, Stethoscope, FlaskRound as Flask, Search, GraduationCap, TrendingUp } from 'lucide-react';
import '../App.css';

const services = [
  {
    icon: <Building className="w-12 h-12 text-blue-500 mb-6" />, title: 'CRO & Site Development', desc: 'Facility setup, SOPs, and regulatory compliance for research sites.'
  },
  {
    icon: <Users className="w-12 h-12 text-purple-500 mb-6" />, title: 'Project Management', desc: 'Strategic planning, resource allocation, and vendor management.'
  },
  {
    icon: <FileText className="w-12 h-12 text-red-500 mb-6" />, title: 'Medical Writing', desc: 'Protocol development, CSRs, and regulatory documentation.'
  },
  {
    icon: <Globe className="w-12 h-12 text-yellow-500 mb-6" />, title: 'Translation Services', desc: 'Certified multilingual translation for informed consent documents.'
  },
  {
    icon: <Shield className="w-12 h-12 text-blue-500 mb-6" />, title: 'Regulatory Services', desc: 'CDSCO submissions, eCTD preparation, and regulatory approvals.'
  },
  {
    icon: <Stethoscope className="w-12 h-12 text-purple-500 mb-6" />, title: 'Clinical Services', desc: 'Site management, monitoring, and compliance support.'
  },
  {
    icon: <Flask className="w-12 h-12 text-red-500 mb-6" />, title: 'Central Pathology Lab', desc: 'Sample collection, analysis, and timely pathology reporting.'
  },
  {
    icon: <Search className="w-12 h-12 text-yellow-500 mb-6" />, title: 'Auditing & Monitoring', desc: 'Site qualification, ongoing monitoring, and risk-based audits.'
  },
  {
    icon: <GraduationCap className="w-12 h-12 text-blue-500 mb-6" />, title: 'Training', desc: 'GCP, GLP, GxP, and regulatory guidelines training.'
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-purple-500 mb-6" />, title: 'Pharmacokinetics & Biostatistics', desc: 'PK strategy, study design, and statistical analysis.'
  },
];

const Services: React.FC = () => (
  <div>
    <section className="section" style={{background: '#fff'}}>
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="section-title animate-fadeInUp">Our Services</h1>
          <p className="section-subtitle animate-fadeInUp">
            Comprehensive solutions for every aspect of clinical research and development
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div className="card animate-fadeInUp" style={{animationDelay: `${0.1 + idx * 0.1}s`}} key={service.title}>
              {service.icon}
              <h3 className="text-xl font-semibold mb-4 gradient-text">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="section" style={{background: '#fff'}}>
      <div className="container">
        <div className="glass-dark rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6 gradient-text-2">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our comprehensive services can support your clinical research objectives
          </p>
          <button className="btn-primary" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  </div>
);

export default Services;