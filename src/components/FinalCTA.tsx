import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calendar } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-subtle">
      <div className="container-narrow text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Ready for Worry-Free Compliance?
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          Stop worrying about penalties and inspections. Let us handle your
          compliance while you focus on growing your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Calendar className="w-5 h-5" />
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="outline" size="xl" className="border-2" asChild>
            <a href="tel:+919876543210">
              <Phone className="w-5 h-5" />
              Call: +91-98765-43210
            </a>
          </Button>
        </div>

        {/* Taglines */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground">
          <span className="text-sm italic">"Simplifying Compliance, Securing Growth."</span>
          <span className="text-sm italic">"Your Partner in Regulatory Peace of Mind."</span>
          <span className="text-sm italic">"Stay Compliant. Stay Protected."</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;