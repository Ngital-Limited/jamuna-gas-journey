import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Flame, Home, Building2, Car,
  Target, Eye, Trophy, Award, Shield,
  Calendar, Users, TrendingUp, ArrowRight, Truck,
  CheckCircle,
  Leaf, TreePine, Recycle, Wind,
} from "lucide-react";
  Flame, Home, Building2, Car,
  Target, Eye, Compass, Trophy, Award, Shield,
  Calendar, Users, TrendingUp, ArrowRight, Truck,
  CheckCircle, Phone, MapPin, Mail, Clock,
  UtensilsCrossed, Droplets, Cookie, Hotel, Factory, Scissors, Glasses, Shirt, Fuel, Ship, Cog,
  Leaf, TreePine, Recycle, Wind,
} from "lucide-react";
import Layout from "@/components/Layout";
import SectorsCarousel from "@/components/SectorsCarousel";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Calendar, value: "24+", label: "Years of Excellence" },
  { icon: Users, value: "1.5M+", label: "Customers Served" },
  { icon: Trophy, value: "3+", label: "Brand Awards" },
  { icon: TrendingUp, value: "4", label: "Plants Nationwide" },
];

const products = [
  { icon: Home, title: "Household LPG", desc: "12 kg and 5.5 kg cylinders for everyday cooking needs.", link: "/products#household", tag: "Most Popular", color: "primary" as const },
  { icon: Building2, title: "Commercial LPG", desc: "35 kg and 45 kg cylinders for restaurants, hotels, and institutions.", link: "/products#commercial", tag: "High Capacity", color: "accent" as const },
  { icon: Truck, title: "Bulk LPG", desc: "Large-scale energy for industrial operations via tank trucks.", link: "/products#bulk", tag: "Industrial", color: "primary" as const },
  { icon: Car, title: "Auto Gas", desc: "Clean-burning, cost-effective LPG for vehicles.", link: "/products#autogas", tag: "Eco-Friendly", color: "accent" as const },
];

const values = [
  { icon: Target, title: "Mission", desc: "Continuously strive to meet customer needs by offering the best possible service, price, and support." },
  { icon: Eye, title: "Vision", desc: "To lead the LP gas sector in Bangladesh by operating and providing a high standard of excellence." },
  { icon: Compass, title: "Objective", desc: "Provide safe, reliable, and efficient LPG solutions while ensuring sustainability and customer satisfaction." },
  { icon: Trophy, title: "Goal", desc: "Ensure customer satisfaction by consistently providing the best product and service that meet ultimate expectations." },
];

import iso9001 from "@/assets/iso-9001.png";
import iso14001 from "@/assets/iso-14001.png";
import iso45001 from "@/assets/iso-45001.png";
import wlpga from "@/assets/wlpga.png";

const certifications = [
  { img: iso9001, title: "ISO 9001:2015", desc: "Quality Management System certified by Bureau Veritas." },
  { img: iso14001, title: "ISO 14001", desc: "Environmental Management System — global environmental standards." },
  { img: iso45001, title: "ISO 45001:2018", desc: "Occupational Health & Safety — workplace risk management." },
  { img: wlpga, title: "WLPGA Member", desc: "World LPG Association — safe, sustainable LPG leadership." },
];

const timeline = [
  { year: "1998", title: "Company Founded", desc: "JSJVL incorporated under the Companies Act 1994." },
  { year: "2000", title: "Operations Began", desc: "First government-approved private LPG plant launched." },
  { year: "2023", title: "Best Brand Award", desc: "Recognized for customer satisfaction and trust." },
  { year: "2024", title: "2 Decades Strong", desc: "24th year with 1.5M+ nationwide customers." },
];

const whyChoose = [
  { icon: Shield, title: "Government Approved", desc: "First government-approved private LPG plant in Bangladesh." },
  { icon: TrendingUp, title: "Nationwide Network", desc: "15+ depots and 4 bottling plants across the country." },
  { icon: Users, title: "1.5M+ Customers", desc: "Serving over 1.5 million satisfied customers daily." },
  { icon: Award, title: "Award Winning", desc: "Best Brand Award winner for trust and customer satisfaction." },
  { icon: Truck, title: "Reliable Delivery", desc: "On-time delivery through our robust logistics network." },
  { icon: Flame, title: "24+ Years Legacy", desc: "Two decades of trusted energy solutions since 2000." },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 text-sm text-white/90 mb-8 animate-fade-up">
            <Flame className="h-4 w-4 text-accent" />
            Since 2000 — Bangladesh's Pioneer in LPG
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] mb-8 tracking-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Powering <br />
            <span className="text-accent">Bangladesh's</span> <br />
            Future
          </h1>
          <p className="text-lg md:text-xl text-white/75 mb-10 max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Delivering safe, reliable energy to over 1.5 million customers through cutting-edge LPG infrastructure.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 h-13 rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 group">
              <Link to="/products">
                Explore Products
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-base px-8 h-13 rounded-xl backdrop-blur-sm transition-all duration-300">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Stats bar */}
    <section className="relative -mt-16 z-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-2xl shadow-xl border border-border/40 p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* About Section */}
    <section className="py-24 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="section-badge"><Users className="h-4 w-4" /> Who We Are</span>
          <h2 className="section-title">About Jamuna Gas</h2>
          <p className="section-subtitle">Bangladesh's pioneer in LPG — delivering energy, trust, and excellence since 2000.</p>
        </div>

        {/* Main Content Card */}
        <div className="relative rounded-3xl border border-border/30 bg-gradient-to-br from-card via-card to-muted/30 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 relative z-10">
            {/* Left - Story */}
            <div className="lg:col-span-7 p-8 md:p-12 lg:p-14">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Flame className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Established</div>
                  <div className="text-lg font-bold">Since 1998</div>
                </div>
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Incorporated as <strong className="text-foreground">Jamuna Spacetech Joint Venture Limited (JSJVL)</strong>, we commenced operations in 2000 as the first government-approved private LPG plant in Bangladesh.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With over two decades of excellence, Jamuna Gas has grown into a nationwide energy brand — powering millions of households and industries through a robust network of <strong className="text-foreground">4 bottling plants</strong> and <strong className="text-foreground">15+ distribution depots</strong> across the country.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  { icon: CheckCircle, text: "Pioneer in private LPG sector", color: "text-primary" },
                  { icon: CheckCircle, text: "ISO 9001, 14001 & 45001 certified", color: "text-primary" },
                  { icon: CheckCircle, text: "WLPGA member organization", color: "text-primary" },
                  { icon: CheckCircle, text: "Best Brand Award winner", color: "text-primary" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2.5 bg-muted/50 rounded-xl px-4 py-3">
                    <item.icon className={`h-4 w-4 ${item.color} shrink-0`} />
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="rounded-xl group shadow-lg shadow-primary/20">
                <Link to="/about">
                  Learn Our Full Story
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Right - Stats & Vision */}
            <div className="lg:col-span-5 bg-foreground text-background p-8 md:p-12 lg:p-14 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: "1998", label: "Year Established", icon: Calendar },
                  { value: "24+", label: "Years of Excellence", icon: Trophy },
                  { value: "1.5M+", label: "Customers Served", icon: Users },
                  { value: "15+", label: "Distribution Depots", icon: Truck },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl bg-white/5 border border-white/10 p-4 text-center hover:bg-white/10 transition-colors">
                    <s.icon className="h-5 w-5 text-accent mx-auto mb-2" />
                    <div className="text-2xl font-extrabold text-white">{s.value}</div>
                    <div className="text-[11px] text-white/50 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="h-5 w-5 text-accent shrink-0" />
                    <h3 className="font-bold text-white text-sm">Our Mission</h3>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    To be the leading energy provider ensuring safe, sustainable, and accessible LPG solutions across Bangladesh.
                  </p>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Eye className="h-5 w-5 text-accent shrink-0" />
                    <h3 className="font-bold text-white text-sm">Our Vision</h3>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Empowering progress through clean energy — reaching every doorstep with quality, trust, and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Products */}
    <section className="py-24 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 mb-4 border border-white/10">
            <Flame className="h-4 w-4 text-accent" /> What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Our Products</h2>
          <p className="max-w-2xl mx-auto mt-3 text-lg text-white/50">Comprehensive LPG solutions for every need — from household cooking to powering industries.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <Link to={p.link} key={p.title} className="group">
              <div className="relative h-full rounded-2xl bg-white/[0.04] border border-white/10 p-7 hover:bg-white/[0.08] transition-all duration-500 overflow-hidden">
                {/* Top glow */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${p.color === 'primary' ? 'from-transparent via-primary to-transparent' : 'from-transparent via-accent to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Tag */}
                <span className={`inline-block text-[10px] font-semibold uppercase tracking-wider rounded-full px-3 py-1 mb-5 ${p.color === 'primary' ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'}`}>
                  {p.tag}
                </span>

                <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${p.color === 'primary' ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-accent/10 group-hover:bg-accent/20'} transition-colors duration-300`}>
                  <p.icon className={`h-7 w-7 ${p.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                </div>

                <h3 className="font-bold text-lg mb-2 text-white">{p.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-6">{p.desc}</p>
                
                <div className={`flex items-center gap-1.5 text-sm font-semibold ${p.color === 'primary' ? 'text-primary' : 'text-accent'} group-hover:gap-2.5 transition-all duration-300`}>
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom trust line */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white/30 text-sm">
          <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary/60" /> ISO Certified Quality</span>
          <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary/60" /> Nationwide Delivery</span>
          <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary/60" /> 24+ Years of Trust</span>
          <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary/60" /> 1.5M+ Customers</span>
        </div>
      </div>
    </section>

    {/* LPG Solutions */}
    <section className="py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="section-badge"><Flame className="h-4 w-4" /> LPG Solutions</span>
          <h2 className="section-title">LPG Solutions</h2>
          <p className="section-subtitle">Tailored energy solutions for every scale — from home kitchens to large-scale industrial operations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Home,
              title: "For Household LPG",
              desc: "The 12 kg cylinder is an ideal choice for household cooking. Regions of size and weight are designed in such a way that it can be easily placed in any kitchen.",
              color: "primary" as const,
              tag: "12 kg Cylinder",
              link: "/products#household",
            },
            {
              icon: Building2,
              title: "For Commercial LPG",
              desc: "Jamuna Gas provides 35 kg and 45 kg cylinders for commercial use. These cylinders are specifically designed for industries, restaurants, and high-rise buildings.",
              color: "accent" as const,
              tag: "35 kg & 45 kg",
              link: "/products#commercial",
            },
            {
              icon: Truck,
              title: "For Business",
              desc: "Jamuna Gas offers bulk LPG supply as per requirements. Where cylinders are not affordable or suitable for business, we support bulk LPG across the whole country.",
              color: "primary" as const,
              tag: "Bulk Supply",
              link: "/products#bulk",
            },
          ].map((solution) => (
            <Link to={solution.link} key={solution.title} className="group">
              <div className="relative h-full rounded-3xl border border-border/30 bg-gradient-to-br from-card via-card to-muted/30 p-8 lg:p-10 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${solution.color === "primary" ? "from-primary via-primary/70 to-primary/30" : "from-accent via-accent/70 to-accent/30"} rounded-t-3xl`} />

                <div className="relative z-10">
                  <span className={`inline-block text-[10px] font-semibold uppercase tracking-wider rounded-full px-3 py-1 mb-6 ${solution.color === "primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}`}>
                    {solution.tag}
                  </span>

                  <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${solution.color === "primary" ? "from-primary/15 to-primary/5 group-hover:from-primary/25 group-hover:to-accent/10" : "from-accent/15 to-accent/5 group-hover:from-accent/25 group-hover:to-primary/10"} transition-all duration-300`}>
                    <solution.icon className={`h-8 w-8 ${solution.color === "primary" ? "text-primary" : "text-accent"}`} />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">{solution.desc}</p>

                  <div className={`flex items-center gap-2 text-sm font-semibold ${solution.color === "primary" ? "text-primary" : "text-accent"} group-hover:gap-3 transition-all duration-300`}>
                    Learn More <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Sectors Benefiting from LP Gas - Carousel */}
    <SectorsCarousel />

    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="section-badge"><Award className="h-4 w-4" /> Why Jamuna Gas</span>
          <h2 className="section-title">Bangladesh's Most Trusted LPG Brand</h2>
          <p className="section-subtitle">With over two decades of experience, we've built the nation's most reliable LPG distribution network.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-12">
          {whyChoose.map((item) => (
            <div key={item.title} className="relative rounded-2xl border border-border/40 bg-card p-6 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-accent/[0.03] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex gap-4">
                <div className="h-12 w-12 shrink-0 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/10 transition-all duration-300">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="rounded-xl border-primary/30 text-primary hover:bg-primary/5 group">
            <Link to="/about">
              Learn More About Us
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Certifications & Memberships */}
    <section className="py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-badge"><Shield className="h-4 w-4" /> Quality Assurance</span>
          <h2 className="section-title">Certifications & Memberships</h2>
          <p className="section-subtitle">Internationally certified and globally recognized — your guarantee of quality, safety, and excellence.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {certifications.map((c) => (
            <div key={c.title} className="relative rounded-2xl border border-border/40 bg-card p-8 text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-muted/60 group-hover:bg-muted transition-colors p-3">
                <img src={c.img} alt={c.title} className="h-full w-auto object-contain" />
              </div>
              <h3 className="font-bold mb-1.5">{c.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>




    {/* Timeline */}
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 mb-4">
            <Calendar className="h-4 w-4" /> Our Journey
          </span>
          <h2 className="section-title text-white">Company Milestones</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {timeline.map((t, i) => (
            <div key={i} className="relative group">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-7 hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full">
                <div className="text-accent font-extrabold text-3xl mb-3">{t.year}</div>
                <h3 className="font-bold text-lg mb-2 text-white">{t.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Sustainability Section */}
    <section className="py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="section-badge"><Leaf className="h-4 w-4" /> Sustainability</span>
          <h2 className="section-title">Committed to a Greener Future</h2>
          <p className="section-subtitle">LPG is a cleaner-burning fuel that reduces emissions and protects forests — powering progress sustainably.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-10">
          {[
            { icon: Wind, value: "40%", label: "Less CO₂ vs Coal", color: "primary" as const },
            { icon: TreePine, value: "1,000+", label: "Trees Saved Annually", color: "accent" as const },
            { icon: Recycle, value: "15+ Yr", label: "Cylinder Lifespan", color: "primary" as const },
            { icon: Leaf, value: "Zero", label: "Particulate Emissions", color: "accent" as const },
          ].map((item) => (
            <div key={item.label} className="relative rounded-2xl border border-border/40 bg-card p-7 text-center group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className={`mx-auto mb-4 h-14 w-14 rounded-2xl bg-gradient-to-br ${item.color === "primary" ? "from-primary/10 to-primary/5" : "from-accent/10 to-accent/5"} flex items-center justify-center`}>
                <item.icon className={`h-7 w-7 ${item.color === "primary" ? "text-primary" : "text-accent"}`} />
              </div>
              <div className="text-2xl font-extrabold tracking-tight mb-1">{item.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="rounded-xl border-primary/30 text-primary hover:bg-primary/5 group">
            <Link to="/sustainability">
              Learn About Our Sustainability
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/80 p-12 md:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Ready to Get Started?</h2>
            <p className="text-white/80 mb-10 max-w-lg mx-auto text-lg">
              Join over 1.5 million satisfied customers. Contact us for reliable LPG solutions tailored to your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-10 rounded-xl h-13 shadow-lg group">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10 px-10 rounded-xl h-13">
                <Link to="/products">Our Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
