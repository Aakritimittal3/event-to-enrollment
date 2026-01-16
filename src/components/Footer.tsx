import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container-wide">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Tagline */}
          <div>
            <span className="font-display text-xl font-bold">
              ECORE<span className="text-accent">MEDIA</span>
            </span>
            <p className="text-primary-foreground/60 text-sm mt-2">
              Serving education institutes, events, and communities across Punjab
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3 md:items-center">
            <a
              href="mailto:hello@ecoremedia.com"
              className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              hello@ecoremedia.com
            </a>
            <a
              href="https://wa.me/919876543210"
              className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91-98765-43210
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 md:justify-end text-sm text-primary-foreground/60">
            <MapPin className="w-4 h-4" />
            Punjab, India
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} ECORE MEDIA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
