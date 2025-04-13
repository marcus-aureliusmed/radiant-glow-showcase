
import { useState } from "react";
import { Cloud, Upload, Check } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

export function UploadPrescription() {
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState(false);
  
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Check file type
    const fileType = file.type;
    if (
      fileType !== 'application/pdf' && 
      !fileType.startsWith('image/')
    ) {
      toast.error("Invalid file type", { description: "Please upload a PDF or image file" });
      return;
    }
    
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File too large", { description: "Maximum file size is 5MB" });
      return;
    }
    
    // Simulate upload
    setIsUploading(true);
    
    setTimeout(() => {
      setIsUploading(false);
      setIsUploaded(true);
      toast.success("Prescription uploaded successfully", {
        description: "We'll take your recommendation into account"
      });
      
      // Show personalized suggestion after a delay
      setTimeout(() => {
        setShowSuggestion(true);
      }, 1000);
    }, 1500);
  };
  
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <Cloud size={16} className="text-blue-500" />
        <h3 className="text-sm font-medium">Recommended by Experts?</h3>
      </div>
      
      <p className="text-xs text-muted-foreground mb-3">
        Upload your dermatologist's prescription for better product suggestions
      </p>
      
      <label className={`
        relative flex flex-col items-center justify-center gap-2 p-4 
        border-2 border-dashed rounded-lg cursor-pointer
        transition-all duration-300
        ${isUploaded 
          ? 'border-green-300 bg-green-50 dark:bg-green-900/10' 
          : isUploading 
            ? 'border-blue-300 bg-blue-50 dark:bg-blue-900/10' 
            : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/10'
        }
      `}>
        <input 
          type="file" 
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
          accept=".pdf,image/*"
          onChange={handleUpload}
          disabled={isUploading || isUploaded}
        />
        
        {isUploaded ? (
          <>
            <Check size={24} className="text-green-500" />
            <span className="text-sm text-green-700 dark:text-green-300 font-medium">Prescription Uploaded</span>
            <span className="text-xs text-muted-foreground">Thank you! We'll take your recommendation into account</span>
          </>
        ) : isUploading ? (
          <>
            <div className="w-6 h-6 border-2 border-t-blue-500 border-r-blue-500 border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            <span className="text-sm font-medium">Uploading...</span>
          </>
        ) : (
          <>
            <Upload size={24} className="text-blue-500" />
            <span className="text-sm font-medium">Upload Prescription</span>
            <span className="text-xs text-muted-foreground">PDF or Image (max 5MB)</span>
          </>
        )}
      </label>
      
      {/* Personalized Suggestion */}
      {showSuggestion && (
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 animate-fade-in">
          <h4 className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-2">Personalized Recommendation</h4>
          <p className="text-xs text-blue-700 dark:text-blue-400 mb-2">
            Based on your prescription, we recommend:
          </p>
          <div className="flex items-center gap-3 p-2 bg-white dark:bg-slate-800 rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="Recommended product" 
              className="w-12 h-12 rounded object-cover"
            />
            <div>
              <p className="text-sm font-medium">Gentle Soothing Facewash</p>
              <p className="text-xs text-muted-foreground">Perfect for your sensitive skin</p>
            </div>
          </div>
          <Link 
            to="/"
            className="block w-full text-center mt-3 text-xs py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            View Details
          </Link>
        </div>
      )}
    </div>
  );
}
