import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ResearchDashboard from "./pages/demos/ResearchDashboard";
import HealthAnalysis from "./pages/demos/HealthAnalysis";
import EnvironmentalStudies from "./pages/demos/EnvironmentalStudies";
import EducationAnalytics from "./pages/demos/EducationAnalytics";
import SurveyAnalysis from "./pages/demos/SurveyAnalysis";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/demos/research-dashboard" element={<ResearchDashboard />} />
              <Route path="/demos/health-analysis" element={<HealthAnalysis />} />
              <Route path="/demos/environmental" element={<EnvironmentalStudies />} />
              <Route path="/demos/education" element={<EducationAnalytics />} />
              <Route path="/demos/survey" element={<SurveyAnalysis />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
