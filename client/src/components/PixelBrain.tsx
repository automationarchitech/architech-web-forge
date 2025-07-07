
import { useEffect, useState } from 'react';

const PixelBrain = () => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 4);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  // Define the brain pattern as a 16x12 grid
  const brainPattern = [
    [0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0],
  ];

  const getPixelOpacity = (row: number, col: number, baseValue: number) => {
    if (baseValue === 0) return 0;
    
    const distance = Math.sqrt(Math.pow(row - 6, 2) + Math.pow(col - 8, 2));
    const maxDistance = 8;
    const normalizedDistance = distance / maxDistance;
    
    let opacity = 1;
    
    switch (animationPhase) {
      case 0: // Full brain
        opacity = 1;
        break;
      case 1: // Dissolving from outside
        opacity = Math.max(0, 1 - (normalizedDistance * 1.5));
        break;
      case 2: // Minimal core
        opacity = normalizedDistance < 0.3 ? 1 : 0;
        break;
      case 3: // Reforming
        opacity = Math.max(0, normalizedDistance < 0.8 ? 1 : Math.random() * 0.8);
        break;
    }
    
    return Math.max(0, Math.min(1, opacity));
  };

  return (
    <div className="flex justify-center items-center">
      <div 
        className="gap-0.5 p-4"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(16, 1fr)',
          gridTemplateRows: 'repeat(12, 1fr)'
        }}
      >
        {brainPattern.map((row, rowIndex) =>
          row.map((pixel, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="w-2 h-2 transition-opacity duration-300"
              style={{
                opacity: getPixelOpacity(rowIndex, colIndex, pixel),
                backgroundColor: pixel ? '#6B7280' : 'transparent'
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default PixelBrain;
