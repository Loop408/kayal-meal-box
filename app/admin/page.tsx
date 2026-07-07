"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface Subscription {
  id: string;
  name: string;
  email: string;
  phone: string;
  plan: string;
  mealPreference: "veg" | "non-veg";
  startDate: string;
  address: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterPlan, setFilterPlan] = useState("all");
  const [filterPref, setFilterPref] = useState("all");

  const fetchSubscriptions = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin");
      const data = await response.json();
      if (response.ok && data.success) {
        setSubscriptions(data.subscriptions);
      } else {
        setError(data.error || "Failed to load subscriptions.");
      }
    } catch (err) {
      console.error("Error fetching subscriptions:", err);
      setError("Failed to fetch subscriptions. Please verify the server is running.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  const handleDelete = async (id: string, name: string) => {
    if (!window.confirm(`Are you sure you want to delete the subscription for ${name}?`)) {
      return;
    }

    try {
      const response = await fetch(`/api/admin?id=${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setSubscriptions((prev) => prev.filter((sub) => sub.id !== id));
      } else {
        alert(data.error || "Failed to delete subscription.");
      }
    } catch (err) {
      console.error("Error deleting subscription:", err);
      alert("Error deleting subscription. Please try again.");
    }
  };

  // Filter & Search Logic
  const filteredSubs = subscriptions.filter((sub) => {
    const matchesSearch = 
      sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.address.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPlan = filterPlan === "all" || sub.plan === filterPlan;
    const matchesPref = filterPref === "all" || sub.mealPreference === filterPref;

    return matchesSearch && matchesPlan && matchesPref;
  });

  // Calculate statistics
  const totalCount = subscriptions.length;
  const vegCount = subscriptions.filter((sub) => sub.mealPreference === "veg").length;
  const nonVegCount = subscriptions.filter((sub) => sub.mealPreference === "non-veg").length;
  
  // Calculate plan distribution
  const planCounts = subscriptions.reduce((acc: Record<string, number>, sub) => {
    acc[sub.plan] = (acc[sub.plan] || 0) + 1;
    return acc;
  }, {});

  // Find most popular plan
  let popularPlan = "N/A";
  let maxCount = 0;
  Object.entries(planCounts).forEach(([plan, count]) => {
    if (count > maxCount) {
      maxCount = count;
      popularPlan = plan;
    }
  });

  const formatDate = (isoString: string) => {
    try {
      const date = new Date(isoString);
      return date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (e) {
      return isoString;
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFBF0] font-sans pb-16">
      {/* Top Banner */}
      <header className="bg-white border-b border-[#0B0C10]/10 shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🍲</span>
            <div>
              <h1 className="text-xl font-extrabold text-[#0B0C10] tracking-tight">
                Kayal Meal Box
              </h1>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Host Admin Panel
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={fetchSubscriptions}
              className="px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 text-sm font-bold text-[#0B0C10] rounded-full transition-all active:scale-95 inline-flex items-center gap-2"
            >
              🔄 Refresh
            </button>
            <Link
              href="/"
              className="px-5 py-2 bg-[#FFC503] hover:bg-[#FFC503]/90 text-sm font-extrabold text-[#0B0C10] rounded-full transition-all active:scale-95"
            >
              View Public Site
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Statistics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl border border-[#0B0C10]/15 shadow-sm">
            <p className="text-xs font-extrabold text-gray-400 uppercase tracking-wider mb-1">
              Total Subscribers
            </p>
            <p className="text-3xl font-black text-[#0B0C10]">{totalCount}</p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl border border-[#0B0C10]/15 shadow-sm">
            <p className="text-xs font-extrabold text-green-500 uppercase tracking-wider mb-1">
              🌱 Veg Only
            </p>
            <p className="text-3xl font-black text-[#0B0C10]">{vegCount}</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl border border-[#0B0C10]/15 shadow-sm">
            <p className="text-xs font-extrabold text-amber-600 uppercase tracking-wider mb-1">
              🍗 Veg / Non-Veg
            </p>
            <p className="text-3xl font-black text-[#0B0C10]">{nonVegCount}</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl border border-[#0B0C10]/15 shadow-sm">
            <p className="text-xs font-extrabold text-[#FFC503] uppercase tracking-wider mb-1">
              Popular Plan
            </p>
            <p className="text-base font-extrabold text-[#0B0C10] truncate mt-1.5" title={popularPlan}>
              {popularPlan.replace(" Plan", "")}
            </p>
          </div>
        </div>

        {/* Search & Filters Container */}
        <div className="bg-white p-6 rounded-3xl border border-[#0B0C10]/10 shadow-sm mb-8 space-y-4">
          <h2 className="font-extrabold text-[#0B0C10] text-lg">Filter & Search Subscribers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="col-span-1 md:col-span-2 relative">
              <input
                type="text"
                placeholder="Search by name, phone, email, address..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-3 bg-[#FFFBF0] rounded-xl border border-gray-200 focus:outline-none focus:border-[#FFC503] font-medium text-sm text-[#0B0C10]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Plan Filter */}
            <div>
              <select
                value={filterPlan}
                onChange={(e) => setFilterPlan(e.target.value)}
                className="w-full px-3 py-3 bg-[#FFFBF0] rounded-xl border border-gray-200 focus:outline-none focus:border-[#FFC503] font-medium text-sm text-[#0B0C10]"
              >
                <option value="all">All Plans</option>
                <option value="Full Meal Plan">Full Meal Plan</option>
                <option value="Lunch + Dinner Plan">Lunch + Dinner Plan</option>
                <option value="Lunch Only Plan">Lunch Only Plan</option>
                <option value="Dinner Only Plan">Dinner Only Plan</option>
              </select>
            </div>

            {/* Preference Filter */}
            <div>
              <select
                value={filterPref}
                onChange={(e) => setFilterPref(e.target.value)}
                className="w-full px-3 py-3 bg-[#FFFBF0] rounded-xl border border-gray-200 focus:outline-none focus:border-[#FFC503] font-medium text-sm text-[#0B0C10]"
              >
                <option value="all">All Preferences</option>
                <option value="veg">🌱 Veg Only</option>
                <option value="non-veg">🍗 Veg / Non-Veg</option>
              </select>
            </div>
          </div>
        </div>

        {/* Subscriptions Table */}
        <div className="bg-white rounded-3xl border border-[#0B0C10]/10 shadow-sm overflow-hidden">
          
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block w-8 h-8 border-4 border-[#FFC503] border-t-transparent rounded-full animate-spin mb-4" />
              <p className="text-sm font-bold text-gray-500">Loading subscriptions...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20 text-red-600 font-bold">
              <p className="mb-2">⚠️ {error}</p>
              <button 
                onClick={fetchSubscriptions}
                className="mt-2 text-xs bg-red-100 hover:bg-red-200 px-4 py-1.5 rounded-full text-red-800 transition-all"
              >
                Try Again
              </button>
            </div>
          ) : filteredSubs.length === 0 ? (
            <div className="text-center py-20 text-gray-500 font-bold">
              <p className="text-4xl mb-4">📭</p>
              <p>No subscription records match your search criteria.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-[#FFFBF0] border-b border-gray-100 text-[#0B0C10] font-extrabold uppercase text-xs tracking-wider">
                    <th className="px-6 py-4">Submission Date</th>
                    <th className="px-6 py-4">Customer</th>
                    <th className="px-6 py-4">Subscription Choice</th>
                    <th className="px-6 py-4">Delivery Start</th>
                    <th className="px-6 py-4">Delivery Address</th>
                    <th className="px-6 py-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-medium">
                  {filteredSubs.map((sub) => (
                    <tr key={sub.id} className="hover:bg-[#FFFBF0]/50 transition-colors">
                      
                      {/* Date */}
                      <td className="px-6 py-4 text-xs text-gray-500 whitespace-nowrap">
                        {formatDate(sub.createdAt)}
                      </td>
                      
                      {/* Customer Details */}
                      <td className="px-6 py-4">
                        <div className="font-extrabold text-[#0B0C10] text-sm">{sub.name}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{sub.email}</div>
                        <div className="text-xs text-[#0B0C10]/80 font-bold mt-1">{sub.phone}</div>
                      </td>

                      {/* Subscription Choice */}
                      <td className="px-6 py-4">
                        <div className="text-[#0B0C10] font-extrabold">{sub.plan.replace(" Plan", "")}</div>
                        <div className="mt-1">
                          <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wide ${
                            sub.mealPreference === "veg"
                              ? "bg-green-50 text-green-700 border border-green-200"
                              : "bg-amber-50 text-amber-700 border border-amber-200"
                          }`}>
                            {sub.mealPreference === "veg" ? "🌱 Veg" : "🍗 Non-Veg"}
                          </span>
                        </div>
                      </td>

                      {/* Start Date */}
                      <td className="px-6 py-4 text-gray-700 whitespace-nowrap">
                        📅 {sub.startDate}
                      </td>

                      {/* Delivery Address */}
                      <td className="px-6 py-4 max-w-xs">
                        <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed" title={sub.address}>
                          {sub.address}
                        </p>
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4 text-center whitespace-nowrap">
                        <div className="flex items-center justify-center gap-2">
                          <a
                            href={`https://wa.me/${sub.phone.replace(/[^0-9]/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-green-50 hover:bg-green-100 border border-green-200 text-green-700 rounded-full transition-all text-xs font-bold flex items-center gap-1.5 shadow-sm active:scale-95"
                            title="Chat on WhatsApp"
                          >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 1.967 14.111 1.94 11.48 1.94c-5.44 0-9.866 4.372-9.87 9.802 0 1.634.502 3.224 1.457 4.842L2.035 20.85l4.612-1.696z" />
                            </svg>
                            <span>WhatsApp</span>
                          </a>
                          
                          <button
                            onClick={() => handleDelete(sub.id, sub.name)}
                            className="p-2 bg-red-50 hover:bg-red-100 border border-red-200 text-red-600 rounded-full transition-all text-xs font-bold hover:scale-105 active:scale-95"
                            title="Delete Record"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>

      </main>
    </div>
  );
}
