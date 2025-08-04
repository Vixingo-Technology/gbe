import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">ABOUT</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-[var(--shadow-card)] p-8 md:p-12">
            <p className="text-lg leading-relaxed text-muted-foreground text-justify mb-6">
              Green Bangla Equipment is a leading construction equipment rental company in Bangladesh, 
              providing comprehensive solutions for all types of construction projects. With over a decade 
              of experience in the industry, we have established ourselves as a trusted partner for 
              contractors, builders, and infrastructure developers across the country.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground text-justify mb-6">
              Our extensive fleet includes modern heavy machinery, excavators, bulldozers, cranes, 
              and specialized equipment that meets international standards. We pride ourselves on 
              maintaining our equipment to the highest standards, ensuring reliable performance and 
              safety for every project.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground text-justify mb-6">
              From small residential projects to large-scale industrial developments, we provide 
              flexible rental solutions tailored to our clients' specific needs. Our experienced 
              team of professionals ensures prompt delivery, professional service, and technical 
              support throughout the rental period.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground text-justify">
              At Green Bangla Equipment, we are committed to supporting Bangladesh's infrastructure 
              development through reliable equipment rental services, competitive pricing, and 
              uncompromising quality standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;