import { Product, SkinType, Brand, Ingredient } from '@/types/product';

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
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
    image: "https://images.unsplash.com/photo-1631730486572-5698cacc829c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
    image: "https://images.pexels.com/photos/17466173/pexels-photo-17466173/free-photo-of-transformative-makeup-for-the-bold-and-beautiful.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
    image: "https://images.pexels.com/photos/17466036/pexels-photo-17466036/free-photo-of-transformative-makeup-for-the-bold-and-beautiful.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
    image: "https://images.unsplash.com/photo-1556229010-aa3f7ff66b24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXdhc2h8ZW58MHx8MHx8fDA%3D"
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
    image: "https://images.unsplash.com/photo-1739285094922-e3c6cf72d470?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
    image: "https://images.unsplash.com/photo-1739175516086-1135a8020f16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGZhY2V3YXNofGVufDB8fDB8fHww"
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
    image: "https://images.unsplash.com/photo-1598462795010-8ffd5f41d1aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
    image: "https://images.unsplash.com/photo-1631730486920-c7fb632b4221?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
    image: "https://images.unsplash.com/photo-1612532275214-e4ca76d0e4d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export const allSkinTypes: SkinType[] = ['Oily', 'Dry', 'Combination', 'Sensitive', 'Normal'];
export const allBrands: Brand[] = ['GlowUp', 'NatureFresh', 'DermaPure', 'CleanSkin', 'AquaBloom'];
export const allIngredients: Ingredient[] = ['Tea Tree', 'Charcoal', 'Vitamin C', 'Aloe Vera', 'Hyaluronic Acid'];

export const priceRange: [number, number] = [299, 699];
