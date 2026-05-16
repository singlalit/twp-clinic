"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, Users, Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-bg-primary">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-accent/20 rounded-full blur-[120px] -z-10 mix-blend-multiply" />
      <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] bg-sand/30 rounded-full blur-[100px] -z-10 mix-blend-multiply" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-white shadow-sm text-primary text-sm font-semibold tracking-wide mb-6 uppercase border border-primary/10">
              Muscat's Premier Clinic
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins text-dark leading-[1.1] mb-6 tracking-tight">
              Healing Movement. <br />
              <span className="text-gradient">Restoring Life.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-light max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-sans">
              Professional Physiotherapy & Rehabilitation in Muscat, Oman. We combine modern medical expertise with personalized care to help you move freely again.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group flex items-center gap-2 bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full text-base font-medium transition-all shadow-[0_8px_24px_rgba(31,110,140,0.3)] hover:shadow-[0_12px_32px_rgba(31,110,140,0.4)] hover:-translate-y-1 w-full sm:w-auto justify-center"
              >
                Book Appointment
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="flex items-center gap-2 bg-white text-dark hover:bg-gray-50 px-8 py-4 rounded-full text-base font-medium transition-all border border-gray-200 w-full sm:w-auto justify-center"
              >
                Explore Treatments
              </a>
            </div>
          </motion.div>
        </div>

        {/* Visual Content */}
        <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-primary opacity-10 mix-blend-overlay z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1400" 
              alt="Professional Physiotherapy" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-8 top-1/4 glass p-4 rounded-2xl flex items-center gap-4 shadow-xl z-20 hidden md:flex"
          >
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-primary">
              <Activity size={24} />
            </div>
            <div>
              <p className="text-sm font-semibold text-dark">Success Rate</p>
              <p className="text-2xl font-bold text-primary">98%</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-8 bottom-1/4 glass p-4 rounded-2xl flex items-center gap-4 shadow-xl z-20 hidden md:flex"
          >
            <div className="w-12 h-12 rounded-full bg-sand/30 flex items-center justify-center text-dark">
              <Users size={24} />
            </div>
            <div>
              <p className="text-sm font-semibold text-dark">Recovered Patients</p>
              <p className="text-2xl font-bold text-primary">5,000+</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-light"
      >
        <span className="text-xs uppercase tracking-widest font-medium mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-300 to-transparent"></div>
      </motion.div>
    </section>
  );
}
