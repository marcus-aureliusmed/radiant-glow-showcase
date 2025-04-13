
import { useState } from "react";
import { Rocket } from "lucide-react";
import { LaunchProductModal } from "./LaunchProductModal";

export function LaunchProductButton() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full mt-4 py-3 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
      >
        <Rocket size={16} className="animate-bounce" />
        Launch Your Own Facewash
      </button>
      <LaunchProductModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
