import React from 'react';

const NewsFeed = () => {
  const newsItems = [
    {
      id: 1,
      date: "27 April, 2024",
      title: "Promoting Quality Learning at Disney Victors Junior School",
      excerpt: "Disney Victors Junior School continues to foster academic excellence through engaging lessons, dedicated teachers, and a supportive learning environment.",
      image: "./hero.jpg"

    },
    {
      id: 2,
      date: "5 July, 2024",
      title: "Visitation Day at Disney Victors Junior School",
      excerpt: "Parents and guardians joined us to explore classrooms, meet teachers, and celebrate the achievements of our students.",

      image: "./visitation.jpg"
    },
    {
      id: 3,
      date: "10 June, 2024",
      title: "Annual Sports Day Celebration",
      excerpt: "Students showcased their athletic skills, teamwork, and school spirit during a day full of fun and competitive sports activities.",

      image: "./sports.jpg"
    }
  ];

  return (
    <section className="py-10 bg-white px-6">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Latest News</h2>
          <p className="text-gray-600 text-sm">Stay updated with our latest activities</p>
        </div>

        {/* Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {newsItems.map((news) => (
            <div key={news.id} className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <div className="text-gray-500 text-xs mb-2">{news.date}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-2 line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                  {news.excerpt}
                </p>
                <button className="text-blue-600 hover:text-blue-700 text-xs font-medium">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded text-sm transition-colors">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsFeed;