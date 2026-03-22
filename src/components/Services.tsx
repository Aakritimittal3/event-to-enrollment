import { Shield, Users, Leaf, Scale, Building2, Zap, Gauge, Briefcase, Check } from "lucide-react";

const complianceServices = [
  { name: "Labour Compliances", icon: Users },
  { name: "Environmental Approvals", icon: Leaf },
  { name: "IPR", icon: Scale },
  { name: "Building Compliances", icon: Building2 },
  { name: "Electrical & Fire Safety", icon: Zap },
  { name: "Legal Metrology", icon: Gauge },
  
];

const Services = () => {
  return (
    <section id="services" aria-labelledby="services-heading" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 id="services-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Compliance Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive regulatory and statutory compliance solutions tailored to your business needs
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
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
        </div>
      </div>
    </section>
  );
};

export default Services;
