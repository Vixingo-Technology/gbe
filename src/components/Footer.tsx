import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-3">
                <img
                  src="./img/logo.png"
                  alt="Green Bangla Equipment Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">Green Bangla</h3>
                <p className="text-sm text-blue-200">Equipment Rental</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Leading construction equipment rental company providing reliable machinery and professional service across Bangladesh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-blue-100 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-blue-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#products" className="text-blue-100 hover:text-white transition-colors">Equipment</a></li>
              <li><a href="#projects" className="text-blue-100 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-blue-100 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li>Heavy Equipment Rental</li>
              <li>Construction Machinery</li>
              <li>Operator Services</li>
              <li>Maintenance Support</li>
              <li>24/7 Emergency Service</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary" />
                <span className="text-blue-100 text-sm">+880-1234-567890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary" />
                <span className="text-blue-100 text-sm">info@greenbanglaequipment.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-secondary mt-0.5" />
                <span className="text-blue-100 text-sm">Dhaka, Bangladesh</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-blue-600 mt-8 pt-8 text-center">
          <p className="text-blue-100 text-sm">
            © {new Date().getFullYear()} Green Bangla Equipment. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;