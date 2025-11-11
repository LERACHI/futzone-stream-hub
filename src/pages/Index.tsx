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
    description: "Casa do futebol brasileiro e internacional, da NBA, NFL, MLB e do tênis.",
    imageUrl: "/futzone-stream-hub/imagens/espn.png",
    link: "https://www.espn.com.br",
    bgColor: "bg-red-600",
  },
  {
    name: "Canal SporTV",
    description: "Programação esportiva completa com transmissões ao vivo e programas exclusivos.",
    imageUrl: "/futzone-stream-hub/imagens/sportv.png",
    link: "https://ge.globo.com/sportv/",
    bgColor: "bg-card",
  },
  {
    name: "Cazé TV",
    description: "Tudo sobre esporte DO NOSSO JEITO!",
    imageUrl: "/futzone-stream-hub/imagens/cazetv.png",
    link: "https://www.youtube.com/@CazeTV",
    bgColor: "bg-card",
  },
  {
    name: "PREMIERE",
    description: "Bora de Black November Premiere!",
    imageUrl: "/futzone-stream-hub/imagens/premiere.png",
    link: "https://premiere.globo.com/agora",
    bgColor: "bg-green-700",
  },
  {
    name: "Fox Sports",
    description: "Esportes americanos e futebol internacional.",
    imageUrl: "/futzone-stream-hub/imagens/foxsports.png",
    link: "https://www.foxsports.com/",
    bgColor: "bg-blue-900",
  },
  {
    name: "DAZN",
    description: "Transmissões esportivas sob demanda.",
    imageUrl: "/futzone-stream-hub/imagens/dazn.png",
    link: "https://www.dazn.com",
    bgColor: "bg-card",
  },
  {
    name: "SBT SPORTS",
    description: "Fique por dentro dos principais campeonatos e análises do SBT Sports.",
    imageUrl: "/futzone-stream-hub/imagens/sbtsports.png",
    link: "https://sports.sbt.com.br/",
    bgColor: "bg-green-600",
  },
  {
    name: "Band Sports",
    description: "O destino ideal para acompanhar seus esportes favoritos.",
    imageUrl: "/futzone-stream-hub/imagens/bandsports.png",
    link: "https://bandsports.uol.com.br/",
    bgColor: "bg-red-600",
  },
  {
    name: "Disney+",
    description: "Premier League e o melhor do futebol mundial.",
    imageUrl: "/futzone-stream-hub/imagens/disneyplus.png",
    link: "https://www.disneyplus.com",
    bgColor: "bg-blue-600",
  },
  {
    name: "YouTube CBF",
    description: "Canal oficial da Confederação Brasileira de Futebol.",
    imageUrl: "/futzone-stream-hub/imagens/bryoutube.png",
    link: "https://www.youtube.com/channel/UCdQuDaRww5NkKpQQ1BJBWww",
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
              <div key={channel.name} className="aspect-video rounded-xl overflow-hidden relative group cursor-pointer">
                <img
                  src={channel.imageUrl}
                  alt={channel.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white z-10">
                  <h3 className="font-bold text-lg group-hover:text-accent transition-colors">{channel.name}</h3>
                  <p className="text-sm opacity-90">{channel.description}</p>
                </div>
                <a
                  href={channel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-20"
                />
              </div>
            ))}
          </div>
        )}

        {/* Channels List View (mantido como antes) */}
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
                </div>
              </a>
            ))}
          </div>
        )}

        <Disclaimer />
      </main>

      <Footer />
    </div>
  );
};


export default Index;
