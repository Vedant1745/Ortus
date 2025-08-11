import React from 'react';
import { MapPin, Target, Users, Award } from 'lucide-react';
import '../App.css';

const About: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="section" style={{background: '#ffffff'}}>
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="section-title animate-fadeInUp">About Ortus Healthcare Solutions</h1>
            <p className="section-subtitle animate-fadeInUp">
              <span className="text-pink-500">Committed to empowering excellence in clinical research</span>
            </p>
          </div>
          <div className="max-w-4xl mx-auto mb-16 animate-fadeInUp">
            <div className="glass rounded-2xl p-8 border border-blue-900">
              <p className="text-lg text-gray-600 leading-relaxed">
                At Ortus Healthcare Solutions, we are committed to empowering excellence in clinical research. 
                We offer end-to-end consulting services for clinical research organizations (CROs) and clinical 
                trial sites across India. With deep expertise in regulatory compliance, project management, and site development, 
                our team supports clients at every stage of the clinical trial lifecycle. Whether you're a new research site or 
                an established CRO aiming to scale, Ortus provides strategic, technical, and operational guidance to ensure your 
                success in the ever-evolving healthcare landscape.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <div className="glass rounded-2xl p-8 border border-blue-900">
                <h2 className="text-2xl font-bold mb-6 text-center text-pink-500">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To empower excellence in clinical research through deep expertise and unwavering support to clients.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  
                </p>
              </div>
            </div>
            <div className="animate-fadeInRight">
              <div className="glass rounded-2xl p-8 border border-blue-900">
                <h2 className="text-2xl font-bold mb-6 text-center text-pink-500">Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We strive to be most trusted partner in clinical research excellence, driving innovation and maintaining the highest standards of quality and compliance.
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
      {/* CTA Section */}
      <section className="section" style={{background: '#ffffff'}}>
        <div className="container">
          <div className="glass-dark rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 gradient-text-2">Ready to Partner with Us?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join Ortus Healthcare Solutions and experience the difference that expert guidance makes in your clinical research journey.
            </p>
            <button className="btn-primary" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;