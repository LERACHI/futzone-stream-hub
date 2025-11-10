import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChannelCard from "@/components/ChannelCard";
import Disclaimer from "@/components/Disclaimer";
import { useState } from "react";
import { LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const channels = [
    {
      name: "ESPN",
      description: "Casa do futebol brasileiro e internacional, da NBA, NFL, MLB e do tênis. Notícias exclusivas, blogs, vídeos, fotos e tempo real de eventos esportivos.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/ESPN_wordmark.svg",
      link: "https://www.espn.com.br",
      bgColor: "bg-red-600",
    },
    {
      name: "Canal SporTV",
      description: "Assista agora ao melhor da programação esportiva · Na agenda: confira os horários dos eventos e dos programas do sportv · Programação. Agora no sportv. Confira ...",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5e/SporTV_2017_logo.svg",
      link: "https://ge.globo.com/sportv/",
      bgColor: "bg-card",
    },
    {
      name: "Cazé TV",
      description: "Tudo sobre esporte DO NOSSO JEITO!",
      imageUrl: "https://upload.wikimedia.org/wikipedia/pt/2/22/Logotipo_da_Caz%C3%A9TV.png",
      link: "https://www.youtube.com/@CazeTV",
      bgColor: "bg-card",
    },
    {
      name: "PREMIERE",
      description: "Bora de Black November Premiere!",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/20/Premiere_%282017%29_logo.png",
      link: "https://premiere.globo.com/agora",
      bgColor: "bg-green-700",
    },
    {
      name: "Fox Sports",
      description: "Esportes americanos e futebol internacional",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Fox_Sports_Netherlands_Logo.png",
      link: "https://www.foxsports.com/",
      bgColor: "bg-blue-900",
    },
    {
      name: "DAZN",
      description: "Transmissões esportivas sob demanda",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/ae/DAZN_Tamarc_Logo_2018.jpg",
      link: "https://www.dazn.com",
      bgColor: "bg-card",
    },
    {
      name: "SBT SPORTS",
      description: "No SBT Sports você fica por dentro dos principais campeonatos do país e do mundo, análises dos jogos e comentários do elenco esportivo do SBT.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/pt/9/9e/Sbtsports.jpg",
      link: "https://sports.sbt.com.br/",
      bgColor: "bg-green-600",
    },
    {
      name: "Band Sports",
      description: "É o destino ideal para os amantes do esporte que desejam acompanhar eventos ao vivo e obter informações detalhadas sobre suas modalidades favoritas.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f7/BandSports_logo.svg",
      link: "https://bandsports.uol.com.br/",
      bgColor: "bg-red-600",
    },
    {
      name: "Disney+",
      description: "Premier League, o melhor do futebol mundial",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg",
      link: "https://www.disneyplus.com",
      bgColor: "bg-blue-600",
    },
    {
      name: "YouTube",
      description: "Welcome to the official YouTube channel of the Brazilian Football Confederation! ",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/99/Brazilian_Football_Confederation_logo.svg",
      link: "https://www.youtube.com/channel/UCdQuDaRww5NkKpQQ1BJBWww#:~:text=Confedera%C3%A7%C3%A3o%20Brasileira%20de%20Futebol%20%2D%20YouTube",
      bgColor: "bg-red-600",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="text-center sm:text-left mx-auto sm:mx-0">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Assista Agora:
            </h1>
            <p className="text-muted-foreground">
              Acesse os melhores canais esportivos e plataformas de streaming
            </p>
          </div>
          
          {/* View Toggle */}
          <div className="flex gap-2 bg-muted/50 p-1 rounded-lg">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="transition-all"
            >
              <LayoutGrid className="h-4 w-4 mr-2" />
              Grade
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="transition-all"
            >
              <List className="h-4 w-4 mr-2" />
              Lista
            </Button>
          </div>
        </div>

        {/* Channels Grid View */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8 animate-fade-in">
            {channels.map((channel) => (
              <ChannelCard
                key={channel.name}
                name={channel.name}
                description={channel.description}
                imageUrl={channel.imageUrl}
                link={channel.link}
                bgColor={channel.bgColor}
              />
            ))}
          </div>
        )}

        {/* Channels List View */}
        {viewMode === "list" && (
          <div className="space-y-4 mb-8 animate-fade-in">
            {channels.map((channel) => (
              <a
                key={channel.name}
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg transition-all hover:scale-[1.02] hover:shadow-lg hover:border-primary/50">
                  <div className={`${channel.bgColor} w-20 h-20 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden`}>
                    <img
                      src={channel.imageUrl}
                      alt={channel.name}
                      className="w-full h-full object-contain p-2"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                      {channel.name}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2">
                      {channel.description}
                    </p>
                  </div>
                  <div className="text-muted-foreground group-hover:text-primary transition-colors">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Disclaimer */}
        <Disclaimer />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
