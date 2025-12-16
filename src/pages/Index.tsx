import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Building, 
  Hammer, 
  Package, 
  Shield, 
  Clock, 
  Award,
  ArrowRight,
  HardHat,
  Ruler,
  Warehouse
} from "lucide-react";
import { HexagonPattern, BlueprintLines } from "@/components/icons/GeometricShapes";

const features = [
  {
    icon: Shield,
    title: "Quality Assured",
    description: "All our materials and services meet the highest industry standards.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We prioritize timely project completion and material delivery.",
  },
  {
    icon: Award,
    title: "20+ Years Experience",
    description: "Trusted by hundreds of clients across residential and commercial sectors.",
  },
];

const services = [
  {
    icon: Building,
    title: "Building Construction",
    description: "Complete construction services from foundation to finishing.",
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    description: "Transform your existing spaces with expert renovation.",
  },
  {
    icon: HardHat,
    title: "Project Management",
    description: "Professional oversight ensuring projects stay on track and budget.",
  },
  {
    icon: Ruler,
    title: "Commercial Projects",
    description: "Large-scale commercial construction solutions.",
  },
];

const materials = [
  { icon: Package, name: "Cement & Concrete" },
  { icon: Warehouse, name: "Roofing Materials" },
  { icon: Building, name: "Steel & Iron" },
  { icon: Hammer, name: "Timber & Wood" },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <HexagonPattern className="absolute right-0 top-0 h-96 w-96 text-primary-foreground" />
          <BlueprintLines className="absolute left-0 bottom-0 h-80 w-80 text-primary-foreground" />
        </div>
        <div className="container-custom relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="heading-1 text-primary-foreground mb-6 animate-fade-up">
              Reliable Construction & Quality Building Materials Under One Roof
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              MeshBrago delivers excellence in construction services and premium building materials. 
              From residential homes to commercial complexes, we build with precision and integrity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Button asChild variant="accent" size="xl">
                <Link to="/contact">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-secondary py-8 md:py-12 border-b border-border">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding geometric-pattern">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">About Us</span>
              <h2 className="heading-2 text-foreground mt-2 mb-6">
                Building Excellence Since 2004
              </h2>
              <p className="body-text mb-6">
                BuildCore is a full-service construction company and building materials supplier. 
                We combine decades of industry expertise with a commitment to quality, safety, and 
                customer satisfaction.
              </p>
              <p className="body-text mb-8">
                Whether you need construction services for a new project, renovation expertise, or 
                reliable building materials, our team is equipped to deliver solutions that exceed expectations.
              </p>
              <Button asChild>
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-muted border border-border p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-6 w-full max-w-xs">
                  <div className="aspect-square rounded-xl bg-primary/10 flex items-center justify-center">
                    <Building className="h-12 w-12 text-primary" />
                  </div>
                  <div className="aspect-square rounded-xl bg-accent/10 flex items-center justify-center">
                    <Hammer className="h-12 w-12 text-accent" />
                  </div>
                  <div className="aspect-square rounded-xl bg-accent/10 flex items-center justify-center">
                    <HardHat className="h-12 w-12 text-accent" />
                  </div>
                  <div className="aspect-square rounded-xl bg-primary/10 flex items-center justify-center">
                    <Package className="h-12 w-12 text-primary" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-3xl font-bold text-accent-foreground">20+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">What We Do</span>
            <h2 className="heading-2 text-foreground mt-2">Construction Services</h2>
            <p className="body-text max-w-2xl mx-auto mt-4">
              Comprehensive construction solutions tailored to your project requirements.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl p-6 border border-border hover:shadow-md transition-all duration-300 hover:border-primary/30"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="heading-3 text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Materials Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">Building Materials</span>
              <h2 className="heading-2 text-foreground mt-2 mb-6">
                Premium Quality Materials for Every Project
              </h2>
              <p className="body-text mb-8">
                We supply a comprehensive range of construction materials from trusted manufacturers. 
                Whether you need bulk supplies for large projects or smaller quantities for repairs, 
                we have you covered.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {materials.map((material, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                    <material.icon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">{material.name}</span>
                  </div>
                ))}
              </div>
              <Button asChild>
                <Link to="/materials">
                  Browse Materials
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border p-8">
                <div className="h-full w-full rounded-xl bg-muted/50 flex items-center justify-center">
                  <div className="text-center">
                    <Warehouse className="h-16 w-16 text-primary/40 mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">Quality Materials</p>
                    <p className="text-lg font-semibold text-foreground">Bulk Supply Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-foreground py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="heading-2 text-primary-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="accent" size="xl">
                <Link to="/contact">Contact Us Today</Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/materials">View Materials</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
