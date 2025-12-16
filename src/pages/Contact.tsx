import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building,
  Truck,
  CheckCircle2,
} from "lucide-react";
import { HexagonPattern } from "@/components/icons/GeometricShapes";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["KANDUYI WEBUYE ROAD,  MESHBRAGO ENTERPRISE,BUNGOMA",],
  },
  // {
  //   icon: Phone,
  //   title: "Call Us",
  //   details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
  // },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@meshrago.com", "sales@meshrago.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 7:00 AM - 6:00 PM", "Saturday: 8:00 AM - 4:00 PM", "Sunday: Closed"],
  },
];

const inquiryTypes = [
  {
    icon: Building,
    title: "Construction Services",
    description: "For project consultations, quotes, and construction inquiries.",
  },
  {
    icon: Truck,
    title: "Materials & Bulk Orders",
    description: "For material pricing, availability, and bulk order requests.",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We will get back to you within 24 hours.",
    });

    setFormData({ name: "", phone: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <HexagonPattern className="absolute right-0 top-0 h-80 w-80 text-primary-foreground" />
        </div>
        <div className="container-custom relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="heading-1 text-primary-foreground mb-6">Contact Us</h1>
            <p className="text-lg text-primary-foreground/80">
              Get in touch with our team for construction inquiries, material orders, or general questions.
              We are here to help bring your project to life.
            </p>
          </div>
        </div>
      </section>

      {/* Inquiry Types */}
      <section className="py-12 bg-secondary border-b border-border">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-2">
            {inquiryTypes.map((type, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <type.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{type.title}</h3>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="heading-2 text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or inquiry..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="heading-2 text-foreground mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Walk-in Information */}
              <div className="mt-8 p-6 rounded-xl bg-accent/10 border border-accent/20">
                <h3 className="font-semibold text-foreground mb-4">Walk-In Purchases Welcome</h3>
                <ul className="space-y-2">
                  {[
                    "Browse our materials showroom",
                    "Get expert advice from our staff",
                    "Same-day pickup available",
                    "Trade accounts accepted",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-80 bg-muted border-t border-border">
        <div className="h-full flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-primary/30 mx-auto mb-4" />
            <p className="text-lg font-semibold text-foreground">123 Industrial Avenue</p>
            <p className="text-muted-foreground">Business District, City 12345</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
