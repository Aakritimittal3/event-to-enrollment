import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-subtle">
      <div className="container-narrow text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Ready to convert more leads and events into revenue?
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          Let's discuss how I can help you build systems that turn your leads
          and events into predictable monthly revenue.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </Button>
          <Button variant="outline" size="xl" className="border-2" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Calendar className="w-5 h-5" />
              Book a Call
            </a>
          </Button>
        </div>

        {/* Taglines */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground">
          <span className="text-sm italic">"Where Events Become Enrollments."</span>
          <span className="text-sm italic">"From Leads to Revenue — On Autopilot."</span>
          <span className="text-sm italic">"Turning Communities into Conversion Engines."</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
