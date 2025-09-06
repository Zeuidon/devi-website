import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Custom Icon Components (matching Story page)
const Leaf = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const Users = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const Globe = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const Recycle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const Heart = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const Award = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

function EnhancedAboutPage() {
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

  const impactMetrics = [
    { 
      stat: '300+', 
      description: 'Women Artisans Empowered',
      icon: Users,
      color: 'from-[#6A5ACD] to-[#8A70D7]'
    },
    { 
      stat: '100%', 
      description: 'Sustainable Materials Used',
      icon: Recycle,
      color: 'from-[#A7C4BC] to-[#87B4A7]'
    },
    { 
      stat: '6', 
      description: 'Villages Supported',
      icon: Globe,
      color: 'from-[#73320D] to-[#8B4A1A]'
    }
  ];

  const missionValues = [
    {
      title: 'Sustainability Commitment',
      description: 'At DEVI, women artisans handcraft eco-friendly jute bags that blend tradition with sustainability—each piece reducing plastic waste and carrying a story of dignity and hope for a greener future.',
      icon: Leaf,
      image: '/images/img1.jpg'
    },
    {
      title: 'Ethical Production',
      description: 'Our artisans receive fair compensation, skill development opportunities, and a platform to showcase their incredible craftsmanship. We believe in economic empowerment through sustainable fashion.',
      icon: Heart,
      image: '/images/img2.jpg'
    }
  ];

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
            Our Mission & Vision
          </h1>
          <p className="max-w-4xl mx-auto text-lg md:text-xl lg:text-2xl text-[#73320D]/80 leading-relaxed">
            DEVI is dedicated to creating sustainable, ethically-produced bags that 
            empower women artisans and preserve traditional craftsmanship while 
            minimizing environmental impact.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:gap-12">
            {missionValues.map((value, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center ${
                  isVisible[`mission-${index}`] ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                data-animate
                id={`mission-${index}`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-xl group">
                    <img 
                      src={value.image}
                      alt={value.title}
                      className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    {/* <div className="absolute top-6 left-6">
                      <div className="bg-white/90 rounded-full p-3">
                        <value.icon className="w-6 h-6 text-[#73320D]" />
                      </div>
                    </div> */}
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#A7C4BC]/20 rounded-full p-3">
                      <value.icon className="w-8 h-8 text-[#73320D]" />
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#73320D]">
                      {value.title}
                    </h2>
                  </div>
                  <p className="text-[#73320D]/80 text-base md:text-lg leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-r from-[#73320D] to-[#6A5ACD] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#73320D] via-[#6A5ACD] to-[#8A70D7] opacity-90"></div>
        <div className="relative container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
              data-animate
              id="impact-title"
            >
              Our Impact
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Every DEVI bag creates ripples of positive change across communities, 
              supporting sustainable livelihoods and preserving traditional craftsmanship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {impactMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div 
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                    isVisible[`metric-${index}`] ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  data-animate
                  id={`metric-${index}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative mb-6">
                    <div className={`bg-gradient-to-br ${metric.color} rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <div className="absolute -inset-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
                    {metric.stat}
                  </h3>
                  <p className="text-white/90 text-base md:text-lg font-medium">
                    {metric.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      {/* <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-white to-[#F4D19C]/10">
        <div className="container mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-[#73320D]"
            data-animate
            id="values-title"
          >
            What Drives Us Forward
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Environmental Stewardship',
                description: 'Every decision we make considers our planet\'s wellbeing, from material sourcing to packaging.',
                icon: Leaf,
                color: 'from-green-400 to-green-600'
              },
              {
                title: 'Women Empowerment',
                description: 'Creating opportunities for women to achieve financial independence through their craft.',
                icon: Users,
                color: 'from-[#6A5ACD] to-[#8A70D7]'
              },
              {
                title: 'Quality Craftsmanship',
                description: 'Honoring traditional techniques while creating products that stand the test of time.',
                icon: Award,
                color: 'from-[#73320D] to-[#8B4A1A]'
              }
            ].map((value, index) => (
              <div 
                key={index}
                className={`group bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible[`value-${index}`] ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                data-animate
                id={`value-${index}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`bg-gradient-to-br ${value.color} rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#73320D] mb-3 md:mb-4">
                  {value.title}
                </h3>
                <p className="text-[#73320D]/70 text-sm md:text-base leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-[#A7C4BC]/20 to-[#F4D19C]/20">
        <div className="container mx-auto text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-[#73320D]"
            data-animate
            id="cta-title"
          >
            Join Our Mission
          </h2>
          <p className="text-lg md:text-xl text-[#73320D]/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Be part of a movement that values people and planet. Every DEVI bag represents 
            a step towards a more sustainable and equitable future.
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
              Meet our Artisans
            </Link>
          </div>
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
      `}</style>
    </div>
  );
}

export default EnhancedAboutPage;