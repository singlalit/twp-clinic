"use client";

import { Link as LinkIcon, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark pt-20 pb-10 text-white overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-poppins font-bold tracking-tighter">
                TWP<span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed mb-8 max-w-sm">
              Professional Physiotherapy & Rehabilitation in Muscat, Oman. Restoring movement and improving lives through personalized care.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors">
                <LinkIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold font-poppins mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Clinic Gallery</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold font-poppins mb-6">Services</h4>
            <ul className="space-y-4">
              <li className="text-gray-400">Physiotherapy</li>
              <li className="text-gray-400">Sports Injury Rehab</li>
              <li className="text-gray-400">Back & Neck Pain</li>
              <li className="text-gray-400">Dry Needling</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold font-poppins mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4 font-light">Subscribe to get health tips and updates.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-3 outline-none focus:border-primary text-sm w-full"
              />
              <button type="submit" className="bg-primary hover:bg-secondary px-6 rounded-r-lg font-medium transition-colors text-sm">
                Join
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} TWP Clinic. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
