import { useState, useEffect } from "react";
import { Wifi, Bluetooth, Battery, Volume2, Calendar, Clock } from "lucide-react";

const TopBar = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<string>("");
  const [batteryLevel, setBatteryLevel] = useState<number>(85);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const formattedTime = `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
      
      const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' };
      const formattedDate = now.toLocaleDateString('en-US', options);
      
      setCurrentTime(formattedTime);
      setCurrentDate(formattedDate);
    };

    // Initial update
    updateTime();

    // Set interval for updates
    const interval = setInterval(updateTime, 60000);

    // Clean up interval
    return () => clearInterval(interval);
  }, []);

  // Simulate battery drain (just for effect)
  useEffect(() => {
    const interval = setInterval(() => {
      setBatteryLevel(prev => {
        // Random fluctuation between -1 and +1
        const change = Math.random() > 0.7 ? -1 : (Math.random() > 0.7 ? 1 : 0);
        const newLevel = prev + change;
        return Math.min(Math.max(newLevel, 5), 100); // Keep between 5% and 100%
      });
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-7 bg-black/80 backdrop-blur-md border-b border-white/10 px-3 flex items-center justify-between text-white z-50">
      {/* Left side - Logo/initials */}
      <div className="flex items-center">
        <div className="font-semibold text-sm">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">MK-OS</span>
        </div>
      </div>

      {/* Center - Date and time */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
        <span className={`text-xs font-medium ${isMobile ? 'hidden sm:inline' : ''}`}>{currentDate}</span>
        <span className="text-xs font-medium">{currentTime}</span>
      </div>

      {/* Right side - System icons */}
      <div className="flex items-center gap-3 text-xs">
        {!isMobile && (
          <div className="flex items-center gap-1.5">
            <Volume2 className="h-3.5 w-3.5 text-gray-300" />
          </div>
        )}
        <div className="flex items-center gap-1.5">
          <Wifi className="h-3.5 w-3.5 text-gray-300" />
        </div>
        {!isMobile && (
          <div className="flex items-center gap-1.5">
            <Bluetooth className="h-3.5 w-3.5 text-gray-300" />
          </div>
        )}
        <div className="flex items-center gap-1.5 mr-1">
          <div className="relative">
            <Battery className="h-3.5 w-3.5 text-gray-300" />
            <div 
              className="absolute top-[45%] left-[2px] transform -translate-y-1/2 h-[3px] bg-green-400 rounded-sm"
              style={{ width: `${(batteryLevel / 100) * 10}px` }}
            />
          </div>
          <span className={`text-xs text-gray-300 ${isMobile ? 'hidden sm:inline' : ''}`}>{batteryLevel}%</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar; 