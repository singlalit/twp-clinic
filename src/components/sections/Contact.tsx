"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    { icon: <MapPin className="text-primary w-6 h-6" />, title: "Visit Us", details: ["Al Khuwair, Muscat", "Sultanate of Oman"] },
    { icon: <Phone className="text-primary w-6 h-6" />, title: "Call Us", details: ["+968 1234 5678", "+968 8765 4321"] },
    { icon: <Clock className="text-primary w-6 h-6" />, title: "Opening Hours", details: ["Sat - Thu: 9:00 AM - 9:00 PM", "Friday: Closed"] },
    { icon: <Mail className="text-primary w-6 h-6" />, title: "Email Us", details: ["hello@twp.clinic", "appointments@twp.clinic"] },
  ];

  return (
    <section id="contact" className="py-24 bg-bg-primary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-dark mb-6">
            We're Here to <span className="text-gradient">Help</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="flex-1 grid sm:grid-cols-2 gap-6">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-50 flex flex-col items-start hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-bg-primary flex items-center justify-center mb-6">
                  {info.icon}
                </div>
                <h4 className="font-poppins font-bold text-dark text-xl mb-4">{info.title}</h4>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-light leading-relaxed">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-50 relative min-h-[400px]"
          >
            {/* Embedded Google Map Placeholder - Replace with actual iframe in production */}
            <div className="absolute inset-0 bg-sand/20 flex flex-col items-center justify-center">
              <MapPin className="w-12 h-12 text-primary/50 mb-4" />
              <p className="text-dark/50 font-medium">Interactive Map Embed Here</p>
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
                alt="Map Background" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
