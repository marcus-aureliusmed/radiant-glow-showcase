
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowUp, Mail, Phone, MessageSquare, Rocket } from "lucide-react";

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="text-2xl font-semibold inline-block mb-4">
              <span className="text-pink-500">Radiant</span>
              <span className="text-purple-500">Glow</span>
            </Link>
            <p className="text-muted-foreground mb-4 text-sm">
              Discover premium skincare products that are customized for your unique skin needs. 
              Our dermatologist-approved formulas are designed to give you the radiant, 
              healthy skin you deserve.
            </p>
            <div className="flex gap-3">
              <a href="#" className="h-10 w-10 bg-muted/50 rounded-full flex items-center justify-center hover:bg-pink-100 hover:text-pink-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="h-10 w-10 bg-muted/50 rounded-full flex items-center justify-center hover:bg-pink-100 hover:text-pink-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="h-10 w-10 bg-muted/50 rounded-full flex items-center justify-center hover:bg-pink-100 hover:text-pink-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="md:ml-auto">
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/customize-facewash" className="text-muted-foreground hover:text-primary transition-colors">Customize Facewash</Link>
              <Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">Help Center</Link>
              <Link to="/launch-facewash" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <Rocket size={16} />
                Launch Your Facewash
              </Link>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Shipping Policy</a>
            </nav>
          </div>
          
          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 bg-muted/50 rounded-full flex items-center justify-center text-pink-500">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email us at</p>
                  <p className="font-medium">support@radiantglow.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 bg-muted/50 rounded-full flex items-center justify-center text-pink-500">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call us at</p>
                  <p className="font-medium">+91 9876543210</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 bg-muted/50 rounded-full flex items-center justify-center text-pink-500">
                  <MessageSquare size={16} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Live chat</p>
                  <p className="font-medium">Chat with us online</p>
                </div>
              </div>
            </div>
          </div>
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
