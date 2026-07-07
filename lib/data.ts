export const WHATSAPP_URL = "https://wa.me/919121538113";
export const PHONE_URL = "tel:+919121538113";
export const PHONE_DISPLAY = "9121538113";
export const MAPS_URL =
  "https://maps.google.com/?q=1-100/5,+Gopanpalle,+Nallagandla,+Hyderabad,+Telangana+500046";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Menu", href: "#menu" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const trustItems = [
  {
    title: "Homely Taste",
    description: "Prepared just like your mother's cooking",
    icon: "🍲",
  },
  {
    title: "Hygienic Food",
    description: "Fresh ingredients, clean preparation",
    icon: "✨",
  },
  {
    title: "Affordable Price",
    description: "Healthy meals without restaurant prices",
    icon: "💰",
  },
  {
    title: "On Time Service",
    description: "Daily meals delivered fresh",
    icon: "⏰",
  },
] as const;

export const painPoints = [
  {
    title: "No time or energy to cook every day",
    description:
      "Long work hours leave little room for planning, shopping, and cooking fresh meals daily.",
  },
  {
    title: "Daily food app ordering gets too expensive",
    description:
      "Swiggy and Zomato bills add up fast — healthy eating shouldn't drain your wallet.",
  },
  {
    title: "Restaurant food feels unhygienic or inconsistent",
    description:
      "You deserve meals that are clean, predictable, and cooked with the care of home.",
  },
] as const;

export const howItWorksSteps = [
  {
    step: 1,
    title: "Choose a Meal Plan",
    description:
      "Pick the plan that fits your routine — full meals, lunch only, dinner only, or lunch plus dinner.",
  },
  {
    step: 2,
    title: "We Cook Fresh Every Day",
    description:
      "Our kitchen prepares South Indian homely meals each morning with fresh ingredients and love.",
  },
  {
    step: 3,
    title: "Delivered to Your Doorstep",
    description:
      "Hot, hygienic meals arrive on schedule across Nallagandla, Gopanpalle, and nearby areas.",
  },
] as const;

export const whyChooseItems = [
  {
    title: "Fresh Ingredients",
    description: "Sourced daily for authentic flavour and nutrition in every tiffin.",
  },
  {
    title: "Home Style South Indian Recipes",
    description: "Traditional recipes passed down — not restaurant shortcuts.",
  },
  {
    title: "Affordable Monthly Plans",
    description: "Predictable pricing with trial options so you can taste before you commit.",
  },
  {
    title: "Daily Fresh Cooking",
    description: "Nothing is reheated from yesterday — every meal is cooked the same day.",
  },
  {
    title: "Traditional Kerala & South Indian Taste",
    description: "Puttu, appam, pazhampori, and homely curries that feel like home.",
  },
] as const;

export type MealType = "veg" | "non-veg";

export interface MenuMeal {
  time: string;
  label: string;
  items: string;
  type?: MealType;
  highlight?: boolean;
}

export interface MenuDay {
  day: string;
  meals: MenuMeal[];
  vegOnly?: boolean;
  nonVegAvailable?: boolean;
  special?: boolean;
}

