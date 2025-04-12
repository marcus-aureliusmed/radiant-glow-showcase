
import { Product, SkinType, Brand, Ingredient } from '@/types/product';

// Mock data for face wash products
export const products: Product[] = [
  {
    id: 1,
    name: "Hydra Boost Facial Cleanser",
    brand: "GlowUp",
    price: 599,
    skinType: ["Dry", "Normal"],
    ingredients: ["Hyaluronic Acid", "Aloe Vera"],
    description: "A gentle, hydrating cleanser that removes impurities while maintaining skin's natural moisture barrier. Perfect for dry to normal skin types that need extra hydration.",
    benefits: [
      "Deeply hydrates while cleansing",
      "Removes impurities without stripping skin",
      "Strengthens moisture barrier",
      "Leaves skin soft and supple"
    ],
    popularity: 93,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1556228578-28600f2ef945"
  },
  {
    id: 2,
    name: "Tea Tree Clarifying Wash",
    brand: "NatureFresh",
    price: 449,
    skinType: ["Oily", "Combination"],
    ingredients: ["Tea Tree", "Charcoal"],
    description: "This clarifying face wash combats excess oil and impurities with natural tea tree oil and activated charcoal. Helps control shine and prevent breakouts.",
    benefits: [
      "Controls excess oil production",
      "Deeply cleanses pores",
      "Helps prevent breakouts",
      "Balances skin without over-drying"
    ],
    popularity: 87,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be"
  },
  {
    id: 3,
    name: "Soothing Cucumber Cleanse",
    brand: "AquaBloom",
    price: 349,
    skinType: ["Sensitive", "Normal"],
    ingredients: ["Aloe Vera"],
    description: "A gentle, cooling cleanser formulated with cucumber extract and aloe vera to soothe sensitive skin while effectively removing dirt and makeup.",
    benefits: [
      "Calms redness and irritation",
      "Provides cooling sensation",
      "Gently cleanses without irritation",
      "Preserves natural pH balance"
    ],
    popularity: 78,
    isNewArrival: true,
    image: "https://images.unsplash.com/photo-1611930021389-f6c8aebfb107"
  },
  {
    id: 4,
    name: "Charcoal Deep Clean Foam",
    brand: "DermaPure",
    price: 499,
    skinType: ["Oily", "Combination"],
    ingredients: ["Charcoal", "Tea Tree"],
    description: "This foaming cleanser utilizes activated charcoal to draw out impurities and excess oil from deep within pores, leaving skin purified and refreshed.",
    benefits: [
      "Removes deep-seated impurities",
      "Absorbs excess oil",
      "Minimizes appearance of pores",
      "Prevents blackheads and breakouts"
    ],
    popularity: 92,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1631730486572-5698cacc829c"
  },
  {
    id: 5,
    name: "Vitamin C Brightening Wash",
    brand: "GlowUp",
    price: 699,
    skinType: ["Normal", "Combination", "Dry"],
    ingredients: ["Vitamin C"],
    description: "Infused with stabilized vitamin C, this brightening cleanser helps to even skin tone and boost radiance while gently removing impurities.",
    benefits: [
      "Brightens dull complexion",
      "Evens skin tone",
      "Gently exfoliates",
      "Boosts collagen production"
    ],
    popularity: 89,
    isNewArrival: true,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b"
  },
  {
    id: 6,
    name: "Gentle Aloe Face Wash",
    brand: "CleanSkin",
    price: 299,
    skinType: ["Sensitive", "Dry"],
    ingredients: ["Aloe Vera"],
    description: "This mild, creamy cleanser is perfect for sensitive and dry skin types. Formulated with aloe vera to soothe while cleansing.",
    benefits: [
      "Soothes irritated skin",
      "Provides gentle hydration",
      "Non-stripping formula",
      "Reduces redness and inflammation"
    ],
    popularity: 75,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f"
  },
  {
    id: 7,
    name: "AHA Exfoliating Cleanser",
    brand: "DermaPure",
    price: 649,
    skinType: ["Normal", "Combination"],
    ingredients: ["Vitamin C"],
    description: "This exfoliating cleanser contains alpha hydroxy acids to gently remove dead skin cells and promote cell renewal for a brighter complexion.",
    benefits: [
      "Removes dead skin cells",
      "Improves texture and tone",
      "Unclogs pores",
      "Stimulates cell turnover"
    ],
    popularity: 85,
    isNewArrival: true,
    image: "https://images.unsplash.com/photo-1592136957897-b2b6ca21e10d"
  },
  {
    id: 8,
    name: "Balancing Clay Cleanser",
    brand: "NatureFresh",
    price: 399,
    skinType: ["Oily", "Combination"],
    ingredients: ["Charcoal"],
    description: "This clay-based cleanser helps balance oil production and purify pores for a clearer, more matte complexion without over-drying the skin.",
    benefits: [
      "Absorbs excess oil",
      "Purifies and detoxifies",
      "Balances sebum production",
      "Minimizes pore appearance"
    ],
    popularity: 82,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1635360938476-4fed2112d9cd"
  },
  {
    id: 9,
    name: "Rose Petal Cleansing Gel",
    brand: "AquaBloom",
    price: 549,
    skinType: ["Normal", "Dry", "Sensitive"],
    ingredients: ["Aloe Vera", "Hyaluronic Acid"],
    description: "Infused with real rose extracts, this gentle cleansing gel soothes and hydrates while effectively removing makeup and impurities.",
    benefits: [
      "Provides antioxidant protection",
      "Maintains skin's hydration",
      "Calms and soothes",
      "Leaves skin soft and refreshed"
    ],
    popularity: 88,
    isNewArrival: true,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03"
  },
  {
    id: 10,
    name: "Oil-Control Foam Wash",
    brand: "CleanSkin",
    price: 349,
    skinType: ["Oily"],
    ingredients: ["Tea Tree", "Charcoal"],
    description: "This foaming cleanser is specifically formulated for oily skin to control shine and prevent breakouts while cleansing away impurities.",
    benefits: [
      "Controls excess oil throughout the day",
      "Deeply cleanses without stripping",
      "Helps prevent future breakouts",
      "Leaves skin matte but comfortable"
    ],
    popularity: 79,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1631730486920-c7fb632b4221"
  },
  {
    id: 11,
    name: "Moisture Balance Wash",
    brand: "GlowUp",
    price: 499,
    skinType: ["Combination", "Normal"],
    ingredients: ["Hyaluronic Acid", "Aloe Vera"],
    description: "This perfectly balanced cleanser addresses both dry and oily areas of combination skin, leaving the complexion balanced, clean, and comfortable.",
    benefits: [
      "Balances combination skin",
      "Hydrates dry areas",
      "Controls oil in T-zone",
      "Maintains optimal moisture levels"
    ],
    popularity: 84,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    id: 12,
    name: "Purifying Neem Face Wash",
    brand: "NatureFresh",
    price: 329,
    skinType: ["Oily", "Combination", "Sensitive"],
    ingredients: ["Tea Tree"],
    description: "Formulated with neem and tea tree oil, this antibacterial face wash helps combat acne and purify skin without causing irritation.",
    benefits: [
      "Natural antibacterial properties",
      "Prevents and treats breakouts",
      "Calms inflammation",
      "Clarifies without harsh chemicals"
    ],
    popularity: 77,
    isNewArrival: false,
    image: "https://images.unsplash.com/photo-1620755912518-ebe3fba75a7f"
  }
];

// Export constants for filters
export const allSkinTypes: SkinType[] = ['Oily', 'Dry', 'Combination', 'Sensitive', 'Normal'];
export const allBrands: Brand[] = ['GlowUp', 'NatureFresh', 'DermaPure', 'CleanSkin', 'AquaBloom'];
export const allIngredients: Ingredient[] = ['Tea Tree', 'Charcoal', 'Vitamin C', 'Aloe Vera', 'Hyaluronic Acid'];

// Price range
export const priceRange: [number, number] = [299, 699];
