import { Button } from "@/components/ui/button";
import { Phone, Mail, Rocket, Shield } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-subtle">
      <div className="container-narrow text-center">
        <div className="inline-flex items-center gap-3 justify-center mb-6">
          <Rocket className="w-6 h-6 text-highlight" />
          <span className="text-muted-foreground font-medium">+</span>
          <Shield className="w-6 h-6 text-accent" />
        </div>
        
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Ready for Lead Generation & Worry-Free Compliance?
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          Grow your business with strategic marketing while we ensure you stay 
          fully compliant. Focus on scaling, we'll handle the rest.
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
          <span className="text-sm italic">"Driving Growth, Ensuring Compliance."</span>
          <span className="text-sm italic">"Your Partner in Marketing & Governance."</span>
          <span className="text-sm italic">"Scale Confidently. Stay Protected."</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;