import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import productsData from '../data/products.json';

// Custom Icon Components
const Search = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0118 0z" />
  </svg>
);

const Filter = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
  </svg>
);

const Grid = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);

const ShoppingBag = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z" />
  </svg>
);

const Heart = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState({});
  const [viewMode, setViewMode] = useState('grid');

  // Get products and categories from imported JSON data
  const products = productsData.products;
  const categoriesData = productsData.categories;

  // Generate categories with product counts
  const categories = categoriesData.map(category => ({
    ...category,
    count: category.id === 'all' 
      ? products.length 
      : products.filter(p => p.category === category.id).length
  }));

  // Enhanced filtering logic
  const filteredProducts = products
    .filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.materials.some(material => material.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      // if (sortBy === 'price-low') return a.price - b.price;
      // if (sortBy === 'price-high') return b.price - a.price;
      // if (sortBy === 'featured') return b.featured - a.featured;
      return 0;
    });

  useEffect(() => {
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

    return () => observer.disconnect();
  }, [filteredProducts]);

  return (
    <div className="bg-gradient-to-b from-[#F4D19C]/20 to-[#A7C4BC]/20 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4 md:px-6 bg-gradient-to-r from-[#F4D19C] via-[#F4D19C]/90 to-[#A7C4BC]/30 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-[#73320D] rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-[#73320D] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-[#73320D] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto text-center relative">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-[#73320D] tracking-tight"
            data-animate
            id="products-hero-title"
          >
            Our Sustainable Collection
          </h1>
          <p 
            className="text-lg md:text-xl lg:text-2xl text-[#73320D]/80 max-w-3xl mx-auto leading-relaxed mb-8"
            data-animate
            id="products-hero-subtitle"
          >
            Discover handcrafted treasures that empower artisans and celebrate sustainable fashion
          </p>
          
          {/* Enhanced Search Bar */}
          <div 
            className="max-w-2xl mx-auto relative"
            data-animate
            id="search-bar"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#73320D]/60" />
              <input
                type="text"
                placeholder="Search products, materials, or descriptions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-[#73320D]/20 focus:border-[#6A5ACD] focus:outline-none text-[#73320D] bg-white/90 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Controls Section */}
      <section className="py-8 px-4 md:px-6 bg-white/50 backdrop-blur-sm border-b border-[#73320D]/10">
        <div className="container mx-auto">
          {/* Category Filters */}
          <div 
            className="flex flex-wrap justify-center gap-3 mb-6"
            data-animate
            id="category-filters"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-[#6A5ACD] text-white shadow-lg'
                    : 'bg-white/80 text-[#73320D] hover:bg-[#F4D19C]/50 border border-[#73320D]/20'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Sort and View Controls */}
          <div 
            className="flex flex-col sm:flex-row justify-between items-center gap-4"
            data-animate
            id="controls"
          >
            {/* <div className="flex gap-4">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg border border-[#73320D]/20 text-[#73320D] bg-white/90 focus:outline-none focus:border-[#6A5ACD] transition-colors duration-300"
              >
                <option value="name">Sort by Name</option>
                {
                /* <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="featured">Featured First</option> */
            //     }
            //   </select>
            // </div> */
            }

            <div className="flex items-center gap-2 ml-auto">
              <span className="text-[#73320D]/80 text-sm">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid - Updated to match HomePage style */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-white to-[#F4D19C]/10">
        <div className="container mx-auto">
          {filteredProducts.length === 0 ? (
            <div 
              className="text-center py-20"
              data-animate
              id="no-products"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#A7C4BC]/20 flex items-center justify-center">
                <Search className="w-10 h-10 text-[#73320D]/50" />
              </div>
              <h3 className="text-2xl font-bold text-[#73320D] mb-4">No Products Found</h3>
              <p className="text-[#73320D]/80 mb-6 max-w-md mx-auto">
                Try adjusting your search terms or explore different categories
              </p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-[#6A5ACD] text-white rounded-full hover:bg-[#5A4ABD] transition-colors duration-300"
              >
                View All Products
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.id}
                  className={`group bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer ${
                    isVisible[`product-${index}`] ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  data-animate
                  id={`product-${index}`}
                  style={{ animationDelay: `${index * 100}ms` }}
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
                    <div className="w-16 h-1 bg-[#A7C4BC] mx-auto group-hover:bg-[#6A5ACD] transition-colors duration-300 mb-4"></div>
                    
                    {/* Materials */}
                    {/* <div className="mb-4">
                      <div className="flex flex-wrap justify-center gap-1">
                        {product.materials.map((material, idx) => (
                          <span 
                            key={idx}
                            className="text-xs bg-[#A7C4BC]/20 text-[#73320D] px-2 py-1 rounded-full"
                          >
                            {material}
                          </span>
                        ))}
                      </div>
                    </div> */}

                    {/* Price
                    <p className="text-[#6A5ACD] font-bold text-lg mb-4">
                      ${product.price.toFixed(2)}
                    </p> */}

                    {/* Action Buttons */}
                    {/* <div className="flex gap-2 justify-center">
                      <button className="bg-white border-2 border-[#73320D] text-[#73320D] hover:bg-[#73320D] hover:text-white p-2 rounded-full transition-all duration-300 hover:scale-110">
                        <Heart className="w-5 h-5" />
                      </button> */}
                      {/* <button className="bg-[#6A5ACD] hover:bg-[#5A4ABD] text-white px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105">
                        <ShoppingBag className="w-4 h-4" />
                        <span className="text-sm font-medium">Add to Cart</span>
                      </button> */}
                    {/* </div> */}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-r from-[#A7C4BC] via-[#A7C4BC] to-[#6A5ACD]/20">
        <div 
          className="container mx-auto text-center"
          data-animate
          id="cta-section"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#73320D]">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg md:text-xl text-[#73320D]/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Our artisans can create custom pieces tailored to your unique style and needs. 
            Let's bring your vision to life with sustainable craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <button className="bg-[#6A5ACD] hover:bg-[#5A4ABD] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
              Custom Order
            </button> */}
            <Link
              to="/contact"
              className="bg-transparent border-2 border-[#73320D] text-[#73320D] hover:bg-[#73320D] hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
              Contact Us
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
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
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

export default ProductsPage;