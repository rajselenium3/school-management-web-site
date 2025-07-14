import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { CreditCard, Shield, CheckCircle, ArrowLeft } from 'lucide-react';

const PaymentPage = () => {
  const [registrationData, setRegistrationData] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem('registrationData');
    if (data) {
      setRegistrationData(JSON.parse(data));
    } else {
      navigate('/register');
    }
  }, [navigate]);

  const planPrices = {
    basic: { price: 999, name: 'Basic Plan' },
    standard: { price: 1999, name: 'Standard Plan' },
    premium: { price: 2999, name: 'Premium Plan' },
  };

  const selectedPlan = registrationData
    ? planPrices[registrationData.plan]
    : null;

  const handlePayment = async () => {
    setLoading(true);

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would integrate with PhonePe payment gateway
      // For demo purposes, we'll simulate a successful payment

      // Clear registration data
      localStorage.removeItem('registrationData');

      // Navigate to admin dashboard
      navigate('/admin-dashboard', {
        state: {
          message: 'Registration successful! Welcome to EduManage.',
          schoolData: registrationData,
        },
      });
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!registrationData || !selectedPlan) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="font-semibold text-gray-900">
                  {registrationData.schoolName}
                </h3>
                <p className="text-gray-600">
                  {registrationData.city}, {registrationData.state}
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Administrator
                </h4>
                <p className="text-gray-600">{registrationData.adminName}</p>
                <p className="text-gray-600">{registrationData.adminEmail}</p>
                <p className="text-gray-600">{registrationData.adminPhone}</p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Selected Plan
                </h4>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{selectedPlan.name}</span>
                  <span className="font-semibold">
                    ₹{selectedPlan.price}/month
                  </span>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Total Amount</span>
                  <span className="text-blue-600">₹{selectedPlan.price}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  First month payment
                </p>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-6">
              <CreditCard className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900">
                Payment Details
              </h2>
              <p className="text-gray-600">Secure payment powered by PhonePe</p>
            </div>

            <div className="space-y-6">
              {/* Payment Method Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Payment Method
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      className="mr-3"
                      defaultChecked
                    />
                    <CreditCard className="h-5 w-5 text-gray-600 mr-3" />
                    <span>Credit/Debit Card</span>
                  </label>
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value="upi"
                      className="mr-3"
                    />
                    <div className="w-5 h-5 bg-orange-500 rounded mr-3"></div>
                    <span>UPI Payment</span>
                  </label>
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value="netbanking"
                      className="mr-3"
                    />
                    <div className="w-5 h-5 bg-green-500 rounded mr-3"></div>
                    <span>Net Banking</span>
                  </label>
                </div>
              </div>

              {/* Security Notice */}
              <div className="bg-green-50 p-4 rounded-lg flex items-start">
                <Shield className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-800">
                    Secure Payment
                  </h4>
                  <p className="text-sm text-green-700">
                    Your payment information is encrypted and secure. We don't
                    store your card details.
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">What you get:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Instant access to admin dashboard
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Free setup and data migration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    24/7 customer support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Staff training included
                  </li>
                </ul>
              </div>

              {/* Payment Button */}
              <button
                onClick={handlePayment}
                disabled={loading}
                className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing Payment...
                  </div>
                ) : (
                  `Pay ₹${selectedPlan.price} - Complete Registration`
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                By completing this payment, you agree to our Terms of Service
                and Privacy Policy.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => navigate('/register')}
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Registration
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PaymentPage;
