import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building, Home, Factory, Fuel, ShieldCheck, Wrench, CheckCircle, ChevronRight } from "lucide-react";
import servicesHero from "@/assets/services-hero.jpg";
import reticulationImg from "@/assets/reticulation-service.jpg";
import autogasImg from "@/assets/autogas-station.jpg";

const reticulationFeatures = [
  "Residential apartment gas distribution",
  "Commercial building reticulation systems",
  "Industrial facility gas piping",
  "System design and engineering",
  "Safety compliance and certification",
  "Ongoing maintenance and support",
];

const autogasFeatures = [
  "Complete station design and setup",
  "Fuel dispenser installation",
  "Safety equipment and fire suppression",
  "Underground tank installation",
  "Regulatory compliance and permits",
  "Staff training and certification",
];

const Services = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[60vh] flex items-center justify-center">
      <img src={servicesHero} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      <div className="container mx-auto px-4 relative z-10 py-20">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Our Services</h1>
        <p className="text-white/70 text-lg max-w-xl">
          Expert gas reticulation and auto gas station solutions — from design to installation and beyond.
        </p>
      </div>
    </section>

    {/* Reticulation Services */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Building className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Reticulation Services</h2>
            </div>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              From residential to commercial and industrial spaces, we ensure safe, efficient, and reliable gas reticulation solutions tailored to your project.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {reticulationFeatures.map((f) => (
                <div key={f} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{f}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              {[
                { icon: Home, label: "Residential" },
                { icon: Building, label: "Commercial" },
                { icon: Factory, label: "Industrial" },
              ].map((t) => (
                <Card key={t.label} className="border-primary/20 bg-primary/5 flex-1">
                  <CardContent className="p-4 text-center">
                    <t.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                    <span className="text-sm font-medium">{t.label}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={reticulationImg} alt="Gas reticulation piping system" loading="lazy" width={1024} height={768} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    {/* Auto Gas Station Installation */}
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
            <img src={autogasImg} alt="Auto gas station installation" loading="lazy" width={1024} height={768} className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Fuel className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Auto Gas Station Installation</h2>
            </div>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              We design, build, and install complete auto gas refueling stations with the highest safety standards — from equipment setup to regulatory compliance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {autogasFeatures.map((f) => (
                <div key={f} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{f}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              {[
                { icon: ShieldCheck, label: "Safety First" },
                { icon: Wrench, label: "Expert Install" },
              ].map((t) => (
                <Card key={t.label} className="border-accent/20 bg-accent/5 flex-1">
                  <CardContent className="p-4 text-center">
                    <t.icon className="h-6 w-6 text-accent mx-auto mb-2" />
                    <span className="text-sm font-medium">{t.label}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-8">
          Contact our team to discuss your project requirements — we'll design a tailored gas solution for you.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Get in Touch
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default Services;
