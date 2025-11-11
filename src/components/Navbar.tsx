import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Calendar,
  Users,
  Table,
  TrendingUp,
  Newspaper,
  Video,
  BookOpen,
  LucidePodcast,
  Play,
  Search,
} from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// ✅ Importando seu logo local (verifique se o arquivo existe neste caminho)
import logo from "/imagens/meu-logo.svg";

const Navbar = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Jogos", path: "/jogos-hoje", icon: Calendar },
    { name: "Streaming", path: "/streaming", icon: Play },
    { name: "Times", path: "/times", icon: Users },
    { name: "Tabelas", path: "/tabelas", icon: Table },
    { name: "MDB", path: "/mercado", icon: TrendingUp },
    { name: "Notícias", path: "/noticias", icon: Newspaper },
    { name: "Vídeos", path: "/videos", icon: Video },
    { name: "Blog", path: "/blog", icon: BookOpen },
    { name: "+", path: "/podcast", icon: LucidePodcast },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-6 h-16">
          {/* ✅ Logo personalizado */}
          <Link to="/" className="flex items-center space-x-3">
  <img
    src={logo}
    alt="FutZone Logo"
    className="h-10 md:h-12 lg:h-14 w-auto rounded-lg shadow-md transition-all duration-300"
    style={{ objectFit: "contain" }}
  />
  <span className="text-base font-bold text-foreground hidden sm:inline">
    FutZone
  </span>
</Link>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link flex items-center space-x-1 text-sm ${
                    isActive ? "nav-link-active" : ""
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-64 hidden lg:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Procurar"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-search-bg border-border"
            />
          </div>
        </div>

        {/* Mobile Navigation Carousel */}
        <div className="lg:hidden pb-3">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <CarouselItem key={item.path} className="basis-auto pl-2">
                    <Link
                      to={item.path}
                      className={`nav-link flex items-center space-x-1 text-sm whitespace-nowrap transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                        isActive ? "nav-link-active" : ""
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Procurar"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-search-bg border-border"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
