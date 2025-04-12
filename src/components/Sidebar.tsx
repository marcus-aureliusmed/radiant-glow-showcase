
import { useState } from "react";
import { SkinType, Brand, Ingredient, FilterState } from "@/types/product";
import { allSkinTypes, allBrands, allIngredients, priceRange } from "@/data/products";
import { Check, ChevronDown, ChevronUp, Filter, X } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface SidebarProps {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  resetFilters: () => void;
  isMobile: boolean;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function Sidebar({ 
  filters, 
  setFilters, 
  resetFilters, 
  isMobile,
  isOpen,
  setIsOpen 
}: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    skinType: true,
    brand: true,
    price: true,
    ingredients: true
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  const toggleSkinType = (skinType: SkinType) => {
    const updatedSkinTypes = filters.skinType.includes(skinType)
      ? filters.skinType.filter(type => type !== skinType)
      : [...filters.skinType, skinType];
    
    setFilters({
      ...filters,
      skinType: updatedSkinTypes
    });
  };

  const toggleBrand = (brand: Brand) => {
    const updatedBrands = filters.brand.includes(brand)
      ? filters.brand.filter(b => b !== brand)
      : [...filters.brand, brand];
    
    setFilters({
      ...filters,
      brand: updatedBrands
    });
  };

  const toggleIngredient = (ingredient: Ingredient) => {
    const updatedIngredients = filters.ingredients.includes(ingredient)
      ? filters.ingredients.filter(ing => ing !== ingredient)
      : [...filters.ingredients, ingredient];
    
    setFilters({
      ...filters,
      ingredients: updatedIngredients
    });
  };

  const handlePriceChange = (value: number[]) => {
    setFilters({
      ...filters,
      priceRange: [value[0], value[1]]
    });
  };

  const getActivePriceRange = () => {
    if (
      filters.priceRange[0] === priceRange[0] && 
      filters.priceRange[1] === priceRange[1]
    ) {
      return 'All prices';
    }
    return `₹${filters.priceRange[0]} - ₹${filters.priceRange[1]}`;
  };

  const hasActiveFilters = () => {
    return (
      filters.skinType.length > 0 ||
      filters.brand.length > 0 ||
      filters.ingredients.length > 0 ||
      filters.priceRange[0] !== priceRange[0] ||
      filters.priceRange[1] !== priceRange[1]
    );
  };

  const sidebarContent = (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium">Filters</h2>
        {isMobile && (
          <button 
            onClick={() => setIsOpen(false)} 
            className="p-1 rounded-full hover:bg-muted"
          >
            <X size={18} />
          </button>
        )}
      </div>
      
      {hasActiveFilters() && (
        <button
          onClick={resetFilters}
          className="w-full py-2 px-4 bg-muted hover:bg-muted/80 rounded-md text-sm font-medium transition-colors"
        >
          Reset all filters
        </button>
      )}

      {/* Skin Type */}
      <div className="border-t border-border/50 pt-4">
        <button 
          onClick={() => toggleSection('skinType')}
          className="flex justify-between items-center w-full text-left font-medium mb-2"
        >
          <span>Skin Type</span>
          {expandedSections.skinType ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        
        {expandedSections.skinType && (
          <div className="space-y-2 mt-2 pl-1 animate-fade-in">
            {allSkinTypes.map(skinType => (
              <label key={skinType} className="filter-checkbox">
                <div className="flex h-4 w-4 items-center justify-center rounded border border-primary/20 mr-2">
                  {filters.skinType.includes(skinType) && <Check size={12} />}
                </div>
                <input
                  type="checkbox"
                  className="hidden"
                  checked={filters.skinType.includes(skinType)}
                  onChange={() => toggleSkinType(skinType)}
                />
                <span className="text-sm">{skinType}</span>
                <span className="ml-auto text-xs text-muted-foreground">
                  {/* Count could be derived from products if needed */}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Brand */}
      <div className="border-t border-border/50 pt-4">
        <button 
          onClick={() => toggleSection('brand')}
          className="flex justify-between items-center w-full text-left font-medium mb-2"
        >
          <span>Brand</span>
          {expandedSections.brand ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        
        {expandedSections.brand && (
          <div className="space-y-2 mt-2 pl-1 animate-fade-in">
            {allBrands.map(brand => (
              <label key={brand} className="filter-checkbox">
                <div className="flex h-4 w-4 items-center justify-center rounded border border-primary/20 mr-2">
                  {filters.brand.includes(brand) && <Check size={12} />}
                </div>
                <input
                  type="checkbox"
                  className="hidden"
                  checked={filters.brand.includes(brand)}
                  onChange={() => toggleBrand(brand)}
                />
                <span className="text-sm">{brand}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div className="border-t border-border/50 pt-4">
        <button 
          onClick={() => toggleSection('price')}
          className="flex justify-between items-center w-full text-left font-medium mb-2"
        >
          <span>Price Range</span>
          {expandedSections.price ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        
        {expandedSections.price && (
          <div className="mt-4 px-2 animate-fade-in">
            <div className="mb-2 flex justify-between text-sm">
              <span>₹{filters.priceRange[0]}</span>
              <span>₹{filters.priceRange[1]}</span>
            </div>
            <Slider
              defaultValue={[priceRange[0], priceRange[1]]}
              value={[filters.priceRange[0], filters.priceRange[1]]}
              min={priceRange[0]}
              max={priceRange[1]}
              step={50}
              onValueChange={handlePriceChange}
              className="my-4"
            />
            <div className="text-sm text-center text-muted-foreground">
              {getActivePriceRange()}
            </div>
          </div>
        )}
      </div>

      {/* Ingredients */}
      <div className="border-t border-border/50 pt-4">
        <button 
          onClick={() => toggleSection('ingredients')}
          className="flex justify-between items-center w-full text-left font-medium mb-2"
        >
          <span>Ingredients</span>
          {expandedSections.ingredients ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        
        {expandedSections.ingredients && (
          <div className="space-y-2 mt-2 pl-1 animate-fade-in">
            {allIngredients.map(ingredient => (
              <label key={ingredient} className="filter-checkbox">
                <div className="flex h-4 w-4 items-center justify-center rounded border border-primary/20 mr-2">
                  {filters.ingredients.includes(ingredient) && <Check size={12} />}
                </div>
                <input
                  type="checkbox"
                  className="hidden"
                  checked={filters.ingredients.includes(ingredient)}
                  onChange={() => toggleIngredient(ingredient)}
                />
                <span className="text-sm">{ingredient}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {!isMobile && (
        <aside className="w-64 hidden md:block sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto p-4">
          {sidebarContent}
        </aside>
      )}

      {isMobile && (
        <>
          <button
            onClick={() => setIsOpen(true)}
            className="fixed bottom-4 left-4 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg"
            aria-label="Open filters"
          >
            <Filter size={20} />
          </button>

          {isOpen && (
            <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
              <div className="fixed bottom-0 left-0 right-0 h-[80vh] bg-background border-t border-border/50 rounded-t-xl p-4 shadow-lg overflow-y-auto animate-fade-up">
                {sidebarContent}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
