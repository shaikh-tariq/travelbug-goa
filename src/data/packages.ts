export interface Package {
  id: string;
  title: string;
  price: string;
  category: 'Honeymoon' | 'Family' | 'Adventure';
  image: string;
  description: string;
  days: number;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    activities: string[];
  }[];
}

export const PACKAGES: Package[] = [
  {
    id: "amalfi-romance",
    title: "Amalfi Coast Romance",
    price: "4,200",
    category: "Honeymoon",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
    description: "Private balconies overlooking the coast, infinity pools, and candlelit dinners in Positano.",
    days: 7,
    highlights: ["Private Boat Tour", "Michelin Star Dining", "Luxury Villa Stay"],
    itinerary: [
      { day: 1, title: "Arrival in Positano", activities: ["Private transfer from Naples", "Sunset welcome dinner"] },
      { day: 2, title: "Coastal Exploration", activities: ["Private boat tour to Capri", "Swimming in the Blue Grotto"] },
      { day: 3, title: "Ravello Heights", activities: ["Villa Cimbrone gardens", "Classical music concert"] }
    ]
  },
  {
    id: "african-safari",
    title: "African Safari Quest",
    price: "6,800",
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
    description: "Experience the Big Five in their natural habitat with expert guides and luxury eco-lodges.",
    days: 10,
    highlights: ["Game Drives", "Hot Air Balloon Ride", "Luxury Tented Camp"],
    itinerary: [
      { day: 1, title: "Nairobi Arrival", activities: ["Giraffe Centre visit", "Welcome briefing"] },
      { day: 2, title: "Maasai Mara", activities: ["Flight to the Mara", "Afternoon game drive"] },
      { day: 3, title: "The Big Five", activities: ["Full day game drive", "Bush dinner under the stars"] }
    ]
  },
  {
    id: "kyoto-culture",
    title: "Kyoto Cultural Trail",
    price: "3,500",
    category: "Family",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    description: "Immerse your family in ancient traditions, tea ceremonies, and bamboo forest walks.",
    days: 8,
    highlights: ["Tea Ceremony", "Bamboo Forest", "Samurai Experience"],
    itinerary: [
      { day: 1, title: "Kyoto Welcome", activities: ["Traditional Ryokan check-in", "Gion district walk"] },
      { day: 2, title: "Temples & Shrines", activities: ["Fushimi Inari Shrine", "Kiyomizu-dera Temple"] },
      { day: 3, title: "Arashiyama", activities: ["Bamboo Grove", "Monkey Park Iwatayama"] }
    ]
  },
  {
    id: "swiss-alps-adventure",
    title: "Swiss Alps Explorer",
    price: "5,500",
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&w=800&q=80",
    description: "High-altitude hiking, paragliding over Interlaken, and luxury mountain retreats.",
    days: 9,
    highlights: ["Paragliding", "Glacier Express", "Summit Dining"],
    itinerary: [
      { day: 1, title: "Interlaken Arrival", activities: ["Lake Brienz cruise", "Gear check"] },
      { day: 2, title: "Jungfraujoch", activities: ["Top of Europe train", "Ice Palace visit"] }
    ]
  },
  {
    id: "bali-wellness",
    title: "Bali Wellness Retreat",
    price: "2,900",
    category: "Honeymoon",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    description: "Yoga in Ubud, private pool villas, and spiritual cleansing ceremonies.",
    days: 12,
    highlights: ["Yoga Sessions", "Flower Baths", "Temple Blessings"],
    itinerary: [
      { day: 1, title: "Ubud Sanctuary", activities: ["Airport pickup", "Balinese massage"] },
      { day: 2, title: "Spiritual Path", activities: ["Tirta Empul temple", "Rice terrace walk"] }
    ]
  }
];
