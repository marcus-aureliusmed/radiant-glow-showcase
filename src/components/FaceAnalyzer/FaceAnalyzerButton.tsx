
import { Camera } from "lucide-react";
import { useState } from "react";
import { FaceAnalyzerModal } from "./FaceAnalyzerModal";

export function FaceAnalyzerButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="relative p-2 group"
        aria-label="Face analyzer"
      >
        <Camera 
          size={20} 
          className="transition-transform duration-300 group-hover:scale-110 group-hover:text-pink-500"
        />
        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
      </button>
      <FaceAnalyzerModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
