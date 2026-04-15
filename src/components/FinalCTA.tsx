import { useState, FormEvent } from "react";
import { Phone, Mail, Shield, Send } from "lucide-react";

const FORMSPREE_URL = "https://formspree.io/f/xojyvgpn";

const FinalCTA = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto text-left mb-10 space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="w-full rounded-md border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <textarea
            name="message"
            placeholder="How can we help you?"
            rows={4}
            required
            className="w-full rounded-md border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
          />
          <div className="text-center">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-white hover:bg-accent/90 transition-colors disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              {status === "submitting" ? "Sending…" : "Send Message"}
            </button>
          </div>
          {status === "success" && (
            <p className="text-center text-sm text-green-600">Thanks! We'll get back to you shortly.</p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-red-600">Something went wrong. Please try again.</p>
          )}
        </form>

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
