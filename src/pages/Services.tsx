import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building, Home, Factory, Fuel, ShieldCheck, Wrench, CheckCircle, ChevronRight, ArrowRight, Zap, Settings, PenTool, Phone, Flame } from "lucide-react";
import servicesHero from "@/assets/services-hero.jpg";
import reticulationImg from "@/assets/reticulation-service.jpg";
import autogasImg from "@/assets/autogas-station.jpg";

const reticulationFeatures = [
  { icon: Home, title: "Residential Distribution", desc: "Apartment gas distribution systems with metered supply for each unit." },
  { icon: Building, title: "Commercial Systems", desc: "Large-scale reticulation for commercial buildings and complexes." },
  { icon: Factory, title: "Industrial Piping", desc: "Heavy-duty gas piping for industrial facilities and manufacturing plants." },
  { icon: PenTool, title: "System Design", desc: "Complete engineering design and planning tailored to your project." },
  { icon: ShieldCheck, title: "Safety Compliance", desc: "Full certification and compliance with national and international standards." },
  { icon: Settings, title: "Maintenance & Support", desc: "Ongoing maintenance, inspections, and 24/7 technical support." },
];

const autogasFeatures = [
  { icon: PenTool, title: "Station Design & Setup", desc: "Complete turnkey design from site planning to commissioning." },
  { icon: Fuel, title: "Dispenser Installation", desc: "High-precision fuel dispensers with digital metering systems." },
  { icon: ShieldCheck, title: "Fire Safety Systems", desc: "Advanced safety equipment and fire suppression installations." },
  { icon: Settings, title: "Tank Installation", desc: "Underground and above-ground tank installation with leak detection." },
  { icon: Wrench, title: "Regulatory Compliance", desc: "End-to-end permits, licensing, and regulatory approvals." },
  { icon: Zap, title: "Staff Training", desc: "Comprehensive training and certification for station operators." },
];

