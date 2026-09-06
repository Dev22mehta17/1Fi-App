'use client';

import React from 'react';
import { Check, ShieldCheck, Zap, TrendingUp } from 'lucide-react';
import { EmiOption } from '@/types/marketplace';
import { formatCurrency } from '@/utils/formatters';

interface EmiPlanSelectorProps {
  emiPlans: EmiOption[];
  selectedTenure: number;
  onSelectTenure: (tenure: number) => void;
  principalAmount: number;
}

export default function EmiPlanSelector({
  emiPlans,
  selectedTenure,
  onSelectTenure,
  principalAmount,
}: EmiPlanSelectorProps) {
  if (!emiPlans || emiPlans.length === 0) return null;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-gray-500 block">
            Choose your EMI Plan
          </span>
          <span className="text-[12px] text-purple-900 font-semibold flex items-center gap-1 mt-0.5">
            <ShieldCheck className="h-3.5 w-3.5 text-[#712CDC]" />
            100% No-Cost EMI · Zero Downpayment
          </span>
        </div>
      </div>

      {/* List of EMI tenure cards */}
      <div className="flex flex-col gap-2.5">
        {emiPlans.map((plan) => {
          const isSelected = plan.tenureMonths === selectedTenure;

          return (
            <div
              key={plan.tenureMonths}
              onClick={() => onSelectTenure(plan.tenureMonths)}
              className={`group relative flex items-center justify-between p-3.5 rounded-2xl border transition-all duration-150 cursor-pointer ${
                isSelected
                  ? 'border-[#712CDC] bg-[#f8f4ff] ring-1 ring-[#712CDC] shadow-xs'
                  : 'border-gray-200 bg-white hover:border-[#712CDC]/40'
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-2.5 right-4 bg-gradient-to-r from-[#712CDC] to-[#9e0ad5] text-white text-[9.5px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow-xs tracking-wide">
                  Most Popular
                </span>
              )}

              <div className="flex items-center gap-3">
                {/* Radio selection circle */}
                <div
                  className={`h-5 w-5 rounded-full border flex items-center justify-center transition-colors ${
                    isSelected
                      ? 'border-[#712CDC] bg-[#712CDC] text-white'
                      : 'border-gray-300 bg-white group-hover:border-[#712CDC]/60'
                  }`}
                >
                  {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
                </div>

                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[16px] font-extrabold text-gray-900 tracking-tight">
                      {formatCurrency(plan.monthlyInstallment)}
                    </span>
                    <span className="text-[11px] text-gray-500 font-medium">/month</span>
                  </div>

                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[12px] font-semibold text-gray-700">
                      {plan.tenureMonths} Months
                    </span>
                    <span className="text-gray-300">·</span>
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200/50">
                      0% Interest
                    </span>
                  </div>
                </div>
              </div>

              {/* Total calculation indicator */}
              <div className="text-right">
                <span className="text-[11.5px] text-gray-400 block font-medium">
                  Total Payable
                </span>
                <span className="text-[13px] font-bold text-gray-800">
                  {formatCurrency(plan.totalPayable)}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Financial benefit banner */}
      <div className="mt-1 rounded-2xl border border-purple-200/80 bg-gradient-to-r from-purple-50 to-[#fdf9ff] p-3.5 flex items-start gap-3">
        <div className="h-8 w-8 rounded-xl bg-[#ede8ff] text-[#712CDC] flex items-center justify-center shrink-0 mt-0.5">
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-left">
          <h5 className="text-[12.5px] font-bold text-gray-900 leading-tight">
            Keep Earning Returns
          </h5>
          <p className="text-[11.5px] text-gray-600 leading-relaxed mt-0.5">
            Your mutual funds remain invested and keep compounding (~12% p.a.) while you repay in easy monthly installments.
          </p>
        </div>
      </div>
    </div>
  );
}
