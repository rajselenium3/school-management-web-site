import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { Users, Award, Globe, Zap } from 'lucide-react';

const AboutPage = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description:
        'Our team consists of education technology experts with over 50 years of combined experience.',
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description:
        'Successfully serving 500+ schools with 99.9% uptime and exceptional customer satisfaction.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description:
        'Supporting educational institutions across multiple countries with localized solutions.',
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description:
        'Continuously innovating with the latest technology to enhance educational experiences.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About EduManage
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're on a mission to revolutionize education management by
                providing comprehensive, user-friendly solutions that empower
                schools to excel.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  To democratize access to world-class school management
                  technology, enabling educational institutions of all sizes to
                  streamline operations, enhance communication, and focus on
                  what matters most - student success.
                </p>
                <p className="text-lg text-gray-600">
                  We believe that every school deserves access to powerful,
                  intuitive tools that simplify administration and strengthen
                  the bonds between students, teachers, parents, and
                  administrators.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/8923668/pexels-photo-8923668.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Indian Teachers Using Educational Technology"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose EduManage?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex p-4 bg-blue-100 rounded-full mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Leadership Team
              </h2>
              <p className="text-lg text-gray-600">
                Meet the passionate educators and technologists behind
                EduManage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Dr. Rahul Sharma',
                  role: 'CEO & Founder',
                  image:
                    'https://images.pexels.com/photos/8923659/pexels-photo-8923659.jpeg?auto=compress&cs=tinysrgb&w=300',
                  bio: 'Former education administrator with 20+ years of experience in school management.',
                },
                {
                  name: 'Priya Patel',
                  role: 'CTO',
                  image:
                    'https://images.pexels.com/photos/8923662/pexels-photo-8923662.jpeg?auto=compress&cs=tinysrgb&w=300',
                  bio: 'Technology leader specializing in scalable educational platforms and user experience.',
                },
                {
                  name: 'Arjun Kumar',
                  role: 'Head of Product',
                  image:
                    'https://images.pexels.com/photos/8923664/pexels-photo-8923664.jpeg?auto=compress&cs=tinysrgb&w=300',
                  bio: 'Product strategist focused on creating intuitive solutions for educational institutions.',
                },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
