import React from 'react';

const Action = () => {
  return (
    <section className="py-14 bg-gradient-to-b from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <span className="font-bold">🎓 GRAND OPENING 2024 🎓</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Disney Victors Primary School is <span className="text-yellow-300">Now Open!</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Be among the first to experience our innovative approach to primary education
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="/enroll"
              className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-lg rounded-xl shadow-2xl transition-all hover:scale-105"
            >
              Enroll Now
            </a>
            <a 
              href="/virtual-tour"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white text-white font-bold text-lg rounded-xl transition-all"
            >
              Contact Us
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto mt-12">
            <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <div className="text-3xl mb-2">🏆</div>
              <div className="font-bold">Founding Class</div>
              <div className="text-sm opacity-80">Special Perks</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <div className="text-3xl mb-2">💻</div>
              <div className="font-bold">Tech-Enabled</div>
              <div className="text-sm opacity-80">Smart Classrooms</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <div className="text-3xl mb-2">👨‍👩‍👧‍👦</div>
              <div className="font-bold">Family Community</div>
              <div className="text-sm opacity-80">Parent Partnership</div>
            </div>
          </div>

          <p className="mt-8 text-sm opacity-80">
            ⚡ First 50 enrollments get 20% off admission fees | 📅 Deadline: January 31, 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default Action;