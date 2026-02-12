
import React, { useState, useEffect } from 'react';
import { BOOT_SEQUENCE } from '../constants';

interface BootSequenceProps {
  onComplete: () => void;
}

const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  useEffect(() => {
    // Safety check for BOOT_SEQUENCE
    if (!BOOT_SEQUENCE || BOOT_SEQUENCE.length === 0) {
      onComplete();
      return;
    }

    if (visibleLines.length < BOOT_SEQUENCE.length) {
      // Get the current line configuration
      const currentLineConfig = BOOT_SEQUENCE[visibleLines.length];
      
      if (currentLineConfig) {
        const timer = setTimeout(() => {
          setVisibleLines(prev => [...prev, currentLineConfig.text]);
        }, currentLineConfig.delay || 500);

        return () => clearTimeout(timer);
      }
    } else {
      // Sequence finished, wait a bit before calling onComplete
      const finalTimer = setTimeout(onComplete, 1000);
      return () => clearTimeout(finalTimer);
    }
  }, [visibleLines.length, onComplete]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-black">
      <div className="w-full max-w-xl text-left font-mono text-[#00FF41]">
        {visibleLines.map((line, idx) => (
          <div key={idx} className="mb-2 flex items-start">
            <span className="mr-2 flex-shrink-0">&gt;</span>
            <span>{line}</span>
          </div>
        ))}
        {visibleLines.length < BOOT_SEQUENCE.length && (
          <div className="cursor-blink flex items-start">
            <span className="mr-2 flex-shrink-0">&gt;</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BootSequence;
