'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Home, 
  Store, 
  Receipt, 
  TrendingUp, 
  User 
} from 'lucide-react';

interface BottomNavProps {
  activeNav?: 'home' | 'shop' | 'dues' | 'limit' | 'profile';
}

export default function BottomNav({ activeNav = 'shop' }: BottomNavProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '/shop' },
    { id: 'shop', label: 'Shop', icon: Store, href: '/shop' },
    { id: 'dues', label: 'EMI Dues', icon: Receipt, href: '/shop' },
    { id: 'limit', label: 'Limit', icon: TrendingUp, href: '/shop' },
    { id: 'profile', label: 'Profile', icon: User, href: '/shop' },
  ];

  return (
    <nav className="fixed sm:absolute inset-x-0 bottom-0 z-50 px-3 pb-3">
      <div className="mx-auto flex max-w-[480px] items-stretch rounded-[28px] bg-white/95 backdrop-blur-md border border-gray-200/80 px-1.5 py-1.5 shadow-[0_8px_32px_rgba(20,14,50,0.12),0_0_0_1px_rgba(255,255,255,0.18)_inset]">
        {navItems.map((item) => {
          const isActive = item.id === activeNav;
          const Icon = item.icon;

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`group relative flex min-w-0 flex-1 flex-col items-center justify-center gap-[3px] rounded-[18px] px-1 py-2 text-center transition-all duration-200 ${
                isActive ? 'text-[#712CDC]' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {isActive && (
                <>
                  <span
                    className="absolute left-1/2 -top-[3px] h-[3px] w-8 -translate-x-1/2 rounded-full bg-[#712CDC]"
                    aria-hidden="true"
                  />
                  <span
                    className="absolute inset-1 rounded-[14px] opacity-40 pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(ellipse at 50% 30%, rgba(113,44,220,0.15) 0%, transparent 70%)',
                    }}
                    aria-hidden="true"
                  />
                </>
              )}
              <Icon
                className={`relative h-[22px] w-[22px] transition-transform duration-200 group-active:scale-90 ${
                  isActive ? 'stroke-[2.2px] drop-shadow-[0_0_6px_rgba(113,44,220,0.3)]' : 'stroke-[1.75px]'
                }`}
              />
              <span
                className={`relative max-w-full truncate text-[10px] tracking-wide ${
                  isActive ? 'font-bold' : 'font-medium'
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
