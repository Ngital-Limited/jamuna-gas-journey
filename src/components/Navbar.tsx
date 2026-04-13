import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, Flame } from "lucide-react";
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
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-[0_4px_30px_-4px_rgba(0,0,0,0.12)] border-b border-border/20"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <img
            src={logo}
            alt="Jamuna Gas"
            className="h-12 transition-all duration-300 group-hover:scale-[1.03]"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 text-[13px] font-semibold tracking-[0.03em] uppercase transition-all duration-300 rounded-lg ${
                  isActive
                    ? scrolled
                      ? "text-primary"
                      : "text-white"
                    : scrolled
                      ? "text-foreground/50 hover:text-foreground hover:bg-muted/50"
                      : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-[3px] rounded-full ${scrolled ? "bg-primary" : "bg-white"}`} />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button asChild className={`font-semibold px-6 rounded-xl shadow-lg transition-all duration-300 group ${
            scrolled
              ? "bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-xl hover:shadow-primary/20"
              : "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
          }`}>
            <Link to="/contact">
              <Flame className="h-4 w-4 mr-1.5" />
              Get a Quote
              <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? "hover:bg-muted/60" : "hover:bg-white/10 text-white"}`}
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
  );
};

export default Navbar;