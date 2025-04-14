
import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQ/FAQSection";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Help = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/30">
      <Header searchQuery="" setSearchQuery={() => {}} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-pink-500 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">How can we help you?</h1>
            <p className="text-white mb-6">
              Find answers to common questions, browse help topics, or contact our support team.
            </p>
            
            <div className="max-w-md mx-auto relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search size={18} className="text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 pl-10 pr-4 rounded-md border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
              />
            </div>
          </div>
        </div>
        
        {/* Topic Navigation */}
        <div className="border-b">
          <div className="container mx-auto px-4">
            <div className="flex overflow-x-auto whitespace-nowrap py-4 gap-6">
              <Link to="/help" className="font-medium text-pink-500 border-b-2 border-pink-500 pb-1">All Topics</Link>
              <Link to="/help/account" className="font-medium text-gray-600 hover:text-pink-500">Account</Link>
              <Link to="/help/products" className="font-medium text-gray-600 hover:text-pink-500">Products & Ingredients</Link>
              <Link to="/help/shipping" className="font-medium text-gray-600 hover:text-pink-500">Shipping & Returns</Link>
              <Link to="/help/safety" className="font-medium text-gray-600 hover:text-pink-500">Safety & Policies</Link>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <FAQSection />
          
          {/* Still Need Help Section */}
          <div className="mt-16 mb-8 max-w-4xl mx-auto">
            <div className="border rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4 text-center">Still need help?</h3>
              <p className="text-center text-muted-foreground mb-8">
                Our support team is available to assist you. Reach out through any of the channels below.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <h4 className="font-medium mb-2">Email Support</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Send us an email and we'll respond within 24 hours.
                  </p>
                  <a href="mailto:support@radiantglow.com" className="text-pink-500 font-medium">
                    support@radiantglow.com
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500"><path d="m18 16-4-3.2a1 1 0 0 0-1.6.8V20H4a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8Z"/><path d="M22 12v0a10 10 0 0 1-5 8.5"/></svg>
                  </div>
                  <h4 className="font-medium mb-2">Live Chat</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Chat with our support team for immediate assistance.
                  </p>
                  <Button className="bg-pink-500 hover:bg-pink-600" size="sm">
                    Start a chat
                  </Button>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <h4 className="font-medium mb-2">Phone Support</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Call us for urgent issues or direct assistance.
                  </p>
                  <a href="tel:+919876543210" className="text-pink-500 font-medium">
                    +91 987 654 3210
                  </a>
                </div>
              </div>
              
              <div className="mt-8 text-center text-sm text-muted-foreground">
                <p>Support is available Monday to Friday, 9am to 5pm (IST)</p>
                <p>For emergencies, our 24/7 line is always available at +91 800 123 4567</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Help;
