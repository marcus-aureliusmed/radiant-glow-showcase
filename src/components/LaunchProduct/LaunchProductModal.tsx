
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { X, Rocket, Check, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SkinType, Ingredient } from "@/types/product";
import { toast } from "sonner";
import { allSkinTypes, allIngredients } from "@/data/products";

interface LaunchProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LaunchProductModal({ isOpen, onClose }: LaunchProductModalProps) {
  const [formData, setFormData] = useState({
    productName: "",
    skinTypes: [] as SkinType[],
    ingredients: [] as Ingredient[],
    manufacturingType: "",
    allergies: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  
  const handleSkinTypeToggle = (skinType: SkinType) => {
    if (formData.skinTypes.includes(skinType)) {
      setFormData({
        ...formData,
        skinTypes: formData.skinTypes.filter(type => type !== skinType)
      });
    } else {
      setFormData({
        ...formData,
        skinTypes: [...formData.skinTypes, skinType]
      });
    }
  };
  
  const handleIngredientToggle = (ingredient: Ingredient) => {
    if (formData.ingredients.includes(ingredient)) {
      setFormData({
        ...formData,
        ingredients: formData.ingredients.filter(ing => ing !== ingredient)
      });
    } else {
      setFormData({
        ...formData,
        ingredients: [...formData.ingredients, ingredient]
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.productName.trim()) {
      toast.error("Please enter a product name");
      return;
    }
    
    if (formData.skinTypes.length === 0) {
      toast.error("Please select at least one skin type");
      return;
    }
    
    if (formData.ingredients.length === 0) {
      toast.error("Please select at least one ingredient");
      return;
    }
    
    if (!formData.manufacturingType) {
      toast.error("Please select a manufacturing type");
      return;
    }
    
    // Submit form
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setShowConfetti(true);
      
      toast.success("Product submitted successfully!", {
        description: "Our team will review your product and get back to you shortly."
      });
      
      // Hide confetti after animation
      setTimeout(() => setShowConfetti(false), 3000);
    }, 1500);
  };
  
  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setFormData({
          productName: "",
          skinTypes: [],
          ingredients: [],
          manufacturingType: "",
          allergies: "",
        });
        setIsSubmitted(false);
      }, 300);
    }
  }, [isOpen]);
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] p-0 bg-gradient-to-br from-background to-blue-50/30 dark:to-blue-900/10 rounded-2xl overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-semibold text-gradient-primary flex items-center gap-2">
            <Rocket className="text-blue-500" />
            Launch Your Own Facewash
          </DialogTitle>
        </DialogHeader>
        
        <DialogClose className="absolute right-4 top-4 rounded-full p-1.5 bg-background/80 backdrop-blur-sm hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors duration-300">
          <X size={18} />
        </DialogClose>
        
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Product Name */}
              <div>
                <label className="block text-sm font-medium mb-1">Product Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Enter your product name"
                  value={formData.productName}
                  onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                  maxLength={50}
                />
              </div>
              
              {/* Skin Types */}
              <div>
                <label className="block text-sm font-medium mb-1">What skin type is your product for?</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {allSkinTypes.map((skinType) => (
                    <button
                      key={skinType}
                      type="button"
                      onClick={() => handleSkinTypeToggle(skinType)}
                      className={`px-3 py-2 rounded-md text-sm transition-all duration-300 ${
                        formData.skinTypes.includes(skinType)
                          ? 'bg-blue-500 text-white'
                          : 'bg-muted hover:bg-blue-100 dark:hover:bg-blue-900/20'
                      }`}
                    >
                      {skinType}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Ingredients */}
              <div>
                <label className="block text-sm font-medium mb-1">Which ingredients does it contain?</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {allIngredients.map((ingredient) => (
                    <button
                      key={ingredient}
                      type="button"
                      onClick={() => handleIngredientToggle(ingredient)}
                      className={`px-3 py-2 rounded-md text-sm transition-all duration-300 ${
                        formData.ingredients.includes(ingredient)
                          ? 'bg-blue-500 text-white'
                          : 'bg-muted hover:bg-blue-100 dark:hover:bg-blue-900/20'
                      }`}
                    >
                      {ingredient}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Manufacturing Type */}
              <div>
                <label className="block text-sm font-medium mb-1">Manufacturing Type</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, manufacturingType: 'Self-manufactured' })}
                    className={`px-3 py-2 rounded-md text-sm transition-all duration-300 ${
                      formData.manufacturingType === 'Self-manufactured'
                        ? 'bg-blue-500 text-white'
                        : 'bg-muted hover:bg-blue-100 dark:hover:bg-blue-900/20'
                    }`}
                  >
                    Self-manufactured
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, manufacturingType: 'Lab-manufactured' })}
                    className={`px-3 py-2 rounded-md text-sm transition-all duration-300 ${
                      formData.manufacturingType === 'Lab-manufactured'
                        ? 'bg-blue-500 text-white'
                        : 'bg-muted hover:bg-blue-100 dark:hover:bg-blue-900/20'
                    }`}
                  >
                    Lab-manufactured
                  </button>
                </div>
              </div>
              
              {/* Allergies */}
              <div>
                <label className="block text-sm font-medium mb-1">Who should avoid it (allergies)?</label>
                <textarea
                  className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-blue-500/20 min-h-[80px] resize-y"
                  placeholder="List any allergies or contraindications"
                  value={formData.allergies}
                  onChange={(e) => setFormData({ ...formData, allergies: e.target.value })}
                ></textarea>
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Rocket size={16} />
                    <span>Submit Your Facewash</span>
                  </>
                )}
              </Button>
            </form>
          ) : (
            <div className="text-center py-8 space-y-6">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
                <Check size={32} className="text-green-500" />
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Awesome!</h3>
                <p className="text-muted-foreground">
                  Our team will review your product and get back to you shortly.
                </p>
              </div>
              
              <Button
                onClick={onClose}
                className="px-6 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-300"
              >
                Close
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
      
      {/* Confetti animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="confetti-container">
            {[...Array(50)].map((_, i) => (
              <div 
                key={i} 
                className="confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  backgroundColor: ['#4F46E5', '#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE'][Math.floor(Math.random() * 5)],
                  animationDuration: `${Math.random() * 3 + 2}s`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      )}
    </Dialog>
  );
}
