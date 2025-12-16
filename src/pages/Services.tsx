import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Building,
  Hammer,
  HardHat,
  Ruler,
  ClipboardList,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { HexagonPattern } from "@/components/icons/GeometricShapes";

const services = [
  {
    icon: Building,
    title: "Building Construction",
    description:
      "From groundbreaking to grand opening, we handle every aspect of new construction projects. Our experienced team delivers quality craftsmanship on residential and commercial buildings.",
    features: [
      "Custom home construction",
      "Multi-family residential buildings",
      "Industrial facilities",
      "Foundation and structural work",
      "Complete turnkey solutions",
    ],
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    description:
      "Transform your existing spaces with our expert renovation services. We breathe new life into aging structures while maintaining their character and improving functionality.",
    features: [
      "Interior and exterior renovations",
      "Kitchen and bathroom remodeling",
      "Structural modifications",
      "Historic building restoration",
      "Energy efficiency upgrades",
    ],
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description:
      "Our professional project management ensures your construction project stays on schedule and within budget. We coordinate all aspects from planning to completion.",
    features: [
      "Timeline and milestone tracking",
      "Budget management and reporting",
      "Contractor coordination",
      "Quality assurance inspections",
      "Risk assessment and mitigation",
    ],
  },
  {
    icon: Ruler,
    title: "Commercial Construction",
    description:
      "We specialize in large-scale commercial projects that meet the demands of modern business. From office complexes to retail spaces, we deliver excellence.",
    features: [
      "Office buildings and complexes",
      "Retail and shopping centers",
      "Warehouses and logistics facilities",
      "Educational institutions",
      "Healthcare facilities",
    ],
  },
  {
    icon: HardHat,
    title: "Residential Construction",
    description:
      "Building dream homes is our passion. We work closely with homeowners to create custom residences that reflect their lifestyle and exceed expectations.",
    features: [
      "Single-family homes",
      "Luxury custom homes",
      "Townhouses and condominiums",
      "Vacation and second homes",
      "Accessible housing solutions",
    ],
  },
  {
    icon: Users,
    title: "Consulting Services",
    description:
      "Leverage our expertise with professional consulting for your construction projects. We provide guidance on feasibility, planning, and execution strategies.",
    features: [
      "Feasibility studies",
      "Cost estimation and analysis",
      "Design review and optimization",
      "Regulatory compliance guidance",
      "Sustainability consulting",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <HexagonPattern className="absolute right-0 top-0 h-80 w-80 text-primary-foreground" />
        </div>
        <div className="container-custom relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="heading-1 text-primary-foreground mb-6">
              Our Construction Services
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Comprehensive construction solutions backed by decades of experience. 
              From planning to completion, we deliver excellence at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid gap-8 lg:gap-12 lg:grid-cols-2 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="heading-2 text-foreground mb-4">{service.title}</h2>
                  <p className="body-text mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-muted to-secondary border border-border flex items-center justify-center">
                    <div className="text-center p-8">
                      <service.icon className="h-20 w-20 text-primary/30 mx-auto mb-4" />
                      <p className="text-lg font-semibold text-foreground">{service.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              How We Work
            </span>
            <h2 className="heading-2 text-foreground mt-2">Our Process</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { step: "01", title: "Consultation", description: "We discuss your vision and requirements." },
              { step: "02", title: "Planning", description: "Detailed project plans and cost estimates." },
              { step: "03", title: "Execution", description: "Professional construction with quality focus." },
              { step: "04", title: "Delivery", description: "Final inspection and project handover." },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">{item.step}</span>
                </div>
                <h3 className="heading-3 text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-foreground py-16">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-primary-foreground mb-4">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
            Our team is ready to help bring your construction project to life. Get in touch for a free consultation.
          </p>
          <Button asChild variant="accent" size="xl">
            <Link to="/contact">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
