import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Compass, Trophy, Calendar } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";

const values = [
  { icon: Target, title: "Mission", desc: "Continuously strive to meet customer needs by offering the best possible service, price, and support." },
  { icon: Eye, title: "Vision", desc: "To lead the LP gas sector in Bangladesh by operating and providing a high standard of excellence." },
  { icon: Compass, title: "Objective", desc: "Provide safe, reliable, and efficient LPG solutions while ensuring sustainability and customer satisfaction." },
  { icon: Trophy, title: "Goal", desc: "Ensure customer satisfaction by consistently providing the best product and service. Develop and promote environmentally friendly technologies." },
];

import iso9001 from "@/assets/iso-9001.png";
import iso14001 from "@/assets/iso-14001.png";
import iso45001 from "@/assets/iso-45001.png";
import wlpgaImg from "@/assets/wlpga.png";

const certifications = [
  { img: iso9001, title: "ISO 9001:2015", desc: "Quality Management System certified by Bureau Veritas (UKAS) — a testament to relentless pursuit of quality." },
  { img: iso14001, title: "ISO 14001", desc: "Environmental Management System — upholding global standards in environmental management." },
  { img: iso45001, title: "ISO 45001:2018", desc: "Occupational Health & Safety — globally recognized framework for managing workplace risks." },
  { img: wlpgaImg, title: "WLPGA Member", desc: "World LPG Association — connecting with global leaders for safe, sustainable LPG solutions." },
];

const timeline = [
  { year: "1998", title: "Company Founded", event: "Jamuna Spacetech Joint Venture Limited (JSJVL) incorporated under the Companies Act 1994." },
  { year: "2000", title: "Operations Began", event: "Commenced operations as the first government-approved private LPG plant in Bangladesh." },
  { year: "2023", title: "Best Brand Award", event: "Won the Best Brand Award for customer satisfaction and trust." },
  { year: "2024", title: "2 Decades Anniversary", event: "Entered 24th year of operations — 2 Decades Anniversary. Won Best Brand Award again." },
];

const About = () => (
  <Layout>
    <section className="relative min-h-[70vh] flex items-center justify-center">
      <img src={aboutHero} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="container mx-auto px-4 relative z-10 py-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white border border-white/20 backdrop-blur-sm mb-6"><Target className="h-4 w-4" /> About Us</span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">About Jamuna Gas</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">Bangladesh's pioneer in LPG — delivering energy, trust, and excellence since 2000.</p>
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

    {/* Board of Directors — Premium */}
    <section className="py-28 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/4" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] translate-y-1/3 translate-x-1/4" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[180px] -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 px-5 py-2 text-sm font-semibold text-accent mb-5 border border-accent/20 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" /> Leadership
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">Board of Directors</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-white/40">
            Meet the leadership team driving Jamuna Gas toward excellence and sustainable growth.
          </p>
          <div className="mx-auto mt-6 h-1 w-20 bg-gradient-to-r from-accent to-primary rounded-full" />
        </div>

        <div className="space-y-20">
          {boardMembers.map((member, i) => (
            <div key={member.name} className="relative group">
              {/* Glow effect behind card */}
              <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-white/[0.01] overflow-hidden backdrop-blur-sm shadow-2xl shadow-black/20">
                {/* Top accent line */}
                <div className="h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Photo side */}
                  <div className={`lg:col-span-4 flex flex-col items-center justify-center p-10 lg:p-16 relative ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-accent/[0.03]" />
                    {/* Decorative ring */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-64 md:h-64 rounded-full border border-white/[0.04]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-80 md:h-80 rounded-full border border-white/[0.02]" />

                    <div className="relative">
                      <div className="absolute -inset-3 bg-gradient-to-b from-accent/25 to-primary/25 rounded-full blur-2xl opacity-60" />
                      <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-[3px] border-white/15 shadow-2xl shadow-black/40">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white text-center mt-7">{member.name}</h3>
                    <span className="inline-flex items-center gap-1.5 mt-3 rounded-full bg-gradient-to-r from-accent/25 to-accent/15 border border-accent/25 px-5 py-1.5 text-xs font-semibold text-accent tracking-wide">
                      <Award className="h-3 w-3" />
                      {member.title}
                    </span>
                  </div>

                  {/* Message side */}
                  <div className={`lg:col-span-8 p-8 lg:p-16 flex flex-col justify-center ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="h-10 w-1.5 bg-gradient-to-b from-accent via-primary to-accent/30 rounded-full" />
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{member.heading}</h3>
                    </div>
                    <div className="space-y-5">
                      {member.message.split("\n\n").map((para, j) => (
                        <p key={j} className="text-white/50 leading-[1.8] text-[15px]">{para}</p>
                      ))}
                    </div>
                    {/* Signature line */}
                    <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-accent/15 flex items-center justify-center">
                        <span className="text-accent text-xs font-bold">{member.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="text-white/70 text-sm font-medium">{member.name}</p>
                        <p className="text-white/30 text-xs">{member.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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

    {/* Timeline — Premium Redesign */}
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-5 py-2 text-sm font-semibold text-accent mb-5">
            <Calendar className="h-4 w-4" /> Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Company Timeline</h2>
          <p className="max-w-xl mx-auto mt-4 text-muted-foreground text-lg">
            Key milestones in our journey of powering Bangladesh.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Center line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-primary/30 to-transparent md:-translate-x-px" />

          <div className="space-y-12 md:space-y-16">
            {timeline.map((t, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Content card */}
                <div className={`md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-4 md:text-right" : "md:pl-4 md:text-left"} ml-16 md:ml-0`}>
                  <div className="group relative rounded-2xl border border-border/50 bg-card p-6 md:p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                      <span className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                        {t.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{t.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.event}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-6 md:left-1/2 top-6 md:top-8 -translate-x-1/2 z-10">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-accent/20 rounded-full blur-md" />
                    <div className="relative h-4 w-4 rounded-full bg-gradient-to-br from-accent to-primary border-[3px] border-background shadow-lg" />
                  </div>
                </div>

                {/* Spacer for other side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>

          {/* End dot */}
          <div className="absolute left-6 md:left-1/2 -bottom-2 -translate-x-1/2">
            <div className="h-3 w-3 rounded-full bg-muted-foreground/20 border-2 border-background" />
          </div>
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
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-white p-2">
                <img src={c.img} alt={c.title} className="h-14 w-auto object-contain" />
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
