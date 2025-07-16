import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Shield, 
  Clock, 
  Phone,
  CheckCircle,
  Star,
  Award,
  Users,
  TrendingUp,
  Heart
} from 'lucide-react';

const CTASection = () => {
  const guarantees = [
    {
      icon: Clock,
      title: "Quick Setup",
      description: "Get up and running in under 24 hours with our expert onboarding team"
    },
    {
      icon: Shield,
      title: "100% Secure",
      description: "Bank-grade encryption and ISO 27001 certified security protocols"
    }
  ];

  const benefits = [
    "Save 40+ hours per month on administrative tasks",
    "99.9% system uptime with 24/7 support",
    "Mobile apps for all stakeholders",
    "Free training and ongoing support"
  ];

  const testimonialStats = [
    { icon: Star, value: "4.9/5", label: "Customer Rating" },
    { icon: Users, value: "500+", label: "Schools Trust Us" },
    { icon: TrendingUp, value: "98%", label: "Customer Retention" },
    { icon: Heart, value: "24/7", label: "Support Available" }
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

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
              <Award className="h-4 w-4 mr-2" />
              Trusted by 500+ Schools
            </span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Your School Management?
            </span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of schools already saving time and improving efficiency with EduManage.
          </motion.p>
        </motion.div>

        {/* Guarantees Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto"
        >
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="text-center">
                <div className="inline-flex p-3 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <guarantee.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{guarantee.title}</h3>
                <p className="text-gray-600">{guarantee.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-10 text-white mb-12"
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.h3 variants={itemVariants} className="text-3xl lg:text-4xl font-bold mb-6">
              Start Your Free Trial Today
            </motion.h3>
            
            <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-4 mb-8 text-left">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{benefit}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <Link
                to="/register"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 text-xl font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Free 30-Day Trial
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <div className="text-blue-200 text-sm">
                No credit card required • Setup in 24 hours • Cancel anytime
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonial Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonialStats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center bg-white rounded-xl p-6 shadow-md border border-gray-100"
            >
              <div className="inline-flex p-3 bg-blue-100 rounded-full mb-4">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;