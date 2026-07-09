"use client";

import React, { useState, useEffect } from "react";

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanName: string;
}

export function SubscribeModal({ isOpen, onClose, selectedPlanName }: SubscribeModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    mealPreference: "non-veg" as "veg" | "non-veg",
    startDate: "",
    address: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Pre-fill plan name if passed from Pricing component
  useEffect(() => {
    if (selectedPlanName) {
      setFormData((prev) => ({ ...prev, plan: selectedPlanName }));
    }
  }, [selectedPlanName, isOpen]);

  // Set default start date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const dd = String(tomorrow.getDate()).padStart(2, "0");
    setFormData((prev) => ({ ...prev, startDate: `${yyyy}-${mm}-${dd}` }));
  }, []);

  if (!isOpen) return null;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePreferenceChange = (pref: "veg" | "non-veg") => {
    setFormData((prev) => ({ ...prev, mealPreference: pref }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setSubmitError("Please fill out all fields.");
      return;
    }
    setSubmitError("");
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.plan || !formData.startDate || !formData.address) {
      setSubmitError("Please fill out all preference and address fields.");
      return;
    }
    setSubmitError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setStep(3);
      } else {
        setSubmitError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate WhatsApp url with prefilled order text
  const getWhatsAppUrl = () => {
    const hostNumber = "919121538113";
    const text = `Hi Kayal Meal Box! 🍲\n\nI have requested a subscription on your website. Here are my details:\n\n👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n📧 *Email:* ${formData.email}\n📦 *Plan Selected:* ${formData.plan}\n🌱 *Preference:* ${formData.mealPreference === "veg" ? "Veg Only" : "Veg / Non-Veg"}\n📅 *Start Date:* ${formData.startDate}\n📍 *Delivery Address:* ${formData.address}\n\nPlease confirm my subscription. Thank you!`;
    return `https://wa.me/${hostNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-[#FFFBF0] rounded-3xl border border-[#0B0C10]/15 shadow-2xl overflow-hidden z-10 transition-all font-sans">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-black transition-colors bg-white/80 p-1.5 rounded-full hover:scale-105 active:scale-95"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Progress Bar Header */}
        <div className="bg-white border-b border-[#0B0C10]/10 px-8 py-5 flex items-center justify-between">
          <h3 className="font-extrabold text-xl text-[#0B0C10]">
            {step === 3 ? "Order Confirmed!" : "Subscribe to Meals"}
          </h3>
          {step < 3 && (
            <div className="flex gap-1.5 items-center">
              <span className={`w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold ${step === 1 ? 'bg-[#FFC503] text-[#0B0C10]' : 'bg-green-100 text-green-700'}`}>
                {step > 1 ? "✓" : "1"}
              </span>
              <div className="w-8 h-0.5 bg-gray-200" />
              <span className={`w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold ${step === 2 ? 'bg-[#FFC503] text-[#0B0C10]' : 'bg-gray-200 text-gray-500'}`}>
                2
              </span>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-8 max-h-[80vh] overflow-y-auto">
          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-5">
              <div className="text-center mb-4">
                <p className="text-sm text-text-muted">
                  Let's start with your basic contact information so we can reach you about your daily deliveries.
                </p>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-[#0B0C10] uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Rahul Kumar"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-[#0B0C10]/15 focus:outline-none focus:border-[#FFC503] focus:ring-2 focus:ring-[#FFC503]/20 transition-all font-medium text-sm text-[#0B0C10]"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-[#0B0C10] uppercase tracking-wider mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-[#0B0C10]/15 focus:outline-none focus:border-[#FFC503] focus:ring-2 focus:ring-[#FFC503]/20 transition-all font-medium text-sm text-[#0B0C10]"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-[#0B0C10] uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. rahul@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-[#0B0C10]/15 focus:outline-none focus:border-[#FFC503] focus:ring-2 focus:ring-[#FFC503]/20 transition-all font-medium text-sm text-[#0B0C10]"
                />
              </div>

              {submitError && (
                <p className="text-red-600 text-xs font-bold text-center mt-2">{submitError}</p>
              )}

              <button
                type="submit"
                className="w-full mt-2 py-3 bg-[#0B0C10] hover:bg-black text-white font-extrabold rounded-full text-center transition-all shadow-md active:scale-[0.98] text-sm tracking-wide"
              >
                Next Step
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-extrabold text-[#0B0C10] uppercase tracking-wider mb-2">
                  Selected Meal Plan
                </label>
                <select
                  name="plan"
                  value={formData.plan}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-[#0B0C10]/15 focus:outline-none focus:border-[#FFC503] focus:ring-2 focus:ring-[#FFC503]/20 transition-all font-medium text-sm text-[#0B0C10]"
                >
                  <option value="Full Meal Plan">Full Meal Plan (Lunch + Tea Snacks + Dinner)</option>
                  <option value="Lunch + Dinner Plan">Lunch + Dinner Plan</option>
                  <option value="Lunch Only Plan">Lunch Only Plan</option>
                  <option value="Dinner Only Plan">Dinner Only Plan</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-[#0B0C10] uppercase tracking-wider mb-2">
                  Dietary Preference
                </label>
                <div className="grid grid-cols-1 gap-3">
                  <button
                    type="button"
                    onClick={() => handlePreferenceChange("non-veg")}
                    className={`py-3 px-4 rounded-xl border-2 flex items-center justify-center gap-2 font-bold text-sm transition-all ${
                      formData.mealPreference === "non-veg"
                        ? "border-[#FFC503] bg-[#FFF9E6] text-[#0B0C10]"
                        : "border-gray-200 bg-white text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    <span>🍗</span> Veg / Non-Veg
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-[#0B0C10] uppercase tracking-wider mb-2">
                  Delivery Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  required
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-[#0B0C10]/15 focus:outline-none focus:border-[#FFC503] focus:ring-2 focus:ring-[#FFC503]/20 transition-all font-medium text-sm text-[#0B0C10]"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-[#0B0C10] uppercase tracking-wider mb-2">
                  Delivery Address
                </label>
                <textarea
                  name="address"
                  required
                  rows={3}
                  placeholder="Enter your complete home or office address in Nallagandla, Gopanpalle, etc."
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-[#0B0C10]/15 focus:outline-none focus:border-[#FFC503] focus:ring-2 focus:ring-[#FFC503]/20 transition-all font-medium text-sm text-[#0B0C10] resize-none"
                />
              </div>

              {submitError && (
                <p className="text-red-600 text-xs font-bold text-center mt-2">{submitError}</p>
              )}

              <div className="grid grid-cols-3 gap-3 mt-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="py-3 bg-white hover:bg-gray-50 border border-gray-200 text-[#0B0C10] font-extrabold rounded-full text-center transition-all text-sm"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="col-span-2 py-3 bg-[#0B0C10] hover:bg-black text-white font-extrabold rounded-full text-center transition-all shadow-md active:scale-[0.98] text-sm disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit Subscription"}
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600 border border-green-200 shadow-sm animate-bounce">
                <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-extrabold text-[#0B0C10]">Subscription Requested!</h4>
                <p className="text-sm text-text-muted">
                  Your request has been successfully recorded in our system. Let's finish the process on WhatsApp to finalize your delivery slot!
                </p>
              </div>

              {/* Order Summary Card */}
              <div className="bg-white border border-[#FFC503]/30 rounded-2xl p-5 text-left text-sm space-y-2">
                <p className="text-xs text-text-muted border-b border-dashed pb-1.5 mb-2 font-bold uppercase tracking-wider">
                  Order Summary
                </p>
                <div><span className="font-bold text-[#0B0C10]">Name:</span> {formData.name}</div>
                <div><span className="font-bold text-[#0B0C10]">Plan:</span> {formData.plan}</div>
                <div>
                  <span className="font-bold text-[#0B0C10]">Preference:</span>{" "}
                  {formData.mealPreference === "veg" ? "🌱 Veg Only" : "🍗 Veg / Non-Veg"}
                </div>
                <div><span className="font-bold text-[#0B0C10]">Start Date:</span> {formData.startDate}</div>
                <div className="line-clamp-2"><span className="font-bold text-[#0B0C10]">Address:</span> {formData.address}</div>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 sm:py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold rounded-full text-center transition-all shadow-md active:scale-[0.98] text-sm flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 1.967 14.111 1.94 11.48 1.94c-5.44 0-9.866 4.372-9.87 9.802 0 1.634.502 3.224 1.457 4.842L2.035 20.85l4.612-1.696z" />
                  </svg>
                  Finalize on WhatsApp
                </a>
                <button
                  onClick={onClose}
                  className="w-full py-2.5 bg-transparent hover:bg-gray-100 text-[#0B0C10]/70 hover:text-black font-extrabold rounded-full text-center transition-all text-xs"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
