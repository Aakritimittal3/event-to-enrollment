import { Button } from "@/components/ui/button";
import { Check, Star, Shield } from "lucide-react";

const packages = [
  {
    name: "Compliance Essentials",
    price: "₹25K–₹50K",
    period: "/month",
    description: "For small businesses and startups",
    features: [
      "PF, ESI & PT compliance",
      "GST filing support",
      "Basic labour law compliance",
      "Compliance calendar",
      "Monthly status reports",
      "Email & phone support",
    ],
    popular: false,
  },
  {
    name: "Compliance Pro",
    price: "₹50K–₹1L",
    period: "/month",
    description: "For growing SMEs",
    features: [
      "Everything in Essentials",
      "Complete labour law management",
      "Environmental compliance",
      "License renewals & management",
      "Inspection support",
      "Dedicated compliance manager",
      "Quarterly compliance audits",
    ],
    popular: true,
  },
  {
    name: "Enterprise Compliance",
    price: "₹1L–₹2.5L",
    period: "/month",
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "Multi-location compliance",
      "Industry-specific regulations",
      "Contract labour management",
      "Vendor compliance audits",
      "Real-time compliance dashboard",
      "Board-level reporting",
      "Priority 24/7 support",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-gradient-subtle">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose a plan that fits your business size and compliance needs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-card rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-xl ${
                pkg.popular
                  ? "border-accent shadow-lg scale-105 lg:scale-110 z-10"
                  : "border-border"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-accent py-2 px-4 flex items-center justify-center gap-2">
                  <Star className="w-4 h-4 text-accent-foreground fill-current" />
                  <span className="text-sm font-semibold text-accent-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`p-8 ${pkg.popular ? "pt-14" : ""}`}>
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-5 h-5 text-accent" />
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {pkg.name}
                  </h3>
                </div>

                <div className="mb-4">
                  <span className="font-display text-3xl font-bold text-foreground">
                    {pkg.price}
                  </span>
                  <span className="text-muted-foreground">{pkg.period}</span>
                </div>

                <p className="text-muted-foreground mb-6 text-sm">
                  {pkg.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-highlight shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={pkg.popular ? "accent" : "outline"}
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <a href="#contact">Get Started</a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12">
          Need a custom solution?{" "}
          <a href="#contact" className="text-accent hover:underline">
            Contact us
          </a>{" "}
          for a tailored quote.
        </p>
      </div>
    </section>
  );
};

export default Pricing;