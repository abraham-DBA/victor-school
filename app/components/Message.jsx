import React from 'react';

const Message = () => {
  return (
    <section className="py-12 md:py-16 px-6 bg-gray-100 mt-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          
          {/* Left Column - Director's Message */}
          <div className="space-y-6">
            {/* Section Title */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Director's Message
              </h2>
              <div className="h-1 w-20 bg-blue-600"></div>
            </div>

            {/* Quote */}
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-blue-800 italic">
                "EDUCATION IS THE MOST POWERFUL WEAPON"
              </h3>
              
              {/* Message Content */}
              <div className="space-y-3 text-gray-700 text-base leading-relaxed">
                <p>
                  Our students are talented, hard-working and full of good ideas. 
                  We encourage and empower them to bring their ideas to life.
                </p>
                <p>
                  Hands-on opportunities are what we're all about. Our students 
                  are busy doing things that matter.
                </p>
                <p className="italic text-gray-600 border-l-3 border-blue-500 pl-3 py-2 text-sm">
                  The task of the modern educator is not to cut down jungles, 
                  but to irrigate deserts.
                </p>
              </div>
            </div>

            {/* Signature */}
            <div className="pt-6 border-t border-gray-100">
              <div className="text-gray-500 italic mb-2 text-sm">Sigmatava</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">Johnson Smith</h4>
                <p className="text-blue-600 text-sm">Everest Director</p>
              </div>
            </div>
          </div>

          {/* Right Column - Images Grid */}
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {/* Big Image - Takes 2 columns */}
            <div className="col-span-2 row-span-2">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md group">
                <img 
                  src="./director.jpg"
                  alt="Director with students"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-sm font-medium">Inspiring Young Minds</p>
                </div>
              </div>
            </div>

            {/* Top Small Image */}
            <div className="col-span-1">
              <div className="relative h-32 md:h-40 rounded-lg overflow-hidden shadow-sm group">
                <img 
                  src="./student1.jpg"
                  alt="Science lab"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <p className="text-xs font-medium">STEM Lab</p>
                </div>
              </div>
            </div>

            {/* Bottom Small Image */}
            <div className="col-span-1">
              <div className="relative h-32 md:h-40 rounded-lg overflow-hidden shadow-sm group">
                <img 
                  src="./student1.jpg"
                  alt="Mentorship"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <p className="text-xs font-medium">Mentorship</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Message;