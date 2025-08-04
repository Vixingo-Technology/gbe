import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Contact Bar */}
      <div className="bg-primary-dark text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+880-1234-567890</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Email: info@greenbanglaequipment.com</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md py-4 px-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mr-3">
              <img src="./img/logo.png" alt="logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Green Bangla</h1>
              <p className="text-sm text-muted-foreground">Equipment Rental</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors font-medium">Products</a>
            <a href="#projects" className="text-foreground hover:text-primary transition-colors font-medium">Projects</a>
            <a href="#clients" className="text-foreground hover:text-primary transition-colors font-medium">Clients</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
          </div>

          {/* Contact Button */}
          <Button className="hidden md:flex">
            Get Quote
          </Button>

          {/* Mobile Menu Button */}
          <Button variant="outline" size="sm" className="lg:hidden">
            Menu
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;