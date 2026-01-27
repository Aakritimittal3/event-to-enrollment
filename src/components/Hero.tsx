import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, Megaphone } from "lucide-react";

const Hero = () => {
  const complianceHighlights = [
    "Statutory & Labour Compliance",
    "Regulatory Audits & Certifications",
  ];

  const marketingHighlights = [
    "B2B Branding & Content",
    "Lead Generation & Email Marketing",
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient orb */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container-wide relative z-10 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/80 text-sm font-medium mb-6 animate-fade-up">
            <Shield className="w-4 h-4 text-accent" />
            Trusted Business Partner
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up delay-100">
            Grow with Confidence,{" "}
            <span className="text-gradient">Stay Compliant</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 leading-relaxed max-w-2xl animate-fade-up delay-200">
            We help SMEs across India scale their business through strategic marketing 
            while ensuring complete regulatory compliance—so you can focus on growth 
            without worrying about legal risks.
          </p>

          {/* Highlights - Two columns */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10 animate-fade-up delay-300">
            {/* Compliance */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-accent mb-3">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-semibold uppercase tracking-wide">Compliance</span>
              </div>
              {complianceHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-primary-foreground/80"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            {/* Marketing */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-highlight mb-3">
                <Megaphone className="w-4 h-4" />
                <span className="text-sm font-semibold uppercase tracking-wide">Marketing</span>
              </div>
              {marketingHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-primary-foreground/80"
                >
                  <CheckCircle2 className="w-4 h-4 text-highlight" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-400">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Schedule a Call
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#services">Explore Our Services</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;