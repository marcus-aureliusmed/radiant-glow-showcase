
import { Product } from "@/types/product";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto p-0">
        <DialogClose className="absolute right-4 top-4 z-10 rounded-full p-1 bg-background/80 backdrop-blur-sm hover:bg-muted">
          <X size={18} />
        </DialogClose>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-background to-muted/30 p-6">
            <div className="rounded-xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
          
          <div className="p-6 pt-10 md:pt-6">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-semibold">{product.name}</h2>
                    <p className="text-muted-foreground">{product.brand}</p>
                  </div>
                  {product.isNewArrival && (
                    <Badge className="bg-radiant-pink text-pink-900">New</Badge>
                  )}
                </div>
                
                <p className="text-2xl font-bold mt-2">₹{product.price}</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Description</h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Benefits</h3>
                <ul className="space-y-1">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="text-sm flex items-start gap-2">
                      <span className="text-green-500 text-xl leading-tight">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Suitable For</h3>
                <div className="flex flex-wrap gap-2">
                  {product.skinType.map((type) => (
                    <span
                      key={type}
                      className="text-xs py-1 px-2 bg-radiant-lavender/50 text-purple-900 dark:text-purple-100 rounded-full"
                    >
                      {type} Skin
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Key Ingredients</h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient) => (
                    <span
                      key={ingredient}
                      className="text-xs py-1 px-2 bg-radiant-mint/50 text-green-900 dark:text-green-100 rounded-full"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
              
              <button className="w-full py-3 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-medium transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
