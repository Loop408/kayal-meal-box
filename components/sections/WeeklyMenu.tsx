"use client";

import React, { useState } from 'react';

type DayName = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

interface Meal {
  label: 'LUNCH' | 'TEA SNACKS' | 'DINNER';
  vegItem: string;
  nonVegItem: string;
  vegDesc: string;
  nonVegDesc: string;
}

const menuData: Record<DayName, Meal[]> = {
  Monday: [
    { label: 'LUNCH', vegItem: 'Veg Meals', nonVegItem: 'Veg Meals', vegDesc: '', nonVegDesc: '' },
    { label: 'TEA SNACKS', vegItem: 'Tea + Pazhampori', nonVegItem: 'Tea + Pazhampori', vegDesc: '', nonVegDesc: '' },
    { label: 'DINNER', vegItem: 'Chapati with Veg / Non Veg Curry', nonVegItem: 'Chapati with Veg / Non Veg Curry', vegDesc: '', nonVegDesc: '' }
  ],
  Tuesday: [
    { label: 'LUNCH', vegItem: 'Veg Meals / Non Veg Meals', nonVegItem: 'Veg Meals / Non Veg Meals', vegDesc: '', nonVegDesc: '' },
    { label: 'TEA SNACKS', vegItem: 'Tea + Ela Ada', nonVegItem: 'Tea + Ela Ada', vegDesc: '', nonVegDesc: '' },
    { label: 'DINNER', vegItem: 'Puttu + Kadala Curry (Veg)', nonVegItem: 'Puttu + Kadala Curry (Veg)', vegDesc: '', nonVegDesc: '' }
  ],
  Wednesday: [
    { label: 'LUNCH', vegItem: 'Veg Meals Only', nonVegItem: 'Veg Meals Only', vegDesc: '', nonVegDesc: '' },
    { label: 'TEA SNACKS', vegItem: 'Tea + Achappam', nonVegItem: 'Tea + Achappam', vegDesc: '', nonVegDesc: '' },
    { label: 'DINNER', vegItem: 'Parotta / Appam with Veg / Non Veg Curry', nonVegItem: 'Parotta / Appam with Veg / Non Veg Curry', vegDesc: '', nonVegDesc: '' }
  ],

  Thursday: [
    {
      label: 'LUNCH',
      vegItem: 'Veg Meals / Non Veg Meals',
      nonVegItem: 'Veg Meals / Non Veg Meals',
      vegDesc: '',
      nonVegDesc: ''
    },
    {
      label: 'TEA SNACKS',
      vegItem: 'Tea + Ela Ada',
      nonVegItem: 'Tea + Ela Ada',
      vegDesc: '',
      nonVegDesc: ''
    },
    {
      label: 'DINNER',
      vegItem: 'Chapati with Veg / Non Veg Curry',
      nonVegItem: 'Chapati with Veg / Non Veg Curry',
      vegDesc: '',
      nonVegDesc: ''
    }
  ],
  Friday: [
    {
      label: 'LUNCH',
      vegItem: 'Veg Meals / Non Veg Meals',
      nonVegItem: 'Veg Meals / Non Veg Meals',
      vegDesc: '',
      nonVegDesc: ''
    },
    {
      label: 'TEA SNACKS',
      vegItem: 'Tea + Pazhampori',
      nonVegItem: 'Tea + Pazhampori',
      vegDesc: '',
      nonVegDesc: ''
    },
    {
      label: 'DINNER',
      vegItem: 'Parotta / Appam with Veg Curry',
      nonVegItem: 'Parotta / Appam with Veg Curry',
      vegDesc: '',
      nonVegDesc: ''
    }
  ],
  Saturday: [
    {
      label: 'LUNCH',
      vegItem: 'Biriyani',
      nonVegItem: 'Biriyani',
      vegDesc: '',
      nonVegDesc: ''
    },
    {
      label: 'TEA SNACKS',
      vegItem: 'Tea + Unniyappam',
      nonVegItem: 'Tea + Unniyappam',
      vegDesc: '',
      nonVegDesc: ''
    },
    {
      label: 'DINNER',
      vegItem: 'Parotta / Appam with Veg / Non Veg Curry',
      nonVegItem: 'Parotta / Appam with Veg / Non Veg Curry',
      vegDesc: '',
      nonVegDesc: ''
    }
  ],
  Sunday: [
    {
      label: 'LUNCH',
      vegItem: 'Veg Meals / Non Veg Meals',
      nonVegItem: 'Veg Meals / Non Veg Meals',
      vegDesc: '',
      nonVegDesc: ''
    },
    {
      label: 'TEA SNACKS',
      vegItem: 'Tea + Unniyappam',
      nonVegItem: 'Tea + Unniyappam',
      vegDesc: '',
      nonVegDesc: ''
    },
    {
      label: 'DINNER',
      vegItem: 'Puttu with Veg / Non Veg Curry',
      nonVegItem: 'Puttu with Veg / Non Veg Curry',
      vegDesc: '',
      nonVegDesc: ''
    }
  ]
};

