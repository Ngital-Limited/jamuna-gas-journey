import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Flame, Home, Building2, Factory, Car,
  Target, Eye, Compass, Trophy,
  Award, Shield, Leaf, Globe,
  Calendar, Star, Users, TrendingUp,
} from "lucide-react";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Calendar, value: "16+", label: "Years of Experience" },
  { icon: Users, value: "1,500,000+", label: "Customers Nationwide" },
  { icon: Trophy, value: "3+", label: "Brand Awards" },
];

const products = [
  { icon: Home, title: "Household LPG", desc: "Reliable cooking fuel for homes with 12 kg and 5.5 kg cylinders." },
  { icon: Building2, title: "Commercial LPG", desc: "High-capacity 35 kg and 45 kg cylinders for restaurants, hotels, and apartments." },
  { icon: Factory, title: "Industrial LPG", desc: "Bulk gas for heat treatment, drying, soldering, welding, and cutting." },
  { icon: Car, title: "Auto Gas", desc: "Clean-burning, cost-effective LPG fuel alternative for vehicles." },
];

const values = [
  { icon: Target, title: "Mission", desc: "Continuously strive to meet customer needs by offering the best possible service, price, and support." },
  { icon: Eye, title: "Vision", desc: "To lead the LP gas sector in Bangladesh by operating and providing a high standard of excellence." },
  { icon: Compass, title: "Objective", desc: "Provide safe, reliable, and efficient LPG solutions while ensuring sustainability and customer satisfaction." },
  { icon: Trophy, title: "Goal", desc: "Ensure customer satisfaction by consistently providing the best product and service that meet ultimate expectations." },
];

const certifications = [
  { icon: Award, title: "ISO 9001:2015", desc: "Quality Management System certified by Bureau Veritas (UKAS)." },
  { icon: Leaf, title: "ISO 14001", desc: "Environmental Management System — upholding global environmental standards." },
  { icon: Shield, title: "ISO 45001:2018", desc: "Occupational Health & Safety — managing workplace risks and employee safety." },
  { icon: Globe, title: "WLPGA Member", desc: "World LPG Association — connecting with global leaders for safe, sustainable LPG." },
];

const timeline = [
  { year: "2000", title: "Operations Began", desc: "First government-approved private LPG plant started operations in Bangladesh." },
  { year: "2023", title: "Best Brand Award", desc: "Won the Best Brand Award for customer satisfaction and trust." },
  { year: "2024", title: "2 Decades Anniversary", desc: "Entered 24th year, earning nationwide trust from 1.5M+ customers." },
  { year: "2024", title: "Best Brand Award", desc: "Won the Best Brand Award again for continued excellence." },
];

const Index = () => (
  <Layout>
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 text-sm text-white mb-6">
            <Flame className="h-4 w-4 text-primary" /> Since 2000 — Bangladesh's Pioneer in LPG
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Powering Bangladesh's Future
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
            The first government-approved private LPG plant — delivering safe, reliable energy to over 1.5 million customers across the nation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
              <Link to="/products">Explore Products</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10 text-base px-8">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-12 bg-card border-b">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4 justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <s.icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Products Overview */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Our Products</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Comprehensive LPG solutions for every need — from household cooking to powering vehicles.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <Card key={p.title} className="group hover:shadow-lg transition-shadow border-border/60">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-accent/10 transition-colors">
                  <p.icon className="h-7 w-7 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link to="/products">View All Products →</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Mission / Vision */}
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Have Faith in Our Vision</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v) => (
            <Card key={v.title} className="border-border/60">
              <CardContent className="p-6 flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Certifications */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Trusted Certifications & Memberships</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Demonstrating our commitment to quality, safety, sustainability, and global standards.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((c) => (
            <Card key={c.title} className="text-center border-border/60 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <c.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Company Timeline</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {timeline.map((t, i) => (
            <div key={i} className="rounded-xl bg-primary-foreground/10 p-6 border border-primary-foreground/10">
              <div className="text-accent font-bold text-2xl mb-2">{t.year}</div>
              <h3 className="font-semibold mb-2">{t.title}</h3>
              <p className="text-sm text-primary-foreground/70">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-accent/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Join over 1.5 million satisfied customers across Bangladesh. Contact us today for reliable LPG solutions.</p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Index;
