import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Compass, Trophy, Award, Shield, Leaf, Globe, Calendar } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";

const values = [
  { icon: Target, title: "Mission", desc: "Continuously strive to meet customer needs by offering the best possible service, price, and support." },
  { icon: Eye, title: "Vision", desc: "To lead the LP gas sector in Bangladesh by operating and providing a high standard of excellence." },
  { icon: Compass, title: "Objective", desc: "Provide safe, reliable, and efficient LPG solutions while ensuring sustainability and customer satisfaction." },
  { icon: Trophy, title: "Goal", desc: "Ensure customer satisfaction by consistently providing the best product and service. Develop and promote environmentally friendly technologies." },
];

const certifications = [
  { icon: Award, title: "ISO 9001:2015", desc: "Quality Management System certified by Bureau Veritas (UKAS) — a testament to relentless pursuit of quality." },
  { icon: Leaf, title: "ISO 14001", desc: "Environmental Management System — upholding global standards in environmental management." },
  { icon: Shield, title: "ISO 45001:2018", desc: "Occupational Health & Safety — globally recognized framework for managing workplace risks." },
  { icon: Globe, title: "WLPGA Member", desc: "World LPG Association — connecting with global leaders for safe, sustainable LPG solutions." },
];

const timeline = [
  { year: "1998", event: "Jamuna Spacetech Joint Venture Limited (JSJVL) incorporated under the Companies Act 1994." },
  { year: "2000", event: "Commenced operations as the first government-approved private LPG plant in Bangladesh." },
  { year: "2023", event: "Won the Best Brand Award for customer satisfaction and trust." },
  { year: "2024", event: "Entered 24th year of operations — 2 Decades Anniversary. Won Best Brand Award again." },
];

const About = () => (
  <Layout>
    <section className="relative min-h-[60vh] flex items-center justify-center">
      <img src={aboutHero} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      <div className="container mx-auto px-4 relative z-10 py-20">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">About Jamuna Gas</h1>
        <p className="text-white/70 text-lg max-w-xl">Bangladesh's pioneer in LPG — delivering energy, trust, and excellence since 2000.</p>
      </div>
    </section>

    {/* History */}
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold mb-6">Our History</h2>
        <div className="prose prose-gray max-w-none text-muted-foreground space-y-4">
          <p>Jamuna Spacetech Joint Venture Limited (JSJVL) began its operations in the Liquefied Petroleum Gas (LPG) sector in Bangladesh under the brand name <strong className="text-foreground">Jamuna Gas</strong>. The company was incorporated on August 11, 1998, under the Companies Act 1994, and commenced operations in 2000.</p>
          <p>Jamuna Gas is one of the largest companies in Bangladesh involved in LPG bulk importation, storage, bottling, marketing, and distribution. It is the first government-approved private LPG plant to operate in this sector.</p>
          <p>Since its inception, the company has achieved significant growth both internally and externally, boasting the fastest-growing network of interrelated businesses in the LPG sector. Today, Jamuna Gas serves approximately 1,500,000 customers nationwide.</p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {values.map((v) => (
            <Card key={v.title} className="border-border/60">
              <CardContent className="p-6 flex gap-4">
                <div className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-12">Company Timeline</h2>
        <div className="space-y-6">
          {timeline.map((t, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <Calendar className="h-5 w-5 text-accent-foreground" />
                </div>
                {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
              </div>
              <div className="pb-6">
                <div className="text-accent font-bold text-lg">{t.year}</div>
                <p className="text-muted-foreground">{t.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Certifications */}
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications & Memberships</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((c) => (
            <div key={c.title} className="text-center rounded-xl bg-primary-foreground/10 p-6 border border-primary-foreground/10">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/20">
                <c.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">{c.title}</h3>
              <p className="text-sm text-primary-foreground/70">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
