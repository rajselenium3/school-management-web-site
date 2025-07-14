import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import HeroSection from '../components/HeroSection.js';
import FeaturesSection from '../components/FeaturesSection.js';
import TestimonialsSection from '../components/TestimonialsSection.js';
import CTASection from '../components/CTASection.js';
import { motion } from 'framer-motion';
import { Users, BookOpen, Award, TrendingUp } from 'lucide-react';

const HomePage = () => {
  const schoolShowcase = [
    {
      image: "https://images.pexels.com/photos/8923665/pexels-photo-8923665.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Modern Classrooms",
      description: "Technology-enabled learning environments"
    },
    {
      image: "https://images.pexels.com/photos/8923669/pexels-photo-8923669.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Dedicated Teachers",
      description: "Passionate educators shaping young minds"
    },
    {
      image: "https://images.pexels.com/photos/8923667/pexels-photo-8923667.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Student Success",
      description: "Celebrating achievements and milestones"
    },
    {
      image: "https://images.pexels.com/photos/8923666/pexels-photo-8923666.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Interactive Learning",
      description: "Engaging educational experiences"
    }
  ];

  const stats = [
    { icon: Users, value: '50,000+', label: 'Students Managed', color: 'text-primary-600' },
    { icon: BookOpen, value: '500+', label: 'Schools Connected', color: 'text-secondary-600' },
    { icon: Award, value: '10,000+', label: 'Teachers Empowered', color: 'text-accent-600' },
    { icon: TrendingUp, value: '99.9%', label: 'System Uptime', color: 'text-orange-600' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        
        {/* Indian Schools Showcase */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                Empowering
                <span className="text-gradient"> Indian Education</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                From traditional values to modern technology, we're helping Indian schools 
                create the perfect blend of heritage and innovation in education.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {schoolShowcase.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group card-hover overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex p-4 bg-white rounded-2xl shadow-soft mb-4 group-hover:shadow-medium transition-all duration-300 group-hover:scale-110">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <FeaturesSection />
        <TestimonialsSection />
        
        {/* Quick Access Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Quick Access
              </h2>
              <p className="text-lg text-neutral-600">
                Already have an account? Access your dashboard or start your journey with us.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card p-8 text-center hover:shadow-large transition-all duration-300"
              >
                <div className="inline-flex p-4 bg-primary-100 rounded-3xl mb-6">
                  <Users className="h-12 w-12 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  Existing Users
                </h3>
                <p className="text-neutral-600 mb-6">
                  Access your school management dashboard and continue managing your institution.
                </p>
                <Link to="/login" className="btn-primary w-full">
                  Login to Dashboard
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="card p-8 text-center hover:shadow-large transition-all duration-300"
              >
                <div className="inline-flex p-4 bg-secondary-100 rounded-3xl mb-6">
                  <BookOpen className="h-12 w-12 text-secondary-600" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  New Schools
                </h3>
                <p className="text-neutral-600 mb-6">
                  Start your digital transformation journey with our comprehensive school management system.
                </p>
                <Link to="/register" className="btn-secondary w-full">
                  Register Your School
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
