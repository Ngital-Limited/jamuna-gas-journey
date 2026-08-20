import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Store, Search, User, ArrowLeft, Handshake } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { dealers, dealerDistricts } from "@/data/dealers";
const dealerPinLogo = "/media/dealer-pin-logo.png";

const dealerIcon = new L.Icon({
  iconUrl: dealerPinLogo,
  iconRetinaUrl: dealerPinLogo,
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -36],
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

const DealerNetwork = () => {
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

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-muted/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="section-badge"><Store className="h-4 w-4" /> Authorized Dealers</span>
          <h1 className="section-title">Dealer Network</h1>
          <p className="section-subtitle">
            {dealers.length}+ authorized Jamuna Gas dealers across {dealerDistricts.length} districts — find your nearest dealer below.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Button asChild variant="outline" className="h-11 px-6">
              <Link to="/dealer"><ArrowLeft className="h-4 w-4 mr-2" /> Depots &amp; Plants</Link>
            </Button>
            <Button asChild className="h-11 px-6 btn-shine">
              <Link to="/dealer#apply"><Handshake className="h-4 w-4 mr-2" /> Become a Dealer</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Dealer Map */}
          <div className="relative rounded-3xl border border-border/30 overflow-hidden mb-10 shadow-xl">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary rounded-t-3xl z-[1000]" />
            <div className="h-[560px] w-full">
              <MapContainer
                center={[23.8, 90.4]}
                zoom={9}
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
                        {d.phone && <a href={`tel:${d.phone}`} className="text-primary font-medium">{d.phone}</a>}
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
    </Layout>
  );
};

export default DealerNetwork;