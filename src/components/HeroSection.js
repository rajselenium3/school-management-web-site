import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Sparkles, Users, BookOpen, Award, Clock, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const stats = [
    { icon: Users, value: '50K+', label: 'Happy Students', color: 'text-blue-600' },
    { icon: BookOpen, value: '500+', label: 'Partner Schools', color: 'text-green-600' },
    { icon: Award, value: '99.9%', label: 'Uptime', color: 'text-purple-600' },
  ];

  const benefits = [
    { icon: Clock, text: 'Save 40+ hours/month' },
    { icon: Shield, text: '100% Secure & Reliable' },
    { icon: Zap, text: 'Instant Setup' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-green-200 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-purple-200 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4 mr-2" />
                #1 School Management Platform
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Save{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  40+ hours
                </span>{' '}
                per month with our
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                  All-in-One School Platform
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Reduce administrative costs and improve cash flows through automation. 
                Now you can focus on providing quality education and nurturing future leaders.
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200">
                    <benefit.icon className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/register"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Free Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <button className="group inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 text-lg font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative">
              {/* Main Dashboard Mockup */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-1 transition-transform duration-500">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-12 flex items-center px-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center text-white font-medium">EduManage Dashboard</div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-blue-600 text-2xl font-bold">1,247</div>
                      <div className="text-gray-600 text-sm">Active Students</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-green-600 text-2xl font-bold">89</div>
                      <div className="text-gray-600 text-sm">Teachers</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Users className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Student Management</div>
                          <div className="text-sm text-gray-500">Track progress & attendance</div>
                        </div>
                      </div>
                      <div className="text-green-600 font-bold">98%</div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <BookOpen className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Fee Collection</div>
                          <div className="text-sm text-gray-500">Automated payments</div>
                        </div>
                      </div>
                      <div className="text-green-600 font-bold">₹2.4L</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-xl p-4 transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                <div className="text-green-600 text-xl font-bold">100%</div>
                <div className="text-gray-600 text-sm">Satisfaction</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 transform rotate-12 hover:rotate-0 transition-transform duration-500">
                <div className="text-purple-600 text-xl font-bold">24/7</div>
                <div className="text-gray-600 text-sm">Support</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          variants={itemVariants}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 text-lg mb-8">Trusted by 500+ educational institutions worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="h-12 w-24 bg-gray-300 rounded flex items-center justify-center text-gray-600 font-semibold">CBSE</div>
            <div className="h-12 w-24 bg-gray-300 rounded flex items-center justify-center text-gray-600 font-semibold">ICSE</div>
            <div className="h-12 w-24 bg-gray-300 rounded flex items-center justify-center text-gray-600 font-semibold">IB</div>
            <div className="h-12 w-24 bg-gray-300 rounded flex items-center justify-center text-gray-600 font-semibold">STATE</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;