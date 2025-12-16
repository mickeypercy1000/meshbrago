import { Link } from "react-router-dom";
import { Building2, Phone, Mail, MapPin } from "lucide-react";

const navigation = {
  company: [
    { name: "About Us", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Materials", href: "/materials" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Building Construction", href: "/services" },
    { name: "Renovation", href: "/services" },
    { name: "Project Management", href: "/services" },
    { name: "Commercial Projects", href: "/services" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <Building2 className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">MESHBRAGO ENTERPRISES LIMITED</span>
                <span className="text-xs text-primary-foreground/60">Construction & Materials</span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed mb-6">
              With over two decades of experience, MeshBrago delivers exceptional construction services and premium building materials to clients across the region.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/70">
                  KANDUYI WEBUYE ROAD,  MESHBRAGO ENTERPRISE,BUNGOMA
                </span>
              </li>
              {/* <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/70">+1 (555) 123-4567</span>
              </li> */}
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/70">info@meshgrago.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              2024 MESHBRAGO ENTERPRISES LIMITED Construction. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
