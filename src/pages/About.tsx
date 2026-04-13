import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Compass, Trophy, Award, Shield, Leaf, Globe, Calendar } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import shakiraImg from "@/assets/shakira-noor-chowdhury.jpg";
import belayetImg from "@/assets/md-belayet-hossain.jpg";
import yasinImg from "@/assets/mohammad-yasin-arafat.jpg";
import fahimImg from "@/assets/fahim-shahrier.jpg";

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
  { year: "1998", event: "Jamuna Spacetech Joint Venture Limited (JSJVL) incorporated under the Companies Act 1994." },
  { year: "2000", event: "Commenced operations as the first government-approved private LPG plant in Bangladesh." },
  { year: "2023", event: "Won the Best Brand Award for customer satisfaction and trust." },
  { year: "2024", event: "Entered 24th year of operations — 2 Decades Anniversary. Won Best Brand Award again." },
];

const boardMembers = [
  {
    name: "Shakira Noor Chowdhury",
    title: "Chairman",
    image: shakiraImg,
    heading: "Chairman's Note",
    message: "At Jamuna Gas, we believe that energy is the backbone of progress, and our mission is to ensure its accessibility in the most sustainable and responsible manner. Through continuous investment in cutting-edge technology, infrastructure, and safety standards, we have built a robust distribution network that delivers LPG to households and industries with unmatched efficiency.\n\nAs we look toward the future, our focus remains on excellence, sustainability, and growth. We are committed to expanding our reach, adopting eco-friendly solutions, and enhancing the customer experience through innovation and service excellence.",
  },
  {
    name: "Md. Belayet Hossain",
    title: "Managing Director, JSJVL",
    image: belayetImg,
    heading: "Managing Director's Address",
    message: "In today's fast-evolving world, energy plays a vital role in driving progress, and we at Jamuna Gas are devoted to ensuring that our customers receive the highest quality LPG products with the utmost safety and convenience. Our state-of-the-art bottling, marketing, and distribution network is built on the foundation of trust and excellence, enabling us to meet the growing energy demands of Bangladesh.\n\nOur skilled manpower, cutting-edge technology, and efficient distribution network, we are committed to reaching every doorstep across the nation very soon. Our goal is to ensure that clean, efficient, and affordable energy is accessible to all, contributing to economic growth and a better quality of life.",
  },
  {
    name: "Mohammad Yasin Arafat",
    title: "Director, JSJVL",
    image: yasinImg,
    heading: "Director's Message",
    message: "I am proud to lead a company that stands at the forefront of delivering reliable and high-quality LPG solutions through Jamuna Gas. Our commitment to safety, sustainability, and customer satisfaction drives everything we do.\n\nTo our customers, thank you for choosing Jamuna Gas as your trusted partner. We are dedicated to providing you with the best products and services, ensuring your homes and businesses run smoothly and efficiently.\n\nTo our dedicated employees, your hard work and passion are the backbone of our success. Together, we are building a brighter, safer, and more sustainable future for everyone.",
  },
  {
    name: "Fahim Shahrier",
    title: "Director, JSJVL",
    image: fahimImg,
    heading: "Director's Message",
    message: "I would like to take this opportunity to express my heartfelt gratitude to each and every one of you for your hard work, dedication, and commitment to the success of Jamuna Gas. It is your unwavering passion and continuous efforts that have helped us grow and become a leader in the LPG industry.\n\nAs we move forward, let's continue to strive for excellence in everything we do. Our success relies on each team member's contribution, and together, we will reach new heights.\n\nLet's stay focused, stay motivated, and continue to work as a united team to achieve our goals and deliver exceptional service to our customers.",
  },
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

    {/* Board of Directors */}
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Board of Directors</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Meet the leadership team driving Jamuna Gas toward excellence and sustainable growth.
        </p>
        <div className="space-y-20">
          {boardMembers.map((member, i) => (
            <div key={member.name} className={`grid grid-cols-1 lg:grid-cols-3 gap-10 items-start ${i % 2 !== 0 ? "lg:direction-rtl" : ""}`}>
              <div className={`flex flex-col items-center text-center ${i % 2 !== 0 ? "lg:order-3" : ""}`}>
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-primary/20 mb-4">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-primary font-medium">{member.title}</p>
              </div>
              <div className={`lg:col-span-2 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                <h3 className="text-2xl font-bold mb-4 text-primary">{member.heading}</h3>
                {member.message.split("\n\n").map((para, j) => (
                  <p key={j} className="text-muted-foreground leading-relaxed mb-4">{para}</p>
                ))}
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
