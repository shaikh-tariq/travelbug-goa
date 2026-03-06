import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES } from "../data/services";

export default function Services() {
  // --- This page displays all travel services offered ---
  // To add or edit services, go to: /src/data/services.ts

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* --- Header Section --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <span className="text-[11px] uppercase tracking-[0.3em] font-display font-bold text-accent mb-6 block">Our Expertise</span>
        <h1 className="text-6xl md:text-8xl mb-8">Crafting your <br /><span className="font-script text-accent">perfect</span> journey.</h1>
        <p className="text-xl text-ink/60 max-w-3xl mx-auto leading-relaxed">
          From the moment you inquire to the moment you return home, we are your dedicated advocate and travel designer.
        </p>
      </motion.div>

      {/* --- Services List --- */}
      <div className="space-y-32">
        {SERVICES.map((service, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}
          >
            {/* Service Image */}
            <div className="flex-1 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl group">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            </div>

            {/* Service Content */}
            <div className="flex-1 space-y-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <service.icon className="text-accent w-6 h-6" />
              </div>
              <h2 className="text-4xl md:text-5xl">{service.title}</h2>
              <p className="text-lg text-ink/70 leading-relaxed">{service.desc}</p>
              
              {/* Feature List */}
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-display font-bold uppercase tracking-widest text-olive">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link to Detail Page */}
              <Link to={`/services/${service.slug}`} className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-accent hover:gap-4 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
