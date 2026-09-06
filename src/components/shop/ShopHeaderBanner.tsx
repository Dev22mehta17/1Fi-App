'use client';

import React from 'react';
import { Sparkles, ShieldCheck, TrendingUp } from 'lucide-react';

export default function ShopHeaderBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#712CDC] via-[#8133e8] to-[#5c22a5] px-5 pt-7 pb-10 text-white shadow-md">
      {/* Background ambient glow shapes */}
      <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-[#d8b4fe]/20 blur-xl pointer-events-none" />

      {/* Pill Badge */}
      <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/15 px-3 py-1 backdrop-blur-md mb-3">
        <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
        <span className="text-[11px] font-semibold tracking-wide uppercase text-white/95">
          India's 1st LAMF Shopping
        </span>
      </div>

      {/* Hero Title */}
      <h1 className="text-[23px] font-extrabold tracking-tight leading-[1.2] text-white">
        Shop today. <br />
        <span className="text-purple-200 font-medium">Pay later using mutual funds.</span>
      </h1>

      <p className="mt-2 text-[12.5px] leading-relaxed text-purple-100/90 max-w-[320px]">
        Keep your investments compounding at market returns while getting devices on No-Cost EMI.
      </p>

      {/* Feature Micro-Badges */}
      <div className="mt-4 flex flex-wrap items-center gap-2 pt-1">
        <div className="flex items-center gap-1 text-[11px] font-medium bg-black/15 border border-white/10 px-2.5 py-1 rounded-full text-white/90">
          <ShieldCheck className="h-3 w-3 text-emerald-300" />
          <span>0% Interest</span>
        </div>
        <div className="flex items-center gap-1 text-[11px] font-medium bg-black/15 border border-white/10 px-2.5 py-1 rounded-full text-white/90">
          <TrendingUp className="h-3 w-3 text-purple-200" />
          <span>Zero Downpayment</span>
        </div>
      </div>
    </section>
  );
}
