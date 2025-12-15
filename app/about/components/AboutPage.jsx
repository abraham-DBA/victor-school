import React from 'react';

const AboutPage = () => {
  const coreValues = [
    {
      icon: "🎯",
      title: "Excellence",
      description: "Striving for the highest standards in academics and character"
    },
    {
      icon: "🤝",
      title: "Integrity",
      description: "Upholding honesty and moral principles in all actions"
    },
    {
      icon: "❤️",
      title: "Respect",
      description: "Valuing every individual and fostering mutual understanding"
    },
    {
      icon: "🌱",
      title: "Innovation",
      description: "Embracing creativity and modern teaching methods"
    },
    {
      icon: "👥",
      title: "Community",
      description: "Building strong partnerships with parents and society"
    },
    {
      icon: "🌟",
      title: "Growth",
      description: "Nurturing continuous development and lifelong learning"
    }
  ];

  const leadershipTeam = [
    {
      name: "Dr. Jane Doe",
      position: "Director & Founder",
      qualification: "Ph.D. in Education, M.Ed.",
      experience: "25+ years in primary education"
    },
    {
      name: "Mr. John Smith",
      position: "Head Teacher",
      qualification: "M.Ed. in Curriculum Development",
      experience: "18 years teaching experience"
    },
    {
      name: "Mrs. Sarah Johnson",
      position: "Deputy Head Teacher",
      qualification: "M.Ed. in Child Psychology",
      experience: "15 years in school administration"
    }
  ];

  const milestones = [
    { year: "1998", event: "School Founded with 50 students" },
    { year: "2005", event: "First computer lab established" },
    { year: "2010", event: "Expanded to include full primary levels" },
    { year: "2015", event: "Awarded Best Primary School in Nairobi" },
    { year: "2020", event: "Modern science lab and library opened" },
    { year: "2023", event: "Achieved 98% national exam success rate" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
              <span className="text-lg">🏫</span>
              <span className="font-semibold">ABOUT OUR SCHOOL</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Welcome to Disney Victors Primary School
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A premier institution dedicated to nurturing young minds through innovative education 
              and holistic development.
            </p>
            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide a holistic education that empowers every child to achieve their fullest 
                potential through excellence in academics, character building, and community service. 
                We create a nurturing environment where students develop critical thinking, creativity, 
                and compassion to become responsible global citizens.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">👁️</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the leading primary school in developing innovative, compassionate, and globally 
                competitive learners who make a positive impact on society. We envision a community of 
                lifelong learners equipped with 21st-century skills to navigate an ever-changing world 
                with confidence and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <div className="h-1 w-16 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  Founded in 1998 by Dr. Jane Doe, Disney Victors Primary School began with a simple 
                  yet powerful vision: to create a learning environment where every child's potential 
                  could be nurtured and celebrated. What started as a small school with just 50 students 
                  has grown into one of Nairobi's most respected primary institutions.
                </p>
                <p className="text-gray-700 mb-6">
                  Over the past 25+ years, we have remained committed to our founding principles while 
                  continuously adapting to meet the evolving needs of education. Our journey has been 
                  marked by steady growth, academic excellence, and a deep commitment to holistic 
                  child development.
                </p>
                <p className="text-gray-700">
                  Today, we stand proud of our legacy while looking forward to the future, embracing 
                  innovation while preserving the core values that have defined us from the beginning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Disney Victors
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow hover:border-blue-200"
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experienced educators dedicated to guiding our school community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="p-6">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 text-2xl font-bold">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{leader.name}</h3>
                  <p className="text-blue-600 font-medium text-center mb-3">{leader.position}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-500">🎓</span>
                      <span>{leader.qualification}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-500">⏱️</span>
                      <span>{leader.experience}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Quick Stats */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
              <div className="text-sm opacity-90">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">Exam Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Qualified Staff</div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Facilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Modern infrastructure to support comprehensive learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">💻</div>
              <h3 className="font-bold text-gray-900 mb-2">Computer Labs</h3>
              <p className="text-gray-600 text-sm">Modern technology for digital literacy</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="font-bold text-gray-900 mb-2">Science Labs</h3>
              <p className="text-gray-600 text-sm">Hands-on experimental learning</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="font-bold text-gray-900 mb-2">Library</h3>
              <p className="text-gray-600 text-sm">Extensive collection of books</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">⚽</div>
              <h3 className="font-bold text-gray-900 mb-2">Sports Complex</h3>
              <p className="text-gray-600 text-sm">Indoor & outdoor facilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Join Our School Community
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover why Disney Victors Primary School is the perfect choice for your child's 
              educational journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors"
              >
                Contact Us
              </a>
              <a 
                href="/admissions"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold rounded-lg transition-colors"
              >
                Learn About Admissions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;