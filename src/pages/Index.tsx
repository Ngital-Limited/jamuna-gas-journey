import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Flame, Home, Building2, Factory, Car,
  Target, Eye, Compass, Trophy,
  Award, Shield, Leaf, Globe,
  Calendar, Users, TrendingUp, ArrowRight, Truck,
  CheckCircle,
} from "lucide-react";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Calendar, value: "24+", label: "Years of Excellence" },
  { icon: Users, value: "1.5M+", label: "Customers Served" },
  { icon: Trophy, value: "3+", label: "Brand Awards" },
  { icon: TrendingUp, value: "4", label: "Plants Nationwide" },
];

const products = [
  { icon: Home, title: "Household LPG", desc: "12 kg and 5.5 kg cylinders for everyday cooking needs.", link: "/products" },
  { icon: Building2, title: "Commercial LPG", desc: "35 kg and 45 kg cylinders for restaurants, hotels, and institutions.", link: "/products" },
  { icon: Truck, title: "Bulk LPG", desc: "Large-scale energy for industrial operations via tank trucks.", link: "/products" },
  { icon: Car, title: "Auto Gas", desc: "Clean-burning, cost-effective LPG for vehicles.", link: "/products" },
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
  "First government-approved private LPG plant",
  "ISO certified quality and safety standards",
  "Nationwide distribution network with 15+ depots",
  "4 bottling plants across Bangladesh",
  "Serving 1.5 million+ satisfied customers",
  "24+ years of trusted energy solutions",
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

    {/* Products */}
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-badge"><Flame className="h-4 w-4" /> What We Offer</span>
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">Comprehensive LPG solutions for every need — from household cooking to powering industries.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <Link to={p.link} key={p.title}>
              <Card className="group h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border/50 overflow-hidden">
                <CardContent className="p-7 text-center relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-accent/10 transition-all duration-300">
                    <p.icon className="h-8 w-8 text-primary group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <div className="mt-4 text-primary text-sm font-semibold flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-badge"><Award className="h-4 w-4" /> Why Jamuna Gas</span>
            <h2 className="section-title mb-6">Bangladesh's Most Trusted LPG Brand</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              With over two decades of experience, we've built the nation's most reliable LPG distribution network, certified by international quality and safety standards.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {whyChoose.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button asChild variant="outline" className="rounded-xl border-primary/30 text-primary hover:bg-primary/5 group">
                <Link to="/about">
                  About Our Story
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {certifications.map((c) => (
              <Card key={c.title} className="border-border/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center">
                    <img src={c.img} alt={c.title} className="h-16 w-auto object-contain" />
                  </div>
                  <h3 className="font-bold text-sm mb-1">{c.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Mission / Vision */}
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-badge"><Eye className="h-4 w-4" /> Our Purpose</span>
          <h2 className="section-title">Have Faith in Our Vision</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {values.map((v) => (
            <Card key={v.title} className="border-border/50 hover:shadow-md transition-all duration-300 overflow-hidden group">
              <CardContent className="p-7 flex gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 group-hover:from-primary/25 group-hover:to-accent/10 transition-all duration-300">
                  <v.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </CardContent>
            </Card>
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

    {/* CTA */}
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary to-primary/80 p-12 md:p-20 text-center">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>
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
