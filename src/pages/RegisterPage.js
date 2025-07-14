import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import {
  ArrowLeft,
  CheckCircle,
  Building,
  User,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const schema = yup.object({
  schoolName: yup.string().required('School name is required'),
  schoolType: yup.string().required('School type is required'),
  adminName: yup.string().required('Admin name is required'),
  adminEmail: yup.string().email('Invalid email').required('Email is required'),
  adminPhone: yup
    .string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone is required'),
  address: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  pincode: yup
    .string()
    .matches(/^[0-9]{6}$/, 'Pincode must be 6 digits')
    .required('Pincode is required'),
  studentCount: yup.string().required('Student count is required'),
  plan: yup.string().required('Plan selection is required'),
});

const RegisterPage = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const plans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: '₹999',
      period: '/month',
      students: 'Up to 200 students',
      features: ['Student Management', 'Basic Reports', 'Email Support'],
    },
    {
      id: 'standard',
      name: 'Standard Plan',
      price: '₹1,999',
      period: '/month',
      students: 'Up to 500 students',
      features: [
        'All Basic Features',
        'Parent Portal',
        'SMS Integration',
        'Advanced Reports',
      ],
      popular: true,
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      price: '₹2,999',
      period: '/month',
      students: 'Unlimited students',
      features: [
        'All Standard Features',
        'Mobile App',
        'API Access',
        '24/7 Support',
        'Custom Integrations',
      ],
    },
  ];

  const onSubmit = (data) => {
    console.log('Registration data:', data);
    // Store registration data in localStorage for payment page
    localStorage.setItem('registrationData', JSON.stringify(data));
    navigate('/payment');
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= stepNum
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {step > stepNum ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    stepNum
                  )}
                </div>
                {stepNum < 3 && (
                  <div
                    className={`flex-1 h-1 mx-4 ${
                      step > stepNum ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>School Details</span>
            <span>Admin Info</span>
            <span>Plan Selection</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Step 1: School Details */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    School Information
                  </h2>
                  <p className="text-gray-600">Tell us about your school</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      School Name *
                    </label>
                    <input
                      type="text"
                      {...register('schoolName')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter school name"
                    />
                    {errors.schoolName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.schoolName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      School Type *
                    </label>
                    <select
                      {...register('schoolType')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select type</option>
                      <option value="primary">Primary School</option>
                      <option value="secondary">Secondary School</option>
                      <option value="higher-secondary">
                        Higher Secondary School
                      </option>
                      <option value="international">
                        International School
                      </option>
                    </select>
                    {errors.schoolType && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.schoolType.message}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      School Address *
                    </label>
                    <textarea
                      {...register('address')}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter complete address"
                    />
                    {errors.address && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.address.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      {...register('city')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="City"
                    />
                    {errors.city && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.city.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      {...register('state')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="State"
                    />
                    {errors.state && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.state.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      {...register('pincode')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="6-digit pincode"
                    />
                    {errors.pincode && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.pincode.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Students *
                    </label>
                    <select
                      {...register('studentCount')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select range</option>
                      <option value="1-50">1-50 students</option>
                      <option value="51-200">51-200 students</option>
                      <option value="201-500">201-500 students</option>
                      <option value="501-1000">501-1000 students</option>
                      <option value="1000+">1000+ students</option>
                    </select>
                    {errors.studentCount && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.studentCount.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Admin Information */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <User className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Administrator Details
                  </h2>
                  <p className="text-gray-600">
                    Information for the main admin account
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Administrator Name *
                    </label>
                    <input
                      type="text"
                      {...register('adminName')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Full name of administrator"
                    />
                    {errors.adminName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.adminName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('adminEmail')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="admin@school.com"
                    />
                    {errors.adminEmail && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.adminEmail.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      {...register('adminPhone')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="10-digit mobile number"
                    />
                    {errors.adminPhone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.adminPhone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Plan Selection */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Choose Your Plan
                  </h2>
                  <p className="text-gray-600">
                    Select the best plan for your school
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {plans.map((plan) => (
                    <div
                      key={plan.id}
                      className={`relative border-2 rounded-lg p-6 cursor-pointer transition-all ${
                        watch('plan') === plan.id
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Most Popular
                          </span>
                        </div>
                      )}

                      <label className="cursor-pointer">
                        <input
                          type="radio"
                          {...register('plan')}
                          value={plan.id}
                          className="sr-only"
                        />

                        <div className="text-center">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {plan.name}
                          </h3>
                          <div className="mb-4">
                            <span className="text-3xl font-bold text-gray-900">
                              {plan.price}
                            </span>
                            <span className="text-gray-600">{plan.period}</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-4">
                            {plan.students}
                          </p>

                          <ul className="space-y-2 text-sm text-gray-600">
                            {plan.features.map((feature, index) => (
                              <li key={index} className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </label>
                    </div>
                  ))}
                </div>

                {errors.plan && (
                  <p className="text-red-500 text-sm text-center">
                    {errors.plan.message}
                  </p>
                )}

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        <div className="text-center mt-6">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RegisterPage;
