import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F8F7F4] flex flex-col justify-between">
      <Header />
      <div className="max-w-md mx-auto px-4 py-24 text-center">
        <span className="font-serif text-6xl font-black gold-gradient-text block mb-2">404</span>
        <h1 className="font-serif text-2xl font-bold text-[#0D0F12] mb-3">Page non trouvée</h1>
        <p className="text-xs text-gray-500 mb-8 leading-relaxed">
          La monture ou la page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="gold-gradient-bg text-[#0D0F12] px-6 py-3.5 rounded-2xl text-xs font-black uppercase tracking-wider inline-block shadow-md btn-bounce"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
      <Footer />
    </main>
  );
}
