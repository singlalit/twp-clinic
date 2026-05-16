"use client";

import { motion } from "framer-motion";
import { Activity, Bone, HeartPulse, Stethoscope, Sparkles, UserPlus, Zap, ActivitySquare } from "lucide-react";

export default function Services() {
  const services = [
    { title: "Physiotherapy", icon: <HeartPulse className="w-8 h-8" />, desc: "Comprehensive physical therapy tailored to your unique needs." },
    { title: "Sports Injury", icon: <Activity className="w-8 h-8" />, desc: "Targeted recovery programs for athletes to return to peak performance." },
    { title: "Back & Neck Pain", icon: <Bone className="w-8 h-8" />, desc: "Specialized treatments to relieve chronic spinal discomfort." },
    { title: "Rehabilitation", icon: <UserPlus className="w-8 h-8" />, desc: "Post-trauma recovery to restore full strength and mobility." },
    { title: "Dry Needling", icon: <Zap className="w-8 h-8" />, desc: "Effective muscle tension release for immediate pain relief." },
    { title: "Post-Surgery", icon: <Stethoscope className="w-8 h-8" />, desc: "Guided recovery plans following major orthopedic surgeries." },
    { title: "Mobility", icon: <ActivitySquare className="w-8 h-8" />, desc: "Programs designed to improve joint flexibility and overall range of motion." },
    { title: "Pain Management", icon: <Sparkles className="w-8 h-8" />, desc: "Holistic strategies to manage and reduce chronic pain conditions." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section id="services" className="py-24 bg-bg-primary relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Our Treatments</span>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-dark mb-6">
            Comprehensive <span className="text-gradient">Rehabilitation</span>
          </h2>
          <p className="text-gray-light text-lg">
            We offer specialized treatments utilizing modern equipment and proven methodologies to ensure your optimal recovery.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-[0_20px_40px_rgba(31,110,140,0.1)] transition-all duration-300 border border-gray-100 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 rounded-2xl bg-bg-primary flex items-center justify-center text-primary group-hover:text-white group-hover:bg-primary transition-colors mb-6 shadow-inner">
                {service.icon}
              </div>
              <h3 className="text-xl font-poppins font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-light leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
