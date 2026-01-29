import { Facebook, Linkedin, Mail, Phone } from "lucide-react";
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
              Expert Selective School tutoring for Victorian students. Personalised teaching dedicated to your child's success.
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
                Our Programs
              </NavLink>
              <NavLink to="/free-resources" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Free Resources
              </NavLink>
              <NavLink to="/contact#contact-form" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Book Free Consultation
              </NavLink>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contact</h3>
            <div className="space-y-3">
              <a href="tel:0491749259" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span>0491 749 259</span>
              </a>
              <a href="mailto:vmtutoring23@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span>vmtutoring23@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61584006451169"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/vm-tutoring"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white hover:bg-primary hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} VM Tutoring | ABN 56 467 425 637</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
