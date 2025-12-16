import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Package,
  Layers,
  Home,
  Wrench,
  Droplets,
  Zap,
  PaintBucket,
  TreeDeciduous,
  ArrowRight,
  CheckCircle2,
  Truck,
  Shield,
  BadgePercent,
} from "lucide-react";
import { BlueprintLines } from "@/components/icons/GeometricShapes";

const categories = [
  {
    icon: Package,
    title: "Cement & Concrete",
    description: "Premium cement, ready-mix concrete, and masonry products.",
    items: ["Portland Cement", "Ready-Mix Concrete", "Concrete Blocks", "Mortar Mix", "Grout"],
  },
  {
    icon: Layers,
    title: "Blocks & Bricks",
    description: "Durable building blocks for structural and decorative applications.",
    items: ["Hollow Blocks", "Solid Blocks", "Clay Bricks", "Interlocking Pavers", "Decorative Blocks"],
  },
  {
    icon: Home,
    title: "Roofing Materials",
    description: "Complete roofing solutions for residential and commercial buildings.",
    items: ["Metal Roofing Sheets", "Asphalt Shingles", "Clay Tiles", "Polycarbonate Sheets", "Gutters & Fascia"],
  },
  {
    icon: Wrench,
    title: "Steel & Iron",
    description: "Structural steel and iron products for robust construction.",
    items: ["Reinforcement Bars", "Steel Beams", "Iron Rods", "Wire Mesh", "Metal Fasteners"],
  },
  {
    icon: TreeDeciduous,
    title: "Timber & Wood",
    description: "Quality timber products for framing and finishing.",
    items: ["Structural Timber", "Plywood Sheets", "MDF Boards", "Hardwood Flooring", "Treated Lumber"],
  },
  {
    icon: PaintBucket,
    title: "Paints & Finishes",
    description: "Interior and exterior paints, coatings, and finishes.",
    items: ["Interior Paint", "Exterior Paint", "Wood Stains", "Primers", "Waterproofing Coatings"],
  },
  {
    icon: Droplets,
    title: "Plumbing Materials",
    description: "Pipes, fittings, and fixtures for all plumbing needs.",
    items: ["PVC Pipes", "Copper Fittings", "Water Tanks", "Valves", "Drainage Systems"],
  },
  {
    icon: Zap,
    title: "Electrical Materials",
    description: "Wiring, fixtures, and electrical components.",
    items: ["Electrical Cables", "Conduits", "Switch Boxes", "Panel Boards", "Lighting Fixtures"],
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "All materials sourced from certified manufacturers with quality assurance.",
  },
  {
    icon: Truck,
    title: "Bulk Delivery",
    description: "Efficient logistics for bulk orders with timely delivery to your site.",
  },
  {
    icon: BadgePercent,
    title: "Competitive Pricing",
    description: "Best prices for bulk purchases and long-term partnerships.",
  },
];

export default function Materials() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <BlueprintLines className="absolute left-0 bottom-0 h-80 w-80 text-primary-foreground" />
        </div>
        <div className="container-custom relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="heading-1 text-primary-foreground mb-6">
              Building Materials & Supplies
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Premium quality construction materials from trusted suppliers. 
              Everything you need for your building project under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-secondary py-8 border-b border-border">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Product Categories
            </span>
            <h2 className="heading-2 text-foreground mt-2">Our Material Range</h2>
            <p className="body-text max-w-2xl mx-auto mt-4">
              Browse our comprehensive selection of construction materials organized by category.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl border border-border p-6 hover:shadow-md transition-all duration-300 hover:border-primary/30"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="heading-3 text-foreground mb-2">{category.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Orders Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                For Contractors & Businesses
              </span>
              <h2 className="heading-2 text-foreground mt-2 mb-6">
                Bulk Supply & Trade Accounts
              </h2>
              <p className="body-text mb-6">
                We specialize in bulk material supply for construction companies, contractors, 
                and developers. Enjoy competitive pricing, priority delivery, and dedicated 
                account management.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Volume discounts on bulk orders",
                  "Flexible payment terms for trade accounts",
                  "Direct site delivery available",
                  "Dedicated account manager",
                  "Priority stock reservation",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link to="/contact">
                  Inquire About Bulk Orders
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border p-8 flex items-center justify-center">
                <div className="text-center">
                  <Truck className="h-20 w-20 text-primary/30 mx-auto mb-4" />
                  <p className="text-2xl font-bold text-foreground">Bulk Orders</p>
                  <p className="text-muted-foreground">Delivery Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-foreground py-16">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-primary-foreground mb-4">
            Need Materials for Your Project?
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
            Contact us for pricing, availability, and delivery options. Walk-in purchases welcome at our warehouse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="accent" size="xl">
              <Link to="/contact">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="hero-outline" size="xl">
              <Link to="/contact">Visit Our Warehouse</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
