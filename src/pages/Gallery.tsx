import { motion } from "motion/react";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Gallery() {
  const photos = [
    { url: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80", caption: "Santorini Sunset" },
    { url: "https://images.unsplash.com/photo-1506929113675-88afdec58abb?auto=format&fit=crop&w=800&q=80", caption: "Bali Bliss" },
    { url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80", caption: "African Safari" },
    { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", caption: "Maldives Morning" },
    { url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80", caption: "Swiss Alps" },
    { url: "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?auto=format&fit=crop&w=800&q=80", caption: "Kyoto Temple" },
    { url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=80", caption: "Icelandic Road" },
    { url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80", caption: "Amalfi Coast" },
    { url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80", caption: "Positano Streets" },
    { url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80", caption: "Serengeti Plains" },
    { url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80", caption: "Arashiyama Bamboo" },
    { url: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=800&q=80", caption: "Tuscan Hills" }
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-[1600px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <span className="text-[11px] uppercase tracking-[0.3em] font-display font-bold text-accent mb-6 block">Client Stories</span>
        <h1 className="text-6xl md:text-8xl mb-8">Explorateurs <br /><span className="font-script text-accent">in the wild.</span></h1>
        <p className="text-xl text-ink/60 max-w-3xl mx-auto leading-relaxed">
          A collection of moments captured by our travelers across the globe. Real people, real adventures, real memories.
        </p>
      </motion.div>

      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {photos.map((photo, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
          >
            <img 
              src={photo.url} 
              alt={photo.caption} 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-white p-6">
              <Instagram className="w-8 h-8 mb-4" />
              <p className="font-display font-bold uppercase tracking-widest text-xs text-center">{photo.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <p className="text-sm text-ink/40 font-display font-bold uppercase tracking-widest mb-8">Tag us to be featured @explorateurtravel</p>
        <Link to="/contact" className="btn-primary">Follow Our Journey</Link>
      </div>
    </div>
  );
}
