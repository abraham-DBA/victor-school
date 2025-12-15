
"use client"
import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    age: '',
    gender: '',
    schoolOfChoice: 'Disney Victors Primary School',
    classAdmitted: '',
    yearOfEntry: '',
    parentName: '',
    parentContact: '',
    whatsappNumber: '',
    email: '',
    currentSchool: '',
    currentClass: '',
    agreement: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 6 }, (_, i) => currentYear + i);
  
  const classes = [
    'Baby Class', 'Middle Class', 'Top Class',
    'Primary 1', 'Primary 2', 'Primary 3',
    'Primary 4', 'Primary 5', 'Primary 6', 'Primary 7'
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Student Application Form
            </h2>
            <p className="text-gray-600 mb-8">All fields marked with * are required</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Student Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    placeholder="Enter Student name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Age *
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="No. of Years"
                    min="3"
                    max="15"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  />
                </div>
              </div>

              {/* Gender */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Gender *
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === 'male'}
                      onChange={handleChange}
                      required
                      className="mr-2"
                    />
                    <span>Male</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={formData.gender === 'female'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span>Female</span>
                  </label>
                </div>
              </div>

              {/* School and Class */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    School of Choice *
                  </label>
                  <input
                    type="text"
                    name="schoolOfChoice"
                    value={formData.schoolOfChoice}
                    onChange={handleChange}
                    placeholder="Sir Apollo Kaggwa School of Choice"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Class to be admitted *
                  </label>
                  <select
                    name="classAdmitted"
                    value={formData.classAdmitted}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  >
                    <option value="">Select Class</option>
                    {classes.map((cls) => (
                      <option key={cls} value={cls}>{cls}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Year of Entry */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Booking Year of Entry *
                </label>
                <select
                  name="yearOfEntry"
                  value={formData.yearOfEntry}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                >
                  <option value="">Select Year</option>
                  {years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              {/* Parent Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Name of Parent/Guardian *
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    placeholder="Enter Name of Parent/Guardian"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Parent/Guardian Contact *
                  </label>
                  <input
                    type="tel"
                    name="parentContact"
                    value={formData.parentContact}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    placeholder="Enter WhatsApp Number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  />
                </div>
              </div>

              {/* Current School Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Previous School Information
                  </label>
                  <input
                    type="text"
                    name="currentSchool"
                    value={formData.currentSchool}
                    onChange={handleChange}
                    placeholder="Enter Name of Previous School"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Class at Previous School
                  </label>
                  <input
                    type="text"
                    name="currentClass"
                    value={formData.currentClass}
                    onChange={handleChange}
                    placeholder="Enter Previous Class"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  />
                </div>
              </div>

              {/* Declaration */}
              <div className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-200">
                <p className="text-gray-700 mb-4 text-sm">
                  By submitting this form, I hereby declare that the information provided is true 
                  and correct to the best of my knowledge. I understand that any false or misleading 
                  information may be grounds for rejection of this application or future dismissal 
                  if admitted. I agree to abide by the rules and regulations of Disney Victors Primary School.
                </p>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-3">
                    Agree *
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="agreement"
                        value="agree"
                        checked={formData.agreement === 'agree'}
                        onChange={handleChange}
                        required
                        className="mr-2"
                      />
                      <span>Agree</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="agreement"
                        value="disagree"
                        checked={formData.agreement === 'disagree'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <span>Disagree</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-lg transition-colors shadow-lg"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;