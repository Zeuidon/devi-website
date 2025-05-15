import React from 'react';

function StoryPage() {
  const artisanStories = [
    {
      name: 'Maya Patel',
      image: '/images/artisan-maya.jpg',
      quote: '"DEVI gave me the opportunity to support my family and showcase my craft."',
      background: 'Textile Weaver from Gujarat'
    },
    {
      name: 'Lakshmi Devi',
      image: '/images/artisan-lakshmi.jpg',
      quote: '"Through this work, I have gained financial independence and confidence."',
      background: 'Embroidery Specialist from Rajasthan'
    }
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 text-[#73320D]">
          Artisan Stories
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-[#A7C4BC]">
          Behind every DEVI bag is a story of resilience, skill, and empowerment. 
          Meet the incredible women who breathe life into our designs.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12">
        {artisanStories.map((artisan, index) => (
          <div 
            key={index} 
            className="bg-[#A7C4BC] rounded-lg overflow-hidden shadow-lg"
          >
            <img 
              src={artisan.image} 
              alt={artisan.name} 
              className="w-full h-96 object-cover"
            />
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-[#73320D]">
                {artisan.name}
              </h2>
              <p className="italic text-[#73320D] mb-4">
                {artisan.background}
              </p>
              <blockquote className="text-xl mb-6 text-[#6A5ACD]">
                {artisan.quote}
              </blockquote>
            </div>
          </div>
        ))}
      </section>

      <section className="text-center mt-16">
        <h2 className="text-3xl font-bold mb-8 text-[#73320D]">
          Our Collective Impact
        </h2>
        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-[#6A5ACD]">Education</h3>
            <p className="text-[#A7C4BC]">Supporting skill development</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#6A5ACD]">Empowerment</h3>
            <p className="text-[#A7C4BC]">Creating economic opportunities</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#6A5ACD]">Community</h3>
            <p className="text-[#A7C4BC]">Preserving traditional crafts</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StoryPage;