import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "Top 5 Open-Source Tools for Interactive Dashboards",
      readTime: "3-min read",
      excerpt: "Discover the best free tools for creating stunning interactive dashboards"
    },
    {
      title: "How to Spot Over-fitting Before Your Boss Does",
      readTime: "5-min read",
      excerpt: "Learn to identify and prevent over-fitting in your machine learning models"
    },
    {
      title: "From Excel to Python: A Transition Guide for Non-Coders",
      readTime: "7-min read",
      excerpt: "Step-by-step guide to moving from spreadsheets to programming"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fresh From the Notebook</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, tips, and guides from our data science team
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {posts.map((post, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-border/50 group cursor-pointer">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">{post.readTime}</Badge>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="#blog" 
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            Browse all articles <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
