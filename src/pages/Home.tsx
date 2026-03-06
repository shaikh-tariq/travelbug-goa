import { motion, AnimatePresence } from "motion/react";
import { Search, Users, Calendar, MapPin, Star, Plane, Compass, Map, Globe, Instagram, ArrowRight, ChevronDown, ChevronUp, Phone, Shield, Clock, Award, Heart, CheckCircle, Headphones } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { DESTINATIONS } from "../data/destinations";
import { PACKAGES, Package } from "../data/packages";

// --- Components ---

// --- Home Page Component ---
// Sections: Hero, TrustBar, Welcome, WhyChooseUs, Stats, Services, Destinations, Packages, Gallery, Testimonials, FAQ, Blog, QuickInquiry, Partners.

const TrustBar = () => (
  <section className="bg-white border-b border-black/5 py-4 px-6">
    <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-16">
      <div className="flex items-center gap-2">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-5 object-contain" referrerPolicy="no-referrer" />
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
        </div>
        <span className="text-xs font-bold text-ink/70">4.9</span>
        <span className="text-[10px] text-ink/40">(3,000+ reviews)</span>
      </div>
      <div className="flex items-center gap-2">
        <Shield className="w-4 h-4 text-accent" />
        <span className="text-[10px] uppercase tracking-widest font-display font-bold text-ink/50">Govt. Approved Tour Operator</span>
      </div>
      <div className="flex items-center gap-2">
        <Award className="w-4 h-4 text-accent" />
        <span className="text-[10px] uppercase tracking-widest font-display font-bold text-ink/50">10+ Years of Excellence</span>
      </div>
    </div>
  </section>
);

const StatsBar = () => (
  <section id="stats" className="bg-ink py-16 px-6 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-accent" />
    </div>

    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
      {[
        { label: "Happy Travelers", value: "3,000+" },
        { label: "Destinations Covered", value: "150+" },
        { label: "Expert Local Advisors", value: "25+" },
        { label: "Years of Trusted Service", value: "10+" }
      ].map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex flex-col items-center"
        >
          <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-3 tracking-tighter">{stat.value}</div>
          <div className="text-[10px] uppercase tracking-[0.2em] font-display font-bold text-paper/40 max-w-[120px] leading-relaxed">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

const Hero = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video play failed:", error);
      });
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center px-4">
      <div className="absolute inset-0 z-0 bg-ink">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Bg_Video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-paper/50" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-6 border border-white/30">
          <Star className="w-4 h-4 fill-accent text-accent" aria-hidden="true" />
          <span className="text-[10px] uppercase tracking-widest font-display font-bold text-white">
            Rated 4.9 ⭐ by 3,000+ travelers
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl text-white mb-6 leading-[0.9]">
          Your Journey, <br />
          <span className="font-script text-accent italic">Our Responsibility</span>
        </h1>

        <p className="text-white/90 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto tracking-wide">
          Handcrafted itineraries. Verified local guides. <br className="hidden md:block" />
          No hidden charges. Just unforgettable experiences.
        </p>

        <div className="glass-card p-2 md:p-4 max-w-5xl mx-auto flex flex-col md:flex-row gap-4 items-center shadow-2xl">
          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="flex flex-col items-start px-4 py-2 border-b md:border-b-0 md:border-r border-white/20">
              <label htmlFor="hero-destination" className="text-[9px] uppercase tracking-widest font-display font-bold text-white/60 mb-1">Where to?</label>
              <div className="flex items-center gap-2 w-full">
                <MapPin className="w-4 h-4 text-accent" aria-hidden="true" />
                <input id="hero-destination" type="text" placeholder="Destination" className="bg-transparent border-none text-white placeholder:text-white/40 focus:ring-0 focus:outline-none w-full text-sm font-medium" />
              </div>
            </div>
            <div className="flex flex-col items-start px-4 py-2 border-b md:border-b-0 md:border-r border-white/20">
              <label htmlFor="hero-date" className="text-[9px] uppercase tracking-widest font-display font-bold text-white/60 mb-1">When?</label>
              <div className="flex items-center gap-2 w-full">
                <Calendar className="w-4 h-4 text-accent" aria-hidden="true" />
                <input
                  id="hero-date"
                  type="date"
                  className="bg-transparent border-none text-white placeholder:text-white/40 focus:ring-0 focus:outline-none w-full text-sm font-medium [color-scheme:dark]"
                />
              </div>
            </div>
            <div className="flex flex-col items-start px-4 py-2">
              <label htmlFor="hero-travelers" className="text-[9px] uppercase tracking-widest font-display font-bold text-white/60 mb-1">Travelers</label>
              <div className="flex items-center gap-2 w-full">
                <Users className="w-4 h-4 text-accent" aria-hidden="true" />
                <select id="hero-travelers" className="bg-transparent border-none text-white focus:ring-0 focus:outline-none w-full text-sm font-medium appearance-none cursor-pointer">
                  <option className="text-ink">1 Traveler</option>
                  <option className="text-ink">2 Travelers</option>
                  <option className="text-ink">Group (4+)</option>
                </select>
              </div>
            </div>
          </div>
          <Link to="/contact" className="btn-primary w-full md:w-auto h-full flex items-center justify-center gap-2 !rounded-xl" aria-label="Search destinations">
            <Search className="w-4 h-4" aria-hidden="true" />
            <span>Get Free Quote</span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

