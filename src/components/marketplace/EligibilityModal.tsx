'use client';

import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Loader2, 
  Lock, 
  Building2,
  Calendar,
  Wallet
} from 'lucide-react';
import { Product } from '@/types/marketplace';
import { formatCurrency } from '@/utils/formatters';
import { marketplaceApi } from '@/services/marketplaceApi';

interface EligibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  details: {
    product: Product;
    variantId: string;
    variantName: string;
    price: number;
    tenure: number;
    monthlyEmi: number;
  } | null;
  onOrderComplete: () => void;
}

export default function EligibilityModal({
  isOpen,
  onClose,
  details,
  onOrderComplete,
}: EligibilityModalProps) {
  const [step, setStep] = useState<'input' | 'verifying' | 'approved' | 'success'>('input');
  const [mobile, setMobile] = useState('9876543210');
  const [pan, setPan] = useState('ABCDE1234F');
  const [loading, setLoading] = useState(false);
  const [eligibilityData, setEligibilityData] = useState<{
    approvedCreditLimit: number;
    portfolioValue: number;
    depository: string;
  } | null>(null);

  if (!isOpen || !details) return null;

  const handleCheckEligibility = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep('verifying');
    setLoading(true);

    try {
      const res = await marketplaceApi.checkEligibility({
        mobile,
        pan,
        requestedAmount: details.price,
      });

      setEligibilityData({
        approvedCreditLimit: res.approvedCreditLimit,
        portfolioValue: res.portfolioValue,
        depository: res.depository,
      });

      setStep('approved');
    } catch (err) {
      setStep('input');
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmOrder = async () => {
    setLoading(true);
    try {
      await marketplaceApi.submitOrder({
        productId: details.product.id,
        productName: details.product.name,
        brand: details.product.brand,
        variantId: details.variantId,
        variantName: details.variantName,
        principalAmount: details.price,
        tenureMonths: details.tenure,
        monthlyEmi: details.monthlyEmi,
        interestRate: 0,
        downpayment: 0,
        estimatedMfCollateralValue: eligibilityData?.portfolioValue || details.price * 2,
        mfProvider: 'CAMS',
      });
      setStep('success');
    } catch (err) {
      // fallback
    } finally {
      setLoading(false);
    }
  };

  const handleDone = () => {
    onClose();
    setStep('input');
    onOrderComplete();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4 animate-fade-in">
      <div className="w-full max-w-[480px] rounded-t-[28px] sm:rounded-[28px] bg-white border border-gray-100 p-5 sm:p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        {step !== 'verifying' && (
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 h-8 w-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}

        {/* STEP 1: INPUT */}
        {step === 'input' && (
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#f5f0ff] border border-[#ece5ff] px-3 py-1 text-[11px] font-bold text-[#712CDC] mb-3">
              <Sparkles className="h-3 w-3" />
              <span>10-Second Eligibility Check</span>
            </div>

            <h3 className="text-[20px] font-extrabold tracking-tight text-gray-900 leading-tight">
              Check Your 1Fi Limit
            </h3>
            <p className="mt-1 text-[13px] text-gray-500 leading-relaxed">
              Verify your mutual fund portfolio to activate 0% No-Cost EMI with zero downpayment.
            </p>

            {/* Selected Plan Recap Card */}
            <div className="my-4 rounded-2xl border border-gray-200/90 bg-gray-50/80 p-3.5 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-bold text-gray-900 truncate">
                  {details.product.name}
                </span>
                <span className="text-[13.5px] font-extrabold text-gray-900">
                  {formatCurrency(details.price)}
                </span>
              </div>

              <div className="flex items-center justify-between border-t border-gray-200/60 pt-2 text-[12px]">
                <span className="text-gray-600 font-medium">
                  {details.variantName}
                </span>
                <span className="font-bold text-[#712CDC]">
                  {formatCurrency(details.monthlyEmi)}/mo × {details.tenure}M
                </span>
              </div>
            </div>

            <form onSubmit={handleCheckEligibility} className="space-y-3.5">
              <div>
                <label className="block text-[11.5px] font-bold uppercase tracking-wider text-gray-600 mb-1">
                  Mobile Number (Linked to MF)
                </label>
                <div className="flex items-center rounded-xl border border-gray-200 px-3 py-2.5 focus-within:border-[#712CDC] focus-within:ring-2 focus-within:ring-[#712CDC]/10">
                  <span className="text-sm font-semibold text-gray-500 mr-2">+91</span>
                  <input
                    type="tel"
                    maxLength={10}
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                    required
                    className="w-full bg-transparent border-0 outline-none text-sm font-semibold text-gray-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11.5px] font-bold uppercase tracking-wider text-gray-600 mb-1">
                  PAN Card Number
                </label>
                <div className="flex items-center rounded-xl border border-gray-200 px-3 py-2.5 focus-within:border-[#712CDC] focus-within:ring-2 focus-within:ring-[#712CDC]/10">
                  <input
                    type="text"
                    maxLength={10}
                    value={pan}
                    onChange={(e) => setPan(e.target.value.toUpperCase())}
                    required
                    className="w-full bg-transparent border-0 outline-none text-sm font-semibold text-gray-900 uppercase"
                  />
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-gray-500 pt-1">
                <Lock className="h-3 w-3 text-emerald-600" />
                <span>256-bit encrypted via CAMS & KFintech · No CIBIL Impact</span>
              </div>

              <button
                type="submit"
                disabled={mobile.length < 10 || pan.length < 10}
                className="mt-4 w-full rounded-full bg-[#712CDC] hover:bg-[#5e23b8] disabled:opacity-50 text-white py-3.5 text-[14.5px] font-bold shadow-md shadow-[#712CDC]/25 transition-all flex items-center justify-center gap-2"
              >
                <span>Check Eligibility</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        )}

        {/* STEP 2: VERIFYING */}
        {step === 'verifying' && (
          <div className="py-12 flex flex-col items-center text-center">
            <div className="relative mb-5">
              <Loader2 className="h-14 w-14 text-[#712CDC] animate-spin stroke-[1.8]" />
              <Building2 className="h-6 w-6 text-[#712CDC] absolute inset-0 m-auto" />
            </div>
            <h3 className="text-[18px] font-bold text-gray-900">
              Verifying Mutual Fund Holdings
            </h3>
            <p className="mt-1 text-[13px] text-gray-500 max-w-[280px]">
              Querying CAMS, KFintech, and MFCentral for approved collateral credit limit...
            </p>
          </div>
        )}

        {/* STEP 3: APPROVED & CONFIRM */}
        {step === 'approved' && eligibilityData && (
          <div>
            <div className="flex items-center gap-2 mb-3 text-emerald-600 bg-emerald-50 border border-emerald-200/80 px-3 py-1.5 rounded-full w-fit">
              <CheckCircle2 className="h-4 w-4" />
              <span className="text-[12px] font-bold">1Fi Approval Confirmed</span>
            </div>

            <h3 className="text-[20px] font-extrabold tracking-tight text-gray-900">
              Approved Credit: {formatCurrency(eligibilityData.approvedCreditLimit)}
            </h3>
            <p className="mt-1 text-[12.5px] text-gray-500">
              Backed by your mutual fund portfolio of {formatCurrency(eligibilityData.portfolioValue)} via {eligibilityData.depository}.
            </p>

            {/* Repayment & Loan Summary */}
            <div className="my-4 rounded-2xl border border-purple-100 bg-[#f9f6ff] p-4 space-y-2.5">
              <div className="flex justify-between items-center text-[13px]">
                <span className="text-gray-600 font-medium">Order Total:</span>
                <span className="font-extrabold text-gray-900">{formatCurrency(details.price)}</span>
              </div>

              <div className="flex justify-between items-center text-[13px]">
                <span className="text-gray-600 font-medium">Downpayment:</span>
                <span className="font-bold text-emerald-700">₹0 (Zero Upfront)</span>
              </div>

              <div className="flex justify-between items-center text-[13px]">
                <span className="text-gray-600 font-medium">Monthly Installment:</span>
                <span className="font-extrabold text-[#712CDC]">
                  {formatCurrency(details.monthlyEmi)} / month
                </span>
              </div>

              <div className="flex justify-between items-center text-[13px] border-t border-purple-200/60 pt-2">
                <span className="text-gray-600 font-medium">Tenure:</span>
                <span className="font-bold text-gray-800">{details.tenure} Months @ 0% Interest</span>
              </div>
            </div>

            {/* First repayment note */}
            <div className="flex items-center gap-2 text-[11.5px] text-gray-500 mb-5">
              <Calendar className="h-3.5 w-3.5 text-[#712CDC]" />
              <span>First EMI auto-debits next month. Foreclose anytime with 0 fees.</span>
            </div>

            <button
              type="button"
              onClick={handleConfirmOrder}
              disabled={loading}
              className="w-full rounded-full bg-[#712CDC] hover:bg-[#5e23b8] text-white py-3.5 text-[14.5px] font-bold shadow-md shadow-[#712CDC]/25 transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Placing Lien & Confirming...</span>
                </>
              ) : (
                <>
                  <span>Confirm & Complete Purchase</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        )}

        {/* STEP 4: SUCCESS */}
        {step === 'success' && (
          <div className="py-6 flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 animate-bounce">
              <CheckCircle2 className="h-10 w-10 stroke-[2]" />
            </div>

            <h3 className="text-[21px] font-extrabold text-gray-900 tracking-tight">
              Order Confirmed!
            </h3>
            <p className="mt-1 text-[13px] text-gray-600 max-w-[300px]">
              Your 0% No-Cost EMI order for <span className="font-bold text-gray-900">{details.product.name}</span> has been successfully placed.
            </p>

            <div className="my-5 w-full rounded-2xl border border-gray-200 bg-gray-50 p-4 text-left text-[12.5px] space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-500">Order ID:</span>
                <span className="font-mono font-bold text-gray-800">1FI-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">EMI Schedule:</span>
                <span className="font-bold text-[#712CDC]">{formatCurrency(details.monthlyEmi)} × {details.tenure} Months</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Estimated Delivery:</span>
                <span className="font-semibold text-gray-800">2-3 Business Days</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleDone}
              className="w-full rounded-full bg-[#712CDC] hover:bg-[#5e23b8] text-white py-3.5 text-[14px] font-bold shadow-md transition-all"
            >
              Back to Shop
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
