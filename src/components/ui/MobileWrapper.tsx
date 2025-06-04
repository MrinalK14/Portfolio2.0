import React, { ReactNode } from 'react';

interface MobileWrapperProps {
  children: ReactNode;
}

/**
 * A wrapper component that makes content more mobile-friendly
 * without changing its desktop appearance
 */
const MobileWrapper: React.FC<MobileWrapperProps> = ({ children }) => {
  return (
    <div className="mobile-content">
      {children}
    </div>
  );
};

export default MobileWrapper; 