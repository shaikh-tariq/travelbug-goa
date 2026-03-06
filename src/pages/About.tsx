import { motion } from "motion/react";
import { Star, Map, Users, Globe, Heart, Shield, Zap, CheckCircle2, Quote } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  // --- About Us Page ---
  // Sections: Hero, Values, Process, Team, CTA.

  return (
    <div className="pt-32 pb-24">
      {/* --- Section 1: Hero & Our Story --- */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] font-display font-bold text-accent mb-6 block">Our Story</span>
          <h1 className="text-6xl md:text-8xl mb-8">Experience. <br /><span className="font-script text-accent">Expand.</span> Explore.</h1>
          <p className="text-xl text-ink/60 max-w-3xl mx-auto leading-relaxed">
            Founded in 2015, Explorateur Travel was born from a passion for authentic connection. We believe travel isn't just about seeing a destination—it's about feeling the culture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
              alt="Our Team" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-accent/10" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl mb-8">A modernized solution to travel planning.</h2>
            <p className="text-lg text-ink/70 mb-8 leading-relaxed">
              When you work with Explorateur, you aren’t simply a confirmation number. Your investment is personal to us. From our thorough inquiry form to the moment that you return home, we are an advocate for your vacation experience.
            </p>
            <div className="space-y-6">
              {[
                { icon: Globe, title: "Global Network", desc: "Access to exclusive perks and hidden gems worldwide." },
                { icon: Users, title: "Personal Advocate", desc: "We are with you every step of the way, from planning to return." },
                { icon: Map, title: "Tailor-Made", desc: "Every itinerary is built from scratch to match your unique style." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-accent w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold uppercase tracking-widest text-xs mb-1">{item.title}</h4>
                    <p className="text-sm text-ink/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 2: Core Values --- */}
      <section className="bg-ink py-32 px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[11px] uppercase tracking-[0.3em] font-display font-bold text-accent mb-6 block">Our Core Values</span>
            <h2 className="text-4xl md:text-6xl text-paper">The principles that guide us.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Passion", desc: "We love what we do and it shows in every itinerary we create." },
              { icon: Shield, title: "Integrity", desc: "Honest advice and transparent pricing are at our core." },
              { icon: Zap, title: "Innovation", desc: "Constantly seeking new ways to enhance your travel experience." },
              { icon: Star, title: "Excellence", desc: "We settle for nothing less than the best for our travelers." }
            ].map((value, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                <value.icon className="text-accent w-10 h-10 mb-6" />
                <h3 className="text-xl text-paper mb-4">{value.title}</h3>
                <p className="text-paper/50 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 3: Our Process --- */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] font-display font-bold text-accent mb-6 block">Our Process</span>
            <h2 className="text-4xl md:text-6xl mb-12">How we craft your <br /><span className="font-script text-accent italic">perfect journey.</span></h2>
            <div className="space-y-12">
              {[
                { step: "01", title: "Discovery Call", desc: "We start by getting to know you, your travel style, and your dreams." },
                { step: "02", title: "Custom Design", desc: "Our experts craft a unique itinerary tailored specifically to your preferences." },
                { step: "03", title: "Refinement", desc: "We work together to polish every detail until it's exactly right." },
                { step: "04", title: "Seamless Travel", desc: "You jet off with 24/7 support and every detail handled." }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 relative">
                  {i !== 3 && <div className="absolute left-6 top-12 bottom-[-48px] w-px bg-accent/20" />}
                  <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center shrink-0 bg-paper z-10">
                    <span className="text-accent font-display font-bold text-xs">{item.step}</span>
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">{item.title}</h4>
                    <p className="text-ink/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80" className="rounded-3xl w-full aspect-[3/4] object-cover" alt="Beach" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=400&q=80" className="rounded-3xl w-full aspect-square object-cover" alt="Mountain" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=400&q=80" className="rounded-3xl w-full aspect-square object-cover" alt="Roadtrip" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=400&q=80" className="rounded-3xl w-full aspect-[3/4] object-cover" alt="City" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 4: The Team (Founders) --- */}
      <section className="bg-paper py-32 px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[11px] uppercase tracking-[0.3em] font-display font-bold text-accent mb-6 block">The Visionaries</span>
            <h2 className="text-4xl md:text-6xl mb-8">Meet the hearts behind <br />Explorateur.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Sarah Jenkins", role: "Co-Founder & Lead Designer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80" },
              { name: "Michael Chen", role: "Co-Founder & Operations", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" },
              { name: "Elena Rodriguez", role: "Director of Experiences", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80" }
            ].map((person, i) => (
              <div key={i} className="group">
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-2xl mb-1">{person.name}</h3>
                <p className="text-accent font-display font-bold uppercase tracking-widest text-[10px]">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 5: Call to Action --- */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="bg-ink text-paper rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl mb-8">Ready to start your <br /><span className="font-script text-accent italic">next chapter?</span></h2>
            <p className="text-paper/60 mb-12 max-w-xl mx-auto">Join the thousands of travelers who have discovered the world through the Explorateur lens.</p>
            <Link to="/contact" className="btn-primary">Work With Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
