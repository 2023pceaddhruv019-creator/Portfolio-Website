import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Brain, Database, Cpu, Bot, Sparkles, Terminal, Activity, ArrowRight } from 'lucide-react';

export default function AboutMe() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [particles, setParticles] = useState<Array<{ id: number; left: string; top: string; scale: number; duration: number }>>([]);

  useEffect(() => {
    // Generate gentle cyber particles for floating animation
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      scale: Math.random() * 0.6 + 0.4,
      duration: Math.random() * 6 + 4
    }));
    setParticles(newParticles);
  }, []);

  const features = [
    {
      title: 'AI/ML Engineering',
      desc: 'Developing state-of-the-art neural architectures, supervised/unsupervised training regimes, and hyperparameter optimization tracks.',
      icon: Cpu,
      tag: 'Models & Architecture',
      spec: 'PyTorch / TensorFlow / Scikit-learn'
    },
    {
      title: 'Data Analytics',
      desc: 'Formulating end-to-end data pipeline operations, statistical modeling, feature selection, and converting raw datasets into insightful strategy.',
      icon: Database,
      tag: 'Strategic Extraction',
      spec: 'Pandas / SQL / Predictive Analysis'
    },
    {
      title: 'LLM Applications',
      desc: 'Building cutting-edge retrieval augmented generation (RAG) pipelines, semantic embeddings, fine-tuning, and robust multi-agent orchestration.',
      icon: Brain,
      tag: 'Generative AI',
      spec: 'LangChain / Vector DBs / Gemini API'
    },
    {
      title: 'AI Automation',
      desc: 'Architecting intelligent autonomous agents and scheduled system workflows that eliminate friction and boost operational efficiency.',
      icon: Bot,
      tag: 'Autonomous Workflows',
      spec: 'Agentic Frameworks / API Systems'
    }
  ];

  return (
    <section id="about" className="w-full relative mt-16 rounded-3xl overflow-hidden border border-zinc-900 bg-black/40">
      
      {/* Background Cinematic Video Loop */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          referrerPolicy="no-referrer"
          className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 opacity-35 filter brightness-[0.75] contrast-[1.1] scale-[1.03]"
        >
          <source 
            src="https://res.cloudinary.com/dp3tnuuxi/video/upload/v1781172136/From_Klickpin.com-_Save_Must-save_meal_prep_recipes_that_help_you_create_a_beautiful_result_without_overspending_for_ideas_worth_saving_right_now-pin-id-162974080260965477_wfmhvi.mp4" 
            type="video/mp4" 
          />
        </video>
        
        {/* Futuristic Cyber Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#040405]/80 to-[#020202]/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_20%,rgba(2,2,2,0.9)_100%)]" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800/50 to-transparent" />
      </div>

      {/* Cyber Floating Particle Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              y: ['-10px', '25px', '-10px'],
              x: ['-5px', '5px', '-5px']
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              position: 'absolute',
              left: p.left,
              top: p.top,
              width: '4px',
              height: '4px',
              backgroundColor: '#ff1a1a',
              borderRadius: '50%',
              boxShadow: '0 0 8px #ff1a1a',
              transform: `scale(${p.scale})`
            }}
          />
        ))}
      </div>

      {/* Main Glass Content Wrapper */}
      <div className="max-w-7xl mx-auto px-6 py-10 sm:p-12 relative z-10">
        
        {/* Section Title with Animated Lead Dot */}
        <div className="flex flex-col mb-8 md:mb-10 relative">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
            </span>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#ff1a1a] font-bold">
              Cognitive Profile
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight text-white leading-none">
            About Me / <span className="text-zinc-500 font-normal">Who I Am</span>
          </h2>
          <div className="h-[2px] w-24 bg-brand-red mt-3 rounded-full" />
        </div>

        {/* Dynamic Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Bio Description (spans 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-black/40 backdrop-blur-md border border-zinc-800/45 p-6 rounded-2xl relative shadow-md shadow-black/80">
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-brand-red" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-zinc-700" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <h3 className="text-sm font-mono font-medium text-white">Dhruv Singh Rawat</h3>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500">Autonomous Intelligence</span>
                </div>
              </div>

              {/* Bio block with highlighted elements */}
              <p className="text-zinc-300 text-sm leading-relaxed text-justify font-sans">
                I'm Dhruv Singh Rawat, an <span className="text-brand-red font-semibold tracking-tight underline decoration-brand-red/30 decoration-2 underline-offset-4">AI/ML Engineer</span> focused on building intelligent systems that solve real-world challenges. I specialize in <span className="text-brand-red font-semibold tracking-tight">Machine Learning</span>, <span className="text-brand-red font-semibold tracking-tight">Deep Learning</span>, <span className="text-brand-red font-semibold tracking-tight">LLMs</span>, <span className="text-brand-red font-semibold tracking-tight">Data Analytics</span>, and <span className="text-brand-red font-semibold tracking-tight">AI Automation</span>, transforming raw data into scalable, production-grade solutions that drive meaningful business impact. My passion lies in fusing high-performance scientific models with practical, agile problem-solving to create AI products that make technology smarter, automated, and seamlessly accessible.
              </p>

              {/* Decorative System Terminal Readout */}
              <div className="mt-5 pt-4 border-t border-zinc-900 font-mono text-[9px] text-zinc-500 space-y-1">
                <div className="flex items-center justify-between">
                  <span>SYSTEM_INIT:</span>
                  <span className="text-emerald-400">SUCCESS</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>COGNITIVE_THREAD:</span>
                  <span className="text-brand-red animate-pulse">ACTIVE_REASONING</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>DATA_CHANNELS:</span>
                  <span>100% OPERATIONAL</span>
                </div>
              </div>
            </div>

            {/* Micro Quick facts capsule */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-zinc-950/40 border border-zinc-900 rounded-xl flex items-center gap-2.5">
                <Activity className="w-4 h-4 text-brand-red" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-zinc-500 font-mono">STATUS</span>
                  <span className="text-[11px] font-sans text-zinc-300 font-medium">Ready to Build</span>
                </div>
              </div>
              <div className="p-3 bg-zinc-950/40 border border-zinc-900 rounded-xl flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#ff1a1a]" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-zinc-500 font-mono">MISSION</span>
                  <span className="text-[11px] font-sans text-zinc-300 font-medium font-semibold">Transforming Info</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Feature Grid - 4 Interactive Glassmorphic Column Cards (spans 7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, index) => {
              const IconComponent = item.icon;
              const isHovered = activeCard === index;
              
              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                  className={`p-5 rounded-2xl border transition-all duration-300 ease-out flex flex-col justify-between aspect-[1.3/1] relative overflow-hidden cursor-pointer group ${
                    isHovered
                      ? 'bg-black/60 border-brand-red/60 shadow-[0_4px_24px_rgba(255,26,26,0.12)] -translate-y-1'
                      : 'bg-black/35 backdrop-blur-md border-zinc-800/50 hover:border-zinc-700/60'
                  }`}
                >
                  {/* Outer subtle glow line reflecting red theme */}
                  <div className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-red/40 to-transparent transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`} />

                  {/* Top line with Icon and short Badge tag */}
                  <div className="flex items-center justify-between">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      isHovered ? 'bg-brand-red/15 border border-brand-red/40' : 'bg-zinc-900/60 border border-zinc-800/40'
                    }`}>
                      <IconComponent className={`w-4 h-4 transition-all ${
                        isHovered ? 'text-brand-red scale-110' : 'text-zinc-400'
                      }`} />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 bg-zinc-950/80 px-2 py-0.5 rounded border border-zinc-900">
                      {item.tag}
                    </span>
                  </div>

                  {/* Content Area */}
                  <div className="my-3">
                    <h4 className="text-sm font-display font-medium text-white transition-colors duration-200 group-hover:text-brand-red flex items-center gap-1">
                      <span>{item.title}</span>
                      <ArrowRight className={`w-3.5 h-3.5 opacity-0 -translate-x-1 transition-all duration-300 ${
                        isHovered ? 'opacity-100 translate-x-1' : ''
                      }`} />
                    </h4>
                    <p className="text-zinc-400 text-xs mt-1.5 leading-snug font-sans font-light">
                      {item.desc}
                    </p>
                  </div>

                  {/* Technology Spec Footer tag */}
                  <div className="mt-2 pt-2 border-t border-zinc-900/60 flex items-center justify-between">
                    <span className="text-[9px] font-mono uppercase tracking-wide text-zinc-500 font-semibold">Technologies</span>
                    <span className={`text-[10px] font-mono font-medium transition-colors ${
                      isHovered ? 'text-zinc-200' : 'text-zinc-400'
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
    </section>
  );
}
