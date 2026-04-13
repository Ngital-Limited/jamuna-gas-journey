import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/jamuna-logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
  { label: "About Us", to: "/about" },
  { label: "Safety Tips", to: "/safety" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Slim top bar */}
      <div className="hidden lg:block bg-foreground text-background text-xs">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <span className="opacity-70">Bangladesh's Pioneer in LPG — Serving 1.5 Million+ Customers Since 2000</span>
          <div className="flex items-center gap-5">
            <a href="tel:+88029844940" className="flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
              <Phone className="h-3 w-3" />
              +880 2-9844940
            </a>
            <span className="opacity-30">|</span>
            <a href="mailto:info@jamunagas.com" className="opacity-70 hover:opacity-100 transition-opacity">
              info@jamunagas.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-background/98 backdrop-blur-xl shadow-[0_2px_20px_-4px_rgba(0,0,0,0.1)] border-b border-border/30"
            : "bg-background/95 backdrop-blur-sm border-b border-border/20"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <img
              src={logo}
              alt="Jamuna Gas"
              className="h-14 transition-all duration-300 group-hover:scale-[1.03]"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2.5 text-[13px] font-semibold tracking-[0.04em] uppercase transition-all duration-200 rounded-lg ${
                    isActive
                      ? "text-primary bg-primary/5"
                      : "text-foreground/55 hover:text-foreground hover:bg-muted/60"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-[3px] bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 rounded-lg shadow-md hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group">
              <Link to="/contact">
                Get a Quote
                <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted/60 transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-400 ${
            open ? "max-h-[600px] border-t border-border/40" : "max-h-0"
          }`}
        >
          <nav className="bg-background px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all ${
                  location.pathname === link.to
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/60 hover:bg-muted hover:text-foreground"
                }`}
              >
                {link.label}
                <ChevronRight className="h-4 w-4 opacity-30" />
              </Link>
            ))}
            <div className="pt-3 px-1">
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl h-12">
                <Link to="/contact" onClick={() => setOpen(false)}>Get a Quote</Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