const Services = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[70vh] flex items-center justify-center">
      <img src={servicesHero} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="container mx-auto px-4 relative z-10 py-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white border border-white/20 backdrop-blur-sm mb-6"><Wrench className="h-4 w-4" /> Our Services</span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">Expert Gas<br />Solutions</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-12">
          From gas reticulation systems to auto gas station installations — we deliver end-to-end solutions with safety and precision.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { id: "reticulation", label: "Reticulation", icon: Building },
            { id: "autogas-station", label: "Auto Gas Station", icon: Fuel },
          ].map((p) => (
            <a key={p.id} href={`#${p.id}`} className="group flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3 text-white hover:bg-white/20 transition-all duration-300">
              <p.icon className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">{p.label}</span>
              <ChevronRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* Reticulation Services */}
    <section id="reticulation" className="py-28 scroll-mt-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="section-badge"><Building className="h-4 w-4" /> Core Service</span>
          <h2 className="section-title">Reticulation Services</h2>
          <p className="section-subtitle">From residential to commercial and industrial spaces — safe, efficient, and reliable gas reticulation solutions tailored to your project.</p>
        </div>

        <div className="relative rounded-3xl border border-border/30 bg-gradient-to-br from-card via-card to-muted/30 overflow-hidden mb-16">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          <div className="grid grid-cols-1 lg:grid-cols-12 relative z-10">
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              <img src={reticulationImg} alt="Gas reticulation piping system" loading="lazy" className="w-full h-full min-h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20 hidden lg:block" />
            </div>
            <div className="lg:col-span-7 p-8 lg:p-14 flex flex-col justify-center">
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Jamuna Gas provides comprehensive gas reticulation solutions — from initial <strong className="text-foreground">design and engineering</strong> to installation and ongoing maintenance — ensuring safety and efficiency at every step.
              </p>
              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  { icon: Home, label: "Residential", tag: "Apartments" },
                  { icon: Building, label: "Commercial", tag: "Offices" },
                  { icon: Factory, label: "Industrial", tag: "Factories" },
                ].map((t) => (
                  <div key={t.label} className="relative rounded-2xl border border-primary/20 bg-card p-5 text-center group hover:shadow-lg hover:border-primary/40 transition-all duration-300 overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-t-2xl" />
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <t.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-bold text-sm">{t.label}</h4>
                    <span className="text-[10px] font-medium bg-primary/10 text-primary rounded-full px-2.5 py-0.5 mt-2 inline-block">{t.tag}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> ISO Certified</div>
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> BPC Approved</div>
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> 24/7 Support</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
            <div className="h-8 w-1 bg-primary rounded-full" />
            What We Offer
          </h3>
          <p className="text-muted-foreground mb-8 ml-5">End-to-end reticulation services for every scale.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reticulationFeatures.map((f) => (
              <div key={f.title} className="relative rounded-2xl border border-border/40 bg-card p-6 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-accent/[0.03] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 flex gap-4">
                  <div className="h-11 w-11 shrink-0 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center group-hover:from-primary/25 group-hover:to-accent/10 transition-all duration-300">
                    <f.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-0.5">{f.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Auto Gas Station Installation - Dark Section */}
    <section id="autogas-station" className="py-28 bg-foreground text-background relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/4" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] translate-y-1/3 translate-x-1/4" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 mb-4 border border-white/10">
            <Fuel className="h-4 w-4 text-accent" /> Specialized Service
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Auto Gas Station Installation</h2>
          <p className="max-w-2xl mx-auto mt-3 text-lg text-white/50">We design, build, and install complete auto gas refueling stations with the highest safety standards.</p>
        </div>

        <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 relative lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5" />
              <img src={autogasImg} alt="Auto gas station installation" loading="lazy" className="w-full h-full min-h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/[0.02] hidden lg:block" />
            </div>
            <div className="lg:col-span-7 p-8 lg:p-14 flex flex-col justify-center lg:order-1">
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                From site planning to commissioning — Jamuna Gas delivers <strong className="text-white">turnkey auto gas station solutions</strong> with cutting-edge equipment, advanced safety systems, and full regulatory compliance.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="relative rounded-2xl bg-white/[0.04] border border-white/10 p-6 group hover:bg-white/[0.08] transition-all duration-300">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent/50 rounded-t-2xl" />
                  <div className="flex items-center gap-3 mb-3 pt-1">
                    <div className="h-10 w-10 rounded-xl bg-accent/20 flex items-center justify-center">
                      <ShieldCheck className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Safety First</h3>
                      <span className="text-xs text-white/40">International Standards</span>
                    </div>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">Advanced fire suppression, leak detection, and emergency systems at every station.</p>
                </div>
                <div className="relative rounded-2xl bg-white/[0.04] border border-white/10 p-6 group hover:bg-white/[0.08] transition-all duration-300">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-t-2xl" />
                  <div className="flex items-center gap-3 mb-3 pt-1">
                    <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Wrench className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Expert Install</h3>
                      <span className="text-xs text-white/40">Turnkey Solutions</span>
                    </div>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">Complete design, construction, equipment installation, and staff training.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mb-6">
                {["Turnkey Setup", "Fire Safety", "Digital Metering", "Staff Training"].map((tag) => (
                  <span key={tag} className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-medium text-white/50 hover:bg-white/10 transition-colors">{tag}</span>
                ))}
              </div>
              <div className="flex items-center gap-6 text-sm text-white/50">
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent" /> Licensed</div>
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent" /> Certified</div>
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent" /> Insured</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
            <div className="h-8 w-1 bg-accent rounded-full" />
            What's Included
          </h3>
          <p className="text-white/50 mb-8 ml-5">Every aspect of your auto gas station, handled by experts.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {autogasFeatures.map((f) => (
              <div key={f.title} className="relative rounded-2xl bg-white/[0.04] border border-white/10 p-6 group hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.02] to-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 flex gap-4">
                  <div className="h-11 w-11 shrink-0 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:from-accent/30 group-hover:to-primary/10 transition-all duration-300">
                    <f.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white mb-0.5">{f.title}</h4>
                    <p className="text-xs text-white/50 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-foreground" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px] translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 mb-8 border border-white/10">
            <Flame className="h-4 w-4 text-accent" /> Let's Build Together
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Need a Custom<br />
            <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">Gas Solution?</span>
          </h2>

          <p className="text-white/50 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Contact our team to discuss your project requirements — we'll design a tailored solution for you.
          </p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "24/7", label: "Technical Support" },
              { value: "100%", label: "Safety Record" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-white/40 uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 font-bold px-12 rounded-xl h-14 shadow-xl shadow-primary/20 group text-base">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-10 rounded-xl h-14 text-base backdrop-blur-sm">
              <a href="tel:+88029844940">
                <Phone className="h-4 w-4 mr-2" />
                Call Us Now
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 mt-10 text-sm text-white/30">
            <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent/60" /> Free Consultation</div>
            <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent/60" /> Custom Design</div>
            <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent/60" /> ISO Certified</div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
