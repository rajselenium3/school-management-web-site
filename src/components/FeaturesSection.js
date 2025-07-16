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
      description: 'Complete student lifecycle management with digital profiles, progress tracking, and automated reporting.',
      benefits: ['Digital student profiles', 'Progress tracking', 'Automated reports', 'Parent communication'],
      color: 'blue',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: DollarSign,
      title: 'Fee Management & Payment',
      description: 'Streamlined fee collection with multiple payment options and automated invoicing.',
      benefits: ['Multiple payment methods', 'Automated invoicing', 'Payment reminders', 'Financial analytics'],
      color: 'green',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Calendar,
      title: 'Attendance & Timetable',
      description: 'Smart attendance tracking with real-time monitoring and automated notifications.',
      benefits: ['Real-time tracking', 'Parent notifications', 'Schedule management', 'Digital records'],
      color: 'purple',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reports',
      description: 'Powerful analytics dashboard with performance insights and data-driven decision making tools.',
      benefits: ['Custom dashboards', 'Performance insights', 'Automated reports', 'Data visualization'],
      color: 'red',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const additionalFeatures = [
    { icon: Shield, title: 'Security & Privacy', description: 'Bank-grade security with encrypted data storage' },
    { icon: Clock, title: '24/7 Support', description: 'Round-the-clock customer support and assistance' },
    { icon: Smartphone, title: 'Mobile Apps', description: 'iOS and Android apps for all user types' },
    { icon: Zap, title: 'Real-time Updates', description: 'Instant notifications and live data synchronization' }
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
      red: 'from-red-500 to-red-600 bg-red-50 text-red-600 border-red-200'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
              ✨ Comprehensive Features
            </span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Manage Your School
            </span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Streamline your school operations with our comprehensive suite of management tools designed specifically for educational institutions.
          </motion.p>
        </motion.div>

        {/* Core Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {coreFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className={`absolute top-6 left-6 p-3 rounded-2xl bg-white/90 backdrop-blur-sm ${getColorClasses(feature.color).split(' ')[2]} border ${getColorClasses(feature.color).split(' ')[4]}`}>
                  <feature.icon className={`h-6 w-6 ${getColorClasses(feature.color).split(' ')[2]}`} />
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <div className={`w-1.5 h-1.5 rounded-full ${getColorClasses(feature.color).split(' ')[2].replace('text', 'bg')} mr-3 flex-shrink-0`}></div>
                      {benefit}
                    </div>
                  ))}
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
          className="mb-16"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-center text-gray-900 mb-10">
            Plus Many More Features
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex p-3 bg-gray-100 rounded-2xl mb-4">
                  <feature.icon className="h-6 w-6 text-gray-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
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
          className="text-center"
        >
          <motion.h3 variants={itemVariants} className="text-3xl font-bold text-gray-900 mb-12">
            Why Schools Choose EduManage
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 bg-white rounded-3xl shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex p-4 bg-blue-50 rounded-3xl mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                  <item.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{item.stats}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;