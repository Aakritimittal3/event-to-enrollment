import { ClipboardCheck, Settings, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    step: "Step 1",
    title: "Free Compliance Audit",
    description: "We thoroughly assess your current compliance status and identify gaps.",
    items: ["Review existing licenses", "Identify compliance gaps", "Assess penalty exposure", "Documentation review"],
  },
  {
    icon: Settings,
    step: "Step 2",
    title: "System Implementation",
    description: "We set up your complete compliance infrastructure and processes.",
    items: ["Obtain missing licenses", "Create compliance calendar", "Set up filing workflows", "Establish documentation"],
  },
  {
    icon: TrendingUp,
    step: "Step 3",
    title: "Ongoing Management",
    description: "We manage your compliance on a monthly basis with regular monitoring.",
    items: ["Timely statutory filings", "Inspection support", "Monthly reporting", "Continuous optimization"],
  },
];

const HowItWorks = () => {
  return (
    <section id="process" className="section-padding bg-gradient-subtle">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, proven process to achieve and maintain compliance
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