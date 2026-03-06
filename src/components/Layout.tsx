import { motion } from "motion/react";
import { MessageCircle, Instagram, Facebook, Twitter, ArrowRight, Plane, Compass, Globe } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const FloatingBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-[0.03]">
    <motion.div
      animate={{
        x: [0, 100, 0],
        y: [0, 50, 0],
        rotate: [0, 10, 0]
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-20 left-[10%]"
    >
      <Plane size={120} />
    </motion.div>
    <motion.div
      animate={{
        x: [0, -80, 0],
        y: [0, 100, 0],
        rotate: [0, -15, 0]
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-40 right-[15%]"
    >
      <Compass size={150} />
    </motion.div>
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 5, 0]
      }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <Globe size={400} />
    </motion.div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navColorClass = isScrolled || !isHome ? "text-ink" : "text-white";
  const navBgClass = isScrolled || !isHome ? "bg-white/80 backdrop-blur-lg shadow-sm py-3" : "bg-transparent";

  return (
    <nav aria-label="Main navigation" className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 flex justify-between items-center ${navBgClass}`}>
      <Link to="/" aria-label="Explorateur Travel - Home" className={`text-2xl font-serif font-bold tracking-tighter uppercase transition-colors ${navColorClass}`}>
        Explorateur
      </Link>

      <div className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-8 text-[10px] uppercase tracking-[0.2em] font-display font-bold ${isScrolled || !isHome ? "text-ink/60" : "text-white/70"}`}>
        <Link to="/about" className="hover:text-accent transition-colors py-2">About</Link>
        <Link to="/services" className="hover:text-accent transition-colors py-2">Packages</Link>
        <Link to="/gallery" className="hover:text-accent transition-colors py-2">Gallery</Link>
        <Link to="/blog" className="hover:text-accent transition-colors py-2">Blog</Link>
      </div>

      <div className="flex items-center">
        <Link to="/contact" className="btn-primary !py-2.5 !px-8 !text-[10px]">Get Free Quote</Link>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer aria-label="Site footer" className="bg-ink text-paper py-24 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
      <div className="md:col-span-2">
        <div className="text-3xl font-serif font-bold tracking-tighter uppercase mb-8">Explorateur</div>
        <p className="text-paper/60 max-w-md mb-8 leading-relaxed">
          Your trusted travel partner for handcrafted itineraries, verified local guides, and stress-free vacations. No hidden charges — just unforgettable experiences since 2015.
        </p>
        <div className="flex gap-4">
          <a href="#" aria-label="Follow us on Instagram" className="min-w-[44px] min-h-[44px] flex items-center justify-center text-paper/40 hover:text-accent transition-colors cursor-pointer">
            <Instagram className="w-5 h-5" aria-hidden="true" />
          </a>
          <a href="#" aria-label="Follow us on Facebook" className="min-w-[44px] min-h-[44px] flex items-center justify-center text-paper/40 hover:text-accent transition-colors cursor-pointer">
            <Facebook className="w-5 h-5" aria-hidden="true" />
          </a>
          <a href="#" aria-label="Follow us on Twitter" className="min-w-[44px] min-h-[44px] flex items-center justify-center text-paper/40 hover:text-accent transition-colors cursor-pointer">
            <Twitter className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div>
        <h4 className="font-display font-bold uppercase tracking-widest text-xs mb-8 text-accent">Quick Links</h4>
        <nav aria-label="Footer navigation">
          <ul className="space-y-4 text-sm text-paper/60">
            <li><Link to="/about" className="hover:text-paper transition-colors cursor-pointer">About Us</Link></li>
            <li><Link to="/services" className="hover:text-paper transition-colors cursor-pointer">Our Services</Link></li>
            <li><Link to="/gallery" className="hover:text-paper transition-colors cursor-pointer">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-paper transition-colors cursor-pointer">Contact</Link></li>
          </ul>
        </nav>
      </div>

      <div>
        <h4 className="font-display font-bold uppercase tracking-widest text-xs mb-8 text-accent">Newsletter</h4>
        <p className="text-xs text-paper/60 mb-4">Get curated travel guides in your inbox.</p>
        <form onSubmit={(e) => e.preventDefault()} className="flex border-b border-paper/20 pb-2">
          <label htmlFor="newsletter-email" className="sr-only">Email Address</label>
          <input id="newsletter-email" type="email" placeholder="Email Address" className="bg-transparent border-none text-sm w-full focus:ring-0 placeholder:text-paper/20" required />
          <button type="submit" aria-label="Subscribe to newsletter" className="cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-accent" aria-hidden="true" />
          </button>
        </form>
      </div>
    </div>

    <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-paper/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-paper/40">
      <p>© 2025 Explorateur Travel. Govt. Approved Tour Operator. All Rights Reserved.</p>
      <div className="flex gap-8">
        <a href="#" className="hover:text-paper transition-colors">Terms & Conditions</a>
        <a href="#" className="hover:text-paper transition-colors">Privacy Policy</a>
      </div>
    </div>
  </footer>
);

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/1234567890"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with us on WhatsApp"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group min-w-[56px] min-h-[56px] cursor-pointer"
  >
    <MessageCircle className="w-6 h-6" aria-hidden="true" />
    <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 whitespace-nowrap font-display font-bold text-xs uppercase tracking-widest">
      Book via WhatsApp
    </span>
  </motion.a>
);

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen relative">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <FloatingBackground />
      <Navbar />
      <main id="main-content" className="pt-20 md:pt-0">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
