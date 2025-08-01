import React, { useState } from 'react';
import { Mail, MapPin, Users, Clock } from 'lucide-react';
import '../App.css';

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    if (!form.firstName || !form.lastName || !form.email || !form.message) {
      setError('Please fill in all required fields.');
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
    // Here you could send the form data to a backend or email service
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="section" style={{background: '#ffffff'}}>
        <div className="container">
          <div className="text-center mb-8 md:mb-16">
            <h1 className="section-title animate-fadeInUp">Contact Us</h1>
            <p className="section-subtitle animate-fadeInUp">
              Get in touch with our team of clinical research experts
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
            {/* Contact Information */}
            <div className="animate-fadeInLeft">
              <div className="glass rounded-xl md:rounded-2xl p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 gradient-text">Get In Touch</h2>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="bg-blue-50 p-2 md:p-3 rounded-lg flex-shrink-0">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">Our Office</h3>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        101, Mhatoba Complex,<br />
                        Opp. Birla Soft Gate No.1,<br />
                        Hinjewadi, Pune - 411057,<br />
                        Maharashtra, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="bg-purple-50 p-2 md:p-3 rounded-lg flex-shrink-0">
                      <Mail className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">Email</h3>
                      <a 
                        href="mailto:ortushealthcaresolutions@gmail.com"
                        className="text-purple-600 hover:text-purple-700 transition-colors text-sm md:text-base break-all"
                      >
                        ortushealthcaresolutions@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="bg-red-50 p-2 md:p-3 rounded-lg flex-shrink-0">
                      <Clock className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">Business Hours</h3>
                      <p className="text-gray-600 text-sm md:text-base">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="animate-fadeInRight">
              <div className="glass rounded-xl md:rounded-2xl p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 gradient-text-2">Send us a Message</h2>
                {submitted ? (
                  <div className="text-green-600 font-semibold text-base md:text-lg text-center py-6 md:py-8">
                    Thank you for reaching out! We will get back to you soon.
                  </div>
                ) : (
                  <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-gray-800 placeholder-gray-500 text-sm md:text-base"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-gray-800 placeholder-gray-500 text-sm md:text-base"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-gray-800 placeholder-gray-500 text-sm md:text-base"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-gray-800 placeholder-gray-500 text-sm md:text-base"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                        Service Interest
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-gray-800 text-sm md:text-base"
                      >
                        <option value="">Select a service</option>
                        <option value="cro-development">CRO Development</option>
                        <option value="project-management">Project Management</option>
                        <option value="medical-writing">Medical Writing</option>
                        <option value="translation">Translation Services</option>
                        <option value="regulatory">Regulatory Services</option>
                        <option value="clinical">Clinical Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-gray-800 placeholder-gray-500 resize-none text-sm md:text-base"
                        placeholder="Tell us about your project requirements..."
                      ></textarea>
                    </div>
                    {error && <div className="text-red-500 text-sm text-center">{error}</div>}
                    <button type="submit" className="btn-primary w-full">
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="section" style={{background: '#ffffff'}}>
        <div className="container">
          <div className="glass-dark rounded-2xl md:rounded-3xl p-6 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 gradient-text-2">Quick Contact Options</h2>
            <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
              Choose the most convenient way to reach out to our team
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a href="mailto:ortushealthcaresolutions@gmail.com" className="btn-secondary">
                General Inquiries
              </a>
              <a href="mailto:ortushealthcaresolutions@gmail.com?subject=Partnership Inquiry" className="btn-secondary">
                Business Partnerships
              </a>
              <a href="mailto:ortushealthcaresolutions@gmail.com?subject=Career Application" className="btn-secondary">
                Career Opportunities
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Location Section */}
      <section className="section" style={{background: '#ffffff'}}>
        <div className="container">
          <div className="glass-dark rounded-2xl md:rounded-3xl p-6 md:p-12 text-center">
            <MapPin className="w-12 h-12 md:w-16 md:h-16 text-blue-500 mx-auto mb-4 md:mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 gradient-text-2">Visit Our Office</h2>
            <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
              Located in the heart of Pune's IT hub, Hinjewadi
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl md:rounded-2xl p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-blue-600">Ortus Healthcare Solutions</h3>
              <p className="text-gray-600 text-sm md:text-base">
                101, Mhatoba Complex, Opp. Birla Soft Gate No.1<br />
                Hinjewadi, Pune - 411057, Maharashtra, India
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;