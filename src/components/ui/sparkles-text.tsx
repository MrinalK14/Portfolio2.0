
"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SparkleProps {
  id: string;
  createdAt: number;
  color: string;
  size: number;
  style: {
    top: string;
    left: string;
    zIndex: number;
    transform: string;
    opacity: number;
    position: "absolute";
    animation: string;
  };
}

export const generateSparkle = (color: string): SparkleProps => {
  return {
    id: Math.random().toString(36).substring(2),
    createdAt: Date.now(),
    color,
    size: Math.random() * 5 + 5,
    style: {
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      zIndex: 2,
      transform: `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.5 + 0.5})`,
      opacity: 1,
      position: "absolute",
      animation: `sparkle-animation-${Math.random() * 1000} 1s forwards`,
    },
  };
};

const Sparkle = ({ color, size, style }: Omit<SparkleProps, "id" | "createdAt">) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
        fill={color}
      />
    </svg>
  );
};

interface SparklesTextProps {
  children: React.ReactNode;
  className?: string;
  sparklesColor?: string;
  minSparkles?: number;
  maxSparkles?: number;
  sparkleInterval?: number;
}

const SparklesText = ({
  children,
  className,
  sparklesColor = "#FFC700",
  minSparkles = 5,
  maxSparkles = 8,
  sparkleInterval = 400,
}: SparklesTextProps) => {
  const [sparkles, setSparkles] = useState<SparkleProps[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const sparklesAmount = Math.floor(Math.random() * (maxSparkles - minSparkles + 1)) + minSparkles;
      
      // Remove old sparkles
      setSparkles((prevSparkles) => 
        prevSparkles.filter((sparkle) => now - sparkle.createdAt < 1000)
      );
      
      // Add new sparkles
      const newSparkles = Array.from({ length: sparklesAmount }).map(() => 
        generateSparkle(sparklesColor)
      );
      
      setSparkles((prevSparkles) => [...prevSparkles, ...newSparkles]);
    }, sparkleInterval);

    return () => clearInterval(interval);
  }, [maxSparkles, minSparkles, sparkleInterval, sparklesColor]);

  return (
    <span className={cn("relative inline-block", className)}>
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <span className="relative z-10">{children}</span>
    </span>
  );
};

export default SparklesText;
