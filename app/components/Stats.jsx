import React from 'react'
import { ChevronLeft, ChevronRight, Play, MapPin, Phone, Mail, Award, Users, BookOpen } from 'lucide-react';

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "500+", label: "Students" },
    { icon: <Award className="w-6 h-6" />, value: "25+", label: "Years Experience" },
    { icon: <BookOpen className="w-6 h-6" />, value: "15:1", label: "Student-Teacher Ratio" },
    { icon: <Award className="w-6 h-6" />, value: "98%", label: "Parent Satisfaction" }
  ];

const Stats = () => {

    
  return (
    <>
          {/* Stats Overlay */}
      <div className="mt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center text-black transform hover:scale-105 transition-transform"
              >
                <div className="inline-block p-3 bg-yellow-500/20 rounded-full mb-3">
                  <div className="text-yellow-300">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </>
  )
}

export default Stats