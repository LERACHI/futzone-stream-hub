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
      description: "Esportes e entretenimento",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/ESPN_wordmark.svg",
      link: "https://www.espn.com.br",
      bgColor: "bg-red-600",
    },
    {
      name: "Canal SporTV",
      description: "Vídeos de futebol e outros esportes",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/89/Star_Plus_logo.svg",
      link: "https://www.sportv.globo.com",
      bgColor: "bg-card",
    },
    {
      name: "Cazé TV",
      description: "Tudo sobre esporte DO NOSSO JEITO!",
      imageUrl: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=200&h=200&fit=crop",
      link: "https://www.youtube.com/@CazeTV",
      bgColor: "bg-card",
    },
    {
      name: "PREMIERE",
      description: "Bora de Black November Premiere!",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Premiere_Clubes_logo.svg",
      link: "https://www.globoplay.globo.com/premiere",
      bgColor: "bg-green-700",
    },
    {
      name: "Fox Sports",
      description: "Esportes americanos e futebol internacional",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/98/Fox_Sports_logo.svg",
      link: "https://www.foxsports.com.br",
      bgColor: "bg-blue-900",
    },
    {
      name: "DAZN",
      description: "Transmissões esportivas sob demanda",
      imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=200&h=200&fit=crop",
      link: "https://www.dazn.com",
      bgColor: "bg-card",
    },
    {
      name: "SBT SPORTS",
      description: "Cobertura esportiva completa do SBT",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b2/SBT_2014_logo.svg",
      link: "https://www.sbt.com.br",
      bgColor: "bg-green-600",
    },
    {
      name: "Band Sports",
      description: "Notícias e transmissões esportivas da Band",
      imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200&h=200&fit=crop",
      link: "https://www.band.com.br",
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
      description: "Canais esportivos e lives oficiais",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg",
      link: "https://www.youtube.com",
      bgColor: "bg-red-600",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
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
