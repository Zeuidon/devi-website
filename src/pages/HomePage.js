import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

const Sparkles = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
  </svg>
);

const Heart = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const Globe = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

function HomePage() {
  const images = [
    '/images/Homepage1_art.png',
    '/images/Homepage2_art.png',
    '/images/Homepage3_art.png'
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial screen size detection
    handleResize();
    window.addEventListener('resize', handleResize);

    // Start the image slideshow
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000); // Slightly slower transition

    // Intersection Observer for animations
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

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  const featuredProducts = [
    {
      id: 1,
      name: 'Lux Tote',
      image: '/images/product1.png',
      description: 'Elegant and spacious, perfect for daily essentials'
    },
    {
      id: 2,
      name: 'Festive Charm Pouch',
      image: '/images/product2.png',
      description: 'Beautiful festive design with traditional craftsmanship'
    },
    {
      id: 3,
      name: 'KP Tote',
      image: '/images/product3.png',
      description: 'Versatile design meets sustainable fashion'
    }
  ];

  const missionPoints = [
    { 
      icon: Heart, 
      title: 'Empowering Women', 
      description: 'Supporting women artisans and their families through sustainable employment'
    },
    { 
      icon: Globe, 
      title: 'Sustainable Fashion', 
      description: 'Creating eco-friendly products that minimize environmental impact'
    },
    { 
      icon: Sparkles, 
      title: 'Preserving Heritage', 
      description: 'Keeping traditional craftsmanship alive for future generations'
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-gradient-to-b from-[#F4D19C]/20 to-[#A7C4BC]/20 min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 transition-opacity duration-1000 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${images[currentImage]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 md:px-6 max-w-6xl mx-auto">
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight"
            style={{ color: '#F4D19C' }}
            data-animate
            id="hero-title"
          >
            Empowering Artisans, One Bag at a Time
          </h1>
          <p 
            className="text-xl md:text-2xl lg:text-3xl mb-8 md:mb-12 leading-relaxed max-w-4xl mx-auto"
            style={{ color: '#A7C4BC' }}
            data-animate
            id="hero-subtitle"
          >
            Sustainable Fashion That Transforms Lives
          </p>
          <div
            data-animate
            id="hero-cta"
          >
            <Link 
              to="/products" 
              className="inline-block px-8 md:px-12 py-4 md:py-5 rounded-full text-white font-bold text-lg md:text-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
              style={{ 
                backgroundColor: '#6A5ACD',
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#73320D';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#6A5ACD';
                e.target.style.transform = 'scale(1)';
              }}
            >
              Explore Our Collection
            </Link>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 left-4 md:left-6 transform -translate-y-1/2 z-20">
          <button 
            onClick={prevImage}
            className="bg-white/20 hover:bg-white/30 text-white p-3 md:p-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
        <div className="absolute top-1/2 right-4 md:right-6 transform -translate-y-1/2 z-20">
          <button 
            onClick={nextImage}
            className="bg-white/20 hover:bg-white/30 text-white p-3 md:p-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                currentImage === index ? 'bg-[#F4D19C] scale-125' : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Enhanced Featured Products */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-white to-[#F4D19C]/10">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#73320D] mb-4 md:mb-6 tracking-tight"
              data-animate
              id="products-title"
            >
              Featured Products
            </h2>
            <p 
              className="text-lg md:text-xl text-[#73320D]/80 max-w-2xl mx-auto"
              data-animate
              id="products-subtitle"
            >
              Discover our handcrafted collection that blends traditional artistry with modern design
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id}
                className={`group bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer ${
                  isVisible[`product-${index}`] ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                data-animate
                id={`product-${index}`}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">{product.description}</p>
                  </div>
                </div>
                <div className="p-6 md:p-8 text-center">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#73320D] group-hover:text-[#6A5ACD] transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="w-16 h-1 bg-[#A7C4BC] mx-auto group-hover:bg-[#6A5ACD] transition-colors duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Mission Section */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gradient-to-r from-[#A7C4BC] via-[#A7C4BC] to-[#6A5ACD]/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-[#73320D] rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-[#73320D] rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-[#73320D] rounded-full"></div>
        </div>

        <div className="container mx-auto relative">
          <div className="text-center mb-16 md:mb-20">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-[#73320D] tracking-tight"
              data-animate
              id="mission-title"
            >
              Our Mission
            </h2>
            <p 
              className="max-w-4xl mx-auto text-lg md:text-xl lg:text-2xl text-[#73320D] leading-relaxed"
              data-animate
              id="mission-description"
            >
              DEVI is more than a bag brand. We're a movement empowering women artisans, 
              preserving traditional craftsmanship, and creating sustainable fashion that 
              tells a powerful story of transformation and hope.
            </p>
          </div>

          {/* Mission Points */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
            {missionPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <div 
                  key={index}
                  className={`text-center group hover:scale-105 transition-all duration-500 ${
                    isVisible[`mission-${index}`] ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  data-animate
                  id={`mission-${index}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="bg-white/30 backdrop-blur-sm rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mx-auto mb-6 group-hover:bg-white/40 transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="w-10 h-10 md:w-12 md:h-12 text-[#73320D]" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#73320D] mb-4 group-hover:text-[#6A5ACD] transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="text-[#73320D]/80 leading-relaxed text-sm md:text-base">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-[#F4D19C]/20 to-[#A7C4BC]/20">
        <div 
          className="container mx-auto text-center"
          data-animate
          id="cta-section"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#73320D]">
            Join Our Movement
          </h2>
          <p className="text-lg md:text-xl text-[#73320D]/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Every bag tells a story of empowerment. Be part of the change that transforms lives 
            while embracing sustainable fashion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-[#6A5ACD] hover:bg-[#5A4ABD] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Shop Collection
            </Link>
            <Link
              to="/stories"
              className="bg-transparent border-2 border-[#73320D] text-[#73320D] hover:bg-[#73320D] hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Read Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
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
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0,-30px,0);
          }
          70% {
            transform: translate3d(0,-15px,0);
          }
          90% {
            transform: translate3d(0,-4px,0);
          }
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .7;
          }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}

export default HomePage;