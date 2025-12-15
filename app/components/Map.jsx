import React from 'react';

const Map = () => {
  // Replace this with your actual Google Maps embed code
  const googleMapsEmbedCode = `
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.854360744078!2d36.80327297501466!3d-1.2437992357848814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f176b6f5c5c67%3A0x8f1a1a7f0e1e1e1e!2sWestlands%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v169876543210!5m2!1sen!2ske" 
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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Find Our Campus
            </h2>
            <p className="text-gray-600">
              Visit us at our convenient location in Nairobi
            </p>
          </div>

          {/* Google Maps Container */}
          <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200">
            <div className="h-80 md:h-96 lg:h-[500px] relative">
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
                    <div className="text-gray-600 text-xs">Westlands, Nairobi</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Address Bar */}
            <div className="bg-white p-4 md:p-6 border-t border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="font-bold text-gray-900">📍 Disney Victors Primary School</div>
                  <div className="text-gray-600 text-sm mt-1">
                    Westlands Road, Nairobi, Kenya
                  </div>
                </div>
                <div className="flex gap-3">
                  <a 
                    href="https://www.google.com/maps/dir//Disney+Victors+Primary+School+Nairobi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition-colors flex items-center gap-2"
                  >
                    <span>🚗</span>
                    <span>Get Directions</span>
                  </a>
                  <a 
                    href="tel:+254700000000"
                    className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg text-sm transition-colors flex items-center gap-2"
                  >
                    <span>📞</span>
                    <span>Call Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;