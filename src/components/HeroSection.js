import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Sparkles, Users, BookOpen, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Schools', color: 'text-primary-600' },
    { icon: BookOpen, value: '50K+', label: 'Students', color: 'text-secondary-600' },
    { icon: Award, value: '10K+', label: 'Teachers', color: 'text-accent-600' },
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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-60 animate-bounce-subtle"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-secondary-200 rounded-full opacity-60 animate-bounce-subtle animation-delay-200"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-accent-200 rounded-full opacity-60 animate-bounce-subtle animation-delay-400"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium">
                <Sparkles className="h-4 w-4 mr-2" />
                Trusted by 500+ Schools Worldwide
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Transform Your
                <span className="text-gradient block">School</span>
                with Smart Management
              </h1>
              
              <p className="text-xl text-neutral-600 max-w-2xl leading-relaxed">
                Comprehensive school management system that connects students,
                teachers, parents, and administrators in one powerful, intuitive platform.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link to="/register" className="btn-primary text-lg px-8 py-4">
                Start Your School
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/login" className="btn-secondary text-lg px-8 py-4">
                <Play className="mr-2 h-5 w-5" />
                Login to Dashboard
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center group"
                >
                  <div className={`inline-flex p-3 rounded-2xl bg-white shadow-soft mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Hero Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative z-10">
              <div className="card p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/8923671/pexels-photo-8923671.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Indian School Students in Classroom"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
            
            {/* Floating cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: -5 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-large"
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-secondary-500 rounded-full"></div>
                <span className="text-sm font-medium text-neutral-700">
                  Attendance: 98.5%
                </span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
              animate={{ opacity: 1, scale: 1, rotate: 5 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-large"
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                <span className="text-sm font-medium text-neutral-700">
                  New Messages: 12
                </span>
              </div>
            </motion.div>
            
            {/* Background decoration */}
            <div className="absolute -inset-6 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-4xl opacity-20 -z-10"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;