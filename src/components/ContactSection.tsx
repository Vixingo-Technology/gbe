import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import ContactForm from "./ContactForm";

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        CONTACT
                    </h2>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
                </div>

               

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Map */}
                    <div className="relative">
                     {/* Contact Form */}
                <div className="mb-16 ">
                    <ContactForm />
                </div>
                        
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1131288.8692543032!2d90.33415531402672!3d24.055521395421817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375401000ff35d77%3A0x7c3db0aeac1d44b8!2sGreen%20Bangla%20Equipment!5e0!3m2!1sen!2sbd!4v1754372608181!5m2!1sen!2sbd"
                            width="400"
                            height="300"
                            className="w-full h-96 rounded-lg shadow-lg"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6 mt-12">
                        <Card className="p-6 border-l-4 border-l-primary shadow-[var(--shadow-card)]">
                            <div className="flex items-start gap-4">
                                <Mail className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h3 className="text-xl font-semibold text-foreground mb-2">
                                        Inquiries
                                    </h3>
                                    <p className="text-muted-foreground mb-2">
                                        Email: info@greenbanglaequipment.com
                                    </p>
                                    <p className="text-muted-foreground">
                                        Phone: +880-1234-567890
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 border-l-4 border-l-secondary shadow-[var(--shadow-card)]">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-secondary mt-1" />
                                <div>
                                    <h3 className="text-xl font-semibold text-foreground mb-2">
                                        Head Office
                                    </h3>
                                    <p className="text-muted-foreground mb-2">
                                        123 Business District
                                        <br />
                                        Dhaka - 1000
                                        <br />
                                        Bangladesh
                                    </p>
                                    <p className="text-muted-foreground">
                                        Phone: +880-2-123-4567
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 border-l-4 border-l-primary shadow-[var(--shadow-card)]">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h3 className="text-xl font-semibold text-foreground mb-2">
                                        Yard Location
                                    </h3>
                                    <p className="text-muted-foreground mb-2">
                                        Equipment Storage Facility
                                        <br />
                                        Industrial Area, Savar
                                        <br />
                                        Dhaka, Bangladesh
                                    </p>
                                    <p className="text-muted-foreground">
                                        Phone: +880-1987-654321
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 border-l-4 border-l-secondary shadow-[var(--shadow-card)]">
                            <div className="flex items-start gap-4">
                                <Clock className="w-6 h-6 text-secondary mt-1" />
                                <div>
                                    <h3 className="text-xl font-semibold text-foreground mb-2">
                                        Business Hours
                                    </h3>
                                    <p className="text-muted-foreground mb-1">
                                        Monday - Saturday: 8:00 AM - 6:00 PM
                                    </p>
                                    <p className="text-muted-foreground mb-1">
                                        Sunday: 9:00 AM - 4:00 PM
                                    </p>
                                    <p className="text-muted-foreground">
                                        Emergency: 24/7 Available
                                    </p>
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
