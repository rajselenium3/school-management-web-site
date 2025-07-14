import React from 'react';
import { useForm } from 'react-hook-form';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log('Contact form data:', data);
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    reset();
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'support@edumanage.com',
      description: 'Send us an email anytime',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 9876543210',
      description: 'Mon-Fri 9AM-6PM IST',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Bangalore, Karnataka, India',
      description: 'Our office location',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: '9:00 AM - 6:00 PM',
      description: 'Monday to Friday',
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
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about EduManage? We're here to help! Reach out to
              our friendly team and we'll get back to you as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex p-3 bg-blue-100 rounded-full mb-4">
                    <info.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-1">
                    {info.content}
                  </p>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </div>
              ))}
            </div>

            {/* Contact Form & Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        {...register('firstName', {
                          required: 'First name is required',
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        {...register('lastName', {
                          required: 'Last name is required',
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Invalid email address',
                        },
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      School Name
                    </label>
                    <input
                      type="text"
                      {...register('schoolName')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your school name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      {...register('subject', {
                        required: 'Subject is required',
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="demo">Request Demo</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="partnership">Partnership</option>
                    </select>
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register('message', {
                        required: 'Message is required',
                      })}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us how we can help you..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Additional Info */}
              <div className="space-y-8">
                <div className="bg-blue-50 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">
                    Need Immediate Help?
                  </h3>
                  <p className="text-blue-800 mb-4">
                    For urgent technical issues or billing questions, you can
                    reach us directly:
                  </p>
                  <div className="space-y-2">
                    <p className="text-blue-800">
                      <strong>Technical Support:</strong> support@edumanage.com
                    </p>
                    <p className="text-blue-800">
                      <strong>Sales Inquiries:</strong> sales@edumanage.com
                    </p>
                    <p className="text-blue-800">
                      <strong>Billing Questions:</strong> billing@edumanage.com
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-green-900 mb-4">
                    Book a Demo
                  </h3>
                  <p className="text-green-800 mb-4">
                    Want to see EduManage in action? Schedule a personalized
                    demo with our team.
                  </p>
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                    Schedule Demo
                  </button>
                </div>

                <div className="bg-gray-50 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Response Time
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• General inquiries: Within 24 hours</li>
                    <li>• Technical support: Within 4 hours</li>
                    <li>• Sales questions: Within 2 hours</li>
                    <li>• Urgent issues: Within 1 hour</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
