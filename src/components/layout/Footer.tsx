import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import logoLight from "@/assets/domadinka-logo-light.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src={logoLight} 
                alt="Domadinka z.s." 
                className="h-16 md:h-20 w-auto mix-blend-lighten"
              />
            </Link>
            <p className="text-background/80 text-sm leading-relaxed">
              Creating magical summer memories for children through fun, learning, and adventure.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="text-background/80 hover:text-primary transition-colors text-sm">
                About Us
              </Link>
              <Link to="/gallery" className="text-background/80 hover:text-primary transition-colors text-sm">
                Photo Gallery
              </Link>
              <Link to="/registration" className="text-background/80 hover:text-primary transition-colors text-sm">
                Registration
              </Link>
              <Link to="/contact" className="text-background/80 hover:text-primary transition-colors text-sm">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <a href="mailto:info@domadinka.cz" className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@domadinka.cz
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                (123) 456-7890
              </a>
              <div className="flex items-start gap-3 text-background/80 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Sladkovského 2757/38<br />Východní Předměstí, 326 00 Plzeň</span>
              </div>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-background/60 text-xs">
              Stay connected for camp updates, photos, and special announcements!
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-background/60">
            <p>© {new Date().getFullYear()} Domadinka z.s. All rights reserved.</p>
            <p>A nonprofit organization dedicated to enriching children's lives.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
