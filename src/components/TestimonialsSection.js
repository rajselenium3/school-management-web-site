import React from 'react';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Principal, Delhi Public School',
      image:
        'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=200',
      content:
        'EduManage has revolutionized how we manage our school. The parent communication features are exceptional, and our administrative efficiency has improved by 70%. The platform is intuitive and our staff adapted quickly.',
      rating: 5,
      highlight: '70% efficiency improvement',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Director, Greenwood International',
      image:
        'https://images.pexels.com/photos/5212319/pexels-photo-5212319.jpeg?auto=compress&cs=tinysrgb&w=200',
      content:
        "The fee management system is outstanding. We've reduced manual work significantly and parents love the convenience of online payments and instant receipts. The analytics help us make better financial decisions.",
      rating: 5,
      highlight: 'Reduced manual work by 80%',
    },
    {
      name: 'Ms. Anjali Patel',
      role: 'Academic Coordinator, Lotus Academy',
      image:
        'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=200',
      content:
        'The attendance tracking and grade management features are intuitive and comprehensive. Our teachers can focus more on teaching rather than paperwork. The mobile app is a game-changer for busy educators.',
      rating: 5,
      highlight: 'Teachers save 5 hours/week',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="py-24 gradient-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary-200 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-secondary-200 rounded-full opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-primary-700 text-sm font-medium mb-6">
            <Star className="h-4 w-4 mr-2 fill-current" />
            Trusted by Educators
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Loved by
            <span className="text-gradient"> Leading Schools</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of schools that have transformed their operations and
            enhanced their educational outcomes with our platform.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="card p-8 h-full hover:shadow-large transition-all duration-500 group-hover:-translate-y-2">
                {/* Quote icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform duration-300">
                  <Quote className="h-6 w-6 text-white" />
                </div>

                {/* Rating */}
                <div className="flex mb-6 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-neutral-700 leading-relaxed mb-6 text-lg">
                  "{testimonial.content}"
                </blockquote>

                {/* Highlight */}
                <div className="inline-flex items-center px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-6">
                  {testimonial.highlight}
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-2xl object-cover mr-4 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-neutral-600 text-sm font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-200 rounded-2xl transition-colors duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center items-center space-x-4 mt-12"
        >
          <button className="p-3 bg-white rounded-full shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-110">
            <ArrowLeft className="h-5 w-5 text-neutral-600" />
          </button>
          <div className="flex space-x-2">
            {[0, 1, 2].map((dot) => (
              <div
                key={dot}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  dot === 0 ? 'bg-primary-600' : 'bg-neutral-300'
                }`}
              ></div>
            ))}
          </div>
          <button className="p-3 bg-white rounded-full shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-110">
            <ArrowRight className="h-5 w-5 text-neutral-600" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;