"use client"
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        studentGrade: '',
        inquiryType: 'general'
    });

    const [openFaq, setOpenFaq] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Contact form submitted:', formData);
        alert('Thank you for your message! We will contact you soon.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
            studentGrade: '',
            inquiryType: 'general'
        });
    };

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const inquiryTypes = [
        { value: 'general', label: 'General Inquiry' },
        { value: 'admissions', label: 'Admissions' },
        { value: 'academic', label: 'Academic Matters' },
        { value: 'fees', label: 'Fees & Payments' },
        { value: 'transport', label: 'School Transport' },
        { value: 'tour', label: 'Campus Tour' }
    ];

    const faqs = [
        {
            question: "What are the school hours?",
            answer: "School hours are from 7:30 AM to 4:00 PM, Monday to Friday. Office hours are 7:30 AM to 5:00 PM on weekdays and 9:00 AM to 1:00 PM on Saturdays."
        },
        {
            question: "How do I apply for admission?",
            answer: "You can apply online through our website, download the application form, or visit our admissions office. We recommend scheduling a campus tour before applying."
        },
        {
            question: "What is the fee structure?",
            answer: "Our fee structure varies by grade level. Please contact our admissions office for a detailed fee breakdown or download our prospectus which includes all fee information."
        },
        {
            question: "Do you offer school transport?",
            answer: "Yes, we offer safe and reliable school transport services covering most areas in Nairobi. Transport fees vary depending on the distance and route."
        },
        {
            question: "What are the admission requirements?",
            answer: "Admission requirements include a completed application form, previous school records, birth certificate, and an assessment interview. Specific requirements vary by grade level."
        }
    ];

    const googleMapsEmbedCode = `
    <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.123456789012!2d32.755123456789!3d0.353123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db123456789ab%3A0xabcdef1234567890!2sMukono%2C%20Uganda!5e0!3m2!1sen!2sug!4v1700000000000!5m2!1sen!2sug" 
      width="100%" 
      height="100%" 
      style="border:0;" 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  `;

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
                        <span className="text-lg">📞</span>
                        <span className="font-semibold text-sm">GET IN TOUCH</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Contact Disney Victors Primary School
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We're here to help answer your questions and provide information about our school.
                    </p>
                </div>

                {/* Contact Information Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {/* Address Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-blue-600 text-3xl">📍</span>
                            <h3 className="text-xl font-bold text-gray-900">Address</h3>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Katosi Road, Mukono, Uganda<br />
                            P.O. Box 0000
                        </p>
                        <a
                            href="https://www.google.com/maps/dir//Disney+Victors+Primary+School+Mukono"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition-colors"
                        >
                            <span>🚗</span>
                            <span>Get Directions</span>
                        </a>
                    </div>

                    {/* Phone Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-blue-600 text-3xl">📞</span>
                            <h3 className="text-xl font-bold text-gray-900">Phone</h3>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <div className="text-gray-600 text-xs uppercase font-semibold mb-1">Main Office</div>
                                <a href="tel:+256782846266" className="text-blue-600 hover:text-blue-700 font-semibold">
                                    +256 782 846 266
                                </a>
                            </div>
                            <div>
                                <div className="text-gray-600 text-xs uppercase font-semibold mb-1">Admissions</div>
                                <a href="tel:+256782846266" className="text-blue-600 hover:text-blue-700 font-semibold">
                                    +256 782 846 266
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Email Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-blue-600 text-3xl">✉️</span>
                            <h3 className="text-xl font-bold text-gray-900">Email</h3>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <div className="text-gray-600 text-xs uppercase font-semibold mb-1">General</div>
                                <a href="mailto:info@disneyvictors.ac.ug" className="text-blue-600 hover:text-blue-700 font-semibold break-all">
                                    info@disneyvictors.ac.ug
                                </a>
                            </div>
                            <div>
                                <div className="text-gray-600 text-xs uppercase font-semibold mb-1">Admissions</div>
                                <a href="mailto:admissions@disneyvictors.ac.ug" className="text-blue-600 hover:text-blue-700 font-semibold break-all">
                                    admissions@disneyvictors.ac.ug
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="mb-16">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Send Us a Message</h2>
                            <p className="text-gray-600 mt-2">Fill out the form below and we'll get back to you as soon as possible</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Full Name"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="email@example.com"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+254 700 000 000"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Inquiry Type *
                                        </label>
                                        <select
                                            name="inquiryType"
                                            value={formData.inquiryType}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                                        >
                                            {inquiryTypes.map(type => (
                                                <option key={type.value} value={type.value}>
                                                    {type.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="What is your inquiry about?"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                                    />
                                </div>


                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Your Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Please provide details about your inquiry..."
                                        rows="5"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-lg transition-colors shadow-lg"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mb-16">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Find Us on the Map</h2>
                        <p className="text-gray-600 mt-2">Visit us at our campus in Mukono</p>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200">
                        <div className="h-96 md:h-[500px] relative">
                            {/* Actual Google Maps Embed */}
                            <div
                                className="w-full h-full"
                                dangerouslySetInnerHTML={{ __html: googleMapsEmbedCode }}
                            />

                            {/* Overlay Instructions */}
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                                <div className="flex items-center gap-2">
                                    <span className="text-blue-600 text-lg">📍</span>
                                    <div>
                                        <div className="font-bold text-gray-900 text-sm">Disney Victors Primary</div>
                                        <div className="text-gray-600 text-xs">Mukono, Uganda</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQs Section */}
                <div className="mt-16">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Find answers to common questions about our school and admissions process
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors"
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="font-bold text-gray-900 text-lg">{faq.question}</span>
                                        <span className="text-blue-600 text-xl">
                                            {openFaq === index ? '−' : '+'}
                                        </span>
                                    </button>
                                    <div
                                        className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === index ? 'py-4 border-t border-gray-100' : 'max-h-0'
                                            }`}
                                    >
                                        <p className="text-gray-700">{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Contact Note */}
                        <div className="mt-8 text-center">
                            <div className="bg-blue-50 rounded-xl p-6 inline-block">
                                <p className="text-gray-700">
                                    Can't find your answer? <span className="font-bold text-blue-600">Contact us directly</span> and
                                    we'll be happy to assist you with any questions you may have.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;