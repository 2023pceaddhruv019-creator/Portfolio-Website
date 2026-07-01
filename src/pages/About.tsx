import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Brain, Database, Cpu, Bot, Sparkles, Terminal, Activity, ArrowLeft, ArrowRight, Shield, Flame, Network } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [particles, setParticles] = useState<Array<{ id: number; left: string; top: string; scale: number; speedX: number; speedY: number }>>([]);

  useEffect(() => {
    // Generate organic network nodes for floating neural animation
    const nodes = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      scale: Math.random() * 0.7 + 0.3,
      speedX: (Math.random() - 0.5) * 1.5,
      speedY: (Math.random() - 0.5) * 1.5,
    }));
    setParticles(nodes);
  }, []);

  const expertise = [
    {
      title: 'AI/ML Engineering',
      desc: 'Developing state-of-the-art neural architectures, training regimes, and hyperparameter optimization tracks.',
      icon: Cpu,
      tag: 'Models & Architecture',
      spec: 'PyTorch / TensorFlow / Scikit-learn',
      glow: 'shadow-[0_0_20px_rgba(255,26,26,0.25)]'
    },
    {
      title: 'Data Analytics',
      desc: 'Formulating end-to-end data pipeline operations, statistical modeling, feature selection, and converting raw datasets into strategy.',
      icon: Database,
      tag: 'Strategic Extraction',
      spec: 'Pandas / SQL / Predictive Analysis',
      glow: 'shadow-[0_0_20px_rgba(255,26,26,0.15)]'
    },
    {
      title: 'LLM Applications',
      desc: 'Building cutting-edge retrieval augmented generation (RAG) pipelines, semantic embeddings, fine-tuning, and multi-agent orchestration.',
      icon: Brain,
      tag: 'Generative AI',
      spec: 'LangChain / Vector DBs / Gemini API',
      glow: 'shadow-[0_0_20px_rgba(255,26,26,0.25)]'
    },
    {
      title: 'AI Automation',
      desc: 'Architecting intelligent autonomous agents and scheduled system workflows that eliminate friction and boost operational efficiency.',
      icon: Bot,
      tag: 'Autonomous Workflows',
      spec: 'Agentic Frameworks / API Systems',
      glow: 'shadow-[0_0_20px_rgba(255,26,26,0.15)]'
    }
  ];

  return (
    <div className="min-h-screen text-white bg-black relative overflow-hidden font-sans select-none flex flex-col justify-between">
      
      {/* Cinematic Full-Screen Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          referrerPolicy="no-referrer"
          className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-[1.02]"
        >
          <source 
            src="https://res.cloudinary.com/dp3tnuuxi/video/upload/v1781172136/From_Klickpin.com-_Save_Must-save_meal_prep_recipes_that_help_you_create_a_beautiful_result_without_overspending_for_ideas_worth_saving_right_now-pin-id-162974080260965477_wfmhvi.mp4" 
            type="video/mp4" 
          />
        </video>
        
        {/* Dark Cinematic Vignette Overlays (75% to 85% opacity to guarantee text readability) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/90 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_10%,rgba(0,0,0,0.85)_100%)] pointer-events-none" />
        
        {/* Glowing red grid laser lines */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff1a1a]/40 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff1a1a]/20 to-transparent" />
      </div>

      {/* Neural Network Floating Nodes / Particle animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <svg className="absolute inset-0 w-full h-full opacity-35">
          {particles.map((p, idx) => {
            // Draw delicate connection lines between nearby nodes
            const nextNode = particles[(idx + 1) % particles.length];
            return (
              <g key={`network-group-${idx}`}>
                <line
                  x1={p.left}
                  y1={p.top}
                  x2={nextNode.left}
                  y2={nextNode.top}
                  stroke="rgba(255, 26, 26, 0.08)"
                  strokeWidth="0.75"
                />
              </g>
            );
          })}
        </svg>

        {/* Animated particle points */}
        {particles.map((p) => (
          <motion.div
            key={`animated-particle-${p.id}`}
            animate={{
              opacity: [0.15, 0.45, 0.15],
              scale: [p.scale, p.scale * 1.3, p.scale],
              y: ['-15px', '20px', '-15px'],
              x: ['-10px', '10px', '-10px']
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              position: 'absolute',
              left: p.left,
              top: p.top,
              width: '5px',
              height: '5px',
              backgroundColor: '#ff1a1a',
              borderRadius: '50%',
              boxShadow: '0 0 10px #ff1a1a, 0 0 20px rgba(255, 26, 26, 0.6)',
            }}
          />
        ))}
      </div>

      {/* Main Content Stage */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 md:py-16 w-full relative z-10 flex-1 flex flex-col justify-center">
        
        {/* Header Navigation action */}
        <div className="flex justify-between items-center mb-10">
          <button 
            onClick={() => navigate('/')}
            className="group flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md border border-zinc-800/80 hover:border-[#ff1a1a]/50 rounded-full text-xs text-zinc-300 hover:text-white transition-all cursor-pointer font-mono"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Hub</span>
          </button>

          <div className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-md border border-[#ff1a1a]/30 rounded-full px-3.5 py-1 text-xs text-zinc-300 font-mono">
            <span className="w-2 h-2 rounded-full bg-[#ff1a1a] animate-pulse" />
            <span>Cognitive Subsystem Online</span>
          </div>
        </div>

        {/* Dynamic Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Biography & Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Header copy */}
            <div>
              <div className="flex items-center gap-1.5 mb-2.5">
                <Network className="w-4 h-4 text-brand-red animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest text-[#ff1a1a] uppercase font-bold">About the Analyst</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-display font-medium tracking-tight text-white leading-none">
                About Me / <span className="text-zinc-500 font-light">Who I Am</span>
              </h2>
              <div className="h-[2px] w-20 bg-brand-red mt-3.5 rounded-full" />
            </div>

            {/* Premium Biography glass card */}
            <div className="bg-black/45 backdrop-blur-md border border-zinc-800/60 p-6 sm:p-7 rounded-2xl relative shadow-2xl shadow-black">
              
              {/* Sci-Fi Decorative Corner brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-red" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-zinc-700" />
              
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-11 h-11 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center shadow-[0_0_15px_rgba(255,26,26,0.15)]">
                  <Terminal className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <h3 className="text-base font-mono font-medium text-white tracking-wide">Dhruv Singh Rawat</h3>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500">Autonomous AI Developer</span>
                </div>
              </div>

              {/* Verified core biography paragraph with specific styling */}
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed text-justify font-sans">
                I'm <span className="text-white font-semibold">Dhruv Singh Rawat</span>, an <span className="text-[#ff1a1a] font-semibold tracking-tight underline decoration-[#ff1a1a]/30 decoration-2 underline-offset-4">AI/ML Engineer</span> focused on building intelligent systems that solve real-world challenges. I specialize in <span className="text-[#ff1a1a] font-semibold tracking-tight">Machine Learning</span>, <span className="text-[#ff1a1a] font-semibold tracking-tight">Deep Learning</span>, <span className="text-[#ff1a1a] font-semibold tracking-tight">LLMs</span>, <span className="text-[#ff1a1a] font-semibold tracking-tight">Data Analytics</span>, and <span className="text-[#ff1a1a] font-semibold tracking-tight">AI Automation</span>, transforming data into scalable solutions that drive meaningful impact. My passion lies in combining innovation with practical problem-solving to create AI products that make technology smarter, more efficient, and accessible.
              </p>

              {/* Decorative Tech Console Status readout */}
              <div className="mt-6 pt-5 border-t border-zinc-900 font-mono text-[10px] text-zinc-500 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span>SYSTEM_INIT:</span>
                  <span className="text-emerald-400 font-semibold">SUCCESS_EXECUTION</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>REASONING_ENGINE:</span>
                  <span className="text-brand-red animate-pulse flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-ping" />
                    ACTIVE_RAG_FLOW
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>PIPELINE_DENSITY:</span>
                  <span>OPTIMIZED_COMPILATION</span>
                </div>
              </div>
            </div>

            {/* Quick status mini pills */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3.5 bg-zinc-950/45 border border-zinc-800/40 rounded-xl flex items-center gap-3">
                <Activity className="w-4 h-4 text-brand-red" />
                <div className="flex flex-col">
                  <span className="text-[9px] text-zinc-500 font-mono tracking-tight">LATENCY</span>
                  <span className="text-xs font-sans text-zinc-200 font-medium">10ms (Real-time)</span>
                </div>
              </div>
              <div className="p-3.5 bg-zinc-950/45 border border-zinc-800/40 rounded-xl flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-[#ff1a1a]" />
                <div className="flex flex-col">
                  <span className="text-[9px] text-zinc-500 font-mono tracking-tight">CAPABILITY</span>
                  <span className="text-xs font-sans text-zinc-200 font-semibold">Full Stack ML</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Premium Expertise Cards with interactive scaling & red neon glows */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {expertise.map((item, index) => {
              const IconComponent = item.icon;
              const isHovered = activeCard === index;
              
              return (
                <div
                  key={`about-expertise-card-${index}`}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                  className={`p-6 rounded-2xl border transition-all duration-300 ease-out flex flex-col justify-between aspect-[1.35/1] relative overflow-hidden cursor-pointer group ${
                    isHovered
                      ? `bg-black/60 border-[#ff1a1a]/60 ${item.glow} -translate-y-1`
                      : 'bg-black/35 backdrop-blur-md border-zinc-800/50 hover:border-zinc-700/60'
                  }`}
                >
                  {/* Subtle red indicator strip */}
                  <div className={`absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#ff1a1a]/40 to-transparent transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`} />

                  {/* Header metadata segment of card */}
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isHovered ? 'bg-[#ff1a1a]/15 border border-[#ff1a1a]/40 shadow-[0_0_10px_rgba(255,26,26,0.3)]' : 'bg-zinc-900/60 border border-zinc-800/40'
                    }`}>
                      <IconComponent className={`w-5 h-5 transition-transform duration-300 ${
                        isHovered ? 'text-[#ff1a1a] scale-110' : 'text-zinc-400'
                      }`} />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 bg-zinc-950/80 px-2.5 py-0.5 rounded border border-zinc-800/60">
                      {item.tag}
                    </span>
                  </div>

                  {/* Body description of card */}
                  <div className="my-4">
                    <h4 className="text-base font-display font-medium text-white transition-colors duration-200 group-hover:text-brand-red flex items-center gap-1">
                      <span>{item.title}</span>
                      <ArrowRight className={`w-4 h-4 opacity-0 -translate-x-1 transition-all duration-300 ${
                        isHovered ? 'opacity-100 translate-x-1' : ''
                      }`} />
                    </h4>
                    <p className="text-zinc-400 text-xs mt-2 leading-relaxed font-sans font-light">
                      {item.desc}
                    </p>
                  </div>

                  {/* Footer detail of card */}
                  <div className="pt-2.5 border-t border-zinc-900 flex items-center justify-between">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 font-bold">Tech Stack</span>
                    <span className={`text-[11px] font-mono font-medium transition-colors ${
                      isHovered ? 'text-zinc-250 font-semibold text-white' : 'text-zinc-400'
                    }`}>
                      {item.spec}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Decorative Sci-fi Footer strip */}
      <footer className="w-full py-5 border-t border-zinc-900 bg-black/60 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
            <span>Jaipur, Rajasthan / Remote Execution</span>
          </div>
          <div>
            <span>&copy; {new Date().getFullYear()} DHRUV SINGH RAWAT. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="flex items-center gap-1">
            <span>INTERFACE_VERSION:</span>
            <span className="text-zinc-400">3.8.4</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
