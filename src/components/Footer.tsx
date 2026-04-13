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

    {/* Main footer */}
    <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
        {/* Brand - wider column */}
        <div className="lg:col-span-4 space-y-6">
          <div className="inline-flex items-center gap-3 rounded-2xl bg-white/10 border border-white/10 p-3 pr-6 backdrop-blur-sm">
            <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center p-1.5">
              <img src={logo} alt="Jamuna Gas" className="h-full w-auto object-contain" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">Jamuna Gas</h3>
              <p className="text-[11px] text-white/50">Since 2000</p>
            </div>
          </div>
          <p className="text-sm text-white/50 leading-relaxed max-w-xs">
            Bangladesh's first government-approved private LPG plant. Delivering safe, reliable energy to over 1.5 million customers nationwide.
          </p>
          <div className="flex items-center gap-2 text-accent text-sm font-semibold">
            <Flame className="h-4 w-4" />
            Powering Bangladesh's Future
          </div>

          {/* CTA */}
          <Button asChild className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 font-semibold px-6 rounded-xl shadow-lg shadow-primary/20 group">
            <Link to="/contact">
              Get a Quote
              <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2">
          <h4 className="font-bold text-xs uppercase tracking-[0.15em] mb-6 text-white/80">Quick Links</h4>
          <ul className="space-y-3">
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
        <div className="lg:col-span-2">
          <h4 className="font-bold text-xs uppercase tracking-[0.15em] mb-6 text-white/80">Our Products</h4>
          <ul className="space-y-3">
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

        {/* Contact */}
        <div className="lg:col-span-4">
          <h4 className="font-bold text-xs uppercase tracking-[0.15em] mb-6 text-white/80">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="h-9 w-9 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="h-4 w-4 text-accent" />
              </div>
              <span className="text-sm text-white/50 leading-relaxed">House 99, Rupayan Golden Age (2nd Floor), Gulshan Avenue, Dhaka-1212</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0">
                <Phone className="h-4 w-4 text-accent" />
              </div>
              <a href="tel:+88029844940" className="text-sm text-white/50 hover:text-accent transition-colors font-medium">+880 2-9844940</a>
            </li>
            <li className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0">
                <Mail className="h-4 w-4 text-accent" />
              </div>
              <a href="mailto:info@jamunagas.com" className="text-sm text-white/50 hover:text-accent transition-colors font-medium">info@jamunagas.com</a>
            </li>
            <li className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0">
                <Clock className="h-4 w-4 text-accent" />
              </div>
              <span className="text-sm text-white/50">Sat–Thu: 9 am – 5 pm</span>
            </li>
          </ul>
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