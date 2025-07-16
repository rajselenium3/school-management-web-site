import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
  Star,
  Shield,
  Award,
  Users,
  BookOpen,
  Calendar,
  DollarSign,
  MessageSquare,
  BarChart3
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Platform Features',
      links: [
        { name: 'Student Management System', path: '/features/student-management', icon: Users },
        { name: 'Fee Management & Payment', path: '/features/fee-management', icon: DollarSign },
        { name: 'Attendance & Timetable', path: '/features/attendance', icon: Calendar },
        { name: 'Academic Management', path: '/features/academic', icon: BookOpen },
        { name: 'Communication Hub', path: '/features/communication', icon: MessageSquare },
        { name: 'Analytics & Reports', path: '/features/analytics', icon: BarChart3 }
      ]
    },
    {
      title: 'Who We Serve',
      links: [
        { name: 'Private Schools', path: '/schools/private' },
        { name: 'CBSE Schools', path: '/schools/cbse' },
        { name: 'ICSE Schools', path: '/schools/icse' },
        { name: 'International Schools', path: '/schools/international' },
        { name: 'Montessori Schools', path: '/schools/montessori' },
        { name: 'Coaching Centers', path: '/schools/coaching' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Implementation Guide', path: '/resources/guide' },
        { name: 'Help Center', path: '/help' },
        { name: 'Video Tutorials', path: '/resources/videos' },
        { name: 'API Documentation', path: '/developers' },
        { name: 'Download Brochure', path: '/brochure' },
        { name: 'Case Studies', path: '/case-studies' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Careers', path: '/careers' },
        { name: 'Press & Media', path: '/press' },
        { name: 'Partner Program', path: '/partners' },
        { name: 'Affiliate Program', path: '/affiliates' },
        { name: 'Contact Us', path: '/contact' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/edumanage' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/edumanage' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/edumanage' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/edumanage' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/edumanage' }
  ];

  const quickStats = [
    { icon: Star, value: '4.9/5', label: 'Customer Rating' },
    { icon: Users, value: '500+', label: 'Schools' },
    { icon: Shield, value: '99.9%', label: 'Uptime' },
    { icon: Award, value: '24/7', label: 'Support' }
  ];

  const contactInfo = [
    { icon: Phone, text: '+91 1800-123-4567', label: 'Call Us' },
    { icon: Mail, text: 'support@edumanage.com', label: 'Email Us' },
    { icon: MapPin, text: 'Mumbai, Maharashtra, India', label: 'Visit Us' },
    { icon: Clock, text: '9:00 AM - 9:00 PM (Mon-Fri)', label: 'Business Hours' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Stay Updated with EduManage
              </h3>
              <p className="text-gray-300 text-lg">
                Get the latest updates on new features, educational insights, and industry trends.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-xl">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  EduManage
                </span>
                <div className="text-sm text-gray-400">School Management System</div>
              </div>
            </Link>

            <p className="text-gray-300 mb-6 leading-relaxed">
              The most comprehensive school management platform trusted by 500+ educational institutions. 
              Save time, reduce costs, and improve educational outcomes with our innovative solution.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {quickStats.map((stat, index) => (
                <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="text-lg font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group"
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold text-white mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                    >
                      {link.icon && (
                        <link.icon className="h-4 w-4 mr-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((contact, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <contact.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">{contact.label}</div>
                  <div className="text-white font-medium">{contact.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Trust Badges */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center mb-8">
            <h4 className="text-lg font-semibold text-white mb-4">Trusted & Certified</h4>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="bg-white/10 px-6 py-3 rounded-lg">
                <span className="text-white font-semibold">ISO 27001</span>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">
                <span className="text-white font-semibold">GDPR Compliant</span>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">
                <span className="text-white font-semibold">SOC 2 Type II</span>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">
                <span className="text-white font-semibold">PCI DSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} EduManage. All rights reserved. | Made with ❤️ for Indian Schools
            </div>
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Cookie Policy
              </Link>
              <Link to="/security" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Security
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;