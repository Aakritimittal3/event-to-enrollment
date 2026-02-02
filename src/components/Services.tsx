import { Shield, Megaphone, Users, Palette, Mail, FileText, Leaf, Scale, Building2, Zap, Gauge, Briefcase, Check, Globe, Target } from "lucide-react";

const complianceServices = [
  { name: "Labour Compliances", icon: Users },
  { name: "Environmental Approvals", icon: Leaf },
  { name: "IPR", icon: Scale },
  { name: "Building Compliances", icon: Building2 },
  { name: "Electrical & Fire Safety", icon: Zap },
  { name: "Legal Metrology", icon: Gauge },
  { name: "Business & Startup Registrations", icon: Briefcase },
];

const marketingServices = [
  { name: "ICP Building", icon: Users },
  { name: "Branding", icon: Palette },
  { name: "IT Event Participation Support", icon: FileText },
  { name: "Professional B2B Content", icon: FileText },
  { name: "Email Marketing", icon: Mail },
  { name: "Website Development", icon: Globe },
  { name: "Lead Generation", icon: Target },
];

const Services = () => {
  return (
    <section id="services" aria-labelledby="services-heading" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 id="services-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive compliance and marketing solutions tailored to your business needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Compliance Services */}
          <div className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-accent/30 transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-accent" />
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Shield className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Legal & Regulatory
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Compliance Services
                  </h3>
                </div>
              </div>

              <ul className="space-y-3">
                {complianceServices.map((service) => (
                  <li key={service.name} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-highlight shrink-0 mt-0.5" />
                    <span className="text-foreground">{service.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Marketing Services */}
          <div className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-accent/30 transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-highlight to-accent" />
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-highlight/10 flex items-center justify-center">
                  <Megaphone className="w-7 h-7 text-highlight" />
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Growth & Outreach
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Marketing Services
                  </h3>
                </div>
              </div>

              <ul className="space-y-3">
                {marketingServices.map((service) => (
                  <li key={service.name} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-highlight shrink-0 mt-0.5" />
                    <span className="text-foreground">{service.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
