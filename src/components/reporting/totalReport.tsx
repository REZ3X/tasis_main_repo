'use client'

import { useEffect, useState } from 'react';

export default function TotalReport() {
  const [totalReports, setTotalReports] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTotalReports = async () => {
      try {
        const response = await fetch('/api/fetchReports');
        const data = await response.json();
        
        if (data.success) {
          setTotalReports(data.total);
        } else {
          setError(data.error);
        }
      } catch {
        setError('Failed to fetch total reports');
      } finally {
        setLoading(false);
      }
    };

    fetchTotalReports();
  }, []);

  return (
    <div className="bg-[#0d1216] p-4 rounded-lg shadow-lg border border-[#594925]">
      <h2 className="text-[#ebae3a] text-lg font-semibold mb-2">
        Laporan Yang Diterima
      </h2>
      <div className="flex items-center justify-center">
        {loading ? (
          <div className="text-gray-400">Loading...</div>
        ) : error ? (
          <div className="text-red-400 text-sm">{error}</div>
        ) : (
          <span className="text-4xl font-bold text-[#ebae3a]">
            {totalReports}
          </span>
        )}
      </div>
    </div>
  );
}