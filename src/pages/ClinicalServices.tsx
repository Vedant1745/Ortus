import React from 'react';
import { Stethoscope, ArrowLeft } from 'lucide-react';
import '../App.css';

interface ClinicalServicesProps {
  setCurrentPage: (page: string) => void;
}

const ClinicalServices: React.FC<ClinicalServicesProps> = ({ setCurrentPage }) => {
  const services = [
    {
      title: 'Site Development & Management',
      description: 'We assist in setting up and maintaining fully compliant clinical trial sites with effective operational workflows.'
    },
    {
      title: 'Site Identification and Feasibility Assessment',
      description: 'Our team evaluates and recommends high-potential sites based on disease area, patient population, and infrastructure.'
    },
    {
      title: 'Essential Document Collection and Processing',
      description: 'We manage collection, verification, and maintenance of all essential regulatory and trial-related documents.'
    },
    {
      title: 'Site Initiation, Monitoring & Closure',
      description: 'We provide comprehensive support across all stages—from initiation visits to close-out—to ensure protocol compliance.'
    },
    {
      title: 'Risk-Based Monitoring Strategies',
      description: 'We implement targeted monitoring approaches to enhance data quality while reducing costs and inefficiencies.'
    },
    {
      title: 'Ongoing Site Communication and Compliance',
      description: 'Continuous engagement with sites ensures adherence to study protocols, timelines, and regulatory standards.'
    },
    {
      title: 'Training and Audit Support',
      description: 'We provide tailored training and audit readiness programs to ensure site staff are compliant and inspection-ready.'
    },
    {
      title: 'AE/SAE Documentation Management',
      description: 'We ensure timely and accurate documentation, reporting, and follow-up of adverse events in accordance with GCP.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-8 pt-24">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <button
            onClick={() => setCurrentPage('services')}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </button>
          
          {/* Large Icon */}
          <div className="mb-6">
            <Stethoscope className="w-24 h-24 text-blue-600 mx-auto" />
          </div>
          
          <h1 className="text-4xl font-bold text-pink-600 mb-4">
            Clinical Services
          </h1>
          
          {/* Introductory Paragraph */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive clinical trial support services ensuring site compliance, effective monitoring, and successful study execution.
          </p>
        </div>

        {/* Core Services Section */}
        <div className="mb-12">
                              <h2 className="text-3xl font-bold text-pink-500 text-center mb-8 animate-fadeInUp">
                      Core Services
                    </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 animate-fadeInUp" style={{animationDelay: `${(index + 1) * 0.1}s`}}>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <Stethoscope className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center animate-fadeInUp">
          <button
            onClick={() => setCurrentPage('contact')}
            className="text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            style={{ backgroundColor: '#1a237e' }}
          >
            Contact Our Experts
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClinicalServices; 