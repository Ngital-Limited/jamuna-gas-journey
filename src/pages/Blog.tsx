import { useMemo, useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Newspaper, Search, Calendar, Clock, ArrowRight, Tag,
  Camera, Video, FileText, Mail,
} from "lucide-react";

const categories = ["All", "News", "Safety", "Sustainability", "Press Release", "Events"] as const;
type Category = typeof categories[number];

type Post = {
  id: string;
  title: string;
  excerpt: string;
  category: Exclude<Category, "All">;
  date: string;
  readTime: string;
  author: string;
  gradient: string;
  icon: typeof Newspaper;
  featured?: boolean;
};

const posts: Post[] = [
  {
    id: "1",
    title: "Jamuna Gas Wins Best LPG Brand Award 2025",
    excerpt: "Recognized for customer trust, safety standards, and nationwide distribution excellence at the annual Bangladesh Brand Forum.",
    category: "News",
    date: "May 14, 2026",
    readTime: "4 min",
    author: "Press Office",
    gradient: "from-primary via-primary/80 to-accent",
    icon: Newspaper,
    featured: true,
  },
  {
    id: "2",
    title: "5 Essential LPG Safety Tips Every Household Should Know",
    excerpt: "From cylinder placement to leak detection — practical advice from our HSE team to keep your family safe.",
    category: "Safety",
    date: "April 28, 2026",
    readTime: "6 min",
    author: "HSE Team",
    gradient: "from-accent to-primary",
    icon: FileText,
  },
  {
    id: "3",
    title: "Reducing Emissions: Our Net-Zero Roadmap to 2040",
    excerpt: "How Jamuna Gas is investing in cleaner fuel, telemetry, and plant efficiency to shrink our carbon footprint.",
    category: "Sustainability",
    date: "April 10, 2026",
    readTime: "8 min",
    author: "Sustainability Office",
    gradient: "from-emerald-500 to-primary",
    icon: FileText,
  },
  {
    id: "4",
    title: "New Bottling Line Commissioned at Bogra Plant",
    excerpt: "A 30% capacity boost — designed to meet rising demand across the northern region.",
    category: "Press Release",
    date: "March 22, 2026",
    readTime: "3 min",
    author: "Corporate Affairs",
    gradient: "from-primary to-accent",
    icon: Newspaper,
  },
  {
    id: "5",
    title: "Inside Our Annual Dealer Conference 2026",
    excerpt: "Highlights, awards, and the announcement of our 2026 partner incentive program.",
    category: "Events",
    date: "March 5, 2026",
    readTime: "5 min",
    author: "Marketing Team",
    gradient: "from-accent via-accent/80 to-primary",
    icon: Camera,
  },
  {
    id: "6",
    title: "How Auto Gas is Cutting Fuel Costs for Bangladeshi Drivers",
    excerpt: "A deep dive into LPG-powered mobility — savings, environmental impact, and conversion options.",
    category: "News",
    date: "February 18, 2026",
    readTime: "7 min",
    author: "Editorial Team",
    gradient: "from-primary to-emerald-500",
    icon: Video,
  },
];

const Blog = () => {
  const [active, setActive] = useState<Category>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const matchCat = active === "All" || p.category === active;
      const matchQ = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [active, query]);

  const featured = filtered.find((p) => p.featured) ?? filtered[0];
  const rest = filtered.filter((p) => p.id !== featured?.id);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-gradient-to-b from-foreground to-foreground/95 text-background overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white border border-white/20 backdrop-blur-sm mb-6">
            <Newspaper className="h-4 w-4 text-accent" /> Blog & Media
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5 tracking-tight">News, Stories & Updates</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            The latest from Jamuna Gas — company news, safety guides, sustainability initiatives, and press releases.
          </p>
        </div>
      </section>

      {/* Filters + Search */}
      <section className="py-12 border-b border-border/30 sticky top-[72px] bg-background/80 backdrop-blur-md z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`text-sm font-medium rounded-full px-4 py-2 border transition-all ${
                    active === c
                      ? "bg-foreground text-background border-foreground"
                      : "bg-card text-muted-foreground border-border/40 hover:border-foreground/40 hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-80">
              <Search className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles..."
                maxLength={100}
                className="h-11 pl-10 rounded-full border-border/40"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured + Grid */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-muted-foreground">No articles match your search.</p>
            </div>
          ) : (
            <>
              {/* Featured */}
              {featured && (
                <article className="mb-16 group cursor-pointer">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 relative aspect-[16/10] rounded-3xl overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${featured.gradient}`} />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_60%)]" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <featured.icon className="h-32 w-32 text-white/30 group-hover:scale-110 transition-transform duration-700" strokeWidth={1.2} />
                      </div>
                      <span className="absolute top-5 left-5 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 text-xs font-semibold text-white">
                        Featured
                      </span>
                    </div>
                    <div className="lg:col-span-5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">
                        <Tag className="h-3 w-3" />
                        {featured.category}
                      </span>
                      <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 group-hover:text-primary transition-colors">
                        {featured.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">{featured.excerpt}</p>
                      <div className="flex items-center gap-5 text-xs text-muted-foreground/70 mb-6">
                        <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{featured.date}</span>
                        <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{featured.readTime} read</span>
                        <span>By {featured.author}</span>
                      </div>
                      <Button variant="premium" className="btn-shine h-11 px-6">
                        Read Story
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </article>
              )}

              {/* Grid */}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                  {rest.map((p) => (
                    <article key={p.id} className="group cursor-pointer rounded-2xl border border-border/40 bg-card overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`} />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_60%)]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p.icon className="h-16 w-16 text-white/30 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.2} />
                        </div>
                        <span className="absolute top-4 left-4 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 text-[10px] font-semibold text-white uppercase tracking-wider">
                          {p.category}
                        </span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {p.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{p.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground/70">
                          <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3" />{p.date}</span>
                          <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" />{p.readTime}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto rounded-3xl border border-border/30 bg-card p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />
            <div className="h-14 w-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
              <Mail className="h-7 w-7 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Stay in the Loop</h2>
            <p className="text-muted-foreground mb-7 max-w-lg mx-auto">Get the latest news, safety tips, and sustainability updates from Jamuna Gas — straight to your inbox.</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input type="email" placeholder="your@email.com" maxLength={255} className="h-12 rounded-xl flex-1" />
              <Button type="submit" variant="premium" className="btn-shine h-12 px-6">
                Subscribe
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </form>
            <p className="text-xs text-muted-foreground/60 mt-4">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;