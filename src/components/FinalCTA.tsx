import { useEffect, useRef } from "react";
import { Phone, Mail, Shield } from "lucide-react";

const FinalCTA = () => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!formRef.current) return;

    const el = document.createElement("div");
    el.className = "hs-form-frame";
    el.setAttribute("data-region", "na2");
    el.setAttribute("data-form-id", "ba8b9a43-9a87-4900-b8bc-9ff540ce5256");
    el.setAttribute("data-portal-id", "245883431");
    formRef.current.appendChild(el);

    // Re-trigger HubSpot's scanner so it picks up the newly added element
    if ((window as any).hbspt?.forms?.create) {
      (window as any).hbspt.forms.create({
        region: "na2",
        portalId: "245883431",
        formId: "ba8b9a43-9a87-4900-b8bc-9ff540ce5256",
        target: `#hs-contact-form`,
      });
    }

    return () => {
      if (formRef.current) formRef.current.innerHTML = "";
    };
  }, []);

  return (
    <section id="contact" className="section-padding bg-gradient-subtle">
      <div className="container-narrow text-center">
        <div className="inline-flex items-center gap-3 justify-center mb-6">
          <Shield className="w-6 h-6 text-accent" />
        </div>
        
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Ready for Worry-Free Compliance?
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          Let us handle your regulatory compliance so you can focus on growing 
          your business without legal risks.
        </p>

        <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
          Contact Us
        </h3>

        <div
          id="hs-contact-form"
          ref={formRef}
          className="max-w-xl mx-auto text-left mb-10"
        />

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:info@ecoreadvisory.com"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="w-4 h-4" />
            info@ecoreadvisory.com
          </a>
          <a
            href="tel:+917404775788"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone className="w-4 h-4" />
            +91-7404775788
          </a>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground">
          <span className="text-sm italic">"Ensuring Compliance, Enabling Growth."</span>
          <span className="text-sm italic">"Your Partner in Regulatory Governance."</span>
          <span className="text-sm italic">"Stay Protected. Scale Confidently."</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
