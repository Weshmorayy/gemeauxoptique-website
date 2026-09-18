export type ProductCategory = 
  | 'solaires'
  | 'anti-lumiere-bleue'
  | 'optiques-vue'
  | 'accessoires';

export type FrameShape = 
  | 'Carrée / Rectangulaire'
  | 'Ronde / Ovale'
  | 'Hexagonale / Géométrique'
  | 'Aviateur / Pilote'
  | 'Cat-Eye / Papillon';

export type FrameMaterial = 
  | 'Acétate de Cellulose'
  | 'Métal Doré / Titane'
  | 'Combiné Acétate & Métal'
  | 'Acier Inoxydable Brossé';

export interface LensOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  brand?: string;
  category: ProductCategory;
  shape: FrameShape;
  material: FrameMaterial;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  colors: string[];
  gender: 'Homme' | 'Femme' | 'Unisexe';
  bridgeWidth?: string; // Largeur de pont / calibre (ex: 52-19-145)
  isPopular?: boolean;
  isNewArrival?: boolean;
  description: string;
  features: string[];
  lensOptions?: LensOption[];
}

export interface DeliveryZone {
  area: string;
  price: number;
  timeframe: string;
}

export interface CartItem {
  product: Product;
  selectedColor?: string;
  selectedLensOption?: LensOption;
  quantity: number;
}
