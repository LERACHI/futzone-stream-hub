import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { HelpCircle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Sobre o FutZone</h1>

        {/* Índice de Navegação */}
        <nav className="bg-muted/50 border border-border rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">Navegação Rápida</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <li>
              <a href="#sobre-futzone" className="text-accent hover:underline">
                Sobre o FutZone
              </a>
            </li>
            <li>
              <a href="#nossa-missao" className="text-accent hover:underline">
                Nossa Missão
              </a>
            </li>
            <li>
              <a href="#o-que-oferecemos" className="text-accent hover:underline">
                O que Oferecemos
              </a>
            </li>
            <li>
              <a href="#transparencia" className="text-accent hover:underline">
                Transparência e Legalidade
              </a>
            </li>
            <li>
              <a href="#privacidade" className="text-accent hover:underline">
                Compromisso com sua Privacidade
              </a>
            </li>
            <li>
              <a href="#informacoes-coletadas" className="text-accent hover:underline">
                Informações que Coletamos
              </a>
            </li>
            <li>
              <a href="#uso-informacoes" className="text-accent hover:underline">
                Como Usamos suas Informações
              </a>
            </li>
            <li>
              <a href="#base-legal" className="text-accent hover:underline">
                Base Legal para Processamento
              </a>
            </li>
            <li>
              <a href="#alteracoes" className="text-accent hover:underline">
                Alterações nesta Política
              </a>
            </li>
            <li>
              <a href="#contato" className="text-accent hover:underline">
                Contato e Suporte
              </a>
            </li>
          </ul>
        </nav>

        <div className="space-y-8">
          <section id="sobre-futzone">
            <h2 className="text-2xl font-bold text-foreground mb-4">Sobre o FutZone</h2>
            <p className="text-muted-foreground leading-relaxed">
              O FutZone é sua plataforma completa para descobrir e acessar os melhores canais esportivos 
              e plataformas de streaming. Reunimos em um só lugar todos os links para que você possa 
              acompanhar seus times e competições favoritas.
            </p>
          </section>

          <section id="nossa-missao">
            <h2 className="text-2xl font-bold text-foreground mb-4">Nossa Missão</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nossa missão é facilitar o acesso ao conteúdo esportivo de qualidade, conectando fãs 
              às transmissões oficiais e legítimas dos principais canais e plataformas do mercado.
            </p>
          </section>

          <section id="o-que-oferecemos">
            <h2 className="text-2xl font-bold text-foreground mb-4">O que Oferecemos</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Agregação de links para canais esportivos oficiais</li>
              <li>Informações sobre jogos, times e competições</li>
              <li>Notícias e atualizações do mundo esportivo</li>
              <li>Interface moderna e fácil de usar</li>
              <li>Acesso rápido às principais plataformas de streaming</li>
            </ul>
          </section>

          <section id="transparencia">
            <h2 className="text-2xl font-bold text-foreground mb-4">Transparência e Legalidade</h2>
            <p className="text-muted-foreground leading-relaxed">
              É importante destacar que o FutZone não hospeda, transmite ou armazena qualquer conteúdo 
              audiovisual. Somos apenas um agregador de links que direciona você para as fontes oficiais 
              e legítimas. Respeitamos todos os direitos autorais e incentivamos o acesso legal ao conteúdo.
            </p>
          </section>

          <section id="privacidade">
            <h2 className="text-2xl font-bold text-foreground mb-4">Compromisso com sua Privacidade</h2>
            <p className="text-muted-foreground leading-relaxed">
              Valorizamos sua privacidade e segurança. Não coletamos dados pessoais sensíveis e não 
              compartilhamos informações com terceiros sem seu consentimento.
            </p>
          </section>

          <section id="informacoes-coletadas">
            <h2 className="text-2xl font-bold text-foreground mb-4">Informações que Coletamos</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Para melhorar sua experiência, podemos coletar informações não identificáveis como:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Dados de navegação e uso do site</li>
              <li>Preferências de conteúdo</li>
              <li>Informações técnicas do dispositivo</li>
            </ul>
          </section>

          <section id="uso-informacoes">
            <h2 className="text-2xl font-bold text-foreground mb-4">Como Usamos suas Informações</h2>
            <p className="text-muted-foreground leading-relaxed">
              Utilizamos as informações coletadas para melhorar nossos serviços, personalizar sua 
              experiência e fornecer conteúdo relevante de acordo com seus interesses.
            </p>
          </section>

          <section id="base-legal">
            <h2 className="text-2xl font-bold text-foreground mb-4">Base Legal para Processamento de Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Processamos seus dados com base no seu consentimento e em nosso interesse legítimo de 
              fornecer e melhorar nossos serviços, em conformidade com a LGPD e outras legislações aplicáveis.
            </p>
          </section>

          <section id="alteracoes">
            <h2 className="text-2xl font-bold text-foreground mb-4">Alterações nesta Política de Privacidade</h2>
            <p className="text-muted-foreground leading-relaxed">
              Podemos atualizar esta política periodicamente. Recomendamos que você revise esta página 
              regularmente para se manter informado sobre quaisquer alterações.
            </p>
          </section>

          <section id="contato">
            <h2 className="text-2xl font-bold text-foreground mb-4">Contato e Suporte</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tem dúvidas ou sugestões? Entre em contato conosco através da nossa{" "}
              <Link to="/contato" className="text-accent hover:underline">
                página de contato
              </Link>
              . Estamos sempre prontos para ajudar!
            </p>
            
            <div className="bg-muted border border-border rounded-lg p-6 flex items-start space-x-3">
              <HelpCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <p className="text-muted-foreground mb-2">
                  Consulte nossa seção de Perguntas Frequentes para respostas rápidas às dúvidas mais comuns.
                </p>
                <Link to="/faq" className="text-accent hover:underline font-semibold">
                  👉 Clique para acessar a FAQ
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
