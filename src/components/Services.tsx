import { FileText, Scale, Shield, Leaf, Building2, ClipboardCheck, Check } from "lucide-react";

const statutoryServices = [
  "PF, ESI & Professional Tax compliance",
  "Shops & Establishment Act",
  "Contract labour management",
  "Statutory record maintenance",
  "Monthly filings & returns",
];

const labourServices = [
  "Factory Act compliance",
  "Minimum Wages Act adherence",
  "Payment of Wages & Bonus Act",
  "Industrial Disputes Act",
  "Maternity & welfare compliance",
];

const taxServices = [
  "GST registration & filing",
  "TDS/TCS compliance",
  "Income tax compliances",
  "Tax audit support",
  "Notice response & resolution",
];

const environmentalServices = [
  "Pollution Control Board consents",
  "Hazardous waste management",
  "Environmental clearances",
  "E-waste compliance",
  "Sustainability reporting",
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Compliance Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to your industry and business needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Statutory Compliance */}
          <div className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-accent/30 transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-accent" />
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <FileText className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Core Service
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Statutory Compliance
                  </h3>
                </div>
              </div>

              <ul className="space-y-3">
                {statutoryServices.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-highlight shrink-0 mt-0.5" />
                    <span className="text-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Labour Law Compliance */}
          <div className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-accent/30 transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-highlight to-accent" />
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-highlight/10 flex items-center justify-center">
                  <Scale className="w-7 h-7 text-highlight" />
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Specialized
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Labour Law Compliance
                  </h3>
                </div>
              </div>

              <ul className="space-y-3">
                {labourServices.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-highlight shrink-0 mt-0.5" />
                    <span className="text-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* GST & Tax Compliance */}
          <div className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-accent/30 transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-highlight" />
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Shield className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Tax Services
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    GST & Tax Compliance
                  </h3>
                </div>
              </div>

              <ul className="space-y-3">
                {taxServices.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-highlight shrink-0 mt-0.5" />
                    <span className="text-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Environmental Compliance */}
          <div className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-accent/30 transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-accent" />
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-highlight/10 flex items-center justify-center">
                  <Leaf className="w-7 h-7 text-highlight" />
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Green Compliance
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Environmental Compliance
                  </h3>
                </div>
              </div>

              <ul className="space-y-3">
                {environmentalServices.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-highlight shrink-0 mt-0.5" />
                    <span className="text-foreground">{service}</span>
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