import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const EquipmentSection = () => {
    const equipment = [
        { name: "Backhoe Loader", image: "./img/equipment/backhoe-loader.jpg" },
        { name: "Dump Truck", image: "./img/equipment/dump-truck.jpg" },
        { name: "Mobile Crane", image: "./img/equipment/mobile-crane.jpg" },
        { name: "Bulldozer", image: "./img/equipment/bulldozer.jpg" },
        { name: "Excavator", image: "./img/equipment/excavator.jpg" },
        { name: "Wheel Loader", image: "./img/equipment/wheel-loader.jpg" },
        { name: "Tower Crane", image: "./img/equipment/tower-crane.jpg" },
        { name: "Concrete Mixer", image: "./img/equipment/concrete-mixer.jpg" },
        { name: "Road Roller", image: "./img/equipment/road-roller.jpg" },
        { name: "Forklift", image: "./img/equipment/forklift.jpg" },
        { name: "Grader", image: "./img/equipment/grader.jpg" },
        { name: "Trencher", image: "./img/equipment/trencher.jpg" },
        { name: "Compactor", image: "./img/equipment/compactor.jpg" },
        // { name: "Paver", image: "./img/equipment/paver.jpg" },
        { name: "Drilling Rig", image: "./img/equipment/drilling-rig.jpg" },
        // { name: "Generator", image: "./img/equipment/generator.jpg" },
        // { name: "Concrete Pump", image: "./img/equipment/concrete-pump.jpg" },
        { name: "Skid Steer", image: "./img/equipment/skid-steer.jpg" },
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
                        <Card
                            key={index}
                            className="group hover:shadow-[var(--shadow-equipment)] transition-all duration-300 bg-equipment-card border-0 overflow-hidden"
                        >
                            <div className="relative">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
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
