import React from 'react';
import { ArrowRight, Shield, Users, Award, Microscope } from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content animate-fadeInUp">
            <h1>
              <span className="text-pink-500">Empowering Excellence in</span> <span className="gradient-text">Clinical Research</span>
            </h1>
            <p>
              At Ortus Healthcare Solutions, we provide end-to-end consulting services for clinical 
              research organizations. From regulatory compliance to 
              project management, we support your success at every stage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="btn-primary"
                onClick={() => setCurrentPage('services')}
              >
                Explore Services <ArrowRight className="inline ml-2" size={20} />
              </button>
              <button 
                className="btn-secondary"
                onClick={() => setCurrentPage('about')}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" style={{background: '#ffffff'}}>
        <div className="container">
          <h2 className="section-title">Why Choose Ortus?</h2>
          <p className="section-subtitle">
            We deliver comprehensive solutions with deep expertise and unwavering commitment to excellence
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card animate-fadeInUp" style={{animationDelay: '0.1s'}}>
              <Shield className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 gradient-text">Regulatory Compliance</h3>
              <p className="text-gray-600">
                Expert guidance on ICH-GCP standards and local regulations ensuring full compliance
              </p>
            </div>
            
            <div className="card animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <Users className="w-12 h-12 text-purple-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 gradient-text">Expert Team</h3>
              <p className="text-gray-600">
                Experienced professionals with deep knowledge across all aspects of clinical research
              </p>
            </div>
            
            <div className="card animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              <Award className="w-12 h-12 text-red-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 gradient-text">Quality Assurance</h3>
              <p className="text-gray-600">
                Rigorous quality control processes ensuring the highest standards in all deliverables
              </p>
            </div>
            
            <div className="card animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              <Microscope className="w-12 h-12 text-yellow-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 gradient-text">End-to-End Solutions</h3>
              <p className="text-gray-600">
                Complete lifecycle support from study design to regulatory approval and beyond
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section" style={{background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, rgba(139, 92, 246, 0.03) 100%)'}}>
        <div className="container">
          <h2 className="section-title text-pink-500">Our Core Services</h2>
          <p className="section-subtitle">
            Comprehensive solutions for every aspect of clinical research and development
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="service-card">
              <h3 className="text-pink-500">CRO & Site Development</h3>
              <p className="text-gray-600">Complete facility setup, SOP development, and regulatory compliance support</p>
            </div>
            
            <div className="service-card">
              <h3 className="text-pink-500">Project Management</h3>
              <p className="text-gray-600">Strategic planning, resource allocation, and vendor management</p>
            </div>
            
            <div className="service-card">
              <h3 className="text-pink-500">Medical Writing</h3>
              <p className="text-gray-600">Protocol development, CSRs, and regulatory documentation</p>
            </div>
            
            <div className="service-card">
              <h3 className="text-pink-500">Translation Services</h3>
              <p className="text-gray-600">Certified multilingual translation for informed consent documents</p>
            </div>
            
            <div className="service-card">
              <h3 className="text-pink-500">Regulatory Services</h3>
              <p className="text-gray-600">CDSCO submissions, eCTD preparation, and regulatory approvals</p>
            </div>
            
            <div className="service-card">
              <h3 className="text-pink-500">Clinical Services</h3>
              <p className="text-gray-600">Site management, monitoring, and compliance support</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button 
              className="btn-primary"
              onClick={() => setCurrentPage('services')}
            >
              View All Services <ArrowRight className="inline ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{background: '#ffffff'}}>
        <div className="container">
          <div className="glass-dark rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 gradient-text-2">Ready to Advance Your Clinical Research?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Partner with Ortus Healthcare Solutions for comprehensive support throughout your clinical trial journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="btn-primary"
                onClick={() => setCurrentPage('contact')}
              >
                Get Started Today
              </button>
              <button 
                className="btn-secondary"
                onClick={() => setCurrentPage('career')}
              >
                Join Our Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;