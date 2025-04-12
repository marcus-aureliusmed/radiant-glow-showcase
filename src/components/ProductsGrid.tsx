
import { Product, SortOption } from "@/types/product";
import { ProductCard } from "./ProductCard";
import { useEffect, useState } from "react";

interface ProductsGridProps {
  products: Product[];
  openProductDetails: (product: Product) => void;
}

export function ProductsGrid({ products, openProductDetails }: ProductsGridProps) {
  const [animateCards, setAnimateCards] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setAnimateCards(true);
  }, []);

  return (
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
            <ProductCard
              product={product}
              openProductDetails={openProductDetails}
            />
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
  );
}