const WhyChooseUs = () => (
  <section className="py-24 px-6 bg-paper/50 border-y border-black/5">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-[11px] uppercase tracking-[0.3em] font-display font-bold text-accent mb-4 block">Why Travelers Trust Us</span>
        <h2 className="text-5xl md:text-6xl">Your trip, done right</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: <Shield className="w-8 h-8" />,
            title: "No Hidden Charges",
            desc: "Transparent pricing from day one. The price we quote is the price you pay — no surprise fees, no last-minute add-ons."
          },
          {
            icon: <Headphones className="w-8 h-8" />,
            title: "24/7 On-Trip Support",
            desc: "Our dedicated travel desk is available round the clock while you're traveling. One call and we handle everything."
          },
          {
            icon: <CheckCircle className="w-8 h-8" />,
            title: "Verified Local Partners",
            desc: "Every hotel, guide, and driver in our network is personally vetted. We only work with the best on the ground."
          },
          {
            icon: <Heart className="w-8 h-8" />,
            title: "Customized Itineraries",
            desc: "No cookie-cutter tours. Every trip is personally designed around your interests, pace, and budget."
          },
          {
            icon: <Clock className="w-8 h-8" />,
            title: "Flexible Payment Options",
            desc: "Book with a small deposit and pay the rest later. We offer EMI options and accept all major payment methods."
          },
          {
            icon: <Award className="w-8 h-8" />,
            title: "Govt. Approved Operator",
            desc: "We are a registered and Ministry of Tourism approved tour operator with 10+ years of trusted operations."
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-white rounded-2xl p-8 border border-black/5 shadow-sm hover:shadow-lg transition-shadow group"
          >
            <div className="text-accent mb-6 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
            <h3 className="text-xl font-serif mb-3">{item.title}</h3>
            <p className="text-sm text-ink/60 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ServicesPreview = () => (
  <section id="services-preview" className="py-24 px-6 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <span className="text-[11px] uppercase tracking-[0.3em] font-display font-bold text-accent mb-4 block">Our Expertise</span>
      <h2 className="text-5xl md:text-6xl">Travel designed for you</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "Solo Adventures",
          slug: "solo-adventures",
          desc: "Curated solo itineraries that connect you with authentic local experiences and fellow travelers.",
          image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=600&q=80"
        },
        {
          title: "Honeymoons + Romance",
          slug: "romance",
          desc: "Dreamy getaways with candlelight dinners, private beaches, and handpicked boutique stays.",
          image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80"
        },
        {
          title: "Family + Group",
          slug: "family-group",
          desc: "Kid-friendly activities, multi-room stays, and seamlessly coordinated group logistics.",
          image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80"
        },
        {
          title: "Corporate + MICE",
          slug: "weddings-events",
          desc: "GST invoicing, dedicated fleet managers, and end-to-end corporate event coordination.",
          image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80"
        }
      ].map((service, i) => (
        <Link
          to={`/services/${service.slug}`}
          key={i}
          className="group cursor-pointer block"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="aspect-[3/4] overflow-hidden rounded-3xl mb-6 relative">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" loading="lazy" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-2xl font-serif mb-2">{service.title}</h3>
                <div className="w-8 h-0.5 bg-accent group-hover:w-full transition-all duration-500" />
              </div>
            </div>
            <p className="text-sm text-ink/60 leading-relaxed px-2">{service.desc}</p>
          </motion.div>
        </Link>
      ))}
    </div>
  </section>
);

