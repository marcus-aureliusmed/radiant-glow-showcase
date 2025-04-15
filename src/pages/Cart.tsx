
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Truck, Calendar, CreditCard, Trash2, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { products } from "@/data/products";
import { toast } from "sonner";

// Mock cart data
const MOCK_CART_ITEMS = [
  { productId: 1, quantity: 1 },
  { productId: 5, quantity: 2 }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState<{ productId: number; quantity: number }[]>(MOCK_CART_ITEMS);
  const [isLoading, setIsLoading] = useState(true);
  const [deliveryOption, setDeliveryOption] = useState<'standard' | 'express'>('standard');
  
  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  const cartProducts = cartItems.map(item => {
    const product = products.find(p => p.id === item.productId);
    return { ...item, product };
  }).filter(item => item.product);
  
  const subtotal = cartProducts.reduce((sum, item) => {
    return sum + (item.product?.price || 0) * item.quantity;
  }, 0);
  
  const deliveryFee = deliveryOption === 'standard' ? 49 : 149;
  const total = subtotal + deliveryFee;
  
  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prev => 
      prev.map(item => 
        item.productId === productId 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    );
  };
  
  const removeItem = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.productId !== productId));
    toast.success("Item removed from cart");
  };
  
  const handleCheckout = () => {
    toast.success("Order placed successfully!", {
      description: "Your order will be delivered soon.",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/30">
      <Header searchQuery="" setSearchQuery={() => {}} />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Continue Shopping
          </Link>
          
          <h1 className="text-3xl font-bold mt-4 mb-1">Your Cart</h1>
          <p className="text-muted-foreground">{cartItems.length} items in your cart</p>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-pulse">
            <div className="md:col-span-2 bg-muted h-96 rounded-lg"></div>
            <div className="bg-muted h-96 rounded-lg"></div>
          </div>
        ) : cartItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2 space-y-6">
              {cartProducts.map(({ product, quantity, productId }) => (
                product && (
                  <div key={product.id} className="bg-background rounded-lg p-4 border shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158";
                          }}
                        />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-medium">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">{product.brand}</p>
                        <p className="text-sm text-muted-foreground">
                          For {product.skinType.join(", ")} skin
                        </p>
                      </div>
                      
                      <div className="flex flex-col items-end gap-2">
                        <div className="font-medium">₹{product.price}</div>
                        
                        <div className="flex items-center gap-2">
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-7 w-7"
                            onClick={() => updateQuantity(productId, quantity - 1)}
                          >
                            <Minus size={14} />
                          </Button>
                          
                          <span className="w-8 text-center">{quantity}</span>
                          
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-7 w-7"
                            onClick={() => updateQuantity(productId, quantity + 1)}
                          >
                            <Plus size={14} />
                          </Button>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 p-0 h-auto"
                          onClick={() => removeItem(productId)}
                        >
                          <Trash2 size={14} className="mr-1" />
                          <span className="text-xs">Remove</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              ))}
              
              {/* Delivery Options */}
              <div className="bg-background rounded-lg p-4 border shadow-sm">
                <h3 className="font-medium mb-4">Delivery Options</h3>
                
                <div className="space-y-3">
                  <div
                    className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                      deliveryOption === 'standard' ? 'border-primary bg-primary/5' : ''
                    }`}
                    onClick={() => setDeliveryOption('standard')}
                  >
                    <div className="mt-0.5">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        deliveryOption === 'standard' ? 'border-primary' : ''
                      }`}>
                        {deliveryOption === 'standard' && (
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div className="font-medium">Standard Delivery</div>
                        <div>₹49</div>
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                        <Truck size={14} />
                        <span>Delivery within 5-7 business days</span>
                      </div>
                    </div>
                  </div>
                  
                  <div
                    className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                      deliveryOption === 'express' ? 'border-primary bg-primary/5' : ''
                    }`}
                    onClick={() => setDeliveryOption('express')}
                  >
                    <div className="mt-0.5">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        deliveryOption === 'express' ? 'border-primary' : ''
                      }`}>
                        {deliveryOption === 'express' && (
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div className="font-medium">Express Delivery</div>
                        <div>₹149</div>
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                        <Calendar size={14} />
                        <span>Delivery within 1-3 business days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="sticky top-20 h-fit">
              <div className="bg-background rounded-lg p-6 border shadow-sm">
                <h3 className="font-medium text-lg mb-4">Order Summary</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery Fee</span>
                    <span>₹{deliveryFee}</span>
                  </div>
                  
                  <Separator className="my-3" />
                  
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                  
                  <Button className="w-full mt-4 gap-2" size="lg" onClick={handleCheckout}>
                    <CreditCard size={16} />
                    Proceed to Checkout
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    Free delivery for orders above ₹999
                  </p>
                </div>
              </div>
              
              <div className="mt-6 bg-background rounded-lg p-4 border shadow-sm">
                <h4 className="font-medium mb-2">Expected Delivery</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>
                      {deliveryOption === 'standard' 
                        ? 'Apr 21 - Apr 23, 2025' 
                        : 'Apr 17 - Apr 19, 2025'}
                    </span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Truck size={14} />
                    <span>Shipping from Mumbai</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-16 text-center">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <Trash2 size={32} className="text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-medium mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link to="/">
              <Button className="gap-2">
                <ArrowLeft size={16} />
                Continue Shopping
              </Button>
            </Link>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
