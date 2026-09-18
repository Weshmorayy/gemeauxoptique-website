import React from 'react';

const marqueeItems = [
  "SOLAIRES COUTURE 10.000 F CFA",
  "PROTECTION ANTI-LUMIÈRE BLEUE 420NM",
  "MONTAGE SUR ORDONNANCE MÉDICALE",
  "LIVRAISON EXPRESS DAKAR 2H-4H",
  "ESSAYAGE À DOMICILE SUR WHATSAPP",
  "PAIEMENT WAVE & ORANGE MONEY",
  "ACÉTATE ITALIEN & CHARNIÈRES RENFORCÉES",
];

export default function MarqueeGold() {
  return (
    <div className="bg-[#16181D] py-3.5 border-y border-[#C5A059]/20 overflow-hidden select-none">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((text, i) => (
          <div key={i} className="flex items-center mx-6">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-white/90">
              {text}
            </span>
            <span className="text-[#C5A059] ml-6 text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
