import React, { useState } from 'react';

function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const products = [
    {
      id: 1,
      name: 'EcoSip Tote',
      price: '',
      image: '/images/product4_edit.png',
      category: 'tote',
      description: '',
      materials: []
    },
    {
      id: 2,
      name: 'Boho Bloom Tote',
      price: '',
      image: '/images/product5_edit.png',
      category: 'tote',
      description: '',
      materials: []
    },
    {
      id: 3,
      name: 'The Quadra Tote',
      price: '',
      image: '/images/product6_edit.png',
      category: 'tote',
      description: '',
      materials: []
    }
    // Add more products here
  ];

  const filteredProducts = products
    .filter(product => 
      selectedCategory === 'all' || product.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-12 text-center text-[#73320D]">
        Our Sustainable Collection
      </h1>

      {/* <div className="flex justify-between mb-8">
        <div className="space-x-4">
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border rounded text-[#73320D]"
          >
            <option value="all">All Categories</option>
            <option value="tote">Tote Bags</option>
            <option value="crossbody">Crossbody Bags</option>
          </select>
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border rounded text-[#73320D]"
          >
            <option value="name">Sort by Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <div 
            key={product.id} 
            className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="w-full aspect-[4/3]">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2 text-[#73320D]">
                {product.name}
              </h3>
              {/* <p className="text-[#A7C4BC] mb-4">{product.description}</p> */}
              {/* <div className="mb-4">
                <span className="font-bold text-[#73320D]">Materials: </span>
                {product.materials.join(', ')}
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#6A5ACD] font-bold text-lg">
                  ${product.price.toFixed(2)}
                </p>
                <button 
                  className="px-4 py-2 rounded-full text-white"
                  style={{ 
                    backgroundColor: '#6A5ACD', 
                    transition: 'background-color 0.3s ease' 
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#73320D'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#6A5ACD'}
                >
                  Add to Cart
                </button>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;