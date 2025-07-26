import React from 'react';
import { Building, Users, FileText, Globe, Shield, Stethoscope, FlaskRound as Flask, Search, GraduationCap, TrendingUp } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 'A',
      title: 'Development of Clinical Research Organization and Clinical Trial Site',
      icon: <Building className="w-8 h-8" />,
      items: [
        'Facility and Infrastructure Development: Comprehensive planning and setup support for BA/BE CRO and clinical trial facilities, ensuring regulatory compliance and operational readiness.',
        'SOP and Policy Development: Custom Standard Operating Procedures (SOPs) and internal policies aligned with ICH-GCP and local regulations.',
        'Instrument Calibration and Validation Support: Assistance in calibration, qualification, and validation of instruments.',
        'Training: Role-specific, GCP, GxP-compliant training for staff, investigators, and coordinators.',
        'Site Master File Development: Structuring and organization of site documentation in line with regulatory expectations.',
        'Regulatory Approval: Guidance and documentation support for regulatory approvals and licensing for BA/BE and clinical trial initiation.'
      ]
    },
    {
      id: 'B',
      title: 'Project Management',
      icon: <Users className="w-8 h-8" />,
      items: [
        'Project Planning and Execution: Tailored project strategies and execution plans to meet study timelines and objectives.',
        'Resource Allocation: Strategic deployment of resources to match project complexity and scope.',
        'Budget and Contract Management: Transparent financial planning, vendor contracting, and sponsor negotiation.',
        'Vendor Management: End-to-end coordination with third-party service providers to ensure quality and timeliness.'
      ]
    },
    {
      id: 'C',
      title: 'Medical Writing',
      icon: <FileText className="w-8 h-8" />,
      items: [
        'Study Design & Protocol Development: We assist in scientifically sound and regulatory-compliant protocol and study design tailored to your therapeutic area and trial phase.',
        'Informed Consent Form (ICF) Development: We develop ICFs that are clear, ethical, and aligned with regulatory standards to ensure proper subject understanding and consent.',
        'Case Report Form (CRF) Development: Our team designs CRFs that capture precise, study-specific data to support accurate trial outcomes.',
        'Patient Diary Development: We create user-friendly patient diaries for consistent, real-time symptom or adherence tracking.',
        'Clinical Study Reports (CSR): We prepare comprehensive CSRs in accordance with ICH E3 guidelines, presenting study outcomes clearly for regulatory submission.',
        'Investigator Brochures: Our brochures effectively communicate key clinical and safety data to investigators, supporting informed trial conduct.',
        'Manuscript Preparation: We draft and edit manuscripts for publication in peer-reviewed journals, enhancing scientific visibility of your research.',
        'Medical Marketing Reviews and Reports: We provide scientifically accurate and compliant content reviews for medical marketing materials.',
        'Literature Reviews: Our medical writers conduct targeted literature searches and synthesize findings into well-structured reports.',
        'Publication Planning: We offer strategic publication planning to align scientific messaging with regulatory and marketing timelines.'
      ]
    },
    {
      id: 'D',
      title: 'Translation Services for Informed Consent Documents (ICD) & Patient Diary',
      icon: <Globe className="w-8 h-8" />,
      items: [
        'Multilingual Translation of ICDs: Accurate translation of ICDs into regional Indian languages such as Hindi, Marathi, Tamil, Telugu, Bengali, and more.',
        'Back Translation Services: Independent back-translation to verify consistency and accuracy of translated content.',
        'Linguistic Validation: Ensures the translated ICD is culturally and contextually appropriate for the target population.',
        'IRB/IEC Compliant Formatting: ICDs are formatted and structured per ethics committee requirements for approval.',
        'Audio/Visual ICD Preparation: Development of audio or video consent formats to support sites with low-literacy patient populations.'
      ]
    },
    {
      id: 'E',
      title: 'Regulatory Services',
      icon: <Shield className="w-8 h-8" />,
      items: [
        'BE NOC / CT NOC Assistance: We support preparation and submission of Bioequivalence (BE) and Clinical Trial (CT) No Objection Certificate (NOC) applications to CDSCO.',
        'CDSCO Application and Approval Handling: Our experts manage end-to-end CDSCO submissions, ensuring timely approvals and compliance.',
        'eCTD Preparation, Review & Submission: We compile and submit dossiers in eCTD format, meeting national and international regulatory requirements.',
        'Regulatory Query Response Management: We help address regulatory authority queries efficiently, ensuring continued progress of submissions.'
      ]
    },
    {
      id: 'F',
      title: 'Clinical Services',
      icon: <Stethoscope className="w-8 h-8" />,
      items: [
        'Site Development & Management: We assist in setting up and maintaining fully compliant clinical trial sites with effective operational workflows.',
        'Site Identification and Feasibility Assessment: Our team evaluates and recommends high-potential sites based on disease area, patient population, and infrastructure.',
        'Essential Document Collection and Processing: We manage collection, verification, and maintenance of all essential regulatory and trial-related documents.',
        'Site Initiation, Monitoring & Closure: We provide comprehensive support across all stages—from initiation visits to close-out—to ensure protocol compliance.',
        'Risk-Based Monitoring Strategies: We implement targeted monitoring approaches to enhance data quality while reducing costs and inefficiencies.',
        'Ongoing Site Communication and Compliance: Continuous engagement with sites ensures adherence to study protocols, timelines, and regulatory standards.',
        'Training and Audit Support: We provide tailored training and audit readiness programs to ensure site staff are compliant and inspection-ready.',
        'AE/SAE Documentation Management: We ensure timely and accurate documentation, reporting, and follow-up of adverse events in accordance with GCP.'
      ]
    },
    {
      id: 'G',
      title: 'Central Pathology Lab Services',
      icon: <Flask className="w-8 h-8" />,
      items: [
        'Sample Collection and Transport: We ensure standardized and timely biological sample collection and cold chain transport under validated procedures.',
        'Sample Analysis: Our lab partners provide validated testing services with quality control checks for reliable biomarker and safety data.',
        'Pathology Report Dispatch: We offer accurate and timely reporting of pathology results, integrated with trial timelines and clinical data needs.'
      ]
    },
    {
      id: 'H',
      title: 'Auditing and Monitoring Services',
      icon: <Search className="w-8 h-8" />,
      items: [
        'CRO and Site Qualification Audits: We perform thorough pre-study audits to assess operational readiness and regulatory compliance.',
        'Ongoing Site Monitoring: Regular monitoring ensures adherence to protocol, timely data entry, and participant safety.',
        'Clinical Trial Site Auditing: Our independent audits evaluate compliance with GCP, protocol, and SOPs to identify and mitigate risks.',
        'BE Study Monitoring (Clinical, Bioanalytical & Statistical): We oversee all aspects of BE studies, from clinical conduct to final statistical evaluation.'
      ]
    },
    {
      id: 'I',
      title: 'Training',
      icon: <GraduationCap className="w-8 h-8" />,
      items: [
        'Good Clinical Practice (GCP): Our GCP training ensures staff understand ethical and regulatory standards for clinical trials.',
        'Good Laboratory Practice (GLP): We provide GLP training to enhance quality and integrity in non-clinical lab studies.',
        'Good X Practice (GxP): We deliver tailored GxP modules, covering best practices across clinical, lab, and manufacturing environments.',
        'Regulatory Guidelines Training: Our training programs cover key Indian and international regulatory frameworks to support compliant operations.'
      ]
    },
    {
      id: 'J',
      title: 'Pharmacokinetics & Biostatistics',
      icon: <TrendingUp className="w-8 h-8" />,
      items: [
        'PK Strategy Consulting for Drug Development: We offer expert guidance on pharmacokinetic (PK) strategies aligned with study objectives and regulatory needs.',
        'Study Design and Sample Size Calculations: We optimize study design and determine appropriate sample sizes to ensure statistical power and efficiency.',
        'Collaborative Protocol Development Support: We provide scientific input for protocol development in collaboration with investigators and sponsors.',
        'Statistical Analysis Plan (SAP) Development: Our biostatisticians create SAPs that define rigorous and transparent methods for analyzing study data.',
        'PK and Biostatistical Analysis: We conduct detailed pharmacokinetic and statistical analyses using validated tools and methodologies.'
      ]
    }
  ];

  return (
    <div style={{paddingTop: '100px'}}>
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="section-title animate-fadeInUp">Our Services</h1>
            <p className="section-subtitle animate-fadeInUp">
              Comprehensive solutions for every aspect of clinical research and development
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section" style={{paddingTop: '0'}}>
        <div className="container">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="service-card animate-fadeInUp"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-blue-400 bg-blue-400/10 p-3 rounded-lg">
                    {service.icon}
                  </div>
                  <div>
                    <span className="text-blue-400 text-sm font-semibold">SERVICE {service.id}</span>
                    <h3 className="text-xl font-bold text-blue-400 mt-1">{service.title}</h3>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 leading-relaxed">
                      {item.includes(':') ? (
                        <>
                          <strong className="text-white">{item.split(':')[0]}:</strong>
                          {item.split(':').slice(1).join(':')}
                        </>
                      ) : (
                        item
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Translation Services Details */}
      <section className="section" style={{background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)'}}>
        <div className="container">
          <div className="glass-dark rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text-2">Translation Services Specialization</h2>
            <p className="text-lg text-gray-300 text-center mb-8 max-w-4xl mx-auto">
              We offer certified translation services for Informed Consent Documents (ICDs) to ensure 
              participant comprehension and regulatory compliance across multilingual trial settings in India.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card">
                <Globe className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold mb-3 text-blue-400">Regional Languages</h3>
                <p className="text-gray-300 text-sm">Hindi, Marathi, Tamil, Telugu, Bengali, and more</p>
              </div>
              
              <div className="card">
                <Shield className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold mb-3 text-purple-400">Quality Assurance</h3>
                <p className="text-gray-300 text-sm">Back translation and linguistic validation</p>
              </div>
              
              <div className="card">
                <FileText className="w-10 h-10 text-red-400 mb-4" />
                <h3 className="text-lg font-semibold mb-3 text-red-400">Compliance</h3>
                <p className="text-gray-300 text-sm">IRB/IEC compliant formatting and structure</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our comprehensive services can support your clinical research objectives
            </p>
            <button className="btn-primary">
              Contact Our Experts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;