import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "./ui/button";

const ProjectsSection = () => {
    const projectImages = [
        "./img/project/rup.jpg",
        "./img/project/p7.jpg",
        "./img/project/p3.jpg",
        "./img/project/p5.jpg",
        "./img/project/p6.jpg",
        "./img/project/p4.jpg",
        "./img/project/p8.jpg",
        "./img/project/br.jpg",
    ];

    return (
        <section
            id="projects"
            className="py-20 bg-gradient-to-b from-white to-equipment-bg"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        PROJECTS
                    </h2>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-8"></div>

                    <p className="text-lg text-muted-foreground">
                        Major infrastructure development project showcasing our
                        capabilities
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projectImages.map((image, index) => (
                        <Card
                            key={index}
                            className="group overflow-hidden border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-equipment)] transition-all duration-300"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={image}
                                    alt={`Project ${index + 1}`}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white font-semibold">
                                        View Project
                                    </span>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <Button
                        size="lg"
                        variant="outline"
                        className="text-lg px-8 py-4 text-white border-primary bg-primary hover:bg-white hover:text-primary"
                        onClick={() =>
                            document
                                .getElementById("contact")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        Contact Us
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
