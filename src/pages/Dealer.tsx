import { useMemo, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Building2, Factory, Handshake, Send, ArrowRight, CheckCircle, Store, Search, User } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { dealers, dealerDistricts } from "@/data/dealers";

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

const dealerIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  iconRetinaUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
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

const Dealer = () => {
  const applicationSchema = z.object({
    name: z.string().trim().min(2, "Name is required").max(100),
    email: z.string().trim().email("Invalid email address").max(255),
    phone: z.string().trim().min(6, "Phone is required").max(20),
    businessName: z.string().trim().min(2, "Business name is required").max(150),
    district: z.string().trim().min(2, "District is required").max(100),
    investment: z.string().trim().min(1, "Investment capacity is required").max(50),
    experience: z.string().trim().max(500).optional(),
    message: z.string().trim().max(1000).optional(),
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    district: "",
    investment: "",
    experience: "",
    message: "",
  });

  const [dealerQuery, setDealerQuery] = useState("");
  const [dealerDistrict, setDealerDistrict] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredDealers = useMemo(() => {
    const q = dealerQuery.trim().toLowerCase();
    return dealers.filter((d) => {
      const matchesDistrict = dealerDistrict === "All" || d.district === dealerDistrict;
      const matchesQuery =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.district.toLowerCase().includes(q) ||
        d.address.toLowerCase().includes(q) ||
        d.contact.toLowerCase().includes(q);
      return matchesDistrict && matchesQuery;
    });
  }, [dealerQuery, dealerDistrict]);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    const result = applicationSchema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.errors[0]?.message ?? "Please complete the form");
      return;
    }
    toast.success("Application submitted! Our team will contact you within 3 business days.");
    setForm({ name: "", email: "", phone: "", businessName: "", district: "", investment: "", experience: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-gradient-to-b from-foreground to-foreground/95 text-background overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white border border-white/20 backdrop-blur-sm mb-6">
            <Building2 className="h-4 w-4 text-accent" /> Distribution Network
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5 tracking-tight">Dealer & Depot Network</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">Our nationwide depot network ensures fast and reliable LPG delivery to every corner of Bangladesh.</p>
          <Button asChild variant="premium" className="btn-shine h-12 px-7">
            <a href="#apply">
              <Handshake className="h-4 w-4 mr-2" />
              Become a Dealer
              <ArrowRight className="h-4 w-4 ml-2" />
            </a>
          </Button>
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

          {/* Depot list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {depots.map((d) => (
              <div key={d.name} className="relative rounded-2xl border border-border/40 bg-card p-6 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-t-2xl opacity-60" />
                <div className="flex items-center gap-3 mb-4 pt-1">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Factory className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold">{d.name}</h3>
                </div>
                <div className="flex items-start gap-2 mb-3">
                  <MapPin className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{d.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground shrink-0" />
                  <a href={`tel:${d.phone.replace(/\s/g, "")}`} className="text-sm text-accent hover:text-accent/80 transition-colors font-medium">
                    {d.phone}
                  </a>
                </div>
              </div>
            ))}
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

      {/* Dealership Application */}
      {/* Dealer Network */}
      <section id="dealers" className="py-28 bg-muted/20 relative overflow-hidden scroll-mt-24">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="section-badge"><Store className="h-4 w-4" /> Authorized Dealers</span>
            <h2 className="section-title">Dealer Network</h2>
            <p className="section-subtitle">
              {dealers.length}+ authorized Jamuna Gas dealers across {dealerDistricts.length} districts — find your nearest dealer below.
            </p>
          </div>

          {/* Dealer Map */}
          <div className="relative rounded-3xl border border-border/30 overflow-hidden mb-10 shadow-xl">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary rounded-t-3xl z-[1000]" />
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
                {filteredDealers.map((d) => (
                  <Marker key={d.id} position={[d.lat, d.lng]} icon={dealerIcon}>
                    <Popup>
                      <div className="text-sm">
                        <span className="inline-block bg-green-100 text-green-700 text-[10px] font-bold uppercase px-2 py-0.5 rounded mb-1">Dealer</span>
                        <strong className="block text-base mb-1">{d.name}</strong>
                        <span className="block text-muted-foreground mb-1">{d.address || d.district}</span>
                        {d.contact && <span className="block text-muted-foreground mb-1">{d.contact}</span>}
                        {d.phone && (
                          <a href={`tel:${d.phone}`} className="text-primary font-medium">{d.phone}</a>
                        )}
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
            <div className="absolute bottom-4 left-4 z-[1000] bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border border-border/30 flex items-center gap-2 text-xs font-medium">
              <span className="inline-block w-3 h-3 rounded-full bg-green-600" />
              Dealers ({filteredDealers.length})
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={dealerQuery}
                onChange={(e) => {
                  setDealerQuery(e.target.value);
                  setVisibleCount(12);
                }}
                placeholder="Search dealer, district, address or contact person"
                className="h-12 rounded-xl pl-11"
              />
            </div>
            <select
              value={dealerDistrict}
              onChange={(e) => {
                setDealerDistrict(e.target.value);
                setVisibleCount(12);
              }}
              className="h-12 rounded-xl border border-input bg-background px-4 text-sm sm:w-56"
              aria-label="Filter dealers by district"
            >
              <option value="All">All Districts</option>
              {dealerDistricts.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          {/* Dealer list */}
          {filteredDealers.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">No dealers match your search.</p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredDealers.slice(0, visibleCount).map((d) => (
                  <div key={d.id} className="relative rounded-2xl border border-border/40 bg-card p-6 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-primary rounded-t-2xl opacity-60" />
                    <div className="flex items-start gap-3 mb-4 pt-1">
                      <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <Store className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold leading-snug">{d.name}</h3>
                        <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">{d.district}</span>
                      </div>
                    </div>
                    {d.address && (
                      <div className="flex items-start gap-2 mb-3">
                        <MapPin className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{d.address}</span>
                      </div>
                    )}
                    {d.contact && (
                      <div className="flex items-center gap-2 mb-3">
                        <User className="h-4 w-4 text-muted-foreground shrink-0" />
                        <span className="text-sm text-muted-foreground">{d.contact}</span>
                      </div>
                    )}
                    {d.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground shrink-0" />
                        <a href={`tel:${d.phone}`} className="text-sm text-accent hover:text-accent/80 transition-colors font-medium">
                          {d.phone}
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {visibleCount < filteredDealers.length && (
                <div className="text-center mt-10">
                  <Button variant="outline" className="h-12 px-7" onClick={() => setVisibleCount((c) => c + 24)}>
                    Load More Dealers ({filteredDealers.length - visibleCount} remaining)
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Dealership Application */}
      <section id="apply" className="py-28 bg-muted/30 relative overflow-hidden scroll-mt-24">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <span className="section-badge"><Handshake className="h-4 w-4" /> Partner With Us</span>
            <h2 className="section-title">Dealership Application</h2>
            <p className="section-subtitle max-w-2xl mx-auto">Join Bangladesh's most trusted LPG brand. Apply to become an authorized Jamuna Gas dealer in your area.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
            {/* Benefits */}
            <div className="lg:col-span-5 space-y-5">
              <div className="rounded-3xl border border-border/40 bg-card p-8">
                <h3 className="text-xl font-bold mb-5">Why Partner With Jamuna Gas</h3>
                <ul className="space-y-4">
                  {[
                    { t: "Trusted National Brand", d: "Over 24 years of leadership in Bangladesh's LPG market." },
                    { t: "Strong Supply Network", d: "4 bottling plants and 15+ depots ensure on-time delivery." },
                    { t: "Marketing Support", d: "Branding, signage and promotional materials provided." },
                    { t: "Competitive Margins", d: "Transparent pricing and attractive dealer commissions." },
                  ].map((b) => (
                    <li key={b.t} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm">{b.t}</p>
                        <p className="text-sm text-muted-foreground">{b.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-border/40 bg-gradient-to-br from-primary/5 to-accent/5 p-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-0.5">Prefer to call?</p>
                  <a href="tel:+88029844940" className="text-base font-bold hover:text-accent transition-colors">+880 2-9844940</a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl border border-border/30 bg-card overflow-hidden shadow-xl">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                      <Send className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Apply Now</h3>
                      <p className="text-sm text-muted-foreground">We'll respond within 3 business days</p>
                    </div>
                  </div>

                  <form onSubmit={handleApply} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="d-name" className="text-sm font-semibold">Full Name <span className="text-accent">*</span></Label>
                        <Input id="d-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" maxLength={100} className="h-12 rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="d-business" className="text-sm font-semibold">Business Name <span className="text-accent">*</span></Label>
                        <Input id="d-business" value={form.businessName} onChange={(e) => setForm({ ...form, businessName: e.target.value })} placeholder="Your company / shop name" maxLength={150} className="h-12 rounded-xl" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="d-email" className="text-sm font-semibold">Email <span className="text-accent">*</span></Label>
                        <Input id="d-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" maxLength={255} className="h-12 rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="d-phone" className="text-sm font-semibold">Phone <span className="text-accent">*</span></Label>
                        <Input id="d-phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+880 1XXX-XXXXXX" maxLength={20} className="h-12 rounded-xl" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="d-district" className="text-sm font-semibold">District / Area <span className="text-accent">*</span></Label>
                        <Input id="d-district" value={form.district} onChange={(e) => setForm({ ...form, district: e.target.value })} placeholder="e.g. Dhaka, Sylhet" maxLength={100} className="h-12 rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="d-investment" className="text-sm font-semibold">Investment Capacity (BDT) <span className="text-accent">*</span></Label>
                        <Input id="d-investment" value={form.investment} onChange={(e) => setForm({ ...form, investment: e.target.value })} placeholder="e.g. 5,00,000" maxLength={50} className="h-12 rounded-xl" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="d-experience" className="text-sm font-semibold">Business Experience <span className="text-muted-foreground/60 font-normal">(optional)</span></Label>
                      <Input id="d-experience" value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })} placeholder="e.g. 5 years in retail / LPG distribution" maxLength={500} className="h-12 rounded-xl" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="d-message" className="text-sm font-semibold">Additional Information <span className="text-muted-foreground/60 font-normal">(optional)</span></Label>
                      <Textarea id="d-message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your location, existing business, or any questions..." rows={4} maxLength={1000} className="rounded-xl resize-none" />
                    </div>

                    <Button type="submit" size="lg" variant="premium" className="w-full h-14 btn-shine text-base">
                      Submit Application
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                    <p className="text-center text-xs text-muted-foreground/60">By submitting, you agree to be contacted by Jamuna Gas regarding your application.</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dealer;