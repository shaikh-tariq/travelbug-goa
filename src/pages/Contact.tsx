import { motion } from "motion/react";
import { MessageCircle, Mail, Phone, MapPin, Send } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Contact() {
  // --- Contact Page & Inquiry Form ---
  // Features: Auto-fill trip type from URL parameters.

  const [searchParams] = useSearchParams();
  const [tripType, setTripType] = useState("Other");

  useEffect(() => {
    const type = searchParams.get("type");
    if (type) {
      // Map incoming type to available options or just set it if it matches
      const options = ["Honeymoon", "Solo Adventure", "Family Getaway", "Destination Wedding", "Other"];
      const matchedOption = options.find(opt => opt.toLowerCase() === type.toLowerCase() || type.toLowerCase().includes(opt.toLowerCase().split(' ')[0]));
      if (matchedOption) {
        setTripType(matchedOption);
      } else if (type.includes("Solo")) {
        setTripType("Solo Adventure");
      } else if (type.includes("Honeymoon") || type.includes("Romance")) {
        setTripType("Honeymoon");
      } else if (type.includes("Family") || type.includes("Group")) {
        setTripType("Family Getaway");
      } else if (type.includes("Wedding") || type.includes("Event")) {
        setTripType("Destination Wedding");
      }
    }
  }, [searchParams]);

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] font-display font-bold text-accent mb-6 block">Get in Touch</span>
            <h1 className="text-6xl md:text-7xl mb-8">Let's start <br /><span className="font-script text-accent">planning.</span></h1>
            <p className="text-xl text-ink/60 leading-relaxed">
              Ready to embark on your next adventure? Fill out the form or reach out directly. We can't wait to hear from you.
            </p>
          </div>

          <div className="space-y-8">
            {[
              { icon: Mail, title: "Email Us", value: "hello@explorateurtravel.com" },
              { icon: Phone, title: "Call Us", value: "+1 (555) 123-4567" },
              { icon: MessageCircle, title: "WhatsApp", value: "+1 (555) 987-6543" },
              { icon: MapPin, title: "Visit Us", value: "123 Travel Lane, Suite 100, Miami, FL" }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <item.icon className="text-accent w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-display font-bold uppercase tracking-widest text-[10px] text-ink/40 mb-1">{item.title}</h4>
                  <p className="text-lg font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-black/5"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-[10px] uppercase tracking-widest font-display font-bold text-ink/40 ml-2">Full Name</label>
                <input id="contact-name" type="text" className="w-full bg-paper/50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-accent outline-none" placeholder="John Doe" required />
              </div>
              <div
                className="space-y-2">
                <label htmlFor="contact-email" className="text-[10px] uppercase tracking-widest font-display font-bold text-ink/40 ml-2">Email Address</label>
                <input id="contact-email" type="email" className="w-full bg-paper/50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-accent outline-none" placeholder="john@example.com" required />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-trip-type" className="text-[10px] uppercase tracking-widest font-display font-bold text-ink/40 ml-2">Trip Type</label>
              <select
                id="contact-trip-type"
                value={tripType}
                onChange={(e) => setTripType(e.target.value)}
                className="w-full bg-paper/50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-accent outline-none appearance-none cursor-pointer"
              >
                <option>Honeymoon</option>
                <option>Solo Adventure</option>
                <option>Family Getaway</option>
                <option>Destination Wedding</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-message" className="text-[10px] uppercase tracking-widest font-display font-bold text-ink/40 ml-2">Message</label>
              <textarea id="contact-message" rows={4} className="w-full bg-paper/50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-accent outline-none resize-none" placeholder="Tell us about your dream trip..."></textarea>
            </div>

            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-3 !py-4">
              Send Inquiry <Send className="w-4 h-4" aria-hidden="true" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
