'use client'

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface BehaviorRule {
  id: string;
  violation: string;
  points: number;
  category: string;
}

const behaviorRules: BehaviorRule[] = [
  { id: "1.1", violation: "Terlambat hadir di sekolah / Kegiatan Belajar Mengajar", points: 5, category: "Ringan" },
  { id: "1.2", violation: "Tidak mengerjakan tugas sesuai dengan batas waktu yang ditentukan", points: 7, category: "Ringan" },
  { id: "1.3", violation: "Mencontek / menconteki", points: 10, category: "Ringan" },
  { id: "1.4", violation: "Keluar kampus tanpa ijin guru / karyawan (membolos)", points: 15, category: "Ringan" },
  { id: "1.5", violation: "Makan / minum / tidur saat KBM tanpa ijin guru / karyawan", points: 10, category: "Ringan" },
  { id: "1.6", violation: "Membuat gaduh di kelas", points: 10, category: "Ringan" },
  { id: "1.7", violation: "Tidak mengikuti ekstrakulikuler wajib di sekolah", points: 15, category: "Ringan" },
    { id: "1.8", violation: "Menggunakan media player dan atau alat komunikasi saat PBM", points: 10, category: "Ringan" },
    { id: "1.9", violation: "Membawa / meminjamkan alat selain yang menunjang PBM", points: 20, category: "Ringan" },
    { id: "1.10", violation: "Tidak mengikuti kegiatan keagamaan tanpa keterangan", points: 20, category: "Ringan" },
    { id: "1.11", violation: "Tidak mengikuti upacara bendera", points: 15, category: "Ringan" },
    { id: "2.1", violation: "Berkata ktor / tidak senonohP", points: 10, category: "Ringan" },
    { id: "2.2", violation: "Menghina dan memalak teman", points: 36, category: "Ringan" },
    { id: "2.3", violation: "Membully sesama teman", points: 50, category: "Sedang" },
    { id: "2.4", violation: "Mengancam sesama teman", points: 25, category: "Ringan" },
    { id: "2.5", violation: "Menganiaya orang lain", points: 100, category: "Berat" },
    { id: "2.6", violation: "Berkelahi di dalam / luar sekolah", points: 125, category: "DO" },
    { id: "2.7", violation: "Menghina kepala sekolah, guru, karyawan", points: 125, category: "DO" },
    { id: "2.8", violation: "Provokator perkelahian / kerusakan / membolos", points: 50, category: "Sedang" },
    { id: "2.9", violation: "Menantang / mengancam kepala sekolah, guru, karyawan", points: 125, category: "DO" },
    { id: "2.10", violation: "Melawan secara fisik kepala sekolah, guru, karyawan", points: 125, category: "DO" },
    { id: "3.1", violation: "Membuang sampah tidak pada tempatnya", points: 10, category: "Ringan" },
    { id: "3.2", violation: "Mencorat-coret sarana / prasarana sekolah", points: 50, category: "Sedang" },
    { id: "3.3", violation: "Merusak / terlibat perusakan sarana prasaran milik sekolah", points: 75, category: "Berat" },
    { id: "3.4", violation: "Tidak sengaja merusak sarana prasaran milik sekolah dan warga sekolah", points: 25, category: "Ringan" },
    { id: "4.1", violation: "Peserta didik putri berhias / memakai perhiasan berlebihan", points: 10, category: "Ringan" },
    { id: "4.2", violation: "Peserta didik putra memakai gelang / kalung / cincin", points: 10, category: "Ringan" },
    { id: "4.3", violation: "Peserta didik putri bertindik selain pada daun telinga", points: 125, category: "DO" },
    { id:"4.4", violation: "Peserta didik putra bertindik (Piercing)", points: 125, category: "DO" },
    { id: "4.5", violation: "Peserta didik bertato", points: 125, category: "DO" },
    { id: "5.1", violation: "Membawa rokok / vape dan perlengkapannya di lingkungan / kegiatan sekolah", points: 50, category: "Sedang" },
    { id: "5.2", violation: "Membawa / minum minuman keras / mabuk di sekolah / kegiatan sekolah", points: 125, category: "DO" },
    { id: "5.3", violation: "Minum minumak keras / mabuk yang sampai berurusan dengan aparat berwajib", points: 125, category: "DO" },
    { id: "5.4", violation: "Berdua atau berkumpul dengan lawan jenis secara sengaja di tempat yang tidak terlihat secara langsung / tersembunyi / yang dapat mengakibatkan fitmah / celaan dari orang lain", points: 75, category: "Berat" },
    { id: "5.5", violation: "Membawa / membunyikan petasan di sekolah", points: 75, category: "Berat" },
    { id: "5.6", violation: "Menonton / membaca / mendengarkan meduia cetak dan/atau elektronik yang berisi adegan / gambar / tulisan porno baik sebagian maupun seluruhnya di lingkungan / kegiatan sekolah", points: 75, category: "Berat" },
    { id: "5.7", violation: "Memproduksi / memperbanyak / mengedarkan media cetak dan/atau elektronik yang berisi adegan / gambar / tulisan porno baik sebagian maupun seluruhnya di lingkungan / kegiatan sekolah", points: 125, category: "DO" },
    { id: "5.8", violation: "Membawa / menyimpan alat kontrasepsi / peralatan sex di lingkungan sekolah", points: 120, category: "Berat" },
    { id: "5.9", violation: "Membawa / menggunakan / mengedarkan narkoba", points: 125, category: "DO" },
    { id: "5.10", violation: "Membawa / menggunakan / mengedarkan zat adiktif selain narkoba", points: 100, category: "Berat" },
    { id: "6.1", violation: "Terlibat dalam organisasi / kelompok / perkumpulan / jamaah / persekutuan / komunitas yang melanggar hukum / ilegal / geng", points: 100, category: "Berat" },
    { id: "6.2", violation: "Ngebut di sekolah / knalpot diblombong / kelengkapan sepeda motor tidak lengkap", points: 20, category: "Ringan" },
    { id: "6.3", violation: "Melakukan kegiatan ekstra tanpa sepengetahuan sekolah", points: 25, category: "Ringan" },
    { id: "6.4", violation: "Memeras, memalak, berbohong, memalsu (TTD, surat, keterangan, dll)", points: 36, category: "Ringan" },
    { id: "6.5", violation: "Melompat / menerobos pagar / jendela sekolah", points: 50, category: "Sedang" },
    { id: "6.6", violation: "Membawa senjata tajam, kecuali kerja bakti", points: 50, category: "Sedang" },
    { id: "6.7", violation: "Berjudi di dalam / luar sekolah", points: 75, category: "Berat" },
    { id: "6.8", violation: "Bermain kartu judi pada saat kegiatan sekolah (Domino dll)", points: 37, category: "Ringan" },
    { id: "6.9", violation: "Permainan elektronik yang tidak mendukung kegiatan pembelajaran dan kegiatan sekolah", points: 37, category: "Ringan" },
    { id: "6.10", violation: "Mencuri di dalam / di luar sekolah", points: 125, category: "DO" },
    { id: "6.11", violation: "Membawa senjata api dan sejenisnya", points: 125, category: "DO" },
    { id: "6.12", violation: "Memperkosa, berzina, sodomi, hamil, menghamili, mesum (perbuatan cabul atau asusila)", points: 125, category: "DO" },
    { id: "6.13", violation: "Terbukti melakukan tindak kriminal, yang berurusan dengan pihak kepolisian", points: 125, category: "DO" },
    { id: "6.14", violation: "Menikah / kawin", points: 125, category: "DO" },
    { id: "6.15", violation: "Mengganggu ketenangan masyarakat", points: 50, category: "Sedang" },
];

export default function BehaviorTable() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRules = behaviorRules.filter(rule =>
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
          placeholder="Cari pelanggaran..."
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
                    ${
                      rule.category === 'DO' ? 'bg-gray-500/20 text-gray-400' :
                      rule.category === 'Berat' ? 'bg-red-500/20 text-red-400' :
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