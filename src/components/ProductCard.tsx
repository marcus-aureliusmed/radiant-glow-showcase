
import { Product } from "@/types/product";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ShoppingCart } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useState } from "react";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  openProductDetails: (product: Product) => void;
}

export function ProductCard({ product, openProductDetails }: ProductCardProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    setIsClicked(true);
    
    // Create click ripple effect (added via CSS)
    const ripple = document.createElement('div');
    ripple.classList.add('ripple-effect');
    const card = document.getElementById(`product-card-${product.id}`);
    if (card) {
      card.appendChild(ripple);
      setTimeout(() => {
        card.removeChild(ripple);
      }, 1000);
    }
    
    setTimeout(() => {
      setIsClicked(false);
      openProductDetails(product);
    }, 300);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Create button click effect
    const button = e.currentTarget as HTMLButtonElement;
    button.classList.add('clicked');
    setTimeout(() => {
      button.classList.remove('clicked');
    }, 300);
    
    // In a real app, this would add to cart functionality
    toast.success(`Added ${product.name} to cart`, {
      description: "Your item has been added to the cart",
      position: "top-center",
      duration: 3000,
    });
  };

  return (
    <div 
      id={`product-card-${product.id}`}
      className={`product-card group overflow-hidden relative cursor-pointer transform transition-all duration-300 ${isClicked ? 'scale-95 shadow-sm' : ''}`}
      onClick={handleCardClick}
    >
      {/* Shimmer effect overlay */}
      <div className="absolute inset-0 z-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <div className="relative aspect-square overflow-hidden rounded-xl mb-3 bg-gradient-to-br from-background to-muted/30">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
          onError={(e) => {
            // Fallback to a placeholder if image fails to load
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158";
          }}
        />
        
        {/* Animated glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        {product.isNewArrival && (
          <div className="absolute top-2 right-2 animate-pulse-soft">
            <Badge className="bg-radiant-pink text-pink-900 dark:text-pink-100 flex items-center gap-1">
              <Sparkles size={12} className="animate-pulse" />
              <span>New</span>
            </Badge>
          </div>
        )}
      </div>
      
      <div className="space-y-1 relative z-10">
        <h3 className="font-medium group-hover:text-pink-500 transition-colors duration-300">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.brand}</p>
        
        <div className="flex flex-wrap gap-1 my-1">
          {product.skinType.slice(0, 2).map((type) => (
            <HoverCard key={type}>
              <HoverCardTrigger>
                <span className="text-xs py-0.5 px-1.5 bg-radiant-lavender/50 text-purple-900 dark:text-purple-100 rounded transition-transform duration-300 hover:scale-105 cursor-help">
                  {type}
                </span>
              </HoverCardTrigger>
              <HoverCardContent className="w-56 p-2">
                <p className="text-xs">
                  {getSkinTypeDescription(type)}
                </p>
              </HoverCardContent>
            </HoverCard>
          ))}
          
          {product.skinType.length > 2 && (
            <span className="text-xs py-0.5 px-1.5 bg-muted rounded animate-pulse-soft">
              +{product.skinType.length - 2}
            </span>
          )}
        </div>
        
        <div className="flex justify-between items-center pt-1">
          <p className="font-semibold text-lg text-foreground">₹{product.price}</p>
          <button 
            onClick={handleAddToCart}
            className="text-xs px-3 py-1.5 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-1 add-to-cart-btn"
          >
            <ShoppingCart size={12} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

function getSkinTypeDescription(type: string): string {
  switch (type) {
    case 'Oily':
      return 'Ideal for skin that produces excess sebum. Helps control shine and prevent breakouts.';
    case 'Dry':
      return 'Gentle, hydrating formula for dry skin. Cleanses without stripping natural oils.';
    case 'Combination':
      return 'Balanced formula that addresses both oily and dry areas of the face.';
    case 'Sensitive':
      return 'Fragrance-free, gentle formula with soothing ingredients for easily irritated skin.';
    case 'Normal':
      return "Maintains your skin's natural balance while providing a thorough cleanse.";
    default:
      return 'Suitable for this skin type.';
  }
}
