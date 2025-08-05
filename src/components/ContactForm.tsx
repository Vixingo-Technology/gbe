import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const { toast } = useToast();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        // Simulate form submission
        setTimeout(() => {
            setSubmitStatus("success");
            setFormData({ name: "", email: "", phone: "", message: "" });
            toast({
                title: "Message sent successfully!",
                description: "We'll get back to you soon.",
            });
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <Card className="p-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50 shadow-2xl border-0 relative overflow-hidden">
            {/* Background pattern overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-60"></div>
            <div className="relative z-10">
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Send us a Message</h3>
                    <p className="text-muted-foreground">
                        Get in touch with us for equipment rental inquiries
                    </p>
                </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                            Full Name *
                        </Label>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            className="h-12 bg-white/80 backdrop-blur-sm border-primary/20 focus:border-primary focus:bg-white transition-all duration-300"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                            Email Address *
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email address"
                            className="h-12 bg-white/80 backdrop-blur-sm border-primary/20 focus:border-primary focus:bg-white transition-all duration-300"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                        Phone Number *
                    </Label>
                    <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="h-12 bg-white/80 backdrop-blur-sm border-primary/20 focus:border-primary focus:bg-white transition-all duration-300"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                        Message *
                    </Label>
                    <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your equipment rental needs..."
                        className="min-h-32 resize-none bg-white/80 backdrop-blur-sm border-primary/20 focus:border-primary focus:bg-white transition-all duration-300"
                    />
                </div>

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-primary hover:bg-primary-dark text-white font-semibold"
                >
                    {isSubmitting ? (
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                        </div>
                    ) : submitStatus === "success" ? (
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" />
                            Message Sent!
                        </div>
                    ) : submitStatus === "error" ? (
                        <div className="flex items-center gap-2">
                            <AlertCircle className="w-4 h-4" />
                            Try Again
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <Send className="w-4 h-4" />
                            Send Message
                        </div>
                    )}
                </Button>
            </form>
            </div>
        </Card>
    );
};

export default ContactForm; 