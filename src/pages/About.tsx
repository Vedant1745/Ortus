import React from 'react';
import { MapPin, Target, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div style={{paddingTop: '100px'}}>
      {/* Hero Section */}
      <section className="section" style={{background: '#ffffff'}}>
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="section-title animate-fadeInUp">About Ortus Healthcare Solutions</h1>
            <p className="section-subtitle animate-fadeInUp">
              Committed to empowering excellence in clinical research across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <div className="glass rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6 gradient-text">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  At Ortus Healthcare Solutions, we are committed to empowering excellence in clinical 
                  research. Based in Pune, Maharashtra, we offer end-to-end consulting services for 
                  clinical research organizations (CROs) and clinical trial sites across India.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With deep expertise in regulatory compliance, project management, and site development, 
                  our team supports clients at every stage of the clinical trial lifecycle.
                </p>
              </div>
            </div>
            
            <div className="animate-fadeInRight">
              <div className="glass rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6 gradient-text-2">Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Whether you're a new research site or an established CRO aiming to scale, Ortus 
                  provides strategic, technical, and operational guidance to ensure your success 
                  in the ever-evolving healthcare landscape.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We strive to be India's most trusted partner in clinical research excellence, 
                  driving innovation and maintaining the highest standards of quality and compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section" style={{background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, rgba(139, 92, 246, 0.03) 100%)'}}>
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do at Ortus Healthcare Solutions
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card animate-fadeInUp" style={{animationDelay: '0.1s'}}>
              <Target className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 gradient-text">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in all our deliverables and continuously strive for perfection
              </p>
            </div>
            
            <div className="card animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <Users className="w-12 h-12 text-purple-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 gradient-text">Collaboration</h3>
              <p className="text-gray-600">
                We work closely with our clients as partners, ensuring seamless integration and shared success
              </p>
            </div>
            
            <div className="card animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              <Award className="w-12 h-12 text-red-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 gradient-text">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest ethical standards and maintain transparency in all our operations
              </p>
            </div>
            
            <div className="card animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              <MapPin className="w-12 h-12 text-yellow-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 gradient-text">Innovation</h3>
              <p className="text-gray-600">
                We embrace new technologies and methodologies to deliver cutting-edge solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section" style={{background: '#ffffff'}}>
        <div className="container">
          <h2 className="section-title">Our Expertise</h2>
          <p className="section-subtitle">
            Deep knowledge and experience across all aspects of clinical research
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="service-card">
              <h3 className="gradient-text-3">Regulatory Compliance</h3>
              <ul>
                <li>ICH-GCP Guidelines</li>
                <li>CDSCO Regulations</li>
                <li>International Standards</li>
                <li>Quality Assurance</li>
              </ul>
            </div>
            
            <div className="service-card">
              <h3 className="gradient-text-3">Project Management</h3>
              <ul>
                <li>Strategic Planning</li>
                <li>Resource Optimization</li>
                <li>Timeline Management</li>
                <li>Risk Mitigation</li>
              </ul>
            </div>
            
            <div className="service-card">
              <h3 className="gradient-text-3">Site Development</h3>
              <ul>
                <li>Facility Setup</li>
                <li>Infrastructure Planning</li>
                <li>Team Training</li>
                <li>Operational Readiness</li>
              </ul>
            </div>
            
            <div className="service-card">
              <h3 className="gradient-text-3">Medical Writing</h3>
              <ul>
                <li>Protocol Development</li>
                <li>Regulatory Documents</li>
                <li>Clinical Study Reports</li>
                <li>Publication Support</li>
              </ul>
            </div>
            
            <div className="service-card">
              <h3 className="gradient-text-3">Translation Services</h3>
              <ul>
                <li>Multilingual Support</li>
                <li>Cultural Adaptation</li>
                <li>Quality Validation</li>
                <li>Regulatory Compliance</li>
              </ul>
            </div>
            
            <div className="service-card">
              <h3 className="gradient-text-3">Clinical Operations</h3>
              <ul>
                <li>Site Management</li>
                <li>Monitoring Services</li>
                <li>Data Quality</li>
                <li>Audit Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section" style={{background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, rgba(139, 92, 246, 0.03) 100%)'}}>
        <div className="container">
          <div className="glass-dark rounded-3xl p-12 text-center">
            <MapPin className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6 gradient-text-2">Our Location</h2>
            <p className="text-xl text-gray-700 mb-4">
              <strong>Ortus Healthcare Solutions</strong>
            </p>
            <p className="text-lg text-gray-600 mb-2">
              101, Mhatoba Complex,<br />
              Opp. Birla Soft Gate No.1,<br />
              Hinjewadi, Pune - 411057,<br />
              Maharashtra, India
            </p>
            <p className="text-blue-500 font-medium mt-6">
              Strategically located in Pune's premier IT hub for enhanced connectivity and collaboration
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;