
import { Flask } from "lucide-react";
import { Link } from "react-router-dom";

export function CustomFacewashLink() {
  return (
    <Link
      to="/customize-facewash"
      className="block w-full py-3 px-4 bg-radiant-lavender/30 hover:bg-radiant-lavender/50 text-purple-700 dark:text-purple-300 rounded-lg mt-4 text-sm font-medium transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex items-center justify-center gap-2"
    >
      <Flask size={16} className="animate-pulse-soft" />
      Customize Your Facewash
    </Link>
  );
}
