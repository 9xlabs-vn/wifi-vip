import React from 'react';

interface BlurredBackgroundProps {
  children: React.ReactNode;
}

const BlurredBackground: React.FC<BlurredBackgroundProps> = ({ children }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BlurredBackground;
