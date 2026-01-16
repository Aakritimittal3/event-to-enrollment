import { Search, Settings, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "Step 1",
    title: "Free Growth Audit",
    description: "We review your current lead flow, follow-up process, CRM systems, and event conversion journey.",
    items: ["Lead flow analysis", "Follow-up process review", "CRM assessment", "Event conversion audit"],
  },
  {
    icon: Settings,
    step: "Step 2",
    title: "System Design",
    description: "I build your complete conversion infrastructure tailored to your business needs.",
    items: ["CRM pipelines", "Email + WhatsApp automation", "Conversion workflows", "Reporting dashboards"],
  },
  {
    icon: TrendingUp,
    step: "Step 3",
    title: "Monthly Growth Partner",
    description: "I manage optimization, reporting, and continuous improvements on a monthly basis.",
    items: ["Performance optimization", "Regular reporting", "Strategy adjustments", "Ongoing support"],
  },
];

const HowItWorks = () => {
  return (
    <section id="process" className="section-padding bg-gradient-subtle">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, proven process to transform your lead conversion
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-px bg-border z-0" />
              )}
              
              <div className="relative bg-card rounded-2xl p-8 border border-border h-full">
                {/* Step number */}
                <div className="absolute -top-4 left-8 px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-semibold">
                  {step.step}
                </div>

                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 mt-2">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {step.description}
                </p>

                <ul className="space-y-2">
                  {step.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
