"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const features = [
    "Experienced physiotherapists",
    "Personalized treatment",
    "Thai physiotherapy expertise",
    "Modern rehabilitation methods",
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1400" 
                alt="Clinic Environment" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-10 -right-10 md:-right-16 glass p-8 rounded-3xl shadow-2xl max-w-xs"
            >
              <h3 className="text-4xl font-poppins font-bold text-primary mb-2">10+</h3>
              <p className="text-dark font-medium leading-tight">Years of healing & restoring movement in Oman.</p>
            </motion.div>
          </div>

          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">About TWP. Clinic</span>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-dark mb-6 leading-tight">
                Premium Care for a <br className="hidden md:block" />
                <span className="text-gradient">Pain-Free Life</span>
              </h2>
              <p className="text-gray-light text-lg mb-8 leading-relaxed">
                At TWP. Clinic, we believe in a holistic approach to recovery. Combining international standards with Thai physiotherapy expertise, our specialists provide tailored treatments that focus on long-term wellness, not just short-term relief.
              </p>
              
              <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                {features.map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx, duration: 0.5 }}
                    className="flex items-center gap-3 text-dark font-medium"
                  >
                    <CheckCircle2 className="text-secondary w-5 h-5 flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <a
                href="#services"
                className="inline-flex items-center gap-2 border-b-2 border-primary text-primary font-semibold pb-1 hover:text-secondary hover:border-secondary transition-colors"
              >
                Learn more about our philosophy
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
