import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { SERVICES } from "../data/services";

export default function ServiceDetail() {
  // --- This page displays detailed information for a specific service ---
  // To add or edit service details, go to: /src/data/services.ts

  const { slug } = useParams();
  
  // Find the service that matches the URL slug, or default to the first one
  const service = SERVICES.find(s => s.slug === slug) || SERVICES[0];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* --- Back Navigation --- */}
      <Link to="/services" className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-accent mb-12 hover:gap-4 transition-all">
        <ArrowLeft className="w-4 h-4" /> All Services
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* --- Left Column: Content --- */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          {/* Service Icon */}
          <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
            <service.icon className="text-accent w-8 h-8" />
          </div>

          {/* Title & Description */}
          <h1 className="text-5xl md:text-7xl leading-tight">{service.title}</h1>
          <p className="text-xl text-ink/70 leading-relaxed">
            {service.longDesc}
          </p>
          
          {/* Included Features List */}
          <div className="space-y-4 pt-8">
            <h3 className="font-display font-bold uppercase tracking-widest text-xs text-accent">What's Included</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.detailedFeatures.map((feature, i) => (
                <div key={i} className="flex gap-3 items-center">
                   <CheckCircle2 className="w-5 h-5 text-olive" />
                  <span className="text-sm font-medium text-ink/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Inquiry Button (Auto-fills contact form) */}
          <div className="pt-12">
            <Link to={`/contact?type=${encodeURIComponent(service.title)}`} className="btn-primary">Inquire About This Service</Link>
          </div>
        </motion.div>

        {/* --- Right Column: Image --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative"
        >
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
}
