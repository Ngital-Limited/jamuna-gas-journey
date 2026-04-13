import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ArrowRight, Flame, ChevronRight, ExternalLink } from "lucide-react";
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
  <footer className="relative bg-[#0a1628] text-white overflow-hidden">
    {/* Background effects */}
    <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
    <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary/6 rounded-full blur-[200px] -translate-y-1/2" />
    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[180px] translate-y-1/2" />

    {/* Top accent line */}
    <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />

    {/* Main footer content */}
    <div className="container mx-auto px-4 pt-16 pb-10 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

        {/* Brand + Contact — Left column */}
        <div className="lg:col-span-5 space-y-8">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-2xl bg-white flex items-center justify-center p-1.5 shadow-lg shadow-white/5">
              <img src={logo} alt="Jamuna Gas" className="h-full w-auto object-contain" />
            </div>
            <div>
              <h3 className="font-extrabold text-white text-lg tracking-wide">Jamuna Gas</h3>
              <div className="flex items-center gap-1.5 text-accent text-xs font-semibold mt-0.5">
                <Flame className="h-3 w-3" />
                Since 2000
              </div>
            </div>
          </div>

          <p className="text-sm text-white/45 leading-relaxed max-w-sm">
            Bangladesh's first government-approved private LPG plant. Delivering safe, reliable energy to over 1.5 million customers nationwide.
          </p>

          {/* Contact cards */}
          <div className="space-y-3">
            <a href="tel:+88029844940" className="flex items-center gap-4 group p-3 -ml-3 rounded-xl hover:bg-white/[0.03] transition-colors">
              <div className="h-11 w-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                <Phone className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-white/30 font-medium">Call Us</p>
                <p className="text-lg font-bold text-white/90 group-hover:text-accent transition-colors tracking-wide">+880 2-9844940</p>
              </div>
            </a>

            <a href="mailto:info@jamunagas.com" className="flex items-center gap-4 group p-3 -ml-3 rounded-xl hover:bg-white/[0.03] transition-colors">
              <div className="h-11 w-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-white/30 font-medium">Email</p>
                <p className="text-sm font-medium text-white/70 group-hover:text-accent transition-colors">info@jamunagas.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-3 -ml-3">
              <div className="h-11 w-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-white/40" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-white/30 font-medium">Head Office</p>
                <p className="text-sm text-white/50 leading-relaxed">House 99, Rupayan Golden Age (2nd Floor), Gulshan Avenue, Dhaka-1212</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 -ml-3">
              <div className="h-11 w-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
                <Clock className="h-5 w-5 text-white/40" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-white/30 font-medium">Working Hours</p>
                <p className="text-sm text-white/50">Sat – Thu: 9:00 AM – 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Links columns — Right side */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-white/60 flex items-center gap-2">
                <span className="h-px w-4 bg-accent" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-[13px] text-white/35 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2 group">
                      <ChevronRight className="h-3 w-3 text-accent/0 group-hover:text-accent transition-colors" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-white/60 flex items-center gap-2">
                <span className="h-px w-4 bg-accent" />
                Products
              </h4>
              <ul className="space-y-3">
                {productLinks.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-[13px] text-white/35 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2 group">
                      <ChevronRight className="h-3 w-3 text-accent/0 group-hover:text-accent transition-colors" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get in Touch CTA */}
            <div>
              <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-white/60 flex items-center gap-2">
                <span className="h-px w-4 bg-accent" />
                Get Started
              </h4>
              <p className="text-[13px] text-white/40 leading-relaxed mb-6">
                Need LPG for your home, business, or industry? We're here to help.
              </p>
              <Button asChild className="w-full bg-gradient-to-r from-accent to-accent/80 text-foreground hover:opacity-90 font-bold px-6 py-3 rounded-xl shadow-lg shadow-accent/15 group">
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <a href="tel:+88029844940" className="mt-3 flex items-center justify-center gap-2 text-sm text-white/40 hover:text-accent transition-colors py-2">
                <Phone className="h-3.5 w-3.5" />
                Or call us directly
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/[0.05] relative z-10">
      <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-[11px] text-white/25 tracking-wide">
          © {new Date().getFullYear()} Jamuna Spacetech Joint Venture Limited. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-[11px] text-white/25">
          <span className="flex items-center gap-1.5">
            <Flame className="h-3 w-3 text-accent/40" />
            Powering Bangladesh's Future
          </span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
