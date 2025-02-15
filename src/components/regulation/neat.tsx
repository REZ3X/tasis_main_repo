'use client'

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface NeatRule {
  id: string;
  violation: string;
  points: number;
  category: string;
}

const neatRules: NeatRule[] = [
  { id: "1.1", violation: "Putra berambut gondrong / tidak sesuai ketentuan model potongan rambut ((2:3:1) depan, tengah, belakang)", points: 10, category: "Ringan" },
  { id: "1.2", violation: "Rambut disemir / dicat selain warna hitam", points: 10, category: "Ringan" },
  { id: "1.3", violation: "Rambut dan alis di skin (bergaris)", points: 10, category: "Ringan" },
  { id: "2.1", violation: "Memakai sepatu sandal / sandal tanpa alasan", points: 5, category: "Ringan" },
  { id: "2.2", violation: "Berpakaian tidak sesuai ketentuan (atribut, topi, sepatu, mode, ikat pinggang, ketat, baju tidak dimasukkan, lebar celana bawah tidak 20 - 24 cm) tiap pelanggaran mendapat poin", points: 5, category: "Ringan" },
  { id: "2.3", violation: "Tidak menggunakan seragam OSIS / Pramuka / Praktik / OR sesuai ketentuan", points: 5, category: "Ringan" },
  { id: "2.4", violation: "Memakai jaket, sweater, hoodue dan sejnisnya di lingkungan sekolah", points: 5, category: "Ringan" },
  { id: "2.5", violation: "Peserta didik putri memakai rok di atas lutut melebihi batas", points: 5, category: "Ringan" },
];

export default function NeatTable() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRules = neatRules.filter(rule =>
    rule.violation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      <div className="mb-6 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaSearch className="text-[#ebae3a]/70" />
        </div>
        <input
          type="text"
          placeholder="Cari pelanggaran kerapian..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-[#231918] text-gray-100 rounded-lg 
            border border-[#594925]/20 focus:border-[#ebae3a]/50 focus:outline-none 
            focus:ring-1 focus:ring-[#ebae3a]/50 transition-colors
            placeholder:text-gray-400"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#231918]">
              <th className="px-6 py-3 text-left text-[#ebae3a] font-semibold">No</th>
              <th className="px-6 py-3 text-left text-[#ebae3a] font-semibold">Pelanggaran</th>
              <th className="px-6 py-3 text-left text-[#ebae3a] font-semibold">Poin</th>
              <th className="px-6 py-3 text-left text-[#ebae3a] font-semibold">Kategori</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#594925]/20">
            {filteredRules.map((rule) => (
              <tr 
                key={rule.id}
                className="bg-[#0d1216] hover:bg-[#1f1c16] transition-colors"
              >
                <td className="px-6 py-4 text-gray-300">{rule.id}</td>
                <td className="px-6 py-4 text-gray-300">{rule.violation}</td>
                <td className="px-6 py-4 text-gray-300">{rule.points}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium
                    ${rule.category === 'Berat' ? 'bg-red-500/20 text-red-400' :
                      rule.category === 'Sedang' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}
                  >
                    {rule.category}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}