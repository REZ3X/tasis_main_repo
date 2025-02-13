'use client'

import { useState } from 'react';
import { FaEnvelope, FaUser, FaPhone, FaPaperPlane } from 'react-icons/fa';
import Link from 'next/link';

/**
 * MailForm Component
 * Renders a contact form with fields for name, email, phone, and message
 * Includes a link to report violations
 * @returns JSX.Element - A form section with contact fields and submission button
 */
export default function MailForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  /**
   * Handles form submission
   * @param e - Form submission event
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  /**
   * Handles input field changes
   * @param e - Input change event
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="px-6 py-20 bg-[#1f1c16]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#ebae3a] font-inter-tight mb-4">
            Hubungi Kami
          </h2>
          <p className="text-gray-300 text-lg">
            Silakan hubungi kami untuk informasi lebih lanjut atau pertanyaan
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="space-y-6 bg-[#0d1216] p-8 rounded-xl border border-[#594925]/20"
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaUser className="text-[#ebae3a]/70" />
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nama Lengkap"
              className="w-full pl-10 pr-4 py-3 bg-[#231918] text-gray-100 rounded-lg 
                border border-[#594925]/20 focus:border-[#ebae3a]/50 focus:outline-none 
                focus:ring-1 focus:ring-[#ebae3a]/50 transition-colors
                placeholder:text-gray-400"
              required
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaEnvelope className="text-[#ebae3a]/70" />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full pl-10 pr-4 py-3 bg-[#231918] text-gray-100 rounded-lg 
                border border-[#594925]/20 focus:border-[#ebae3a]/50 focus:outline-none 
                focus:ring-1 focus:ring-[#ebae3a]/50 transition-colors
                placeholder:text-gray-400"
              required
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaPhone className="text-[#ebae3a]/70" />
            </div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Nomor Telepon"
              className="w-full pl-10 pr-4 py-3 bg-[#231918] text-gray-100 rounded-lg 
                border border-[#594925]/20 focus:border-[#ebae3a]/50 focus:outline-none 
                focus:ring-1 focus:ring-[#ebae3a]/50 transition-colors
                placeholder:text-gray-400"
              required
            />
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Pesan Anda"
              rows={5}
              className="w-full px-4 py-3 bg-[#231918] text-gray-100 rounded-lg 
                border border-[#594925]/20 focus:border-[#ebae3a]/50 focus:outline-none 
                focus:ring-1 focus:ring-[#ebae3a]/50 transition-colors
                placeholder:text-gray-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 
              bg-[#ebae3a] text-[#231918] rounded-lg font-semibold hover:bg-[#efbb4a] 
              transition-colors duration-300"
          >
            <FaPaperPlane />
            Kirim Pesan
          </button>
        </form>
        <div className="text-center mt-4">
          <Link 
            href="/comingSoon"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#ebae3a] text-[#0d1216] 
              rounded-lg font-semibold text-lg hover:bg-[#efbb4a] 
              transition-all duration-300 transform hover:scale-105
              shadow-lg hover:shadow-[#ebae3a]/20"
          >
            Ingin Melaporkan Tindak Pelanggaran? Klik Di Sini
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}