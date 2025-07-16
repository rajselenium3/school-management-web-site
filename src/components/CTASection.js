import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Shield, 
  Clock, 
  Phone,
  CheckCircle,
  Star,
  Zap,
  Award,
  Users,
  TrendingUp,
  Heart
} from 'lucide-react';

const CTASection = () => {
  const guarantees = [
    {
      icon: Clock,
      title: "90-Day Money Back Guarantee",
      description: "If you don't save time within 90 days, get a full refund + 3 months of free virtual assistant support"
    },
    {
      icon: Shield,
      title: "100% Data Security",
      description: "Bank-grade encryption and ISO 27001 certified security protocols protect your school's data"
    },
    {
      icon: Zap,
      title: "Same Day Setup",
      description: "Get up and running in under 24 hours with our expert onboarding team"
    }
  ];

  const benefits = [
    "Save 40+ hours per month on administrative tasks",
    "Reduce operational costs by 35%",
    "99.9% system uptime with 24/7 support",
    "Mobile apps for all stakeholders",
    "Unlimited users and data storage",
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
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
              <Award className="h-4 w-4 mr-2" />
              Satisfaction Guaranteed
            </span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Experience the Ultimate
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              EduManage Guarantee
            </span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            If you don't save within 90 days, you get a <strong>VIRTUAL ASSISTANT FREE</strong> for 3 months 
            (valued at ₹15,000/month). Plus, enjoy a personalized consultant to streamline your processes — all on us!
          </motion.p>

          <motion.div variants={itemVariants} className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-2xl max-w-4xl mx-auto mb-12">
            <div className="text-2xl font-bold mb-2">🎯 Our Promise to You</div>
            <p className="text-lg">
              From simplifying admissions to handling finances and administrative duties, 
              we ensure you spend more time where it matters most – <strong>providing quality education</strong>.
            </p>
          </motion.div>
        </motion.div>

        {/* Guarantees Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
            >
              <div className="text-center">
                <div className="inline-flex p-4 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <guarantee.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{guarantee.title}</h3>
                <p className="text-gray-600 leading-relaxed">{guarantee.description}</p>
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
          className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-12 text-white mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Benefits */}
            <div>
              <motion.h3 variants={itemVariants} className="text-3xl lg:text-4xl font-bold mb-6">
                Join 500+ Schools Already Saving Time & Money
              </motion.h3>
              
              <motion.div variants={itemVariants} className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span className="text-lg text-blue-100">{benefit}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-yellow-300 text-lg font-semibold mb-2">
                  🏆 Limited Time Offer
                </div>
                <div className="text-2xl font-bold text-white mb-2">
                  First 100 Schools Get 50% OFF
                </div>
                <div className="text-blue-200">
                  Plus free migration from your existing system
                </div>
              </motion.div>
            </div>

            {/* Right side - CTA */}
            <div className="text-center lg:text-left">
              <motion.div variants={itemVariants} className="mb-8">
                <div className="text-5xl font-bold text-white mb-2">
                  ₹4,999<span className="text-2xl text-blue-200 line-through ml-2">₹9,999</span>
                </div>
                <div className="text-xl text-blue-200">per month for unlimited users</div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <Link
                  to="/register"
                  className="group inline-flex items-center justify-center w-full px-8 py-4 bg-white text-blue-600 text-xl font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Your Free 30-Day Trial
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <button className="group inline-flex items-center justify-center w-full px-8 py-4 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <Phone className="mr-3 h-5 w-5" />
                  Book Free Demo Call
                </button>
                
                <div className="text-blue-200 text-sm">
                  ✅ No credit card required • ✅ Setup in 24 hours • ✅ Cancel anytime
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
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
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final Urgency Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white"
        >
          <div className="text-2xl font-bold mb-4">
            ⚡ Don't Miss Out! Only 47 Spots Left for 50% Discount
          </div>
          <p className="text-xl mb-6 text-orange-100">
            Join today and start saving time immediately. Our guarantee ensures you have nothing to lose.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 text-lg font-bold rounded-xl hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Claim Your Discount Now
              <Sparkles className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;