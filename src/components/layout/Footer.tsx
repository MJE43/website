import React from 'react';
import { NavLink } from 'react-router-dom';
import { Laptop, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-text-dark text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Laptop size={24} className="text-primary-light" />
              <span className="text-xl font-bold">Webundance</span>
            </div>
            <p className="text-gray-300 mb-4">
              Custom websites, SEO optimization, and data-driven digital strategies for small businesses.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" aria-label="Facebook" className="text-gray-300 hover:text-primary-light transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-gray-300 hover:text-primary-light transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-gray-300 hover:text-primary-light transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-300 hover:text-primary-light transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-300 hover:text-primary-light transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-gray-300 hover:text-primary-light transition-colors">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/process" className="text-gray-300 hover:text-primary-light transition-colors">
                  Our Process
                </NavLink>
              </li>
              <li>
                <NavLink to="/results" className="text-gray-300 hover:text-primary-light transition-colors">
                  Results
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-300 hover:text-primary-light transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/services" className="text-gray-300 hover:text-primary-light transition-colors">
                  Web Development
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-gray-300 hover:text-primary-light transition-colors">
                  SEO & Content
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-gray-300 hover:text-primary-light transition-colors">
                  Analytics & Insights
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-gray-300 hover:text-primary-light transition-colors">
                  Local SEO
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-gray-300 hover:text-primary-light transition-colors">
                  Website Maintenance
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary-light mt-1" />
                <span className="text-gray-300">eisner.michaelj@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary-light mt-1" />
                <span className="text-gray-300">520-365-7151</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-light mt-1" />
                <span className="text-gray-300">Tucson, AZ</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-700 text-gray-400 text-sm text-center">
          <p>&copy; {currentYear} Webundance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;