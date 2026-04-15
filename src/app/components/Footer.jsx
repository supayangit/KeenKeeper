"use client";
import React from 'react';
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#244D3F] text-white py-16 px-6">
      
      <div className="max-w-5xl mx-auto text-center space-y-6">
        
        {/* Title */}
        <h1 className="text-5xl font-bold">KeenKeeper</h1>

        <p className="text-gray-200 text-sm max-w-2xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="space-y-3">
          <p className="text-gray-200 font-medium">Social Links</p>

          <div className="flex justify-center gap-4">
            <div className="bg-white text-black p-3 rounded-full cursor-pointer hover:scale-110 transition">
              <FaInstagram />
            </div>
            <div className="bg-white text-black p-3 rounded-full cursor-pointer hover:scale-110 transition">
              <FaFacebookF />
            </div>
            <div className="bg-white text-black p-3 rounded-full cursor-pointer hover:scale-110 transition">
              <FaXTwitter />
            </div>
          </div>
        </div>

      </div>

      <div className="border-t border-[#3a6b54] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 max-w-6xl mx-auto">
        
        <p>© 2026 KeenKeeper. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>

      </div>
    </footer>
    );
};

export default Footer;