
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FAQSection() {
  const faqs = [
    {
      question: "How do I determine my skin type?",
      answer: "You can determine your skin type by observing how your skin behaves throughout the day. Dry skin feels tight, normal skin is balanced, oily skin appears shiny, and combination skin is oily in some areas and dry in others. For a more accurate assessment, consult with a dermatologist or use our Face Analyzer tool."
    },
    {
      question: "How often should I use a face wash?",
      answer: "Most dermatologists recommend washing your face twice daily – once in the morning and once before bed. However, if you have particularly dry skin, you might benefit from washing just once a day in the evening. Those with oily skin might need to cleanse more frequently."
    },
    {
      question: "Can I use the same face wash year-round?",
      answer: "Your skin's needs may change with the seasons. Many people find they need a more hydrating cleanser in winter and a more clarifying one in summer. Pay attention to how your skin feels after cleansing and adjust accordingly."
    },
    {
      question: "Are natural ingredients better for my skin?",
      answer: "Natural doesn't always mean better or safer. The effectiveness of ingredients, whether natural or synthetic, depends on their formulation, your skin type, and specific concerns. Our products combine the best of natural and scientifically-proven ingredients for optimal results."
    },
    {
      question: "How long should I wait to see results from a new face wash?",
      answer: "It typically takes about 4-6 weeks to see significant results from a new skincare product. This is the average time for your skin cell turnover cycle. If you experience irritation, however, discontinue use immediately."
    },
    {
      question: "Can I return a product if it doesn't work for me?",
      answer: "Yes, we offer a 30-day satisfaction guarantee. If you're not happy with your purchase, you can return it for a full refund within 30 days of purchase. Please keep the original packaging and receipt."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. Shipping times and costs vary depending on location. You can see the specific details during checkout before finalizing your purchase."
    },
    {
      question: "Are your products tested on animals?",
      answer: "No, all of our products are cruelty-free. We do not test on animals at any stage of product development or production, and we do not sell in markets that require animal testing."
    }
  ];
  
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-1 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 text-center">Still have questions?</h3>
            <p className="text-center text-muted-foreground mb-6">
              Our customer support team is here to help you with any questions you may have
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-muted/40 p-6 rounded-lg text-center">
                <div className="mb-4 flex justify-center">
                  <Mail className="h-8 w-8 text-blue-500" />
                </div>
                <h4 className="font-medium mb-2">Email Us</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Get a response within 24 hours
                </p>
                <Button variant="outline" className="w-full">
                  support@radiantglow.com
                </Button>
              </div>
              
              <div className="bg-muted/40 p-6 rounded-lg text-center">
                <div className="mb-4 flex justify-center">
                  <Phone className="h-8 w-8 text-green-500" />
                </div>
                <h4 className="font-medium mb-2">Call Us</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Mon-Fri, 9am-5pm IST
                </p>
                <Button variant="outline" className="w-full">
                  +91 123 456 7890
                </Button>
              </div>
              
              <div className="bg-muted/40 p-6 rounded-lg text-center">
                <div className="mb-4 flex justify-center">
                  <MessageSquare className="h-8 w-8 text-purple-500" />
                </div>
                <h4 className="font-medium mb-2">Live Chat</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Available 24/7 for urgent issues
                </p>
                <Button className="w-full">
                  Start Chat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
