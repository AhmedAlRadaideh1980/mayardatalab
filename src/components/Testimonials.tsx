import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Mayar Data Lab delivered a publication-grade survival analysis in under four weeks. The reviewers had zero statistical questions.",
      author: "Dr. Lina H.",
      organization: "Jordan University Hospital"
    },
    {
      quote: "Professional, nimble and able to explain neural networks to my board.",
      author: "K. Singh",
      organization: "CEO, GreenBasket Jo"
    }
  ];

  const logos = ["Jordan University", "GreenBasket", "USAID Jordan", "MENA Climate Lab"];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted By</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-border/50 shadow-card">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-foreground mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.organization}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <div key={index} className="text-muted-foreground font-medium text-lg">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
