import { Button } from "@/components/ui/button";
import { Phone, Mail, Shield } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-subtle">
      <div className="container-narrow text-center">
        <div className="inline-flex items-center gap-3 justify-center mb-6">
          <Shield className="w-6 h-6 text-accent" />
        </div>
        
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Ready for Worry-Free Compliance?
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          Let us handle your regulatory compliance so you can focus on growing 
          your business without legal risks.
        </p>

        <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
          Contact Us
        </h3>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <a href="mailto:info@ecoreadvisory.com">
              <Mail className="w-5 h-5" />
              info@ecoreadvisory.com
            </a>
          </Button>
          <Button variant="outline" size="xl" className="border-2" asChild>
            <a href="tel:+917404775788">
              <Phone className="w-5 h-5" />
              Call: +91-7404775788
            </a>
          </Button>
        </div>

        {/* Taglines */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground">
          <span className="text-sm italic">"Ensuring Compliance, Enabling Growth."</span>
          <span className="text-sm italic">"Your Partner in Regulatory Governance."</span>
          <span className="text-sm italic">"Stay Protected. Scale Confidently."</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
