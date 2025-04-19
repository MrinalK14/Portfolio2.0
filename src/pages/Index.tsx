import { useEffect } from "react";
import Desktop from "@/components/os/Desktop";

const Index = () => {
  useEffect(() => {
    // Prevent scrolling on the OS interface
    document.body.style.overflow = "hidden";
    
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  
  return <Desktop />;
};

export default Index;
