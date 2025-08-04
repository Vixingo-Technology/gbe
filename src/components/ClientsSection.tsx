import React from 'react';

const ClientsSection = () => {
  // Client logos (using placeholder for now)
  const clients = Array(12).fill('/placeholder.svg');
  const sisterCompanies = Array(4).fill('/placeholder.svg');

  return (
    <section id="clients" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Clients Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">CLIENTS</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
          {clients.map((logo, index) => (
            <div key={index} className="bg-white rounded-lg shadow-[var(--shadow-card)] p-6 hover:shadow-[var(--shadow-equipment)] transition-shadow duration-300 flex items-center justify-center">
              <img 
                src={logo} 
                alt={`Client ${index + 1}`}
                className="max-w-full h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Sister Concern Companies */}
        <div className="border-t pt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              OUR SISTER CONCERN COMPANY
            </h3>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {sisterCompanies.map((logo, index) => (
              <div key={index} className="bg-white rounded-lg shadow-[var(--shadow-card)] p-8 hover:shadow-[var(--shadow-equipment)] transition-shadow duration-300 flex items-center justify-center">
                <img 
                  src={logo} 
                  alt={`Sister Company ${index + 1}`}
                  className="max-w-full h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;