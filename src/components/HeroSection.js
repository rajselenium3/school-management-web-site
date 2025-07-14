import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your
                <span className="text-blue-600"> School</span> with
                <span className="text-green-600"> Smart</span> Management
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                Comprehensive school management system that connects students,
                teachers, parents, and administrators in one powerful platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Your School
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 text-lg font-semibold rounded-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Schools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">50K+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">10K+</div>
                <div className="text-sm text-gray-600">Teachers</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="School Management Dashboard"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-r from-blue-200 to-purple-200 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
