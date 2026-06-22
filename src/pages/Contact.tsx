import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Factory, MessageSquare, ArrowRight, CheckCircle, Send } from "lucide-react";
import { toast } from "sonner";
import contactHero from "@/assets/contact-hero.jpg";

const plants = [
  { name: "Kaligonj Plant", address: "Barihati, Sluice Gate, Kaliganj -1720", phone: "+88 01769-969496", lat: 23.3975, lng: 90.2183 },
  { name: "Mongla Plant", address: "14, Mongla Port Industrial Area, Mongla, Bagerhat, Khulna", phone: "+88 01769-969482", lat: 22.4934, lng: 89.5977 },
  { name: "Bogra Plant", address: "Dhaka Rangpur Highway, Noymile, Bogra", phone: "+88 01755-555345", lat: 24.8465, lng: 89.3773 },
  { name: "Cumilla Plant", address: "Anandapur, Patodda Bazar, Chauddagram, Comilla", phone: "+88 01769-969420", lat: 23.2200, lng: 91.1800 },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Thank you! Your message has been sent.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <img src={contactHero} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="container mx-auto px-4 relative z-10 py-24 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white border border-white/20 backdrop-blur-sm mb-6"><MessageSquare className="h-4 w-4" /> Get in Touch</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">Contact Us</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">We'd love to hear from you. Reach out for inquiries, partnerships, or support.</p>
        </div>
      </section>

      {/* Corporate Contact + Form */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <span className="section-badge"><MessageSquare className="h-4 w-4" /> Reach Out</span>
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle max-w-2xl mx-auto">Have questions or need a quote? We're here to help you find the perfect LPG solution.</p>
            <div className="mx-auto mt-6 h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          {/* Contact info highlight bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              { icon: Phone, title: "Call Us", info: "+880 2-9844940", href: "tel:+88029844940", accent: true },
              { icon: Mail, title: "Email Us", info: "info@jamunagas.com", href: "mailto:info@jamunagas.com", accent: false },
              { icon: Clock, title: "Working Hours", info: "Sat–Thu: 9am – 5pm", href: null, accent: false },
              { icon: MapPin, title: "Head Office", info: "Gulshan Avenue, Dhaka-1212", href: null, accent: false },
            ].map((c) => (
              <div key={c.title} className="relative group rounded-2xl border border-border/40 bg-card overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="p-6 flex flex-col items-center text-center">
                  <div className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${c.accent ? "bg-gradient-to-br from-accent/20 to-accent/10 group-hover:from-accent/30 group-hover:to-accent/15" : "bg-gradient-to-br from-primary/15 to-primary/5 group-hover:from-primary/25 group-hover:to-primary/10"}`}>
                    <c.icon className={`h-6 w-6 ${c.accent ? "text-accent" : "text-primary"}`} />
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-semibold mb-1.5">{c.title}</p>
                  {c.href ? (
                    <a href={c.href} className={`text-sm font-bold hover:text-accent transition-colors ${c.accent ? "text-accent text-lg" : "text-foreground"}`}>{c.info}</a>
                  ) : (
                    <p className="text-sm font-bold">{c.info}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left — Address & Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl border border-border/30 bg-gradient-to-br from-card via-card to-muted/30 p-8 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-1.5 bg-gradient-to-b from-primary via-accent to-primary/30 rounded-full" />
                    <h3 className="text-xl font-bold">Corporate Office</h3>
                  </div>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4 group/item">
                      <div className="h-11 w-11 shrink-0 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center group-hover/item:from-primary/25 transition-all">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground/50 font-semibold mb-1">Address</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">House 99, Rupayan Golden Age (2nd Floor), Gulshan Avenue, Dhaka-1212, Bangladesh</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group/item">
                      <div className="h-11 w-11 shrink-0 rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center group-hover/item:from-accent/25 transition-all">
                        <Phone className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground/50 font-semibold mb-1">Phone</p>
                        <a href="tel:+88029844940" className="text-lg font-bold text-foreground hover:text-accent transition-colors">+880 2-9844940</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group/item">
                      <div className="h-11 w-11 shrink-0 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center group-hover/item:from-primary/25 transition-all">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground/50 font-semibold mb-1">Email</p>
                        <a href="mailto:info@jamunagas.com" className="text-sm font-medium text-foreground hover:text-accent transition-colors">info@jamunagas.com</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group/item">
                      <div className="h-11 w-11 shrink-0 rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center group-hover/item:from-accent/25 transition-all">
                        <Clock className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground/50 font-semibold mb-1">Hours</p>
                        <p className="text-sm text-muted-foreground">Saturday – Thursday: 9:00 AM – 5:00 PM</p>
                        <p className="text-xs text-muted-foreground/60 mt-0.5">Friday: Weekend</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3">
                {["Quick Response", "Free Consultation", "ISO Certified"].map((badge) => (
                  <div key={badge} className="flex items-center gap-2 bg-muted/60 rounded-full px-4 py-2">
                    <CheckCircle className="h-3.5 w-3.5 text-primary" />
                    <span className="text-xs font-medium text-muted-foreground">{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="relative group rounded-3xl border border-border/30 bg-gradient-to-br from-card via-card to-muted/30 overflow-hidden shadow-xl">
                <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative">
                  <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                  <div className="h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary rounded-t-3xl" />

                  <div className="relative z-10 p-8 lg:p-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center shadow-sm">
                        <Send className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">Send us a Message</h2>
                        <p className="text-sm text-muted-foreground">We'll get back to you within 24 hours</p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm font-semibold flex items-center gap-1">Name <span className="text-accent">*</span></Label>
                          <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" maxLength={100} className="h-12 rounded-xl border-border/50 bg-background/50 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-semibold flex items-center gap-1">Email <span className="text-accent">*</span></Label>
                          <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" maxLength={255} className="h-12 rounded-xl border-border/50 bg-background/50 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-semibold">Phone <span className="text-muted-foreground/50 font-normal">(optional)</span></Label>
                        <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+880 1XXX-XXXXXX" maxLength={20} className="h-12 rounded-xl border-border/50 bg-background/50 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-semibold flex items-center gap-1">Message <span className="text-accent">*</span></Label>
                        <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your requirements..." rows={5} maxLength={1000} className="rounded-xl border-border/50 bg-background/50 focus:border-primary focus:ring-1 focus:ring-primary/20 resize-none transition-all" />
                      </div>
                      <Button type="submit" size="lg" variant="premium" className="w-full h-14 btn-shine text-base">
                        Send Message
                        <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                      <p className="text-center text-xs text-muted-foreground/50">By submitting, you agree to our privacy policy</p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plant Addresses - Dark Section */}
      <section className="py-28 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 mb-4 border border-white/10">
              <Factory className="h-4 w-4 text-accent" /> Our Plants
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Plant Addresses</h2>
            <p className="max-w-2xl mx-auto mt-3 text-lg text-white/50">Our bottling plants are strategically located across Bangladesh for efficient distribution.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {plants.map((p, i) => (
              <div key={p.name} className="relative rounded-2xl bg-white/[0.04] border border-white/10 p-7 group hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-t-2xl opacity-60" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4 pt-1">
                    <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Factory className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-white">{p.name}</h3>
                  </div>
                  <div className="flex items-start gap-2 mb-3">
                    <MapPin className="h-4 w-4 text-white/30 shrink-0 mt-0.5" />
                    <span className="text-sm text-white/50 leading-relaxed">{p.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-white/30 shrink-0" />
                    <a href={`tel:${p.phone.replace(/\s/g, "")}`} className="text-sm text-accent hover:text-accent/80 transition-colors font-medium">
                      {p.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depot Addresses with Map */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="section-badge"><Building2 className="h-4 w-4" /> Distribution Network</span>
            <h2 className="section-title">Depot Addresses</h2>
            <p className="section-subtitle">Our nationwide depot network ensures fast and reliable LPG delivery to every corner of Bangladesh.</p>
          </div>

          {/* Interactive Map */}
          <div className="relative rounded-3xl border border-border/30 overflow-hidden mb-12 shadow-xl">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent via-primary to-accent rounded-t-3xl z-[1000]" />
            <div className="h-[500px] w-full">
              <MapContainer
                center={[23.8, 90.4]}
                zoom={7}
                scrollWheelZoom={false}
                className="h-full w-full"
                style={{ borderRadius: "1.5rem" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {plants.map((p) => (
                  <Marker key={p.name} position={[p.lat, p.lng]} icon={plantIcon}>
                    <Popup>
                      <div className="text-sm">
                        <span className="inline-block bg-red-100 text-red-700 text-[10px] font-bold uppercase px-2 py-0.5 rounded mb-1">Plant</span>
                        <strong className="block text-base mb-1">{p.name}</strong>
                        <span className="block text-muted-foreground mb-1">{p.address}</span>
                        <a href={`tel:${p.phone.replace(/\s/g, "")}`} className="text-primary font-medium">{p.phone}</a>
                      </div>
                    </Popup>
                  </Marker>
                ))}
                {depots.map((d) => (
                  <Marker key={d.name} position={[d.lat, d.lng]} icon={depotIcon}>
                    <Popup>
                      <div className="text-sm">
                        <span className="inline-block bg-blue-100 text-blue-700 text-[10px] font-bold uppercase px-2 py-0.5 rounded mb-1">Depot</span>
                        <strong className="block text-base mb-1">{d.name}</strong>
                        <span className="block text-muted-foreground mb-1">{d.address}</span>
                        <a href={`tel:${d.phone.replace(/\s/g, "")}`} className="text-primary font-medium">{d.phone}</a>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
            {/* Legend */}
            <div className="absolute bottom-4 left-4 z-[1000] bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border border-border/30 flex items-center gap-5 text-xs font-medium">
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-red-500" />
                Plants ({plants.length})
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-blue-500" />
                Depots ({depots.length})
              </div>
            </div>
          </div>


          {/* Bottom stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12">
            {[
              { value: "15+", label: "Depots Nationwide" },
              { value: "4", label: "Bottling Plants" },
              { value: "64", label: "Districts Covered" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-foreground mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
