import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Resources from "./pages/Resources";
import Events from "./pages/Events";
import TodoApp from "./pages/TodoApp";
import Onboarding from "./pages/Onboarding";
import Privacy from "./pages/Privacy";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import Programs from "./pages/Programs";
import GirlsOfImpact from "./pages/GirlsOfImpact";
import CodeBloom from "./pages/CodeBloom";
import RiseAndRadiate from "./pages/RiseAndRadiate";
import CrownHer from "./pages/CrownHer";
import ThriveMakers from "./pages/ThriveMakers";
import WellSpring from "./pages/WellSpring";
import BrightSteps from "./pages/BrightSteps";
import EchoHer from "./pages/EchoHer";
import WealthWise from "./pages/WealthWise";
import Impact from "./pages/Impact";
import Partners from "./pages/Partners";
import MobileApp from "./pages/MobileApp";

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/events" element={<Events />} />
              <Route path="/tools/todo" element={<TodoApp />} />
              <Route path="/join" element={<Onboarding />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/programs/girls-of-impact" element={<GirlsOfImpact />} />
              <Route path="/programs/codebloom" element={<CodeBloom />} />
              <Route path="/programs/rise-and-radiate" element={<RiseAndRadiate />} />
              <Route path="/programs/crownher" element={<CrownHer />} />
              <Route path="/programs/thrivemakers" element={<ThriveMakers />} />
              <Route path="/programs/wellspring" element={<WellSpring />} />
              <Route path="/programs/brightsteps" element={<BrightSteps />} />
              <Route path="/programs/echoher" element={<EchoHer />} />
              <Route path="/programs/wealthwise" element={<WealthWise />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/app" element={<MobileApp />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;