'use client';

import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { Product, FrameShape, LensOption } from '@/types';
import { useCart } from '@/lib/cart-context';
import { formatPriceFCFA } from '@/lib/utils';
import { 
  Search, 
  SlidersHorizontal, 
  ShoppingBag, 
  Check, 
  Sparkles, 
  SunMedium, 
  Monitor, 
  Eye, 
  MessageCircle, 
  RefreshCw,
  Info
} from 'lucide-react';

const categories = [
  { id: 'all', label: 'Toutes les montures' },
  { id: 'solaires', label: 'Solaires 10.000 F' },
  { id: 'anti-lumiere-bleue', label: 'Protection Écran 420nm' },
  { id: 'optiques-vue', label: 'Optiques de Vue' },
];

const shapes: { label: string; value: FrameShape | 'all' }[] = [
  { label: 'Toutes les formes', value: 'all' },
  { label: 'Carrée / Rectangulaire', value: 'Carrée / Rectangulaire' },
  { label: 'Hexagonale / Géométrique', value: 'Hexagonale / Géométrique' },
  { label: 'Ronde / Ovale', value: 'Ronde / Ovale' },
  { label: 'Aviateur / Pilote', value: 'Aviateur / Pilote' },
  { label: 'Cat-Eye / Papillon', value: 'Cat-Eye / Papillon' },
];

