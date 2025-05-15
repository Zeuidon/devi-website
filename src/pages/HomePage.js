import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {

  const images = [
    '/images/Homepage1_art.png',
    '/images/Homepage2_art.png',
    '/images/Homepage3_art.png'
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
    }, 3000);
  
    // Cleanup function to remove event listener and interval
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, []);
  
  

  const featuredProducts = [
    {
      id: 1,
      name: 'Lux Tote',
      // price: ,
      image: '/images/product1_edit.png',
      // description: ''
    },
    {
      id: 2,
      name: 'Festive Charm Pouch',
      // price: ,
      image: '/images/product2_edit.png',
      // description: ''
    },
    {
      id: 3,
      name: 'KP Tote',
      // price: ,
      image: '/images/product3_edit.png',
      // description: ''
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen py-32 flex items-center justify-center bg-cover bg-center transition-opacity duration-1000" 
        style={{ 
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: '#F4D19C' }}>
            Empowering Artisans, One Bag at a Time
          </h1>
          <p className="text-xl mb-8" style={{ color: '#A7C4BC' }}>
            Sustainable Fashion That Transforms Lives
          </p>
          <Link 
            to="/products" 
            className="px-8 py-3 rounded-full text-white font-bold"
            style={{ 
              backgroundColor: '#6A5ACD', 
              transition: 'background-color 0.3s ease' 
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#73320D'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#6A5ACD'}
          >
            Explore Our Collection
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#73320D]">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <div 
              key={product.id} 
              className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full aspect-square object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-[#73320D]">
                  {product.name}
                </h3>
                {/* <p className="text-[#A7C4BC] mb-4">
                  {product.description}
                </p>
                <p className="text-[#6A5ACD] font-bold text-lg">
                  ${product.price.toFixed(2)}
                </p> */}
                {/* <Link
                  to={`/products/${product.id}`}
                  className="mt-4 inline-block px-6 py-2 rounded-full text-white"
                  style={{ 
                    backgroundColor: '#6A5ACD', 
                    transition: 'background-color 0.3s ease' 
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#73320D'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#6A5ACD'}
                >
                  View Details
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-[#A7C4BC] py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8 text-[#73320D]">
            Our Mission
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-[#73320D]">
            DEVI is more than a bag brand. We're a movement empowering women artisans, 
            preserving traditional craftsmanship, and creating sustainable fashion that 
            tells a powerful story of transformation and hope.
          </p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;