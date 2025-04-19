
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface NeonGradientCardProps extends React.HTMLAttributes<HTMLDivElement> {
  gradientColor?: string;
  glowColor?: string;
  children: React.ReactNode;
}

const NeonGradientCard = ({
  gradientColor = "from-pink-500 via-red-500 to-yellow-500",
  glowColor = "group-hover:shadow-pink-500/40",
  children,
  className,
  ...props
}: NeonGradientCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from center (as a percentage of card width/height)
    const rotateXValue = ((e.clientY - centerY) / (rect.height / 2)) * 5;
    const rotateYValue = ((centerX - e.clientX) / (rect.width / 2)) * 5;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative rounded-xl transition-all duration-300 ease-out",
        className
      )}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div className="absolute -inset-1 rounded-xl bg-gradient-to-br opacity-50 blur-xl transition-all duration-300 ease-out group-hover:opacity-100 group-hover:blur-xl bg-gradient-to-br group-hover:-inset-1.5"></div>
      <div
        className={cn(
          "relative flex h-full items-center justify-center overflow-hidden rounded-xl border border-slate-800 bg-slate-900/90 p-4 transition-all duration-300 ease-out",
          "group-hover:border-slate-700/60 group-hover:shadow-2xl",
          glowColor
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default NeonGradientCard;
