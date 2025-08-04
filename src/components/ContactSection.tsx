import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">CONTACT</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="relative">
            <div className="bg-equipment-bg rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-lg text-muted-foreground">Interactive Map</p>
                <p className="text-sm text-muted-foreground">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-l-primary shadow-[var(--shadow-card)]">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Inquiries</h3>
                  <p className="text-muted-foreground mb-2">Email: info@greenbanglaequipment.com</p>
                  <p className="text-muted-foreground">Phone: +880-1234-567890</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-secondary shadow-[var(--shadow-card)]">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-secondary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Head Office</h3>
                  <p className="text-muted-foreground mb-2">
                    123 Business District<br />
                    Dhaka - 1000<br />
                    Bangladesh
                  </p>
                  <p className="text-muted-foreground">Phone: +880-2-123-4567</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-primary shadow-[var(--shadow-card)]">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Yard Location</h3>
                  <p className="text-muted-foreground mb-2">
                    Equipment Storage Facility<br />
                    Industrial Area, Savar<br />
                    Dhaka, Bangladesh
                  </p>
                  <p className="text-muted-foreground">Phone: +880-1987-654321</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-secondary shadow-[var(--shadow-card)]">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-secondary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Business Hours</h3>
                  <p className="text-muted-foreground mb-1">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground mb-1">Sunday: 9:00 AM - 4:00 PM</p>
                  <p className="text-muted-foreground">Emergency: 24/7 Available</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;