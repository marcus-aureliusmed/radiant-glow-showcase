
export type SkinType = 'Oily' | 'Dry' | 'Combination' | 'Sensitive' | 'Normal';
export type Brand = 'GlowUp' | 'NatureFresh' | 'DermaPure' | 'CleanSkin' | 'AquaBloom';
export type Ingredient = 'Tea Tree' | 'Charcoal' | 'Vitamin C' | 'Aloe Vera' | 'Hyaluronic Acid';
export type WeightOption = '50g' | '75g' | '125g';

export interface Product {
  id: number;
  name: string;
  brand: Brand;
  price: number;
  skinType: SkinType[];
  ingredients: Ingredient[];
  description: string;
  benefits: string[];
  popularity: number;
  isNewArrival: boolean;
  image: string;
}

export interface FilterState {
  skinType: SkinType[];
  brand: Brand[];
  ingredients: Ingredient[];
  priceRange: [number, number];
  searchQuery: string;
}

export type SortOption = 'price-low-high' | 'price-high-low' | 'popularity' | 'new-arrivals';
