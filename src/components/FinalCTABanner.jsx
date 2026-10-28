import React from 'react';

export default function FinalCTABanner() {
  return (
    <section className=" text-white py-24 px-4 md:px-8 border-t border-zinc-800/60 relative overflow-hidden">
      {/* Soft grid mesh - Fixed using cross-browser inline properties */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 70%)',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 70%)',
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-orange-600/15 to-amber-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-3">
          Boost deployment speed
        </p>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 max-w-2xl mx-auto leading-tight">
          Ready to accelerate your{' '}
          <span className="bg-gradient-to-r from-[#F15A24] to-amber-500 bg-clip-text text-transparent">
            coding workflow?
          </span>
        </h2>

        <p className="text-zinc-400 max-w-lg mx-auto text-sm md:text-base mb-10 leading-relaxed">
          Join thousands of developers offloading local builds to premium virtual sandbox environments. Get started for free today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#F15A24] to-amber-500 text-white font-semibold rounded-lg text-sm transition-all duration-300 hover:opacity-95 hover:shadow-lg hover:shadow-orange-500/10 active:scale-[0.98] focus:outline-none">
            Start Free Now
          </button>
          
          <button className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900/80 hover:bg-zinc-900 text-zinc-300 font-medium rounded-lg text-sm border border-zinc-800 transition-colors duration-200 active:scale-[0.98] focus:outline-none">
            Talk to Sales
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-xs text-zinc-500">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            No credit card required
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Cancel anytime
          </span>
        </div>
      </div>
    </section>
  );
}
