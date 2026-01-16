import { X, AlertTriangle } from "lucide-react";

const problems = [
  "Leads come in but aren't followed up properly",
  "Events end without enrollments or conversions",
  "No CRM or visibility into what's working",
  "Counselors & teams work manually",
  "Revenue depends too much on individuals",
];

const Problem = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Problem Statement */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4" />
              The Problem
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Most Education Institutes & Event Organizers Face the Same Issues
            </h2>
            <div className="space-y-4">
              {problems.map((problem) => (
                <div
                  key={problem}
                  className="flex items-start gap-3 p-4 rounded-lg bg-destructive/5 border border-destructive/10"
                >
                  <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-foreground">{problem}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Impact */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/10 mb-6">
                  <span className="font-display text-4xl font-bold text-destructive">
                    30-50%
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  Potential Revenue Lost
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Without proper systems in place, education institutes and
                  event organizers lose nearly half of their potential revenue
                  due to poor follow-ups and manual processes.
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/5 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-highlight/5 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
