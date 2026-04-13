import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/jamuna-logo.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <img src={logo} alt="Jamuna Gas" className="h-12 brightness-0 invert" />
          <p className="text-sm text-primary-foreground/70">
            Bangladesh's first government-approved private LPG plant. Serving 1.5M+ customers nationwide since 2000.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {[
              { label: "Home", to: "/" },
              { label: "Products", to: "/products" },
              { label: "About Us", to: "/about" },
              { label: "Safety Tips", to: "/safety" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary-foreground transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Our Products</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>Household LPG</li>
            <li>Commercial LPG</li>
            <li>Industrial LPG</li>
            <li>Auto Gas</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0" /> Dhaka, Bangladesh</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /> +880-XXXX-XXXXXX</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /> info@jamunagas.com</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} Jamuna Spacetech Joint Venture Limited. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
