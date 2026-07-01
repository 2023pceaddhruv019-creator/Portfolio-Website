import React, { useState, useEffect } from 'react';
import { 
  Rocket, 
  Linkedin, 
  Github, 
  Mail, 
  Download, 
  ChevronRight, 
  Check, 
  Cpu,
  Database,
  Brain,
  Bot
} from 'lucide-react';
import { useLocation } from 'react-router-dom';
import TechBanner from '../components/TechBanner';
import LeadModal from '../components/LeadModal';

interface HomeProps {
  isContactOpen: boolean;
  setIsContactOpen: (open: boolean) => void;
}

export default function Home({ isContactOpen, setIsContactOpen }: HomeProps) {
  const [isResumeDownloaded, setIsResumeDownloaded] = useState(false);
  const location = useLocation();

  // Scroll to section based on navigation state or page reload hash trigger
  useEffect(() => {
    if (location.state && (location.state as any).scrollTo) {
      const targetId = (location.state as any).scrollTo;
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  // Resume download simulation with status feedback
  const handleDownloadResume = () => {
    setIsResumeDownloaded(true);
    // Create temporary anchor to simulate resume download
    const link = document.createElement('a');
    link.href = '#';
    link.setAttribute('download', 'Dhruv_Singh_Rawat_AI_ML_Resume.pdf');
    document.body.appendChild(link);
    
    // Reset status after a delay
    setTimeout(() => {
      setIsResumeDownloaded(false);
      alert("Dhruv S. Rawat's AI/ML Engineer Resume download initiated! (Using preview placeholder copy)");
    }, 1500);
  };

  return (
    <div className="text-white selection:bg-brand-red selection:text-white pb-16 font-sans relative">
      
      {/* Background Video Loop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        referrerPolicy="no-referrer"
        className="fixed inset-0 w-full h-full object-cover -z-10 pointer-events-none opacity-55 brightness-[1.12] contrast-[1.12]"
      >
        <source src="https://res.cloudinary.com/dp3tnuuxi/video/upload/v1780660814/kling_20260605_%E4%BD%9C%E5%93%81__5024_0_vsc2yk.mp4" type="video/mp4" />
      </video>

      <main className="max-w-7xl mx-auto px-4 sm:px-8 mt-6">
        
        {/* Top Floating Slogan Row (Right-Aligned) */}
        <div className="flex justify-end mb-4">
          <div className="flex items-center gap-1.5 text-[11px] font-mono tracking-wider text-zinc-400">
            <span className="text-brand-red animate-pulse">★</span>
            <span>Solving today's problems with AI to build a smarter tomorrow.</span>
          </div>
        </div>

        {/* Prime Two-Column Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT CHIEF COLUMN (75% or lg:col-span-9) */}
          <section className="lg:col-span-9 flex flex-col justify-between gap-6">
            
            {/* Main Header Copy Unit */}
            <div className="space-y-4">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-md border border-zinc-800/80 rounded-full px-3.5 py-1 text-xs text-zinc-300 font-mono">
                <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                <span>AI/ML Engineer</span>
              </div>

              {/* Title Section */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-medium tracking-tight text-white leading-[0.95]">
                Dhruv Singh Rawat <br className="hidden sm:inline" />
                <span className="text-white">AI/ML </span>
                <span className="text-[#ff1a1a] drop-shadow-[0_0_15px_rgba(255,26,26,0.15)]">Engineer</span>
              </h1>

              {/* Description Paragraph */}
              <p className="text-sm sm:text-base text-zinc-400 font-sans max-w-xl leading-relaxed">
                Building intelligent AI systems and machine learning solutions that solve real-world problems and create measurable impact.
              </p>
            </div>

            {/* Middle Action / Social / Summary Unit */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 bg-black/30 backdrop-blur-md border border-zinc-900/40 rounded-2xl p-4 md:p-3 mt-2">
              
              {/* Left Side Pill Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="px-6 py-3 bg-black/40 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white font-medium rounded-full text-xs sm:text-sm tracking-wide transition-all hover:scale-[1.02] cursor-pointer flex items-center gap-1.5"
                >
                  <span>View Projects</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button 
                  onClick={handleDownloadResume}
                  className="px-6 py-3 bg-brand-red hover:bg-[#d90000] text-white font-semibold rounded-full text-xs sm:text-sm tracking-wide transition-all hover:scale-[1.02] cursor-pointer shadow-lg shadow-brand-red/10 flex items-center gap-1.5"
                >
                  {isResumeDownloaded ? (
                    <>
                      <Check className="w-4 h-4 animate-bounce" />
                      <span>Downloading...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Download Resume</span>
                    </>
                  )}
                </button>
              </div>

              {/* Vertical / Social Links Column Divider in Grid */}
              <div className="flex md:flex-col items-center justify-center gap-2 px-1 md:px-2 md:border-l md:border-r border-zinc-800/60 my-2 md:my-0">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-black/50 border border-zinc-800 text-zinc-300 hover:text-brand-red hover:border-brand-red/50 transition-all duration-300 flex items-center justify-center cursor-pointer"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-black/50 border border-zinc-800 text-zinc-300 hover:text-brand-red hover:border-brand-red/50 transition-all duration-300 flex items-center justify-center cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                </a>
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="w-8 h-8 rounded-lg bg-black/50 border border-zinc-800 text-zinc-300 hover:text-brand-red hover:border-brand-red/50 transition-all duration-300 flex items-center justify-center cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>

              {/* Summary copy on the right */}
              <div className="flex-1 text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed md:pl-2">
                I build <span className="text-[#ff1a1a] font-medium font-display">AI solutions</span> with real <span className="text-[#ff1a1a] font-medium font-display">business impact</span> by combining machine learning, LLMs, and automation to solve complex real-world problems.
              </div>
            </div>

            {/* Row of Three Stats Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
              
              {/* Stat 1: Projects Delivered */}
              <div className="bg-black/40 backdrop-blur-md border border-zinc-800/60 rounded-xl p-4 flex flex-col justify-between relative group hover:border-brand-red/40 transition-colors duration-300">
                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                  Projects Delivered
                </span>
                <div className="flex items-end justify-between mt-4">
                  <span className="text-3xl sm:text-4xl font-display font-bold text-white">15+</span>
                  <Rocket className="w-5 h-5 text-zinc-600 group-hover:text-brand-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
              </div>

              {/* Stat 2: Model Performance */}
              <div className="bg-black/40 backdrop-blur-md border border-zinc-800/60 rounded-xl p-4 flex flex-col justify-between relative group hover:border-brand-red/40 transition-colors duration-300">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                  Model Performance
                </span>
                <div className="flex items-end justify-between mt-4">
                  <span className="text-3xl sm:text-4xl font-display font-bold text-white">95%+</span>
                  <div className="text-right flex flex-col">
                    <span className="text-[9px] font-mono tracking-tight text-zinc-400">Accuracy</span>
                    <span className="text-[9px] font-mono tracking-tight text-zinc-500">Target</span>
                  </div>
                </div>
              </div>

              {/* Stat 3: Experience */}
              <div className="bg-black/40 backdrop-blur-md border border-zinc-800/60 rounded-xl p-4 flex flex-col justify-between relative group hover:border-brand-red/40 transition-colors duration-300">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                  Experience
                </span>
                <div className="flex items-end justify-between mt-4">
                  <span className="text-3xl sm:text-4xl font-display font-bold text-white">1+</span>
                  <div className="text-right flex flex-col">
                    <span className="text-[9px] font-mono tracking-tight text-zinc-400">Years in</span>
                    <span className="text-[9px] font-mono tracking-tight text-zinc-500">AI/ML</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Row: Availability Card (Left) & End-to-End expertise (Right) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-2">
              
              {/* Availability (Based in Jaipur) - Spans 7 cols */}
              <div className="md:col-span-7 bg-black/45 backdrop-blur-md border border-zinc-800/40 rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between group hover:border-brand-red/40 transition-all duration-300">
                {/* Visual red glow point */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-brand-red/5 blur-2xl rounded-full" />
                
                <div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1">
                    <span className="text-brand-red animate-ping">★</span>
                    <span>Available for opportunities!</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-sans text-zinc-400 font-medium leading-normal mt-2">
                    Based in <span className="text-[#ff1a1a] font-semibold font-display drop-shadow-[0_0_8px_rgba(255,26,26,0.2)]">Jaipur, Rajasthan, India</span>
                  </h3>
                </div>

                {/* Badges line */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-4 text-[10px] sm:text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#ff1a1a]" /> AI Engineer</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#ff1a1a]" /> ML Engineer</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#ff1a1a]" /> Freelance Projects</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#ff1a1a]" /> AI Consulting</span>
                </div>

                {/* Let's connect button */}
                <div className="mt-5 self-center">
                  <button 
                    onClick={() => setIsContactOpen(true)}
                    className="bg-[#0b0c0d]/50 border border-zinc-800 hover:border-brand-red/40 hover:bg-zinc-950 font-sans text-xs font-semibold px-6 py-2 rounded-full cursor-pointer transition-all duration-300"
                  >
                    Let's Connect
                  </button>
                </div>
              </div>

              {/* End-to-End Expertise (Spans 5 cols) */}
              <div className="md:col-span-5 bg-black/40 backdrop-blur-md border border-zinc-800/60 rounded-2xl p-4 flex flex-col justify-between hover:border-brand-red/40 transition-colors duration-300">
                <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold mb-3 leading-snug">
                  End-to-end expertise in building intelligent systems and ML solutions.
                </div>

                {/* Grid of ML technology tools */}
                <div className="grid grid-cols-5 gap-1.5 mt-2">
                  
                  {/* Column 1: Python */}
                  <div className="flex flex-col items-center justify-between h-20 bg-zinc-950/40 border border-zinc-800/30 rounded-lg p-1 hover:border-blue-400/40 transition-all duration-300">
                    <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-tight">Python</span>
                    <svg viewBox="0 0 24 24" className="w-6 h-6 hover:scale-110 transition-transform">
                      <path d="M11.95 2C6.44 2 6.54 4.38 6.54 4.38l.01 2.38h5.36s.25.02.25.26v2.54h-7.8S2 9.53 2 15s3.83 5.4 3.83 5.4l2.28-.01v-3.2s.03-.39.38-.39h5.17s.35 0 .35-.35v-5.27s0-.28-.31-.28H6.55V7.47c0-.23.1-.48.49-.48h7.94s1.1-.03 1.1-2.92S14.88 2 11.95 2zm2.1 1.1c.42 0 .76.34.76.76s-.34.76-.76.76-.76-.34-.76-.76.34-.76.76-.76zm.01 18.9c5.5 0 5.4-2.38 5.4-2.38l-.01-2.38H14.1s-.25-.02-.25-.26v-2.54h7.8s2.36.03 2.36-5.44-3.83-5.4-3.83-5.4l-2.28.01v3.2s-.03.39-.38.39H12.3s-.35 0-.35.35v5.27s0 .28.31.28h7.19v1.48c0 .23-.1.48-.49.48H11.02s-1.1.03-1.1 2.92 1.2 3.07 4.13 3.07zm-2.09-1.12c-.42 0-.76-.34-.76-.76s.34-.76.76-.76c.42 0 .76.34.76.76s-.34.76-.76.76z" fill="#3572A5" />
                    </svg>
                  </div>

                  {/* Column 2: Scikit-learn */}
                  <div className="flex flex-col items-center justify-between h-20 bg-zinc-950/40 border border-zinc-800/30 rounded-lg p-1 hover:border-emerald-400/40 transition-all duration-300">
                    <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-tight">Scikit</span>
                    <svg viewBox="0 0 100 100" className="w-6 h-6 hover:scale-110 transition-transform">
                      <circle cx="35" cy="50" r="22" fill="#3498db" className="mix-blend-lighten" opacity="0.9" />
                      <circle cx="65" cy="40" r="22" fill="#f1c40f" className="mix-blend-lighten" opacity="0.9" />
                      <circle cx="55" cy="65" r="22" fill="#1abc9c" className="mix-blend-lighten" opacity="0.9" />
                      <rect x="42" y="47" width="16" height="3" fill="#ffffff" />
                    </svg>
                  </div>

                  {/* Column 3: XGBoost */}
                  <div className="flex flex-col items-center justify-between h-20 bg-zinc-950/40 border border-zinc-800/30 rounded-lg p-1 hover:border-cyan-400/40 transition-all duration-300">
                    <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-tight">XGBoost</span>
                    <div className="flex flex-col items-center group-hover:scale-105 transition-transform">
                      <span className="text-[10px] font-display font-black text-[#56b4e9] leading-none mb-0.5">XG</span>
                      <span className="text-[8px] font-display font-medium text-emerald-400 leading-none">Boost</span>
                    </div>
                  </div>

                  {/* Column 4: PyTorch */}
                  <div className="flex flex-col items-center justify-between h-20 bg-zinc-950/40 border border-zinc-800/30 rounded-lg p-1 hover:border-orange-500/40 transition-all duration-300">
                    <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-tight">PyTorch</span>
                    <svg viewBox="0 0 24 24" className="w-6 h-6 hover:scale-110 transition-transform" fill="#ee4c2c">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5v-4H9.5c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5h1.5V10c0-1.1.9-2 2-2h1c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5h-1c-.28 0-.5.22-.5.5v2.5h1.5c.28 0 .5.22.5.5v1z" />
                    </svg>
                  </div>

                  {/* Column 5: TensorFlow */}
                  <div className="flex flex-col items-center justify-between h-20 bg-zinc-950/40 border border-zinc-800/30 rounded-lg p-1 hover:border-amber-500/40 transition-all duration-300">
                    <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-tight">Tensor</span>
                    <svg viewBox="0 0 24 24" className="w-6 h-6 hover:scale-110 transition-transform">
                      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.5L18.5 8 12 11.5 5.5 8 12 4.5zM5.5 10l5.5 3v6.5l-5.5-3V10zm13 0v6.5l-5.5 3V13l5.5-3z" fill="#ff6f00" />
                    </svg>
                  </div>

                </div>
              </div>

            </div>

          </section>

          {/* RIGHT CHIEF COLUMN (25% or lg:col-span-3) - Stacked vertically */}
          <aside className="lg:col-span-3 flex flex-col justify-between gap-6">
            
            {/* Top Card: AI/ML Projects (15+) */}
            <div id="works" className="bg-black/45 backdrop-blur-md border border-zinc-800/60 rounded-2xl p-5 hover:border-brand-red/40 transition-all duration-300 flex flex-col justify-between aspect-[1.4/1]">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold mb-2">
                <span>AI/ML Projects</span>
                <span>2024</span>
              </div>
              <div className="text-4xl sm:text-5xl font-display font-medium text-white tracking-tight leading-none my-1">
                15+
              </div>
              <p className="text-[11px] text-zinc-400 leading-snug">
                Production-Grade <br /> Solutions Delivered
              </p>
            </div>

            {/* Middle Card: Core Expertise */}
            <div id="services" className="bg-black/45 backdrop-blur-md border border-zinc-800/60 rounded-2xl p-5 hover:border-brand-red/40 transition-all duration-300 flex flex-col justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold mb-2 block">
                  Core Expertise
                </span>
                <div className="text-2xl font-display font-bold text-white tracking-tight mb-3">
                  AI/ML
                </div>

                {/* 2-column checklist with red dots */}
                <div className="grid grid-cols-2 gap-x-2 gap-y-2 mt-2 text-[10px] sm:text-xs text-zinc-300">
                  <div className="space-y-2">
                    <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red inline-block flex-shrink-0" />
                      <span>Machine Learning</span>
                    </span>
                    <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red inline-block flex-shrink-0" />
                      <span>Deep Learning</span>
                    </span>
                    <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red inline-block flex-shrink-0" />
                      <span>LLM Apps</span>
                    </span>
                  </div>
                  <div className="space-y-2">
                    <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red inline-block flex-shrink-0" />
                      <span>RAG Systems</span>
                    </span>
                    <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red inline-block flex-shrink-0" />
                      <span>MLOps</span>
                    </span>
                    <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red inline-block flex-shrink-0" />
                      <span>Data Science</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Wide action button */}
              <button 
                onClick={() => setIsContactOpen(true)}
                className="w-full py-2.5 bg-[#ff1a1a] hover:bg-[#ff3333] active:bg-[#d90000] text-white font-semibold rounded-full text-xs sm:text-sm tracking-wide transition-all mt-2 cursor-pointer shadow-lg shadow-brand-red/10"
              >
                See My Work
              </button>
            </div>

            {/* Bottom Card: Quote block */}
            <div className="bg-black/45 backdrop-blur-md border border-zinc-800/60 rounded-2xl p-5 hover:border-brand-red/40 transition-all duration-300 flex flex-col justify-between aspect-[1.3/1]">
              <span className="text-[#ff1a1a] text-3xl font-display leading-none font-bold block mb-1">“</span>
              <p className="text-xs sm:text-sm text-zinc-300 italic tracking-tight font-sans leading-relaxed mb-3">
                The goal is not to build models, but to build intelligence that creates impact.
              </p>
              <div>
                <span className="text-xs font-semibold text-[#ff1a1a] block">Dhruv Singh Rawat</span>
                <span className="text-[10px] text-zinc-500 font-mono block">AI/ML Engineer</span>
              </div>
            </div>

          </aside>

        </div>

        {/* Logo / Technology Banner */}
        <TechBanner />

      </main>
    </div>
  );
}
