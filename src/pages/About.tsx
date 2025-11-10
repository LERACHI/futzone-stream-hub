import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useScrollToTop } from "@/hooks/useScrollToTop";

// Componente auxiliar de animação
const ScrollRevealSection = ({ children, id }: { children: React.ReactNode; id?: string }) => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id={id}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </section>
  );
};

// Página principal "Sobre Nós"
const About = () => {
  // 👇 Aqui é onde o scroll automático até o topo é ativado sempre que a rota muda
  useScrollToTop();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Navbar />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-4">
        <nav className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Início</Link> / 
          <span className="text-foreground ml-1">Sobre Nós</span>
        </nav>
      </div>

      {/* Conteúdo principal */}
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <ScrollRevealSection>
          <h1 className="text-4xl font-bold text-foreground mb-4">Sobre o FutZone</h1>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            O <strong>FutZone</strong> é uma plataforma dedicada aos fãs de esportes que desejam
            acompanhar transmissões, notícias e conteúdos de alta qualidade sobre futebol, basquete,
            vôlei e muito mais. Nosso objetivo é unir praticidade, informação e entretenimento em um
            só lugar.
          </p>
        </ScrollRevealSection>

        <ScrollRevealSection>
          <h2 className="text-2xl font-semibold text-foreground mb-3">Nossa Missão</h2>
          <p className="text-muted-foreground leading-relaxed">
            Tornar o acesso ao conteúdo esportivo simples e acessível, conectando fãs aos melhores
            eventos e plataformas de streaming esportivo do mundo.
          </p>
        </ScrollRevealSection>

        <ScrollRevealSection>
          <h2 className="text-2xl font-semibold text-foreground mb-3">Nosso Compromisso</h2>
          <p className="text-muted-foreground leading-relaxed">
            Transparência, segurança e qualidade são nossos pilares. Trabalhamos constantemente para
            melhorar sua experiência e oferecer uma plataforma estável, atualizada e confiável.
          </p>
        </ScrollRevealSection>
      </main>

      {/* Rodapé padronizado */}
      <Footer />
    </div>
  );
};

export default About;
