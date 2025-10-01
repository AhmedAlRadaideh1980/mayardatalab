import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Activity, Users, TrendingUp, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, LineChart, Line, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ZAxis } from "recharts";

const HealthAnalysis = () => {
  const navigate = useNavigate();

  const outcomeData = [
    { age: "18-30", success: 85, moderate: 12, poor: 3 },
    { age: "31-45", success: 78, moderate: 18, poor: 4 },
    { age: "46-60", success: 72, moderate: 22, poor: 6 },
    { age: "61-75", success: 65, moderate: 28, poor: 7 },
    { age: "76+", success: 58, moderate: 32, poor: 10 },
  ];

  const predictorData = [
    { predictor: "Early Detection", impact: 92 },
    { predictor: "Treatment Adherence", impact: 88 },
    { predictor: "Lifestyle Factors", impact: 76 },
    { predictor: "Genetic Markers", impact: 71 },
    { predictor: "Comorbidities", impact: 65 },
  ];

  const timelineData = [
    { month: "Month 1", baseline: 45, treatment: 48 },
    { month: "Month 3", baseline: 47, treatment: 58 },
    { month: "Month 6", baseline: 48, treatment: 68 },
    { month: "Month 9", baseline: 50, treatment: 75 },
    { month: "Month 12", baseline: 51, treatment: 82 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-6 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Examples
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Health Data Analysis</h1>
          <p className="text-lg text-muted-foreground">
            Statistical modeling of patient data to identify predictors of treatment outcomes
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Patients Analyzed</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,847</div>
              <p className="text-xs text-muted-foreground">Multi-center study</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Key Predictors</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">Statistically significant</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">82%</div>
              <p className="text-xs text-muted-foreground">With optimized protocol</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Improvement</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+25%</div>
              <p className="text-xs text-muted-foreground">Treatment success</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle>Treatment Outcomes by Age Group</CardTitle>
              <CardDescription>Success rates across different age demographics</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={outcomeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="age" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
                  <Legend />
                  <Bar dataKey="success" stackId="a" fill="hsl(var(--primary))" name="Successful" />
                  <Bar dataKey="moderate" stackId="a" fill="hsl(var(--accent))" name="Moderate" />
                  <Bar dataKey="poor" stackId="a" fill="hsl(var(--destructive))" name="Poor" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle>Key Predictor Impact</CardTitle>
              <CardDescription>Statistical significance of treatment predictors</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={predictorData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                  <YAxis dataKey="predictor" type="category" stroke="hsl(var(--muted-foreground))" width={120} />
                  <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
                  <Bar dataKey="impact" fill="hsl(var(--accent))" name="Impact Score" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-card border-border/50 shadow-card">
          <CardHeader>
            <CardTitle>Treatment Timeline Analysis</CardTitle>
            <CardDescription>Comparison of baseline vs. optimized treatment protocol over 12 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={timelineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
                <Legend />
                <Line type="monotone" dataKey="baseline" stroke="hsl(var(--muted-foreground))" strokeWidth={2} name="Baseline Protocol" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="treatment" stroke="hsl(var(--primary))" strokeWidth={3} name="Optimized Protocol" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HealthAnalysis;
