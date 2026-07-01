import React, { useState } from 'react';
import { X, Send, CheckCircle, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { motion } from 'motion/react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    serviceType: 'Consulting'
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate real database or API post check
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="relative w-full max-w-lg bg-[#070708] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* Glow corner elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 blur-[40px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-red/5 blur-[40px] rounded-full pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/80">
          <div className="flex items-center gap-2">
            <span className="text-brand-red text-sm">★</span>
            <span className="font-display font-medium text-white text-base">Let's Connect & Work Together</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-zinc-400 leading-relaxed font-sans mb-2">
                Have an AI/ML project in mind or need advisory services? Complete the form below and Dhruv will get back to you within 24 hours.
              </p>

              <div>
                <label className="block text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Dhruv Singh Rawat"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-brand-red rounded-lg px-3 py-2 text-sm text-white placeholder-zinc-700 outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="dhruvsinghrawat2005@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-brand-red rounded-lg px-3 py-2 text-sm text-white placeholder-zinc-700 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-1.5">
                    Company / Org
                  </label>
                  <input
                    type="text"
                    placeholder="Google, Anthropic etc."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-brand-red rounded-lg px-3 py-2 text-sm text-white placeholder-zinc-700 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-1.5">
                  Type of Engagement
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-brand-red rounded-lg px-3 py-2 text-sm text-zinc-300 outline-none transition-colors cursor-pointer"
                >
                  <option value="Consulting">AI/ML Engineering & Consulting</option>
                  <option value="FullTime">Full-time Opportunity</option>
                  <option value="Freelance">Freelance/Contract Development</option>
                  <option value="Research">RAG & LLM Integration</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-1.5">
                  Message / Project Specs
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Introduce your project requirements or the role details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-brand-red rounded-lg px-3 py-2 text-sm text-white placeholder-zinc-700 outline-none resize-none transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white rounded-lg py-2.5 text-sm font-semibold tracking-wide transition-all shadow-lg hover:shadow-brand-red/15 cursor-pointer disabled:opacity-50"
              >
                {isLoading ? (
                  <span>Sending inquiry...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10 text-green-500 mb-2">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white">Inquiry Received Successfully!</h3>
              <p className="text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out, <strong>{formData.name}</strong>. Your message regarding {formData.serviceType} has been successfully dispatched. Dhruv will contact you shortly!
              </p>
              <div className="pt-4 flex justify-center gap-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', company: '', message: '', serviceType: 'Consulting' });
                    onClose();
                  }}
                  className="px-5 py-2 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Quick Contact */}
        <div className="bg-zinc-950 px-6 py-4 border-t border-zinc-900 flex justify-between items-center text-[10px] font-mono text-zinc-500">
          <span className="flex items-center gap-1">
            <Mail className="w-3.5 h-3.5 text-brand-red animate-pulse" /> dhruvsinghrawat2005@gmail.com
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-brand-red" /> Jaipur, India
          </span>
        </div>
      </motion.div>
    </div>
  );
}
