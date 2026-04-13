import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Home, Building2, Car, Flame, UtensilsCrossed, Building,
  Tent, Hotel, Truck, Droplets, Leaf, Box, ShieldCheck,
  Fuel, DollarSign, Wrench, Shield, Factory, Zap, Paintbrush, Cog, Sparkles,
  ArrowRight, CheckCircle, ChevronRight,
} from "lucide-react";
import householdImg from "@/assets/jamuna-12kg-cylinder.png";
import commercialImg from "@/assets/jamuna-45kg-cylinder.png";
import autoGasImg from "@/assets/auto-gas.jpg";
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

const Products = () => (
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl -z-10" />
            <div className="bg-gradient-to-b from-muted/20 to-muted/50 rounded-2xl p-10 flex items-center justify-center">
              <img src={householdImg} alt="Jamuna Gas 12kg household LPG cylinder" loading="lazy" className="max-h-[420px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
          <div>
            <div className="grid gap-5">
              <Card className="border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0 flex">
                  <div className="w-2 bg-primary shrink-0 group-hover:w-3 transition-all" />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Flame className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-bold">12 kg Cylinder</h3>
                    </div>
                    <p className="text-muted-foreground">Easy to carry and simple to use. One cylinder can smoothly serve a small family for a whole month!</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0 flex">
                  <div className="w-2 bg-accent shrink-0 group-hover:w-3 transition-all" />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Flame className="h-5 w-5 text-accent" />
                      <h3 className="text-xl font-bold">5.5 kg Cylinder</h3>
                    </div>
                    <p className="text-muted-foreground">Most commonly used for food courts and picnics — easy to carry and go anywhere!</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <div className="h-8 w-1 bg-primary rounded-full" />
            Applications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {householdApps.map((a) => (
              <Card key={a.title} className="border-border/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <CardContent className="p-5 text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <a.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{a.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{a.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-r from-primary/5 via-transparent to-accent/5 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <div className="h-8 w-1 bg-accent rounded-full" />
            Benefits of Using LPG
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-3">
                <div className="h-10 w-10 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center">
                  <b.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">{b.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Divider */}
    <div className="container mx-auto px-4"><div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" /></div>

    {/* Commercial */}
    <section id="commercial" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-badge"><Building2 className="h-4 w-4" /> Commercial Use</span>
          <h2 className="section-title">Commercial LPG</h2>
          <p className="section-subtitle">Specially designed 35 kg and 45 kg cylinders for commercial operations and large apartment reticulation systems.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Jamuna Gas offers heavy-duty LPG cylinders built with international safety and quality standards — powering restaurants, hotels, catering services, and institutional kitchens across Bangladesh.
            </p>
            <div className="grid gap-5 mb-8">
              <Card className="border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0 flex">
                  <div className="w-2 bg-primary shrink-0 group-hover:w-3 transition-all" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">35 kg Cylinder</h3>
                    <p className="text-muted-foreground">Where high gas consumption is needed — ideal for restaurants, hotels, and catering services.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0 flex">
                  <div className="w-2 bg-accent shrink-0 group-hover:w-3 transition-all" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">45 kg Cylinder</h3>
                    <p className="text-muted-foreground">For even higher LPG consumption — perfect for institutional kitchens and medium-scale industrial facilities.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Restaurants", "Hotels", "Catering", "Apartments", "Institutions"].map((tag) => (
                <span key={tag} className="bg-muted rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">{tag}</span>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl -z-10" />
            <div className="bg-gradient-to-b from-muted/20 to-muted/50 rounded-2xl p-10 flex items-center justify-center">
              <img src={commercialImg} alt="Jamuna Gas 45kg commercial LPG cylinder" loading="lazy" className="max-h-[420px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Bulk LPG - Dark Section */}
    <section id="bulk" className="py-24 bg-foreground text-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 mb-4 border border-white/10">
            <Truck className="h-4 w-4" /> Industrial Scale
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Bulk LPG System</h2>
          <p className="max-w-2xl mx-auto mt-3 text-lg text-white/60">Designed for uninterrupted, high-demand usage — efficient, safe, and cost-effective energy for heavy industries.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Jamuna Gas Bulk LPG is a modern, large-scale energy solution where liquefied petroleum gas is transported via specialized tank trucks and stored in high-capacity containers at the user's site.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-colors">
                <DollarSign className="h-8 w-8 text-accent mb-3" />
                <h4 className="font-bold text-white mb-1">Cost Efficiency</h4>
                <p className="text-sm text-white/60">Lower per-unit costs helping businesses save significantly over time.</p>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-colors">
                <Zap className="h-8 w-8 text-accent mb-3" />
                <h4 className="font-bold text-white mb-1">Reliable Supply</h4>
                <p className="text-sm text-white/60">On-site storage ensures continuous supply, reducing downtime risk.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img src={bulkImg} alt="Jamuna Gas bulk LPG transport truck" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">Industrial Applications</h3>
        <p className="text-white/60 mb-8">We support any industry with high LPG consumption.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {bulkApps.map((app) => (
            <div key={app.title} className="rounded-xl bg-white/5 border border-white/10 p-5 text-center hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors">
                <app.icon className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-semibold text-sm text-white">{app.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Auto Gas */}
    <section id="autogas" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-badge"><Car className="h-4 w-4" /> Green Mobility</span>
          <h2 className="section-title">Auto Gas</h2>
          <p className="section-subtitle">Clean, efficient, and eco-friendly fuel alternative for vehicles — driving a greener Bangladesh.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={autoGasImg} alt="Jamuna Gas Auto Gas refueling station" loading="lazy" className="w-full h-[400px] object-cover" />
          </div>
          <div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Auto Gas (Automotive LPG) is a clean, efficient, and eco-friendly fuel alternative for vehicles. Jamuna Gas offers high-quality Auto Gas solutions for cost-effective and environmentally responsible transportation.
            </p>
            <div className="grid gap-4">
              {autoFeatures.map((f) => (
                <div key={f.title} className="flex gap-4 items-start group">
                  <div className="h-11 w-11 shrink-0 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <f.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-0.5">{f.title}</h3>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/80 p-12 md:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Need Help Choosing the Right Product?</h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto text-lg">Our team is ready to help you find the perfect LPG solution for your home, business, or industry.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-10 rounded-xl h-13 shadow-lg group">
                <Link to="/contact">
                  Get a Quote
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10 px-10 rounded-xl h-13">
                <a href="tel:+88029844940">Call Us Now</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Products;