const dayShortNames: Record<string, DayName> = {
  Mon: 'Monday',
  Tue: 'Tuesday',
  Wed: 'Wednesday',
  Thu: 'Thursday',
  Fri: 'Friday',
  Sat: 'Saturday',
  Sun: 'Sunday'
};

export function WeeklyMenu() {
  const [selectedDayShort, setSelectedDayShort] = useState<string>('Mon');
  const [isNonVeg, setIsNonVeg] = useState<boolean>(false);

  const activeDayName = dayShortNames[selectedDayShort];
  const activeMeals = menuData[activeDayName] || [];

  return (
    <section id="menu" className="py-16 md:py-24 bg-[#FFFBF0] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Veg Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <h2 className="text-3xl md:text-[40px] font-extrabold text-[#0B0C10] tracking-tight">
            Our Menu
          </h2>
          {/* Veg/Non-Veg Switch Toggle */}
          <div className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-full border border-[#0B0C10]/10 shadow-sm font-bold text-xs tracking-wider">
            <span className={!isNonVeg ? 'text-[#0B0C10]' : 'text-text-muted'}>VEG</span>
            <button 
              onClick={() => setIsNonVeg(!isNonVeg)}
              className="relative w-12 h-6 bg-[#0B0C10]/10 rounded-full transition-colors focus:outline-none"
            >
              <div 
                className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-[#39ff14] transition-transform duration-200 ${isNonVeg ? 'transform translate-x-6' : ''}`}
              />
            </button>
            <span className={isNonVeg ? 'text-[#0B0C10]' : 'text-text-muted'}>NON-VEG</span>
          </div>
        </div>
        {/* Days Tab Bar */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-2 overflow-x-auto">
          {Object.keys(dayShortNames).map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDayShort(day)}
              className={`px-6 py-3 rounded-full font-extrabold text-sm md:text-base transition-all active:scale-95 ${
                selectedDayShort === day
                  ? 'bg-[#FFC503] text-[#0B0C10] shadow-sm'
                  : 'bg-white hover:bg-[#0B0C10]/5 border border-[#0B0C10]/5 text-[#0B0C10]'
              }`}
            >
              {day}
            </button>
          ))}
        </div>
        {/* Meals Cards Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeMeals.map((meal, index) => {
            const title = isNonVeg ? meal.nonVegItem : meal.vegItem;
            const description = isNonVeg ? meal.nonVegDesc : meal.vegDesc;
            return (
              <div 
                key={index} 
                className="bg-white border border-[#FFC503]/40 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  {/* Badge */}
                  <span className="inline-block px-3 py-1 bg-[#E5F9EB] text-[#2F6B45] font-extrabold rounded-full text-xs tracking-wider mb-4">
                    {meal.label}
                  </span>
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-[#0B0C10] mb-3 leading-snug">
                    {title}
                  </h3>
                  {/* Description */}
                  <p className="text-sm text-text-muted leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
