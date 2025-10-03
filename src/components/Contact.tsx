import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Users, Award, Clock, Upload } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    institution: "",
    message: ""
  });
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const validTypes = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
      if (validTypes.includes(selectedFile.type) || selectedFile.name.endsWith('.xlsx') || selectedFile.name.endsWith('.xls')) {
        setFile(selectedFile);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload an Excel file (.xlsx or .xls)",
          variant: "destructive"
        });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Convert file to base64 if exists
      let fileData = null;
      if (file) {
        const reader = new FileReader();
        fileData = await new Promise((resolve, reject) => {
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      }

      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          ...formData,
          fileName: file?.name,
          fileData: fileData
        }
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your message has been sent successfully."
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        institution: "",
        message: ""
      });
      setFile(null);
      const fileInput = document.getElementById('file-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const stats = [
    { icon: Users, number: "500+", label: "Projects Completed" },
    { icon: Award, number: "50+", label: "Publications Supported" },
    { icon: Clock, number: "10+", label: "Years Experience" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Data?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how our statistical expertise can support your research goals 
            and institutional objectives
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-background/50 backdrop-blur-sm border-border/50">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-accent p-3 rounded-full">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-elegant border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Get Started Today</CardTitle>
              <CardDescription>
                Tell us about your project and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input 
                    name="firstName"
                    placeholder="First Name" 
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  <Input 
                    name="lastName"
                    placeholder="Last Name" 
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Input 
                  name="email"
                  placeholder="Email Address" 
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <Input 
                  name="institution"
                  placeholder="Institution/Organization"
                  value={formData.institution}
                  onChange={handleInputChange}
                  required
                />
                <Textarea 
                  name="message"
                  placeholder="Tell us about your project, research goals, or data analysis needs..." 
                  className="min-h-[120px]"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                
                {/* File Upload */}
                <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="flex flex-col items-center space-y-2">
                      <Upload className="h-8 w-8 text-muted-foreground" />
                      <div className="text-sm text-muted-foreground">
                        {file ? (
                          <span className="text-foreground font-medium">{file.name}</span>
                        ) : (
                          <span>Upload your data file (Excel format)</span>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Supported formats: .xlsx, .xls
                      </div>
                    </div>
                    <input
                      id="file-upload"
                      type="file"
                      accept=".xlsx,.xls,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <span className="text-foreground">radaidehstat@yahoo.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="text-foreground">+971529945649</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="text-foreground">Research Park, FU</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Why Choose Us?</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground">PhD-level statisticians and data scientists</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground">Specialized in academic and institutional research</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground">Proven track record with peer-reviewed publications</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground">Custom solutions tailored to your needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;