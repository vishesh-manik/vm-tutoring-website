import { NavLink } from "@/components/NavLink";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/vm-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/classes", label: "Classes & Pricing" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <NavLink to="/" className="flex-shrink-0">
            <img src={logo} alt="VM Tutoring" className="h-12 md:h-14" />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-foreground hover:text-primary transition-colors font-medium"
                activeClassName="text-primary"
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact#send-message"
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity font-semibold"
            >
              Book Free Consultation
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
                activeClassName="bg-secondary text-primary"
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact#send-message"
              onClick={() => setIsOpen(false)}
              className="block mx-4 mt-4 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:opacity-90 transition-opacity text-center font-semibold"
            >
              Book Free Consultation
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
