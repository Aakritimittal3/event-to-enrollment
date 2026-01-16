import { TrendingUp, Target, Zap, Eye } from "lucide-react";

const results = [
  {
    icon: TrendingUp,
    stat: "25-60%",
    label: "Improvement in lead-to-enrollment conversions",
  },
  {
    icon: Target,
    stat: "2-3×",
    label: "Better ROI from events",
  },
  {
    icon: Zap,
    stat: "Faster",
    label: "Follow-ups & better counselor productivity",
  },
  {
    icon: Eye,
    stat: "Clear",
    label: "Visibility into revenue pipelines",
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
            Clients typically see significant improvements across all metrics
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
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                {result.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
