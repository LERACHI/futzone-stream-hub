import { Link } from "react-router-dom";
import { Tv } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Logo and Description - Standalone */}
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center space-x-2 mb-4">
            <Tv className="h-8 w-8 text-accent" />
            <span className="text-2xl font-bold text-foreground">FutZone</span>
          </Link>
          <p className="text-muted-foreground text-sm">
            Sua plataforma completa para acompanhar o melhor do esporte mundial.
          </p>
        </div>

        {/* Links - Without Titles */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <Link to="/sobre" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
            Sobre Nós
          </Link>
          <Link to="/contato" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
            Contato
          </Link>
          <Link to="/faq" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
            FAQ
          </Link>
          <Link to="/privacidade" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
            Política de Privacidade
          </Link>
          <Link to="/aviso-legal" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
            Aviso Legal
          </Link>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 FutZone. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
