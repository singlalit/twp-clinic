"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-dark z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-dark z-0" />
      
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-1/4 w-[40vw] h-[40vw] bg-accent/20 rounded-full blur-[100px] z-0" />
      <div className="absolute bottom-0 left-1/4 w-[30vw] h-[30vw] bg-primary/30 rounded-full blur-[100px] z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-poppins font-bold text-white mb-6 leading-tight">
            Start Your Recovery <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Journey Today.</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
            Don't let pain hold you back. Schedule your consultation with our expert team and take the first step towards a pain-free life.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://wa.me/96812345678" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white text-dark hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:-translate-y-1 w-full sm:w-auto"
            >
              <MessageCircle className="text-green-500 w-6 h-6" />
              WhatsApp Booking
            </a>
            
            <a 
              href="tel:+96812345678"
              className="flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-medium transition-all w-full sm:w-auto"
            >
              Call Clinic
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
