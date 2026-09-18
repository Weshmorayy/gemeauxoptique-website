'use client';

import React from 'react';
import Link from 'next/link';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-[#F8F7F4] flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-md max-w-md w-full text-center">
        <h2 className="font-serif text-xl font-bold text-[#0D0F12] mb-2">Une erreur est survenue</h2>
        <p className="text-xs text-gray-500 mb-6">{error.message || "Veuillez réessayer ultérieurement."}</p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="gold-gradient-bg text-[#0D0F12] px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider"
          >
            Réessayer
          </button>
          <Link
            href="/"
            className="bg-gray-100 text-gray-800 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider"
          >
            Accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
