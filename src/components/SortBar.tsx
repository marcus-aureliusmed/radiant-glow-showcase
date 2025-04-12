
import { SortOption } from "@/types/product";
import { ArrowDownNarrowWide, ArrowUpNarrowWide, Star, Clock } from "lucide-react";

interface SortBarProps {
  sortOption: SortOption;
  setSortOption: (option: SortOption) => void;
  totalProducts: number;
}

export function SortBar({ sortOption, setSortOption, totalProducts }: SortBarProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
      <p className="text-sm text-muted-foreground">
        Showing <span className="font-medium text-foreground">{totalProducts}</span> products
      </p>
      
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSortOption("price-low-high")}
          className={`text-xs flex items-center gap-1 px-3 py-1.5 rounded-full border ${
            sortOption === "price-low-high"
              ? "bg-primary text-primary-foreground"
              : "border-border/50 hover:bg-muted/50"
          }`}
        >
          <ArrowUpNarrowWide size={14} />
          <span>Price: Low to High</span>
        </button>
        
        <button
          onClick={() => setSortOption("price-high-low")}
          className={`text-xs flex items-center gap-1 px-3 py-1.5 rounded-full border ${
            sortOption === "price-high-low"
              ? "bg-primary text-primary-foreground"
              : "border-border/50 hover:bg-muted/50"
          }`}
        >
          <ArrowDownNarrowWide size={14} />
          <span>Price: High to Low</span>
        </button>
        
        <button
          onClick={() => setSortOption("popularity")}
          className={`text-xs flex items-center gap-1 px-3 py-1.5 rounded-full border ${
            sortOption === "popularity"
              ? "bg-primary text-primary-foreground"
              : "border-border/50 hover:bg-muted/50"
          }`}
        >
          <Star size={14} />
          <span>Popularity</span>
        </button>
        
        <button
          onClick={() => setSortOption("new-arrivals")}
          className={`text-xs flex items-center gap-1 px-3 py-1.5 rounded-full border ${
            sortOption === "new-arrivals"
              ? "bg-primary text-primary-foreground"
              : "border-border/50 hover:bg-muted/50"
          }`}
        >
          <Clock size={14} />
          <span>New Arrivals</span>
        </button>
      </div>
    </div>
  );
}
