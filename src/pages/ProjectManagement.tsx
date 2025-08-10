import React from 'react';
import { Target, ArrowLeft } from 'lucide-react';
import '../App.css';

interface ProjectManagementProps {
  setCurrentPage: (page: string) => void;
}

const ProjectManagement: React.FC<ProjectManagementProps> = ({ setCurrentPage }) => {
  const services = [
    {
      title: 'Project Planning and Execution',
      description: 'Tailored project strategies and execution plans to meet study timelines and objectives.'
    },
    {
      title: 'Resource Allocation',
      description: 'Strategic deployment of resources to match project complexity and scope.'
    },
    {
      title: 'Budget and Contract Management',
      description: 'Transparent financial planning, vendor contracting, and sponsor negotiation.'
    },
    {
      title: 'Vendor Management',
      description: 'End-to-end coordination with third-party service providers to ensure quality and timeliness.'
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
            <Target className="w-24 h-24 text-blue-600 mx-auto" />
          </div>
          
          <h1 className="text-4xl font-bold text-pink-600 mb-4">
            Project Management
          </h1>
          
          {/* Introductory Paragraph */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Strategic project planning and execution support to ensure your clinical research studies meet timelines and objectives efficiently.
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
                    <Target className="w-6 h-6 text-blue-600" />
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

export default ProjectManagement; 