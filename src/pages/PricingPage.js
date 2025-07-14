import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { CheckCircle, Star } from 'lucide-react';

const PricingPage = () => {
  const plans = [
    {
      name: 'Basic',
      price: '₹999',
      period: 'per month',
      description: 'Perfect for small schools starting their digital journey',
      students: 'Up to 200 students',
      features: [
        'Student Management System',
        'Basic Attendance Tracking',
        'Grade Management',
        'Parent Communication',
        'Basic Reports',
        'Email Support',
        'Mobile App Access',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Standard',
      price: '₹1,999',
      period: 'per month',
      description: 'Most popular choice for growing educational institutions',
      students: 'Up to 500 students',
      features: [
        'All Basic Features',
        'Advanced Attendance System',
        'Fee Management & Online Payments',
        'SMS Integration',
        'Timetable Management',
        'Advanced Analytics',
        'Parent Portal Access',
        'Priority Support',
        'Custom Reports',
      ],
      cta: 'Get Started',
      popular: true,
    },
    {
      name: 'Premium',
      price: '₹2,999',
      period: 'per month',
      description: 'Comprehensive solution for large institutions',
      students: 'Unlimited students',
      features: [
        'All Standard Features',
        'Multi-Campus Support',
        'Advanced Role Management',
        'API Access & Integrations',
        'Custom Branding',
        'Advanced Security Features',
        'Dedicated Account Manager',
        '24/7 Phone Support',
        'On-site Training',
        'Data Migration Assistance',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const faqs = [
    {
      question: 'Is there a free trial available?',
      answer:
        'Yes! We offer a 14-day free trial for all our plans. No credit card required to get started.',
    },
    {
      question: 'Can I change plans later?',
      answer:
        'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately.',
    },
    {
      question: 'What kind of support do you provide?',
      answer:
        'We provide email support for Basic plans, priority support for Standard plans, and 24/7 phone support for Premium plans.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Yes, we use enterprise-grade security measures including SSL encryption, regular backups, and secure data centers.',
    },
    {
      question: 'Do you offer discounts for annual payments?',
      answer:
        'Yes, we offer a 20% discount when you pay annually instead of monthly.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your school. All plans include core
              features with no hidden fees. Start with a 14-day free trial.
            </p>
            <div className="inline-flex bg-white rounded-lg p-1 shadow-sm">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium">
                Monthly
              </button>
              <button className="px-6 py-2 text-gray-600 rounded-md font-medium">
                Annual{' '}
                <span className="text-green-600 text-sm">(Save 20%)</span>
              </button>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-lg border-2 ${
                    plan.popular
                      ? 'border-blue-500 ring-4 ring-blue-100'
                      : 'border-gray-200'
                  } p-8 transition-all duration-300 hover:shadow-xl`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center">
                        <Star className="h-4 w-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-sm text-blue-600 font-medium">
                      {plan.students}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/register"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors block ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Comparison */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Schools Choose EduManage
              </h2>
              <p className="text-lg text-gray-600">
                Join hundreds of schools that have transformed their operations
                with our platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">
                    99.9%
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Uptime
                </h3>
                <p className="text-gray-600">
                  Reliable platform you can count on every day.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">
                    500+
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Schools
                </h3>
                <p className="text-gray-600">
                  Trusted by educational institutions worldwide.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">
                    24/7
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Support
                </h3>
                <p className="text-gray-600">
                  Round-the-clock assistance when you need it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Get answers to common questions about our pricing and features.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your School?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start your free 14-day trial today. No credit card required.
            </p>
            <Link
              to="/register"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Started Free
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;