const PackageCard = ({ id, title, price, image, category, description }: any) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="group relative overflow-hidden rounded-2xl bg-white shadow-sm border border-black/5"
  >
    <div className="aspect-[4/5] overflow-hidden relative">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 left-4 bg-paper px-3 py-1 rounded-full border border-black/5">
        <span className="text-[9px] uppercase tracking-widest font-display font-bold text-olive">{category}</span>
      </div>
      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full">
        <span className="text-[9px] uppercase tracking-widest font-display font-bold">10% OFF</span>
      </div>
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-2xl leading-tight">{title}</h3>
        <div className="text-right">
          <span className="text-[10px] uppercase tracking-widest font-display font-bold text-accent block">From</span>
          <span className="text-xl font-serif font-bold">${price}</span>
          <span className="text-xs text-ink/40 line-through block">${Math.round(price * 1.1)}</span>
        </div>
      </div>
      <p className="text-sm text-ink/60 mb-6 line-clamp-2">{description}</p>
      <div className="flex gap-2">
        <Link to={`/itinerary/${id}`} className="flex-1 btn-outline !py-2 !text-[10px] block text-center">View Itinerary</Link>
        <a href="https://wa.me/1234567890?text=Hi%2C+I'm+interested+in+the+package" target="_blank" rel="noopener noreferrer" className="btn-primary !py-2 !text-[10px] !px-4 flex items-center gap-1">
          <Phone className="w-3 h-3" /> Book Now
        </a>
      </div>
    </div>
  </motion.div>
);

