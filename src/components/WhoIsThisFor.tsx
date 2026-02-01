import { Factory, Building2, Building, Briefcase, ShoppingBag, Truck } from "lucide-react";

const audiences = [
  {
    icon: Factory,
    title: "Manufacturing Units",
    description: "Factories needing labour, environmental, and safety compliance",
  },
  {
    icon: Building2,
    title: "IT & Service Companies",
    description: "Tech firms requiring statutory and data protection compliance",
  },
  {
    icon: Building,
    title: "Real Estate & Construction",
    description: "Builders managing RERA, environmental, and labour laws",
  },
  {
    icon: Briefcase,
    title: "SMEs & Startups",
    description: "Growing businesses needing comprehensive compliance setup",
  },
  {
    icon: ShoppingBag,
    title: "Retail & Hospitality",
    description: "Shops and hotels requiring FSSAI, labour, and local permits",
  },
  {
    icon: Truck,
    title: "Logistics & Trading",
    description: "Import/export firms needing customs, GST, and trade compliance",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description: "Online businesses needing consumer protection, data privacy, and marketplace compliance",
  },
];

const WhoIsThisFor = () => {
  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Who We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            If regulatory complexity is slowing your growth or exposing you to
            risks, we're here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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