import { GraduationCap, Calendar, Building2, Award } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "IELTS & Study Abroad Institutes",
    description: "Convert inquiries into enrolled students systematically",
  },
  {
    icon: Building2,
    title: "Coaching Centers & Colleges",
    description: "Scale admissions with automated follow-up systems",
  },
  {
    icon: Calendar,
    title: "Event Organizers & Startup Communities",
    description: "Turn event attendees into paying customers",
  },
  {
    icon: Award,
    title: "Training Academies & Education Brands",
    description: "Build predictable revenue from your lead pipeline",
  },
];

const WhoIsThisFor = () => {
  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Who This Is For
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            If you run events or generate leads but struggle to convert them
            consistently — this is for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, index) => (
            <div
              key={item.title}
              className="group bg-card rounded-xl p-6 border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
