
import { Rocket } from "lucide-react";
import { Link } from "react-router-dom";

export function LaunchFacewashLink() {
  return (
    <Link
      to="/launch-facewash"
      className="block w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-lg mt-4 text-sm font-medium transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex items-center justify-center gap-2"
    >
      <Rocket size={16} className="animate-bounce" />
      Launch Facewash
    </Link>
  );
}
