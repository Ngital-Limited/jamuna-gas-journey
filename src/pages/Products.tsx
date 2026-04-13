import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import {
  Home, Building2, Car, Flame, UtensilsCrossed, Building,
  Tent, Hotel, Truck, Droplets, Leaf, Box, ShieldCheck,
  Fuel, DollarSign, Wrench, Shield,
} from "lucide-react";
import householdImg from "@/assets/household-lpg.jpg";
import commercialImg from "@/assets/commercial-lpg.jpg";
import autoGasImg from "@/assets/auto-gas.jpg";

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

const Products = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary-foreground mb-3">Our Products</h1>
        <p className="text-primary-foreground/70 max-w-xl">Comprehensive LPG solutions for households, businesses, industries, and vehicles.</p>
      </div>
    </section>

    {/* Household */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center"><Home className="h-5 w-5 text-primary" /></div>
          <h2 className="text-3xl font-bold">Household LPG</h2>
        </div>
        <p className="text-muted-foreground max-w-2xl mb-8">
          We serve 12 kg and 5.5 kg cylinders for domestic use. The 12 kg cylinder is easy to carry and provides approximately 1 month of service. It is an ideal choice for household cooking, offering both portability and practicality.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="border-accent/30 bg-accent/5">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Flame className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-semibold">12 kg Cylinder</h3>
              </div>
              <p className="text-sm text-muted-foreground">Easy to carry and simple to use. One cylinder can smoothly serve a small family for a whole month!</p>
            </CardContent>
          </Card>
          <Card className="border-accent/30 bg-accent/5">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Flame className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-semibold">5.5 kg Cylinder</h3>
              </div>
              <p className="text-sm text-muted-foreground">Most commonly used for food courts and picnics — easy to carry and go anywhere!</p>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-xl font-semibold mb-6">Applications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {householdApps.map((a) => (
            <Card key={a.title} className="border-border/60">
              <CardContent className="p-5 flex gap-3">
                <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                  <a.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{a.title}</h4>
                  <p className="text-sm text-muted-foreground">{a.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-6">Benefits of Using LPG</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefits.map((b) => (
            <Card key={b.title} className="border-border/60">
              <CardContent className="p-5 flex gap-3">
                <div className="h-10 w-10 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center">
                  <b.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{b.title}</h4>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Commercial */}
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center"><Building2 className="h-5 w-5 text-primary" /></div>
          <h2 className="text-3xl font-bold">Commercial LPG</h2>
        </div>
        <p className="text-muted-foreground max-w-2xl mb-8">
          Jamuna Gas offers 35 kg and 45 kg LPG cylinders, specially designed for commercial operations and large apartment reticulation systems. Built with international safety and quality standards.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-accent/30 bg-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">35 kg Cylinder</h3>
              <p className="text-sm text-muted-foreground">Where high gas consumption is needed — ideal for restaurants, hotels, and catering services.</p>
            </CardContent>
          </Card>
          <Card className="border-accent/30 bg-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">45 kg Cylinder</h3>
              <p className="text-sm text-muted-foreground">For even higher LPG consumption — perfect for institutional kitchens and medium-scale industrial facilities.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* Auto Gas */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center"><Car className="h-5 w-5 text-primary" /></div>
          <h2 className="text-3xl font-bold">Auto Gas</h2>
        </div>
        <p className="text-muted-foreground max-w-2xl mb-8">
          Auto Gas (Automotive LPG) is a clean, efficient, and eco-friendly fuel alternative for vehicles. Jamuna Gas offers high-quality Auto Gas solutions for cost-effective and environmentally responsible transportation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {autoFeatures.map((f) => (
            <Card key={f.title} className="border-border/60 hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex gap-4">
                <div className="h-12 w-12 shrink-0 rounded-xl bg-accent/10 flex items-center justify-center">
                  <f.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Products;
