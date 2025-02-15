'use client'

import { useState, useEffect } from 'react';
import { FaPaperPlane, FaSpinner, FaUserCircle, FaClock } from 'react-icons/fa';
import { containsBannedWords, filterBadWords } from '@/utils/wordFilter';

interface Note {
  id: number;
  content: string;
  author: string;
  created_at: string;
}

export default function PublicNote() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', content: '' });

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await fetch('/api/fetchNote');
      const data = await response.json();
      if (data.success) {
        setNotes(data.notes);
      }
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', content: '' });

    // Check for banned words
    if (containsBannedWords(newNote) || containsBannedWords(author)) {
      setMessage({ 
        type: 'error', 
        content: 'Mohon gunakan kata-kata yang sopan' 
      });
      setIsLoading(false);
      return;
    }

    try {
      // Filter the content and author before sending
      const filteredContent = filterBadWords(newNote);
      const filteredAuthor = filterBadWords(author);

      const response = await fetch('/api/sendNote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: filteredContent,
          author: filteredAuthor || 'Anonymous'
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: 'success', content: 'Catatan berhasil dikirim!' });
        setNewNote('');
        setAuthor('');
        fetchNotes(); // Refresh notes
      } else {
        throw new Error(data.error);
      }
    } catch {
      setMessage({ 
        type: 'error', 
        content: 'Gagal mengirim catatan. Silakan coba lagi.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="px-6 py-12 bg-[#1f1c16]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#ebae3a] mb-4">
            Papan Catatan Publik
          </h2>
          <p className="text-gray-300">
            Bagikan pemikiran atau pesan Anda secara anonim
          </p>
        </div>

        {/* Notes Display */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-[#ebae3a] mb-6">
            Catatan Terbaru
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {notes.map((note) => (
              <div 
                key={note.id}
                className="group relative p-6 bg-[#0d1216] rounded-lg border border-[#594925]/20
                  transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                  hover:shadow-[#ebae3a]/5 hover:border-[#ebae3a]/30"
              >
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#ebae3a]/10 rounded-full
                  transform rotate-45 transition-transform group-hover:scale-150 group-hover:rotate-90" />
                
                <p className="text-gray-300 mb-4 relative z-10 text-lg leading-relaxed">
                  &quot;{note.content}&quot;
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <FaUserCircle className="text-[#ebae3a]/70" />
                    <span className="hover:text-[#ebae3a] transition-colors">
                      {note.author}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-[#ebae3a]/70" />
                    <time className="hover:text-[#ebae3a] transition-colors">
                      {new Date(note.created_at).toLocaleDateString('id-ID', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#594925]/20"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-[#1f1c16] text-[#ebae3a]">
              Tulis Catatan Baru
            </span>
          </div>
        </div>

        {message.content && (
          <div className={`p-4 rounded-lg mb-6 ${
            message.type === 'success' 
              ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
              : 'bg-red-500/10 text-red-400 border border-red-500/20'
          }`}>
            {message.content}
          </div>
        )}

        {/* Note Form */}
        <form onSubmit={handleSubmit} className="bg-[#0d1216] p-6 rounded-lg border border-[#594925]/20">
      <div className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Nama (opsional)"
            value={author}
            onChange={(e) => setAuthor(e.target.value.slice(0, 50))} // Limit author length
            maxLength={50}
            className="w-full p-3 bg-[#231918] border border-[#594925]/20 
              rounded-lg text-gray-100 focus:border-[#ebae3a] 
              focus:ring-1 focus:ring-[#ebae3a] transition-colors
              placeholder:text-gray-500"
          />
        </div>
        <div>
          <textarea
            placeholder="Tulis catatan Anda..."
            value={newNote}
            onChange={(e) => setNewNote(e.target.value.slice(0, 280))}
            required
            maxLength={280}
            rows={4}
            className="w-full p-3 bg-[#231918] border border-[#594925]/20 
              rounded-lg text-gray-100 focus:border-[#ebae3a] 
              focus:ring-1 focus:ring-[#ebae3a] transition-colors
              placeholder:text-gray-500"
          />
          <div className="mt-2 text-sm text-gray-400 flex justify-end">
            {newNote.length}/280 karakter
          </div>
        </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 
                bg-[#ebae3a] text-[#0d1216] rounded-lg font-semibold 
                hover:bg-[#efbb4a] transition-all duration-300 
                disabled:opacity-50 hover:shadow-lg hover:shadow-[#ebae3a]/20"
            >
              {isLoading ? (
                <FaSpinner className="animate-spin" />
              ) : (
                <FaPaperPlane />
              )}
              {isLoading ? 'Mengirim...' : 'Kirim Catatan'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}