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
          <h1 className="text-4xl font-bold text-foreground mb-4">Sobre o FutZone:</h1>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            O <strong>FutZone</strong> é uma plataforma dedicada aos fãs de esportes que desejam
            acompanhar transmissões, notícias e conteúdos de alta qualidade sobre futebol, basquete,
            vôlei e muito mais. Nosso objetivo é unir praticidade, informação e entretenimento em um
            só lugar. O FutZone funciona como um agregador de links e informações sobre jogos de futebol, trazendo acesso rápido a transmissões e conteúdos esportivos oficiais de diversas plataformas. Não hospedamos nem transmitimos jogos — todos os links direcionam para fontes legítimas e oficiais.
            Nosso objetivo é facilitar o acesso dos fãs de futebol a partidas, notícias e conteúdos em um só lugar, com transparência e respeito aos direitos autorais.
            Se você é fã de futebol, aqui é o seu lugar.
          </p>
        </ScrollRevealSection>

        <ScrollRevealSection>
          <h2 className="text-4xl font-bold text-foreground mb-4">Nossa Missão:</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Tornar o acesso ao conteúdo esportivo simples e acessível, conectando fãs aos melhores
            eventos e plataformas de streaming esportivo do mundo. Acreditamos que o esporte
            une pessoas e queremos ser parte dessa conexão. Nossa missão é proporcionar uma experiência simples e eficiente para os amantes do futebol, conectando-os às melhores fontes oficiais de conteúdo esportivo. Valorizamos a integridade, a transparência e o respeito aos direitos autorais em todas as nossas operações.


          </p>
        </ScrollRevealSection>

        <ScrollRevealSection>
          <h2 className="text-4xl font-bold text-foreground mb-4">O  que Oferecemos:</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            - Links atualizados para transmissões oficiais de jogos de futebol.
            - Acesso rápido a notícias e análises esportivas.
            - Uma plataforma fácil de navegar, focada na experiência do usuário.
          </p>
        </ScrollRevealSection>
      
      <ScrollRevealSection>
          <h2 className="text-4xl font-bold text-foreground mb-4">Nosso  Compromisso:</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
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
