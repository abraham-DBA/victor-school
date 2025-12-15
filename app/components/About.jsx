import React from 'react';

const About = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
          
          {/* Left Column - Image */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img 
                src="/hero.jpg"
                alt="Disney Victors Junior School Campus"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
            {/* Image Decoration */}
            <div className="absolute -bottom-3 -right-3 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
              <span className="text-sm font-semibold">Est. 1998</span>
            </div>
          </div>

          {/* Right Column - Brief Information */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                About Disney Victors Junior School
              </h2>
              <div className="h-1 w-16 bg-blue-600 mb-4"></div>
            </div>

            <div className="space-y-3 text-gray-700">
              <p>
                Disney Victors Junior School is a premier educational institution dedicated to 
                nurturing young minds through innovative teaching methods and holistic development.
              </p>
              
              <p>
                With over 25 years of excellence, we provide a supportive environment where students 
                develop academic skills, critical thinking, and strong character values.
              </p>

              {/* Quick Highlights */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Academic Excellence</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Modern Facilities</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Qualified Staff</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Holistic Development</span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-4">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm">
                Learn More About Our School
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;