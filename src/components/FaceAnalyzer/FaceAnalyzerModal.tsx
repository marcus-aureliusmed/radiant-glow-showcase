
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { X, Camera, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { SkinType } from "@/types/product";
import { products } from "@/data/products";

interface FaceAnalyzerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FaceAnalyzerModal({ isOpen, onClose }: FaceAnalyzerModalProps) {
  const [stage, setStage] = useState<'initial' | 'scanning' | 'results'>('initial');
  const [cameraActive, setCameraActive] = useState(false);
  const [skinType, setSkinType] = useState<SkinType | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Initialize camera when the modal opens and cameraActive is true
  useEffect(() => {
    if (isOpen && cameraActive && videoRef.current) {
      const startCamera = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ 
            video: { facingMode: "user" } 
          });
          videoRef.current!.srcObject = stream;
          streamRef.current = stream;
        } catch (err) {
          console.error("Error accessing camera:", err);
          toast.error("Unable to access camera. Please check permissions.");
          setCameraActive(false);
        }
      };
      
      startCamera();
      
      return () => {
        if (streamRef.current) {
          streamRef.current.getTracks().forEach(track => track.stop());
        }
      };
    }
  }, [isOpen, cameraActive]);

  // Clean up camera when the modal closes
  useEffect(() => {
    if (!isOpen && streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
  }, [isOpen]);

  const startAnalysis = () => {
    setCameraActive(true);
    setStage('scanning');
    
    // Simulate scanning process
    setTimeout(() => {
      // Randomly choose a skin type for the demo
      const skinTypes: SkinType[] = ['Oily', 'Dry', 'Combination', 'Sensitive', 'Normal'];
      const randomSkinType = skinTypes[Math.floor(Math.random() * skinTypes.length)];
      setSkinType(randomSkinType);
      setStage('results');
      
      // Stop the camera after analysis
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    }, 3000);
  };

  const getRecommendedProducts = () => {
    if (!skinType) return [];
    
    // Filter products that match the detected skin type
    return products
      .filter(product => product.skinType.includes(skinType))
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 3);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) {
        setCameraActive(false);
        setStage('initial');
        onClose();
      }
    }}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-gradient-to-br from-background to-pink-50/30 dark:to-pink-900/10 rounded-2xl">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-semibold text-gradient-primary flex items-center gap-2">
            <Camera className="text-pink-500" />
            Face Analyzer
          </DialogTitle>
          <p className="text-muted-foreground text-sm mt-2">
            {stage === 'initial' && "Let's analyze your skin type to find the perfect face wash for you."}
            {stage === 'scanning' && "Position your face within the guide..."}
            {stage === 'results' && "Analysis complete! Here are your personalized recommendations."}
          </p>
        </DialogHeader>
        
        <DialogClose className="absolute right-4 top-4 rounded-full p-1.5 bg-background/80 backdrop-blur-sm hover:bg-pink-100 dark:hover:bg-pink-900/40 transition-colors duration-300">
          <X size={18} />
        </DialogClose>
        
        <div className="p-6">
          {stage === 'initial' && (
            <div className="flex flex-col items-center space-y-6 py-6">
              <div className="w-32 h-32 rounded-full bg-pink-100 flex items-center justify-center animate-pulse-soft">
                <Camera size={48} className="text-pink-500" />
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-medium">Ready to discover your skin type?</h3>
                <p className="text-sm text-muted-foreground">
                  Our AI will analyze your skin and recommend the perfect products for you.
                </p>
              </div>
              <Button 
                onClick={startAnalysis}
                className="w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Start Analysis
                <Camera size={16} />
              </Button>
            </div>
          )}
          
          {stage === 'scanning' && (
            <div className="relative">
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <video 
                  ref={videoRef} 
                  autoPlay 
                  playsInline 
                  muted 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Guidance overlay */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="relative">
                  {/* Face outline guide */}
                  <div className="w-40 h-40 rounded-full border-2 border-dashed border-pink-500/70 animate-pulse"></div>
                  
                  {/* Center dot */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-pink-500 rounded-full animate-ping"></div>
                  
                  {/* Scanning animation */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-scan"></div>
                </div>
              </div>
              
              <p className="mt-4 text-center text-sm">
                Position your face within the circle and look directly at the camera.
              </p>
            </div>
          )}
          
          {stage === 'results' && skinType && (
            <div className="space-y-6">
              <div className="bg-pink-50 dark:bg-pink-900/20 rounded-xl p-4 text-center">
                <div className="inline-flex items-center gap-2 mb-2">
                  <Sparkles size={16} className="text-pink-500" />
                  <h3 className="font-medium">Your Skin Analysis Results</h3>
                </div>
                <div className="text-2xl font-bold text-gradient-primary">
                  {skinType} Skin Type
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {skinType === 'Oily' && "Your skin produces excess oil, especially in the T-zone. Look for products that control shine without over-drying."}
                  {skinType === 'Dry' && "Your skin feels tight and may have flaky patches. You need gentle, hydrating cleansers."}
                  {skinType === 'Combination' && "You have both oily and dry areas. Your T-zone tends to be oily while cheeks are normal or dry."}
                  {skinType === 'Sensitive' && "Your skin reacts easily to products. Look for gentle, fragrance-free cleansers with soothing ingredients."}
                  {skinType === 'Normal' && "You have a well-balanced skin type. Most products work well for you with minimal irritation."}
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Recommended for You</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {getRecommendedProducts().map((product) => (
                    <div 
                      key={product.id} 
                      className="bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    >
                      <div className="aspect-square rounded-md overflow-hidden mb-2">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158";
                          }}
                        />
                      </div>
                      <h4 className="text-sm font-medium truncate">{product.name}</h4>
                      <p className="text-xs text-muted-foreground">{product.brand}</p>
                      <p className="text-sm font-semibold mt-1">₹{product.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
