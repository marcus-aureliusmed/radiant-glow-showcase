
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Flask, Check, Sparkles } from "lucide-react";
import { Ingredient } from "@/types/product";
import { allIngredients } from "@/data/products";
import { toast } from "sonner";

interface IngredientWithDetails {
  name: Ingredient;
  description: string;
  color: string;
  benefit: string;
  icon: React.ReactNode;
}

// Extended ingredient data with details
const ingredientsData: IngredientWithDetails[] = [
  {
    name: "Tea Tree",
    description: "Natural antiseptic with antibacterial properties",
    color: "bg-green-300",
    benefit: "Controls acne & purifies skin",
    icon: "🌿"
  },
  {
    name: "Charcoal",
    description: "Absorbs toxins and impurities from skin",
    color: "bg-gray-600",
    benefit: "Deep cleansing & detoxifying",
    icon: "🖤"
  },
  {
    name: "Vitamin C",
    description: "Brightening antioxidant for glowing skin",
    color: "bg-orange-300",
    benefit: "Radiance & protection",
    icon: "🍊"
  },
  {
    name: "Aloe Vera",
    description: "Soothing plant extract that calms irritation",
    color: "bg-green-400",
    benefit: "Hydration & soothing",
    icon: "🌵"
  },
  {
    name: "Hyaluronic Acid",
    description: "Powerful humectant that attracts moisture",
    color: "bg-blue-300",
    benefit: "Deep hydration & plumping",
    icon: "💧"
  }
];

