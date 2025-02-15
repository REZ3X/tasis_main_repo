'use client'

import { useState, useRef  } from 'react';

interface ReportFormProps {
  onSuccess?: () => void;
}

export default function ReportForm({ onSuccess }: ReportFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    title: '',
    incidentDatetime: '',
    details: '',
  });
  const [evidence, setEvidence] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', content: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', content: '' });

    try {
      const submitData = new FormData();
      submitData.append('title', formData.title);
      submitData.append('incidentDatetime', formData.incidentDatetime);
      submitData.append('details', formData.details);
      if (evidence) {
        submitData.append('evidence', evidence);
      }

      const response = await fetch('/api/sendReport', {
        method: 'POST',
        body: submitData,
      });

      const result = await response.json();

      if (result.success) {
        setMessage({ type: 'success', content: 'Laporan berhasil dikirim!' });
        setFormData({ title: '', incidentDatetime: '', details: '' });
        setEvidence(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        // Call the onSuccess callback to refresh total
        onSuccess?.();
      } else {
        throw new Error(result.error);
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setMessage({ 
        type: 'error', 
        content: `Gagal mengirim laporan: ${errorMessage}. Silakan coba lagi.` 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-[#ebae3a] mb-2">
          Judul Laporan Pengaduan
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
          required
          className="w-full p-3 rounded-lg bg-[#0d1216] border border-[#594925]
            text-white focus:border-[#ebae3a] focus:ring-1 focus:ring-[#ebae3a]"
        />
      </div>

      <div>
        <label className="block text-[#ebae3a] mb-2">
          Tanggal dan Waktu Kejadian
        </label>
        <input
          type="datetime-local"
          name="incidentDatetime"
          value={formData.incidentDatetime}
          onChange={(e) => setFormData({...formData, incidentDatetime: e.target.value})}
          required
          className="w-full p-3 rounded-lg bg-[#0d1216] border border-[#594925]
            text-white focus:border-[#ebae3a] focus:ring-1 focus:ring-[#ebae3a]"
        />
      </div>

      <div>
        <label className="block text-[#ebae3a] mb-2">
          Detail Laporan
        </label>
        <textarea
          name="details"
          value={formData.details}
          onChange={(e) => setFormData({...formData, details: e.target.value})}
          required
          rows={4}
          className="w-full p-3 rounded-lg bg-[#0d1216] border border-[#594925]
            text-white focus:border-[#ebae3a] focus:ring-1 focus:ring-[#ebae3a]"
        />
      </div>

      <div>
        <label className="block text-[#ebae3a] mb-2">
          Bukti (Gambar)
        </label>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => setEvidence(e.target.files?.[0] || null)}
          className="w-full p-3 rounded-lg bg-[#0d1216] border border-[#594925]
            text-white focus:border-[#ebae3a] focus:ring-1 focus:ring-[#ebae3a]"
        />
      </div>

      {message.content && (
        <div className={`p-4 rounded-lg ${
          message.type === 'success' ? 'bg-green-600/20 text-green-400' : 
          'bg-red-600/20 text-red-400'
        }`}>
          {message.content}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 px-6 bg-[#ebae3a] text-[#0d1216] rounded-lg
          font-semibold hover:bg-[#efbb4a] transition-colors duration-300
          disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Mengirim...' : 'Kirim Laporan'}
      </button>
    </form>
  );
}