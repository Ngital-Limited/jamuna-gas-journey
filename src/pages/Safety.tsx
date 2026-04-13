import Layout from "@/components/Layout";
import { AlertTriangle, Cylinder, Factory, Sun, Wind, Zap, Users, Wrench, ShieldCheck, CheckCircle, Flame, PhoneCall, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import safetyHero from "@/assets/safety-hero.jpg";

const cylinderTips = [
  { icon: Cylinder, title: "Keep Cylinder Upright", desc: "Never lay it down or place it on its side. Cylinders must always be stored in an upright position.", num: "01" },
  { icon: Wind, title: "Well-Ventilated Area", desc: "Place the cylinder where air can flow freely. Never store inside cabinets, bathrooms, or closed spaces.", num: "02" },
  { icon: Sun, title: "Away from Heat & Sunlight", desc: "Ensure the cylinder is at a safe distance from stoves and fire sources. Do not store under direct sunlight.", num: "03" },
];

const bulkTips = [
  { icon: Users, title: "Authorized Staff Only", desc: "Only authorized staff may enter the LPG storage area. Unauthorized personnel must be kept away at all times.", num: "01" },
  { icon: Wrench, title: "Regular Maintenance", desc: "Keep the storage area clean, free from obstructions, and perform regular maintenance on all equipment.", num: "02" },
  { icon: Zap, title: "No Electrical Equipment", desc: "Avoid using battery-powered or electrical equipment in or near the LPG storage area to prevent sparks.", num: "03" },
];

const emergencySteps = [
  "Turn off the gas regulator immediately",
  "Open all doors and windows for ventilation",
  "Do not switch on/off any electrical appliances",
  "Evacuate everyone from the area",
  "Call the fire service or emergency helpline",
  "Do not use open flames or lighters",
];

const Safety = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[70vh] flex items-center justify-center">
      <img src={safetyHero} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="container mx-auto px-4 relative z-10 py-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white border border-white/20 backdrop-blur-sm mb-6"><ShieldCheck className="h-4 w-4" /> Safety First</span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">Safety Tips</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">Your safety is in your hands. Follow these essential guidelines for safe LPG usage.</p>
      </div>
    </section>

    {/* Cylinder Usage Safety */}
    <section className="py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="section-badge"><AlertTriangle className="h-4 w-4" /> Cylinder Safety</span>
          <h2 className="section-title">Cylinder Usage Safety</h2>
          <p className="section-subtitle">Essential guidelines for safe handling and storage of LPG cylinders at home and work.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cylinderTips.map((t) => (
            <div key={t.title} className="relative rounded-3xl border border-border/30 bg-gradient-to-br from-card via-card to-muted/30 p-8 group hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent via-accent/70 to-accent/30 rounded-t-3xl" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center group-hover:from-accent/25 group-hover:to-primary/10 transition-all duration-300">
                    <t.icon className="h-7 w-7 text-accent" />
                  </div>
                  <span className="text-4xl font-extrabold text-accent/10 group-hover:text-accent/20 transition-colors">{t.num}</span>
                </div>
                <h3 className="text-lg font-bold mb-3">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Bulk LPG Storage Safety - Dark Section */}
    <section className="py-28 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/4" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] translate-y-1/3 translate-x-1/4" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 mb-4 border border-white/10">
            <Factory className="h-4 w-4 text-accent" /> Industrial Safety
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Bulk LPG Storage Safety</h2>
          <p className="max-w-2xl mx-auto mt-3 text-lg text-white/50">Critical safety protocols for bulk LPG storage areas and industrial facilities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {bulkTips.map((t) => (
            <div key={t.title} className="relative rounded-2xl bg-white/[0.04] border border-white/10 p-8 group hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-t-2xl" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/10 transition-all duration-300">
                    <t.icon className="h-7 w-7 text-primary" />
                  </div>
                  <span className="text-4xl font-extrabold text-white/5 group-hover:text-white/10 transition-colors">{t.num}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{t.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/30">
          <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent/60" /> ISO 45001 Certified</div>
          <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent/60" /> Regular Inspections</div>
          <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent/60" /> Trained Personnel</div>
          <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent/60" /> Emergency Protocols</div>
        </div>
      </div>
    </section>

    {/* Emergency Steps */}
    <section className="py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-destructive/5 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="section-badge"><AlertTriangle className="h-4 w-4" /> Emergency</span>
          <h2 className="section-title">In Case of Gas Leak</h2>
          <p className="section-subtitle">Follow these critical steps immediately if you detect a gas leak.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl border border-destructive/20 bg-gradient-to-br from-card via-card to-destructive/[0.03] p-8 lg:p-12 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-destructive via-destructive/70 to-destructive/30 rounded-t-3xl" />
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

            <div className="relative z-10 space-y-4">
              {emergencySteps.map((step, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-destructive/10 flex items-center justify-center text-sm font-bold text-destructive group-hover:bg-destructive/20 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="font-medium leading-relaxed">{step}</p>
                  </div>
                </div>
              ))}
            </div>
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 mb-8 border border-white/10">
            <Flame className="h-4 w-4 text-accent" /> Need Assistance?
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Safety is Our<br />
            <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">Top Priority</span>
          </h2>

          <p className="text-white/50 text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed">
            Have safety concerns or need expert guidance? Our team is always ready to help.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 font-bold px-12 rounded-xl h-14 shadow-xl shadow-primary/20 group text-base">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white bg-transparent hover:bg-white/10 px-10 rounded-xl h-14 text-base backdrop-blur-sm">
              <a href="tel:+88029844940">
                <PhoneCall className="h-4 w-4 mr-2" />
                Emergency Helpline
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Safety;