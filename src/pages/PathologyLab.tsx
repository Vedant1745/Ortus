import React from 'react';
import { Microscope, ArrowLeft } from 'lucide-react';
import '../App.css';

interface PathologyLabProps {
  setCurrentPage: (page: string) => void;
}

const PathologyLab: React.FC<PathologyLabProps> = ({ setCurrentPage }) => {
  const services = [
    {
      title: 'Sample Collection and Transport',
      description: 'We ensure standardized and timely biological sample collection and cold chain transport under validated procedures.'
    },
    {
      title: 'Sample Analysis',
      description: 'Our lab partners provide validated testing services with quality control checks for reliable biomarker and safety data.'
    },
    {
      title: 'Pathology Report Dispatch',
      description: 'We offer accurate and timely reporting of pathology results, integrated with trial timelines and clinical data needs.'
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
            <Microscope className="w-24 h-24 text-blue-600 mx-auto" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Central Pathology Lab Services
          </h1>
          
          {/* Introductory Paragraph */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive pathology laboratory services ensuring standardized sample collection, analysis, and timely reporting for clinical trials.
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
                    <Microscope className="w-6 h-6 text-blue-600" />
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

export default PathologyLab; 