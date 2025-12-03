import { Switch, Route, Link, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Calendar, BookOpen, Newspaper, Cross, BookOpenText, Heart } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import Liturgia from "@/pages/liturgia";
import News from "@/pages/news";
import NewsDetail from "@/pages/news-detail";
import Calendario from "@/pages/calendario";
import Santi from "@/pages/santi";
import Almanacco from "@/pages/almanacco";
import Preghiere from "@/pages/preghiere";
import NotFound from "@/pages/not-found";

import ChatPage from "@/pages/chat";


const navItems = [
  { title: "Chat", url: "/chat", icon: BookOpen },

  { title: "Liturgia", url: "/", icon: BookOpen },
  { title: "Notizie", url: "/news", icon: Newspaper },
  { title: "Calendario", url: "/calendario", icon: Calendar },
  { title: "Santi", url: "/santi", icon: Cross },
  { title: "Almanacco", url: "/almanacco", icon: BookOpenText },
  { title: "Preghiere", url: "/preghiere", icon: Heart },
];

function Router() {
  return (
    <Switch>
      <Route path="/chat" component={ChatPage} />
      <Route path="/" component={Liturgia} />
      <Route path="/liturgia" component={Liturgia} />
      <Route path="/news/:id" component={NewsDetail} />
      <Route path="/news" component={News} />
      <Route path="/calendario" component={Calendario} />
      <Route path="/santi" component={Santi} />
      <Route path="/almanacco" component={Almanacco} />
      <Route path="/preghiere" component={Preghiere} />
      <Route component={NotFound} />
    </Switch>
  );
}

function AppHeader() {
  const [location] = useLocation();
  
  const isActive = (url: string) => {
    if (url === "/" && location === "/") return true;
    if (url !== "/" && location.startsWith(url)) return true;
    return false;
  };

  return (
    <header className="bg-gradient-to-r from-primary/20 via-primary/10 to-background border-b sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-gradient-to-r supports-[backdrop-filter]:from-primary/15 supports-[backdrop-filter]:via-primary/8 supports-[backdrop-filter]:to-background/80">
      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-3">
          <SidebarTrigger data-testid="button-sidebar-toggle" />
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.url);
              return (
                <Link key={item.url} href={item.url}>
                  <button
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all hover-elevate active-elevate-2 ${
                      active 
                        ? 'bg-primary/20 text-foreground border border-primary/30' 
                        : 'text-foreground/70 hover:text-foreground'
                    }`}
                    data-testid={`nav-tab-${item.title.toLowerCase()}`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden xl:inline">{item.title}</span>
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-foreground/80 hidden md:block">
            {new Date().toLocaleDateString('it-IT', { 
              weekday: 'long',
              day: 'numeric',
              month: 'long'
            })}
          </span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default function App() {
  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SidebarProvider style={style as React.CSSProperties}>
          <div className="flex h-screen w-full">
            <AppSidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
              <AppHeader />
              <main className="flex-1 overflow-y-auto">
                <Router />
              </main>
            </div>
          </div>
        </SidebarProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
