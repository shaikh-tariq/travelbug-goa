import { motion } from "motion/react";
import { ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function Blog() {
  const posts = [
    {
      title: "How to Pack for a 10-Day Safari",
      slug: "safari-packing",
      category: "Adventure",
      date: "Oct 12, 2024",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80",
      excerpt: "Everything you need to know about bush-friendly fabrics, essential gear, and photography tips."
    },
    {
      title: "The Best Hidden Gems in Tuscany",
      slug: "tuscany-gems",
      category: "Culture",
      date: "Sep 28, 2024",
      image: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=800&q=80",
      excerpt: "Beyond Florence and Siena: Discover the quiet villages that define the true Italian soul."
    },
    {
      title: "Traveling with Toddlers: A Guide",
      slug: "traveling-toddlers",
      category: "Family",
      date: "Aug 15, 2024",
      image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80",
      excerpt: "Practical tips for making long-haul flights and international travel a breeze for parents."
    },
    {
      title: "Our Recent Stay: Pacuare Lodge",
      slug: "safari-packing",
      category: "Eco-Luxury",
      date: "Jul 22, 2024",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      excerpt: "Imagine a riverside eco-lodge deep in the Costa Rican rainforest, where luxury meets nature."
    },
    {
      title: "Cheer to an Unforgettable Oktoberfest",
      slug: "safari-packing",
      category: "Events",
      date: "Jun 10, 2024",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
      excerpt: "Raising our steins in Munich: A recap of the world's most famous folk festival."
    },
    {
      title: "A South African Dream Realized",
      slug: "safari-packing",
      category: "Safari",
      date: "May 05, 2024",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      excerpt: "From the vibrant streets of Cape Town to the thrill of the bush: Our team's FAM trip recap."
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.3em] font-display font-bold text-accent mb-4 block">Travel Insights</span>
          <h1 className="text-6xl md:text-7xl">On the blog</h1>
        </div>
        <div className="relative w-full md:w-80">
          <input 
            type="text" 
            placeholder="Search articles..." 
            className="w-full bg-white border border-black/5 rounded-full px-6 py-3 text-sm focus:ring-1 focus:ring-accent outline-none"
          />
          <Search className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/30" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {posts.map((post, i) => (
          <Link 
            to={`/blog/${post.slug}`}
            key={i}
            className="group cursor-pointer block"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-6 relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-[9px] uppercase tracking-widest font-display font-bold text-accent">{post.category}</span>
                </div>
              </div>
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-widest font-display font-bold text-ink/40">{post.date}</span>
                <h3 className="text-2xl group-hover:text-accent transition-colors leading-tight">{post.title}</h3>
                <p className="text-sm text-ink/60 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-display font-bold text-accent">
                  Read Article <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      <div className="mt-24 text-center">
        <button className="btn-outline">Load More Stories</button>
      </div>
    </div>
  );
}
