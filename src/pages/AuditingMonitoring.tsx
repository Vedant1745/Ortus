import React from 'react';
import { Search, ArrowLeft } from 'lucide-react';
import '../App.css';

interface AuditingMonitoringProps {
  setCurrentPage: (page: string) => void;
}

const AuditingMonitoring: React.FC<AuditingMonitoringProps> = ({ setCurrentPage }) => {
  const services = [
    {
      title: 'CRO and Site Qualification Audits',
      description: 'We perform thorough pre-study audits to assess operational readiness and regulatory compliance.'
    },
    {
      title: 'Ongoing Site Monitoring',
      description: 'Regular monitoring ensures adherence to protocol, timely data entry, and participant safety.'
    },
    {
      title: 'Clinical Trial Site Auditing',
      description: 'Our independent audits evaluate compliance with GCP, protocol, and SOPs to identify and mitigate risks.'
    },
    {
      title: 'BE Study Monitoring (Clinical, Bioanalytical & Statistical)',
      description: 'We oversee all aspects of BE studies, from clinical conduct to final statistical evaluation.'
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
            <Search className="w-24 h-24 text-blue-600 mx-auto" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Auditing and Monitoring Services
          </h1>
          
          {/* Introductory Paragraph */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive auditing and monitoring services ensuring regulatory compliance, data quality, and risk mitigation across clinical trials.
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
                    <Search className="w-6 h-6 text-blue-600" />
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

export default AuditingMonitoring; 