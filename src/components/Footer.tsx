import { Mail, Phone, MapPin, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container-wide">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-6 h-6 text-accent" />
              <span className="font-display text-xl font-bold">
                Ecore<span className="text-accent">Compliance</span>
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm mt-2">
              Your trusted partner for regulatory compliance across India
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3 md:items-center">
            <a
              href="mailto:info@ecorecompliance.com"
              className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              info@ecorecompliance.com
            </a>
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91-98765-43210
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 md:justify-end text-sm text-primary-foreground/60">
            <MapPin className="w-4 h-4" />
            Serving businesses across India
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Ecore Compliance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;