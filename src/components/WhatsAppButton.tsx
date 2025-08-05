import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
    const handleWhatsAppClick = () => {
        const phoneNumber = "+8801300109893"; // Replace with your actual WhatsApp number
        const message = "Hello! I'm interested in your construction equipment rental services. Can you please provide more information?";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Pulse animation ring */}
            <div className="absolute inset-0 w-16 h-16 bg-green-500 rounded-full animate-ping opacity-20"></div>
            
            <button
                onClick={handleWhatsAppClick}
                className="relative w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                aria-label="Contact us on WhatsApp"
            >
                <MessageCircle className="w-8 h-8" />
                
                {/* Tooltip */}
                <div className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Chat on WhatsApp
                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                </div>
            </button>
        </div>
    );
};

export default WhatsAppButton; 