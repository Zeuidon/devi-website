import React from 'react';

function AboutPage() {
  const impactMetrics = [
    { stat: '300+', description: 'Women Artisans Empowered' },
    { stat: '100%', description: 'Sustainable Materials Used' },
    { stat: '6', description: 'Villages Supported' }
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 text-[#73320D]">
          Our Mission & Vision
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-[#A7C4BC]">
          DEVI is dedicated to creating sustainable, ethically-produced bags that 
          empower women artisans and preserve traditional craftsmanship while 
          minimizing environmental impact.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#73320D] text-center">
            Sustainability Commitment
          </h2>
          <p className="text-[#A7C4BC]">
            We use 100% recycled and organic materials, ensuring minimal 
            environmental footprint. Each bag is crafted with care, supporting 
            local communities and promoting fair wage practices.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#73320D] text-center">
            Ethical Production
          </h2>
          <p className="text-[#A7C4BC]">
            Our artisans receive fair compensation, skill development 
            opportunities, and a platform to showcase their incredible 
            craftsmanship. We believe in economic empowerment through 
            sustainable fashion.
          </p>
        </div>
      </section>

      <section className="bg-[#A7C4BC] py-16 rounded-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-[#73320D]">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8 px-2">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-4xl font-bold text-[#6A5ACD] mb-4">
                  {metric.stat}
                </h3>
                <p className="text-[#73320D]">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;