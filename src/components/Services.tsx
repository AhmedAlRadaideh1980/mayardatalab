import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Monitor, BookOpen, Building } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Statistical Consulting & Analysis",
      description: "Comprehensive statistical solutions for research excellence",
      features: [
        "Hypothesis testing, regression models, ANOVA, multivariate analysis",
        "Survey design, sampling techniques, and experimental design",
        "Predictive modeling and machine learning applications"
      ]
    },
    {
      icon: Monitor,
      title: "Data Visualization & Dashboards",
      description: "Transform complex data into compelling visual stories",
      features: [
        "Interactive dashboards (Power BI, Tableau, Python Dash, R Shiny)",
        "Custom KPI monitoring for institutions",
        "Visual storytelling for publications, reports, and presentations"
      ]
    },
    {
      icon: BookOpen,
      title: "Research Support for Academics",
      description: "Expert guidance for academic research and publications",
      features: [
        "Data cleaning, preprocessing, and transformation",
        "Support with Scopus/WoS-indexed publication requirements",
        "Guidance on statistical methodology for theses and dissertations"
      ]
    },
    {
      icon: Building,
      title: "Institutional Analytics",
      description: "Strategic insights for institutional decision-making",
      features: [
        "Student performance tracking and learning analytics",
        "Institutional research and accreditation support",
        "Strategic planning dashboards for decision makers"
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
            <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-accent p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;