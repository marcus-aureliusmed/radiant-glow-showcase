
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Product, FilterState, SortOption } from "@/types/product";
import { products, allSkinTypes, allBrands, allIngredients, priceRange } from "@/data/products";

import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { ProductsGrid } from "@/components/ProductsGrid";
import { SortBar } from "@/components/SortBar";
import { ProductModal } from "@/components/ProductModal";
import { Footer } from "@/components/Footer";

const Index = () => {
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  
  // Filter state
  const [filters, setFilters] = useState<FilterState>({
    skinType: [],
    brand: [],
    ingredients: [],
    priceRange: priceRange,
    searchQuery: ""
  });
  
  // Sort state
  const [sortOption, setSortOption] = useState<SortOption>("popularity");
  
  // Handle search query
  const handleSearchQuery = (query: string) => {
    setFilters({ ...filters, searchQuery: query });
  };
  
  // Reset all filters to default
  const resetFilters = () => {
    setFilters({
      skinType: [],
      brand: [],
      ingredients: [],
      priceRange: priceRange,
      searchQuery: filters.searchQuery // Preserve search
    });
  };
  
  // Open product details
  const openProductDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };
  
  // Close product details
  const closeProductDetails = () => {
    setIsProductModalOpen(false);
  };
  
  // Filter and sort products when filters or sort option changes
  useEffect(() => {
    let result = [...products];
    
    // Apply filters
    if (filters.skinType.length > 0) {
      result = result.filter(product => 
        product.skinType.some(type => filters.skinType.includes(type))
      );
    }
    
    if (filters.brand.length > 0) {
      result = result.filter(product => 
        filters.brand.includes(product.brand)
      );
    }
    
    if (filters.ingredients.length > 0) {
      result = result.filter(product => 
        product.ingredients.some(ingredient => filters.ingredients.includes(ingredient))
      );
    }
    
    // Apply price range
    result = result.filter(product => 
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );
    
    // Apply search
    if (filters.searchQuery.trim()) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.brand.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      );
    }
    
    // Apply sorting
    switch (sortOption) {
      case "price-low-high":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        result.sort((a, b) => b.price - a.price);
        break;
      case "popularity":
        result.sort((a, b) => b.popularity - a.popularity);
        break;
      case "new-arrivals":
        result.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
        break;
      default:
        break;
    }
    
    setFilteredProducts(result);
  }, [filters, sortOption]);
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/30">
      <Header 
        searchQuery={filters.searchQuery} 
        setSearchQuery={handleSearchQuery} 
      />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <section className="mb-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Discover Your Perfect Face Wash
            </h1>
            <p className="text-muted-foreground">
              Find the ideal cleanser for your skin type with our curated collection of premium face wash products.
            </p>
          </div>
        </section>
        
        <div className="flex flex-1">
          <Sidebar 
            filters={filters}
            setFilters={setFilters}
            resetFilters={resetFilters}
            isMobile={isMobile}
            isOpen={isSidebarOpen}
            setIsOpen={setIsSidebarOpen}
          />
          
          <div className="flex-1 md:pl-6">
            <SortBar 
              sortOption={sortOption} 
              setSortOption={setSortOption}
              totalProducts={filteredProducts.length}
            />
            
            <ProductsGrid 
              products={filteredProducts} 
              openProductDetails={openProductDetails}
            />
          </div>
        </div>
      </main>
      
      <Footer />
      
      <ProductModal 
        product={selectedProduct} 
        isOpen={isProductModalOpen}
        onClose={closeProductDetails}
      />
    </div>
  );
};

export default Index;
