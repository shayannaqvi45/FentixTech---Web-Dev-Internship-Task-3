import { useState } from 'react';
import Hero from '../components/Hero';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <Hero
        title="Contact Us"
        bgImage="https://picsum.photos/seed/contact-banner/1920/600"
      />

      {/* Main Container */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          
          {/* Left Column: Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight border-l-4 border-brand-teal pl-4 mb-4">
                Get In Touch
              </h2>
              <p className="text-gray-500">
                Have a question, feedback, or need support? Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="bg-teal-50 border border-brand-teal/30 text-teal-800 rounded-lg p-6 font-semibold shadow-sm animate-fadeIn">
                <p className="text-lg mb-1 text-teal-900">Thank you, {formData.name}!</p>
                <p className="text-sm font-medium">Your message has been sent successfully. We will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal transition-all placeholder-gray-400 font-medium"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal transition-all placeholder-gray-400 font-medium"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal transition-all placeholder-gray-400 font-medium"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal transition-all placeholder-gray-400 font-medium resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-brand-teal hover:bg-teal-600 text-white font-bold px-8 py-4 rounded-lg shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 transition-all duration-300 transform active:scale-95"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact info & Maps */}
          <div className="flex flex-col justify-between space-y-12">
            
            {/* Info Cards */}
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight border-l-4 border-brand-teal pl-4 mb-4">
                Office Information
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 flex flex-col items-center text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal text-lg">
                    <FaPhoneAlt />
                  </div>
                  <h3 className="font-bold text-gray-800">Phone</h3>
                  <p className="text-sm text-gray-500 font-medium">+1 234 567 890</p>
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 flex flex-col items-center text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal text-lg">
                    <FaEnvelope />
                  </div>
                  <h3 className="font-bold text-gray-800">Email</h3>
                  <p className="text-sm text-gray-500 font-medium hover:text-brand-teal transition-colors">
                    <a href="mailto:info@catalogz.com">info@catalogz.com</a>
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 flex flex-col items-center text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal text-lg">
                    <FaMapMarkerAlt />
                  </div>
                  <h3 className="font-bold text-gray-800">Address</h3>
                  <p className="text-sm text-gray-500 font-medium leading-tight">120 Main Road, New York, NY</p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="w-full h-80 rounded-xl overflow-hidden shadow border border-gray-100 flex-grow min-h-[300px]">
              <iframe
                title="Catalog-Z Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.4284561833596!2d-73.98701042407519!3d40.7538805713872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1718386400000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
