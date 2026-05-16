"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  useEffect(() => {
    if (emblaApi) {
      const autoplay = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);
      return () => clearInterval(autoplay);
    }
  }, [emblaApi]);

  const testimonials = [
    { name: "Ahmed Al Balushi", condition: "Sports Injury", text: "The team at TWP Clinic helped me recover from a severe knee injury in record time. Their personalized approach and modern facilities are unmatched in Muscat." },
    { name: "Sarah Kingsley", condition: "Chronic Back Pain", text: "I suffered from back pain for years. After just a few sessions of targeted physiotherapy and dry needling, I finally have my mobility back." },
    { name: "Mohammed Al Harthi", condition: "Post-Surgery Rehab", text: "Professional, caring, and highly skilled. The therapists here genuinely care about your recovery journey. Highly recommend for any post-surgery rehab." },
    { name: "Fatima Al Lawati", condition: "Neck Pain", text: "A truly premium experience. The environment is so calming, and the treatment I received completely resolved my tension headaches." }
  ];

  return (
    <section className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-accent/10 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Patient Stories</span>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-dark mb-6">
            Trusted by <span className="text-gradient">Hundreds</span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 py-8">
              {testimonials.map((t, i) => (
                <div key={i} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_40%] pl-4">
                  <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full flex flex-col relative border border-gray-50">
                    <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
                    <div className="flex gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map(star => (
                        <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-dark font-medium leading-relaxed mb-8 flex-grow text-lg italic">
                      "{t.text}"
                    </p>
                    <div>
                      <h5 className="font-bold text-dark font-poppins">{t.name}</h5>
                      <p className="text-sm text-primary font-medium">{t.condition}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
