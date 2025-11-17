import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">VM Tutoring</h3>
            <p className="text-sm text-muted-foreground">
              Expert selective school tutoring for Victorian students. Personalised teaching with proven results.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <NavLink to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </NavLink>
              <NavLink to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </NavLink>
              <NavLink to="/classes" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Classes & Pricing
              </NavLink>
              <NavLink to="/testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Testimonials
              </NavLink>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contact</h3>
            <div className="space-y-3">
              <a href="tel:+61400000000" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span>0400 000 000</span>
              </a>
              <a href="mailto:info@vmtutoring.com.au" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@vmtutoring.com.au</span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white hover:bg-primary hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} VM Tutoring. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
