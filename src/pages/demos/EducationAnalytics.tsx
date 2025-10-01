import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, GraduationCap, TrendingUp, CheckCircle, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LineChart, Line, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const EducationAnalytics = () => {
  const navigate = useNavigate();

  const retentionData = [
    { year: "2019", firstYear: 88, secondYear: 82, thirdYear: 78, fourthYear: 75 },
    { year: "2020", firstYear: 90, secondYear: 84, thirdYear: 80, fourthYear: 77 },
    { year: "2021", firstYear: 91, secondYear: 86, thirdYear: 82, fourthYear: 79 },
    { year: "2022", firstYear: 93, secondYear: 88, thirdYear: 84, fourthYear: 81 },
    { year: "2023", firstYear: 94, secondYear: 90, thirdYear: 86, fourthYear: 83 },
  ];

  const performanceData = [
    { subject: "Mathematics", A: 28, B: 35, C: 25, D: 8, F: 4 },
    { subject: "Sciences", A: 32, B: 38, C: 22, D: 6, F: 2 },
    { subject: "Humanities", A: 35, B: 40, C: 18, D: 5, F: 2 },
    { subject: "Engineering", A: 25, B: 33, C: 28, D: 10, F: 4 },
  ];

  const accreditationData = [
    { metric: "Student Outcomes", score: 95 },
    { metric: "Curriculum", score: 92 },
    { metric: "Faculty", score: 88 },
    { metric: "Resources", score: 90 },
    { metric: "Assessment", score: 94 },
    { metric: "Governance", score: 87 },
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
          <h1 className="text-4xl font-bold text-foreground mb-2">Education Analytics</h1>
          <p className="text-lg text-muted-foreground">
            Dashboard showing student retention, success rates, and course performance for accreditation
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Overall Retention</CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">86%</div>
              <p className="text-xs text-muted-foreground">4-year average</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">91%</div>
              <p className="text-xs text-muted-foreground">A-C grades</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Data Compliance</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">95%</div>
              <p className="text-xs text-muted-foreground">Accreditation standard</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8,450</div>
              <p className="text-xs text-muted-foreground">Enrolled 2023-24</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle>Student Retention Trends</CardTitle>
              <CardDescription>Year-over-year retention by cohort</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={retentionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
                  <Legend />
                  <Line type="monotone" dataKey="firstYear" stroke="hsl(var(--primary))" strokeWidth={2} name="1st Year" />
                  <Line type="monotone" dataKey="secondYear" stroke="hsl(var(--accent))" strokeWidth={2} name="2nd Year" />
                  <Line type="monotone" dataKey="thirdYear" stroke="hsl(var(--data-secondary))" strokeWidth={2} name="3rd Year" />
                  <Line type="monotone" dataKey="fourthYear" stroke="hsl(var(--muted-foreground))" strokeWidth={2} name="4th Year" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle>Accreditation Metrics Radar</CardTitle>
              <CardDescription>Performance across key accreditation criteria</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={accreditationData}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis dataKey="metric" stroke="hsl(var(--muted-foreground))" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="hsl(var(--muted-foreground))" />
                  <Radar name="Score" dataKey="score" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.6} />
                  <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-card border-border/50 shadow-card">
          <CardHeader>
            <CardTitle>Course Performance Distribution</CardTitle>
            <CardDescription>Grade distribution across major subject areas</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="subject" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
                <Legend />
                <Bar dataKey="A" stackId="a" fill="hsl(var(--primary))" name="Grade A" />
                <Bar dataKey="B" stackId="a" fill="hsl(var(--accent))" name="Grade B" />
                <Bar dataKey="C" stackId="a" fill="hsl(var(--data-secondary))" name="Grade C" />
                <Bar dataKey="D" stackId="a" fill="hsl(var(--muted))" name="Grade D" />
                <Bar dataKey="F" stackId="a" fill="hsl(var(--destructive))" name="Grade F" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EducationAnalytics;
