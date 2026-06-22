import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ChevronRight, ArrowRight, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/jamuna-logo.png";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
  { label: "About Us", to: "/about" },
  { label: "Sustainability", to: "/sustainability" },
  { label: "Safety Tips", to: "/safety" },
  { label: "Sister Concerns", to: "/sister-concerns" },
  { label: "Contact", to: "/contact" },
];

const productLinks = [
  { label: "Household LPG", to: "/products#household" },
  { label: "Commercial LPG", to: "/products#commercial" },
  { label: "Bulk LPG System", to: "/products#bulk" },
  { label: "Auto Gas", to: "/products#autogas" },
];

const resourceLinks = [
  { label: "Dealer Network", to: "/dealer" },
  { label: "Become a Dealer", to: "/dealer#apply" },
  { label: "Bulk Service Enquiry", to: "/bulk-enquiry" },
  { label: "Careers", to: "/career" },
  { label: "Blog & Media", to: "/blog" },
];

const Footer = () => (
  <footer className="relative bg-[#8B1A1A] text-white overflow-hidden">
    {/* Subtle texture */}
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

    {/* Top contact strip */}
    <div className="bg-[#7A1515] border-b border-white/10 relative z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <a href="tel:+88029844940" className="flex items-center gap-2.5 group">
              <Phone className="h-4 w-4 text-accent" />
              <span className="text-sm font-bold text-white group-hover:text-accent transition-colors">+880 2-9844940</span>
            </a>
            <a href="mailto:info@jamunagas.com" className="flex items-center gap-2.5 group">
              <Mail className="h-4 w-4 text-accent" />
              <span className="text-sm text-white/90 group-hover:text-accent transition-colors">info@jamunagas.com</span>
            </a>
            <div className="flex items-center gap-2.5">
              <Clock className="h-4 w-4 text-white/50" />
              <span className="text-sm text-white/70">Sat–Thu: 9am – 5pm</span>
            </div>
          </div>
          <Button asChild size="sm" className="bg-gradient-to-br from-accent via-accent to-accent/90 border border-white/20 text-foreground font-bold rounded-lg px-5 shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 active:translate-y-0 hover:brightness-110 transition-all duration-300 btn-shine group">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center p-1 shadow-md">
              <img src={logo} alt="Jamuna Gas" className="h-full w-auto object-contain" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Jamuna Gas</h3>
              <p className="text-[11px] text-white/60">Since 2000</p>
            </div>
          </div>
          <p className="text-[13px] text-white/70 leading-relaxed mb-5">
            Bangladesh's first government-approved private LPG plant, serving 1.5 million+ customers nationwide.
          </p>
          <div className="flex items-start gap-2.5">
            <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
            <p className="text-[13px] text-white/60 leading-relaxed">
              House 99, Rupayan Golden Age (2nd Floor), Gulshan Avenue, Dhaka-1212
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white mb-5">Quick Links</h4>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-[13px] text-white/60 hover:text-accent transition-colors duration-200 flex items-center gap-1.5 group">
                  <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white mb-5">Our Products</h4>
          <ul className="space-y-2.5">
            {productLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-[13px] text-white/60 hover:text-accent transition-colors duration-200 flex items-center gap-1.5 group">
                  <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white mb-5">Resources</h4>
          <ul className="space-y-2.5">
            {resourceLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-[13px] text-white/60 hover:text-accent transition-colors duration-200 flex items-center gap-1.5 group">
                  <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Why Jamuna Gas */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white mb-5">Why Jamuna Gas</h4>
          <ul className="space-y-3 text-[13px] text-white/60">
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              ISO 9001:2015 Certified
            </li>
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              Government Approved
            </li>
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              WLPGA Member
            </li>
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              24/7 Customer Support
            </li>
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              Nationwide Coverage
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/10 relative z-10">
      <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[11px] text-white/40">
          © {new Date().getFullYear()} Jamuna Spacetech Joint Venture Limited. All rights reserved.
        </p>
        <span className="flex items-center gap-1.5 text-[11px] text-white/40">
          <Flame className="h-3 w-3 text-accent/60" />
          Powering Bangladesh's Future
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
