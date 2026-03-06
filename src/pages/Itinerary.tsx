import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, MapPin, Clock, CheckCircle2, Star, Send } from "lucide-react";
import { PACKAGES } from "../data/packages";

export default function Itinerary() {
  // --- Detailed Itinerary Page ---
  // Displays the day-by-day breakdown of a selected tour package.
  
  const { id } = useParams();
  const pkg = PACKAGES.find(p => p.id === id) || PACKAGES[0];

  return (
    <div className="pt-32 pb-24">
      <div className="px-6 max-w-7xl mx-auto">
        {/* Back Navigation */}
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-accent mb-12 hover:gap-4 transition-all">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-1 rounded-full">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="text-[10px] uppercase tracking-widest font-display font-bold text-accent">
                {pkg.category} Package
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl leading-tight">{pkg.title}</h1>
            <div className="flex flex-wrap gap-8 py-6 border-y border-black/5">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-display font-bold text-ink/40">Duration</p>
                  <p className="font-serif font-bold">{pkg.days} Days</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-display font-bold text-ink/40">Best Time</p>
                  <p className="font-serif font-bold">Year Round</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-display font-bold text-ink/40">Price</p>
                  <p className="font-serif font-bold">From ${pkg.price}</p>
                </div>
              </div>
            </div>
            <p className="text-xl text-ink/70 leading-relaxed">
              {pkg.description}
            </p>
            <div className="pt-8">
              <Link to={`/contact?type=${encodeURIComponent(pkg.title)}`} className="btn-primary inline-flex items-center gap-3">
                Book This Trip <Send className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative"
          >
            <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>

        {/* Itinerary Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <h2 className="text-4xl md:text-5xl mb-12">Day-by-Day Journey</h2>
            <div className="space-y-16">
              {pkg.itinerary.map((day, i) => (
                <div key={i} className="flex gap-8 relative">
                  {i !== pkg.itinerary.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-[-64px] w-px bg-accent/20" />
                  )}
                  <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center shrink-0 bg-paper z-10">
                    <span className="text-accent font-display font-bold text-xs">{day.day}</span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl">{day.title}</h3>
                    <ul className="space-y-3">
                      {day.activities.map((act, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-ink/70">
                          <CheckCircle2 className="w-4 h-4 text-olive shrink-0" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar: Highlights */}
          <div className="space-y-8">
            <div className="bg-ink text-paper p-12 rounded-[2.5rem] sticky top-32">
              <h3 className="text-2xl mb-8">Trip Highlights</h3>
              <ul className="space-y-6">
                {pkg.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    </div>
                    <span className="text-paper/80 leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12 pt-12 border-t border-white/10">
                <p className="text-accent font-display font-bold uppercase tracking-widest text-[10px] mb-4">Need a custom plan?</p>
                <Link to="/contact" className="text-paper hover:text-accent transition-colors underline underline-offset-8">Talk to an advisor</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
