import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Droplets, TrendingDown, AlertTriangle, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const EnvironmentalStudies = () => {
  const navigate = useNavigate();

  const waterAvailabilityData = [
    { year: "2025", baseline: 100, moderate: 95, severe: 85 },
    { year: "2030", baseline: 98, moderate: 88, severe: 72 },
    { year: "2035", baseline: 95, moderate: 82, severe: 61 },
    { year: "2040", baseline: 93, moderate: 76, severe: 52 },
    { year: "2045", baseline: 90, moderate: 70, severe: 45 },
    { year: "2050", baseline: 88, moderate: 65, severe: 38 },
  ];

  const watershedData = [
    { watershed: "Northern Basin", current: 850, projected: 620 },
    { watershed: "Central Valley", current: 1200, projected: 890 },
    { watershed: "Southern Delta", current: 680, projected: 480 },
  ];

  const seasonalPatternData = [
    { month: "Jan", historical: 120, projected: 95 },
    { month: "Feb", historical: 115, projected: 90 },
    { month: "Mar", historical: 105, projected: 82 },
    { month: "Apr", historical: 95, projected: 72 },
    { month: "May", historical: 85, projected: 65 },
    { month: "Jun", historical: 75, projected: 55 },
    { month: "Jul", historical: 65, projected: 45 },
    { month: "Aug", historical: 70, projected: 48 },
    { month: "Sep", historical: 80, projected: 58 },
    { month: "Oct", historical: 90, projected: 68 },
    { month: "Nov", historical: 100, projected: 78 },
    { month: "Dec", historical: 110, projected: 85 },
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
          <h1 className="text-4xl font-bold text-foreground mb-2">Environmental Studies</h1>
          <p className="text-lg text-muted-foreground">
            Predictive analysis of water resource availability under climate change scenarios
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Watersheds Analyzed</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Major basins</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Projected Decline</CardTitle>
              <TrendingDown className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">-28%</div>
              <p className="text-xs text-muted-foreground">By 2050 (severe scenario)</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Risk Level</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">High</div>
              <p className="text-xs text-muted-foreground">Southern Delta</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Policy Impact</CardTitle>
              <Droplets className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Major watersheds</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle>Water Availability Projections</CardTitle>
              <CardDescription>Relative availability under different climate scenarios (2025-2050)</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={waterAvailabilityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
                  <Legend />
                  <Area type="monotone" dataKey="baseline" stackId="1" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.6} name="Baseline Scenario" />
                  <Area type="monotone" dataKey="moderate" stackId="2" stroke="hsl(var(--accent))" fill="hsl(var(--accent))" fillOpacity={0.6} name="Moderate Change" />
                  <Area type="monotone" dataKey="severe" stackId="3" stroke="hsl(var(--destructive))" fill="hsl(var(--destructive))" fillOpacity={0.6} name="Severe Change" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle>Watershed Resource Comparison</CardTitle>
              <CardDescription>Current vs. projected availability (million cubic meters)</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={watershedData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="watershed" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
                  <Legend />
                  <Bar dataKey="current" fill="hsl(var(--primary))" name="Current (2024)" />
                  <Bar dataKey="projected" fill="hsl(var(--destructive))" name="Projected (2050)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-card border-border/50 shadow-card">
          <CardHeader>
            <CardTitle>Seasonal Pattern Analysis</CardTitle>
            <CardDescription>Historical vs. projected seasonal water availability patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={seasonalPatternData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
                <Legend />
                <Line type="monotone" dataKey="historical" stroke="hsl(var(--primary))" strokeWidth={2} name="Historical Average" />
                <Line type="monotone" dataKey="projected" stroke="hsl(var(--destructive))" strokeWidth={2} name="Projected (2050)" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EnvironmentalStudies;
