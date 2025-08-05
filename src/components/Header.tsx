import React, { useEffect, useState } from "react";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
    const [hideContactBar, setHideContactBar] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            if (window.scrollY > 20 && window.scrollY > lastScrollY) {
                setHideContactBar(true);
            } else if (window.scrollY < lastScrollY || window.scrollY <= 20) {
                setHideContactBar(false);
            }
            lastScrollY = window.scrollY;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="w-full sticky top-0 z-50">
            {/* Top Contact Bar */}
            <div
                className={`bg-primary-dark text-primary-foreground py-2 px-4 transition-transform duration-300 ${
                    hideContactBar ? "-translate-y-full" : "translate-y-0"
                }`}
                style={{ willChange: "transform" }}
            >
                <div className="md:container mx-auto flex justify-between items-center text-sm">
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
            <nav
                className={`bg-white shadow-md py-2 px-4 sticky top-0 z-50 transition-transform duration-300 ${
                    hideContactBar ? "-translate-y-10" : "translate-y-0"
                }`}
                style={{ willChange: "transform" }}
            >
                <div className="md:container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="w-12 h-12  rounded-lg flex items-center justify-center mr-3">
                            <img
                                src="./img/logo.png"
                                alt="logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-primary">
                                Green Bangla
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Equipment Rental
                            </p>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden lg:flex space-x-8">
                        <a
                            href="#home"
                            className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                            Home
                        </a>
                        <a
                            href="#products"
                            className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                            Rental
                        </a>
                        <a
                            href="#about"
                            className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                            About
                        </a>

                        <a
                            href="#projects"
                            className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                            Projects
                        </a>
                        <a
                            href="#clients"
                            className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                            Clients
                        </a>
                        <a
                            href="#contact"
                            className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Contact Button */}
                    <Button
                        className="hidden md:flex"
                        onClick={() =>
                            document
                                .getElementById("contact")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        Get Quote
                    </Button>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="outline"
                        size="sm"
                        className="lg:hidden"
                        onClick={toggleMobileMenu}
                    >
                        <Menu className="w-5 h-5" />
                    </Button>
                </div>
            </nav>

            {/* Full Screen Mobile Menu */}
            <div
                className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${
                    isMobileMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                }`}
            >
                {/* Blur Background */}
                <div 
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    onClick={closeMobileMenu}
                ></div>
                
                {/* Close Button - Same position as menu button */}
                <div className="absolute top-4 right-4 z-[60]">
                    <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/90 backdrop-blur-sm border-white/20 hover:bg-white shadow-lg"
                        onClick={closeMobileMenu}
                    >
                        <X className="w-5 h-5" />
                    </Button>
                </div>

                {/* Menu Content */}
                <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 mx-4 w-full max-w-sm">
                        <div className="space-y-0">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-bold text-foreground">Menu</h2>
                                <div className="w-16 h-1 bg-secondary mx-auto mt-2 rounded-full"></div>
                            </div>
                            
                            <a
                                href="#home"
                                className="block py-4 text-lg text-foreground hover:text-primary transition-colors font-medium text-center border-b border-gray-200"
                                onClick={closeMobileMenu}
                            >
                                Home
                            </a>
                            <a
                                href="#products"
                                className="block py-4 text-lg text-foreground hover:text-primary transition-colors font-medium text-center border-b border-gray-200"
                                onClick={closeMobileMenu}
                            >
                                Rental
                            </a>
                            <a
                                href="#about"
                                className="block py-4 text-lg text-foreground hover:text-primary transition-colors font-medium text-center border-b border-gray-200"
                                onClick={closeMobileMenu}
                            >
                                About
                            </a>
                            <a
                                href="#projects"
                                className="block py-4 text-lg text-foreground hover:text-primary transition-colors font-medium text-center border-b border-gray-200"
                                onClick={closeMobileMenu}
                            >
                                Projects
                            </a>
                            <a
                                href="#clients"
                                className="block py-4 text-lg text-foreground hover:text-primary transition-colors font-medium text-center border-b border-gray-200"
                                onClick={closeMobileMenu}
                            >
                                Clients
                            </a>
                            <a
                                href="#contact"
                                className="block py-4 text-lg text-foreground hover:text-primary transition-colors font-medium text-center border-b border-gray-200"
                                onClick={closeMobileMenu}
                            >
                                Contact
                            </a>
                            <Button
                                className="w-full mt-6 h-12 text-lg"
                                onClick={() => {
                                    closeMobileMenu();
                                    document
                                        .getElementById("contact")
                                        ?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                Get Quote
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
