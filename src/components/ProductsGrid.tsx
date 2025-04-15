
import { Product } from "@/types/product";
import { useEffect, useState } from "react";
import { Heart, Star } from "lucide-react";
import { CustomFacewashLink } from "./CustomFacewash/CustomFacewashLink";

interface ProductsGridProps {
  products: Product[];
  openProductDetails: (product: Product) => void;
}

export function ProductsGrid({ products, openProductDetails }: ProductsGridProps) {
  const [animateCards, setAnimateCards] = useState(false);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [shippingDays, setShippingDays] = useState<Record<string, {min: number, max: number}>>({});
  
  useEffect(() => {
    // Trigger animation after component mounts
    setAnimateCards(true);
    
    // Generate and store fixed shipping days for each product
    const initialShippingDays: Record<string, {min: number, max: number}> = {};
    products.forEach(product => {
      initialShippingDays[product.id.toString()] = {
        min: Math.floor(Math.random() * 5) + 1,
        max: Math.floor(Math.random() * 5) + 5
      };
    });
    setShippingDays(initialShippingDays);
  }, [products]);

  const toggleFavorite = (e: React.MouseEvent, productId: string) => {
    e.stopPropagation();
    setFavorites(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  return (
    <div className="space-y-8">
      {/* Custom Facewash Link - Show only on mobile */}
      <div className="md:hidden">
        <CustomFacewashLink />
      </div>
      
      {/* Airbnb-style listing grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Animated background bubbles */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="bubble bubble-1"></div>
          <div className="bubble bubble-2"></div>
          <div className="bubble bubble-3"></div>
          <div className="bubble bubble-4"></div>
        </div>
        
        {products.length > 0 ? (
          products.map((product, index) => (
            <div 
              key={product.id}
              className={`transform transition-all duration-700 ${
                animateCards 
                  ? "translate-y-0 opacity-100 scale-100" 
                  : "translate-y-8 opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div 
                className="cursor-pointer group relative rounded-xl overflow-hidden"
                onClick={() => openProductDetails(product)}
              >
                {/* Superhost badge */}
                {product.isNewArrival && (
                  <div className="absolute top-2 left-2 z-10 bg-white text-pink-500 rounded-full px-2 py-1 text-xs font-medium shadow-md flex items-center">
                    <span className="text-pink-500 mr-1">★</span>
                    <span>Superhost</span>
                  </div>
                )}
                
                {/* Favorite button */}
                <button 
                  onClick={(e) => toggleFavorite(e, product.id.toString())} 
                  className="absolute top-2 right-2 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-all duration-300"
                >
                  <Heart 
                    size={18} 
                    className={favorites[product.id.toString()] ? "fill-pink-500 text-pink-500" : "text-gray-500"}
                  />
                </button>
                
                {/* Product image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback to a placeholder if image fails to load
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158";
                      console.log(`Image failed to load for ${product.name}. Using fallback.`);
                    }}
                  />
                </div>
                
                {/* Product info - styled more like Airbnb */}
                <div className="p-4 space-y-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{product.name}</h3>
                    <div className="flex items-center">
                      <Star size={16} className="fill-pink-500 text-pink-500 mr-1" />
                      <span>{(4.5 + Math.random() * 0.5).toFixed(1)}</span>
                      <span className="text-gray-400 ml-1">({Math.floor(Math.random() * 200) + 50})</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">{product.brand}</p>
                  
                  {/* Location-like data */}
                  <p className="text-sm text-muted-foreground">
                    For {product.skinType.join(", ")} skin
                  </p>
                  
                  {/* Date range like display with consistent shipping days */}
                  <p className="text-sm text-muted-foreground">
                    Ships in {shippingDays[product.id.toString()]?.min || 1}-{shippingDays[product.id.toString()]?.max || 7} days
                  </p>
                  
                  {/* Price display */}
                  <p className="font-semibold text-lg mt-2">₹{product.price} <span className="text-sm font-normal text-muted-foreground">per unit</span></p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center">
            <div className="animate-bounce mb-4">
              <span className="text-5xl">🔍</span>
            </div>
            <h3 className="text-xl font-medium mb-2">No products found</h3>
            <p className="text-muted-foreground">
              Try adjusting your filters to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
