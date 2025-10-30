import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Monitor, BookOpen, Building, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Statistical Analysis",
      description: "Rigorous statistical methods for research and decision-making",
      fullDescription: "Our statistical analysis services provide comprehensive support for data-driven decision making, from study design to final reporting. We employ both classical and modern statistical approaches to ensure your research meets the highest standards.",
      features: [
        "Hypothesis Testing & Power Analysis",
        "Experimental Design (RCT, Factorial, Block)",
        "Regression Analysis (Linear, Logistic, Mixed Models)",
        "Bayesian Inference & MCMC Methods",
        "Survey Design & Weighting",
        "Time Series & Forecasting"
      ],
      applications: ["Clinical Trials", "Market Research", "Policy Evaluation", "Academic Research"]
    },
    {
      icon: Building,
      title: "Machine Learning & AI",
      description: "AI-powered solutions for predictive insights",
      fullDescription: "Transform your data into intelligent systems that learn, adapt, and predict. Our ML solutions range from classical algorithms to cutting-edge deep learning, tailored to your specific business needs and deployed at scale.",
      features: [
        "Predictive Modelling & Classification",
        "Natural Language Processing (NLP)",
        "Computer Vision & Image Recognition",
        "Clustering & Segmentation",
        "Recommender Systems",
        "MLOps & Model Deployment"
      ],
      applications: ["Customer Analytics", "Fraud Detection", "Text Analysis", "Image Processing"]
    },
    {
      icon: Monitor,
      title: "Data Visualization & Dashboards",
      description: "Transform data into compelling visual stories",
      fullDescription: "We create interactive dashboards and publication-ready visualizations that turn complex data into clear insights. Our designs follow best practices in data storytelling, ensuring your audience understands and acts on your findings.",
      features: [
        "Interactive Power BI / Tableau Dashboards",
        "Publication-Ready Plots (ggplot2, matplotlib)",
        "Real-Time Monitoring Dashboards",
        "Custom D3.js Visualizations",
        "Infographic Design",
        "Data Storytelling Workshops"
      ],
      applications: ["Executive Dashboards", "Research Papers", "Public Reports", "KPI Monitoring"]
    },
    {
      icon: BookOpen,
      title: "Research Support",
      description: "Comprehensive support for academic and research projects",
      fullDescription: "From grant applications to journal submissions, we provide statistical expertise throughout your research journey. Our team has extensive experience supporting academic researchers, ensuring your methodology is sound and your results are reproducible.",
      features: [
        "Grant Application Statistics Sections",
        "Journal-Ready Methodology Writing",
        "Reproducible Code (R Markdown, Jupyter)",
        "Statistical Review & Consultation",
        "PhD Coaching & Mentoring",
        "Data Management Plans"
      ],
      applications: ["Grant Proposals", "Dissertation Support", "Journal Submissions", "Research Ethics"]
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
            <Card key={index} className="bg-card border-border hover:border-accent/50 shadow-card hover:shadow-elegant transition-all duration-300 group overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-accent p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <service.icon className="h-8 w-8 text-white" aria-label={`Icon for ${service.title}`} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-foreground mb-2 group-hover:text-accent transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-base">
                      {service.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-foreground/80 leading-relaxed">
                  {service.fullDescription}
                </p>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <span className="w-1 h-4 bg-gradient-accent rounded-full mr-2"></span>
                    Key Services
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-foreground/80">
                        <span className="text-accent mr-2 mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <span className="w-1 h-4 bg-gradient-accent rounded-full mr-2"></span>
                    Applications
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.applications.map((app, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium border border-border"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="default" 
                  className="w-full group/btn bg-gradient-accent hover:opacity-90 transition-opacity"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
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