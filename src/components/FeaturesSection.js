import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  BookOpen, 
  GraduationCap, 
  Calendar, 
  DollarSign, 
  MessageSquare,
  BarChart3,
  Shield,
  Clock,
  Smartphone,
  Download,
  Zap,
  Target,
  Award,
  Heart,
  TrendingUp
} from 'lucide-react';

const FeaturesSection = () => {
  const coreFeatures = [
    {
      icon: Users,
      title: 'Student Management System',
      description: 'Complete student lifecycle management from admission to graduation with digital profiles, progress tracking, and automated reporting.',
      benefits: ['Digital student profiles', 'Progress tracking', 'Automated reports', 'Parent communication'],
      color: 'blue',
      image: 'https://images.pexels.com/photos/8923665/pexels-photo-8923665.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: DollarSign,
      title: 'Fee Management & Payment',
      description: 'Streamlined fee collection with multiple payment options, automated invoicing, and real-time financial reporting.',
      benefits: ['Multiple payment methods', 'Automated invoicing', 'Payment reminders', 'Financial analytics'],
      color: 'green',
      image: 'https://images.pexels.com/photos/8923667/pexels-photo-8923667.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Calendar,
      title: 'Attendance & Timetable',
      description: 'Smart attendance tracking with biometric integration, timetable management, and automated parent notifications.',
      benefits: ['Biometric integration', 'Real-time tracking', 'Parent notifications', 'Schedule management'],
      color: 'purple',
      image: 'https://images.pexels.com/photos/8923669/pexels-photo-8923669.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: BookOpen,
      title: 'Academic Management',
      description: 'Comprehensive academic tracking including assignments, exams, grades, and performance analytics.',
      benefits: ['Grade management', 'Assignment tracking', 'Exam scheduling', 'Performance analytics'],
      color: 'indigo',
      image: 'https://images.pexels.com/photos/8923671/pexels-photo-8923671.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: MessageSquare,
      title: 'Communication Hub',
      description: 'Unified communication platform connecting teachers, students, and parents with messaging, announcements, and notifications.',
      benefits: ['Multi-channel messaging', 'Bulk announcements', 'Parent-teacher chat', 'Emergency alerts'],
      color: 'orange',
      image: 'https://images.pexels.com/photos/8923666/pexels-photo-8923666.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reports',
      description: 'Powerful analytics dashboard with custom reports, performance insights, and data-driven decision making tools.',
      benefits: ['Custom dashboards', 'Performance insights', 'Automated reports', 'Data visualization'],
      color: 'red',
      image: 'https://images.pexels.com/photos/8923668/pexels-photo-8923668.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const additionalFeatures = [
    { icon: Shield, title: 'Security & Privacy', description: 'Bank-grade security with encrypted data storage' },
    { icon: Clock, title: '24/7 Support', description: 'Round-the-clock customer support and assistance' },
    { icon: Smartphone, title: 'Mobile Apps', description: 'iOS and Android apps for all user types' },
    { icon: Download, title: 'Data Export', description: 'Easy data import/export and backup solutions' },
    { icon: Zap, title: 'Real-time Updates', description: 'Instant notifications and live data synchronization' },
    { icon: Target, title: 'Customizable', description: 'Flexible system that adapts to your school needs' }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Industry Leader',
      description: 'Trusted by 500+ schools across India with 99.9% uptime guarantee',
      stats: '500+ Schools'
    },
    {
      icon: Heart,
      title: 'Customer Satisfaction',
      description: 'Rated 4.9/5 by educators with dedicated success managers',
      stats: '4.9/5 Rating'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Schools save 40+ hours monthly and reduce admin costs by 35%',
      stats: '40+ Hours Saved'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 bg-blue-50 text-blue-600 border-blue-200',
      green: 'from-green-500 to-green-600 bg-green-50 text-green-600 border-green-200',
      purple: 'from-purple-500 to-purple-600 bg-purple-50 text-purple-600 border-purple-200',
      indigo: 'from-indigo-500 to-indigo-600 bg-indigo-50 text-indigo-600 border-indigo-200',
      orange: 'from-orange-500 to-orange-600 bg-orange-50 text-orange-600 border-orange-200',
      red: 'from-red-500 to-red-600 bg-red-50 text-red-600 border-red-200'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
              ✨ Complete Solution
            </span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            All Your School Management
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Needs in One Platform
            </span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
            From student enrollment to fee collection, attendance to performance analytics - 
            manage everything seamlessly with our comprehensive school management system.
          </motion.p>
        </motion.div>

        {/* Core Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 mb-24"
        >
          {coreFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${getColorClasses(feature.color).split(' ')[0]} ${getColorClasses(feature.color).split(' ')[1]}`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full bg-${feature.color}-500`}></div>
                      <span className="text-sm text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="relative h-48 rounded-xl overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.h3 variants={itemVariants} className="text-3xl font-bold text-center text-gray-900 mb-12">
            Plus Many More Features
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <feature.icon className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-12 text-white"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Why 500+ Schools Choose EduManage
            </h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join thousands of educators who trust our platform for their daily operations
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 group-hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex p-4 bg-white/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{item.stats}</div>
                  <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
                  <p className="text-blue-100">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your School?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join 500+ schools already using EduManage to save time, reduce costs, and improve educational outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Start Free Trial
              <Zap className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 text-lg font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300">
              Book a Demo
              <Calendar className="ml-2 h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;