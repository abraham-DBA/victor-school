import React from 'react';

const WhyChoseUs = () => {
  return (
    <section className="py-12 md:py-16 px-6 bg-gradient-to-b from-gray-100 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold tracking-wider uppercase mb-3">
            WHY CHOOSE DISNEY VICTORS
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            A choice that makes the difference.
          </h2>
          <div className="h-1 w-16 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          
          {/* Left Column - Main Features */}
          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Experienced Staff</h3>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <p className="text-gray-600">
                  Our team of certified educators brings years of expertise in child development 
                  and modern teaching methodologies.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-purple-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Executive Courses</h3>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded flex items-center justify-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                <p className="text-gray-600">
                  Comprehensive curriculum designed to develop leadership skills and prepare 
                  students for academic excellence.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dedicated Support</h3>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <p className="text-gray-600">
                  Personalized attention and support system ensuring every student receives 
                  the guidance they need to succeed.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Bullet Points */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Our Approach</h3>
            
            <div className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Individual Equipment</h4>
                    <p className="text-sm text-gray-600">
                      Personalized learning tools and resources for each student
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Progress Tracking</h4>
                    <p className="text-sm text-gray-600">
                      Regular assessments and performance monitoring
                    </p>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Modern Facilities</h4>
                    <p className="text-sm text-gray-600">
                      State-of-the-art classrooms and learning spaces
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Technology Integration</h4>
                    <p className="text-sm text-gray-600">
                      Digital tools enhancing the learning experience
                    </p>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Safety First</h4>
                    <p className="text-sm text-gray-600">
                      Secure campus with comprehensive safety measures
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Holistic Development</h4>
                    <p className="text-sm text-gray-600">
                      Focus on academic, social, and emotional growth
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Consequential Impact */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h4 className="font-bold text-blue-700 mb-2">Consequential Benefits</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">98%</div>
                  <div className="text-xs text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">25+</div>
                  <div className="text-xs text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">100%</div>
                  <div className="text-xs text-gray-600">Parent Trust</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChoseUs;