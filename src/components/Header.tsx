
import { Search, ShoppingBag, User, LogIn, UserPlus, HelpCircle, ChevronDown, Beaker, Camera, Rocket } from "lucide-react";
import { useState } from "react";
import { FaceAnalyzerButton } from "./FaceAnalyzer/FaceAnalyzerButton";
import { Link } from "react-router-dom";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function Header({ searchQuery, setSearchQuery }: HeaderProps) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-2xl font-semibold">
            <span className="text-pink-500">Radiant</span>
            <span className="text-purple-500">Glow</span>
          </Link>
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
          {/* Face Analyzer Button with "Ask AI" label */}
          <div className="flex flex-col items-center">
            <FaceAnalyzerButton />
            <span className="text-xs text-muted-foreground mt-1">Ask AI</span>
          </div>
          
          {/* Shopping Cart */}
          <div className="flex flex-col items-center">
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
          
          {/* Profile Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-1 p-2 group"
            >
              <User size={20} className="transition-transform duration-300 group-hover:scale-110 group-hover:text-pink-500" />
              <ChevronDown size={16} className={`transition-transform duration-300 ${showProfileMenu ? 'rotate-180' : ''}`} />
            </button>
            
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg py-1 z-50 animate-fade-in">
                <Link to="/signup" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition-colors">
                  <UserPlus size={16} />
                  <span>Sign Up</span>
                </Link>
                <Link to="/login" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition-colors">
                  <LogIn size={16} />
                  <span>Log In</span>
                </Link>
                <Link to="/customize-facewash" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition-colors">
                  <Beaker size={16} />
                  <span>Customize Facewash</span>
                </Link>
                <Link to="/launch-facewash" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition-colors">
                  <Rocket size={16} />
                  <span>Launch Your Facewash</span>
                </Link>
                <Link to="/help" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition-colors">
                  <HelpCircle size={16} />
                  <span>Help Center</span>
                </Link>
              </div>
            )}
          </div>
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
