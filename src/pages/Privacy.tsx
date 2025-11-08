import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-4">Política de Privacidade</h1>
        <p className="text-muted-foreground mb-8">Última atualização: Janeiro de 2025</p>

        {/* Índice de Navegação */}
        <nav className="bg-muted/50 border border-border rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">Navegação Rápida</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <li>
              <a href="#introducao" className="text-accent hover:underline">
                1. Introdução
              </a>
            </li>
            <li>
              <a href="#informacoes-coletadas" className="text-accent hover:underline">
                2. Informações que Coletamos
              </a>
            </li>
            <li>
              <a href="#uso-informacoes" className="text-accent hover:underline">
                3. Como Usamos suas Informações
              </a>
            </li>
            <li>
              <a href="#compartilhamento" className="text-accent hover:underline">
                4. Compartilhamento de Informações
              </a>
            </li>
            <li>
              <a href="#cookies" className="text-accent hover:underline">
                5. Cookies
              </a>
            </li>
            <li>
              <a href="#seguranca" className="text-accent hover:underline">
                6. Segurança
              </a>
            </li>
            <li>
              <a href="#direitos-lgpd" className="text-accent hover:underline">
                7. Seus Direitos (LGPD)
              </a>
            </li>
            <li>
              <a href="#alteracoes" className="text-accent hover:underline">
                8. Alterações nesta Política
              </a>
            </li>
            <li>
              <a href="#contato" className="text-accent hover:underline">
                9. Contato
              </a>
            </li>
          </ul>
        </nav>

        <div className="space-y-8 text-muted-foreground">
          <section id="introducao">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introdução</h2>
            <p className="leading-relaxed">
              Esta Política de Privacidade descreve como o FutZone coleta, usa, armazena e protege 
              suas informações pessoais quando você utiliza nosso site.
            </p>
          </section>

          <section id="informacoes-coletadas">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Informações que Coletamos</h2>
            <p className="leading-relaxed mb-3">Coletamos as seguintes informações:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Dados de navegação (páginas visitadas, tempo de permanência)</li>
              <li>Informações técnicas (tipo de navegador, sistema operacional, endereço IP)</li>
              <li>Preferências de conteúdo e configurações</li>
              <li>Informações fornecidas voluntariamente em formulários de contato</li>
            </ul>
          </section>

          <section id="uso-informacoes">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Como Usamos suas Informações</h2>
            <p className="leading-relaxed mb-3">Utilizamos suas informações para:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Melhorar a experiência do usuário no site</li>
              <li>Personalizar o conteúdo apresentado</li>
              <li>Analisar tendências e padrões de uso</li>
              <li>Responder a suas solicitações e dúvidas</li>
              <li>Manter a segurança e integridade do site</li>
            </ul>
          </section>

          <section id="compartilhamento">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Compartilhamento de Informações</h2>
            <p className="leading-relaxed">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
              exceto quando necessário para cumprir obrigações legais ou proteger nossos direitos.
            </p>
          </section>

          <section id="cookies">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Cookies</h2>
            <p className="leading-relaxed">
              Utilizamos cookies para melhorar sua experiência de navegação. Você pode configurar 
              seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do site.
            </p>
          </section>

          <section id="seguranca">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Segurança</h2>
            <p className="leading-relaxed">
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas 
              informações contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>

          <section id="direitos-lgpd">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Seus Direitos (LGPD)</h2>
            <p className="leading-relaxed mb-3">De acordo com a LGPD, você tem o direito de:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Confirmar a existência de tratamento de dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados</li>
              <li>Revogar o consentimento</li>
            </ul>
          </section>

          <section id="alteracoes">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Alterações nesta Política</h2>
            <p className="leading-relaxed">
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você 
              sobre mudanças significativas através do site.
            </p>
          </section>

          <section id="contato">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Contato</h2>
            <p className="leading-relaxed">
              Para questões sobre privacidade ou para exercer seus direitos, entre em contato 
              através do e-mail: privacidade@futzone.com
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
