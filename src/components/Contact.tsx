import React, { useState } from 'react';
import { Mail, Smartphone, MapPin, Linkedin, Instagram, Github } from 'lucide-react';
import { useDevMode } from '../context/DevModeContext';

const Contact: React.FC = () => {
  const { devMode } = useDevMode();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset form status after a delay
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={20} />, 
      url: 'https://linkedin.com/in/username',
      color: 'bg-blue-700 hover:bg-blue-800'
    },
    { 
      name: 'Instagram', 
      icon: <Instagram size={20} />, 
      url: 'https://instagram.com/username',
      color: 'bg-pink-600 hover:bg-pink-700'
    },
    { 
      name: 'GitHub', 
      icon: <Github size={20} />, 
      url: 'https://github.com/username',
      color: 'bg-gray-700 hover:bg-gray-800'
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-950/80">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-500">
              Get In Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 shadow-xl h-full">
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-600/20 p-3 rounded-lg mr-4">
                    <Mail className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Email</h4>
                    <a href="mailto:contact@example.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                      contact@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-600/20 p-3 rounded-lg mr-4">
                    <Smartphone className="text-green-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Phone</h4>
                    <a href="tel:+1234567890" className="text-gray-300 hover:text-green-400 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-600/20 p-3 rounded-lg mr-4">
                    <MapPin className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Location</h4>
                    <p className="text-gray-300">
                      San Francisco, California
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-lg font-medium text-white mb-4">Connect on Social Media</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} text-white p-3 rounded-full transition-all duration-300 hover:scale-110`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
              
              {devMode && (
                <div className="mt-10 pt-6 border-t border-gray-700">
                  <h4 className="text-sm font-medium text-purple-400 mb-2">Availability</h4>
                  <p className="text-sm text-gray-400">
                    Currently available for freelance projects and full-time opportunities.
                  </p>
                  <div className="mt-4 bg-gray-900/50 p-3 rounded-lg border border-purple-600/30">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-300">Current workload</span>
                      <span className="text-sm text-gray-300">65%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-green-500 to-yellow-500" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white resize-none"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus === 'sending' || formStatus === 'success'}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    formStatus === 'idle' 
                      ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white'
                      : formStatus === 'sending'
                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                        : 'bg-green-600 text-white cursor-not-allowed'
                  }`}
                >
                  {formStatus === 'idle' && 'Send Message'}
                  {formStatus === 'sending' && 'Sending...'}
                  {formStatus === 'success' && 'Message Sent!'}
                  {formStatus === 'error' && 'Error Sending Message'}
                </button>
                
                {devMode && (
                  <div className="text-xs text-gray-400 mt-2">
                    Form submissions are currently simulated for demonstration purposes.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;