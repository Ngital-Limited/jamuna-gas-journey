import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Home, Building2, Car, Flame, UtensilsCrossed, Building,
  Tent, Hotel, Truck, Droplets, Leaf, Box, ShieldCheck,
  Fuel, DollarSign, Wrench, Shield, Factory, Zap, Paintbrush, Cog, Sparkles, Phone,
  ArrowRight, CheckCircle, ChevronRight,
} from "lucide-react";
import householdImg12 from "@/assets/jamuna-12kg-cylinder.png";
import householdImg5 from "@/assets/jamuna-5kg-cylinder.png";
import commercialImg35 from "@/assets/jamuna-35kg-cylinder.png";
import commercialImg45 from "@/assets/jamuna-45kg-cylinder.png";
const autoGasAsset = "/media/auto-gas.jpg";
import productsHero from "@/assets/products-hero.jpg";
import bulkImg from "@/assets/bulk-lpg-truck.png";

const householdApps = [
  { icon: UtensilsCrossed, title: "Household Cooking", desc: "Primarily used in home kitchens for daily cooking needs." },
  { icon: Building, title: "Apartment Reticulation", desc: "For your large apartment's reticulation system, Jamuna Gas is the ideal choice." },
  { icon: Tent, title: "Picnics/Events", desc: "Perfect for outdoor activities like camping or picnics." },
  { icon: Hotel, title: "Hospitality Sector", desc: "Utilized in hospitals, clinics, and service-oriented establishments." },
  { icon: Truck, title: "Food Court", desc: "Used in mobile food trucks where space is limited." },
];

const benefits = [
  { icon: Droplets, title: "Sufficient for Daily Use", desc: "Ideal for daily cooking without requiring frequent refills." },
  { icon: Leaf, title: "Environmentally Friendly", desc: "Cleaner burning fuel compared to coal or wood, reducing emissions." },
  { icon: Box, title: "Compact & Space-Saving", desc: "Easy to store, ideal for small kitchens or limited storage spaces." },
  { icon: ShieldCheck, title: "Safe to Use", desc: "Jamuna Gas LPG stoves emit significantly less overall heat compared to traditional appliances." },
];

const autoFeatures = [
  { icon: DollarSign, title: "Cost-Effective", desc: "Significantly cheaper than petrol or diesel, offering substantial savings." },
  { icon: Leaf, title: "Eco-Friendly", desc: "Lower carbon emissions and reduced air pollutants for a cleaner Bangladesh." },
  { icon: Wrench, title: "Engine-Friendly", desc: "Burns cleaner, reducing engine wear and extending engine life." },
  { icon: Shield, title: "Safe & Reliable", desc: "International safety standards at every stage — from cylinders to refueling." },
];

const bulkApps = [
  { icon: Building2, title: "Cement Industry", desc: "In the process of making cement, raw ingredients are heated using LPG." },
  { icon: Paintbrush, title: "Textile Industry", desc: "High-temperature procedures in the textile industry require LPG." },
  { icon: Sparkles, title: "Glass & Ceramic", desc: "LPG is used for heating in the production of glass and ceramics." },
  { icon: Cog, title: "Metal Industry", desc: "Metals are melted and processed using LPG." },
  { icon: Car, title: "Automotive Industry", desc: "LPG is used in the production and testing of vehicles." },
  { icon: Box, title: "Aerosol Industry", desc: "Aerosol products use LPG as a propellant." },
];

const productNav = [
  { id: "household", label: "Household LPG", icon: Home },
  { id: "commercial", label: "Commercial LPG", icon: Building2 },
  { id: "bulk", label: "Bulk LPG", icon: Truck },
  { id: "autogas", label: "Auto Gas", icon: Car },
];

