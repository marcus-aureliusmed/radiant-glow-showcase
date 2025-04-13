
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQ/FAQSection";
import { Button } from "@/components/ui/button";

const Help = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/30">
      <Header searchQuery="" setSearchQuery={() => {}} />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Help Center</h1>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions or reach out to our customer support team
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-background rounded-xl shadow-sm p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Getting Started</h2>
            <p className="text-muted-foreground mb-4">
              Learn the basics of using RadiantGlow products
            </p>
            <Button variant="outline" asChild>
              <Link to="/help/getting-started">View Guides</Link>
            </Button>
          </div>
          
          <div className="bg-background rounded-xl shadow-sm p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Shipping & Returns</h2>
            <p className="text-muted-foreground mb-4">
              Information about delivery and our return policy
            </p>
            <Button variant="outline" asChild>
              <Link to="/help/shipping-returns">Learn More</Link>
            </Button>
          </div>
          
          <div className="bg-background rounded-xl shadow-sm p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Account & Orders</h2>
            <p className="text-muted-foreground mb-4">
              Manage your account and track your orders
            </p>
            <Button variant="outline" asChild>
              <Link to="/help/account-orders">View Details</Link>
            </Button>
          </div>
        </div>
        
        <FAQSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Help;
