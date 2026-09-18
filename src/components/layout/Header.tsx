'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { useCart } from '@/lib/cart-context';
import { ShoppingBag, Menu, X, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Boutique & Solaires", href: "/boutique" },
  { label: "Anti-Lumière Bleue", href: "/anti-lumiere-bleue" },
  { label: "Verres & Ordonnances", href: "/services-verres" },
  { label: "Contact & Essayage", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { totalItems, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top micro bar - strictly single line */}
      <div className="bg-[#0D0F12] text-white h-8 flex items-center px-3 sm:px-6 text-[11px] font-medium border-b border-[#C5A059]/20 relative z-40 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-2 whitespace-nowrap">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="bg-[#C5A059] text-[9px] uppercase font-black px-2 py-0.5 rounded text-[#0D0F12] flex-shrink-0">
              Dakar
            </span>
            <span className="text-white/80 text-[11px] truncate">
              Solaires Haute Couture &amp; Verres Anti-Lumière Bleue · Livraison Express 24h
            </span>
          </div>

          <a 
            href={`https://wa.me/${siteConfig.whatsappRaw}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 text-[#C5A059] hover:text-[#ECC97B] font-bold text-[11px] flex-shrink-0"
          >
            <MessageCircle size={13} className="text-[#25D366]" />
            <span>{siteConfig.phonePrimary}</span>
          </a>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0D0F12]/95 backdrop-blur-md shadow-lg border-b border-[#C5A059]/30 py-2.5' 
          : 'bg-[#0D0F12] border-b border-white/10 py-3 sm:py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3 group py-0.5">
            <img
              src="/images/brand/logo.png"
              alt={siteConfig.name}
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 rounded-full border border-[#C5A059]/40 shadow-sm"
            />
            <div className="flex flex-col">
              <span className="font-serif font-black text-base sm:text-lg tracking-wider text-white uppercase leading-none">
                GÉMEAUX
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#C5A059] font-bold uppercase mt-0.5 leading-none">
                OPTIQUE
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-xs font-bold uppercase tracking-widest transition-colors py-1 relative ${
                    isActive 
                      ? 'text-[#C5A059]' 
                      : 'text-gray-300 hover:text-[#C5A059]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A059] rounded-full shadow-[0_0_8px_#C5A059]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-2.5">
            {/* WhatsApp Direct */}
            <a
              href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent("Bonjour Gémeaux Optique, je souhaite des conseils pour choisir une monture.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all btn-bounce shadow-md"
            >
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </a>

            {/* Cart Trigger */}
            <button
              onClick={openCart}
              className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#16181D] border border-[#C5A059]/30 hover:border-[#C5A059] text-white transition-colors shadow-sm"
              aria-label="Ouvrir le panier"
            >
              <ShoppingBag size={17} className="text-[#C5A059]" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C5A059] text-[#0D0F12] text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#16181D] text-white hover:bg-white/10 transition-colors border border-white/10"
              aria-label="Menu de navigation"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 !z-[999999] flex justify-end">
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />
          <div className="relative w-full max-w-xs bg-[#0D0F12] text-white h-full shadow-2xl flex flex-col p-6 z-10 overflow-y-auto border-l border-[#C5A059]/20">
            <div className="flex items-center justify-between pb-5 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <img
                  src="/images/brand/logo.png"
                  alt={siteConfig.name}
                  className="h-10 w-auto object-contain rounded-full border border-[#C5A059]/40"
                />
                <span className="font-serif font-black text-sm tracking-wider text-white">GÉMEAUX OPTIQUE</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-400 hover:text-white"
                aria-label="Fermer le menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="py-6 flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-serif text-base py-2.5 border-b border-white/5 flex items-center justify-between transition-colors ${
                      isActive ? 'text-[#C5A059] font-bold' : 'text-gray-300 hover:text-[#C5A059]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-[#C5A059] text-xs">→</span>
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto pt-6 border-t border-white/10 space-y-3">
              <a
                href={`https://wa.me/${siteConfig.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle size={15} />
                WhatsApp: {siteConfig.phonePrimary}
              </a>
              <div className="text-[11px] text-gray-400 text-center">
                <p>📍 {siteConfig.location.city}, {siteConfig.location.country}</p>
                <p className="mt-0.5 text-[#C5A059]">Livraison express &amp; Essayage</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
