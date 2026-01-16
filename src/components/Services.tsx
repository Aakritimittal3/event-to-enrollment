import { GraduationCap, Calendar, Check } from "lucide-react";

const educationServices = [
  "CRM setup & pipeline design",
  "Automated email + WhatsApp nurture",
  "Counselor follow-up systems",
  "Lead scoring & analytics dashboards",
  "Monthly optimization & reporting",
];

const eventServices = [
  "Event registration funnels",
  "Pre-event reminders & engagement",
  "Post-event conversion campaigns",
  "CRM integration & segmentation",
  "Sponsor-ready performance reports",
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What I Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized conversion systems for education and events
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Card */}
          <div className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-accent/30 transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-accent" />
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">
                    For Education Institutes
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Education Lead Conversion Engine
                  </h3>
                </div>
              </div>

              <ul className="space-y-3">
                {educationServices.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-highlight shrink-0 mt-0.5" />
                    <span className="text-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Events Card */}
          <div className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-accent/30 transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-highlight to-accent" />
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-highlight/10 flex items-center justify-center">
                  <Calendar className="w-7 h-7 text-highlight" />
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">
                    For Events & Communities
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Event-to-Revenue Growth System
                  </h3>
                </div>
              </div>

              <ul className="space-y-3">
                {eventServices.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-highlight shrink-0 mt-0.5" />
                    <span className="text-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
