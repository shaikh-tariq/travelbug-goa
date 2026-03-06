import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";

const blogPosts = {
  "safari-packing": {
    title: "How to Pack for a 10-Day Safari",
    category: "Adventure",
    date: "Oct 12, 2024",
    author: "Ashley J.",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=80",
    content: `
      <p>Imagine a riverside eco-lodge deep in the Costa Rican rainforest, it’s remote but you do not have to sacrifice comforts such as daily housekeeping, 5-star food, and world-class service. What’s more, the only way to reach this remote lodge is white water rafting or traveling on an un-maintained gravel road and finally crossing a river.</p>
      <p>When you think about Martha’s Vineyard, vibrant hydrangeas, lighthouses, stunning cedar shingled cottages, and sandy beaches are likely what first comes to mind- making this charming Massachusetts island an incredibly desirable location for the perfect summer vacation. While all of this is true, there is so much more to this scenic, coastal destination than what meets the eye.</p>
      <h2>Essential Gear</h2>
      <p>From the vibrant streets of Cape Town to the thrill of the bush: Our team's FAM trip recap. Raising our steins in Munich: A recap of the world's most famous folk festival.</p>
    `
  },
  "tuscany-gems": {
    title: "The Best Hidden Gems in Tuscany",
    category: "Culture",
    date: "Sep 28, 2024",
    author: "Jennifer J.",
    image: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=1200&q=80",
    content: `<p>Beyond Florence and Siena: Discover the quiet villages that define the true Italian soul.</p>`
  },
  "traveling-toddlers": {
    title: "Traveling with Toddlers: A Guide",
    category: "Family",
    date: "Aug 15, 2024",
    author: "Alexis M.",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=80",
    content: `<p>Practical tips for making long-haul flights and international travel a breeze for parents.</p>`
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug as keyof typeof blogPosts] || blogPosts["safari-packing"];

  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-accent mb-12 hover:gap-4 transition-all">
        <ArrowLeft className="w-4 h-4" /> Back to Blog
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex flex-wrap gap-6 mb-8 text-[10px] uppercase tracking-widest font-display font-bold text-ink/40">
          <div className="flex items-center gap-2"><Tag className="w-3 h-3 text-accent" /> {post.category}</div>
          <div className="flex items-center gap-2"><Calendar className="w-3 h-3 text-accent" /> {post.date}</div>
          <div className="flex items-center gap-2"><User className="w-3 h-3 text-accent" /> By {post.author}</div>
        </div>

        <h1 className="text-5xl md:text-7xl mb-12 leading-tight">{post.title}</h1>

        <div className="aspect-video rounded-3xl overflow-hidden mb-16 shadow-2xl">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>

        <div 
          className="prose prose-lg max-w-none text-ink/80 leading-relaxed space-y-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </motion.div>

      <div className="mt-24 pt-12 border-t border-black/5">
        <h3 className="text-2xl mb-8">Share this story</h3>
        <div className="flex gap-4">
          <button className="btn-outline !py-2 !px-6 !text-[10px]">Facebook</button>
          <button className="btn-outline !py-2 !px-6 !text-[10px]">Twitter</button>
          <button className="btn-outline !py-2 !px-6 !text-[10px]">Pinterest</button>
        </div>
      </div>
    </div>
  );
}
