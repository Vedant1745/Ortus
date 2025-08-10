import React from 'react';
import { Building, ArrowLeft } from 'lucide-react';
import '../App.css';

interface CRODevelopmentProps {
  setCurrentPage: (page: string) => void;
}

const CRODevelopment: React.FC<CRODevelopmentProps> = ({ setCurrentPage }) => {
  const services = [
    {
      title: 'Facility and Infrastructure Development',
      description: 'Comprehensive planning and setup support for BA/BE CRO and clinical trial facilities, ensuring regulatory compliance and operational readiness.'
    },
    {
      title: 'SOP and Policy Development',
      description: 'Custom Standard Operating Procedures (SOPs) and internal policies aligned with ICH-GCP and local regulations.'
    },
    {
      title: 'Instrument Calibration and Validation Support',
      description: 'Assistance in calibration, qualification, and validation of instruments.'
    },
    {
      title: 'Training',
      description: 'Role-specific, GCP, GxP-compliant training for staff, investigators, and coordinators.'
    },
    {
      title: 'Site Master File Development',
      description: 'Structuring and organization of site documentation in line with regulatory expectations.'
    },
    {
      title: 'Regulatory Approval',
      description: 'Guidance and documentation support for regulatory approvals and licensing for BA/BE and clinical trial initiation.'
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
            <Building className="w-24 h-24 text-blue-600 mx-auto" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Development of Clinical Research Organization and Clinical Trial Site
          </h1>
          
          {/* Introductory Paragraph */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive development and setup support for BA/BE CRO and clinical trial facilities, ensuring regulatory compliance and operational readiness.
          </p>
        </div>

        {/* Core Services Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8 animate-fadeInUp">
            Core Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 animate-fadeInUp" style={{animationDelay: `${(index + 1) * 0.1}s`}}>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <Building className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
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

export default CRODevelopment; 