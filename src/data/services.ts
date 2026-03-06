import { Plane, Heart, Users, Camera, LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  slug: string;
  icon: LucideIcon;
  image: string;
  desc: string;
  longDesc: string;
  features: string[];
  detailedFeatures: string[];
}

export const SERVICES: Service[] = [
  {
    title: "Solo Adventures",
    slug: "solo-adventures",
    icon: Plane,
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
    desc: "We believe that independent travel can create a unique level of connection with the world. From brief getaways to lengthy sabbaticals, we curate the perfect trip for one.",
    longDesc: "We believe that independent travel can create a unique level of connection with the world. From brief getaways to lengthy sabbaticals, we are able to curate the perfect trip for one! Our solo adventure planning focuses on safety, local immersion, and the freedom to explore at your own pace.",
    features: ["Customized solo routes", "Safety-first planning", "Local immersion"],
    detailedFeatures: ["Customized solo routes", "Safety-first planning", "Local immersion experiences", "24/7 travel support", "Boutique accommodation selection"]
  },
  {
    title: "Honeymoons + Romance",
    slug: "romance",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80",
    desc: "Private balconies overlooking the coast, infinity pools, and thrilling experiences that bring a couple together. We help create a dreamy getaway that speaks to your love language.",
    longDesc: "Private balconies overlooking the coast, infinity pools suspended over crystaline water, and thrilling experiences that bring a couple together. That is our bread and butter. We love to help create a dreamy getaway that speaks specifically to your love language.",
    features: ["Exclusive romantic perks", "Candlelit dining", "Private transfers"],
    detailedFeatures: ["Exclusive romantic perks", "Candlelit dining arrangements", "Private transfers", "Room upgrades (where available)", "Couples' spa experiences"]
  },
  {
    title: "Family + Group",
    slug: "family-group",
    icon: Users,
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
    desc: "Navigating group travel takes organization and communication. Our goal is to allow everyone (regardless of group size) to enjoy their perfect vacation.",
    longDesc: "Navigating group travel takes organization and communication... two things that we happen to specialize in! Our goal is to fully understand what each traveler wants out of their trip, and allow everyone (regardless of group size) to enjoy their perfect vacation.",
    features: ["Multi-generational planning", "Group activities", "Spacious villa bookings"],
    detailedFeatures: ["Multi-generational planning", "Group activities", "Spacious villa bookings", "Coordinated flight logistics", "Kid-friendly itinerary options"]
  },
  {
    title: "Weddings + Events",
    slug: "weddings-events",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    desc: "Coordinating an event from afar comes with unique challenges. We have the perfect resources and connections to make the process seamless.",
    longDesc: "Coordinating an event from afar comes with unique challenges. We have the perfect resources (and connections) to simplify the process and allow planning an event to be seamless. Whether it's a destination wedding or a milestone birthday, we handle the details so you can enjoy the moment.",
    features: ["Venue sourcing", "Vendor coordination", "Guest travel management"],
    detailedFeatures: ["Venue sourcing", "Vendor coordination", "Guest travel management", "On-site logistics support", "Event design consultation"]
  }
];
