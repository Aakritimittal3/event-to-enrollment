import { X, AlertTriangle, TrendingDown, Shield, Megaphone } from "lucide-react";

const complianceProblems = [
  "Struggling to keep up with changing regulations",
  "Facing penalties due to compliance gaps",
  "No dedicated team for statutory requirements",
];

const marketingProblems = [
  "Inconsistent brand messaging and positioning",
  "No clear lead generation strategy",
  "Missing opportunities at industry events",
];

const Problem = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            The Challenge
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Growing Pains That Hold SMEs Back
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most businesses struggle to balance growth with governance—leaving them vulnerable on both fronts.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Compliance Problems */}
          <div className="bg-card rounded-2xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">
                Compliance Gaps
              </h3>
            </div>
            <div className="space-y-3">
              {complianceProblems.map((problem) => (
                <div
                  key={problem}
                  className="flex items-start gap-3 p-3 rounded-lg bg-destructive/5 border border-destructive/10"
                >
                  <X className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{problem}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Marketing Problems */}
          <div className="bg-card rounded-2xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                <Megaphone className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">
                Marketing Struggles
              </h3>
            </div>
            <div className="space-y-3">
              {marketingProblems.map((problem) => (
                <div
                  key={problem}
                  className="flex items-start gap-3 p-3 rounded-lg bg-destructive/5 border border-destructive/10"
                >
                  <X className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{problem}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Stats */}
          <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-bold">
                The Cost of Inaction
              </h3>
            </div>
            <div className="space-y-6">
              <div className="text-center p-4 rounded-xl bg-primary-foreground/5">
                <div className="font-display text-3xl font-bold text-accent mb-1">₹50L+</div>
                <div className="text-sm text-primary-foreground/70">Average penalty exposure</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 rounded-lg bg-primary-foreground/5">
                  <div className="text-xl font-bold">70%</div>
                  <div className="text-xs text-primary-foreground/70">SMEs face issues</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-primary-foreground/5">
                  <div className="text-xl font-bold">3x</div>
                  <div className="text-xs text-primary-foreground/70">Slower growth</div>
                </div>
              </div>
              <p className="text-sm text-primary-foreground/70 text-center">
                Without proper systems, businesses lose both money and market share.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;