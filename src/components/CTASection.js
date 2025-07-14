import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Sparkles, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const CTASection = () => {
  const benefits = [
    { icon: Zap, text: 'Setup in under 30 minutes', color: 'text-yellow-600' },
    { icon: Shield, text: 'Free training for your staff', color: 'text-green-600' },
    { icon: CheckCircle, text: '24/7 customer support', color: 'text-blue-600' },
    { icon: Sparkles, text: 'Data migration assistance', color: 'text-purple-600' },
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
    <section className="relative py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-bounce-subtle"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white/10 rounded-full animate-bounce-subtle animation-delay-200"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-white/10 rounded-full animate-bounce-subtle animation-delay-400"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-white/10 rounded-full animate-bounce-subtle animation-delay-600"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-white mb-16"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              Limited Time Offer
            </div>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Transform
            <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Your School?
            </span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Join thousands of schools already using EduManage to streamline
            their operations and enhance educational outcomes with cutting-edge technology.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Benefits */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-4 group"
                >
                  <div className="flex-shrink-0 p-3 bg-white/20 backdrop-blur-sm rounded-2xl group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                    <benefit.icon className={`h-6 w-6 text-white`} />
                  </div>
                  <span className="text-white font-medium text-lg group-hover:text-blue-100 transition-colors duration-300">
                    {benefit.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                🎉 Special Launch Offer
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                Get your first 3 months free when you register before the end of
                this month! Plus, enjoy priority onboarding and dedicated support.
              </p>
            </motion.div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-10 shadow-2xl transform hover:scale-105 transition-all duration-500">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl opacity-60"></div>
              
              <div className="text-center">
                <div className="inline-flex p-4 bg-primary-100 rounded-3xl mb-6">
                  <Sparkles className="h-12 w-12 text-primary-600" />
                </div>
                
                <h3 className="text-3xl font-bold text-neutral-900 mb-4">
                  Start Your Free Trial
                </h3>
                
                <p className="text-neutral-600 mb-8 text-lg leading-relaxed">
                  No credit card required. Full access to all features.
                  Experience the difference in just minutes.
                </p>
                
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-lg font-bold rounded-2xl hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
                >
                  Register Your School Now
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-neutral-500">
                  <span className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                    14-day free trial
                  </span>
                  <span className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                    No setup fees
                  </span>
                  <span className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                    Cancel anytime
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;