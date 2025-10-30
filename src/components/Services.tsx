import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Monitor, BookOpen, Building, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Statistical Analysis",
      description: "Rigorous statistical methods for research and decision-making",
      features: [
        "Hypothesis testing, experimental design, regression, Bayesian inference, survey weighting"
      ]
    },
    {
      icon: Building,
      title: "Machine Learning & AI",
      description: "AI-powered solutions for predictive insights",
      features: [
        "Predictive modelling, NLP, computer vision, clustering, recommender systems, MLOps"
      ]
    },
    {
      icon: Monitor,
      title: "Data Visualization & Dashboards",
      description: "Transform data into compelling visual stories",
      features: [
        "Interactive Power BI / Tableau dashboards, publication-ready plots, data-storytelling workshops"
      ]
    },
    {
      icon: BookOpen,
      title: "Research Support",
      description: "Comprehensive support for academic and research projects",
      features: [
        "Grant-writing statistics, journal-ready methodology, reproducible code in R & Python, PhD coaching"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-data-neutral">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive statistical consulting and data science solutions 
            designed to support research excellence and institutional growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-accent/50 shadow-card hover:shadow-elegant transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-accent p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-white" aria-label={`Icon for ${service.title}`} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-foreground mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-foreground/80">{service.features[0]}</p>
                <Button 
                  variant="outline" 
                  className="w-full group/btn hover:bg-accent hover:text-accent-foreground"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;