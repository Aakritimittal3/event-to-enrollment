import { Button } from "@/components/ui/button";
import { FileSearch, Shield, ClipboardCheck, AlertTriangle, ArrowRight, Check } from "lucide-react";

const auditItems = [
  { icon: ClipboardCheck, label: "Existing licenses & registrations" },
  { icon: Shield, label: "Compliance gap analysis" },
  { icon: AlertTriangle, label: "Risk & penalty exposure" },
  { icon: FileSearch, label: "Documentation review" },
];

const deliverables = [
  "Priority action roadmap",
  "Missed compliance opportunities",
  "Cost-saving recommendations",
];

const FreeOffer = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-lg">
          <div className="grid lg:grid-cols-2">
            {/* Left - Offer Details */}
            <div className="p-8 lg:p-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
                <FileSearch className="w-4 h-4" />
                Free Offer
              </div>

              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Get Your Free Compliance Audit
              </h2>

              <p className="text-muted-foreground mb-6">
                Discover your compliance gaps, risk exposure, and get a clear
                roadmap to full compliance, absolutely free.
              </p>

              <div className="mb-8">
                <p className="text-sm font-medium text-foreground mb-4">
                  We'll analyze:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {auditItems.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                    >
                      <item.icon className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-sm text-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-foreground mb-4">
                  And give you:
                </p>
                <ul className="space-y-2">
                  {deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-highlight" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right - CTA */}
            <div className="bg-gradient-hero p-8 lg:p-12 flex flex-col justify-center items-center text-center">
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
                Ready for worry-free compliance?
              </h3>
              <p className="text-primary-foreground/70 mb-8 max-w-sm">
                Book your free audit today and get complete visibility into your
                compliance status.
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">
                  Claim Your Free Audit
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <p className="text-sm text-primary-foreground/50 mt-4">
                No commitment required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeOffer;