import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Cylinder, Factory, Sun, Wind, Zap, Users, Wrench, ShieldCheck } from "lucide-react";
import safetyHero from "@/assets/safety-hero.jpg";

const cylinderTips = [
  { icon: Cylinder, title: "Keep Cylinder Upright", desc: "Never lay it down or place it on its side. Cylinders must always be stored in an upright position." },
  { icon: Wind, title: "Well-Ventilated Area", desc: "Place the cylinder where air can flow freely. Never store inside cabinets, bathrooms, or closed spaces." },
  { icon: Sun, title: "Away from Heat & Sunlight", desc: "Ensure the cylinder is at a safe distance from stoves and fire sources. Do not store under direct sunlight." },
];

const bulkTips = [
  { icon: Users, title: "Authorized Staff Only", desc: "Only authorized staff may enter the LPG storage area." },
  { icon: Wrench, title: "Regular Maintenance", desc: "Keep the storage area clean, free from obstructions, and perform regular maintenance." },
  { icon: Zap, title: "No Electrical Equipment", desc: "Avoid using battery-powered or electrical equipment in or near the LPG storage area." },
];

const Safety = () => (
  <Layout>
    <section className="relative min-h-[60vh] flex items-center justify-center">
      <img src={safetyHero} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      <div className="container mx-auto px-4 relative z-10 py-20">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Safety Tips</h1>
        <p className="text-white/70 text-lg max-w-xl">Your safety is in your hands. Follow these essential guidelines.</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
            <AlertTriangle className="h-5 w-5 text-accent" />
          </div>
          <h2 className="text-3xl font-bold">Cylinder Usage Safety</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {cylinderTips.map((t) => (
            <Card key={t.title} className="border-accent/20 hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <t.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Factory className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">Bulk LPG Storage Safety</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bulkTips.map((t) => (
            <Card key={t.title} className="border-border/60 hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <t.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Safety;
