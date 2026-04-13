import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-primary text-primary-foreground text-xs">
        <div className="container mx-auto flex items-center justify-between px-4 py-1.5">
          <span>Bangladesh's Pioneer in LPG — Serving 1.5 Million+ Customers</span>
          <div className="flex items-center gap-4">
            <a href="tel:+88029844940" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Phone className="h-3 w-3" />
              +880 2-9844940
            </a>
            <a href="mailto:info@jamunagas.com" className="hover:text-accent transition-colors">
              info@jamunagas.com
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur shadow-lg border-b border-border/20"
            : "bg-background border-b border-border/40"
        }`}
      >
        <div className="container mx-auto flex h-18 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Jamuna Gas"
              className="h-12 transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2.5 text-sm font-semibold tracking-wide uppercase transition-colors duration-200 ${
                    isActive
                      ? "text-primary"
                      : "text-foreground/60 hover:text-primary"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center">
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 shadow-md hover:shadow-lg transition-all duration-200">
                Get a Quote
              </Button>
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-[500px] border-t border-border" : "max-h-0"
          }`}
        >
          <nav className="bg-background px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-wide transition-colors ${
                  location.pathname === link.to
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:bg-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="block pt-2">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Get a Quote
              </Button>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
