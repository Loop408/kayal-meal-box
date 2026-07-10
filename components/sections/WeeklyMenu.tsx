"use client";

import Image from 'next/image';
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
    { label: 'DINNER', vegItem: 'Chapati / Parotta with Veg / Non Veg Curry', nonVegItem: 'Chapati / Parotta with Veg / Non Veg Curry', vegDesc: '', nonVegDesc: '' }
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
      vegItem: 'Chapati / Parotta with Veg / Non Veg Curry',
      nonVegItem: 'Chapati / Parotta with Veg / Non Veg Curry',
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
      vegItem: 'Biriyani/Meals',
      nonVegItem: 'Biriyani/Meals',
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
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-extrabold text-[#0B0C10] tracking-tight leading-[1.2]">
            Our <span className="text-[#FFC503]">Weekly Menu</span>
          </h2>
          <p className="text-text-muted mt-4 text-lg max-w-2xl mx-auto">
            Discover our carefully curated home-style meals for every day of the week. Prepared fresh, delivered hot.
          </p>
        </div>

        {/* Days Tab Bar */}
        <div className="flex flex-wrap gap-2.5 mb-12 pb-2 overflow-x-auto justify-center">
          {Object.keys(dayShortNames).map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDayShort(day)}
              className={`px-8 py-3 rounded-full font-extrabold text-[14px] md:text-base transition-all active:scale-95 ${
                selectedDayShort === day
                  ? 'bg-[#FFC503] text-[#0B0C10] shadow-md scale-105'
                  : 'bg-white hover:bg-[#0B0C10]/5 border border-[#0B0C10]/5 text-[#0B0C10]'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Active Day Meals */}
        <div className="flex flex-col gap-5 md:grid md:grid-cols-3 md:gap-8">
          {activeMeals.map((meal, index) => {
            const title = isNonVeg ? meal.nonVegItem : meal.vegItem;
            const description = isNonVeg ? meal.nonVegDesc : meal.vegDesc;
            
            // Assign images and colors based on label
            let imageSrc = "/illustrations/menu_lunch.png";
            let imageAlt = "Lunch";
            let badgeBg = "bg-[#FFF4E5]";
            let badgeText = "text-[#E65100]";
            let accentBorder = "border-t-[#FFC503]";

            if (meal.label === 'TEA SNACKS') {
              imageSrc = "/icons/dine_in.png";
              imageAlt = "Tea Snacks";
              badgeBg = "bg-[#E8F5E9]";
              badgeText = "text-[#2E7D32]";
              accentBorder = "border-t-[#4CAF50]";
            } else if (meal.label === 'DINNER') {
              imageSrc = "/icons/home_meal.png";
              imageAlt = "Dinner";
              badgeBg = "bg-[#E3F2FD]";
              badgeText = "text-[#1565C0]";
              accentBorder = "border-t-[#1565C0]";
            }

            return (
              <div 
                key={index} 
                className={`bg-white border border-[#0B0C10]/5 border-t-4 ${accentBorder} rounded-[16px] md:rounded-[20px] overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
              >
                {/* Image */}
                <div className="w-full h-[160px] md:h-[180px] shrink-0 bg-gradient-to-br from-[#FFFBF0] to-white flex items-center justify-center p-4 md:p-6 relative overflow-hidden">
                   <div className="absolute inset-0 bg-[#FFC503]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                   <Image src={imageSrc} alt={imageAlt} width={200} height={200} className="w-full h-full object-contain mix-blend-multiply drop-shadow-sm group-hover:scale-110 transition-transform duration-500" />
                </div>

                {/* Content */}
                <div className="p-4 md:p-6 flex flex-col flex-grow min-w-0">
                  <span className={`inline-block w-max px-3 py-1 ${badgeBg} ${badgeText} font-extrabold rounded-full text-[10px] md:text-[11px] uppercase tracking-widest mb-2 md:mb-3`}>
                    {meal.label}
                  </span>
                  <h4 className="text-[15px] md:text-xl font-bold text-[#0B0C10] leading-[1.4] mb-1">
                    {title}
                  </h4>
                  {description && (
                    <p className="text-[12px] md:text-[14px] text-text-muted leading-[1.5]">
                      {description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
