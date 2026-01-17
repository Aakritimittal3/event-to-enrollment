import { Check, ArrowRight, Shield, FileCheck, BarChart3, Clock } from "lucide-react";

const solutions = [
  { icon: FileCheck, label: "Comprehensive compliance audits" },
  { icon: Shield, label: "Statutory filing & documentation" },
  { icon: Clock, label: "Compliance calendar & reminders" },
  { icon: BarChart3, label: "Real-time compliance dashboards" },
  { icon: Check, label: "Monthly reporting & reviews" },
];

const Solution = () => {
  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-highlight/10 text-highlight text-sm font-medium mb-6">
            <Check className="w-4 h-4" />
            The Solution
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Your Complete Compliance Partner
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            We build end-to-end compliance systems that transform chaos into clarity:
          </p>
          
          {/* Flow visualization */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-lg md:text-xl font-display font-semibold text-foreground mb-8">
            <span>Assessment</span>
            <ArrowRight className="w-5 h-5 text-accent" />
            <span>Implementation</span>
            <ArrowRight className="w-5 h-5 text-accent" />
            <span>Monitoring</span>
            <ArrowRight className="w-5 h-5 text-accent" />
            <span className="text-accent">Compliance</span>
          </div>
        </div>

        {/* Solution grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {solutions.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <span className="font-medium text-foreground">{item.label}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground">
          <span className="font-semibold text-foreground">All managed for you</span>{" "}
          on a monthly retainer.
        </p>
      </div>
    </section>
  );
};

export default Solution;