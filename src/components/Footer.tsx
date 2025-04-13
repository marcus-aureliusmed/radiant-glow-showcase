
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="bg-background border-t">
      {/* Main Footer */}
      <div className="container mx-auto pt-12 pb-6 px-4">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-semibold mb-6">
            <span className="text-pink-500">Radiant</span>
            <span className="text-purple-500">Glow</span>
          </Link>
          
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6">
            <Link to="/" className="text-sm text-foreground/80 hover:text-primary">Home</Link>
            <Link to="/customize-facewash" className="text-sm text-foreground/80 hover:text-primary">Launch Your Facewash</Link>
            <Link to="/help" className="text-sm text-foreground/80 hover:text-primary">Help Center</Link>
            <Link to="/login" className="text-sm text-foreground/80 hover:text-primary">Sign In</Link>
            <Link to="/signup" className="text-sm text-foreground/80 hover:text-primary">Sign Up</Link>
          </nav>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="container mx-auto px-4 py-4 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          © 2025 RadiantGlow. All rights reserved. | A craft of Beautiful Skin
        </p>
        
        {/* Back to top button */}
        <Button 
          onClick={scrollToTop}
          variant="ghost" 
          size="icon" 
          className="mt-4 sm:mt-0"
        >
          <ArrowUp size={20} />
        </Button>
      </div>
    </footer>
  );
}
