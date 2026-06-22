import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Briefcase, MapPin, Clock, ArrowRight, Send, CheckCircle,
  Heart, TrendingUp, GraduationCap, Users, Shield, Sparkles,
} from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: "Career Growth", desc: "Structured paths, mentorship, and promotion from within." },
  { icon: GraduationCap, title: "Learning & Development", desc: "Continuous training programs and certification support." },
  { icon: Heart, title: "Health & Wellness", desc: "Comprehensive medical coverage for you and your family." },
  { icon: Shield, title: "Safe Workplace", desc: "ISO 45001 certified — safety is built into everything we do." },
  { icon: Users, title: "Inclusive Culture", desc: "Diverse teams, collaborative environment, and respect for all." },
  { icon: Sparkles, title: "Performance Rewards", desc: "Competitive pay, bonuses, and recognition for great work." },
];

const jobs = [
  { title: "Plant Operations Manager", location: "Kaligonj Plant", type: "Full-time", dept: "Operations", desc: "Lead plant operations, ensure safety compliance, and drive production efficiency." },
  { title: "Sales Executive — LPG", location: "Dhaka", type: "Full-time", dept: "Sales", desc: "Develop dealer networks, manage territory sales, and grow market share." },
  { title: "Safety & Compliance Officer", location: "Mongla Plant", type: "Full-time", dept: "HSE", desc: "Monitor HSE standards, conduct audits, and lead safety training programs." },
  { title: "Logistics Coordinator", location: "Bogra Plant", type: "Full-time", dept: "Supply Chain", desc: "Coordinate cylinder distribution, optimize routes, and manage fleet operations." },
  { title: "Customer Service Representative", location: "Dhaka HQ", type: "Full-time", dept: "Support", desc: "Handle customer inquiries, resolve issues, and ensure excellent service quality." },
  { title: "Maintenance Engineer", location: "Cumilla Plant", type: "Full-time", dept: "Engineering", desc: "Maintain bottling equipment, troubleshoot issues, and ensure uptime." },
];

