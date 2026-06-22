import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Products from "./pages/Products";
import About from "./pages/About";
import Safety from "./pages/Safety";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Sustainability from "./pages/Sustainability";
import Dealer from "./pages/Dealer";
import Career from "./pages/Career";
import BulkEnquiry from "./pages/BulkEnquiry";
import Blog from "./pages/Blog";
import SisterConcerns from "./pages/SisterConcerns";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/dealer" element={<Dealer />} />
          <Route path="/career" element={<Career />} />
          <Route path="/bulk-enquiry" element={<BulkEnquiry />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/sister-concerns" element={<SisterConcerns />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
