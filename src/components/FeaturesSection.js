import React from 'react';
import {
  Users,
  BookOpen,
  Calendar,
  CreditCard,
  MessageSquare,
  BarChart3,
  Shield,
  Clock,
  Award,
} from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: 'User Management',
      description:
        'Manage students, teachers, parents, and staff with advanced role-based access control.',
      color: 'bg-primary-100 text-primary-600',
      hoverColor: 'group-hover:bg-primary-600 group-hover:text-white',
    },
    {
      icon: BookOpen,
      title: 'Academic Management',
      description:
        'Handle courses, subjects, timetables, and academic calendar with intelligent automation.',
      color: 'bg-secondary-100 text-secondary-600',
      hoverColor: 'group-hover:bg-secondary-600 group-hover:text-white',
    },
    {
      icon: Calendar,
      title: 'Attendance Tracking',
      description:
        'Real-time attendance monitoring with automated notifications and detailed analytics.',
      color: 'bg-accent-100 text-accent-600',
      hoverColor: 'group-hover:bg-accent-600 group-hover:text-white',
    },
    {
      icon: CreditCard,
      title: 'Fee Management',
      description:
        'Streamlined online fee collection, payment tracking, and automated receipt generation.',
      color: 'bg-orange-100 text-orange-600',
      hoverColor: 'group-hover:bg-orange-600 group-hover:text-white',
    },
    {
      icon: MessageSquare,
      title: 'Communication Hub',
      description:
        'Integrated messaging system for seamless school-wide communication and collaboration.',
      color: 'bg-red-100 text-red-600',
      hoverColor: 'group-hover:bg-red-600 group-hover:text-white',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reports',
      description:
        'Comprehensive reports and advanced analytics for data-driven decision making.',
      color: 'bg-indigo-100 text-indigo-600',
      hoverColor: 'group-hover:bg-indigo-600 group-hover:text-white',
    },
    {
      icon: Shield,
      title: 'Data Security',
      description:
        'Enterprise-grade security with encrypted data and multi-layer access controls.',
      color: 'bg-neutral-100 text-neutral-600',
      hoverColor: 'group-hover:bg-neutral-600 group-hover:text-white',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description:
        'Round-the-clock technical support and dedicated customer service assistance.',
      color: 'bg-teal-100 text-teal-600',
      hoverColor: 'group-hover:bg-teal-600 group-hover:text-white',
    },
    {
      icon: Award,
      title: 'Grade Management',
      description:
        'Complete grade book management with progress tracking and performance analytics.',
      color: 'bg-yellow-100 text-yellow-600',
      hoverColor: 'group-hover:bg-yellow-600 group-hover:text-white',
    },
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
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary-100 rounded-full opacity-60"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-secondary-100 rounded-full opacity-60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-6">
            <Award className="h-4 w-4 mr-2" />
            Comprehensive Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Everything You Need to
            <span className="text-gradient block">Manage Your School</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive platform provides all the tools and features
            needed to efficiently manage every aspect of your educational
            institution with modern technology.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group card-hover p-8 cursor-pointer"
            >
              <div className="relative mb-6">
                <div
                  className={`inline-flex p-4 rounded-2xl ${feature.color} ${feature.hoverColor} transition-all duration-300 transform group-hover:scale-110`}
                >
                  <feature.icon className="h-8 w-8 transition-colors duration-300" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Hover effect border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-200 rounded-2xl transition-colors duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4">
              <Link to="/register" className="btn-primary">
            <a href="/register" className="btn-primary">
              </Link>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;