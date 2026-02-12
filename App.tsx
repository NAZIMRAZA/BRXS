
import React, { useState, useEffect } from 'react';
import { AppState } from './types';
import MatrixRain from './components/MatrixRain';
import BootSequence from './components/BootSequence';
import TerminalSection from './components/TerminalSection';
import { TOKENOMICS_LINES, ASCII_DIVIDER } from './constants';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.BOOTING);

  useEffect(() => {
    // Optionally skip boot in local storage or session for faster dev
    // For production, the immersion is key.
  }, []);

  if (appState === AppState.BOOTING) {
    return (
      <main className="bg-black min-h-screen text-[#00FF41]">
        <BootSequence onComplete={() => setAppState(AppState.READY)} />
      </main>
    );
  }

  return (
    <div className="bg-black min-h-screen text-[#00FF41] selection:bg-[#00FF41] selection:text-black scroll-smooth">
      <MatrixRain />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-[#004d13] py-3 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center font-mono text-xs md:text-sm">
          <div className="font-bold glitch-text cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            BRICSTARTER_v1.0
          </div>
          <div className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar">
            <a href="#about" className="hover:text-white transition-colors">[ABOUT]</a>
            <a href="#tokenomics" className="hover:text-white transition-colors">[TOKENOMICS]</a>
            <a href="#roadmap" className="hover:text-white transition-colors">[ROADMAP]</a>
            <a href="#socials" className="hover:text-white transition-colors">[CONNECT]</a>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-24 pb-32">
        {/* 1. HERO SECTION */}
        <header className="min-h-[70vh] flex flex-col justify-center items-start mb-20 animate-in slide-in-from-bottom duration-1000">
          <h1 className="text-5xl md:text-8xl font-bold mb-4 tracking-tighter text-[#00FF41]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            BRICSTARTER
          </h1>
          <p className="text-xl md:text-3xl font-mono mb-8 opacity-80">
            The Meme Coin for a Multipolar World
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 w-full max-w-lg font-mono text-lg italic">
            <div className="border border-[#004d13] p-2 hover:bg-[#004d13]/20 transition-all">East &gt; West</div>
            <div className="border border-[#004d13] p-2 hover:bg-[#004d13]/20 transition-all">Gold &gt; Fiat</div>
            <div className="border border-[#004d13] p-2 hover:bg-[#004d13]/20 transition-all">BRICS &gt; Dollar</div>
          </div>

          <div className="text-sm md:text-base mb-8 font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00FF41] animate-pulse"></span>
            Built on Solana ⚡
          </div>

          <div className="flex flex-wrap gap-6">
            <button className="px-8 py-3 border-2 border-[#00FF41] hover:bg-[#00FF41] hover:text-black font-bold transition-all transform hover:-translate-y-1">
              [ BUY $BRXS ]
            </button>
            <button className="px-8 py-3 border-2 border-[#004d13] hover:border-[#00FF41] transition-all transform hover:-translate-y-1">
              [ VIEW CHART ]
            </button>
          </div>
        </header>

        {/* 2. ABOUT SECTION */}
        <TerminalSection title="system_info --token BRXS" id="about">
          <div className="space-y-4">
            <p>BRICSTARTER ($BRXS) is a Solana-based meme coin inspired by the global shift toward a multipolar world.</p>
            <div className="space-y-1 opacity-80 border-l border-[#004d13] pl-4 italic">
              <p>No artificial utility.</p>
              <p>No fabricated promises.</p>
              <p>No centralized control.</p>
            </div>
            <div className="pt-4 space-y-1">
              <p>This is narrative.</p>
              <p>This is digital sovereignty.</p>
              <p>This is community-driven momentum.</p>
            </div>
            <div className="cursor-blink mt-6 text-2xl"></div>
          </div>
        </TerminalSection>

        {/* 3. TOKENOMICS */}
        <TerminalSection title="tokenomics --display" id="tokenomics">
          <div className="font-mono bg-[#004d13]/10 p-6 border border-[#004d13] overflow-x-auto">
            <pre className="whitespace-pre">
              {ASCII_DIVIDER}<br/>
              {TOKENOMICS_LINES.join('\n')}<br/>
              {ASCII_DIVIDER}
            </pre>
          </div>
        </TerminalSection>

        {/* 4. HOW TO BUY */}
        <TerminalSection title="execute_purchase_protocol" id="buy">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-[#004d13] font-bold">01</span>
              <div>
                <p className="font-bold">Download Phantom Wallet</p>
                <p className="text-sm opacity-60">Install the browser extension or mobile app.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#004d13] font-bold">02</span>
              <div>
                <p className="font-bold">Acquire SOL</p>
                <p className="text-sm opacity-60">Purchase SOL from any major CEX and transfer to wallet.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#004d13] font-bold">03</span>
              <div>
                <p className="font-bold">Access Raydium DEX</p>
                <p className="text-sm opacity-60">Connect your wallet to the decentralized exchange.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#004d13] font-bold">04</span>
              <div>
                <p className="font-bold">Swap SOL for BRXS</p>
                <p className="text-sm opacity-60">Execute the swap and confirm the transaction.</p>
              </div>
            </div>
          </div>
        </TerminalSection>

        {/* 5. ROADMAP */}
        <TerminalSection title="roadmap --timeline" id="roadmap">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-[#004d13] p-4 hover:border-[#00FF41] transition-all group">
              <h3 className="text-lg font-bold mb-4 text-white group-hover:text-[#00FF41]">PHASE 01: GENESIS</h3>
              <ul className="text-sm space-y-2 opacity-80 list-none p-0">
                <li>• Launch</li>
                <li>• 1,000 Holders</li>
                <li>• DexScreener Listing</li>
              </ul>
            </div>
            <div className="border border-[#004d13] p-4 hover:border-[#00FF41] transition-all group">
              <h3 className="text-lg font-bold mb-4 text-white group-hover:text-[#00FF41]">PHASE 02: EXPANSION</h3>
              <ul className="text-sm space-y-2 opacity-80 list-none p-0">
                <li>• 10,000 Holders</li>
                <li>• CoinGecko Application</li>
                <li>• Community Growth</li>
              </ul>
            </div>
            <div className="border border-[#004d13] p-4 hover:border-[#00FF41] transition-all group">
              <h3 className="text-lg font-bold mb-4 text-white group-hover:text-[#00FF41]">PHASE 03: MOMENTUM</h3>
              <ul className="text-sm space-y-2 opacity-80 list-none p-0">
                <li>• 50,000+ Holders</li>
                <li>• CEX Exploration</li>
                <li>• Global Meme Awareness</li>
              </ul>
            </div>
          </div>
        </TerminalSection>

        {/* 6. SOCIALS */}
        <TerminalSection title="connect --network" id="socials">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono">
            <a href="#" className="flex items-center justify-center p-4 border border-[#004d13] hover:bg-[#00FF41] hover:text-black transition-all">
              [ X / TWITTER ]
            </a>
            <a href="#" className="flex items-center justify-center p-4 border border-[#004d13] hover:bg-[#00FF41] hover:text-black transition-all">
              [ TELEGRAM ]
            </a>
            <a href="#" className="flex items-center justify-center p-4 border border-[#004d13] hover:bg-[#00FF41] hover:text-black transition-all">
              [ DEXSCREENER ]
            </a>
            <a href="#" className="flex items-center justify-center p-4 border border-[#004d13] hover:bg-[#00FF41] hover:text-black transition-all">
              [ COINGECKO ]
            </a>
          </div>
        </TerminalSection>

        {/* 7. DISCLAIMER */}
        <section className="mt-20 border-2 border-red-900/30 bg-red-900/10 p-8 animate-pulse-slow">
          <h2 className="text-red-500 font-bold mb-4 flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            warning --readcarefully
          </h2>
          <div className="text-sm text-red-400 space-y-2 leading-relaxed opacity-90">
            <p>This token is a meme coin with no intrinsic value and no expectation of financial return.</p>
            <p>Cryptocurrency investments are highly volatile and risky.</p>
            <p>Do your own research. Not financial advice.</p>
          </div>
        </section>

        {/* Footer info */}
        <footer className="mt-20 pt-10 border-t border-[#004d13] flex flex-col md:flex-row justify-between items-center text-xs opacity-40 font-mono gap-4">
          <div>© {new Date().getFullYear()} BRICSTARTER TERMINAL INTERFACE</div>
          <div>STATUS: ONLINE_CONNECTED</div>
          <div>SOLANA_RPC: STABLE</div>
        </footer>
      </main>

      {/* Floating Action Button for smaller screens to go top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 border border-[#00FF41] bg-black flex items-center justify-center hover:bg-[#00FF41] hover:text-black transition-all z-50 md:hidden"
      >
        ↑
      </button>
    </div>
  );
};

export default App;
