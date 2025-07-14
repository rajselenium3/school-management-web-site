import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  GraduationCap,
  ArrowRight,
  Shield,
  Users,
  BookOpen,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';

const schema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  userType: yup.string().required('Please select user type'),
});

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const userTypes = [
    {
      id: 'admin',
      title: 'Administrator',
      description: 'School management and administration',
      icon: Shield,
      color: 'bg-primary-100 text-primary-600 border-primary-200',
      hoverColor: 'hover:bg-primary-600 hover:text-white',
    },
    {
      id: 'teacher',
      title: 'Teacher',
      description: 'Classroom management and student tracking',
      icon: Users,
      color: 'bg-secondary-100 text-secondary-600 border-secondary-200',
      hoverColor: 'hover:bg-secondary-600 hover:text-white',
    },
    {
      id: 'parent',
      title: 'Parent',
      description: 'Student progress and communication',
      icon: BookOpen,
      color: 'bg-accent-100 text-accent-600 border-accent-200',
      hoverColor: 'hover:bg-accent-600 hover:text-white',
    },
  ];

  const onSubmit = async (data) => {
    setIsLoading(true);
    
    try {
      // Simulate login process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo purposes, redirect based on user type
      if (data.userType === 'admin') {
        navigate('/admin-dashboard', {
          state: {
            message: 'Welcome back! You have successfully logged in.',
            schoolData: {
              schoolName: 'Demo School',
              adminName: 'Admin User',
            },
          },
        });
      } else {
        // For other user types, show a coming soon message
        alert(`${data.userType.charAt(0).toUpperCase() + data.userType.slice(1)} portal coming soon!`);
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <div className="min-h-screen gradient-bg">
      <Header />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Login Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="order-2 lg:order-1"
            >
              <div className="card p-8 md:p-12">
                <motion.div variants={itemVariants} className="text-center mb-8">
                  <div className="inline-flex p-4 bg-primary-100 rounded-3xl mb-6">
                    <GraduationCap className="h-12 w-12 text-primary-600" />
                  </div>
                  <h1 className="text-3xl font-bold text-neutral-900 mb-3">
                    Welcome Back
                  </h1>
                  <p className="text-neutral-600 text-lg">
                    Sign in to access your school management dashboard
                  </p>
                </motion.div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* User Type Selection */}
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-semibold text-neutral-700 mb-4">
                      I am a *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {userTypes.map((type) => (
                        <label
                          key={type.id}
                          className={`relative cursor-pointer border-2 rounded-xl p-4 transition-all duration-300 ${
                            watch('userType') === type.id
                              ? 'border-primary-500 bg-primary-50 shadow-medium'
                              : `${type.color} ${type.hoverColor}`
                          }`}
                        >
                          <input
                            type="radio"
                            {...register('userType')}
                            value={type.id}
                            className="sr-only"
                          />
                          <div className="text-center">
                            <type.icon className="h-8 w-8 mx-auto mb-2 transition-colors duration-300" />
                            <div className="font-semibold text-sm mb-1">
                              {type.title}
                            </div>
                            <div className="text-xs opacity-75">
                              {type.description}
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.userType && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.userType.message}
                      </p>
                    )}
                  </motion.div>

                  {/* Email Field */}
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-semibold text-neutral-700 mb-3">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-neutral-400" />
                      </div>
                      <input
                        type="email"
                        {...register('email')}
                        className="input-field pl-12"
                        placeholder="Enter your email address"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.email.message}
                      </p>
                    )}
                  </motion.div>

                  {/* Password Field */}
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-semibold text-neutral-700 mb-3">
                      Password *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-neutral-400" />
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        {...register('password')}
                        className="input-field pl-12 pr-12"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-neutral-400 hover:text-neutral-600 transition-colors duration-200"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.password.message}
                      </p>
                    )}
                  </motion.div>

                  {/* Remember Me & Forgot Password */}
                  <motion.div variants={itemVariants} className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-primary-600 bg-white border-neutral-300 rounded focus:ring-primary-500 focus:ring-2"
                      />
                      <span className="ml-2 text-sm text-neutral-700">
                        Remember me
                      </span>
                    </label>
                    <Link
                      to="#"
                      className="text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                    >
                      Forgot password?
                    </Link>
                  </motion.div>

                  {/* Login Button */}
                  <motion.div variants={itemVariants}>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Signing In...
                        </div>
                      ) : (
                        <>
                          Sign In
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </button>
                  </motion.div>

                  {/* Demo Credentials */}
                  <motion.div variants={itemVariants} className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                      <Shield className="h-4 w-4 mr-2" />
                      Demo Credentials
                    </h4>
                    <div className="space-y-1 text-sm text-blue-800">
                      <p><strong>Admin:</strong> admin@demo.com / password123</p>
                      <p><strong>Teacher:</strong> teacher@demo.com / password123</p>
                      <p><strong>Parent:</strong> parent@demo.com / password123</p>
                    </div>
                  </motion.div>

                  {/* Sign Up Link */}
                  <motion.div variants={itemVariants} className="text-center">
                    <p className="text-neutral-600">
                      Don't have an account?{' '}
                      <Link
                        to="/register"
                        className="text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
                      >
                        Register your school
                      </Link>
                    </p>
                  </motion.div>
                </form>
              </div>
            </motion.div>

            {/* Right Side - Benefits & Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 space-y-8"
            >
              {/* Hero Image */}
              <div className="relative">
                <div className="card p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="https://images.pexels.com/photos/8923670/pexels-photo-8923670.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Indian School Teachers and Students"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                
                {/* Floating stats */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-large"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-neutral-700">
                      500+ Schools Active
                    </span>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-large"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                    <span className="text-sm font-medium text-neutral-700">
                      99.9% Uptime
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Benefits */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-neutral-900">
                  Trusted by Leading
                  <span className="text-gradient block">Indian Schools</span>
                </h2>
                
                <div className="space-y-4">
                  {[
                    'Streamlined school administration',
                    'Real-time parent communication',
                    'Comprehensive student tracking',
                    'Secure data management',
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-secondary-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-secondary-600" />
                      </div>
                      <span className="text-neutral-700 font-medium">
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoginPage;