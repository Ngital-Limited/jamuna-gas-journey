import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, Flame, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/jamuna-logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
  { label: "Sustainability", to: "/sustainability" },
  { label: "About Us", to: "/about" },
  { label: "Board of Directors", to: "/board-of-directors" },
  { label: "Sister Concerns", to: "/sister-concerns" },
  { label: "Safety Tips", to: "/safety" },
  { label: "Dealer", to: "/dealer" },
  { label: "Dealer Network", to: "/dealer-network" },
  { label: "Career", to: "/career" },
  { label: "Blog", to: "/blog" },
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

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl shadow-[0_4px_30px_-4px_rgba(0,0,0,0.12)] border-b border-border/20"
            : "bg-transparent backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0 relative z-[60]">
            <img
              src={logo}
              alt="Jamuna Gas"
              className="h-12 transition-all duration-300 group-hover:scale-[1.03]"
            />
          </Link>

          {/* Desktop Nav Links - hidden, using hamburger on all sizes */}

          {/* Right side: CTA + Hamburger */}
          <div className="flex items-center gap-3">
            {/* Phone CTA - visible on larger screens */}
            <a
              href="tel:+88028844940"
              className={`hidden sm:flex items-center gap-2 text-sm font-semibold transition-all duration-300 rounded-xl px-4 py-2 ${
                scrolled
                  ? "text-primary hover:bg-primary/5"
                  : "text-foreground hover:bg-foreground/5"
              }`}
            >
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline">+880 2-9844940</span>
            </a>

            {/* Get a Quote - visible on md+ */}
            <Button asChild className={`hidden md:inline-flex font-semibold px-5 rounded-xl transition-all duration-300 group btn-shine ${
              scrolled
                ? "shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
                : "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/40 shadow-lg"
            }`}>
              <Link to="/contact">
                <Flame className="h-4 w-4 mr-1.5" />
                Get a Quote
              </Link>
            </Button>

            {/* Hamburger Button - only on mobile */}
            <button
              onClick={() => setOpen(!open)}
              className={`relative z-[60] p-2.5 rounded-xl transition-all duration-300 ${
                open
                  ? "bg-white/10 text-white"
                  : "hover:bg-foreground/10 text-foreground"
              }`}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between relative">
                <span className={`block h-[2px] rounded-full transition-all duration-300 origin-center ${
                  open ? "bg-white rotate-45 translate-y-[9px]" : "bg-foreground"
                }`} />
                <span className={`block h-[2px] rounded-full transition-all duration-300 ${
                  open ? "opacity-0 scale-x-0" : "bg-foreground opacity-100"
                }`} />
                <span className={`block h-[2px] rounded-full transition-all duration-300 origin-center ${
                  open ? "bg-white -rotate-45 -translate-y-[9px]" : "bg-foreground"
                }`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Background blur overlay on page content */}
      <div
        className={`fixed inset-0 z-[52] transition-all duration-700 ease-out ${
          open
            ? "backdrop-blur-md bg-black/20 pointer-events-none"
            : "backdrop-blur-0 bg-transparent pointer-events-none"
        }`}
      />

      {/* Fullscreen Overlay Menu */}
      <div
        className={`fixed inset-0 z-[55] transition-all duration-500 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Dark overlay background */}
        <div className={`absolute inset-0 transition-all duration-700 ease-out ${
          open ? "bg-foreground/98 backdrop-blur-xl" : "bg-transparent backdrop-blur-0"
        }`} />

        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 z-20 p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Menu Content */}
        <div className="relative z-10 h-full flex flex-col pt-24 pb-8 overflow-y-auto">
          <nav className="container mx-auto px-6 flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`group flex items-start justify-between p-4 rounded-2xl transition-all duration-500 ease-out min-h-[72px] ${
                      open ? "translate-y-0 opacity-100 scale-100" : "translate-y-6 opacity-0 scale-90"
                    } ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                    style={{ transitionDelay: open ? `${i * 60 + 100}ms` : "0ms" }}
                  >
                    <span className="text-sm md:text-base font-semibold tracking-tight leading-tight">{link.label}</span>
                    <ChevronRight className={`h-4 w-4 shrink-0 ml-2 transition-transform duration-300 ${isActive ? "text-accent" : "opacity-30"} group-hover:translate-x-1`} />
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Bottom section */}
          <div className="container mx-auto px-6 mt-auto space-y-6">
            <div className="h-px bg-white/10" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-between">
              <div className="space-y-1">
                <p className="text-white/40 text-xs uppercase tracking-wider font-medium">Contact Us</p>
                <a href="tel:+88028844940" className="text-white/70 hover:text-white text-sm font-medium transition-colors flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5" /> +880 2-9844940
                </a>
              </div>

              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl px-8 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <Link to="/contact" onClick={() => setOpen(false)}>
                  <Flame className="h-4 w-4 mr-2" />
                  Get a Quote
                  <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
