import React from 'react';
import {
  Users,
  BookOpen,
  Calendar,
  CreditCard,
  MessageSquare,
  BarChart3,
  Shield,
  Clock,
  Award,
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: 'User Management',
      description:
        'Manage students, teachers, parents, and staff with role-based access control.',
      color: 'text-blue-600',
    },
    {
      icon: BookOpen,
      title: 'Academic Management',
      description:
        'Handle courses, subjects, timetables, and academic calendar seamlessly.',
      color: 'text-green-600',
    },
    {
      icon: Calendar,
      title: 'Attendance Tracking',
      description:
        'Real-time attendance monitoring with automated notifications to parents.',
      color: 'text-purple-600',
    },
    {
      icon: CreditCard,
      title: 'Fee Management',
      description:
        'Online fee collection, payment tracking, and automated receipt generation.',
      color: 'text-orange-600',
    },
    {
      icon: MessageSquare,
      title: 'Communication Hub',
      description:
        'Integrated messaging system for seamless school-wide communication.',
      color: 'text-red-600',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reports',
      description:
        'Comprehensive reports and analytics for data-driven decision making.',
      color: 'text-indigo-600',
    },
    {
      icon: Shield,
      title: 'Data Security',
      description:
        'Enterprise-grade security with encrypted data and secure access controls.',
      color: 'text-gray-600',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description:
        'Round-the-clock technical support and customer service assistance.',
      color: 'text-teal-600',
    },
    {
      icon: Award,
      title: 'Grade Management',
      description:
        'Complete grade book management with progress tracking and reporting.',
      color: 'text-yellow-600',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Manage Your School
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and features
            needed to efficiently manage every aspect of your educational
            institution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div
                className={`inline-flex p-3 rounded-lg bg-white shadow-sm mb-4`}
              >
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
