"use client";

import React from 'react';
import { WHATSAPP_URL } from '@/lib/data';
import { SubscribeModal } from "@/components/ui/SubscribeModal";

interface PlanFeatureProps {
  text: string;
}

const PlanFeature: React.FC<PlanFeatureProps> = ({ text }) => (
  <div className="flex items-start gap-3 text-left">
    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0B0C10] flex items-center justify-center text-white text-[10px] font-bold mt-0.5">
      ✓
    </div>
    <span className="text-sm font-medium text-[#0B0C10]/80 leading-snug">{text}</span>
  </div>
);

const plans = [
  {
    name: 'Full Meal Plan',
    desc: 'Lunch + Tea Snacks + Dinner',
    price: '4,499',
    trial: '1,499',
    banner: 'Best Value for Families',
    popular: true,
    features: [
      '3 meals daily (Lunch, Tea Snacks & Dinner)',
      'Traditional South Indian & Kerala taste',
      'Pause or resume subscription anytime',
      'Free doorstep delivery',
    ]
  },
  {
    name: 'Lunch + Dinner Plan',
    desc: 'Lunch & Dinner daily',
    price: '3,999',
    trial: '1,199',
    banner: 'Most Popular Choice',
    popular: true,
    features: [
      '2 meals daily (Lunch & Dinner)',
      'Perfect for busy professionals',
      'Pause or resume subscription anytime',
      'Free doorstep delivery',
    ]
  },
  {
    name: 'Lunch Only Plan',
    desc: 'Mid-day fresh hot Lunch',
    price: '2,999',
    trial: '1,199',
    banner: 'Perfect for Office Goers',
    popular: false,
    features: [
      '1 meal daily (Lunch only)',
      'Delivered fresh at mid-day',
      'Pause or resume subscription anytime',
      'Free doorstep delivery',
    ]
  },
  {
    name: 'Dinner Only Plan',
    desc: 'Warm evening fresh Dinner',
    price: '2,999',
    trial: '1,199',
    banner: 'Relax After Work',
    popular: false,
    features: [
      '1 meal daily (Dinner only)',
      'Delivered fresh in the evening',
      'Pause or resume subscription anytime',
      'Free doorstep delivery',
    ]
  }
];

export function Pricing() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedPlan, setSelectedPlan] = React.useState("");
  return (
    <section id="pricing" className="py-16 md:py-24 bg-[#FFFBF0] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B0C10] mb-4">
            Our Subscription Plans
          </h2>
          <p className="text-base md:text-lg text-text-muted max-w-3xl mx-auto leading-relaxed">
            Choose a monthly subscription plan (30 Days) that fits your routine. Try our one-week trial plans to taste before you commit.
          </p>
        </div>

        {/* Coupon Code Banner */}
        

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-3xl border-2 overflow-hidden flex flex-col justify-between shadow-md transition-transform hover:scale-[1.01] ${
                plan.popular ? 'border-[#FFC503]' : 'border-[#0B0C10]/10'
              }`}
            >
              <div>
                {/* Card Header Banner */}
                <div className={`py-3 text-center ${
                  plan.popular ? 'bg-[#FFC503]' : 'bg-[#0B0C10]'
                }`}>
                  <span className={`text-xs font-extrabold italic uppercase tracking-wider ${
                    plan.popular ? 'text-[#0B0C10]' : 'text-white'
                  }`}>
                    {plan.banner}
                  </span>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-lg font-extrabold text-[#0B0C10] mb-4 uppercase tracking-tight min-h-[56px] flex items-center justify-center">
                    {plan.name}
                  </h3>
                  
                  {/* Price Display */}
                  <div className="bg-[#FFFBF0] border border-[#FFC503]/20 rounded-2xl p-5 mb-6 flex flex-col items-center justify-center">
                    <div className="text-2xl font-extrabold text-[#0B0C10] leading-none">
                      ₹{plan.price} <span className="text-xs font-semibold text-text-muted">/ Month</span>
                    </div>
                    <div className="text-[11px] font-bold text-text-muted mt-1 uppercase tracking-wider">
                      (30 Days)
                    </div>
                  </div>

                  {/* One Week Trial Banner */}
                  <div className="bg-[#0B0C10]/5 border border-[#0B0C10]/10 rounded-xl py-2 px-3 mb-6">
                    <p className="text-xs font-bold text-[#0B0C10]">
                      One Week Trial: <span className="text-[#FFC503] font-extrabold bg-[#0B0C10] px-2 py-0.5 rounded-md inline-block ml-1">₹{plan.trial}</span>
                    </p>
                  </div>

                  {/* Description & Features */}
                  <div className="space-y-3.5">
                    <div className="text-[10px] font-bold text-text-muted uppercase tracking-wider text-center border-b border-dashed border-gray-200 pb-1.5 mb-3">
                      Plan Details
                    </div>
                    {plan.features.map((feature, i) => (
                      <PlanFeature key={i} text={feature} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button 
                  onClick={() => {
                    setSelectedPlan(plan.name);
                    setIsModalOpen(true);
                  }}
                  className="block w-full py-2 px-4 sm:py-3 sm:px-6 bg-[#0B0C10] hover:bg-black text-white text-sm font-bold rounded-full text-center transition-all shadow-sm active:scale-[0.98] cursor-pointer"
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      <SubscribeModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlanName={selectedPlan}
      />
    </section>
  );
}
