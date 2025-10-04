import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Examples = () => {
  const examples = [
    {
      title: "Forecasting Retail Demand",
      description: "Built an XGBoost model that cut over-stock by 28% and increased on-shelf availability for a 50-store grocery chain.",
      category: "Retail Analytics",
      tags: ["Machine Learning", "Forecasting", "Retail"],
      impact: "28% reduction in over-stock",
      link: "Read full case study"
    },
    {
      title: "Environmental Sustainability Analytics",
      description: "Combined satellite imagery + sensor data to identify irrigation inefficiencies, saving 1.2M gallons of water per season.",
      category: "Environmental",
      tags: ["Sustainability", "IoT", "Resource Management"],
      impact: "1.2M gallons saved per season",
      link: "Read full case study"
    },
    {
      title: "AI Text Classification for Academia",
      description: "Fine-tuned BERT to auto-tag 50k research abstracts, reducing manual coding time by 92%.",
      category: "Academic AI",
      tags: ["NLP", "Machine Learning", "Automation"],
      impact: "92% time reduction",
      link: "Read full case study"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Retail Analytics": "bg-primary/10 text-primary border-primary/20",
      "Environmental": "bg-data-secondary/10 text-data-secondary border-data-secondary/20",
      "Academic AI": "bg-accent/10 text-accent border-accent/20"
    };
    return colors[category] || "bg-muted text-muted-foreground border-border";
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Work in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world case studies demonstrating our expertise in statistical analysis, 
            machine learning, and data visualization
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {examples.map((example, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-data transition-all duration-300 border-border/50 group"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge className={getCategoryColor(example.category)}>
                    {example.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {example.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {example.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {example.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="p-3 bg-accent/10 rounded-md">
                    <p className="text-sm font-medium text-accent">Impact:</p>
                    <p className="text-xs text-muted-foreground mt-1">{example.impact}</p>
                  </div>
                  <a 
                    href="#contact" 
                    className="text-sm text-primary hover:underline flex items-center gap-1"
                  >
                    {example.link} →
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Examples;