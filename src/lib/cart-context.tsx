'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, LensOption } from '@/types';

interface CartContextType {
  cart: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product, selectedColor?: string, selectedLensOption?: LensOption) => void;
  removeFromCart: (productId: string, selectedColor?: string, lensOptionId?: string) => void;
  updateQuantity: (productId: string, selectedColor: string | undefined, lensOptionId: string | undefined, delta: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('gemeaux_cart');
      if (saved) {
        setCart(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('gemeaux_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addToCart = (product: Product, selectedColor?: string, selectedLensOption?: LensOption) => {
    setCart((prev) => {
      const color = selectedColor || product.colors[0];
      const lensId = selectedLensOption?.id || 'none';
      
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && 
                  item.selectedColor === color && 
                  (item.selectedLensOption?.id || 'none') === lensId
      );

      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx].quantity += 1;
        return next;
      } else {
        return [...prev, { product, selectedColor: color, selectedLensOption, quantity: 1 }];
      }
    });
    setIsOpen(true);
  };

  const removeFromCart = (productId: string, selectedColor?: string, lensOptionId?: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && 
                   item.selectedColor === selectedColor && 
                   (item.selectedLensOption?.id || 'none') === (lensOptionId || 'none'))
      )
    );
  };

  const updateQuantity = (productId: string, selectedColor: string | undefined, lensOptionId: string | undefined, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (
            item.product.id === productId &&
            item.selectedColor === selectedColor &&
            (item.selectedLensOption?.id || 'none') === (lensOptionId || 'none')
          ) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => {
    const itemBasePrice = item.product.price;
    const lensAddon = item.selectedLensOption ? item.selectedLensOption.price : 0;
    return sum + (itemBasePrice + lensAddon) * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        isOpen,
        openCart,
        closeCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
