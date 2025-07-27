import React from 'react';
import '../App.css';

const Career: React.FC = () => (
  <div>
    <section className="section" style={{background: '#fff'}}>
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="section-title animate-fadeInUp">Careers at Ortus</h1>
          <p className="section-subtitle animate-fadeInUp">
            Join a purpose-driven team advancing clinical research in India
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="card animate-fadeInUp" style={{animationDelay: '0.1s'}}>
            <h3 className="text-xl font-semibold mb-4 gradient-text">Clinical Operations</h3>
            <p className="text-gray-600">Work on the frontlines of clinical research, supporting trial execution and site management.</p>
          </div>
          <div className="card animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <h3 className="text-xl font-semibold mb-4 gradient-text">Regulatory Affairs</h3>
            <p className="text-gray-600">Ensure compliance and manage submissions to regulatory authorities.</p>
          </div>
          <div className="card animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            <h3 className="text-xl font-semibold mb-4 gradient-text">Project Management</h3>
            <p className="text-gray-600">Lead and coordinate clinical research projects from planning to completion.</p>
          </div>
          <div className="card animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            <h3 className="text-xl font-semibold mb-4 gradient-text">Medical Writing</h3>
            <p className="text-gray-600">Draft protocols, reports, and publications to advance scientific knowledge.</p>
          </div>
          <div className="card animate-fadeInUp" style={{animationDelay: '0.5s'}}>
            <h3 className="text-xl font-semibold mb-4 gradient-text">Fresh Graduates</h3>
            <p className="text-gray-600">Kickstart your career in healthcare with mentorship and growth opportunities.</p>
          </div>
        </div>
        <div className="glass-dark rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6 gradient-text-2">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We foster a culture of learning, innovation, and compliance. To apply, send your resume to:
            <br />
            <a href="mailto:ortushealthcaresolutions@gmail.com" className="text-blue-600 font-semibold underline">ortushealthcaresolutions@gmail.com</a>
          </p>
          <a href="mailto:ortushealthcaresolutions@gmail.com" className="btn-primary">
            Apply Now
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default Career;