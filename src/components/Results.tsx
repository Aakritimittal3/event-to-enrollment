import { Shield, TrendingUp, Clock, Megaphone, Users, Target } from "lucide-react";

const results = [
  {
    icon: Shield,
    stat: "100%",
    label: "Compliance Rate",
    description: "Clients achieve full statutory compliance",
  },
  {
    icon: Clock,
    stat: "90%",
    label: "Time Saved",
    description: "Reduction in compliance management effort",
  },
  {
    icon: Megaphone,
    stat: "3x",
    label: "Brand Visibility",
    description: "Average increase in B2B brand awareness",
  },
  {
    icon: Target,
    stat: "40%",
    label: "Lead Growth",
    description: "Boost in qualified lead generation",
  },
];

const Results = () => {
  return (
    <section id="results" className="section-padding bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-wide relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Results You Can Expect
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Our clients experience peace of mind, compliance improvements, and measurable marketing growth
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result) => (
            <div
              key={result.label}
              className="text-center p-8 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <result.icon className="w-7 h-7 text-accent" />
              </div>
              <div className="font-display text-3xl md:text-4xl font-bold text-accent mb-2">
                {result.stat}
              </div>
              <div className="text-lg font-semibold mb-1">{result.label}</div>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                {result.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;