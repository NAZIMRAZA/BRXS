
import React from 'react';

interface TerminalSectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

const TerminalSection: React.FC<TerminalSectionProps> = ({ title, children, id }) => {
  return (
    <section id={id} className="mb-12 border-l-2 border-[#00FF41] pl-6 py-4 animate-in fade-in duration-700">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-[#00FF41] flex items-center">
        <span className="mr-2">$</span>
        {title}
      </h2>
      <div className="text-lg leading-relaxed opacity-90">
        {children}
      </div>
    </section>
  );
};

export default TerminalSection;
