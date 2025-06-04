import { useState, useEffect, ReactNode, useRef } from "react";
import { X, Minus, Square, Maximize2, Minimize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MobileWrapper from "../ui/MobileWrapper";

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
  const [isMobile, setIsMobile] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      
      // If window is already open, adjust its size for mobile
      if (isOpen && windowRef.current) {
        handleWindowResize();
      }
    };
    
    const handleWindowResize = () => {
      if (isMobile) {
        // Mobile device - use almost full screen
        setSize({
          width: window.innerWidth * 0.95,
          height: window.innerHeight * 0.7
        });
        setPosition({
          x: window.innerWidth * 0.025,
          y: window.innerHeight * 0.1
        });
      } else if (!isFullscreen) {
        // Desktop - make sure window fits within the viewport
        const maxWidth = Math.min(800, window.innerWidth * 0.9);
        const maxHeight = Math.min(600, window.innerHeight * 0.8);
        setSize({ width: maxWidth, height: maxHeight });
        
        // Ensure window is visible in viewport
        const newPosition = keepWindowInBounds(position);
        if (newPosition.x !== position.x || newPosition.y !== position.y) {
          setPosition(newPosition);
        }
      }
    };
    
    checkMobile();
    window.addEventListener('resize', handleWindowResize);
    
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [isMobile, isOpen, isFullscreen]);

  // Set window size and position based on device
  useEffect(() => {
    if (isOpen) {
      if (isMobile) {
        // Mobile device - use almost full screen
        setSize({
          width: window.innerWidth * 0.95,
          height: window.innerHeight * 0.7
        });
        setPosition({
          x: window.innerWidth * 0.025,
          y: window.innerHeight * 0.1
        });
      } else {
        // Desktop - randomize position slightly
        const randomX = Math.floor(Math.random() * 100);
        const randomY = Math.floor(Math.random() * 100);
        setPosition({ x: 50 + randomX, y: 50 + randomY });
        
        // Make sure window fits within the viewport
        const maxWidth = Math.min(800, window.innerWidth * 0.9);
        const maxHeight = Math.min(600, window.innerHeight * 0.8);
        setSize({ width: maxWidth, height: maxHeight });
      }
    }
  }, [isOpen, isMobile]);

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

  // Ensure window stays within viewport bounds after dragging
  const keepWindowInBounds = (pos: {x: number, y: number}) => {
    const minX = 0;
    const minY = 0;
    const maxX = window.innerWidth - size.width;
    const maxY = window.innerHeight - size.height;
    
    return {
      x: Math.max(minX, Math.min(maxX, pos.x)),
      y: Math.max(minY, Math.min(maxY, pos.y))
    };
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={windowRef}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{ 
            left: `${position.x}px`, 
            top: `${position.y}px`, 
            width: isFullscreen || isMobile ? '100%' : `${size.width}px`, 
            height: isFullscreen ? '100%' : `${size.height}px`,
            zIndex 
          }}
          className={`fixed rounded-lg overflow-hidden shadow-2xl border border-gray-800 bg-[#0A0A0A] flex flex-col window-shadow ${isMobile ? 'w-[95vw] mx-auto left-0 right-0 max-h-[80vh]' : ''}`}
          onClick={onFocus}
        >
          {/* Window title bar */}
          <div 
            className="bg-[#161616] px-3 py-2 flex items-center justify-between cursor-move border-b border-gray-800 window-header"
            onMouseDown={() => {
              if (!isFullscreen && !isMobile) {
                setIsDragging(true);
                onFocus();
              }
            }}
            onTouchStart={() => {
              onFocus();
            }}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={(e) => {
              if (isDragging && !isFullscreen && !isMobile) {
                const newPosition = {
                  x: position.x + e.movementX,
                  y: position.y + e.movementY
                };
                setPosition(keepWindowInBounds(newPosition));
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
                className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center group window-control"
                aria-label="Close window"
              >
                <X className="w-2 h-2 text-red-800 opacity-0 group-hover:opacity-100" />
              </button>
              <button 
                className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center group window-control"
                aria-label="Minimize window"
              >
                <Minus className="w-2 h-2 text-yellow-800 opacity-0 group-hover:opacity-100" />
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFullscreen();
                }}
                className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center group window-control"
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
              <span className="font-medium text-gray-300 text-sm truncate max-w-[150px] md:max-w-none">{title}</span>
            </div>

            <div className="w-16"></div> {/* Spacer for balance */}
          </div>

          {/* Window content */}
          <div className="flex-1 overflow-auto p-4 bg-[#0A0A0A] text-gray-200 custom-scrollbar scroll-momentum">
            <MobileWrapper>
              {children}
            </MobileWrapper>
          </div>

          {/* Resize handle for non-fullscreen windows */}
          {!isFullscreen && !isMobile && (
            <div 
              className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize resize-handle"
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