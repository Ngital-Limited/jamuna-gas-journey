import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ArrowRight, Flame, ChevronRight } from "lucide-react";
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
  <footer className="relative bg-foreground text-white overflow-hidden">
    {/* Background texture */}
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[150px] -translate-y-1/2" />
    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[120px] translate-y-1/2" />

    {/* Centered Logo & Brand */}
    <div className="relative z-10 pt-16 pb-10 flex flex-col items-center text-center">
      <div className="h-20 w-20 rounded-2xl bg-white flex items-center justify-center p-2 shadow-lg shadow-white/10 mb-4">
        <img src={logo} alt="Jamuna Gas" className="h-full w-auto object-contain" />
      </div>
      <h3 className="font-bold text-white text-xl tracking-wide">Jamuna Gas</h3>
      <p className="text-xs text-white/40 mt-1">Since 2000</p>
      <p className="text-sm text-white/50 leading-relaxed max-w-md mt-4">
        Bangladesh's first government-approved private LPG plant. Delivering safe, reliable energy to over 1.5 million customers nationwide.
      </p>
      <div className="flex items-center gap-2 text-accent text-sm font-semibold mt-3">
        <Flame className="h-4 w-4" />
        Powering Bangladesh's Future
      </div>
    </div>

    {/* Centered Contact Info */}
    <div className="relative z-10 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-5 max-w-lg mx-auto">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="h-5 w-5 text-accent" />
            </div>
            <span className="text-sm text-white/60 leading-relaxed text-left">
              House 99, Rupayan Golden Age (2nd Floor),<br />Gulshan Avenue, Dhaka-1212
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0">
              <Phone className="h-5 w-5 text-accent" />
            </div>
            <a href="tel:+88029844940" className="text-lg md:text-xl text-white/80 hover:text-accent transition-colors font-bold tracking-wide">
              +880 2-9844940
            </a>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0">
              <Mail className="h-5 w-5 text-accent" />
            </div>
            <a href="mailto:info@jamunagas.com" className="text-sm text-white/60 hover:text-accent transition-colors font-medium">
              info@jamunagas.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0">
              <Clock className="h-5 w-5 text-accent" />
            </div>
            <span className="text-sm text-white/60">Sat–Thu: 9 am – 5 pm</span>
          </div>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-white/[0.06] relative z-10" />

    {/* Links + CTA */}
    <div className="container mx-auto px-4 py-12 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-4xl mx-auto">
        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-[0.15em] mb-5 text-white/80">Quick Links</h4>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-white/40 hover:text-accent transition-colors duration-200 flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-[0.15em] mb-5 text-white/80">Our Products</h4>
          <ul className="space-y-2.5">
            {productLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-sm text-white/40 hover:text-accent transition-colors duration-200 flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-start sm:items-center lg:items-start justify-center gap-4">
          <p className="text-sm text-white/50">Ready to get started?</p>
          <Button asChild className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 font-semibold px-6 rounded-xl shadow-lg shadow-primary/20 group">
            <Link to="/contact">
              Get a Quote
              <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/[0.06] relative z-10">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} Jamuna Spacetech Joint Venture Limited. All rights reserved.
        </p>
        <p className="text-xs text-white/30">
          Designed with ❤️ for Bangladesh
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
