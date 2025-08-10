import React from 'react';
import { FileText, ArrowLeft } from 'lucide-react';
import '../App.css';

interface MedicalWritingProps {
  setCurrentPage: (page: string) => void;
}

const MedicalWriting: React.FC<MedicalWritingProps> = ({ setCurrentPage }) => {
  const services = [
    {
      title: 'Study Design & Protocol Development',
      description: 'We assist in scientifically sound and regulatory-compliant protocol and study design tailored to your therapeutic area and trial phase.'
    },
    {
      title: 'Informed Consent Form (ICF) Development',
      description: 'We develop ICFs that are clear, ethical, and aligned with regulatory standards to ensure proper subject understanding and consent.'
    },
    {
      title: 'Case Report Form (CRF) Development',
      description: 'Our team designs CRFs that capture precise, study-specific data to support accurate trial outcomes.'
    },
    {
      title: 'Patient Diary Development',
      description: 'We create user-friendly patient diaries for consistent, real-time symptom or adherence tracking.'
    },
    {
      title: 'Clinical Study Reports (CSR)',
      description: 'We prepare comprehensive CSRs in accordance with ICH E3 guidelines, presenting study outcomes clearly for regulatory submission.'
    },
    {
      title: 'Investigator Brochures',
      description: 'Our brochures effectively communicate key clinical and safety data to investigators, supporting informed trial conduct.'
    },
    {
      title: 'Manuscript Preparation',
      description: 'We draft and edit manuscripts for publication in peer-reviewed journals, enhancing scientific visibility of your research.'
    },
    {
      title: 'Medical Marketing Reviews and Reports',
      description: 'We provide scientifically accurate and compliant content reviews for medical marketing materials.'
    },
    {
      title: 'Literature Reviews',
      description: 'Our medical writers conduct targeted literature searches and synthesize findings into well-structured reports.'
    },
    {
      title: 'Publication Planning',
      description: 'We offer strategic publication planning to align scientific messaging with regulatory and marketing timelines.'
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
            <FileText className="w-24 h-24 text-blue-600 mx-auto" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Medical Writing
          </h1>
          
          {/* Introductory Paragraph */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive medical writing services ensuring regulatory compliance and scientific accuracy across all clinical research documentation.
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
                    <FileText className="w-6 h-6 text-blue-600" />
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

export default MedicalWriting; 