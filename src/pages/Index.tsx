import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChannelCard from "@/components/ChannelCard";
import Disclaimer from "@/components/Disclaimer";

const Index = () => {
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
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Assista Agora:
          </h1>
          <p className="text-muted-foreground">
            Acesse os melhores canais esportivos e plataformas de streaming
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
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

        {/* Disclaimer */}
        <Disclaimer />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
