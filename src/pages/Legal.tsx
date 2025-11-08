import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Legal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Início</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Aviso Legal</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-4">Aviso Legal</h1>
        <p className="text-muted-foreground mb-8">Termos de Uso e Condições</p>

        <div className="bg-accent/10 border border-accent rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Importante</h3>
              <p className="text-sm text-muted-foreground">
                Leia atentamente este aviso legal antes de utilizar o FutZone.
              </p>
            </div>
          </div>
        </div>

        {/* Índice de Navegação */}
        <nav className="bg-muted/50 border border-border rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">Navegação Rápida</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <li>
              <a href="#natureza-servico" className="text-accent hover:underline">
                1. Natureza do Serviço
              </a>
            </li>
            <li>
              <a href="#direitos-autorais" className="text-accent hover:underline">
                2. Direitos Autorais
              </a>
            </li>
            <li>
              <a href="#responsabilidades" className="text-accent hover:underline">
                3. Responsabilidades
              </a>
            </li>
            <li>
              <a href="#uso-aceitavel" className="text-accent hover:underline">
                4. Uso Aceitável
              </a>
            </li>
            <li>
              <a href="#links-terceiros" className="text-accent hover:underline">
                5. Links para Sites de Terceiros
              </a>
            </li>
            <li>
              <a href="#modificacoes" className="text-accent hover:underline">
                6. Modificações no Serviço
              </a>
            </li>
            <li>
              <a href="#limitacao" className="text-accent hover:underline">
                7. Limitação de Responsabilidade
              </a>
            </li>
            <li>
              <a href="#propriedade-intelectual" className="text-accent hover:underline">
                8. Propriedade Intelectual
              </a>
            </li>
            <li>
              <a href="#lei-aplicavel" className="text-accent hover:underline">
                9. Lei Aplicável
              </a>
            </li>
            <li>
              <a href="#contato" className="text-accent hover:underline">
                10. Contato
              </a>
            </li>
          </ul>
        </nav>

        <div className="space-y-8 text-muted-foreground">
          <section id="natureza-servico">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Natureza do Serviço</h2>
            <p className="leading-relaxed">
              O FutZone é um serviço de agregação de links que direciona usuários para plataformas 
              e canais esportivos oficiais. Não hospedamos, transmitimos, armazenamos ou distribuímos 
              qualquer conteúdo audiovisual em nossos servidores.
            </p>
          </section>

          <section id="direitos-autorais">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Direitos Autorais</h2>
            <p className="leading-relaxed">
              Todo o conteúdo acessado através dos links fornecidos pertence aos respectivos 
              detentores de direitos autorais. O FutZone respeita a propriedade intelectual e 
              incentiva o acesso legal ao conteúdo esportivo.
            </p>
          </section>

          <section id="responsabilidades">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Responsabilidades</h2>
            <p className="leading-relaxed mb-3">O FutZone não é responsável por:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Disponibilidade ou qualidade das transmissões em sites de terceiros</li>
              <li>Conteúdo exibido em plataformas externas</li>
              <li>Alterações, suspensões ou descontinuação de serviços de terceiros</li>
              <li>Políticas de privacidade ou práticas de sites externos</li>
            </ul>
          </section>

          <section id="uso-aceitavel">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Uso Aceitável</h2>
            <p className="leading-relaxed mb-3">Ao utilizar o FutZone, você concorda em:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Usar o serviço apenas para fins legais</li>
              <li>Não tentar burlar sistemas de proteção ou restrições de acesso</li>
              <li>Respeitar os termos de uso das plataformas de destino</li>
              <li>Não utilizar o serviço para atividades fraudulentas ou prejudiciais</li>
            </ul>
          </section>

          <section id="links-terceiros">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Links para Sites de Terceiros</h2>
            <p className="leading-relaxed">
              Os links fornecidos direcionam para sites de terceiros sobre os quais não temos controle. 
              Não endossamos nem assumimos responsabilidade pelo conteúdo, políticas ou práticas desses sites.
            </p>
          </section>

          <section id="modificacoes">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Modificações no Serviço</h2>
            <p className="leading-relaxed">
              Reservamo-nos o direito de modificar, suspender ou descontinuar qualquer aspecto do 
              FutZone a qualquer momento, sem aviso prévio.
            </p>
          </section>

          <section id="limitacao">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitação de Responsabilidade</h2>
            <p className="leading-relaxed">
              O FutZone é fornecido "como está", sem garantias de qualquer tipo. Não nos responsabilizamos 
              por danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso do serviço.
            </p>
          </section>

          <section id="propriedade-intelectual">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Propriedade Intelectual</h2>
            <p className="leading-relaxed">
              O design, layout, código e conteúdo original do FutZone são protegidos por direitos autorais 
              e outras leis de propriedade intelectual. Não é permitida a reprodução sem autorização.
            </p>
          </section>

          <section id="lei-aplicavel">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Lei Aplicável</h2>
            <p className="leading-relaxed">
              Este aviso legal é regido pelas leis brasileiras. Quaisquer disputas serão resolvidas 
              nos tribunais competentes do Brasil.
            </p>
          </section>

          <section id="contato">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Contato</h2>
            <p className="leading-relaxed">
              Para questões legais ou reportar violações, entre em contato através do e-mail: 
              legal@futzone.com
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Legal;