const CustomFacewash = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([]);
  const [bottleFill, setBottleFill] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Enter animation
    setAnimate(true);
    
    // Calculate fill level based on selected ingredients
    const fillPercentage = (selectedIngredients.length / 3) * 100;
    setBottleFill(Math.min(fillPercentage, 100));
  }, [selectedIngredients]);

  const toggleIngredient = (ingredient: Ingredient) => {
    if (selectedIngredients.includes(ingredient)) {
      setSelectedIngredients(selectedIngredients.filter(i => i !== ingredient));
    } else {
      if (selectedIngredients.length < 3) {
        setSelectedIngredients([...selectedIngredients, ingredient]);
      } else {
        toast.error("You can select up to 3 ingredients", {
          description: "Please remove an ingredient to add a new one"
        });
      }
    }
  };

  const finalizeFormula = () => {
    if (selectedIngredients.length === 0) {
      toast.error("Please select at least one ingredient");
      return;
    }
    
    setShowConfetti(true);
    toast.success("Your custom formula has been created!", {
      description: "We'll prepare your custom face wash with your selected ingredients."
    });
    
    // Remove confetti after animation
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-purple-50/30">
      <Header searchQuery="" setSearchQuery={() => {}} />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="flex items-center gap-2 mb-8">
          <Link 
            to="/"
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-gradient-primary flex items-center gap-2">
            <Flask className="text-purple-500" />
            Customize Your Facewash
          </h1>
        </div>
        
        <div className={`grid md:grid-cols-5 gap-8 transition-all duration-700 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Ingredients Selection - Left Side */}
          <div className="md:col-span-3 space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Select Up to 3 Ingredients</h2>
              <p className="text-muted-foreground mb-6">Choose the ingredients that match your skin's needs</p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {ingredientsData.map((ingredient) => (
                  <div 
                    key={ingredient.name}
                    onClick={() => toggleIngredient(ingredient.name)}
                    className={`relative p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                      selectedIngredients.includes(ingredient.name) 
                        ? 'border-purple-400 bg-purple-50 dark:bg-purple-900/30 shadow-md scale-105' 
                        : 'border-border hover:border-purple-200 hover:bg-purple-50/50 dark:hover:bg-purple-900/10'
                    }`}
                  >
                    {selectedIngredients.includes(ingredient.name) && (
                      <div className="absolute top-2 right-2 bg-purple-500 text-white rounded-full p-1">
                        <Check size={14} />
                      </div>
                    )}
                    
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 ${ingredient.color} rounded-full flex items-center justify-center text-lg`}>
                        {ingredient.icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{ingredient.name}</h3>
                        <p className="text-xs text-muted-foreground">{ingredient.description}</p>
                        <div className="mt-2 text-xs inline-flex items-center px-2 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full">
                          {ingredient.benefit}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Your Selected Ingredients</h2>
              
              {selectedIngredients.length === 0 ? (
                <p className="text-muted-foreground text-sm italic">No ingredients selected yet</p>
              ) : (
                <div className="flex flex-wrap gap-2 my-3">
                  {selectedIngredients.map(name => {
                    const ingredient = ingredientsData.find(i => i.name === name)!;
                    return (
                      <div key={name} className="flex items-center gap-1 px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                        <span>{ingredient.icon}</span>
                        <span>{name}</span>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleIngredient(name);
                          }}
                          className="ml-1 text-purple-500 hover:text-purple-700 dark:hover:text-purple-300"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
              
              <div className="mt-4">
                <Button
                  onClick={finalizeFormula}
                  disabled={selectedIngredients.length === 0}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Sparkles size={16} />
                  Finalize Your Formula
                </Button>
              </div>
            </div>
          </div>
          
          {/* Bottle Visualization - Right Side */}
          <div className="md:col-span-2">
            <div className="sticky top-24 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm flex flex-col items-center">
              <h2 className="text-xl font-semibold mb-6 text-center">Your Custom Formula</h2>
              
              <div className="relative w-56 h-64 mx-auto">
                {/* Bottle outline */}
                <div className="absolute inset-0 border-4 border-gray-300 dark:border-gray-600 rounded-3xl overflow-hidden">
                  {/* Bottle neck */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-8 border-4 border-gray-300 dark:border-gray-600 rounded-t-xl"></div>
                  
                  {/* Bottle cap */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-6 bg-purple-400 dark:bg-purple-500 rounded-t-xl"></div>
                  
                  {/* Bottle fill - layered ingredients */}
                  <div className="absolute bottom-0 left-0 right-0 overflow-hidden transition-all duration-1000 ease-out"
                      style={{ height: `${bottleFill}%` }}>
                    {/* Base layer - always present */}
                    <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 opacity-30"></div>
                    
                    {/* Ingredient layers */}
                    {selectedIngredients.map((name, index) => {
                      const ingredient = ingredientsData.find(i => i.name === name)!;
                      const layerHeight = (100 / (selectedIngredients.length || 1));
                      const positionFromBottom = index * layerHeight;
                      
                      return (
                        <div 
                          key={name}
                          className={`absolute left-0 right-0 ${ingredient.color} opacity-60 dark:opacity-40 transition-all duration-700`}
                          style={{ 
                            bottom: `${positionFromBottom}%`,
                            height: `${layerHeight}%`
                          }}
                        ></div>
                      );
                    })}
                    
                    {/* Bubbles animation */}
                    {bottleFill > 0 && (
                      <>
                        <div className="bubble-sm" style={{ left: '20%', animationDuration: '3s' }}></div>
                        <div className="bubble-sm" style={{ left: '65%', animationDuration: '4s', animationDelay: '1s' }}></div>
                        <div className="bubble-sm" style={{ left: '40%', animationDuration: '3.5s', animationDelay: '0.5s' }}></div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <h3 className="font-medium text-lg">
                  {selectedIngredients.length === 0 && "Empty Bottle"}
                  {selectedIngredients.length === 1 && "Base Formula"}
                  {selectedIngredients.length === 2 && "Enhanced Formula"}
                  {selectedIngredients.length === 3 && "Premium Formula"}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {selectedIngredients.length === 0 && "Select ingredients to create your formula"}
                  {selectedIngredients.length > 0 && "Your custom face wash is taking shape!"}
                </p>
                
                {selectedIngredients.length > 0 && (
                  <div className="mt-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <p className="text-sm font-medium">Perfect for:</p>
                    <ul className="text-sm mt-1 space-y-1 text-left">
                      {selectedIngredients.includes("Tea Tree") && (
                        <li className="flex items-center gap-1">
                          <span className="text-green-500">✓</span> Acne-prone skin
                        </li>
                      )}
                      {selectedIngredients.includes("Charcoal") && (
                        <li className="flex items-center gap-1">
                          <span className="text-green-500">✓</span> Deep cleansing
                        </li>
                      )}
                      {selectedIngredients.includes("Vitamin C") && (
                        <li className="flex items-center gap-1">
                          <span className="text-green-500">✓</span> Brightening & radiance
                        </li>
                      )}
                      {selectedIngredients.includes("Aloe Vera") && (
                        <li className="flex items-center gap-1">
                          <span className="text-green-500">✓</span> Soothing sensitive skin
                        </li>
                      )}
                      {selectedIngredients.includes("Hyaluronic Acid") && (
                        <li className="flex items-center gap-1">
                          <span className="text-green-500">✓</span> Deep hydration
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
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
                  backgroundColor: ['#FFD1DC', '#FFC3A0', '#D4F0F0', '#CCE5FF', '#FFE5B4'][Math.floor(Math.random() * 5)],
                  animationDuration: `${Math.random() * 3 + 2}s`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomFacewash;
