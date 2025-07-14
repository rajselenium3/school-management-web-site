import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">EduManage</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Comprehensive school management system designed to streamline
              educational institutions and enhance learning experiences.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Register School
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Student Management</li>
              <li>Teacher Portal</li>
              <li>Parent Dashboard</li>
              <li>Fee Management</li>
              <li>Attendance Tracking</li>
              <li>Grade Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@edumanage.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 EduManage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
