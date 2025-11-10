// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";
import ScrollToTopButton from "./components/ScrollToTopButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        {/* Rotas principais */}
        <Route path="/" element={<Index />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/privacidade" element={<Privacy />} />
        <Route path="/aviso-legal" element={<Legal />} />

        {/* Rotas placeholder */}
        <Route path="/jogos-hoje" element={<Index />} />
        <Route path="/times" element={<Index />} />
        <Route path="/tabelas" element={<Index />} />
        <Route path="/mercado" element={<Index />} />
        <Route path="/noticias" element={<Index />} />
        <Route path="/videos" element={<Index />} />
        <Route path="/blog" element={<Index />} />
        <Route path="/podcast" element={<Index />} />
        <Route path="/streaming" element={<Index />} />

        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ScrollToTopButton />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
