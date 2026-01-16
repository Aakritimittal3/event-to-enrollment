import { Check, Clock, Users, Handshake, Settings2 } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "10+ Years Experience",
    description: "Deep expertise in marketing, campaigns, databases & events",
  },
  {
    icon: Users,
    title: "Education & Community Specialist",
    description: "Focused on education-driven and community-based growth",
  },
  {
    icon: Check,
    title: "No Long Contracts",
    description: "Flexible monthly retainers — stay because it works",
  },
  {
    icon: Handshake,
    title: "Partner-First Mindset",
    description: "I grow when you grow — true alignment of interests",
  },
  {
    icon: Settings2,
    title: "Systems Over Manpower",
    description: "Scalable automation beats manual labor every time",
  },
];

const WhyWorkWithMe = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Work With Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A decade of experience, focused entirely on helping you grow
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`p-6 rounded-xl border border-border bg-card hover:shadow-md transition-all duration-300 ${
                index === 4 ? "lg:col-start-2" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
