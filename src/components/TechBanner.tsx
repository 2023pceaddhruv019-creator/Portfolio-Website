import React from 'react';

export default function TechBanner() {
  return (
    <div className="w-full bg-transparent py-4 border-t border-b border-zinc-900/40 mt-12 mb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Floating rounded border capsule container matching the design */}
        <div className="w-full bg-black/40 backdrop-blur-md border border-zinc-800/40 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-4 relative overflow-hidden group">
          {/* Subtle overlay light effect */}
          <div className="absolute -inset-y-12 -left-12 w-48 bg-gradient-to-r from-brand-red/5 to-transparent blur-2xl rounded-full" />
          
          {/* Title Header */}
          <div className="flex flex-col gap-1 z-10">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
              Trusted technologies
            </span>
            <span className="text-xs sm:text-sm font-sans text-zinc-300 font-medium">
              I work with
            </span>
          </div>

          {/* Logos Row - Flexible wrapping grid/flex with high fidelity SVGs */}
          <div className="flex flex-wrap items-center gap-x-8 sm:gap-x-12 gap-y-6 w-full md:w-auto md:flex-1 justify-around md:justify-end z-10">
            
            {/* OpenAI */}
            <div className="flex items-center gap-2 hover:opacity-100 opacity-65 transition-all duration-300 hover:scale-105 cursor-pointer">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M21.74 11.23c-.1-.38-.28-.7-.52-1.02a6.04 6.04 0 0 0-4-.89 6.04 6.04 0 0 0-1.87-4.14A6.1 6.1 0 0 0 11.26 4a6.11 6.11 0 0 0-4.15 1.87A5.94 5.94 0 0 0 3 8.35c0 1.25.38 2.37 1 3.32a6.04 6.04 0 0 0-1.74 4.1c0 1.63.66 3.1 1.74 4.14A6.11 6.11 0 0 0 12.16 20a6.11 6.11 0 0 0 4.14-1.87 5.94 5.94 0 0 0 4.14-2.48c.84-1.2 1.3-2.6 1.3-4.42zm-12.44 6a4.2 4.2 0 0 1-1.4-.24l3.1-1.8a.74.74 0 0 0 .37-.64V10.2L14.7 12a.14.14 0 0 1 .07.13v3.52c0 .9-.5 1.72-1.28 2.18s-1.72.4-2.58-.2-2.18-1.28-2.18-2.22v.22zm-3-3.61c0-.49.33-.94.79-1.13l3.11-1.79.05-.03-1.63-2.82c-.44-.76-.44-1.72 0-2.48s1.26-1.18 2.13-1.18h.12v3.6a.71.71 0 0 0 .37.64l3.1 1.79-1.63 2.83a.13.13 0 0 1-.13.07H8c-1 0-1.7-.8-1.7-1.8zm3.25-8.47a4.2 4.2 0 0 1 1.15-.84l1.63 2.82V10.2a.74.74 0 0 0 .37.64l3.1 1.79V5.45c0-1 .5-1.91 1.28-2.36s1.72-.45 2.5-.02a4.2 4.2 0 0 1 1.4.95l-3.23 1.87a.74.74 0 0 0-.37.64v3.52l-3.32-1.92a.14.14 0 0 1-.07-.13V5.15zM21 15.65c-.44.76-1.24 1.18-2.11 1.18h-.12V13.2a.71.71 0 0 0-.37-.64l-3.1-1.79 1.63-2.83a.13.13 0 0 1 .13-.07h4.31c1 0 1.7.8 1.7 1.8v.32c0 .49-.33.94-.79 1.13l-1.23.7z" />
              </svg>
              <span className="font-sans font-semibold text-white tracking-tight text-sm">OpenAI</span>
            </div>

            {/* Google Gemini */}
            <div className="flex items-center gap-1.5 hover:opacity-100 opacity-65 transition-all duration-300 hover:scale-105 cursor-pointer">
              {/* Double Sparkle SVG gradient */}
              <div className="relative flex items-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <defs>
                    <linearGradient id="gemini-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#41a5ee" />
                      <stop offset="50%" stopColor="#9b5ce4" />
                      <stop offset="100%" stopColor="#df478f" />
                    </linearGradient>
                  </defs>
                  {/* Primary Large Sparkle */}
                  <path d="M12 2c0 5.52-4.48 10-10 10 5.52 0 10 4.48 10 10 0-5.52 4.48-10 10-10-5.52 0-10-4.48-10-10z" fill="url(#gemini-grad)" />
                  {/* Secondary Small Sparkle */}
                  <path d="M20 7c0 1.66-1.34 3-3 3 1.66 0 3 1.34 3 3 0-1.66 1.34-3 3-3-1.66 0-3-1.34-3-3z" fill="url(#gemini-grad)" className="opacity-80" />
                </svg>
              </div>
              <span className="font-display font-medium text-white tracking-tight text-sm flex items-center">
                <span className="text-zinc-400 font-light mr-1">Google</span>Gemini
              </span>
            </div>

            {/* ANTHROP\C */}
            <div className="flex items-center hover:opacity-100 opacity-65 transition-all duration-300 hover:scale-105 cursor-pointer">
              <span className="font-mono text-xs tracking-[-0.08em] font-black text-white bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded uppercase flex items-center">
                ANTHROP<span className="text-brand-red font-bold mx-[1px]">\</span>C
              </span>
            </div>

            {/* scikit-learn */}
            <div className="flex items-center gap-2 hover:opacity-100 opacity-65 transition-all duration-300 hover:scale-105 cursor-pointer">
              <svg viewBox="0 0 100 100" className="w-5 h-5">
                <circle cx="35" cy="50" r="22" fill="#3498db" className="mix-blend-lighten" opacity="0.85" />
                <circle cx="65" cy="40" r="22" fill="#f1c40f" className="mix-blend-lighten" opacity="0.85" />
                <circle cx="55" cy="65" r="22" fill="#1abc9c" className="mix-blend-lighten" opacity="0.85" />
                <rect x="40" y="45" width="20" height="2" fill="#ffffff" />
              </svg>
              <span className="font-sans font-semibold tracking-tight text-white text-xs">scikit-learn</span>
            </div>

            {/* Python */}
            <div className="flex items-center gap-2 hover:opacity-100 opacity-65 transition-all duration-300 hover:scale-105 cursor-pointer">
              <svg viewBox="0 0 24 24" className="w-4 h-4">
                <path d="M11.95 2C6.44 2 6.54 4.38 6.54 4.38l.01 2.38h5.36s.25.02.25.26v2.54h-7.8S2 9.53 2 15s3.83 5.4 3.83 5.4l2.28-.01v-3.2s.03-.39.38-.39h5.17s.35 0 .35-.35v-5.27s0-.28-.31-.28H6.55V7.47c0-.23.1-.48.49-.48h7.94s1.1-.03 1.1-2.92S14.88 2 11.95 2zm2.1 1.1c.42 0 .76.34.76.76s-.34.76-.76.76-.76-.34-.76-.76.34-.76.76-.76zm.01 18.9c5.5 0 5.4-2.38 5.4-2.38l-.01-2.38H14.1s-.25-.02-.25-.26v-2.54h7.8s2.36.03 2.36-5.44-3.83-5.4-3.83-5.4l-2.28.01v3.2s-.03.39-.38.39H12.3s-.35 0-.35.35v5.27s0 .28.31.28h7.19v1.48c0 .23-.1.48-.49.48H11.02s-1.1.03-1.1 2.92 1.2 3.07 4.13 3.07zm-2.09-1.12c-.42 0-.76-.34-.76-.76s.34-.76.76-.76c.42 0 .76.34.76.76s-.34.76-.76.76z" fill="#4b8bbe" />
              </svg>
              <span className="font-sans font-semibold text-white tracking-tight text-sm">Python</span>
            </div>

            {/* n8n */}
            <div className="flex items-center gap-1.5 hover:opacity-100 opacity-65 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-[2px]">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 block animate-pulse" />
                <span className="w-2.5 h-[1.5px] bg-zinc-500 block" />
                <span className="w-2 h-2 rounded-full border border-orange-500 block" />
                <span className="w-1.5 h-[1.5px] bg-zinc-500 block" />
                <span className="w-1.5 h-1.5 rounded-full bg-orange-600 block" />
              </div>
              <span className="font-mono font-bold text-white tracking-wider text-xs">n8n</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
