"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, HeartHandshake, Globe2 } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    { title: "Expert Therapists", desc: "Highly qualified professionals with international experience.", icon: <Award className="w-6 h-6 text-primary" /> },
    { title: "Personalized Care", desc: "Tailored recovery plans designed specifically for your body.", icon: <HeartHandshake className="w-6 h-6 text-primary" /> },
    { title: "International Standards", desc: "Equipped with modern technology and proven methods.", icon: <Globe2 className="w-6 h-6 text-primary" /> },
    { title: "Trusted Environment", desc: "A comforting space focused entirely on your well-being.", icon: <ShieldCheck className="w-6 h-6 text-primary" /> }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Why TWP. Clinic</span>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-dark mb-6 leading-tight">
                Setting the Standard in <span className="text-gradient">Physiotherapy</span>
              </h2>
              <p className="text-gray-light text-lg mb-10 leading-relaxed">
                We combine deep medical knowledge with a human-centered approach to deliver results that matter. Our commitment to excellence ensures you receive the best care possible in Oman.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {features.map((feat, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx, duration: 0.5 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-bg-primary flex items-center justify-center flex-shrink-0 shadow-sm">
                      {feat.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-dark mb-1">{feat.title}</h4>
                      <p className="text-gray-light text-sm leading-relaxed">{feat.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="flex-1 relative w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden bg-sand/20 p-8 flex items-center justify-center"
            >
              {/* Abstract 3D Representation / Image replacement */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1400" 
                  alt="Modern Clinic" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass p-4 rounded-xl flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <p className="text-white font-medium">Accepting New Patients</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
