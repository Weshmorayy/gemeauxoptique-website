'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '@/lib/cart-context';
import { siteConfig } from '@/config/site';
import { formatPriceFCFA } from '@/lib/utils';
import { X, Trash2, Plus, Minus, ShoppingBag, Send, MapPin, Sparkles, ShieldCheck } from 'lucide-react';

export default function CartDrawer() {
  const { cart, isOpen, closeCart, updateQuantity, removeFromCart, totalPrice, totalItems, clearCart } = useCart();
  const [selectedZone, setSelectedZone] = useState(siteConfig.deliveryZones[0].area);
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [hasPrescription, setHasPrescription] = useState(false);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const activeZoneObj = siteConfig.deliveryZones.find((z) => z.area === selectedZone) || siteConfig.deliveryZones[0];
  const grandTotal = totalPrice + (cart.length > 0 ? activeZoneObj.price : 0);

  const handleSendWhatsAppOrder = () => {
    if (cart.length === 0) return;

    let message = `Bonjour *Gémeaux Optique* 👓\n\nJe souhaite commander les montures suivantes :\n\n`;

    cart.forEach((item, index) => {
      const itemBase = item.product.price;
      const lensAddon = item.selectedLensOption ? item.selectedLensOption.price : 0;
      const itemUnitTotal = itemBase + lensAddon;

      message += `*${index + 1}. ${item.product.name}*\n`;
      if (item.selectedColor) {
        message += `   • Finition : *${item.selectedColor}*\n`;
      }
      if (item.selectedLensOption) {
        message += `   • Verres : *${item.selectedLensOption.name}* (+${formatPriceFCFA(item.selectedLensOption.price)})\n`;
      }
      message += `   • Quantité : ${item.quantity}\n`;
      message += `   • Prix : ${formatPriceFCFA(itemUnitTotal * item.quantity)}\n\n`;
    });

    message += `──────────────────\n`;
    message += `💰 *Sous-total :* ${formatPriceFCFA(totalPrice)}\n`;
    message += `🚚 *Livraison :* ${activeZoneObj.area} (+${formatPriceFCFA(activeZoneObj.price)})\n`;
    message += `⭐️ *TOTAL ESTIMÉ :* *${formatPriceFCFA(grandTotal)}*\n\n`;

    if (customerName.trim()) {
      message += `👤 *Nom du client :* ${customerName.trim()}\n`;
    }
    if (customerAddress.trim()) {
      message += `📍 *Adresse à Dakar :* ${customerAddress.trim()}\n`;
    }
    if (hasPrescription) {
      message += `📄 *Ordonnance :* Je vous transmets ma photo d'ordonnance médicale à la suite de ce message.\n`;
    }

    message += `\nPouvez-vous me confirmer la disponibilité et planifier la livraison ? Merci !`;

    const whatsappUrl = `https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 !z-[999999] flex justify-end">
      {/* Backdrop */}
      <div 
        onClick={closeCart}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity animate-fadeIn"
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-[#0D0F12] text-white h-full shadow-2xl flex flex-col z-10 animate-slideLeft overflow-hidden border-l border-[#C5A059]/20">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#16181D]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center font-bold border border-[#C5A059]/30">
              <ShoppingBag size={18} />
            </div>
            <div>
              <h3 className="font-serif font-bold text-white text-lg leading-none">Mon Panier Optique</h3>
              <p className="text-xs text-[#C5A059] mt-1">{totalItems} article{totalItems > 1 ? 's' : ''} sélectionné{totalItems > 1 ? 's' : ''}</p>
            </div>
          </div>
          <button 
            onClick={closeCart}
            className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            aria-label="Fermer le panier"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-16 h-16 bg-[#16181D] text-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#C5A059]/30">
                <ShoppingBag size={28} />
              </div>
              <h4 className="font-serif text-lg font-bold text-white">Votre sélection est vide</h4>
              <p className="text-xs text-gray-400 mt-2 max-w-xs mx-auto leading-relaxed">
                Parcourez nos solaires haute couture et montures anti-lumière bleue pour composer votre regard.
              </p>
              <button
                onClick={closeCart}
                className="mt-6 inline-block gold-gradient-bg text-[#0D0F12] px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider hover:opacity-95 transition-opacity"
              >
                Explorer la boutique
              </button>
            </div>
          ) : (
            <>
              {/* Product List */}
              <div className="space-y-3 divide-y divide-white/10">
                {cart.map((item) => {
                  const itemBase = item.product.price;
                  const lensAddon = item.selectedLensOption ? item.selectedLensOption.price : 0;
                  const itemTotal = (itemBase + lensAddon) * item.quantity;

                  return (
                    <div key={`${item.product.id}-${item.selectedColor}-${item.selectedLensOption?.id}`} className="pt-4 first:pt-0 flex gap-3.5 items-start">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name} 
                        className="w-16 h-16 object-cover rounded-xl border border-white/10 bg-white flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-white truncate leading-snug">{item.product.name}</h4>
                        {item.selectedColor && (
                          <p className="text-[11px] text-gray-400 mt-0.5">
                            Finition : <span className="text-white">{item.selectedColor}</span>
                          </p>
                        )}
                        {item.selectedLensOption && (
                          <p className="text-[10px] text-[#C5A059] mt-0.5 font-medium leading-tight">
                            ✦ {item.selectedLensOption.name}
                          </p>
                        )}
                        <p className="text-xs font-black text-[#C5A059] mt-1.5">
                          {formatPriceFCFA(itemTotal)}
                        </p>
                      </div>

                      {/* Quantity Selector */}
                      <div className="flex items-center gap-1.5 bg-[#16181D] border border-white/10 rounded-full px-2 py-1 flex-shrink-0">
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.selectedColor, item.selectedLensOption?.id, -1)}
                          className="w-5 h-5 flex items-center justify-center text-gray-400 hover:text-white"
                        >
                          <Minus size={11} />
                        </button>
                        <span className="text-xs font-bold px-1 text-white">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.selectedColor, item.selectedLensOption?.id, 1)}
                          className="w-5 h-5 flex items-center justify-center text-gray-400 hover:text-white"
                        >
                          <Plus size={11} />
                        </button>
                      </div>

                      {/* Delete item */}
                      <button 
                        onClick={() => removeFromCart(item.product.id, item.selectedColor, item.selectedLensOption?.id)}
                        className="text-gray-500 hover:text-red-400 p-1 transition-colors flex-shrink-0"
                        title="Supprimer"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Delivery Zone Selector */}
              <div className="pt-4 border-t border-white/10">
                <label className="flex items-center gap-1.5 text-xs font-bold text-[#C5A059] mb-2">
                  <MapPin size={13} />
                  Zone de livraison (Dakar &amp; Régions)
                </label>
                <select
                  value={selectedZone}
                  onChange={(e) => setSelectedZone(e.target.value)}
                  className="w-full bg-[#16181D] border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                >
                  {siteConfig.deliveryZones.map((zone) => (
                    <option key={zone.area} value={zone.area} className="bg-[#16181D] text-white">
                      {zone.area} — {formatPriceFCFA(zone.price)} ({zone.timeframe})
                    </option>
                  ))}
                </select>
              </div>

              {/* Prescription Toggle */}
              <div className="pt-2">
                <label className="flex items-center gap-2.5 p-3 rounded-xl bg-[#16181D] border border-white/10 cursor-pointer text-xs">
                  <input
                    type="checkbox"
                    checked={hasPrescription}
                    onChange={(e) => setHasPrescription(e.target.checked)}
                    className="rounded border-gray-600 text-[#C5A059] focus:ring-[#C5A059]"
                  />
                  <span className="text-gray-300">
                    J&apos;ai une ordonnance médicale à transmettre sur WhatsApp
                  </span>
                </label>
              </div>

              {/* Client Info Inputs */}
              <div className="space-y-2 pt-2">
                <input
                  type="text"
                  placeholder="Votre nom (facultatif)"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-[#16181D] border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A059]"
                />
                <input
                  type="text"
                  placeholder="Votre quartier ou adresse à Dakar (facultatif)"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  className="w-full bg-[#16181D] border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A059]"
                />
              </div>
            </>
          )}
        </div>

        {/* Footer with WhatsApp CTA */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-[#16181D] space-y-3">
            <div className="space-y-1.5 text-xs text-gray-400">
              <div className="flex justify-between">
                <span>Sous-total articles :</span>
                <span className="font-semibold text-white">{formatPriceFCFA(totalPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span>Frais de livraison :</span>
                <span className="font-semibold text-white">+{formatPriceFCFA(activeZoneObj.price)}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-white/10">
                <span>Total estimé :</span>
                <span className="text-base text-[#C5A059] font-black">{formatPriceFCFA(grandTotal)}</span>
              </div>
            </div>

            <button
              onClick={handleSendWhatsAppOrder}
              className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 transition-all btn-bounce"
            >
              <Send size={15} />
              Commander sur WhatsApp
            </button>
            <p className="text-[10px] text-gray-500 text-center">
              Paiement Wave, Orange Money ou Espèces à la livraison.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
