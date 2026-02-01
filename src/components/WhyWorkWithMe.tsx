import { Award, Users, Clock, Handshake, BookOpen, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Deep expertise in statutory and regulatory compliance across industries",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Expert compliance professionals assigned to your account",
  },
  {
    icon: Clock,
    title: "Proactive Approach",
    description: "We track deadlines and act before issues arise, not after",
  },
  {
    icon: BookOpen,
    title: "Industry Knowledge",
    description: "Specialists in manufacturing, IT, retail, and service sectors",
  },
  {
    icon: Handshake,
    title: "Flexible Engagement",
    description: "No long contracts, monthly retainers that work for you",
  },
  {
    icon: HeartHandshake,
    title: "Partner Mindset",
    description: "We succeed when you stay compliant and grow worry-free",
  },
];

const WhyWorkWithMe = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Ecore Compliance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for stress-free regulatory compliance
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="p-6 rounded-xl border border-border bg-card hover:shadow-md hover:border-accent/30 transition-all duration-300"
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