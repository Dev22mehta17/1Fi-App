'use client';

import React from 'react';
import BottomNav from './BottomNav';

interface MobileShellProps {
  children: React.ReactNode;
  activeNav?: 'home' | 'shop' | 'dues' | 'limit' | 'profile';
  showBottomNav?: boolean;
}

export default function MobileShell({
  children,
  activeNav = 'shop',
  showBottomNav = true,
}: MobileShellProps) {
  return (
    <div className="min-h-screen bg-[#f3f4f6] flex justify-center items-center py-0 sm:py-6 selection:bg-[#712CDC]/20 selection:text-[#712CDC]">
      <div className="w-full max-w-[500px] min-h-screen sm:min-h-[920px] sm:max-h-[96vh] sm:rounded-[36px] bg-white relative flex flex-col shadow-2xl border-0 sm:border sm:border-gray-200/80 overflow-hidden">
        
        {/* Subtle top indicator on desktop to mimic mobile status area */}
        <div className="hidden sm:flex items-center justify-between px-7 pt-3 pb-1 text-xs text-gray-500 select-none bg-white z-20">
          <span className="font-semibold text-gray-800 tracking-tight">9:41</span>
          <div className="flex items-center gap-1.5 text-gray-700">
            <span className="text-[11px] font-bold">5G</span>
            <div className="w-5 h-2.5 border border-gray-400 rounded-sm p-0.5 flex items-center">
              <div className="w-3 h-1.5 bg-gray-800 rounded-2xs" />
            </div>
          </div>
        </div>

        {/* Scrollable app viewport */}
        <div className={`flex-1 overflow-y-auto overflow-x-hidden ${showBottomNav ? 'pb-24' : 'pb-6'}`}>
          {children}
        </div>

        {/* Fixed Floating Bottom Navigation */}
        {showBottomNav && <BottomNav activeNav={activeNav} />}
      </div>
    </div>
  );
}
