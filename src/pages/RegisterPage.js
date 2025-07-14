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
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    trigger,
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
      color: 'border-neutral-200 hover:border-primary-300',
      popular: false,
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
      color: 'border-primary-300 ring-2 ring-primary-100',
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
      color: 'border-neutral-200 hover:border-accent-300',
      popular: false,
    },
  ];

  const steps = [
    { number: 1, title: 'School Details', icon: Building },
    { number: 2, title: 'Admin Info', icon: User },
    { number: 3, title: 'Plan Selection', icon: Sparkles },
  ];

  const onSubmit = (data) => {
    console.log('Registration data:', data);
    localStorage.setItem('registrationData', JSON.stringify(data));
    navigate('/payment');
  };

  const nextStep = async () => {
    let fieldsToValidate = [];
    
    if (step === 1) {
      fieldsToValidate = ['schoolName', 'schoolType', 'address', 'city', 'state', 'pincode', 'studentCount'];
    } else if (step === 2) {
      fieldsToValidate = ['adminName', 'adminEmail', 'adminPhone'];
    }
    
    const isValid = await trigger(fieldsToValidate);
    if (isValid && step < 3) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const pageVariants = {
    initial: { opacity: 0, x: 50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -50 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <div className="min-h-screen gradient-bg">
      <Header />

      <div className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between relative">
              {/* Progress line */}
              <div className="absolute top-5 left-0 right-0 h-1 bg-neutral-200 rounded-full">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${((step - 1) / 2) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {steps.map((stepItem, index) => (
                <div key={stepItem.number} className="relative flex flex-col items-center">
                  <motion.div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      step >= stepItem.number
                        ? 'bg-primary-600 text-white shadow-lg'
                        : 'bg-white text-neutral-400 border-2 border-neutral-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {step > stepItem.number ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : (
                      <stepItem.icon className="h-6 w-6" />
                    )}
                  </motion.div>
                  <span className={`mt-3 text-sm font-medium transition-colors duration-300 ${
                    step >= stepItem.number ? 'text-primary-600' : 'text-neutral-500'
                  }`}>
                    {stepItem.title}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card p-8 md:p-12"
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <AnimatePresence mode="wait">
                {/* Step 1: School Details */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    variants={pageVariants}
                    initial="initial"
                    animate="in"
                    exit="out"
                    transition={pageTransition}
                    className="space-y-8"
                  >
                    <div className="text-center mb-8">
                      <div className="inline-flex p-4 bg-primary-100 rounded-3xl mb-6">
                        <Building className="h-12 w-12 text-primary-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-neutral-900 mb-3">
                        School Information
                      </h2>
                      <p className="text-neutral-600 text-lg">
                        Tell us about your educational institution
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-neutral-700 mb-3">
                          School Name *
                        </label>
                        <input
                          type="text"
                          {...register('schoolName')}
                          className="input-field"
                          placeholder="Enter your school name"
                        />
                        {errors.schoolName && (
                          <p className="text-red-500 text-sm mt-2">
                            {errors.schoolName.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-3">
                          School Type *
                        </label>
                        <select
                          {...register('schoolType')}
                          className="input-field"
                        >
                          <option value="">Select school type</option>
                          <option value="primary">Primary School</option>
                          <option value="secondary">Secondary School</option>
                          <option value="higher-secondary">Higher Secondary School</option>
                          <option value="international">International School</option>
                        </select>
                        {errors.schoolType && (
                          <p className="text-red-500 text-sm mt-2">
                            {errors.schoolType.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-3">
                          Number of Students *
                        </label>
                        <select
                          {...register('studentCount')}
                          className="input-field"
                        >
                          <option value="">Select student range</option>
                          <option value="1-50">1-50 students</option>
                          <option value="51-200">51-200 students</option>
                          <option value="201-500">201-500 students</option>
                          <option value="501-1000">501-1000 students</option>
                          <option value="1000+">1000+ students</option>
                        </select>
                        {errors.studentCount && (
                          <p className="text-red-500 text-sm mt-2">
                            {errors.studentCount.message}
                          </p>
                        )}
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-neutral-700 mb-3">
                          School Address *
                        </label>
                        <textarea
                          {...register('address')}
                          rows={3}
                          className="input-field resize-none"
                          placeholder="Enter complete school address"
                        />
                        {errors.address && (
                          <p className="text-red-500 text-sm mt-2">
                            {errors.address.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-3">
                          City *
                        </label>
                        <input
                          type="text"
                          {...register('city')}
                          className="input-field"
                          placeholder="City name"
                        />
                        {errors.city && (
                          <p className="text-red-500 text-sm mt-2">
                            {errors.city.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-3">
                          State *
                        </label>
                        <input
                          type="text"
                          {...register('state')}
                          className="input-field"
                          placeholder="State name"
                        />
                        {errors.state && (
                          <p className="text-red-500 text-sm mt-2">
                            {errors.state.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-3">
                          Pincode *
                        </label>
                        <input
                          type="text"
                          {...register('pincode')}
                          className="input-field"
                          placeholder="6-digit pincode"
                        />
                        {errors.pincode && (
                          <p className="text-red-500 text-sm mt-2">
                            {errors.pincode.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-end pt-6">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="btn-primary"
                      >
                        Continue
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Admin Information */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    variants={pageVariants}
                    initial="initial"
                    animate="in"
                    exit="out"
                    transition={pageTransition}
                    className="space-y-8"
                  >
                    <div className="text-center mb-8">
                      <div className="inline-flex p-4 bg-secondary-100 rounded-3xl mb-6">
                        <User className="h-12 w-12 text-secondary-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-neutral-900 mb-3">
                        Administrator Details
                      </h2>
                      <p className="text-neutral-600 text-lg">
                        Information for the main admin account
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-neutral-700 mb-3">
                          Administrator Name *
                        </label>
                        <input
                          type="text"
                          {...register('adminName')}
                          className="input-field"
                          placeholder="Full name of administrator"
                        />
                        {errors.adminName && (
                          <p className="text-red-500 text-sm mt-2">
                            {errors.adminName.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-3">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          {...register('adminEmail')}
                          className="input-field"
                          placeholder="admin@school.com"
                        />
                        {errors.adminEmail && (
                          <p className="text-red-500 text-sm mt-2">
                            {errors.adminEmail.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-3">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          {...register('adminPhone')}
                          className="input-field"
                          placeholder="10-digit mobile number"
                        />
                        {errors.adminPhone && (
                          <p className="text-red-500 text-sm mt-2">
                            {errors.adminPhone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-between pt-6">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="btn-secondary"
                      >
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Previous
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        className="btn-primary"
                      >
                        Continue
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Plan Selection */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    variants={pageVariants}
                    initial="initial"
                    animate="in"
                    exit="out"
                    transition={pageTransition}
                    className="space-y-8"
                  >
                    <div className="text-center mb-8">
                      <div className="inline-flex p-4 bg-accent-100 rounded-3xl mb-6">
                        <Sparkles className="h-12 w-12 text-accent-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-neutral-900 mb-3">
                        Choose Your Plan
                      </h2>
                      <p className="text-neutral-600 text-lg">
                        Select the perfect plan for your school's needs
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {plans.map((plan) => (
                        <motion.div
                          key={plan.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`relative border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                            watch('plan') === plan.id
                              ? 'border-primary-500 bg-primary-50 shadow-large'
                              : plan.color
                          }`}
                        >
                          {plan.popular && (
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                Most Popular
                              </span>
                            </div>
                          )}

                          <label className="cursor-pointer block">
                            <input
                              type="radio"
                              {...register('plan')}
                              value={plan.id}
                              className="sr-only"
                            />

                            <div className="text-center">
                              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                                {plan.name}
                              </h3>
                              <div className="mb-4">
                                <span className="text-4xl font-bold text-neutral-900">
                                  {plan.price}
                                </span>
                                <span className="text-neutral-600 text-lg">
                                  {plan.period}
                                </span>
                              </div>
                              <p className="text-sm font-medium text-primary-600 mb-6 bg-primary-100 px-3 py-1 rounded-full inline-block">
                                {plan.students}
                              </p>

                              <ul className="space-y-3 text-sm text-neutral-600">
                                {plan.features.map((feature, index) => (
                                  <li key={index} className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-secondary-500 mr-3 flex-shrink-0" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </label>
                        </motion.div>
                      ))}
                    </div>

                    {errors.plan && (
                      <p className="text-red-500 text-sm text-center">
                        {errors.plan.message}
                      </p>
                    )}

                    <div className="flex justify-between pt-6">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="btn-secondary"
                      >
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Previous
                      </button>
                      <button
                        type="submit"
                        className="btn-primary text-lg px-8"
                      >
                        Proceed to Payment
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8"
          >
            <Link
              to="/"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RegisterPage;