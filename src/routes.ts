import { Home, Calendar, Users, Table, TrendingUp, Newspaper, Video, BookOpen, LucidePodcast, Play } from "lucide-react";
import HomePage from "./pages/Home";
import JogosPage from "./pages/jogos";
import StreamingPage from "./pages/Streaming";
import TimesPage from "./pages/Times";
import TabelasPage from "./pages/Tabelas";
import MercadoPage from "./pages/Mercado";
import NoticiasPage from "./pages/Noticias";
import VideosPage from "./pages/Videos";
import BlogPage from "./pages/Blog";
import PodcastPage from "./pages/Podcast";
import AboutPage from "./pages/About";
import LegalPage from "./pages/Legal";
import PrivacyPage from "./pages/Privacy";
import FAQPage from "./pages/FAQ";
import ContactPage from "./pages/Contact";

export interface RouteItem {
  name: string;
  path: string;
  icon: any;
  component: React.ComponentType;
}

export const routes: RouteItem[] = [
  { name: "Home", path: "/", icon: Home, component: HomePage },
  { name: "Jogos", path: "/jogos-hoje", icon: Calendar, component: JogosPage },
  { name: "Streaming", path: "/streaming", icon: Play, component: StreamingPage },
  { name: "Times", path: "/times", icon: Users, component: TimesPage },
  { name: "Tabelas", path: "/tabelas", icon: Table, component: TabelasPage },
  { name: "MDB", path: "/mercado", icon: TrendingUp, component: MercadoPage },
  { name: "Notícias", path: "/noticias", icon: Newspaper, component: NoticiasPage },
  { name: "Vídeos", path: "/videos", icon: Video, component: VideosPage },
  { name: "Blog", path: "/blog", icon: BookOpen, component: BlogPage },
  { name: "+", path: "/podcast", icon: LucidePodcast, component: PodcastPage },
];
export const footerRoutes = [
  { name: "Sobre Nós", path: "/sobre", component: AboutPage },
  { name: "Aviso Legal", path: "/aviso-legal", component: LegalPage },
  { name: "Política de Privacidade", path: "/privacidade", component: PrivacyPage },
  { name: "FAQ", path: "/faq", component: FAQPage },
  { name: "Contato", path: "/contato", component: ContactPage },
];
