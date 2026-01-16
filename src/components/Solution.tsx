import { Check, ArrowRight, Database, Mail, BarChart3, Settings } from "lucide-react";

const solutions = [
  { icon: Database, label: "CRM systems" },
  { icon: Mail, label: "Automated email & WhatsApp campaigns" },
  { icon: Settings, label: "Event-to-enrollment funnels" },
  { icon: BarChart3, label: "Analytics dashboards" },
  { icon: Check, label: "Conversion optimization" },
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
            End-to-End Conversion Systems That Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            I build systems that turn:
          </p>
          
          {/* Flow visualization */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-lg md:text-xl font-display font-semibold text-foreground mb-8">
            <span>Leads</span>
            <ArrowRight className="w-5 h-5 text-accent" />
            <span>Conversations</span>
            <ArrowRight className="w-5 h-5 text-accent" />
            <span>Enrollments</span>
            <ArrowRight className="w-5 h-5 text-accent" />
            <span className="text-accent">Revenue</span>
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
