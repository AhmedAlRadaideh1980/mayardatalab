import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import drAhmedPhoto from "@/assets/dr-ahmed.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Ahmed Al-Radaideh",
      role: "Founder & Principal Data Scientist",
      description: "PhD Applied Statistics, 15 years leading analytics teams in healthcare & retail",
      image: drAhmedPhoto,
      linkedin: "https://www.linkedin.com/in/ahmedalradaideh/"
    },
    {
      name: "Dr. Bilal Ahmed",
      role: "Data Scientist",
      description: "International Islamic University, Doctor of Philosophy (Ph.D.), Computational and Applied Mathematics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      linkedin: "https://www.linkedin.com/in/bilal-ahmed-42b18453/"
    },
    {
      name: "Dr. Safwat AlTal",
      role: "Research Consultant",
      description: "PhD Electronic Business, University of Salento, Italy",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      linkedin: "https://www.linkedin.com/in/safwat-al-tal-9a49b3b9/"
    }
  ];

  return (
    <section id="team" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the People Behind the Models</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team of experienced data scientists and statisticians
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <Card key={member.name} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-primary/10">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                  >
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Linkedin size={16} />
                      LinkedIn Profile
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
