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

const VEG_MEALS_DESC = "Veg Meals: Matta Rice, Sambar, Pulissery, Pappadam, Thoran, Pachadi, and Koottukari. The vegetable dishes (Thoran, Pachadi, and Koottukari) may vary depending on the availability of fresh seasonal vegetables.";

const menuData: Record<DayName, Meal[]> = {
  Monday: [
    { label: 'LUNCH', vegItem: 'Veg Meals', nonVegItem: 'Veg Meals', vegDesc: VEG_MEALS_DESC, nonVegDesc: '' },
    { label: 'TEA SNACKS', vegItem: 'Tea + Pazhampori', nonVegItem: 'Tea + Pazhampori', vegDesc: '', nonVegDesc: '' },
    { label: 'DINNER', vegItem: 'Chapati with Veg / Non Veg Curry', nonVegItem: 'Chapati with Veg / Non Veg Curry', vegDesc: '', nonVegDesc: '' }
  ],
  Tuesday: [
    { label: 'LUNCH', vegItem: 'Veg Meals / Non Veg Meals', nonVegItem: 'Veg Meals / Non Veg Meals', vegDesc: VEG_MEALS_DESC, nonVegDesc: '' },
    { label: 'TEA SNACKS', vegItem: 'Tea + Ela Ada', nonVegItem: 'Tea + Ela Ada', vegDesc: '', nonVegDesc: '' },
    { label: 'DINNER', vegItem: 'Puttu + Kadala Curry (Veg)', nonVegItem: 'Puttu + Kadala Curry (Veg)', vegDesc: '', nonVegDesc: '' }
  ],
  Wednesday: [
    { label: 'LUNCH', vegItem: 'Veg Meals Only', nonVegItem: 'Veg Meals Only', vegDesc: VEG_MEALS_DESC, nonVegDesc: '' },
    { label: 'TEA SNACKS', vegItem: 'Tea + Achappam', nonVegItem: 'Tea + Achappam', vegDesc: '', nonVegDesc: '' },
    { label: 'DINNER', vegItem: 'Parotta / Appam with Veg / Non Veg Curry', nonVegItem: 'Parotta / Appam with Veg / Non Veg Curry', vegDesc: '', nonVegDesc: '' }
  ],

  Thursday: [
    {
      label: 'LUNCH',
      vegItem: 'Veg Meals / Non Veg Meals',
      nonVegItem: 'Veg Meals / Non Veg Meals',
      vegDesc: VEG_MEALS_DESC,
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
      vegDesc: VEG_MEALS_DESC,
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
      vegDesc: VEG_MEALS_DESC,
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
    <section id="menu" className="py-20 md:py-[100px] lg:py-[120px] bg-[#FFFBF0] font-sans">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-extrabold text-[#0B0C10] tracking-tight leading-[1.2]">
            Our Menu
          </h2>
        </div>
        {/* Days Tab Bar */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-2 overflow-x-auto">
          {Object.keys(dayShortNames).map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDayShort(day)}
              className={`px-6 py-3 rounded-full font-extrabold text-[14px] md:text-base transition-all active:scale-95 ${
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
                className="bg-white border border-[#FFC503]/40 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  {/* Badge */}
                  <span className="inline-block px-3 py-1 bg-[#E5F9EB] text-[#2F6B45] font-extrabold rounded-full text-xs tracking-wider mb-4">
                    {meal.label}
                  </span>
                  {/* Title */}
                  <h3 className="text-xl md:text-[24px] font-bold text-[#0B0C10] mb-3 leading-[1.3]">
                    {title}
                  </h3>
                  {/* Description */}
                  <p className="text-[14px] text-text-muted leading-[1.6]">
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
