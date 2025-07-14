import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Users,
  UserPlus,
  BookOpen,
  Calendar,
  Settings,
  BarChart3,
  Bell,
  GraduationCap,
  UserCheck,
  CreditCard,
  MessageSquare,
  LogOut,
} from 'lucide-react';

const AdminDashboard = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('overview');
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [userType, setUserType] = useState('student');

  const schoolData = location.state?.schoolData;

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'teachers', label: 'Teachers', icon: UserCheck },
    { id: 'parents', label: 'Parents', icon: Users },
    { id: 'classes', label: 'Classes', icon: BookOpen },
    { id: 'attendance', label: 'Attendance', icon: Calendar },
    { id: 'fees', label: 'Fee Management', icon: CreditCard },
    { id: 'communications', label: 'Communications', icon: MessageSquare },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const stats = [
    { label: 'Total Students', value: '0', icon: Users, color: 'bg-blue-500' },
    {
      label: 'Total Teachers',
      value: '0',
      icon: UserCheck,
      color: 'bg-green-500',
    },
    { label: 'Total Parents', value: '0', icon: Users, color: 'bg-purple-500' },
    { label: 'Classes', value: '0', icon: BookOpen, color: 'bg-orange-500' },
  ];

  const UserModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Add New {userType.charAt(0).toUpperCase() + userType.slice(1)}
        </h3>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {userType === 'student' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Class
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option>Select Class</option>
                  <option>Class 1</option>
                  <option>Class 2</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Roll Number
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
          )}
        </form>

        <div className="flex justify-end space-x-3 mt-6">
          <button
            onClick={() => setShowAddUserModal(false)}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Add {userType.charAt(0).toUpperCase() + userType.slice(1)}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  {schoolData?.schoolName || 'School Admin Dashboard'}
                </h1>
                <p className="text-sm text-gray-600">Administrator Panel</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Bell className="h-6 w-6 text-gray-600 cursor-pointer hover:text-blue-600" />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {schoolData?.adminName
                      ? schoolData.adminName.charAt(0).toUpperCase()
                      : 'A'}
                  </span>
                </div>
                <span className="text-gray-700 font-medium">
                  {schoolData?.adminName || 'Admin'}
                </span>
              </div>
              <LogOut className="h-6 w-6 text-gray-600 cursor-pointer hover:text-red-600" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm min-h-screen">
          <nav className="p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === item.id
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {location.state?.message && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-green-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-800">
                    {location.state.message}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Welcome to Your Dashboard
                </h2>
                <p className="text-gray-600">
                  Get started by adding students, teachers, and setting up your
                  school.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm"
                  >
                    <div className="flex items-center">
                      <div className={`p-3 rounded-lg ${stat.color}`}>
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">
                          {stat.label}
                        </p>
                        <p className="text-2xl font-bold text-gray-900">
                          {stat.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button
                    onClick={() => {
                      setUserType('student');
                      setShowAddUserModal(true);
                    }}
                    className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors"
                  >
                    <UserPlus className="h-8 w-8 text-gray-400 mb-2" />
                    <span className="text-gray-700 font-medium ml-2">
                      Add Student
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      setUserType('teacher');
                      setShowAddUserModal(true);
                    }}
                    className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-400 hover:bg-green-50 transition-colors"
                  >
                    <UserPlus className="h-8 w-8 text-gray-400 mb-2" />
                    <span className="text-gray-700 font-medium ml-2">
                      Add Teacher
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      setUserType('parent');
                      setShowAddUserModal(true);
                    }}
                    className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-colors"
                  >
                    <UserPlus className="h-8 w-8 text-gray-400 mb-2" />
                    <span className="text-gray-700 font-medium ml-2">
                      Add Parent
                    </span>
                  </button>
                </div>
              </div>

              {/* Setup Guide */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">
                  Setup Guide
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-blue-800">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    Add your school's classes and sections
                  </div>
                  <div className="flex items-center text-blue-800">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                      <span className="text-gray-600 text-xs font-bold">2</span>
                    </div>
                    Create teacher accounts and assign subjects
                  </div>
                  <div className="flex items-center text-blue-800">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                      <span className="text-gray-600 text-xs font-bold">3</span>
                    </div>
                    Add students and link with parents
                  </div>
                  <div className="flex items-center text-blue-800">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                      <span className="text-gray-600 text-xs font-bold">4</span>
                    </div>
                    Configure fee structure and notifications
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other tab contents would go here */}
          {activeTab !== 'overview' && (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {menuItems.find((item) => item.id === activeTab)?.label}
              </h2>
              <p className="text-gray-600">
                This section is under development. Start by adding users from
                the Overview tab.
              </p>
            </div>
          )}
        </main>
      </div>

      {showAddUserModal && <UserModal />}
    </div>
  );
};

export default AdminDashboard;
