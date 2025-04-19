import { useState, useEffect, ReactNode } from "react";
import { X, Minus, Square, Maximize2, Minimize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface WindowProps {
  id: string;
  title: string;
  icon: ReactNode;
  color: string;
  isOpen: boolean;
  zIndex: number;
  onClose: () => void;
  onFocus: () => void;
  children: ReactNode;
}

const Window = ({ 
  id, 
  title, 
  icon, 
  color, 
  isOpen, 
  zIndex, 
  onClose, 
  onFocus, 
  children 
}: WindowProps) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isDragging, setIsDragging] = useState(false);
  const [size, setSize] = useState({ width: 800, height: 600 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [prevSize, setPrevSize] = useState({ width: 800, height: 600 });
  const [prevPosition, setPrevPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    // Randomize initial position slightly to avoid windows stacking perfectly
    if (isOpen) {
      const randomX = Math.floor(Math.random() * 100);
      const randomY = Math.floor(Math.random() * 100);
      setPosition({ x: 50 + randomX, y: 50 + randomY });
    }
  }, [isOpen]);

  const toggleFullscreen = () => {
    if (isFullscreen) {
      setSize(prevSize);
      setPosition(prevPosition);
    } else {
      setPrevSize(size);
      setPrevPosition(position);
      setSize({ width: window.innerWidth, height: window.innerHeight - 100 });
      setPosition({ x: 0, y: 0 });
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{ 
            left: `${position.x}px`, 
            top: `${position.y}px`, 
            width: isFullscreen ? '100%' : `${size.width}px`, 
            height: isFullscreen ? '100%' : `${size.height}px`,
            zIndex 
          }}
          className="fixed rounded-lg overflow-hidden shadow-2xl border border-gray-800 bg-[#0A0A0A] flex flex-col window-shadow"
          onClick={onFocus}
        >
          {/* Window title bar */}
          <div 
            className="bg-[#161616] px-3 py-2 flex items-center justify-between cursor-move border-b border-gray-800"
            onMouseDown={() => {
              if (!isFullscreen) {
                setIsDragging(true);
                onFocus();
              }
            }}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={(e) => {
              if (isDragging && !isFullscreen) {
                setPosition({
                  x: position.x + e.movementX,
                  y: position.y + e.movementY
                });
              }
            }}
          >
            <div className="flex items-center space-x-2">
              {/* Window controls */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center group"
                aria-label="Close window"
              >
                <X className="w-2 h-2 text-red-800 opacity-0 group-hover:opacity-100" />
              </button>
              <button 
                className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center group"
                aria-label="Minimize window"
              >
                <Minus className="w-2 h-2 text-yellow-800 opacity-0 group-hover:opacity-100" />
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFullscreen();
                }}
                className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center group"
                aria-label="Toggle fullscreen"
              >
                {isFullscreen ? 
                  <Minimize2 className="w-2 h-2 text-green-800 opacity-0 group-hover:opacity-100" /> : 
                  <Maximize2 className="w-2 h-2 text-green-800 opacity-0 group-hover:opacity-100" />
                }
              </button>
            </div>

            {/* Window title */}
            <div className="flex items-center space-x-2 absolute left-1/2 transform -translate-x-1/2">
              <span className="text-gray-400">{icon}</span>
              <span className="font-medium text-gray-300 text-sm">{title}</span>
            </div>

            <div className="w-16"></div> {/* Spacer for balance */}
          </div>

          {/* Window content */}
          <div className="flex-1 overflow-auto p-4 bg-[#0A0A0A] text-gray-200 custom-scrollbar">
            {children}
          </div>

          {/* Resize handle for non-fullscreen windows */}
          {!isFullscreen && (
            <div 
              className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"
              onMouseDown={(e) => {
                e.stopPropagation();
                const startSize = { ...size };
                const startPosition = { x: e.clientX, y: e.clientY };
                
                const handleMouseMove = (moveEvent: MouseEvent) => {
                  const deltaX = moveEvent.clientX - startPosition.x;
                  const deltaY = moveEvent.clientY - startPosition.y;
                  
                  setSize({
                    width: Math.max(300, startSize.width + deltaX),
                    height: Math.max(200, startSize.height + deltaY)
                  });
                };
                
                const handleMouseUp = () => {
                  document.removeEventListener('mousemove', handleMouseMove);
                  document.removeEventListener('mouseup', handleMouseUp);
                };
                
                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
              }}
            >
              <div className="w-2 h-2 bg-gray-500 rounded-full absolute bottom-1 right-1 opacity-50"></div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Window; 