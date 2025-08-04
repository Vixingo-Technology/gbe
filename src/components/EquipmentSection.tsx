import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const EquipmentSection = () => {
  const equipment = [
    { name: 'Backhoe Loader', image: '/placeholder.svg' },
    { name: 'Dump Truck', image: '/placeholder.svg' },
    { name: 'Mobile Crane', image: '/placeholder.svg' },
    { name: 'Bulldozer', image: '/placeholder.svg' },
    { name: 'Excavator', image: '/placeholder.svg' },
    { name: 'Wheel Loader', image: '/placeholder.svg' },
    { name: 'Tower Crane', image: '/placeholder.svg' },
    { name: 'Concrete Mixer', image: '/placeholder.svg' },
    { name: 'Road Roller', image: '/placeholder.svg' },
    { name: 'Forklift', image: '/placeholder.svg' },
    { name: 'Grader', image: '/placeholder.svg' },
    { name: 'Trencher', image: '/placeholder.svg' },
    { name: 'Compactor', image: '/placeholder.svg' },
    { name: 'Paver', image: '/placeholder.svg' },
    { name: 'Drilling Rig', image: '/placeholder.svg' },
    { name: 'Generator', image: '/placeholder.svg' },
    { name: 'Concrete Pump', image: '/placeholder.svg' },
    { name: 'Skid Steer', image: '/placeholder.svg' }
  ];

  return (
    <section id="products" className="py-20 bg-equipment-bg">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our All Construction Heavy Equipments
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {equipment.map((item, index) => (
            <Card key={index} className="group hover:shadow-[var(--shadow-equipment)] transition-all duration-300 bg-equipment-card border-0 overflow-hidden">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground text-center group-hover:text-primary transition-colors duration-300">
                  {item.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>

        {/* Floating Sidebar Button */}
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
          <Button 
            className="bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-l-lg rounded-r-none shadow-lg writing-mode-vertical"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            List of Equipment
          </Button>
        </div>

        {/* Mobile Equipment List Button */}
        <div className="text-center lg:hidden">
          <Button className="bg-secondary hover:bg-secondary-light">
            View Complete Equipment List
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;