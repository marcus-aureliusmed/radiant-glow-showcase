
import { Search, ShoppingBag } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { FaceAnalyzerButton } from "./FaceAnalyzer/FaceAnalyzerButton";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function Header({ searchQuery, setSearchQuery }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold">
            <span className="text-pink-500">Radiant</span>
            <span className="text-purple-500">Glow</span>
          </h1>
        </div>
        
        <div className="relative max-w-md w-full mx-4 hidden md:block">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-muted-foreground" />
          </div>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-2 pl-10 pr-4 rounded-full border border-border/50 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <FaceAnalyzerButton />
          <button className="relative p-2 group">
            <ShoppingBag 
              size={20} 
              className="transition-transform duration-300 group-hover:scale-110 group-hover:text-pink-500"
            />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-pink-500 text-white text-xs flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              0
            </span>
          </button>
        </div>
      </div>
      
      <div className="md:hidden container mx-auto px-4 pb-4">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-muted-foreground" />
          </div>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-2 pl-10 pr-4 rounded-full border border-border/50 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
      </div>
    </header>
  );
}
