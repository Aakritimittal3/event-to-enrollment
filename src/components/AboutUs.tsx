import { Lightbulb, Zap, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const coreValues = [
  {
    icon: Lightbulb,
    title: "Clarity",
    description: "We communicate in plain language. No legal jargon or marketing buzzwords, just clear, actionable guidance.",
  },
  {
    icon: Zap,
    title: "Agility",
    description: "We operate at startup speed, adapting quickly to your evolving needs as a growing SME.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We approach your compliance with the same rigor we'd apply to our own business, and we measure our success by your growth.",
  },
];

const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Where Strategy Meets Security
          </h2>
        </div>

        {/* Our Story */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
            Our Story
          </h3>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              In today's B2B world, companies face a constant challenge: balancing aggressive growth with robust governance. On one hand, there's the push to scale, building a compelling brand, defining your ideal customer profile, and executing high-impact marketing. On the other, there's the critical need for compliance, navigating labor laws, securing environmental approvals, and protecting intellectual property rights.
            </p>
            <p>
              Our firm was founded to bridge this gap. With one founder bringing deep marketing expertise and the other combining legal advocacy with extensive compliance experience, we recognized a fundamental truth: <span className="text-foreground font-medium">marketing strategies only succeed when built on a solid legal foundation</span>. You cannot confidently promote a brand that isn't legally protected, nor can you scale a workforce that isn't compliant with regulations.
            </p>
            <p>
              We established this firm to be more than just another service provider. We're a <span className="text-foreground font-medium">strategic partner</span> who secures your business foundation while helping you expand your market reach.
            </p>
          </div>
        </div>

        {/* Why Partner With Us */}
        <div className="mb-20">
          <h3 className="font-display text-2xl font-bold text-foreground mb-4 text-center">
            Why Partner With Us?
          </h3>
          <div className="space-y-4 text-muted-foreground text-center max-w-3xl mx-auto">
            <p>
              Most firms specialize in either marketing or legal services. Lawyers typically don't understand brand positioning, while marketing agencies rarely grasp the nuances of labor law and compliance requirements.
            </p>
            <p>
              We bring together the best of both worlds, combining strategic marketing expertise with deep regulatory knowledge to deliver a truly integrated service experience.
            </p>
            <p>
              When you partner with us, you get a dedicated team that understands your business holistically. We don't just solve problems in isolation; we ensure that your marketing initiatives and compliance obligations work together seamlessly.
            </p>
            <p className="text-foreground font-medium">
              From protecting your brand identity to ensuring your workforce is fully compliant, we've got you covered at every step of your growth journey.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="font-display text-2xl font-bold text-foreground mb-10 text-center">
            Our Core Values
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-xl bg-primary text-primary-foreground"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-display text-lg font-semibold mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-primary-foreground/80 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="font-display text-2xl font-bold text-foreground mb-6">
            Ready to Build a Business Built to Last?
          </h3>
          <Button size="lg" className="gap-2">
            Meet With Our Team
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
