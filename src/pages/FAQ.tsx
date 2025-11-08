import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      id: "o-que-e-futzone",
      question: "O que é o FutZone?",
      answer: "O FutZone é uma plataforma agregadora que reúne links para os principais canais esportivos e plataformas de streaming oficiais. Facilitamos o acesso ao conteúdo esportivo legal e de qualidade, conectando você diretamente às fontes oficiais.",
    },
    {
      id: "canal-nao-carrega",
      question: "O site não carrega um canal específico. O que devo fazer?",
      answer: "Se um link não estiver funcionando, pode ser que o canal esteja temporariamente indisponível ou tenha alterado seu endereço. Tente acessar diretamente o site oficial do canal. Se o problema persistir, entre em contato conosco para que possamos atualizar o link.",
    },
    {
      id: "ligas-torneios",
      question: "Quais ligas e torneios são cobertos pelo FutZone?",
      answer: "Através dos canais parceiros listados no FutZone, você tem acesso a uma ampla variedade de competições, incluindo Campeonato Brasileiro, Libertadores, Champions League, Premier League, La Liga, Bundesliga, NBA, NFL e muitos outros eventos esportivos nacionais e internacionais.",
    },
    {
      id: "como-funciona",
      question: "Como o FutZone funciona?",
      answer: "O FutZone é um diretório de links que aponta para transmissões e plataformas oficiais. Quando você clica em um canal, é redirecionado para o site oficial onde o conteúdo está hospedado. Não hospedamos nenhum conteúdo em nossos servidores.",
    },
    {
      id: "gratuito",
      question: "O FutZone é gratuito?",
      answer: "Sim, o FutZone é completamente gratuito para usar. No entanto, alguns dos canais e plataformas para os quais direcionamos podem exigir assinatura ou pagamento. Verifique os termos de cada serviço.",
    },
    {
      id: "hospeda-transmite",
      question: "O FutZone hospeda ou transmite jogos ao vivo?",
      answer: "Não. O FutZone não hospeda, transmite ou armazena qualquer conteúdo audiovisual. Somos apenas um agregador de links que direciona você para as transmissões oficiais dos detentores dos direitos de transmissão.",
    },
    {
      id: "contato",
      question: "Como posso entrar em contato com o FutZone?",
      answer: "Você pode entrar em contato conosco através da nossa página de contato. Estamos sempre prontos para ouvir suas sugestões, dúvidas ou reportar problemas.",
    },
    {
      id: "adicionar-canal",
      question: "Como solicitar a adição de um novo canal?",
      answer: "Se você conhece um canal esportivo oficial que não está listado no FutZone, por favor, entre em contato conosco através da página de contato. Avaliaremos a sugestão e, se apropriado, adicionaremos o canal à nossa lista.",
    },
    {
      id: "direitos-autorais",
      question: "O FutZone respeita os direitos autorais?",
      answer: "Sim, absolutamente. O FutZone apenas direciona para conteúdo oficial e legal. Respeitamos todos os direitos autorais e não toleramos pirataria. Se você identificar algum link irregular, por favor, nos informe imediatamente.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-4">Perguntas Frequentes (FAQ)</h1>
        <p className="text-muted-foreground mb-8">
          Encontre respostas rápidas para as dúvidas mais comuns sobre o FutZone
        </p>

        {/* Índice de Navegação */}
        <nav className="bg-muted/50 border border-border rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">Perguntas</h3>
          <ul className="grid grid-cols-1 gap-2 text-sm">
            {faqs.map((faq) => (
              <li key={faq.id}>
                <a href={`#${faq.id}`} className="text-accent hover:underline">
                  {faq.question}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} id={faq.id} className="bg-card border border-border rounded-lg px-6 scroll-mt-4">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold text-foreground">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
