import { CheckCircle2 } from "lucide-react";

const About = () => {
  const highlights = [
    "Data-science & AI solutions built for your industry",
    "Advanced statistical analysis you can defend in peer review",
    "Bespoke research support—surveys, experiments, simulations"
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mayar Data Lab is a research-driven studio that converts raw numbers into clear stories. 
              From cleaning messy spreadsheets to deploying production-grade machine-learning pipelines, 
              we give you the evidence you need to act with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-background rounded-lg border border-border/50">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
