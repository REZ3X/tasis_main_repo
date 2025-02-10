'use client'

import { useState } from 'react';
import { FaEnvelope, FaUser, FaPhone, FaPaperPlane } from 'react-icons/fa';

export default function MailForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

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

          {/* Update other input icons and placeholders with the same pattern */}
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
      </div>
    </section>
  );
}