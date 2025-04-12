
import { Product } from "@/types/product";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  openProductDetails: (product: Product) => void;
}

export function ProductCard({ product, openProductDetails }: ProductCardProps) {
  return (
    <div className="product-card group overflow-hidden" onClick={() => openProductDetails(product)}>
      <div className="relative aspect-square overflow-hidden rounded-xl mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        {product.isNewArrival && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-radiant-pink text-pink-900">New</Badge>
          </div>
        )}
      </div>
      
      <div className="space-y-1">
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.brand}</p>
        <div className="flex flex-wrap gap-1 my-1">
          {product.skinType.slice(0, 2).map((type) => (
            <span key={type} className="text-xs py-0.5 px-1.5 bg-radiant-lavender/50 text-purple-900 dark:text-purple-100 rounded">
              {type}
            </span>
          ))}
          {product.skinType.length > 2 && (
            <span className="text-xs py-0.5 px-1.5 bg-muted rounded">
              +{product.skinType.length - 2}
            </span>
          )}
        </div>
        <div className="flex justify-between items-center pt-1">
          <p className="font-semibold">₹{product.price}</p>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              // This would be your add to cart logic
              console.log("Added to cart:", product.name);
            }}
            className="text-xs px-2 py-1 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
