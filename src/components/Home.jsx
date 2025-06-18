import React from 'react';
import './home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>
            Welcome to <span className="highlight">Ortus Healthcare Solutions</span>
          </h1>
          <p className="subheading">
            Empowering Excellence in Clinical Research
          </p>
          <p className="tagline">
            End-to-end consulting, compliance, and management services for clinical trials across India.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">Explore Services</button>
            <button className="btn-outline">Contact Us</button>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="section mission-section">
        <h2>Our Mission</h2>
        <p>
          At Ortus, we specialize in developing and managing clinical research organizations and trial sites.
          With our strategic insights and regulatory expertise, we enable healthcare advancements through
          effective, compliant, and scalable solutions.
        </p>
      </section>

      {/* Services Overview */}
      <section className="section services-overview">
        <h2>Our Key Offerings</h2>
        <ul className="services-list">
          <li>Clinical Site Development & Regulatory Approvals</li>
          <li>Project Management & Vendor Coordination</li>
          <li>Medical Writing & Documentation</li>
          <li>Multilingual Translation & ICD Preparation</li>
          <li>Central Pathology & Clinical Audits</li>
          <li>PK/Stats Consulting & GCP/GLP/GxP Training</li>
        </ul>
      </section>

      {/* Careers & Call to Action */}
      <section className="section careers-section">
        <h2>Grow With Us</h2>
        <p>
          We're building a purpose-driven team advancing clinical research across India. Whether you're a fresh graduate
          or an experienced professional, join our journey to transform healthcare.
        </p>
        <a href="mailto:ortushealthcaresolutions@gmail.com" className="btn-primary">Apply Now</a>
      </section>

      {/* Footer Banner */}
      <div className="footer-accent"></div>
    </div>
  );
}

export default Home;