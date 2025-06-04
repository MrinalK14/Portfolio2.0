import { useEffect } from "react";
import Desktop from "@/components/os/Desktop";

const Index = () => {
  useEffect(() => {
    // Prevent scrolling on the OS interface
    document.body.style.overflow = "hidden";
    
    // Prevent default touch behavior on mobile
    const preventDefaultTouchBehavior = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };
    
    // Prevent pinch-zoom gesture
    document.addEventListener('touchmove', preventDefaultTouchBehavior, { passive: false });
    
    // Add meta viewport to prevent scaling
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (viewportMeta) {
      viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }
    
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener('touchmove', preventDefaultTouchBehavior);
    };
  }, []);
  
  return <Desktop />;
};

export default Index;
