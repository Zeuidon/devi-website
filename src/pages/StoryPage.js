import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import artisanStories from '../data/artisanStories.json';

// Custom Icon Components
const ChevronLeft = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const MapPin = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const Award = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const Heart = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

function StoryPage() {
  const [currentStory, setCurrentStory] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % artisanStories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + artisanStories.length) % artisanStories.length);
  };

  // const impactStats = [
  //   { number: '300+', label: 'Women Empowered', icon: Heart },
  //   { number: '6+', label: 'Villages Reached', icon: MapPin },
  //   { number: '2', label: 'Traditional Crafts Preserved', icon: Award }
  // ];

  // Separate founder from other artisans
  const founder = artisanStories.find(artisan => artisan.specialty === "Founder of DEVI");
  const otherArtisans = artisanStories.filter(artisan => artisan.specialty !== "Founder of DEVI");

  return (
    <div className="bg-gradient-to-b from-[#F4D19C]/20 to-[#A7C4BC]/20 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 px-4 md:px-6 text-center overflow-hidden bg-gradient-to-b from-[#F4D19C]/30 to-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#73320D]/5 to-[#A7C4BC]/10"></div>
        <div className="relative container mx-auto">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#73320D] tracking-tight"
            data-animate
            id="hero-title"
          >
            Our Story
          </h1>
          <p className="max-w-4xl mx-auto text-lg md:text-xl lg:text-2xl text-[#73320D]/80 leading-relaxed">
            Behind every DEVI bag is a story of resilience, skill, and empowerment. 
            Meet the incredible women who breathe life into our designs with their masterful craftsmanship.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Featured Artisan Carousel */}
      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 relative">
                <img 
                  src={artisanStories[currentStory].image}
                  alt={artisanStories[currentStory].name}
                  className="w-full h-80 md:h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#73320D] mb-2">
                    {artisanStories[currentStory].name}
                  </h2>
                  <p className="text-[#6A5ACD] font-semibold text-base md:text-lg">
                    {artisanStories[currentStory].specialty}
                  </p>
                </div>
                
                <blockquote className="text-lg md:text-xl lg:text-2xl text-[#73320D] italic mb-6 border-l-4 border-[#A7C4BC] pl-4">
                  "{artisanStories[currentStory].quote}"
                </blockquote>
                
                <p className="text-[#73320D]/80 mb-6 leading-relaxed text-sm md:text-base">
                  {artisanStories[currentStory].story}
                </p>
                
                {artisanStories[currentStory].impact && artisanStories[currentStory].yearsWithDevi && (
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 text-xs md:text-sm">
                    <div className="bg-[#A7C4BC]/20 px-3 py-2 rounded-full">
                      <span className="font-semibold text-[#73320D]">Impact:</span> {artisanStories[currentStory].impact}
                    </div>
                    <div className="bg-[#6A5ACD]/20 px-3 py-2 rounded-full">
                      <span className="font-semibold text-[#6A5ACD]">With DEVI:</span> {artisanStories[currentStory].yearsWithDevi}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Navigation */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <button 
                onClick={prevStory}
                className="bg-white/90 hover:bg-white text-[#73320D] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <button 
                onClick={nextStory}
                className="bg-white/90 hover:bg-white text-[#73320D] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {artisanStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentStory === index ? 'bg-[#6A5ACD]' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Family */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-gradient-to-b from-white to-[#F4D19C]/10">
        <div className="container mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-[#73320D]"
            data-animate
            id="grid-title"
          >
            Meet Our Family
          </h2>
          
          {/* Founder - Centered */}
          {founder && (
            <div className="max-w-lg mx-auto mb-12 md:mb-16">
              <div 
                className="group bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer hover:-translate-y-2 animate-fade-in-up"
                data-animate
                id="founder-card"
                onClick={() => setCurrentStory(artisanStories.findIndex(a => a.id === founder.id))}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6 md:p-8 text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-[#73320D] mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-[#6A5ACD] font-semibold mb-4 text-base md:text-lg">
                    {founder.specialty}
                  </p>
                  <p className="text-[#73320D]/70 text-sm md:text-base line-clamp-4">
                    {founder.story}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Other Artisans - Grid of 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {otherArtisans.map((artisan, index) => (
              <div 
                key={artisan.id}
                className={`group bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer hover:-translate-y-2 ${
                  isVisible[`artisan-${index}`] ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                data-animate
                id={`artisan-${index}`}
                onClick={() => setCurrentStory(artisanStories.findIndex(a => a.id === artisan.id))}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={artisan.image}
                    alt={artisan.name}
                    className="w-full h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-[#73320D] mb-2">
                    {artisan.name}
                  </h3>
                  <p className="text-[#6A5ACD] font-semibold mb-3 text-sm md:text-base">
                    {artisan.specialty}
                  </p>
                  <p className="text-[#73320D]/70 text-sm line-clamp-3">
                    {artisan.story}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      {/* <section className="py-20 px-4 bg-gradient-to-r from-[#73320D] to-[#6A5ACD]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Our Collective Impact
          </h2>
          <p className="text-xl text-white/80 mb-16 max-w-2xl mx-auto">
            Together, we're creating ripples of change across communities, 
            preserving traditions while building sustainable futures.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {impactStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className={`text-center transform transition-all duration-500 hover:scale-105 ${
                    isVisible[`stat-${index}`] ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  data-animate
                  id={`stat-${index}`}
                >
                  <div className="bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-white/80 text-lg">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-[#F4D19C]/20 to-[#A7C4BC]/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#73320D]">
            Be Part of Their Story
          </h2>
          <p className="text-lg md:text-xl text-[#73320D]/80 mb-8 max-w-2xl mx-auto">
            Every DEVI bag you choose supports these incredible artisans and their families. 
            Join us in celebrating craftsmanship and creating sustainable change.
          </p>
         <Link
           to="/products"
           className="bg-[#6A5ACD] hover:bg-[#5A4ABD] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
         >
           Shop Our Collection
         </Link>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default StoryPage;