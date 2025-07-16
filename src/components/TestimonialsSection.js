import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MapPin, Users, Award, TrendingUp, Heart, CheckCircle } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Principal',
      school: 'Delhi Public School, Mumbai',
      image: 'https://images.pexels.com/photos/8923671/pexels-photo-8923671.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'EduManage has completely transformed our school operations. We\'ve saved over 45 hours per month and our parent engagement has increased by 60%. The onboarding process was extremely streamlined, and we were up and running within a week of signing up.',
      rating: 5,
      students: '1,200+',
      location: 'Mumbai, Maharashtra'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Director',
      school: 'Little Angels Montessori School',
      image: 'https://images.pexels.com/photos/8923669/pexels-photo-8923669.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'The system is intuitive and simple to navigate while being powerful on the backend to support our needs. Our parents have had nothing but good things to say about how much they like the system. My rating for EduManage is 5/5.',
      rating: 5,
      students: '850+',
      location: 'Bangalore, Karnataka'
    },
    {
      name: 'Sunita Patel',
      role: 'Administrator',
      school: 'Bright Future International School',
      image: 'https://images.pexels.com/photos/8923667/pexels-photo-8923667.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'I used to have to run to the bank 3-4 times every month to deposit cheques. That\'s completely gone now. EduManage has automated our entire fee collection process and made my work life 98% better!',
      rating: 5,
      students: '2,100+',
      location: 'Pune, Maharashtra'
    },
    {
      name: 'Mohammad Ali',
      role: 'Vice Principal',
      school: 'Green Valley Academy',
      image: 'https://images.pexels.com/photos/8923665/pexels-photo-8923665.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'Before using EduManage we had numerous people collecting tuition and data. Once we moved to EduManage we were able to save money and time. As someone who was new to online management software, I found it easy to use.',
      rating: 5,
      students: '950+',
      location: 'Hyderabad, Telangana'
    },
    {
      name: 'Meera Reddy',
      role: 'Principal',
      school: 'St. Mary\'s Convent School',
      image: 'https://images.pexels.com/photos/8923666/pexels-photo-8923666.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'I am saving so much time now that EduManage has automated the entire process. Look no further – you have found the school management system you were looking for. The TUIO team was always quick to respond with help.',
      rating: 5,
      students: '1,800+',
      location: 'Chennai, Tamil Nadu'
    },
    {
      name: 'Amit Gupta',
      role: 'Director',
      school: 'Future Kids Academy',
      image: 'https://images.pexels.com/photos/8923668/pexels-photo-8923668.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'This is just the kind of management system I\'d always hoped for! EduManage has fulfilled all my requirements. The support team is incredible and they consider your suggestions to make their application even better.',
      rating: 5,
      students: '650+',
      location: 'Kolkata, West Bengal'
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
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
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
            <span className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">
              <Star className="h-4 w-4 mr-2" />
              500+ Schools Love Us
            </span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            See Why Clients
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Love EduManage
            </span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from educators who have transformed 
            their schools with our comprehensive management platform.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="inline-flex p-4 bg-gray-100 rounded-full mb-4">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 mb-20"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="h-8 w-8 text-blue-600 opacity-60" />
                <div className="flex space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                  <div className="text-blue-600 font-medium">{testimonial.role}</div>
                  <div className="text-gray-600 text-sm">{testimonial.school}</div>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <span className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {testimonial.location}
                    </span>
                    <span className="flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      {testimonial.students} students
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-12 text-white mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Educators Choose EduManage
            </h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Our commitment to excellence shows in every aspect of our service
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="flex-shrink-0 p-3 bg-white/20 rounded-lg">
                  <achievement.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-lg font-medium text-white">{achievement.text}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Join These Happy Educators?
          </h3>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Start your free trial today and see why 500+ schools trust EduManage 
            for their daily operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 text-lg font-bold rounded-xl hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Start Free Trial
              <Star className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-xl border-2 border-white/20 transition-all duration-300">
              Read More Reviews
              <Quote className="ml-2 h-5 w-5" />
            </button>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center items-center gap-8 text-green-100">
            <span>⭐ 4.9/5 Average Rating</span>
            <span>🏆 500+ Schools</span>
            <span>✅ No Credit Card Required</span>
            <span>📱 Setup in 24 Hours</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;