const Career = () => {
  const applicationSchema = z.object({
    name: z.string().trim().min(2, "Name is required").max(100),
    email: z.string().trim().email("Invalid email address").max(255),
    phone: z.string().trim().min(6, "Phone is required").max(20),
    position: z.string().trim().min(2, "Position is required").max(150),
    experience: z.string().trim().min(1, "Experience is required").max(50),
    resumeUrl: z.string().trim().url("Provide a valid link to your resume").max(500),
    coverLetter: z.string().trim().max(2000).optional(),
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    resumeUrl: "",
    coverLetter: "",
  });

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    const result = applicationSchema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.errors[0]?.message ?? "Please complete the form");
      return;
    }
    toast.success("Application received! Our HR team will reach out if there's a match.");
    setForm({ name: "", email: "", phone: "", position: "", experience: "", resumeUrl: "", coverLetter: "" });
  };

  const selectPosition = (title: string) => {
    setForm((f) => ({ ...f, position: title }));
    const el = document.getElementById("apply");
    el?.scrollIntoView({ behavior: "smooth" });
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
            <Briefcase className="h-4 w-4 text-accent" /> Join Our Team
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5 tracking-tight">Build Your Career at Jamuna Gas</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Be part of Bangladesh's pioneering LPG company. Help us deliver safe, reliable energy to millions while growing your career.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="premium" className="btn-shine h-12 px-7">
              <a href="#openings">
                View Open Positions
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </Button>
            <Button asChild variant="outline" className="h-12 px-7 rounded-xl border-white/40 text-white bg-white/10 hover:bg-white/20 hover:border-white/60 backdrop-blur-sm">
              <a href="#apply">Submit Application</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="section-badge"><Heart className="h-4 w-4" /> Why Jamuna Gas</span>
            <h2 className="section-title">A Workplace That Invests in You</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              We've spent over two decades building more than a business — we've built a team that's proud to power Bangladesh.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="relative rounded-2xl border border-border/40 bg-card p-7 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-60" />
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <b.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-28 bg-muted/30 relative overflow-hidden scroll-mt-24">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="section-badge"><Briefcase className="h-4 w-4" /> Open Positions</span>
            <h2 className="section-title">Current Openings</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Explore opportunities across our plants, depots, and corporate office.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-6xl mx-auto">
            {jobs.map((job) => (
              <div key={job.title} className="relative rounded-2xl border border-border/40 bg-card p-7 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-60" />
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="inline-block text-[10px] uppercase tracking-[0.2em] font-bold text-accent mb-2">{job.dept}</span>
                    <h3 className="text-lg font-bold leading-snug">{job.title}</h3>
                  </div>
                  <div className="h-11 w-11 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{job.desc}</p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-5">
                  <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{job.location}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{job.type}</span>
                </div>
                <Button onClick={() => selectPosition(job.title)} variant="outline" size="sm" className="rounded-lg group/btn">
                  Apply for this role
                  <ArrowRight className="h-3.5 w-3.5 ml-1.5 transition-transform group-hover/btn:translate-x-0.5" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-28 relative overflow-hidden scroll-mt-24">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <span className="section-badge"><Send className="h-4 w-4" /> Apply Now</span>
            <h2 className="section-title">Submit Your Application</h2>
            <p className="section-subtitle max-w-2xl mx-auto">Don't see the right role? Send us your details and we'll keep you in mind for future openings.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
            {/* Side info */}
            <div className="lg:col-span-5 space-y-5">
              <div className="rounded-3xl border border-border/40 bg-card p-8">
                <h3 className="text-xl font-bold mb-5">What Happens Next</h3>
                <ol className="space-y-4">
                  {[
                    { t: "Review", d: "Our HR team reviews every application within 5 business days." },
                    { t: "Initial Screening", d: "Shortlisted candidates are contacted for a phone interview." },
                    { t: "Interview", d: "Meet the hiring team — in-person or virtual." },
                    { t: "Offer", d: "If it's a match, we'll send you an offer to join the team." },
                  ].map((s, i) => (
                    <li key={s.t} className="flex items-start gap-4">
                      <div className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-primary to-accent text-white text-sm font-bold flex items-center justify-center">{i + 1}</div>
                      <div>
                        <p className="font-semibold text-sm">{s.t}</p>
                        <p className="text-sm text-muted-foreground">{s.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="flex flex-wrap gap-3">
                {["Equal Opportunity", "Confidential", "All Levels Welcome"].map((b) => (
                  <div key={b} className="flex items-center gap-2 bg-muted/60 rounded-full px-4 py-2">
                    <CheckCircle className="h-3.5 w-3.5 text-primary" />
                    <span className="text-xs font-medium text-muted-foreground">{b}</span>
                  </div>
                ))}
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
                      <h3 className="text-2xl font-bold">Application Form</h3>
                      <p className="text-sm text-muted-foreground">Tell us about yourself</p>
                    </div>
                  </div>

                  <form onSubmit={handleApply} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="c-name" className="text-sm font-semibold">Full Name <span className="text-accent">*</span></Label>
                        <Input id="c-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" maxLength={100} className="h-12 rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="c-email" className="text-sm font-semibold">Email <span className="text-accent">*</span></Label>
                        <Input id="c-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" maxLength={255} className="h-12 rounded-xl" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="c-phone" className="text-sm font-semibold">Phone <span className="text-accent">*</span></Label>
                        <Input id="c-phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+880 1XXX-XXXXXX" maxLength={20} className="h-12 rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="c-exp" className="text-sm font-semibold">Years of Experience <span className="text-accent">*</span></Label>
                        <Input id="c-exp" value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })} placeholder="e.g. 3 years" maxLength={50} className="h-12 rounded-xl" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="c-position" className="text-sm font-semibold">Position Applying For <span className="text-accent">*</span></Label>
                      <Input id="c-position" value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} placeholder="e.g. Sales Executive — LPG" maxLength={150} className="h-12 rounded-xl" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="c-resume" className="text-sm font-semibold">Resume Link <span className="text-accent">*</span></Label>
                      <Input id="c-resume" value={form.resumeUrl} onChange={(e) => setForm({ ...form, resumeUrl: e.target.value })} placeholder="Google Drive, Dropbox, or LinkedIn URL" maxLength={500} className="h-12 rounded-xl" />
                      <p className="text-xs text-muted-foreground/70">Make sure the link is publicly accessible.</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="c-cover" className="text-sm font-semibold">Cover Letter <span className="text-muted-foreground/60 font-normal">(optional)</span></Label>
                      <Textarea id="c-cover" value={form.coverLetter} onChange={(e) => setForm({ ...form, coverLetter: e.target.value })} placeholder="Tell us why you'd be a great fit..." rows={5} maxLength={2000} className="rounded-xl resize-none" />
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

export default Career;