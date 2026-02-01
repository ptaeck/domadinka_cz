import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/domadinka-logo.png";

// Links always visible in header
const mainNavLinks = [
  { to: "/registration", label: "Přihláška" },
  { to: "/contact", label: "Kontakt" },
];

// Additional links for mobile menu
const allNavLinks = [
  { to: "/", label: "Domů" },
  { to: "/about", label: "O nás" },
  { to: "/gallery", label: "Galerie" },
  { to: "/registration", label: "Přihláška" },
  { to: "/contact", label: "Kontakt" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="Domadinka z.s." 
              className="h-12 md:h-16 w-auto mix-blend-multiply"
            />
          </Link>

          {/* Always Visible Navigation */}
          <nav className="flex items-center gap-1">
            {mainNavLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Menu Toggle - always visible */}
            <button
              className="p-2 ml-1 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Přepnout menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </nav>
        </div>

        {/* Navigation Menu - Full menu */}
        {isMenuOpen && (
          <nav className="pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-2">
              {allNavLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    location.pathname === link.to
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
