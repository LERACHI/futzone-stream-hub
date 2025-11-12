// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import NotFound from "./pages/NotFound";

// ✅ Importando todas as rotas centralizadas
import { routes } from "@/routes";
import { footerRoutes } from "./routes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      {/* Navbar fixo para todas as páginas */}
      <Navbar />

      {/* Conteúdo principal */}
      <main className="flex-1">
        <Routes>
  {routes.map((r) => (
    <Route key={r.path} path={r.path} element={<r.component />} />
  ))}
  {footerRoutes.map((r) => (
    <Route key={r.path} path={r.path} element={<r.component />} />
  ))}
  <Route path="*" element={<NotFound />} />
</Routes>
      </main>

      {/* Footer fixo para todas as páginas */}
      <Footer />

      {/* Botão de scroll */}
      <ScrollToTopButton />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
