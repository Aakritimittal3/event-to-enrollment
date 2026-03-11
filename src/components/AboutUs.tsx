import { Lightbulb, Zap, Heart } from "lucide-react";

const coreValues = [
  {
    icon: Lightbulb,
    title: "Clarity",
    description: "We communicate in plain language. No legal jargon, just clear, actionable guidance.",
  },
  {
    icon: Zap,
    title: "Agility",
    description: "We operate at startup speed, adapting quickly to your evolving compliance needs as a growing SME.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We approach your compliance with the same rigor we'd apply to our own business, and we measure our success by your peace of mind.",
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
            Your Trusted Compliance Partner
          </h2>
        </div>

        {/* Our Story */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
            Our Story
          </h3>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              In today's business landscape, companies face a constant challenge: staying compliant with ever-changing regulations while focusing on growth. Navigating labor laws, securing environmental approvals, protecting intellectual property, and managing statutory requirements can overwhelm even the most capable teams.
            </p>
            <p>
              Our firm was founded to solve this problem. With founders bringing combined expertise in business, strategy, and legal compliance, we recognized what most businesses miss: <span className="text-foreground font-medium">growth and governance aren't separate, they're interdependent</span>. You cannot confidently scale operations without regulatory compliance.
            </p>
            <p>
              We established this firm to be more than just another service provider. We're a <span className="text-foreground font-medium">strategic compliance partner</span> who secures your business foundation so you can focus on what you do best.
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
              Most compliance firms take a reactive approach — fixing problems after they arise. We take a proactive stance, ensuring your business stays ahead of regulatory changes and deadlines.
            </p>
            <p>
              We bring deep regulatory knowledge across labour laws, environmental regulations, IPR, building codes, fire safety, and legal metrology to deliver a truly comprehensive compliance experience.
            </p>
            <p>
              When you partner with us, you get a dedicated team that understands your business holistically. We don't just solve problems in isolation; we ensure all your compliance obligations work together seamlessly.
            </p>
            <p className="text-foreground font-medium">
              From protecting your intellectual property to ensuring your workforce is fully compliant, we've got you covered at every step of your growth journey.
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

      </div>
    </section>
  );
};

export default AboutUs;
