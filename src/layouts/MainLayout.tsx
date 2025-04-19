
import { useEffect } from "react";
import Spotlight from "@/components/ui/spotlight";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  useEffect(() => {
    // Set dark theme as default
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);
  
  return (
    <Spotlight className="min-h-screen">
      <main>{children}</main>
    </Spotlight>
  );
};

export default MainLayout;
