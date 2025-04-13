
import { useState } from "react";
import { Cloud, Upload, Check } from "lucide-react";
import { toast } from "sonner";

export function UploadPrescription() {
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  
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
    </div>
  );
}
