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
  ArrowRight,
  Heart,
} from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '/#features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Demo', href: '#' },
      { name: 'API', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Press', href: '#' },
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact', href: '/contact' },
      { name: 'Status', href: '#' },
      { name: 'Updates', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="bg-neutral-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary-600/10 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-secondary-600/10 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Company info */}
            <motion.div variants={itemVariants} className="lg:col-span-4">
              <Link to="/" className="flex items-center space-x-3 mb-6 group">
                <div className="relative">
                  <GraduationCap className="h-10 w-10 text-primary-400 group-hover:text-primary-300 transition-colors duration-200" />
                  <div className="absolute -inset-2 bg-primary-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </div>
                <span className="text-2xl font-bold group-hover:text-primary-300 transition-colors duration-200">
                  EduManage
                </span>
              </Link>
              
              <p className="text-neutral-400 text-lg leading-relaxed mb-6 max-w-md">
                Comprehensive school management system designed to streamline
                educational institutions and enhance learning experiences worldwide.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    variants={itemVariants}
                    className={`p-3 bg-neutral-800 rounded-xl ${social.color} transition-all duration-300 hover:scale-110 hover:bg-neutral-700`}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links sections */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <motion.div key={category} variants={itemVariants}>
                  <h3 className="text-lg font-bold text-white mb-6 capitalize">
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.href}
                          className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center group"
                        >
                          {link.name}
                          <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Newsletter signup */}
          <motion.div
            variants={itemVariants}
            className="mt-16 p-8 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 rounded-3xl border border-neutral-700"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Stay Updated
                </h3>
                <p className="text-neutral-300">
                  Get the latest updates, tips, and insights delivered to your inbox.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                />
                <button className="btn-primary whitespace-nowrap">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Mail, text: 'support@edumanage.com', href: 'mailto:support@edumanage.com' },
              { icon: Phone, text: '+91 9876543210', href: 'tel:+919876543210' },
              { icon: MapPin, text: 'Bangalore, Karnataka, India', href: '#' },
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className="flex items-center space-x-3 text-neutral-400 hover:text-white transition-colors duration-200 group"
              >
                <div className="p-2 bg-neutral-800 rounded-lg group-hover:bg-neutral-700 transition-colors duration-200">
                  <contact.icon className="h-5 w-5" />
                </div>
                <span>{contact.text}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-neutral-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-center md:text-left">
              &copy; 2025 EduManage. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-neutral-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for educators worldwide</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;