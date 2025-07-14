import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTASection = () => {
  const benefits = [
    'Setup in under 30 minutes',
    'Free training for your staff',
    '24/7 customer support',
    'Data migration assistance',
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your School?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join thousands of schools already using EduManage to streamline
            their operations and enhance educational outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-300 flex-shrink-0" />
                  <span className="text-white">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                Special Launch Offer
              </h3>
              <p className="text-blue-100">
                Get your first 3 months free when you register before the end of
                this month!
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Start Your Free Trial
              </h3>
              <p className="text-gray-600 mb-6">
                No credit card required. Full access to all features.
              </p>
              <Link
                to="/register"
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Register Your School Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <p className="text-sm text-gray-500 mt-4">
                14-day free trial • No setup fees • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
