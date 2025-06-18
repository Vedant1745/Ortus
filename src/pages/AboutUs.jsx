import React from 'react';
import './about.css';
import { Heart, Users, Award, MapPin, CheckCircle, Target } from 'lucide-react';

function AboutUs() {
  const features = [
    {
      icon: <Target className="icon-blue" />,
      title: "Strategic Guidance",
      description: "End-to-end consulting services tailored to your clinical research needs"
    },
    {
      icon: <CheckCircle className="icon-green" />,
      title: "Regulatory Compliance",
      description: "Deep expertise in regulatory requirements and compliance standards"
    },
    {
      icon: <Users className="icon-purple" />,
      title: "Site Development",
      description: "Supporting research sites from inception to full operational capacity"
    },
    {
      icon: <Award className="icon-orange" />,
      title: "Project Management",
      description: "Comprehensive project oversight throughout the clinical trial lifecycle"
    }
  ];

  return (
    <div className="about-container">
      <div className="header-section">
        <div className="header-overlay"></div>
        <div className="header-content">
          <div className="header-text">
            <h1>
              About <span className="highlight">Ortus</span>
            </h1>
            <div className="header-sub">
              <Heart className="heart-icon" />
              <p>Healthcare Solutions</p>
            </div>
            <div className="header-location">
              <MapPin className="pin-icon" />
              <span>Pune, Maharashtra, India</span>
            </div>
          </div>
        </div>
        <div className="decor-circle decor-top"></div>
        <div className="decor-circle decor-bottom"></div>
      </div>

      <div className="main-content">
        <div className="mission">
          <h2>Empowering Excellence in Clinical Research</h2>
          <p>
            At Ortus Healthcare Solutions, we are committed to empowering excellence in clinical
            research. Based in Pune, Maharashtra, we offer end-to-end consulting services for clinical
            research organizations (CROs) and clinical trial sites across India.
          </p>
          <p>
            With deep expertise in regulatory compliance, project management, and site development,
            our team supports clients at every stage of the clinical trial lifecycle. Whether you're a
            new research site or an established CRO aiming to scale, Ortus provides strategic, technical,
            and operational guidance to ensure your success in the ever-evolving healthcare landscape.
          </p>
        </div>

        <div className="features-section">
          <h3>Our Core Expertise</h3>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-section">
          <h3>Ready to Transform Your Clinical Research?</h3>
          <p>
            Partner with Ortus Healthcare Solutions and experience the difference that expert guidance
            makes in your clinical trial success.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">Get Started Today</button>
            <button className="btn-outline">Learn More</button>
          </div>
        </div>
      </div>

      <div className="footer-accent"></div>
    </div>
  );
}

export default AboutUs;
