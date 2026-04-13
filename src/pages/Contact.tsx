import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Factory, Building2, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import contactHero from "@/assets/contact-hero.jpg";

const plants = [
  { name: "Kaligonj Plant", address: "Barihati, Sluice Gate, Kaliganj -1720", phone: "+88 01769-969496" },
  { name: "Mongla Plant", address: "14, Mongla Port Industrial Area, Mongla, Bagerhat, Khulna", phone: "+88 01769-969482" },
  { name: "Bogra Plant", address: "Dhaka Rangpur Highway, Noymile, Bogra", phone: "+88 01755-555345" },
  { name: "Cumilla Plant", address: "Anandapur, Patodda Bazar, Chauddagram, Comilla", phone: "+88 01769-969420" },
];

const depots = [
  { name: "Chittagong Office", address: "House: 05, Lane:05, Road No: 01, Block: L Halishahar Housing Estate, Chittagong", phone: "+88 01755-555382" },
  { name: "Demra Depot", address: "Bhanga Press, Demra Road, Jatrabari, Dhaka", phone: "+88 01755-555183" },
  { name: "Gazipur Depot", address: "Member Bari, Mouna, Gazipur", phone: "+88 01769-969402" },
  { name: "Barishal Depot", address: "Near Kimini Felling Station, West Rahamatpur, Barishal", phone: "+88 01755-555184" },
  { name: "Bhairab Depot", address: "Kanchan Market, Lakhimpur, Bhairab", phone: "+88 01769-969388" },
  { name: "Chittagong Depot", address: "Saltgola Crossing, Chittagong", phone: "+88 01769-969403" },
  { name: "Companigonj Depot", address: "Companigonj, Cumilla", phone: "+88 01755-555388" },
  { name: "Cumilla Depot", address: "Paduar Bazar, Comilla", phone: "+88 01769-969470" },
  { name: "Jhenidah Depot", address: "Hamdho Bypass Road, Jhenaidah", phone: "+88 01769-969488" },
  { name: "Manikganj Depot", address: "Boitora, Jagir, Manikganj", phone: "+88 01769-969385" },
  { name: "Madaripur Depot", address: "Katherpul, Daukendua, Madaripur", phone: "+88 01769-969399" },
  { name: "Mymensingh Depot", address: "Highway Filling Station, Char Kalibari, Mymensingh", phone: "+88 01769-969366" },
  { name: "Rangpur Depot", address: "Balabari, Taragonj, Rangpur", phone: "+88 01769-969377" },
  { name: "Sylhet Depot", address: "Dokkhin Surma, Bypass Road, Sylhet", phone: "+88 01769-969388" },
  { name: "Tangail Depot", address: "Gharinda, Tangail", phone: "+88 01769-969365" },
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              {[
                { icon: MapPin, title: "Corporate Address", info: "House 99, Rupayan Golden Age (2nd Floor), Gulshan Avenue, Dhaka-1212, Bangladesh" },
                { icon: Clock, title: "Opening Hours", info: "Sat–Thu: 9 am – 5 pm\nFriday: Weekend" },
                { icon: Phone, title: "Phone", info: "+880 2-9844940" },
                { icon: Mail, title: "Email", info: "info@jamunagas.com" },
              ].map((c) => (
                <Card key={c.title} className="border-border/60">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center mt-0.5">
                      <c.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium">{c.title}</div>
                      {c.info.split("\n").map((line, i) => (
                        <div key={i} className="text-sm text-muted-foreground">{line}</div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="lg:col-span-2 border-border/60">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" maxLength={100} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Your email" maxLength={255} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Your phone number" maxLength={20} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How can we help?" rows={5} maxLength={1000} />
                  </div>
                  <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Plant Addresses */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Factory className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Plant Addresses</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plants.map((p) => (
              <Card key={p.name} className="border-border/60 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-primary">{p.name}</h3>
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{p.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground shrink-0" />
                    <a href={`tel:${p.phone.replace(/\s/g, "")}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {p.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depot Addresses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Building2 className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-3xl font-bold">Depot Addresses</h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-border/60">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/70">
                  <th className="text-left p-4 font-semibold">Depot</th>
                  <th className="text-left p-4 font-semibold">Address</th>
                  <th className="text-left p-4 font-semibold">Mobile Number</th>
                </tr>
              </thead>
              <tbody>
                {depots.map((d, i) => (
                  <tr key={d.name} className={`border-t border-border/40 ${i % 2 === 0 ? "bg-background" : "bg-muted/20"}`}>
                    <td className="p-4 font-medium whitespace-nowrap">{d.name}</td>
                    <td className="p-4 text-muted-foreground">{d.address}</td>
                    <td className="p-4 whitespace-nowrap">
                      <a href={`tel:${d.phone.replace(/\s/g, "")}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {d.phone}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
