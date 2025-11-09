import { Link, useLocation } from "react-router-dom";
import { Home, Calendar, Tv, Users, Table, TrendingUp, Newspaper, Video, BookOpen, Info, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Navbar = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Jogos de Hoje", path: "/jogos-hoje", icon: Calendar },
    { name: "Streaming", path: "/", icon: Tv },
    { name: "Times", path: "/times", icon: Users },
    { name: "Tabelas", path: "/tabelas", icon: Table },
    { name: "Mercado da Bola", path: "/mercado", icon: TrendingUp },
    { name: "Notícias", path: "/noticias", icon: Newspaper },
    { name: "Vídeos", path: "/videos", icon: Video },
    { name: "Blog", path: "/blog", icon: BookOpen },
    { name: "Sobre Nós", path: "/sobre", icon: Info },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-6 h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Tv className="h-6 w-6 text-accent" />
            <span className="text-xl font-bold text-foreground">FutZone</span>
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
