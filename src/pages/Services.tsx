import React from 'react';
import { Building, Users, FileText, Globe, Shield, Stethoscope, FlaskRound as Flask, Search, GraduationCap, TrendingUp, ArrowRight } from 'lucide-react';
import '../App.css';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  detailedDesc: string;
  serviceId: string;
  setCurrentPage: (page: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, desc, detailedDesc, serviceId, setCurrentPage }) => (
  <div className="card animate-fadeInUp group hover:shadow-xl transition-all duration-300">
    {icon}
    <h3 className="text-xl font-semibold mb-4 text-pink-500">{title}</h3>
    <p className="text-gray-600 mb-4">{desc}</p>
    <p className="text-gray-500 text-sm mb-6">{detailedDesc}</p>
    <button 
      className="btn-primary group-hover:bg-blue-600 transition-colors duration-200 flex items-center space-x-2"
      onClick={() => setCurrentPage(serviceId)}
    >
      <span>Learn More</span>
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
    </button>
  </div>
);

interface ServicesProps {
  setCurrentPage: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ setCurrentPage }) => {
  const services = [
    {
      icon: <Building className="w-12 h-12 text-blue-500 mb-6" />,
      title: 'CRO & Site Development',
      desc: 'Facility setup, SOPs, and regulatory compliance for research sites.',
      detailedDesc: 'Comprehensive planning and setup support for BA/BE CRO and clinical trial facilities, ensuring regulatory compliance and operational readiness.',
      serviceId: 'cro-development'
    },
    {
      icon: <Users className="w-12 h-12 text-purple-500 mb-6" />,
      title: 'Project Management',
      desc: 'Strategic planning, resource allocation, and vendor management.',
      detailedDesc: 'Tailored project strategies and execution plans to meet study timelines and objectives with strategic resource deployment.',
      serviceId: 'project-management'
    },
    {
      icon: <FileText className="w-12 h-12 text-red-500 mb-6" />,
      title: 'Medical Writing',
      desc: 'Protocol development, CSRs, and regulatory documentation.',
      detailedDesc: 'Scientifically sound and regulatory-compliant protocol development, study design, and comprehensive medical documentation.',
      serviceId: 'medical-writing'
    },
    {
      icon: <Globe className="w-12 h-12 text-yellow-500 mb-6" />,
      title: 'Translation Services',
      desc: 'Certified multilingual translation for informed consent documents.',
      detailedDesc: 'Multilingual translation of ICDs into regional Indian languages with back-translation and linguistic validation.',
      serviceId: 'translation-services'
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500 mb-6" />,
      title: 'Regulatory Services',
      desc: 'CDSCO submissions, eCTD preparation, and regulatory approvals.',
      detailedDesc: 'End-to-end CDSCO submissions, eCTD preparation, and regulatory query response management.',
      serviceId: 'regulatory-services'
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-purple-500 mb-6" />,
      title: 'Clinical Services',
      desc: 'Site management, monitoring, and compliance support.',
      detailedDesc: 'Site development, management, monitoring, and comprehensive compliance support across all trial stages.',
      serviceId: 'clinical-services'
    },
    {
      icon: <Flask className="w-12 h-12 text-red-500 mb-6" />,
      title: 'Central Pathology Lab',
      desc: 'Sample collection, analysis, and timely pathology reporting.',
      detailedDesc: 'Standardized sample collection, transport, analysis, and timely pathology reporting integrated with trial timelines.',
      serviceId: 'pathology-lab'
    },
    {
      icon: <Search className="w-12 h-12 text-yellow-500 mb-6" />,
      title: 'Auditing & Monitoring',
      desc: 'Site qualification, ongoing monitoring, and risk-based audits.',
      detailedDesc: 'CRO and site qualification audits, ongoing monitoring, and comprehensive clinical trial site auditing.',
      serviceId: 'auditing-monitoring'
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-blue-500 mb-6" />,
      title: 'Training',
      desc: 'GCP, GLP, GxP, and regulatory guidelines training.',
      detailedDesc: 'Comprehensive training programs covering GCP, GLP, GxP, and regulatory guidelines for compliant operations.',
      serviceId: 'training'
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-500 mb-6" />,
      title: 'Pharmacokinetics & Biostatistics',
      desc: 'PK strategy, study design, and statistical analysis.',
      detailedDesc: 'Expert PK strategy consulting, study design optimization, and comprehensive statistical analysis support.',
      serviceId: 'pharmacokinetics-biostatistics'
    },
  ];

  return (
    <div>
      <section className="section" style={{background: '#fff'}}>
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="section-title animate-fadeInUp">Our Services</h1>
            <p className="section-subtitle animate-fadeInUp">
              Comprehensive solutions for every aspect of clinical research and development
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto mt-6">
              From CRO development to regulatory compliance, we provide end-to-end support for clinical research projects. 
              Click on any service below to learn more about our specialized offerings and how we can support your research objectives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServiceCard 
                key={service.title}
                {...service}
                setCurrentPage={setCurrentPage}
              />
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
            <button 
              className="px-8 py-3 text-base font-medium rounded-full transition-all duration-200 shadow-lg hover:shadow-xl text-white" 
              style={{ backgroundColor: '#1a237e' }}
              onClick={() => setCurrentPage('contact')}
            >
              Contact Our Experts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;