const Products = () => {
  const [selectedHouseholdKg, setSelectedHouseholdKg] = useState<"12" | "5.5">("12");
  const [selectedCommercialKg, setSelectedCommercialKg] = useState<"35" | "45">("45");

  const householdImage = selectedHouseholdKg === "12" ? householdImg12 : householdImg5;
  const commercialImage = selectedCommercialKg === "35" ? commercialImg35 : commercialImg45;

  return (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[70vh] flex items-center justify-center">
      <img src={productsHero} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="container mx-auto px-4 relative z-10 py-24 text-center">
        <span className="section-badge bg-white/10 text-white border border-white/20 backdrop-blur-sm"><Flame className="h-4 w-4" /> Our Products</span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">Energy Solutions<br />for Every Need</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-12">From household cooking to powering heavy industries — Jamuna Gas delivers safe, reliable LPG across Bangladesh.</p>
        
        {/* Product Quick Nav */}
        <div className="flex flex-wrap justify-center gap-3">
          {productNav.map((p) => (
            <a key={p.id} href={`#${p.id}`} className="group flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3 text-white hover:bg-white/20 transition-all duration-300">
              <p.icon className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">{p.label}</span>
              <ChevronRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* Household */}
    <section id="household" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-badge"><Home className="h-4 w-4" /> Household Use</span>
          <h2 className="section-title">Household LPG</h2>
          <p className="section-subtitle">We serve 12 kg and 5.5 kg cylinders for domestic use — ideal for everyday cooking with portability and practicality.</p>
        </div>

        {/* Hero Product Showcase */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/[0.03] via-muted/40 to-accent/[0.03] border border-border/30 mb-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative z-10">
            {/* Product Image */}
            <div className="lg:col-span-5 flex items-center justify-center p-10 lg:p-16">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-primary/10 rounded-full blur-3xl scale-75" />
                <img key={selectedHouseholdKg} src={householdImage} alt={`Jamuna Gas ${selectedHouseholdKg}kg household LPG cylinder`} loading="lazy" className={`relative object-contain drop-shadow-2xl animate-fade-in ${selectedHouseholdKg === "5.5" ? "max-h-[340px]" : "max-h-[450px]"}`} />
              </div>
            </div>
            
            {/* Product Details */}
            <div className="lg:col-span-7 p-8 lg:p-14 flex flex-col justify-center">
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The backbone of Bangladesh's household energy. Our cylinders are designed for safety, convenience, and long-lasting performance — trusted by over <strong className="text-foreground">1.5 million families</strong> nationwide.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <button onClick={() => setSelectedHouseholdKg("12")} className={`relative rounded-2xl border p-6 text-left transition-all duration-300 ${selectedHouseholdKg === "12" ? "border-primary bg-primary/[0.04] shadow-lg" : "border-primary/20 bg-card hover:shadow-lg hover:border-primary/40"}`}>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-t-2xl" />
                  <div className="flex items-center gap-3 mb-3 pt-1">
                    <div className={`h-10 w-10 rounded-xl flex items-center justify-center transition-colors ${selectedHouseholdKg === "12" ? "bg-primary text-white" : "bg-primary/10"}`}>
                      <Flame className={`h-5 w-5 ${selectedHouseholdKg === "12" ? "text-white" : "text-primary"}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">12 kg</h3>
                      <span className="text-xs text-muted-foreground">Family Size</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Serves a small family for a whole month. Easy to carry and simple to use.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="text-[10px] font-medium bg-primary/10 text-primary rounded-full px-2.5 py-1">~30 days</span>
                    <span className="text-[10px] font-medium bg-primary/10 text-primary rounded-full px-2.5 py-1">Portable</span>
                  </div>
                </button>
                <button onClick={() => setSelectedHouseholdKg("5.5")} className={`relative rounded-2xl border p-6 text-left transition-all duration-300 ${selectedHouseholdKg === "5.5" ? "border-accent bg-accent/[0.04] shadow-lg" : "border-accent/20 bg-card hover:shadow-lg hover:border-accent/40"}`}>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent/50 rounded-t-2xl" />
                  <div className="flex items-center gap-3 mb-3 pt-1">
                    <div className={`h-10 w-10 rounded-xl flex items-center justify-center transition-colors ${selectedHouseholdKg === "5.5" ? "bg-accent text-white" : "bg-accent/10"}`}>
                      <Flame className={`h-5 w-5 ${selectedHouseholdKg === "5.5" ? "text-white" : "text-accent"}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">5.5 kg</h3>
                      <span className="text-xs text-muted-foreground">Compact Size</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Perfect for food courts and picnics — ultra-portable and go anywhere!</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="text-[10px] font-medium bg-accent/10 text-accent rounded-full px-2.5 py-1">Lightweight</span>
                    <span className="text-[10px] font-medium bg-accent/10 text-accent rounded-full px-2.5 py-1">On-the-go</span>
                  </div>
                </button>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> ISO Certified</div>
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Leak-proof Valve</div>
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> BPC Approved</div>
              </div>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
            <div className="h-8 w-1 bg-primary rounded-full" />
            Where It's Used
          </h3>
          <p className="text-muted-foreground mb-8 ml-5">Our household LPG powers everyday life across Bangladesh.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {householdApps.map((a, i) => (
              <div key={a.title} className="relative rounded-2xl border border-border/40 bg-card p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-primary/[0.06] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-accent/10 transition-all duration-300">
                    <a.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1.5">{a.title}</h4>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="relative rounded-3xl overflow-hidden bg-foreground text-background p-8 md:p-12">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2 text-white">Benefits of Using LPG</h3>
            <p className="text-white/50 mb-8">Why millions of families trust Jamuna Gas for their daily energy needs.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {benefits.map((b) => (
                <div key={b.title} className="rounded-xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-colors">
                  <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                    <b.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1.5 text-white">{b.title}</h4>
                  <p className="text-xs text-white/60 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Commercial - Dark Section */}
    <section id="commercial" className="py-24 bg-foreground text-background relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/4" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] translate-y-1/3 translate-x-1/4" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 mb-4 border border-white/10">
            <Building2 className="h-4 w-4 text-accent" /> Commercial Use
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Commercial LPG</h2>
          <p className="max-w-2xl mx-auto mt-3 text-lg text-white/50">Specially designed 35 kg and 45 kg cylinders for commercial operations and large apartment reticulation systems.</p>
        </div>

        <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Product Image */}
            <div className="lg:col-span-5 flex items-center justify-center p-10 lg:p-16 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-l-3xl" />
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-primary/10 rounded-full blur-3xl scale-75" />
                <img key={selectedCommercialKg} src={commercialImage} alt={`Jamuna Gas ${selectedCommercialKg}kg commercial LPG cylinder`} loading="lazy" className={`relative w-auto object-contain drop-shadow-2xl animate-fade-in ${selectedCommercialKg === "35" ? "h-[260px] md:h-[290px] lg:h-[310px]" : "h-[360px] md:h-[410px] lg:h-[450px]"}`} />
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-7 p-8 lg:p-14 flex flex-col justify-center">
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Jamuna Gas offers heavy-duty LPG cylinders built with international safety and quality standards — powering <strong className="text-white">restaurants, hotels, catering services</strong>, and institutional kitchens across Bangladesh.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <button onClick={() => setSelectedCommercialKg("35")} className={`relative rounded-2xl border p-6 text-left transition-all duration-300 ${selectedCommercialKg === "35" ? "border-primary bg-primary/20 shadow-lg" : "bg-white/[0.04] border-white/10 hover:bg-white/[0.08]"}`}>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-t-2xl" />
                  <div className="flex items-center gap-3 mb-3 pt-1">
                    <div className={`h-10 w-10 rounded-xl flex items-center justify-center transition-colors ${selectedCommercialKg === "35" ? "bg-primary text-white" : "bg-primary/20"}`}>
                      <Flame className={`h-5 w-5 ${selectedCommercialKg === "35" ? "text-white" : "text-primary"}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">35 kg</h3>
                      <span className="text-xs text-white/40">Heavy Duty</span>
                    </div>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">Ideal for restaurants, hotels, and catering services with high gas consumption.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="text-[10px] font-medium bg-primary/20 text-primary rounded-full px-2.5 py-1">High Output</span>
                    <span className="text-[10px] font-medium bg-primary/20 text-primary rounded-full px-2.5 py-1">Durable</span>
                  </div>
                </button>
                <button onClick={() => setSelectedCommercialKg("45")} className={`relative rounded-2xl border p-6 text-left transition-all duration-300 ${selectedCommercialKg === "45" ? "border-accent bg-accent/20 shadow-lg" : "bg-white/[0.04] border-white/10 hover:bg-white/[0.08]"}`}>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent/50 rounded-t-2xl" />
                  <div className="flex items-center gap-3 mb-3 pt-1">
                    <div className={`h-10 w-10 rounded-xl flex items-center justify-center transition-colors ${selectedCommercialKg === "45" ? "bg-accent text-white" : "bg-accent/20"}`}>
                      <Flame className={`h-5 w-5 ${selectedCommercialKg === "45" ? "text-white" : "text-accent"}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">45 kg</h3>
                      <span className="text-xs text-white/40">Maximum Capacity</span>
                    </div>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">Perfect for institutional kitchens and medium-scale industrial facilities.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="text-[10px] font-medium bg-accent/20 text-accent rounded-full px-2.5 py-1">Max Capacity</span>
                    <span className="text-[10px] font-medium bg-accent/20 text-accent rounded-full px-2.5 py-1">Industrial</span>
                  </div>
                </button>
              </div>

              <div className="flex flex-wrap gap-3">
                {["Restaurants", "Hotels", "Catering", "Apartments", "Institutions"].map((tag) => (
                  <span key={tag} className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-medium text-white/50 hover:bg-white/10 transition-colors">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Bulk LPG - Premium Dark Section */}
    <section id="bulk" className="py-24 bg-foreground text-background scroll-mt-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 mb-4 border border-white/10">
            <Truck className="h-4 w-4 text-accent" /> Industrial Scale
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Bulk LPG System</h2>
          <p className="max-w-2xl mx-auto mt-3 text-lg text-white/50">Designed for uninterrupted, high-demand usage — efficient, safe, and cost-effective energy for heavy industries.</p>
        </div>

        {/* Premium Showcase Card */}
        <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Image */}
            <div className="lg:col-span-5 flex items-center justify-center p-10 lg:p-16 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-l-3xl" />
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-primary/10 rounded-full blur-3xl scale-75" />
                <img src={bulkImg} alt="Jamuna Gas bulk LPG transport truck" loading="lazy" className="relative max-h-[400px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700" />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 p-8 lg:p-14 flex flex-col justify-center">
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Jamuna Gas Bulk LPG is a modern, large-scale energy solution where liquefied petroleum gas is transported via specialized tank trucks and stored in <strong className="text-white">high-capacity containers</strong> at the user's site — ensuring uninterrupted operations for heavy industries.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="relative rounded-2xl bg-white/[0.04] border border-white/10 p-6 group hover:bg-white/[0.08] transition-all duration-300">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-t-2xl" />
                  <div className="flex items-center gap-3 mb-3 pt-1">
                    <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Cost Efficiency</h3>
                      <span className="text-xs text-white/40">Bulk Pricing</span>
                    </div>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">Lower per-unit costs helping businesses save significantly over time with bulk purchasing.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="text-[10px] font-medium bg-primary/20 text-primary rounded-full px-2.5 py-1">Save 20%+</span>
                    <span className="text-[10px] font-medium bg-primary/20 text-primary rounded-full px-2.5 py-1">Volume Discount</span>
                  </div>
                </div>
                <div className="relative rounded-2xl bg-white/[0.04] border border-white/10 p-6 group hover:bg-white/[0.08] transition-all duration-300">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent/50 rounded-t-2xl" />
                  <div className="flex items-center gap-3 mb-3 pt-1">
                    <div className="h-10 w-10 rounded-xl bg-accent/20 flex items-center justify-center">
                      <Zap className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Reliable Supply</h3>
                      <span className="text-xs text-white/40">24/7 Operations</span>
                    </div>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">On-site storage ensures continuous supply, eliminating downtime and production delays.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="text-[10px] font-medium bg-accent/20 text-accent rounded-full px-2.5 py-1">Zero Downtime</span>
                    <span className="text-[10px] font-medium bg-accent/20 text-accent rounded-full px-2.5 py-1">On-site Tank</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                {["Safety Certified", "Custom Capacity", "Scheduled Delivery", "24/7 Support"].map((tag) => (
                  <span key={tag} className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-medium text-white/50 hover:bg-white/10 transition-colors">{tag}</span>
                ))}
              </div>

              <div className="flex items-center gap-6 text-sm text-white/50">
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent" /> ISO 9001</div>
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent" /> BPC Licensed</div>
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent" /> Fire Safety</div>
              </div>
            </div>
          </div>
        </div>

        {/* Industrial Applications */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
            <div className="h-8 w-1 bg-accent rounded-full" />
            Industrial Applications
          </h3>
          <p className="text-white/50 mb-8 ml-5">Powering Bangladesh's key industries with bulk LPG solutions.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {bulkApps.map((app) => (
              <div key={app.title} className="relative rounded-2xl bg-white/[0.04] border border-white/10 p-6 text-center hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.02] to-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 group-hover:from-accent/30 group-hover:to-primary/10 transition-all duration-300">
                    <app.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h4 className="font-semibold text-sm text-white mb-1.5">{app.title}</h4>
                  <p className="text-[11px] text-white/40 leading-relaxed">{app.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bulk Enquiry CTA */}
          <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h4 className="text-xl md:text-2xl font-bold text-white mb-2">Need a tailored bulk LPG solution?</h4>
              <p className="text-white/50 text-sm md:text-base">Get a free site assessment, custom tank sizing, and a transparent quote within 24 hours.</p>
            </div>
            <Button asChild variant="premium" className="btn-shine h-12 px-7 shrink-0">
              <Link to="/bulk-enquiry">
                Submit Bulk Enquiry
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Auto Gas - Premium Showcase */}
    <section id="autogas" className="py-24 scroll-mt-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="section-badge"><Car className="h-4 w-4" /> Green Mobility</span>
          <h2 className="section-title">Auto Gas</h2>
          <p className="section-subtitle">Clean, efficient, and eco-friendly fuel alternative for vehicles — driving a greener Bangladesh.</p>
        </div>

        <div className="relative rounded-3xl border border-border/30 bg-gradient-to-br from-card via-card to-muted/30 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

          <div className="grid grid-cols-1 lg:grid-cols-12 relative z-10">
            {/* Image */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5" />
              <img src={autoGasAsset} alt="Jamuna Gas Auto Gas refueling station" loading="lazy" className="w-full h-full min-h-[350px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20 hidden lg:block" />
            </div>

            {/* Content */}
            <div className="lg:col-span-7 p-8 lg:p-14 flex flex-col justify-center">
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Auto Gas (Automotive LPG) is a clean, efficient, and eco-friendly fuel alternative for vehicles. Jamuna Gas offers high-quality Auto Gas solutions for <strong className="text-foreground">cost-effective and environmentally responsible</strong> transportation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {autoFeatures.map((f) => (
                  <div key={f.title} className="relative rounded-2xl border border-border/40 bg-card p-5 group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.02] to-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10 flex gap-4">
                      <div className="h-11 w-11 shrink-0 rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center group-hover:from-accent/25 group-hover:to-accent/10 transition-all duration-300">
                        <f.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm mb-0.5">{f.title}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent" /> Up to 40% Savings</div>
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent" /> Lower Emissions</div>
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent" /> Safe & Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative py-32 overflow-hidden">
      {/* Full-bleed dark background */}
      <div className="absolute inset-0 bg-foreground" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px] translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 mb-8 border border-white/10">
            <Flame className="h-4 w-4 text-accent" /> Let's Get Started
          </span>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Need Help Choosing<br />
            <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">the Right Product?</span>
          </h2>

          <p className="text-white/50 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Our team is ready to help you find the perfect LPG solution for your home, business, or industry.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
            {[
              { value: "1.5M+", label: "Customers Served" },
              { value: "24+", label: "Years of Trust" },
              { value: "4", label: "Product Lines" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-white/40 uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="premium" className="btn-shine text-base">
              <Link to="/contact">
                Get a Free Quote
                <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white bg-white/10 hover:bg-white/20 hover:border-white/50 px-10 rounded-xl h-14 text-base backdrop-blur-sm transition-all duration-300">
              <a href="tel:+88029844940">
                <Phone className="h-4 w-4 mr-2" />
                Call Us Now
              </a>
            </Button>
          </div>

          {/* Trust line */}
          <div className="flex items-center justify-center gap-6 mt-10 text-sm text-white/30">
            <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent/60" /> Free Consultation</div>
            <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent/60" /> Quick Response</div>
            <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent/60" /> ISO Certified</div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);
};

export default Products;