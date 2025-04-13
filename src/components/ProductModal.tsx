
import { Product, WeightOption } from "@/types/product";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Droplet, Leaf, Sparkles, X, ShoppingCart, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [animateIn, setAnimateIn] = useState(false);
  const [selectedWeight, setSelectedWeight] = useState<WeightOption>("50g");

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setAnimateIn(true), 100);
      return () => clearTimeout(timer);
    } else {
      setAnimateIn(false);
    }
  }, [isOpen]);

  const handleAddToCart = () => {
    if (product) {
      // In a real app, this would add to cart functionality
      toast.success(`Added ${product.name} (${selectedWeight}) to cart`, {
        description: "Your item has been added to the cart",
        position: "top-center",
        duration: 3000,
      });
    }
  };

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto p-0 bg-gradient-to-br from-background to-muted/30 transition-all duration-500 ease-in-out">
        <DialogTitle className="sr-only">{product.name} Details</DialogTitle>
        <DialogDescription className="sr-only">Details about {product.name} product</DialogDescription>
        
        <DialogClose className="absolute right-4 top-4 z-10 rounded-full p-1.5 bg-background/80 backdrop-blur-sm hover:bg-pink-100 dark:hover:bg-pink-900/40 transition-colors duration-300">
          <X size={18} />
        </DialogClose>
        
        {/* Animated floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-icon floating-icon-1">
            <Leaf size={24} className="text-radiant-mint" />
          </div>
          <div className="floating-icon floating-icon-2">
            <Droplet size={24} className="text-radiant-blue" />
          </div>
          <div className="floating-icon floating-icon-3">
            <Sparkles size={24} className="text-radiant-pink" />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative p-6">
            <div className={`rounded-xl overflow-hidden transform transition-all duration-700 ${animateIn ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover aspect-square"
                onError={(e) => {
                  // Fallback to a placeholder if image fails to load
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158";
                }}
              />
              
              {/* Pulsing glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-pink-500/20 animate-pulse-soft"></div>
              
              {/* Weight Selection */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-medium mb-2 text-sm">Select Weight:</h3>
                <RadioGroup 
                  value={selectedWeight} 
                  onValueChange={(value) => setSelectedWeight(value as WeightOption)}
                  className="flex items-center gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="50g" id="r1" className="border-white text-white" />
                    <label htmlFor="r1" className="text-white text-sm cursor-pointer">50g</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="75g" id="r2" className="border-white text-white" />
                    <label htmlFor="r2" className="text-white text-sm cursor-pointer">75g</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="125g" id="r3" className="border-white text-white" />
                    <label htmlFor="r3" className="text-white text-sm cursor-pointer">125g</label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
          
          <div className="p-6 pt-10 md:pt-6">
            <div className="space-y-6">
              <div className={`transform transition-all duration-500 delay-100 ${animateIn ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-semibold text-gradient-primary">{product.name}</h2>
                    <p className="text-muted-foreground">{product.brand}</p>
                  </div>
                  {product.isNewArrival && (
                    <Badge className="bg-radiant-pink text-pink-900 dark:text-pink-100 flex items-center gap-1">
                      <Sparkles size={12} className="animate-pulse" />
                      <span>New</span>
                    </Badge>
                  )}
                </div>
                
                <p className="text-2xl font-bold mt-2 text-gradient dark:text-white">₹{product.price}</p>
              </div>
              
              <div className={`transform transition-all duration-500 delay-200 ${animateIn ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <h3 className="font-medium mb-2">Description</h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </div>
              
              <div className={`transform transition-all duration-500 delay-300 ${animateIn ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <h3 className="font-medium mb-2">Benefits</h3>
                <ul className="space-y-1">
                  {product.benefits.map((benefit, index) => (
                    <li 
                      key={index} 
                      className="text-sm flex items-start gap-2 transform transition-all"
                      style={{ transitionDelay: `${300 + index * 100}ms` }}
                    >
                      <span className="text-green-500 text-xl leading-tight animate-pulse-soft">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={`transform transition-all duration-500 delay-400 ${animateIn ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <h3 className="font-medium mb-2">Suitable For</h3>
                <div className="flex flex-wrap gap-2">
                  {product.skinType.map((type, index) => (
                    <span
                      key={type}
                      className="text-xs py-1 px-2 bg-radiant-lavender/50 text-purple-900 dark:text-purple-100 rounded-full transition-all hover:scale-105 hover:bg-radiant-lavender"
                      style={{ transitionDelay: `${400 + index * 50}ms` }}
                    >
                      {type} Skin
                    </span>
                  ))}
                </div>
              </div>
              
              <div className={`transform transition-all duration-500 delay-500 ${animateIn ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <h3 className="font-medium mb-2">Key Ingredients</h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient, index) => (
                    <span
                      key={ingredient}
                      className="text-xs py-1 px-2 bg-radiant-mint/50 text-green-900 dark:text-green-100 rounded-full transition-all hover:scale-105 hover:bg-radiant-mint"
                      style={{ transitionDelay: `${500 + index * 50}ms` }}
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className={`w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 ${animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} 
                style={{ transitionDelay: '600ms' }}
              >
                <ShoppingCart size={18} />
                Add to Cart ({selectedWeight})
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
