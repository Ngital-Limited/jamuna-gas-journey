import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ChevronRight, ArrowRight, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/jamuna-logo.png";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
  { label: "About Us", to: "/about" },
  { label: "Safety Tips", to: "/safety" },
  { label: "Sustainability", to: "/sustainability" },
  { label: "Contact", to: "/contact" },
];

const productLinks = [
  { label: "Household LPG", to: "/products#household" },
  { label: "Commercial LPG", to: "/products#commercial" },
  { label: "Bulk LPG System", to: "/products#bulk" },
  { label: "Auto Gas", to: "/products#autogas" },
];

const Footer = () => (
  <footer className="relative bg-primary text-white overflow-hidden">
    {/* Subtle texture */}
    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

    {/* Top: Contact strip */}
    <div className="bg-white/[0.08] border-b border-white/[0.06] relative z-10">
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <a href="tel:+88029844940" className="flex items-center gap-2.5 group">
              <Phone className="h-4 w-4 text-accent" />
              <span className="text-sm font-bold text-white/90 group-hover:text-accent transition-colors">+880 2-9844940</span>
            </a>
            <a href="mailto:info@jamunagas.com" className="flex items-center gap-2.5 group">
              <Mail className="h-4 w-4 text-accent" />
              <span className="text-sm text-white/70 group-hover:text-accent transition-colors">info@jamunagas.com</span>
            </a>
            <div className="flex items-center gap-2.5">
              <Clock className="h-4 w-4 text-white/40" />
              <span className="text-sm text-white/50">Sat–Thu: 9am – 5pm</span>
            </div>
          </div>
          <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-foreground font-bold rounded-lg px-5 shadow-md shadow-accent/20 group">
            <Link to="/contact">
              Get a Quote
              <ArrowRight className="h-3.5 w-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>

    {/* Main content */}
    <div className="container mx-auto px-4 py-14 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center p-1 shadow-md">
              <img src={logo} alt="Jamuna Gas" className="h-full w-auto object-contain" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Jamuna Gas</h3>
              <p className="text-[11px] text-white/40">Since 2000</p>
            </div>
          </div>
          <p className="text-[13px] text-white/45 leading-relaxed mb-5">
            Bangladesh's first government-approved private LPG plant, serving 1.5 million+ customers nationwide.
          </p>
          <div className="flex items-start gap-2.5">
            <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
            <p className="text-xs text-white/40 leading-relaxed">
              House 99, Rupayan Golden Age (2nd Floor), Gulshan Avenue, Dhaka-1212
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white/70 mb-5">Quick Links</h4>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-[13px] text-white/40 hover:text-accent transition-colors duration-200 flex items-center gap-1.5 group">
                  <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white/70 mb-5">Our Products</h4>
          <ul className="space-y-2.5">
            {productLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-[13px] text-white/40 hover:text-accent transition-colors duration-200 flex items-center gap-1.5 group">
                  <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter / CTA */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white/70 mb-5">Stay Connected</h4>
          <p className="text-[13px] text-white/40 leading-relaxed mb-5">
            Need LPG for your home, business, or industry? Contact us today for a custom solution.
          </p>
          <a href="tel:+88029844940" className="flex items-center gap-3 mb-4 group">
            <div className="h-10 w-10 rounded-lg bg-accent/15 border border-accent/20 flex items-center justify-center group-hover:bg-accent/25 transition-colors">
              <Phone className="h-4 w-4 text-accent" />
            </div>
            <div>
              <p className="text-xs text-white/30">Call anytime</p>
              <p className="text-sm font-bold text-white/80 group-hover:text-accent transition-colors">+880 2-9844940</p>
            </div>
          </a>
          <a href="mailto:info@jamunagas.com" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center group-hover:bg-white/[0.1] transition-colors">
              <Mail className="h-4 w-4 text-white/50" />
            </div>
            <div>
              <p className="text-xs text-white/30">Email us</p>
              <p className="text-sm text-white/60 group-hover:text-accent transition-colors">info@jamunagas.com</p>
            </div>
          </a>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/[0.08] relative z-10">
      <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[11px] text-white/30">
          © {new Date().getFullYear()} Jamuna Spacetech Joint Venture Limited. All rights reserved.
        </p>
        <span className="flex items-center gap-1.5 text-[11px] text-white/30">
          <Flame className="h-3 w-3 text-accent/50" />
          Powering Bangladesh's Future
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
