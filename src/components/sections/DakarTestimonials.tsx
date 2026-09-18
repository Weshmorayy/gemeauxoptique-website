import React from 'react';
import { Star, CheckCircle2, Quote } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function DakarTestimonials() {
  return (
    <section className="py-20 bg-[#F8F7F4] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#9B7B34] mb-2">
              <Star size={14} className="fill-[#C5A059] text-[#C5A059]" />
              <span>Avis &amp; Retours Clients Dakar</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#0D0F12]">
              Ce que pensent nos clients de Dakar
            </h2>
          </div>
          
          <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-2xl border border-gray-200 shadow-sm w-fit">
            <div className="flex text-[#C5A059]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} className="fill-[#C5A059]" />
              ))}
            </div>
            <span className="text-xs font-black text-[#0D0F12]">4.9 / 5 · Clients satisfaits</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.testimonials.map((testi, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-3xl border border-gray-200/80 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div>
                <Quote size={28} className="text-[#C5A059]/20 mb-3" />
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  &ldquo;{testi.comment}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <h4 className="font-bold text-xs text-[#0D0F12]">{testi.name}</h4>
                  <p className="text-[11px] text-gray-400">{testi.role} · {testi.location}</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-bold text-[#06D6A0]">
                  <CheckCircle2 size={13} />
                  <span>Vérifié</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
