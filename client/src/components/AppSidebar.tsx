import { Calendar, BookOpen, Newspaper, Sparkles, BookOpenText, Cross, Heart } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "wouter";
import ThemeToggle from "./ThemeToggle";
import { Badge } from "@/components/ui/badge";

const menuItems = [
  {
    title: "Liturgia",
    url: "/",
    icon: BookOpen,
  },
  {
    title: "Notizie",
    url: "/news",
    icon: Newspaper,
  },
  {
    title: "Calendario",
    url: "/calendario",
    icon: Calendar,
  },
  {
    title: "Santi",
    url: "/santi",
    icon: Cross,
  },
  {
    title: "Almanacco",
    url: "/almanacco",
    icon: BookOpenText,
  },
  {
    title: "Preghiere",
    url: "/preghiere",
    icon: Heart,
  },
];

export function AppSidebar() {
  

const wouterLoc = useLocation?.();
const location = wouterLoc ? wouterLoc[0] : "/";

  return (
    <Sidebar data-testid="sidebar-main">
      <SidebarHeader className="border-b p-4 space-y-2">
        <div className="space-y-1">
          <h2 className="font-display text-xl uppercase tracking-wide" data-testid="text-app-title">
            Almanacco
          </h2>
          <p className="text-xs text-muted-foreground font-serif">Cattolico</p>
        </div>
        <Badge 
          variant="outline" 
          className="gap-1 px-2 py-0.5 bg-primary/10 border-primary/30 w-fit"
        >
          <Sparkles className="h-3 w-3" />
          <span className="text-xs">Frate AI</span>
        </Badge>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-sans text-xs">Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={location === item.url}
                    data-testid={`link-${item.title.toLowerCase()}`}
                  >
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t p-4 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {new Date().toLocaleDateString('it-IT', { 
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            })}
          </span>
          <ThemeToggle />
        </div>
        <p className="text-xs text-muted-foreground font-serif italic text-center pt-1">
          "Laudato si', mi' Signore"
        </p>
      </SidebarFooter>
    </Sidebar>
  );
}