export default function BoutiqueCatalogue() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get('cat') || 'all';
  const initialShape = searchParams.get('shape') || 'all';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCat);
  const [selectedShape, setSelectedShape] = useState<string>(initialShape);
  const [selectedGender, setSelectedGender] = useState<'all' | 'Homme' | 'Femme' | 'Unisexe'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  
  // Selected lens option per product modal/card
  const [selectedLensPerProduct, setSelectedLensPerProduct] = useState<{ [productId: string]: LensOption }>({});
  const [activeColorPerProduct, setActiveColorPerProduct] = useState<{ [productId: string]: string }>({});

  const { addToCart } = useCart();
  const [addedItemNotice, setAddedItemNotice] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    return siteConfig.products.filter((p) => {
      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }
      // Shape filter
      if (selectedShape !== 'all' && p.shape !== selectedShape) {
        return false;
      }
      // Gender filter
      if (selectedGender !== 'all' && p.gender !== selectedGender && p.gender !== 'Unisexe') {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesBrand = p.brand?.toLowerCase().includes(query);
        const matchesShape = p.shape.toLowerCase().includes(query);
        const matchesDesc = p.description.toLowerCase().includes(query);
        if (!matchesName && !matchesBrand && !matchesShape && !matchesDesc) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });
  }, [selectedCategory, selectedShape, selectedGender, searchQuery, sortBy]);

  const handleAddToCart = (product: Product) => {
    const chosenColor = activeColorPerProduct[product.id] || product.colors[0];
    const chosenLens = selectedLensPerProduct[product.id] || product.lensOptions?.[0];
    
    addToCart(product, chosenColor, chosenLens);
    setAddedItemNotice(product.id);
    setTimeout(() => setAddedItemNotice(null), 2500);
  };

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedShape('all');
    setSelectedGender('all');
    setSearchQuery('');
    setSortBy('featured');
  };

  return (
    <div className="py-12 bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search and Main Filters Bar */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm mb-10 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher une monture, marque (Fendi, Burberry), forme..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#F8F7F4] border border-gray-200 text-xs text-gray-900 focus:outline-none focus:border-[#C5A059] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-black"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400 font-bold uppercase tracking-wider hidden sm:inline">Trier :</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#F8F7F4] border border-gray-200 rounded-2xl px-4 py-3 text-xs text-gray-800 font-bold focus:outline-none focus:border-[#C5A059]"
              >
                <option value="featured">✨ Modèles Vedettes</option>
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-[#0D0F12] text-[#ECC97B] shadow-md border border-[#C5A059]/40'
                      : 'bg-[#F8F7F4] text-gray-600 hover:bg-gray-100 border border-gray-200/60'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Secondary Sub-filters: Shape & Gender */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-gray-400 font-bold uppercase tracking-wider text-[10px]">Forme :</span>
              <select
                value={selectedShape}
                onChange={(e) => setSelectedShape(e.target.value)}
                className="bg-[#F8F7F4] border border-gray-200 rounded-xl px-3 py-1.5 text-xs text-gray-800 font-medium focus:outline-none focus:border-[#C5A059]"
              >
                {shapes.map((s) => (
                  <option key={s.label} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-gray-400 font-bold uppercase tracking-wider text-[10px]">Genre :</span>
              {(['all', 'Homme', 'Femme', 'Unisexe'] as const).map((g) => (
                <button
                  key={g}
                  onClick={() => setSelectedGender(g)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold ${
                    selectedGender === g
                      ? 'bg-[#C5A059] text-[#0D0F12]'
                      : 'text-gray-500 hover:text-black'
                  }`}
                >
                  {g === 'all' ? 'Tous' : g}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count & Reset */}
        <div className="flex items-center justify-between mb-6 px-1">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            {filteredProducts.length} monture{filteredProducts.length > 1 ? 's' : ''} disponible{filteredProducts.length > 1 ? 's' : ''} à Dakar
          </p>

          {(selectedCategory !== 'all' || selectedShape !== 'all' || selectedGender !== 'all' || searchQuery !== '') && (
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C5A059] hover:underline"
            >
              <RefreshCw size={13} />
              <span>Réinitialiser les filtres</span>
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center border border-gray-200 shadow-sm max-w-lg mx-auto">
            <div className="w-16 h-16 bg-[#F8F7F4] text-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search size={24} />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#0D0F12]">Aucune monture trouvée</h3>
            <p className="text-xs text-gray-500 mt-2 mb-6">
              Essayez de modifier vos critères de recherche ou réinitialisez les filtres.
            </p>
            <button
              onClick={resetFilters}
              className="bg-[#0D0F12] text-[#ECC97B] px-6 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider"
            >
              Afficher toutes les montures
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const currentLens = selectedLensPerProduct[product.id] || product.lensOptions?.[0];
              const lensAddon = currentLens ? currentLens.price : 0;
              const finalPrice = product.price + lensAddon;
              const isAdded = addedItemNotice === product.id;

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Area */}
                    <div className="relative h-64 sm:h-72 w-full bg-[#0D0F12] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                        {product.badge && (
                          <span className="bg-[#C5A059] text-[#0D0F12] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                            {product.badge}
                          </span>
                        )}
                        <span className="bg-[#0D0F12]/80 backdrop-blur-sm text-white text-[9px] font-bold px-2 py-0.5 rounded-full border border-white/10 w-fit">
                          {product.gender}
                        </span>
                      </div>

                      {/* Bridge Width Calibre */}
                      {product.bridgeWidth && (
                        <span className="absolute bottom-3 right-3 bg-[#0D0F12]/90 backdrop-blur-sm text-gray-300 text-[10px] font-mono px-2 py-0.5 rounded-md border border-white/10">
                          {product.bridgeWidth}
                        </span>
                      )}
                    </div>

                    {/* Content Details */}
                    <div className="p-6 space-y-4">
                      <div>
                        {product.brand && (
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#9B7B34]">
                            {product.brand}
                          </p>
                        )}
                        <h3 className="font-serif text-lg font-bold text-[#0D0F12] leading-snug mt-1">
                          {product.name}
                        </h3>
                        <p className="text-[11px] text-gray-500 mt-1">
                          Forme : <span className="font-medium text-gray-800">{product.shape}</span> · {product.material}
                        </p>
                      </div>

                      <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                        {product.description}
                      </p>

                      {/* Color Options */}
                      {product.colors.length > 1 && (
                        <div className="space-y-1.5 pt-1">
                          <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                            Finition :
                          </label>
                          <div className="flex flex-wrap gap-1.5">
                            {product.colors.map((c) => {
                              const activeColor = activeColorPerProduct[product.id] || product.colors[0];
                              const isSelected = activeColor === c;
                              return (
                                <button
                                  key={c}
                                  onClick={() => setActiveColorPerProduct({ ...activeColorPerProduct, [product.id]: c })}
                                  className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-colors ${
                                    isSelected
                                      ? 'bg-[#0D0F12] text-[#ECC97B] border border-[#C5A059]'
                                      : 'bg-[#F8F7F4] text-gray-600 hover:bg-gray-200 border border-gray-200'
                                  }`}
                                >
                                  {c}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Lens Options Selector */}
                      {product.lensOptions && product.lensOptions.length > 0 && (
                        <div className="space-y-1.5 pt-1 border-t border-gray-100">
                          <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                            Option de Verres :
                          </label>
                          <select
                            value={currentLens?.id}
                            onChange={(e) => {
                              const chosen = product.lensOptions?.find(l => l.id === e.target.value);
                              if (chosen) {
                                setSelectedLensPerProduct({ ...selectedLensPerProduct, [product.id]: chosen });
                              }
                            }}
                            className="w-full bg-[#F8F7F4] border border-gray-200 rounded-xl px-2.5 py-2 text-xs text-gray-800 focus:outline-none focus:border-[#C5A059]"
                          >
                            {product.lensOptions.map((lens) => (
                              <option key={lens.id} value={lens.id}>
                                {lens.name} {lens.price > 0 ? `(+${formatPriceFCFA(lens.price)})` : ''}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="p-6 pt-0 border-t border-gray-100 mt-2">
                    <div className="flex items-center justify-between mb-4 pt-4">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                          Prix Total
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className="font-serif text-xl font-black text-[#0D0F12]">
                            {formatPriceFCFA(finalPrice)}
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs text-gray-400 line-through">
                              {formatPriceFCFA(product.originalPrice)}
                            </span>
                          )}
                        </div>
                      </div>

                      <a
                        href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(`Bonjour Gémeaux Optique, je souhaite commander la monture "${product.name}" (${formatPriceFCFA(finalPrice)}).`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#25D366] hover:text-[#1EBE5D] p-2"
                        title="Commander directement sur WhatsApp"
                      >
                        <MessageCircle size={22} />
                      </a>
                    </div>

                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`w-full py-3.5 px-4 rounded-2xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm ${
                        isAdded
                          ? 'bg-[#06D6A0] text-[#0D0F12]'
                          : 'gold-gradient-bg text-[#0D0F12] hover:opacity-95 btn-bounce'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check size={16} />
                          <span>Ajouté au panier !</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag size={15} />
                          <span>Ajouter au panier</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
