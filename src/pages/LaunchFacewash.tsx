
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const steps = [
  { id: 1, title: "Basic Information" },
  { id: 2, title: "Product Details" },
  { id: 3, title: "Ingredients" },
  { id: 4, title: "Pricing & Launch" }
];

export default function LaunchFacewash() {
  const [currentStep, setCurrentStep] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Form state
  const [formData, setFormData] = useState({
    productType: "",
    targetAudience: "",
    skinProblems: "",
    bedrooms: 1,
    bathrooms: 1,
    amenities: ["washer"]
  });
  
  const handleRadioChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };
  
  const handleCheckboxChange = (value: string) => {
    const currentAmenities = [...formData.amenities];
    if (currentAmenities.includes(value)) {
      setFormData({
        ...formData,
        amenities: currentAmenities.filter(item => item !== value)
      });
    } else {
      setFormData({
        ...formData,
        amenities: [...currentAmenities, value]
      });
    }
  };
  
  const handleNumberChange = (name: string, value: number) => {
    setFormData({ ...formData, [name]: value });
  };
  
  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/30">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Launch Your Facewash Product</h1>
          
          {/* Progress Bar */}
          <div className="mb-10">
            <div className="flex justify-between mb-2">
              {steps.map((step) => (
                <div 
                  key={step.id} 
                  className="flex flex-col items-center"
                >
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-1 
                    ${currentStep === step.id 
                      ? 'bg-pink-500 text-white' 
                      : currentStep > step.id 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-200 text-gray-500'}`}
                  >
                    {currentStep > step.id ? <CheckCircle2 size={20} /> : step.id}
                  </div>
                  <span className={`text-xs ${currentStep === step.id ? 'text-pink-500 font-medium' : ''}`}>
                    Step {step.id}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative w-full bg-gray-200 h-2 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300"
                style={{ width: `${(currentStep / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          {/* Step Content */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-4">What type of facewash are you listing?</h2>
                
                <RadioGroup onValueChange={(value) => handleRadioChange("productType", value)}>
                  <div className="border rounded-lg p-4 mb-3 hover:border-pink-300 transition-colors">
                    <div className="flex items-start gap-3">
                      <RadioGroupItem value="entire-place" id="entire-place" className="mt-1" />
                      <div>
                        <Label htmlFor="entire-place" className="text-base font-medium">Foaming Cleanser</Label>
                        <p className="text-sm text-muted-foreground">Gentle formula that forms a rich lather to remove impurities</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4 mb-3 hover:border-pink-300 transition-colors">
                    <div className="flex items-start gap-3">
                      <RadioGroupItem value="private-room" id="private-room" className="mt-1" />
                      <div>
                        <Label htmlFor="private-room" className="text-base font-medium">Gel Cleanser</Label>
                        <p className="text-sm text-muted-foreground">Lightweight, transparent formula that rinses clean without residue</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4 hover:border-pink-300 transition-colors">
                    <div className="flex items-start gap-3">
                      <RadioGroupItem value="shared-room" id="shared-room" className="mt-1" />
                      <div>
                        <Label htmlFor="shared-room" className="text-base font-medium">Cream Cleanser</Label>
                        <p className="text-sm text-muted-foreground">Rich, moisturizing formula ideal for dry or sensitive skin</p>
                      </div>
                    </div>
                  </div>
                </RadioGroup>
                
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-3">Where will your product be located?</h3>
                  <Input 
                    type="text" 
                    placeholder="Enter your manufacturing location"
                    className="w-full"
                  />
                </div>
              </div>
            )}
            
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-4">Tell us more about your product</h2>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="bedrooms" className="text-sm font-medium mb-2 block">Target Age Group</Label>
                    <div className="flex items-center">
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleNumberChange("bedrooms", Math.max(1, formData.bedrooms - 1))}
                        className="h-9 px-3"
                      >
                        -
                      </Button>
                      <div className="w-full text-center">
                        <span className="text-lg px-4">{formData.bedrooms}</span>
                      </div>
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleNumberChange("bedrooms", formData.bedrooms + 1)}
                        className="h-9 px-3"
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="bathrooms" className="text-sm font-medium mb-2 block">Skin Sensitivity (1-5)</Label>
                    <div className="flex items-center">
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleNumberChange("bathrooms", Math.max(1, formData.bathrooms - 1))}
                        className="h-9 px-3"
                      >
                        -
                      </Button>
                      <div className="w-full text-center">
                        <span className="text-lg px-4">{formData.bathrooms}</span>
                      </div>
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleNumberChange("bathrooms", formData.bathrooms + 1)}
                        className="h-9 px-3"
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-3">What key benefits do you offer?</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="wifi" 
                        checked={formData.amenities.includes("wifi")}
                        onCheckedChange={() => handleCheckboxChange("wifi")}
                      />
                      <Label htmlFor="wifi" className="text-sm">Oil Control</Label>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="kitchen" 
                        checked={formData.amenities.includes("kitchen")}
                        onCheckedChange={() => handleCheckboxChange("kitchen")}
                      />
                      <Label htmlFor="kitchen" className="text-sm">Hydration</Label>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="washer" 
                        checked={formData.amenities.includes("washer")}
                        onCheckedChange={() => handleCheckboxChange("washer")}
                      />
                      <Label htmlFor="washer" className="text-sm">Acne Treatment</Label>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="dryer" 
                        checked={formData.amenities.includes("dryer")}
                        onCheckedChange={() => handleCheckboxChange("dryer")}
                      />
                      <Label htmlFor="dryer" className="text-sm">Anti-Aging</Label>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="air-cond" 
                        checked={formData.amenities.includes("air-cond")}
                        onCheckedChange={() => handleCheckboxChange("air-cond")}
                      />
                      <Label htmlFor="air-cond" className="text-sm">Exfoliation</Label>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="heating" 
                        checked={formData.amenities.includes("heating")}
                        onCheckedChange={() => handleCheckboxChange("heating")}
                      />
                      <Label htmlFor="heating" className="text-sm">Brightening</Label>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="pool" 
                        checked={formData.amenities.includes("pool")}
                        onCheckedChange={() => handleCheckboxChange("pool")}
                      />
                      <Label htmlFor="pool" className="text-sm">Soothing</Label>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="beach" 
                        checked={formData.amenities.includes("beach")}
                        onCheckedChange={() => handleCheckboxChange("beach")}
                      />
                      <Label htmlFor="beach" className="text-sm">Fragrance-Free</Label>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {currentStep === 3 && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Select your key ingredients</h2>
                
                {/* Content for step 3 */}
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Choose the main active ingredients for your facewash formula. 
                    These will determine its effectiveness for different skin concerns.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="salicylic" />
                      <Label htmlFor="salicylic" className="text-sm">Salicylic Acid</Label>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox id="niacinamide" />
                      <Label htmlFor="niacinamide" className="text-sm">Niacinamide</Label>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox id="glycolic" />
                      <Label htmlFor="glycolic" className="text-sm">Glycolic Acid</Label>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox id="ceramides" />
                      <Label htmlFor="ceramides" className="text-sm">Ceramides</Label>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox id="hyaluronic" />
                      <Label htmlFor="hyaluronic" className="text-sm">Hyaluronic Acid</Label>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox id="vitamin-c" />
                      <Label htmlFor="vitamin-c" className="text-sm">Vitamin C</Label>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox id="aloe" />
                      <Label htmlFor="aloe" className="text-sm">Aloe Vera</Label>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox id="tea-tree" />
                      <Label htmlFor="tea-tree" className="text-sm">Tea Tree Oil</Label>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Label htmlFor="ingredients" className="text-sm font-medium mb-2 block">
                      Any other ingredients you'd like to add?
                    </Label>
                    <Input 
                      id="ingredients"
                      placeholder="e.g., Green Tea Extract, Rosehip Oil"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            )}
            
            {currentStep === 4 && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Pricing & Launch Details</h2>
                
                {/* Content for step 4 */}
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="price" className="text-sm font-medium mb-2 block">
                      Product Price (USD)
                    </Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                      <Input 
                        id="price"
                        type="number"
                        placeholder="19.99"
                        className="pl-8"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="launch-date" className="text-sm font-medium mb-2 block">
                      Estimated Launch Date
                    </Label>
                    <Input 
                      id="launch-date"
                      type="date"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="production-capacity" className="text-sm font-medium mb-2 block">
                      Initial Production Capacity (units)
                    </Label>
                    <Input 
                      id="production-capacity"
                      type="number"
                      placeholder="1000"
                      className="w-full"
                    />
                  </div>
                  
                  <div className="pt-4">
                    <h3 className="text-lg font-medium mb-2">Ready to Launch?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Our team will review your product details and get back to you within 
                      48 hours to discuss the next steps in bringing your facewash to market.
                    </p>
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                      Submit for Review
                    </Button>
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex justify-between mt-8">
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
                className={currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''}
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              
              {currentStep < steps.length ? (
                <Button 
                  type="button"
                  onClick={handleNext}
                >
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : null}
            </div>
          </div>
          
          <div className="mt-12 bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b">
                <AccordionTrigger className="py-4 text-left font-medium">
                  How long does the product launch process take?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm text-muted-foreground">
                  Typically, it takes 4-6 weeks from submission to market launch, including formula finalization, 
                  packaging design, and production setup.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-b">
                <AccordionTrigger className="py-4 text-left font-medium">
                  What support do you provide for new product launches?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm text-muted-foreground">
                  We offer comprehensive support including formulation guidance, packaging design assistance, 
                  regulatory compliance help, and marketing strategy consultation.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-b">
                <AccordionTrigger className="py-4 text-left font-medium">
                  Do I need to have my own manufacturing facility?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm text-muted-foreground">
                  No, we partner with certified manufacturing facilities that can produce your facewash according 
                  to your specifications and our quality standards.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border-b">
                <AccordionTrigger className="py-4 text-left font-medium">
                  Can I modify my formula after submission?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm text-muted-foreground">
                  Yes, but changes after the initial review may extend the timeline. Minor adjustments can be made 
                  during the formulation stage with minimal delay.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="py-4 text-left font-medium">
                  What are the minimum order quantities?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm text-muted-foreground">
                  Minimum order quantities typically start at 500 units for initial production runs, with reduced 
                  minimums for subsequent orders based on your sales performance.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
