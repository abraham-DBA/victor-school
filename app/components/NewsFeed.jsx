import React from 'react';

const NewsFeed = () => {
  const newsItems = [
    {
      id: 1,
      date: "27 de abril, 2024",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      date: "15 de mayo, 2024",
      title: "Celebramos la Vocación: Día de las Enfermeras",
      excerpt: "Honramos a quienes cuidan de la salud con dedicación y pasión.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      date: "23 al 27 de abril, 2024",
      title: "Lectura que Une: Día del Libro",
      excerpt: "Una semana llena de letras, creatividad y aprendizaje.",
      image: "./hero.jpg"
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