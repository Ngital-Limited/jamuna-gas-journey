import { useState, useEffect, useCallback } from "react";
import {
  Flame, UtensilsCrossed, Droplets, Cookie, Hotel, Factory,
  TrendingUp, Scissors, Glasses, Shirt, Fuel, Ship, Cog,
  ChevronLeft, ChevronRight,
} from "lucide-react";

const sectors = [
  { icon: UtensilsCrossed, title: "Household Cooking & Catering", desc: "Daily cooking fuel for millions of families and large-scale catering events across Bangladesh.", color: "primary" as const },
  { icon: Droplets, title: "Water Heating Systems", desc: "Efficient and instant hot water solutions for residential complexes and commercial establishments.", color: "accent" as const },
  { icon: Cookie, title: "Street Food", desc: "Reliable, portable fuel powering thousands of street food vendors and mobile kitchens nationwide.", color: "primary" as const },
  { icon: Hotel, title: "Hotels & Restaurants", desc: "High-capacity commercial kitchen fuel supply for the hospitality and food service industry.", color: "accent" as const },
  { icon: Factory, title: "Bakeries & Food Manufacturing", desc: "Industrial-scale food production requiring consistent, clean-burning fuel for ovens and processing.", color: "primary" as const },
  { icon: TrendingUp, title: "Farming Industry", desc: "Agricultural drying, crop processing, and greenhouse heating for modern farming operations.", color: "accent" as const },
  { icon: Scissors, title: "Cutting & Welding", desc: "Precision metalwork fuel for construction, shipbuilding, and industrial fabrication workshops.", color: "primary" as const },
  { icon: Glasses, title: "Glass & Ceramic Manufacturing", desc: "High-temperature production fuel for glass blowing, ceramic kilns, and specialty manufacturing.", color: "accent" as const },
  { icon: Shirt, title: "Garments Industries", desc: "Textile processing, dyeing, and finishing operations in Bangladesh's leading export sector.", color: "primary" as const },
  { icon: Fuel, title: "Auto Gas for Vehicles", desc: "Clean-burning, cost-effective vehicular fuel alternative reducing emissions on the roads.", color: "accent" as const },
  { icon: Ship, title: "LPG-Powered Vessels", desc: "Maritime fuel solutions for fishing boats, cargo vessels, and river transport systems.", color: "primary" as const },
  { icon: Cog, title: "Automotive Industry", desc: "Vehicle manufacturing support including paint drying, metal treatment, and assembly processes.", color: "accent" as const },
];

const ITEMS_PER_VIEW = { sm: 1, md: 2, lg: 4 };
const AUTO_PLAY_INTERVAL = 4000;

const SectorsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [prevCurrent, setPrevCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [isHovered, setIsHovered] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const maxIndex = Math.max(0, sectors.length - itemsPerView);

  useEffect(() => {
    const updateView = () => {
      const w = window.innerWidth;
      setItemsPerView(w < 640 ? ITEMS_PER_VIEW.sm : w < 1024 ? ITEMS_PER_VIEW.md : ITEMS_PER_VIEW.lg);
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  useEffect(() => {
    if (current > maxIndex) setCurrent(maxIndex);
  }, [maxIndex, current]);

  const slideTo = useCallback((val: number) => {
    setPrevCurrent(current);
    setCurrent(val);
    setAnimKey((k) => k + 1);
  }, [current]);

  const next = useCallback(() => slideTo(Math.min(current + 1, maxIndex)), [current, maxIndex, slideTo]);
  const prev = useCallback(() => slideTo(Math.max(current - 1, 0)), [current, slideTo]);

  // Auto-play
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrent((c) => {
        const next = c >= maxIndex ? 0 : c + 1;
        setPrevCurrent(c);
        setAnimKey((k) => k + 1);
        return next;
      });
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [maxIndex, isHovered]);

  return (
    <section className="py-28 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with controls */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 mb-4 border border-white/10">
              <Flame className="h-4 w-4 text-accent" /> Diverse Applications
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Sectors Benefiting from LP Gas</h2>
            <p className="max-w-xl mt-3 text-lg text-white/50">From household kitchens to heavy industries — LPG powers progress.</p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={prev}
              disabled={current === 0}
              className="h-12 w-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>
            <button
              onClick={next}
              disabled={current >= maxIndex}
              className="h-12 w-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>
            <span className="text-xs text-white/30 font-medium ml-2 tabular-nums">
              {current + 1}–{Math.min(current + itemsPerView, sectors.length)} / {sectors.length}
            </span>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * (100 / itemsPerView)}%)` }}
          >
            {sectors.map((sector) => (
              <div
                key={sector.title}
                className="shrink-0 px-2.5"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="relative rounded-2xl bg-white/[0.04] border border-white/10 p-8 group hover:bg-white/[0.08] transition-all duration-300 overflow-hidden h-full">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${sector.color === "primary" ? "from-primary to-primary/30" : "from-accent to-accent/30"} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${sector.color === "primary" ? "from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-accent/10" : "from-accent/20 to-accent/5 group-hover:from-accent/30 group-hover:to-primary/10"} transition-all duration-300`}>
                      <sector.icon className={`h-8 w-8 ${sector.color === "primary" ? "text-primary" : "text-accent"}`} />
                    </div>
                    <h4 className="font-bold text-lg text-white leading-snug mb-2">{sector.title}</h4>
                    <p className="text-sm text-white/40 leading-relaxed">{sector.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-1.5 mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-accent" : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Bottom stat line */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-14">
          {[
            { value: "12+", label: "Industries Served" },
            { value: "1.5M+", label: "Customers Nationwide" },
            { value: "24+", label: "Years of Service" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-white/30 uppercase tracking-wider font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsCarousel;
