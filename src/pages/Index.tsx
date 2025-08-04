import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import EquipmentSection from '@/components/EquipmentSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ClientsSection from '@/components/ClientsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <EquipmentSection />
      <AboutSection />
      <ProjectsSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
