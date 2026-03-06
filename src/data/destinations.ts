export interface Destination {
  name: string;
  country: string;
  region: 'Europe' | 'Asia' | 'Africa' | 'Americas' | 'Oceania';
  image: string;
}

export const DESTINATIONS: Destination[] = [
  { name: "Santorini", country: "Greece", region: "Europe", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80" },
  { name: "Kyoto", country: "Japan", region: "Asia", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80" },
  { name: "Amalfi Coast", country: "Italy", region: "Europe", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80" },
  { name: "Serengeti", country: "Tanzania", region: "Africa", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80" },
  { name: "Bali", country: "Indonesia", region: "Asia", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80" },
  { name: "Paris", country: "France", region: "Europe", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80" },
  { name: "Machu Picchu", country: "Peru", region: "Americas", image: "https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?auto=format&fit=crop&w=800&q=80" },
  { name: "Swiss Alps", country: "Switzerland", region: "Europe", image: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&w=800&q=80" },
  { name: "Reykjavik", country: "Iceland", region: "Europe", image: "https://images.unsplash.com/photo-1520637102912-2df6bb2aec6d?auto=format&fit=crop&w=800&q=80" },
  { name: "Marrakech", country: "Morocco", region: "Africa", image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800&q=80" },
  { name: "Tulum", country: "Mexico", region: "Americas", image: "https://images.unsplash.com/photo-1504730655501-24c39ac53f0e?auto=format&fit=crop&w=800&q=80" },
  { name: "Queenstown", country: "New Zealand", region: "Oceania", image: "https://images.unsplash.com/photo-1589802829985-817e51181b92?auto=format&fit=crop&w=800&q=80" },
  { name: "Cairo", country: "Egypt", region: "Africa", image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=800&q=80" },
  { name: "Bora Bora", country: "French Polynesia", region: "Oceania", image: "https://images.unsplash.com/photo-1500932334442-8761ee4810a7?auto=format&fit=crop&w=800&q=80" },
  { name: "Cape Town", country: "South Africa", region: "Africa", image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?auto=format&fit=crop&w=800&q=80" },
  { name: "Barcelona", country: "Spain", region: "Europe", image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=800&q=80" },
  { name: "Petra", country: "Jordan", region: "Asia", image: "https://images.unsplash.com/photo-1579606035223-8f8f64104162?auto=format&fit=crop&w=800&q=80" },
  { name: "Maldives", country: "South Asia", region: "Asia", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80" },
  { name: "Banff", country: "Canada", region: "Americas", image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80" },
  { name: "Rio de Janeiro", country: "Brazil", region: "Americas", image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80" },
  { name: "Prague", country: "Czech Republic", region: "Europe", image: "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=800&q=80" },
  { name: "Dubrovnik", country: "Croatia", region: "Europe", image: "https://images.unsplash.com/photo-1555990548-036443106a3f?auto=format&fit=crop&w=800&q=80" },
  { name: "Siem Reap", country: "Cambodia", region: "Asia", image: "https://images.unsplash.com/photo-1500049633977-52397e3f24df?auto=format&fit=crop&w=800&q=80" },
  { name: "Galapagos", country: "Ecuador", region: "Americas", image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80" },
  { name: "Sydney", country: "Australia", region: "Oceania", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80" }
];
