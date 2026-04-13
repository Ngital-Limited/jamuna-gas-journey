import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ArrowRight, Flame } from "lucide-react";
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
  { label: "Household LPG", to: "/products" },
  { label: "Commercial LPG", to: "/products" },
  { label: "Bulk LPG System", to: "/products" },
  { label: "Auto Gas", to: "/products" },
];

const Footer = () => (
  <footer className="bg-foreground text-background">
    {/* Main footer */}
    <div className="container mx-auto px-4 pt-16 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        {/* Brand */}
        <div className="space-y-5">
          <img src={logo} alt="Jamuna Gas" className="h-14 brightness-0 invert" />
          <p className="text-sm text-background/60 leading-relaxed">
            Bangladesh's first government-approved private LPG plant. Delivering safe, reliable energy to over 1.5 million customers since 2000.
          </p>
          <div className="flex items-center gap-2 text-accent text-sm font-semibold">
            <Flame className="h-4 w-4" />
            Powering Bangladesh's Future
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-background/90">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-background/50 hover:text-accent transition-colors duration-200 flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-background/90">Our Products</h4>
          <ul className="space-y-3">
            {productLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-sm text-background/50 hover:text-accent transition-colors duration-200 flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-background/90">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-lg bg-background/10 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="h-4 w-4 text-accent" />
              </div>
              <span className="text-sm text-background/60 leading-relaxed">House 99, Rupayan Golden Age (2nd Floor), Gulshan Avenue, Dhaka-1212</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-background/10 flex items-center justify-center shrink-0">
                <Phone className="h-4 w-4 text-accent" />
              </div>
              <a href="tel:+88029844940" className="text-sm text-background/60 hover:text-accent transition-colors">+880 2-9844940</a>
            </li>
            <li className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-background/10 flex items-center justify-center shrink-0">
                <Mail className="h-4 w-4 text-accent" />
              </div>
              <a href="mailto:info@jamunagas.com" className="text-sm text-background/60 hover:text-accent transition-colors">info@jamunagas.com</a>
            </li>
            <li className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-background/10 flex items-center justify-center shrink-0">
                <Clock className="h-4 w-4 text-accent" />
              </div>
              <span className="text-sm text-background/60">Sat–Thu: 9 am – 5 pm</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-background/10">
      <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-background/40">
          © {new Date().getFullYear()} Jamuna Spacetech Joint Venture Limited. All rights reserved.
        </p>
        <p className="text-xs text-background/40">
          Designed with ❤️ for Bangladesh
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
