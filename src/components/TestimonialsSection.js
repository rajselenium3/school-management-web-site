import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MapPin, Users, Award, TrendingUp, Heart, CheckCircle } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Principal',
      school: 'Delhi Public School, Mumbai',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c647?auto=format&fit=crop&w=300&q=80',
      content: 'EduManage has completely transformed our school operations. We\'ve saved over 45 hours per month and our parent engagement has increased by 60%. The system is intuitive and powerful.',
      rating: 5,
      students: '1,200+',
      location: 'Mumbai, Maharashtra'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Director',
      school: 'Little Angels Montessori School',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
      content: 'The system is intuitive and simple to navigate while being powerful on the backend. Our parents love how easy it is to use. My rating for EduManage is 5/5.',
      rating: 5,
      students: '850+',
      location: 'Bangalore, Karnataka'
    },
    {
      name: 'Sunita Patel',
      role: 'Administrator',
      school: 'Bright Future International School',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80',
      content: 'EduManage has automated our entire fee collection process and made my work life 98% better! No more running to the bank multiple times a month.',
      rating: 5,
      students: '2,100+',
      location: 'Pune, Maharashtra'
    }
  ];

  const stats = [
    { icon: Star, value: '4.9/5', label: 'Average Rating', color: 'text-yellow-500' },
    { icon: Users, value: '50,000+', label: 'Happy Students', color: 'text-blue-500' },
    { icon: Award, value: '500+', label: 'Schools Trust Us', color: 'text-green-500' },
    { icon: TrendingUp, value: '98%', label: 'Customer Retention', color: 'text-purple-500' }
  ];

  const achievements = [
    { icon: Heart, text: '99% Happiness Score for Customer Support' },
    { icon: CheckCircle, text: 'Same Day Signup & Onboarding Available' },
    { icon: Award, text: 'Industry Leading 99.9% System Uptime' },
    { icon: TrendingUp, text: 'Schools Save 40+ Hours Monthly on Average' }
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

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
            <span className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">
              <Star className="h-4 w-4 mr-2" />
              500+ Schools Love Us
            </span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            See Why Clients
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Love EduManage
            </span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from educators who have transformed their schools with our management platform.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-soft group-hover:shadow-medium transition-all duration-300 group-hover:-translate-y-1">
                <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-4`} />
                <div className={`text-2xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="h-12 w-12 text-blue-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {renderStars(testimonial.rating)}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 mb-8 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.school}</div>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <MapPin className="h-3 w-3 mr-1" />
                    {testimonial.location} • {testimonial.students} students
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-gray-900 mb-8">
            Why We're Different
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center justify-center space-x-3 p-4 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <achievement.icon className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm text-gray-700 font-medium text-left">
                  {achievement.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;