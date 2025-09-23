import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Examples = () => {
  const examples = [
    {
      title: "Research Dashboard",
      description: "Interactive dashboard for a university research center to track publications, citations, and collaborations across departments.",
      category: "Academic Analytics",
      tags: ["Dashboard", "Publications", "Citations", "Collaboration"],
      impact: "40% increase in cross-department research visibility"
    },
    {
      title: "Health Data Analysis",
      description: "Statistical modeling of patient data to identify predictors of treatment outcomes.",
      category: "Healthcare",
      tags: ["Predictive Modeling", "Clinical Data", "Outcomes Research"],
      impact: "Identified 5 key predictors improving treatment success by 25%"
    },
    {
      title: "Environmental Studies",
      description: "Predictive analysis of water resource availability under climate change scenarios.",
      category: "Environmental",
      tags: ["Climate Modeling", "Resource Management", "Forecasting"],
      impact: "Informed policy decisions for 3 major watersheds"
    },
    {
      title: "Education Analytics",
      description: "Dashboard showing student retention, success rates, and course performance trends for accreditation purposes.",
      category: "Education",
      tags: ["Student Success", "Retention", "Accreditation"],
      impact: "Achieved full accreditation with 95% data compliance"
    },
    {
      title: "Survey Analysis",
      description: "Advanced analysis of national survey data, including weighting, sampling error estimation, and policy implications.",
      category: "Policy Research",
      tags: ["Survey Design", "Policy Analysis", "National Data"],
      impact: "Findings cited in 12 policy recommendations"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Academic Analytics": "bg-data-primary/10 text-data-primary border-data-primary/20",
      "Healthcare": "bg-destructive/10 text-destructive border-destructive/20",
      "Environmental": "bg-data-secondary/10 text-data-secondary border-data-secondary/20",
      "Education": "bg-primary/10 text-primary border-primary/20",
      "Policy Research": "bg-accent/10 text-accent border-accent/20"
    };
    return colors[category] || "bg-muted text-muted-foreground border-border";
  };

  const handleExampleClick = (example: typeof examples[0]) => {
    // For now, just log the example - could be extended to show modal, navigate, etc.
    console.log("Viewing example:", example.title);
  };

  return (
    <section id="examples" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Examples of Our Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications demonstrating our expertise in statistical analysis, 
            data visualization, and research support across various domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((example, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-data transition-all duration-300 border-border/50 group cursor-pointer"
              onClick={() => handleExampleClick(example)}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge className={getCategoryColor(example.category)}>
                    {example.category}
                  </Badge>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
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