const Packages = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Honeymoon' | 'Family' | 'Adventure'>('All');

  const filteredPackages = activeTab === 'All'
    ? PACKAGES
    : PACKAGES.filter(pkg => pkg.category === activeTab);

  return (
    <section id="packages" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.3em] font-display font-bold text-accent mb-4 block">Exclusive Travel Deals</span>
          <h2 className="text-5xl md:text-6xl leading-[1.1]">Unbeatable offers across <br />your dream destinations</h2>
        </div>
        <div className="flex gap-4">
          {['All', 'Honeymoon', 'Family', 'Adventure'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`text-[10px] uppercase tracking-widest font-display font-bold pb-2 border-b-2 transition-all cursor-pointer min-h-[44px] flex items-center ${activeTab === tab ? 'border-accent opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredPackages.map((pkg) => (
            <motion.div
              layout
              key={pkg.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <PackageCard
                id={pkg.id}
                title={pkg.title}
                price={pkg.price}
                category={pkg.category}
                image={pkg.image}
                description={pkg.description}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

const QuickInquiry = () => (
  <section className="py-24 px-6 bg-accent/5 border-y border-accent/10">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <span className="text-[11px] uppercase tracking-[0.3em] font-display font-bold text-accent mb-4 block">Plan Your Adventure</span>
        <h2 className="text-4xl md:text-5xl leading-tight mb-6">Get Your Free Travel Consultation</h2>
        <p className="text-ink/60 leading-relaxed mb-8">Fill out the form and our travel experts will contact you with hand-picked options tailored to your interests.</p>

        <ul className="space-y-3 mb-8">
          {[
            "Customized Itineraries",
            "Expert Local Guidance",
            "Secure and Easy Booking",
            "24/7 Customer Support",
            "No Hidden Charges Of Any Sort",
            "Flexible Payment Options"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-ink/70">
              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-black/5"
      >
        <h3 className="text-2xl font-serif mb-6">Request a Callback</h3>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label htmlFor="inquiry-name" className="text-[9px] uppercase tracking-widest font-display font-bold text-ink/50 mb-1 block">Full Name</label>
            <input id="inquiry-name" type="text" placeholder="Your name" className="w-full border border-black/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" />
          </div>
          <div>
            <label htmlFor="inquiry-phone" className="text-[9px] uppercase tracking-widest font-display font-bold text-ink/50 mb-1 block">Phone Number</label>
            <input id="inquiry-phone" type="tel" placeholder="+91 98XXX XXXXX" className="w-full border border-black/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" />
          </div>
          <div>
            <label htmlFor="inquiry-email" className="text-[9px] uppercase tracking-widest font-display font-bold text-ink/50 mb-1 block">Email Address</label>
            <input id="inquiry-email" type="email" placeholder="you@email.com" className="w-full border border-black/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" />
          </div>
          <div>
            <label htmlFor="inquiry-type" className="text-[9px] uppercase tracking-widest font-display font-bold text-ink/50 mb-1 block">Travel Type</label>
            <select id="inquiry-type" className="w-full border border-black/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer bg-white">
              <option>Honeymoon</option>
              <option>Family Vacation</option>
              <option>Adventure Trip</option>
              <option>Solo Travel</option>
              <option>Group Tour</option>
              <option>Corporate / MICE</option>
            </select>
          </div>
          <button type="submit" className="btn-primary w-full !py-3 !text-sm flex items-center justify-center gap-2">
            Get Free Consultation <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-[10px] text-ink/30 text-center">Your information is secure and will only be used to provide you with travel recommendations.</p>
        </form>
      </motion.div>
    </div>
  </section>
);

const PartnersBar = () => (
  <section className="py-16 px-6 bg-paper/50 border-b border-black/5 overflow-hidden">
    <div className="text-center mb-10">
      <span className="text-[11px] uppercase tracking-[0.3em] font-display font-bold text-ink/30 block">Trusted By Leading Brands</span>
    </div>
    <div className="flex items-center justify-center gap-12 md:gap-20 flex-wrap opacity-30 grayscale">
      {["Marriott", "Taj Hotels", "ITC Hotels", "Oberoi", "Hyatt", "Radisson"].map((brand, i) => (
        <span key={i} className="text-lg md:text-xl font-serif font-bold tracking-tight text-ink">{brand}</span>
      ))}
    </div>
  </section>
);

const ClientGalleryPreview = () => (
  <section id="gallery-preview" className="py-24 px-6 overflow-hidden">
    <div className="text-center mb-16">
      <span className="text-[11px] uppercase tracking-[0.3em] font-display font-bold text-accent mb-4 block">Real Stories, Real Travelers</span>
      <h2 className="text-5xl md:text-6xl">Moments shared by our guests</h2>
    </div>

    <div className="columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4 max-w-[1600px] mx-auto">
      {[
        "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1506929113675-88afdec58abb?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80"
      ].map((img, i) => (
        <Link to="/gallery" key={i}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="relative group overflow-hidden rounded-xl cursor-pointer"
          >
            <img src={img} alt="Client travel photo" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" loading="lazy" />
            <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Star className="text-white w-8 h-8 fill-white" aria-hidden="true" />
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  </section>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "Bhagya Shree M.",
      location: "Family Trip to Goa",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      text: "Our trip was an absolutely wonderful experience from start to finish. The team suggested the best destination for this time of year and provided a well-planned itinerary covering all must-visit points. Truly thankful for making this trip so memorable!",
      rating: 5
    },
    {
      name: "Priyanshu R.",
      location: "Corporate Travel — Mumbai to Pune",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      text: "The vehicle was in excellent condition — clean and well-maintained. The driver was sincere, polite, and professional. The cost was very budget-friendly compared to other options. Overall, a fantastic experience with no issues at all.",
      rating: 5
    },
    {
      name: "Sarah & Mark",
      location: "Amalfi Coast Honeymoon",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
      text: "Our honeymoon was perfection. The boutique hotels they selected were exactly our style, and we didn't have to worry about a single thing. The candlelight dinner surprise was the highlight of our entire trip!",
      rating: 5
    },
    {
      name: "Koustav G.",
      location: "Airport Transfer — Pune to Mumbai",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      text: "Had a smooth and stress-free journey! The driver was perfectly on time — a big plus when catching a flight. He was polite, professional, and super helpful with the luggage too. Would definitely recommend!",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-paper/50 border-y border-black/5 overflow-hidden">
      <div className="text-center mb-8">
        <span className="text-[11px] uppercase tracking-[0.3em] font-display font-bold text-accent mb-4 block">What Our Customers Say</span>
        <h2 className="text-5xl md:text-6xl">Over 3,000+ happy journeys</h2>
      </div>

      <div className="px-6 text-center max-w-3xl mx-auto min-h-[400px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-24 rounded-full overflow-hidden mb-8 border-4 border-accent/20 mx-auto">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-accent mb-4 flex justify-center gap-1" aria-label={`${testimonials[currentIndex].rating} out of 5 stars`}>
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" />)}
            </div>
            <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-8">
              "{testimonials[currentIndex].text}"
            </p>
            <div>
              <h4 className="font-display font-bold uppercase tracking-widest text-sm">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-xs text-olive uppercase tracking-widest mt-1">
                {testimonials[currentIndex].location}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center ${currentIndex === i ? 'bg-accent w-6' : 'bg-accent/20'}`}
            >
              <span className={`block rounded-full transition-all ${currentIndex === i ? 'w-6 h-2 bg-accent' : 'w-2 h-2 bg-accent/20'}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I book a trip with Explorateur?",
      answer: "Booking is simple: call or WhatsApp us, share your travel preferences and dates, and receive a personalized itinerary with instant confirmation. You can also fill out our Quick Inquiry form and a travel expert will reach out within 30 minutes."
    },
    {
      question: "Is advance payment required?",
      answer: "A small token amount (10-20%) confirms your booking. The balance can be paid before your trip via cash, bank transfer, UPI, or card. We also offer EMI options for select packages."
    },
    {
      question: "What happens if I need help during my trip?",
      answer: "We provide 24/7 on-trip support. You'll have direct access to our local partners on the ground, plus our customer care team is just a WhatsApp message away for any urgent matters."
    },
    {
      question: "Can you help with flights and travel insurance?",
      answer: "Absolutely. We coordinate all aspects of your travel, including domestic and international flights, airport transfers, ferry bookings, and comprehensive travel insurance coverage."
    },
    {
      question: "Are there any hidden charges?",
      answer: "None at all. We believe in complete transparency. Our pricing includes all applicable taxes and fees. What you see in the itinerary is exactly what you pay — no surprise costs, ever."
    },
    {
      question: "Can I modify or cancel my booking?",
      answer: "Yes, cancellations and modifications are possible as per our flexible cancellation policy. We understand plans change, and we try to accommodate changes with minimal hassle."
    }
  ];

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-[11px] uppercase tracking-[0.3em] font-display font-bold text-accent mb-4 block">Everything You Need to Know</span>
        <h2 className="text-5xl md:text-6xl">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`border rounded-2xl transition-all duration-300 ${openIndex === i ? 'border-accent bg-white shadow-lg' : 'border-black/5 bg-paper/30'}`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full px-8 py-6 flex items-center justify-between text-left cursor-pointer"
              aria-expanded={openIndex === i}
            >
              <span className="font-serif text-xl md:text-2xl">{faq.question}</span>
              {openIndex === i ? <ChevronUp className="text-accent" aria-hidden="true" /> : <ChevronDown className="text-ink/30" aria-hidden="true" />}
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8 text-ink/70 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

const BlogPreview = () => (
  <section id="blog-preview" className="py-24 px-6 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <span className="text-[11px] uppercase tracking-[0.3em] font-display font-bold text-accent mb-4 block">Travel Insights</span>
      <h2 className="text-5xl md:text-6xl">On the blog</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {[
        {
          title: "How to Plan the Perfect Andaman Trip",
          slug: "safari-packing",
          excerpt: "From choosing the right islands to booking ferries — everything first-timers need to know.",
          image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Top 10 Honeymoon Destinations in India",
          slug: "tuscany-gems",
          excerpt: "Romantic getaways beyond the ordinary — from secret beaches to Himalayan retreats.",
          image: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Traveling with Kids: A Complete Guide",
          slug: "traveling-toddlers",
          excerpt: "Practical tips for family-friendly flights, kid-safe activities, and stress-free international travel.",
          image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80"
        }
      ].map((post, i) => (
        <Link to={`/blog/${post.slug}`} key={i} className="group cursor-pointer block">
          <div className="aspect-video overflow-hidden rounded-2xl mb-6">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" loading="lazy" />
          </div>
          <h3 className="text-2xl mb-3 group-hover:text-accent transition-colors">{post.title}</h3>
          <p className="text-sm text-ink/60 mb-4">{post.excerpt}</p>
          <div className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-accent">
            Read More <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </div>
        </Link>
      ))}
    </div>
  </section>
);

const Destinations = () => {
  const [activeRegion, setActiveRegion] = useState<'All' | 'Europe' | 'Asia' | 'Africa' | 'Americas' | 'Oceania'>('All');

  const filteredDestinations = activeRegion === 'All'
    ? DESTINATIONS
    : DESTINATIONS.filter(d => d.region === activeRegion);

  const regions = ['All', 'Europe', 'Asia', 'Africa', 'Americas', 'Oceania'];

  return (
    <section className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.3em] font-display font-bold text-accent mb-4 block">Global Reach</span>
            <h2 className="text-5xl md:text-6xl leading-[1.1]">Destinations <br />we specialize in</h2>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-6">
            {regions.map(region => (
              <button
                key={region}
                onClick={() => setActiveRegion(region as any)}
                className={`text-[10px] uppercase tracking-widest font-display font-bold pb-2 border-b-2 transition-all cursor-pointer min-h-[44px] flex items-center ${activeRegion === region
                  ? 'border-accent text-accent opacity-100'
                  : 'border-transparent text-ink opacity-40 hover:opacity-100'
                  }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {filteredDestinations.map((dest, i) => (
            <motion.div
              layout
              key={dest.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-[9px] uppercase tracking-widest font-display font-bold text-accent mb-1">{dest.country}</p>
                <h3 className="text-white text-xl font-serif">{dest.name}</h3>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <Compass className="w-4 h-4 text-white" aria-hidden="true" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustBar />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <section className="py-24 px-6 text-center max-w-4xl mx-auto relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 text-accent/10 -z-10"
          >
            <Map size={200} aria-hidden="true" />
          </motion.div>
          <span className="text-[11px] uppercase tracking-[0.3em] font-display font-bold text-accent mb-6 block">Welcome to Explorateur</span>
          <h2 className="text-4xl md:text-5xl leading-tight mb-8">
            Explore. Experience. Escape.
          </h2>
          <p className="text-lg text-ink/70 leading-relaxed">
            At Explorateur, we believe travel should be more than just a trip — it should be a soulful experience.
            From our first consultation to the moment you return home, we are your personal advocate for stress-free,
            unforgettable vacations. Your journey is our responsibility.
          </p>
          <div className="mt-12">
            <Link to="/about" className="btn-outline">Learn Our Story</Link>
          </div>
        </section>

        <StatsBar />
        <WhyChooseUs />
        <ServicesPreview />
        <Destinations />
        <Packages />
        <QuickInquiry />
        <ClientGalleryPreview />
        <Testimonials />
        <PartnersBar />
        <FAQ />
        <BlogPreview />
      </motion.div>
    </div>
  );
}
