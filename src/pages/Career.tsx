import React from 'react';
import { Users, TrendingUp, Heart, Award, Mail } from 'lucide-react';

const Career: React.FC = () => {
  return (
    <div style={{paddingTop: '100px'}}>
      {/* Hero Section */}
      <section className="section" style={{background: '#ffffff'}}>
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="section-title animate-fadeInUp">Join Our Team</h1>
            <p className="section-subtitle animate-fadeInUp">
              Be part of a purpose-driven team advancing clinical research in India
            </p>
          </div>
          
          <div className="glass-dark rounded-3xl p-12 text-center">
            <Users className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6 gradient-text">Career Opportunities</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Join Ortus Healthcare Solutions and be a part of a purpose-driven team advancing clinical 
              research in India. We offer dynamic opportunities for growth in clinical operations, 
              regulatory affairs, project management, and medical writing. Whether you're an experienced 
              professional or a fresh graduate passionate about making a difference in healthcare, 
              we'd love to hear from you. We foster a culture of learning, innovation, and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section" style={{background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, rgba(139, 92, 246, 0.03) 100%)'}}>
        <div className="container">
          <h2 className="section-title">Why Choose Ortus as Your Career Partner?</h2>
          <p className="section-subtitle">
            Discover the benefits of working with a leading healthcare consulting firm
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card animate-fadeInUp" style={{animationDelay: '0.1s'}}>
              <TrendingUp className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 gradient-text">Growth Opportunities</h3>
              <p className="text-gray-600">
                Dynamic career paths with continuous learning and professional development programs
              </p>
            </div>
            
            <div className="card animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <Heart className="w-12 h-12 text-purple-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 gradient-text">Purpose-Driven Work</h3>
              <p className="text-gray-600">
                Make a meaningful impact on healthcare by advancing clinical research in India
              </p>
            </div>
            
            <div className="card animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              <Users className="w-12 h-12 text-red-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 gradient-text">Collaborative Culture</h3>
              <p className="text-gray-600">
                Work with a team of experts in a supportive, innovative, and learning-focused environment
              </p>
            </div>
            
            <div className="card animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              <Award className="w-12 h-12 text-yellow-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 gradient-text">Excellence Standards</h3>
              <p className="text-gray-600">
                Be part of a team that maintains the highest standards of quality and compliance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Areas */}
      <section className="section" style={{background: '#ffffff'}}>
        <div className="container">
          <h2 className="section-title">Career Areas</h2>
          <p className="section-subtitle">
            Explore diverse opportunities across various specializations in clinical research
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="service-card">
              <h3 className="gradient-text-3">Clinical Operations</h3>
              <ul>
                <li>Site Management Specialists</li>
                <li>Clinical Research Associates (CRA)</li>
                <li>Clinical Trial Coordinators</li>
                <li>Monitoring Specialists</li>
                <li>Data Management Professionals</li>
              </ul>
            </div>
            
            <div className="service-card">
              <h3 className="gradient-text-3">Regulatory Affairs</h3>
              <ul>
                <li>Regulatory Affairs Specialists</li>
                <li>CDSCO Submission Experts</li>
                <li>Regulatory Compliance Officers</li>
                <li>eCTD Specialists</li>
                <li>Quality Assurance Professionals</li>
              </ul>
            </div>
            
            <div className="service-card">
              <h3 className="gradient-text-3">Project Management</h3>
              <ul>
                <li>Clinical Project Managers</li>
                <li>Study Directors</li>
                <li>Resource Planning Specialists</li>
                <li>Vendor Management Coordinators</li>
                <li>Budget Management Analysts</li>
              </ul>
            </div>
            
            <div className="service-card">
              <h3 className="gradient-text-3">Medical Writing</h3>
              <ul>
                <li>Medical Writers</li>
                <li>Protocol Development Specialists</li>
                <li>Clinical Study Report Writers</li>
                <li>Publication Specialists</li>
                <li>Regulatory Document Writers</li>
              </ul>
            </div>
            
            <div className="service-card">
              <h3 className="gradient-text-3">Translation Services</h3>
              <ul>
                <li>Medical Translators</li>
                <li>Linguistic Validators</li>
                <li>Back Translation Specialists</li>
                <li>Cultural Adaptation Experts</li>
                <li>Audio/Visual Content Creators</li>
              </ul>
            </div>
            
            <div className="service-card">
              <h3 className="gradient-text-3">Biostatistics & Data</h3>
              <ul>
                <li>Biostatisticians</li>
                <li>Pharmacokinetics Specialists</li>
                <li>Statistical Programmers</li>
                <li>Data Scientists</li>
                <li>Clinical Data Analysts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section" style={{background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, rgba(139, 92, 246, 0.03) 100%)'}}>
        <div className="container">
          <div className="glass-dark rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text-2">Ready to Join Our Team?</h2>
            
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-600 mb-8">
                We welcome applications from both experienced professionals and fresh graduates 
                who are passionate about making a difference in healthcare. Our culture emphasizes 
                learning, innovation, and maintaining the highest standards of compliance.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-8">
                <Mail className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Apply Now</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Send your resume and cover letter to:
                </p>
                <a 
                  href="mailto:ortushealthcaresolutions@gmail.com" 
                  className="text-blue-600 font-semibold text-xl hover:text-blue-700 transition-colors"
                >
                  ortushealthcaresolutions@gmail.com
                </a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-blue-500 font-bold text-2xl mb-2">01</div>
                  <h4 className="font-semibold mb-2 text-gray-800">Submit Application</h4>
                  <p className="text-gray-600 text-sm">Send your resume and cover letter</p>
                </div>
                
                <div>
                  <div className="text-purple-500 font-bold text-2xl mb-2">02</div>
                  <h4 className="font-semibold mb-2 text-gray-800">Interview Process</h4>
                  <p className="text-gray-600 text-sm">Technical and cultural fit assessment</p>
                </div>
                
                <div>
                  <div className="text-red-500 font-bold text-2xl mb-2">03</div>
                  <h4 className="font-semibold mb-2 text-gray-800">Welcome Aboard</h4>
                  <p className="text-gray-600 text-sm">Join our mission-driven team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;