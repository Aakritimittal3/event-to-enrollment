import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield } from "lucide-react";

const Hero = () => {
  const highlights = [
    "Statutory & Labour Compliance",
    "GST & Tax Management",
    "Regulatory Audits & Certifications",
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
            Trusted Compliance Partner
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up delay-100">
            Navigate Regulations with{" "}
            <span className="text-gradient">Confidence & Ease</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 leading-relaxed max-w-2xl animate-fade-up delay-200">
            We help businesses across India stay compliant with statutory,
            regulatory, and industry-specific requirements through expert
            consulting, audits, and management systems.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-up delay-300">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-primary-foreground/80"
              >
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-400">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Book Free Compliance Audit
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