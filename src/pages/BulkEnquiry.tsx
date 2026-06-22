import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Truck, Factory, Send, ArrowRight, CheckCircle, Phone, Mail,
  Gauge, Shield, Clock, TrendingDown,
} from "lucide-react";

const benefits = [
  { icon: TrendingDown, title: "Lower Per-Unit Cost", desc: "Significant savings vs. cylinder supply at industrial volumes." },
  { icon: Gauge, title: "Uninterrupted Supply", desc: "Bulk storage on-site means zero downtime for your operations." },
  { icon: Shield, title: "ISO-Certified Safety", desc: "Installations meet international safety and engineering standards." },
  { icon: Clock, title: "Scheduled Refills", desc: "Telemetry-monitored tanks with automatic delivery scheduling." },
];

const BulkEnquiry = () => {
  const enquirySchema = z.object({
    companyName: z.string().trim().min(2, "Company name is required").max(150),
    contactName: z.string().trim().min(2, "Contact name is required").max(100),
    designation: z.string().trim().max(100).optional(),
    email: z.string().trim().email("Invalid email address").max(255),
    phone: z.string().trim().min(6, "Phone is required").max(20),
    industry: z.string().trim().min(2, "Industry is required").max(100),
    siteLocation: z.string().trim().min(2, "Site location is required").max(200),
    monthlyConsumption: z.string().trim().min(1, "Estimated consumption is required").max(50),
    tankCapacity: z.string().trim().max(100).optional(),
    timeline: z.string().trim().min(1, "Timeline is required").max(100),
    message: z.string().trim().max(1500).optional(),
  });

  const [form, setForm] = useState({
    companyName: "",
    contactName: "",
    designation: "",
    email: "",
    phone: "",
    industry: "",
    siteLocation: "",
    monthlyConsumption: "",
    tankCapacity: "",
    timeline: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = enquirySchema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.errors[0]?.message ?? "Please complete the form");
      return;
    }
    toast.success("Enquiry received! Our bulk LPG team will contact you within 24 hours.");
    setForm({
      companyName: "", contactName: "", designation: "", email: "", phone: "",
      industry: "", siteLocation: "", monthlyConsumption: "", tankCapacity: "",
      timeline: "", message: "",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-gradient-to-b from-foreground to-foreground/95 text-background overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white border border-white/20 backdrop-blur-sm mb-6">
            <Truck className="h-4 w-4 text-accent" /> Bulk LPG Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5 tracking-tight">Bulk Service Enquiry</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Industrial-scale LPG supply with on-site storage, telemetry monitoring, and scheduled refills. Tell us your needs and our engineers will design a tailored solution.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="premium" className="btn-shine h-12 px-7">
              <a href="#enquiry">
                Submit Enquiry
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </Button>
            <Button asChild variant="outline" className="h-12 px-7 rounded-xl border-white/40 text-white bg-white/10 hover:bg-white/20 hover:border-white/60 backdrop-blur-sm">
              <Link to="/products#bulk">Learn About Bulk LPG</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {benefits.map((b) => (
              <div key={b.title} className="relative rounded-2xl border border-border/40 bg-card p-6 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-60" />
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <b.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-1.5">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry" className="py-24 bg-muted/30 relative overflow-hidden scroll-mt-24">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <span className="section-badge"><Factory className="h-4 w-4" /> Industrial Enquiry</span>
            <h2 className="section-title">Tell Us About Your Requirement</h2>
            <p className="section-subtitle max-w-2xl mx-auto">Share your site details and consumption needs — our team will respond with a quote and engineering plan.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
            {/* Side info */}
            <div className="lg:col-span-4 space-y-5">
              <div className="rounded-3xl border border-border/40 bg-card p-8">
                <h3 className="text-lg font-bold mb-5">Direct Contact</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="h-11 w-11 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Bulk Sales Hotline</p>
                      <a href="tel:+88029844940" className="text-base font-bold hover:text-accent transition-colors">+880 2-9844940</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-11 w-11 shrink-0 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Email</p>
                      <a href="mailto:bulk@jamunagas.com" className="text-sm font-bold hover:text-accent transition-colors">bulk@jamunagas.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-border/40 bg-gradient-to-br from-primary/5 to-accent/5 p-7">
                <h3 className="font-bold mb-4">What you get back</h3>
                <ul className="space-y-3">
                  {[
                    "Free site assessment & feasibility",
                    "Custom engineering & tank sizing",
                    "Transparent commercial proposal",
                    "Installation & commissioning support",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              <div className="relative rounded-3xl border border-border/30 bg-card overflow-hidden shadow-xl">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                      <Send className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Enquiry Form</h3>
                      <p className="text-sm text-muted-foreground">We respond within 24 business hours</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="b-company" className="text-sm font-semibold">Company Name <span className="text-accent">*</span></Label>
                        <Input id="b-company" value={form.companyName} onChange={(e) => setForm({ ...form, companyName: e.target.value })} placeholder="Your company" maxLength={150} className="h-12 rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="b-industry" className="text-sm font-semibold">Industry <span className="text-accent">*</span></Label>
                        <Input id="b-industry" value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })} placeholder="e.g. Textile, Ceramic, Food Processing" maxLength={100} className="h-12 rounded-xl" />
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="b-name" className="text-sm font-semibold">Contact Person <span className="text-accent">*</span></Label>
                        <Input id="b-name" value={form.contactName} onChange={(e) => setForm({ ...form, contactName: e.target.value })} placeholder="Full name" maxLength={100} className="h-12 rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="b-designation" className="text-sm font-semibold">Designation <span className="text-muted-foreground/60 font-normal">(optional)</span></Label>
                        <Input id="b-designation" value={form.designation} onChange={(e) => setForm({ ...form, designation: e.target.value })} placeholder="e.g. Procurement Manager" maxLength={100} className="h-12 rounded-xl" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="b-email" className="text-sm font-semibold">Email <span className="text-accent">*</span></Label>
                        <Input id="b-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" maxLength={255} className="h-12 rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="b-phone" className="text-sm font-semibold">Phone <span className="text-accent">*</span></Label>
                        <Input id="b-phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+880 1XXX-XXXXXX" maxLength={20} className="h-12 rounded-xl" />
                      </div>
                    </div>

                    {/* Site & requirements */}
                    <div className="space-y-2">
                      <Label htmlFor="b-site" className="text-sm font-semibold">Site Location <span className="text-accent">*</span></Label>
                      <Input id="b-site" value={form.siteLocation} onChange={(e) => setForm({ ...form, siteLocation: e.target.value })} placeholder="Full address of the installation site" maxLength={200} className="h-12 rounded-xl" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="b-consumption" className="text-sm font-semibold">Estimated Monthly Consumption <span className="text-accent">*</span></Label>
                        <Input id="b-consumption" value={form.monthlyConsumption} onChange={(e) => setForm({ ...form, monthlyConsumption: e.target.value })} placeholder="e.g. 10,000 kg / month" maxLength={50} className="h-12 rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="b-tank" className="text-sm font-semibold">Preferred Tank Capacity <span className="text-muted-foreground/60 font-normal">(optional)</span></Label>
                        <Input id="b-tank" value={form.tankCapacity} onChange={(e) => setForm({ ...form, tankCapacity: e.target.value })} placeholder="e.g. 5,000 L / 10,000 L" maxLength={100} className="h-12 rounded-xl" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="b-timeline" className="text-sm font-semibold">Required Timeline <span className="text-accent">*</span></Label>
                      <Input id="b-timeline" value={form.timeline} onChange={(e) => setForm({ ...form, timeline: e.target.value })} placeholder="e.g. Within 30 days, Q3 2026" maxLength={100} className="h-12 rounded-xl" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="b-message" className="text-sm font-semibold">Additional Details <span className="text-muted-foreground/60 font-normal">(optional)</span></Label>
                      <Textarea id="b-message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Existing fuel, peak load, special requirements..." rows={5} maxLength={1500} className="rounded-xl resize-none" />
                    </div>

                    <Button type="submit" size="lg" variant="premium" className="w-full h-14 btn-shine text-base">
                      Submit Enquiry
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                    <p className="text-center text-xs text-muted-foreground/60">Your information is confidential and only used to prepare your proposal.</p>
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

export default BulkEnquiry;