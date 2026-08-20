import Layout from "@/components/Layout";
import { Sparkles, Award } from "lucide-react";
const shakiraAsset = "/media/shakira-noor-chowdhury.webp";
const belayetAsset = "/media/md-belayet-hossain.webp";
const yasinAsset = "/media/mohammad-yasin-arafat.webp";
const fahimAsset = "/media/fahim-shahrier.webp";
const fahmidAsset = "/media/fahmid-shahrier.png";

const boardMembers = [
  {
    name: "Shakira Noor Chowdhury",
    title: "Chairman",
    image: shakiraAsset,
    heading: "Chairman's Note",
    message: "At Jamuna Gas, we believe that energy is the backbone of progress, and our mission is to ensure its accessibility in the most sustainable and responsible manner. Through continuous investment in cutting-edge technology, infrastructure, and safety standards, we have built a robust distribution network that delivers LPG to households and industries with unmatched efficiency.\n\nAs we look toward the future, our focus remains on excellence, sustainability, and growth. We are committed to expanding our reach, adopting eco-friendly solutions, and enhancing the customer experience through innovation and service excellence.",
  },
  {
    name: "Md. Belayet Hossain",
    title: "Managing Director, JSJVL",
    image: belayetAsset,
    heading: "Managing Director's Address",
    message: "In today's fast-evolving world, energy plays a vital role in driving progress, and we at Jamuna Gas are devoted to ensuring that our customers receive the highest quality LPG products with the utmost safety and convenience. Our state-of-the-art bottling, marketing, and distribution network is built on the foundation of trust and excellence, enabling us to meet the growing energy demands of Bangladesh.\n\nOur skilled manpower, cutting-edge technology, and efficient distribution network, we are committed to reaching every doorstep across the nation very soon. Our goal is to ensure that clean, efficient, and affordable energy is accessible to all, contributing to economic growth and a better quality of life.",
  },
  {
    name: "Mohammad Yasin Arafat",
    title: "Director, JSJVL",
    image: yasinAsset,
    heading: "Director's Message",
    message: "I am proud to lead a company that stands at the forefront of delivering reliable and high-quality LPG solutions through Jamuna Gas. Our commitment to safety, sustainability, and customer satisfaction drives everything we do.\n\nTo our customers, thank you for choosing Jamuna Gas as your trusted partner. We are dedicated to providing you with the best products and services, ensuring your homes and businesses run smoothly and efficiently.\n\nTo our dedicated employees, your hard work and passion are the backbone of our success. Together, we are building a brighter, safer, and more sustainable future for everyone.",
  },
  {
    name: "Fahim Shahrier",
    title: "Director, JSJVL",
    image: fahimAsset,
    heading: "Director's Message",
    message: "I would like to take this opportunity to express my heartfelt gratitude to each and every one of you for your hard work, dedication, and commitment to the success of Jamuna Gas. It is your unwavering passion and continuous efforts that have helped us grow and become a leader in the LPG industry.\n\nAs we move forward, let's continue to strive for excellence in everything we do. Our success relies on each team member's contribution, and together, we will reach new heights.\n\nLet's stay focused, stay motivated, and continue to work as a united team to achieve our goals and deliver exceptional service to our customers.",
  },
  {
    name: "Fahmid Shahrier",
    title: "Director, JSJVL",
    image: fahmidAsset,
    heading: "Director's Message",
    message: "I would like to express my heartfelt appreciation to every member of the Jamuna Gas family. Your dedication, professionalism, and unwavering commitment have been the driving force behind our growth and success. Through your hard work, we have earned the trust and confidence of customers across the country.\n\nEvery achievement reflects your collective effort. As we move forward, let us continue to uphold our core values of integrity, quality, innovation, and customer satisfaction. Together, with unity and determination, I am confident we will achieve even greater milestones and strengthen our position as a leader in the LPG industry.\n\nThank you for your loyalty, commitment, and continued support. I am proud to lead such an exceptional team and look forward to a bright and successful future together.",
  },
];

const BoardOfDirectors = () => (
  <Layout>
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
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">Board of Directors</h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-white/40">
            Meet the leadership team driving Jamuna Gas toward excellence and sustainable growth.
          </p>
          <div className="mx-auto mt-6 h-1 w-20 bg-gradient-to-r from-accent to-primary rounded-full" />
        </div>

        <div className="space-y-20">
          {boardMembers.map((member, i) => (
            <div key={member.name} className="relative group">
              <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-white/[0.01] overflow-hidden backdrop-blur-sm shadow-2xl shadow-black/20">
                <div className="h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className={`lg:col-span-4 flex flex-col items-center justify-center p-10 lg:p-16 relative ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-accent/[0.03]" />
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

                  <div className={`lg:col-span-8 p-8 lg:p-16 flex flex-col justify-center ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="h-10 w-1.5 bg-gradient-to-b from-accent via-primary to-accent/30 rounded-full" />
                      <h2 className="text-2xl md:text-3xl font-bold text-white">{member.heading}</h2>
                    </div>
                    <div className="space-y-5">
                      {member.message.split("\n\n").map((para, j) => (
                        <p key={j} className="text-white/50 leading-[1.8] text-[15px]">{para}</p>
                      ))}
                    </div>
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
  </Layout>
);

export default BoardOfDirectors;