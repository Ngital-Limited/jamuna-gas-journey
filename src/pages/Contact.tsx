import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Factory, Building2, MessageSquare, ArrowRight, CheckCircle, Send, Flame } from "lucide-react";
import { toast } from "sonner";
import contactHero from "@/assets/contact-hero.jpg";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const plants = [
  { name: "Kaligonj Plant", address: "Barihati, Sluice Gate, Kaliganj -1720", phone: "+88 01769-969496", lat: 23.3975, lng: 90.2183 },
  { name: "Mongla Plant", address: "14, Mongla Port Industrial Area, Mongla, Bagerhat, Khulna", phone: "+88 01769-969482", lat: 22.4934, lng: 89.5977 },
  { name: "Bogra Plant", address: "Dhaka Rangpur Highway, Noymile, Bogra", phone: "+88 01755-555345", lat: 24.8465, lng: 89.3773 },
  { name: "Cumilla Plant", address: "Anandapur, Patodda Bazar, Chauddagram, Comilla", phone: "+88 01769-969420", lat: 23.2200, lng: 91.1800 },
];

const plantIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  iconRetinaUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const depotIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
  iconRetinaUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const depots = [
  { name: "Chittagong Office", address: "House: 05, Lane:05, Road No: 01, Block: L Halishahar Housing Estate, Chittagong", phone: "+88 01755-555382", lat: 22.3569, lng: 91.7832 },
  { name: "Demra Depot", address: "Bhanga Press, Demra Road, Jatrabari, Dhaka", phone: "+88 01755-555183", lat: 23.7186, lng: 90.4972 },
  { name: "Gazipur Depot", address: "Member Bari, Mouna, Gazipur", phone: "+88 01769-969402", lat: 24.0023, lng: 90.4264 },
  { name: "Barishal Depot", address: "Near Kimini Felling Station, West Rahamatpur, Barishal", phone: "+88 01755-555184", lat: 22.7010, lng: 90.3535 },
  { name: "Bhairab Depot", address: "Kanchan Market, Lakhimpur, Bhairab", phone: "+88 01769-969388", lat: 24.0524, lng: 90.9787 },
  { name: "Chittagong Depot", address: "Saltgola Crossing, Chittagong", phone: "+88 01769-969403", lat: 22.3384, lng: 91.8317 },
  { name: "Companigonj Depot", address: "Companigonj, Cumilla", phone: "+88 01755-555388", lat: 23.2688, lng: 91.1168 },
  { name: "Cumilla Depot", address: "Paduar Bazar, Comilla", phone: "+88 01769-969470", lat: 23.4607, lng: 91.1809 },
  { name: "Jhenidah Depot", address: "Hamdho Bypass Road, Jhenaidah", phone: "+88 01769-969488", lat: 23.5448, lng: 89.1726 },
  { name: "Manikganj Depot", address: "Boitora, Jagir, Manikganj", phone: "+88 01769-969385", lat: 23.8644, lng: 90.0047 },
  { name: "Madaripur Depot", address: "Katherpul, Daukendua, Madaripur", phone: "+88 01769-969399", lat: 23.1641, lng: 90.1978 },
  { name: "Mymensingh Depot", address: "Highway Filling Station, Char Kalibari, Mymensingh", phone: "+88 01769-969366", lat: 24.7471, lng: 90.4203 },
  { name: "Rangpur Depot", address: "Balabari, Taragonj, Rangpur", phone: "+88 01769-969377", lat: 25.7439, lng: 89.2752 },
  { name: "Sylhet Depot", address: "Dokkhin Surma, Bypass Road, Sylhet", phone: "+88 01769-969388", lat: 24.8949, lng: 91.8687 },
  { name: "Tangail Depot", address: "Gharinda, Tangail", phone: "+88 01769-969365", lat: 24.2513, lng: 89.9164 },
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="section-badge"><MessageSquare className="h-4 w-4" /> Reach Out</span>
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">Have questions or need a quote? We're here to help you find the perfect LPG solution.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-5 space-y-4">
              {[
                { icon: MapPin, title: "Corporate Address", info: "House 99, Rupayan Golden Age (2nd Floor), Gulshan Avenue, Dhaka-1212, Bangladesh", color: "primary" as const },
                { icon: Clock, title: "Opening Hours", info: "Sat–Thu: 9 am – 5 pm\nFriday: Weekend", color: "accent" as const },
                { icon: Phone, title: "Phone", info: "+880 2-9844940", color: "primary" as const },
                { icon: Mail, title: "Email", info: "info@jamunagas.com", color: "accent" as const },
              ].map((c) => (
                <div key={c.title} className="relative rounded-2xl border border-border/40 bg-card p-6 group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.color === "primary" ? "from-primary/[0.02] to-primary/[0.05]" : "from-accent/[0.02] to-accent/[0.05]"} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="relative z-10 flex items-start gap-4">
                    <div className={`h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br ${c.color === "primary" ? "from-primary/15 to-primary/5 group-hover:from-primary/25 group-hover:to-accent/10" : "from-accent/15 to-accent/5 group-hover:from-accent/25 group-hover:to-primary/10"} flex items-center justify-center transition-all duration-300`}>
                      <c.icon className={`h-5 w-5 ${c.color === "primary" ? "text-primary" : "text-accent"}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-1">{c.title}</h3>
                      {c.info.split("\n").map((line, i) => (
                        <p key={i} className="text-sm text-muted-foreground leading-relaxed">{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Quick trust badges */}
              <div className="flex items-center gap-4 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-primary" /> Quick Response</div>
                <div className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-primary" /> Free Consultation</div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl border border-border/30 bg-gradient-to-br from-card via-card to-muted/30 p-8 lg:p-10 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary rounded-t-3xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center">
                      <Send className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Send us a Message</h2>
                      <p className="text-sm text-muted-foreground">We'll get back to you within 24 hours</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">Name *</Label>
                        <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" maxLength={100} className="h-12 rounded-xl border-border/50 bg-background/50 focus:border-primary" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                        <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Your email" maxLength={255} className="h-12 rounded-xl border-border/50 bg-background/50 focus:border-primary" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">Phone</Label>
                      <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Your phone number" maxLength={20} className="h-12 rounded-xl border-border/50 bg-background/50 focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
                      <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How can we help?" rows={5} maxLength={1000} className="rounded-xl border-border/50 bg-background/50 focus:border-primary resize-none" />
                    </div>
                    <Button type="submit" size="lg" className="w-full h-13 rounded-xl bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 font-bold text-base shadow-lg shadow-primary/20 group">
                      Send Message
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>
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

          {/* Depot Table */}
          <div className="relative rounded-3xl border border-border/30 bg-gradient-to-br from-card via-card to-muted/30 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

            <div className="relative z-10 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/30">
                    <th className="text-left p-5 font-bold text-xs uppercase tracking-wider text-muted-foreground">Depot</th>
                    <th className="text-left p-5 font-bold text-xs uppercase tracking-wider text-muted-foreground">Address</th>
                    <th className="text-left p-5 font-bold text-xs uppercase tracking-wider text-muted-foreground">Mobile Number</th>
                  </tr>
                </thead>
                <tbody>
                  {depots.map((d, i) => (
                    <tr key={d.name} className={`border-t border-border/20 hover:bg-muted/30 transition-colors ${i % 2 === 0 ? "" : "bg-muted/10"}`}>
                      <td className="p-5 font-semibold whitespace-nowrap">
                        <div className="flex items-center gap-2.5">
                          <div className="h-7 w-7 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                            <Building2 className="h-3.5 w-3.5 text-accent" />
                          </div>
                          {d.name}
                        </div>
                      </td>
                      <td className="p-5 text-muted-foreground">{d.address}</td>
                      <td className="p-5 whitespace-nowrap">
                        <a href={`tel:${d.phone.replace(/\s/g, "")}`} className="text-primary hover:text-primary/80 transition-colors font-medium">
                          {d.phone}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