export const weeklyMenu: MenuDay[] = [
  {
    day: "Monday",
    meals: [
      { time: "12:00 PM – 3:00 PM", label: "Lunch", items: "Veg Meals", type: "veg" },
      {
        time: "4:30 PM – 6:30 PM",
        label: "Tea Snacks",
        items: "Tea + Pazhampori",
      },
      {
        time: "7:00 PM – 9:30 PM",
        label: "Dinner",
        items: "Chapati + Veg / Non Veg Curry",
        type: "veg",
      },
    ],
    vegOnly: true,
    nonVegAvailable: true,
  },
  {
    day: "Tuesday",
    meals: [
      { time: "12:00 PM – 3:00 PM", label: "Lunch", items: "Veg Meals", type: "veg" },
      { time: "4:30 PM – 6:30 PM", label: "Tea Snacks", items: "Tea + Ela Ada" },
      {
        time: "7:00 PM – 9:30 PM",
        label: "Dinner",
        items: "Puttu + Veg / Non Veg Curry",
        type: "veg",
      },
    ],
    vegOnly: true,
    nonVegAvailable: true,
  },
  {
    day: "Wednesday",
    meals: [
      {
        time: "12:00 PM – 3:00 PM",
        label: "Lunch",
        items: "Veg / Non-Veg Meals",
        type: "veg",
      },
      { time: "4:30 PM – 6:30 PM", label: "Tea Snacks", items: "Tea + Achappam" },
      {
        time: "7:00 PM – 9:30 PM",
        label: "Dinner",
        items: "Chapati + Veg / Non Veg Curry",
        type: "veg",
      },
    ],
    nonVegAvailable: true,
  },
  {
    day: "Thursday",
    meals: [
      { time: "12:00 PM – 3:00 PM", label: "Lunch", items: "Veg Meals", type: "veg" },
      { time: "4:30 PM – 6:30 PM", label: "Tea Snacks", items: "Tea + Unniyappam" },
      {
        time: "7:00 PM – 9:30 PM",
        label: "Dinner",
        items: "Puttu + Veg / Non Veg Curry",
        type: "veg",
      },
    ],
    vegOnly: true,
    nonVegAvailable: true,
  },
  {
    day: "Friday",
    meals: [
      {
        time: "12:00 PM – 3:00 PM",
        label: "Lunch",
        items: "Veg / Non-Veg Meals",
        type: "veg",
      },
      { time: "4:30 PM – 6:30 PM", label: "Tea Snacks", items: "Tea + Pazhampori" },
      {
        time: "7:00 PM – 9:30 PM",
        label: "Dinner",
        items: "Chapati + Veg / Non Veg Curry",
        type: "veg",
      },
    ],
    nonVegAvailable: true,
  },
  {
    day: "Saturday",
    special: true,
    meals: [
      {
        time: "12:00 PM – 3:00 PM",
        label: "Lunch",
        items: "Biriyani",
        type: "veg",
        highlight: true,
      },
      { time: "4:30 PM – 6:30 PM", label: "Tea Snacks", items: "Tea + Ela Ada" },
      {
        time: "7:00 PM – 9:30 PM",
        label: "Dinner",
        items: "Parotta / Appam + Veg / Non Veg Curry",
        type: "veg",
      },
    ],
    nonVegAvailable: true,
  },
  {
    day: "Sunday",
    meals: [
      { time: "12:00 PM – 3:00 PM", label: "Lunch", items: "Veg Meals", type: "veg" },
      { time: "4:30 PM – 6:30 PM", label: "Tea Snacks", items: "Tea + Achappam" },
      {
        time: "7:00 PM – 9:30 PM",
        label: "Dinner",
        items: "Chapati + Veg / Non Veg Curry",
        type: "veg",
      },
    ],
    vegOnly: true,
    nonVegAvailable: true,
  },
];

export const pricingPlans = [
  {
    id: "full",
    name: "Full Meal Plan",
    badge: "MOST POPULAR",
    accent: "green" as const,
    meals: "Lunch + Tea Snacks + Dinner",
    price: "₹4,499",
    period: "/ month",
    trial: "₹1,499",
    features: ["All 3 meals daily", "Best value for families", "Pause anytime"],
    popular: true,
  },
  {
    id: "lunch-dinner",
    name: "Lunch + Dinner",
    accent: "orange" as const,
    meals: "Lunch & Dinner daily",
    price: "₹3,999",
    period: "/ month",
    trial: "₹1,199",
    features: ["Two hearty meals daily", "Skip tea snacks", "Pause anytime"],
  },
  {
    id: "lunch",
    name: "Lunch Only",
    accent: "blue" as const,
    meals: "Lunch daily",
    price: "₹2,999",
    period: "/ month",
    trial: "₹1,199",
    features: ["Perfect for office-goers", "Fresh midday meals", "Pause anytime"],
  },
  {
    id: "dinner",
    name: "Dinner Only",
    accent: "maroon" as const,
    meals: "Dinner daily",
    price: "₹2,999",
    period: "/ month",
    trial: "₹1,199",
    features: ["Relax after work", "Hot homely dinners", "Pause anytime"],
  },
] as const;

export const deliveryTimings = [
  { label: "Lunch", time: "12:00 PM – 3:00 PM", icon: "sun" as const },
  { label: "Tea Snacks", time: "4:30 PM – 6:30 PM", icon: "tea" as const },
  { label: "Dinner", time: "7:00 PM – 9:30 PM", icon: "moon" as const },
] as const;

export const faqItems = [
  {
    question: "Is the food homemade?",
    answer:
      "Yes! Every meal is prepared fresh in our kitchen using home-style South Indian and Kerala recipes — the same care you'd find in a family kitchen, not a commercial restaurant line.",
  },
  {
    question: "Can I pause my subscription?",
    answer:
      "Absolutely. Life gets busy — you can pause your plan anytime and resume when you're ready. Just reach out via WhatsApp or call us.",
  },
  {
    question: "Do you deliver every day?",
    answer:
      "We deliver Monday through Sunday, including weekends. Saturday lunch features our special biriyani!",
  },
  {
    question: "Can I choose Veg or Non-Veg?",
    answer:
      "Yes. We offer both vegetarian and non-vegetarian options on select days. Use the Veg / Non-Veg filter on our menu to see what's available each day.",
  },
  {
    question: "What areas in Hyderabad do you deliver to?",
    answer:
      "We currently serve Nallagandla, Gopanpalle, and nearby neighbourhoods. Contact us on WhatsApp to confirm delivery to your exact location.",
  },
  {
    question: "How can I contact you?",
    answer:
      "Reach us on WhatsApp at 9121538113, call us directly, or visit us at 1-100/5, Gopanpalle, Nallagandla, Hyderabad. We're happy to help with plan selection and trial bookings.",
  },
] as const;
