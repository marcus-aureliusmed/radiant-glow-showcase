
import { useState } from "react";
import { Rocket } from "lucide-react";
import { LaunchProductModal } from "./LaunchProductModal";

export function LaunchProductHeaderButton() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="relative p-2 group"
        aria-label="Launch your facewash"
      >
        <Rocket 
          size={20} 
          className="transition-transform duration-300 group-hover:scale-110 group-hover:text-pink-500"
        />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          +
        </span>
      </button>
      <LaunchProductModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
