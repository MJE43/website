import { Link } from "react-router-dom";
import {
  Clock,
  Mail,
  MapPin,
  Phone,
  MessageSquare,
  Star,
  Calendar,
  Zap,
  Shield,
  Users,
  FileText,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/sections/ContactForm";
import { ContactFAQ } from "@/components/sections/contact-faq";
import { ContactTestimonials } from "@/components/sections/contact-testimonials";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-20 dark:from-gray-900 dark:to-gray-950 md:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-[20%] top-[20%] h-[600px] w-[600px] rounded-full bg-purple-600/5 blur-3xl"></div>
          <div className="absolute -right-[20%] bottom-[20%] h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-3xl"></div>
        </div>

        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-border bg-background px-4 py-2 text-sm">
              <MessageSquare className="mr-2 h-4 w-4 text-purple-600" />
              <span className="font-medium">
                Free Consultation • No Obligation
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Ready to Grow Your{" "}
              <span className="text-gradient">Local Business</span>?
            </h1>

            <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
              Let's discuss how we can help you get more customers, increase
              revenue, and dominate your local market with a professional
              website.
            </p>

            {/* Quick Contact Options */}
            <div className="mb-12 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white"
              >
                <a href="tel:+15551234567">
                  <Phone className="mr-2 h-4 w-4" />
                  Call (555) 123-4567
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact-form">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Send a Message
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {trustIndicators.map((indicator) => (
                <div key={indicator.label} className="text-center">
                  <div className="mb-2 inline-flex rounded-full bg-gradient-to-br from-purple-600/10 to-blue-600/10 p-3">
                    <indicator.icon className="h-6 w-6 text-gradient" />
                  </div>
                  <div className="text-2xl font-bold text-gradient md:text-3xl">
                    {indicator.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {indicator.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Multiple Ways to{" "}
              <span className="text-gradient">Get in Touch</span>
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Choose the method that works best for you. We're here to help
              however you prefer to communicate.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method) => (
              <Card
                key={method.title}
                className="group text-center transition-all hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex rounded-full bg-gradient-to-br from-purple-600/10 to-blue-600/10 p-4">
                    <method.icon className="h-8 w-8 text-gradient" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{method.title}</h3>
                  <p className="mb-4 text-muted-foreground">
                    {method.description}
                  </p>
                  <div className="mb-4 font-medium">{method.contact}</div>
                  <div className="text-sm text-muted-foreground">
                    {method.availability}
                  </div>
                  {method.action && (
                    <div className="mt-4">
                      <Button asChild variant="outline" size="sm">
                        {method.action.href.startsWith("#") ||
                        method.action.href.startsWith("tel:") ||
                        method.action.href.startsWith("mailto:") ? (
                          <a href={method.action.href}>{method.action.label}</a>
                        ) : (
                          <Link to={method.action.href}>
                            {method.action.label}
                          </Link>
                        )}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section id="contact-form" className="bg-muted/30 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Get Your <span className="text-gradient">Free Quote</span>
              </h2>
              <p className="mt-4 text-xl text-muted-foreground">
                Tell us about your business and we'll create a custom proposal
                showing exactly how we can help you grow.
              </p>
            </div>

            {/* What to Expect */}
            <div className="mb-12 grid gap-6 md:grid-cols-3">
              {expectations.map((expectation) => (
                <div key={expectation.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-600/10 to-blue-600/10">
                      <expectation.icon className="h-5 w-5 text-gradient" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">{expectation.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {expectation.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Visit Our <span className="text-gradient">Office</span>
              </h2>
              <p className="mb-8 text-xl text-muted-foreground">
                While we work with businesses nationwide, we're based in the
                heart of Tech City. Stop by for a coffee and let's discuss your
                project in person.
              </p>

              <div className="space-y-6">
                {officeInfo.map((info) => (
                  <div key={info.label} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-600/10 to-blue-600/10">
                        <info.icon className="h-5 w-5 text-gradient" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium">{info.label}</h3>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button asChild variant="outline">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-xl border border-border bg-muted">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Webundance office location"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-xl border border-border bg-background p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">
                      Located in
                    </div>
                    <div className="text-lg font-bold">Tech City, CA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time & Process */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              What Happens <span className="text-gradient">Next</span>?
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Here's exactly what you can expect after you reach out to us.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {nextSteps.map((step, index) => (
              <Card key={step.title} className="text-center">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-xl font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                  <p className="mb-4 text-muted-foreground">
                    {step.description}
                  </p>
                  <div className="text-sm font-medium text-purple-600 dark:text-purple-400">
                    {step.timeline}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">
              <Clock className="mr-2 h-4 w-4" />
              Average response time: Under 2 hours during business hours
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              What Clients Say About{" "}
              <span className="text-gradient">Working With Us</span>
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Don't just take our word for it - here's what business owners say
              about our communication and service.
            </p>
          </div>

          <div className="mt-16">
            <ContactTestimonials />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Questions Before{" "}
              <span className="text-gradient">Getting Started</span>?
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Here are answers to the most common questions we get from local
              business owners.
            </p>
          </div>

          <div className="mt-16">
            <ContactFAQ />
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 md:py-28">
        <div className="container">
          <Card className="overflow-hidden border-orange-200 dark:border-orange-800">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center md:flex-row md:text-left">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30 md:mb-0 md:mr-6">
                  <Zap className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-2xl font-bold">
                    Need Help Right Away?
                  </h3>
                  <p className="text-muted-foreground">
                    If your website is down or you're having an emergency with
                    your current site, we offer priority support for urgent
                    issues.
                  </p>
                </div>
                <div className="mt-6 md:ml-6 md:mt-0">
                  <Button
                    asChild
                    className="bg-orange-600 text-white hover:bg-orange-700"
                  >
                    <a href="tel:+15551234567">
                      <Phone className="mr-2 h-4 w-4" />
                      Emergency Line
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-xl">
            <div className="relative px-6 py-12 sm:px-12 sm:py-16 md:px-16 md:py-20 lg:px-20">
              <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>

              <div className="relative mx-auto max-w-2xl text-center text-white">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Ready to Transform Your Business?
                </h2>
                <p className="mt-6 text-xl text-blue-100">
                  Join hundreds of local businesses that have grown their
                  customer base with our proven web solutions.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <div className="rounded-lg bg-white/10 p-4 text-center">
                    <div className="text-2xl font-bold">Free</div>
                    <div className="text-sm text-blue-100">Consultation</div>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4 text-center">
                    <div className="text-2xl font-bold">24 Hours</div>
                    <div className="text-sm text-blue-100">Response Time</div>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4 text-center">
                    <div className="text-2xl font-bold">30-Day</div>
                    <div className="text-sm text-blue-100">Guarantee</div>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-purple-600 hover:bg-white/90"
                  >
                    <a href="#contact-form">Get Your Free Quote</a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white/10"
                  >
                    <a href="tel:+15551234567">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Data
const trustIndicators = [
  { value: "500+", label: "Businesses Helped", icon: Users },
  { value: "24 Hours", label: "Response Time", icon: Clock },
  { value: "30-Day", label: "Money Back", icon: Shield },
  { value: "4.9/5", label: "Client Rating", icon: Star },
];

const contactMethods = [
  {
    title: "Phone Call",
    description: "Speak directly with our team for immediate answers",
    contact: "(555) 123-4567",
    availability: "Mon-Fri 9AM-6PM PST",
    icon: Phone,
    action: { href: "tel:+15551234567", label: "Call Now" },
  },
  {
    title: "Email",
    description: "Send us a detailed message about your project",
    contact: "contact@webundance.com",
    availability: "Response within 24 hours",
    icon: Mail,
    action: { href: "mailto:contact@webundance.com", label: "Send Email" },
  },
  {
    title: "Contact Form",
    description: "Fill out our form for a custom quote",
    contact: "Get personalized proposal",
    availability: "Response within 2 hours",
    icon: MessageSquare,
    action: { href: "#contact-form", label: "Fill Form" },
  },
  {
    title: "Schedule Call",
    description: "Book a convenient time for a consultation",
    contact: "30-minute strategy session",
    availability: "Available 7 days a week",
    icon: Calendar,
    action: { href: "/schedule", label: "Book Call" },
  },
];

const expectations = [
  {
    title: "Quick Response",
    description: "We'll get back to you within 2 hours during business hours",
    icon: Clock,
  },
  {
    title: "Custom Proposal",
    description:
      "Receive a detailed proposal tailored to your specific business needs",
    icon: FileText,
  },
  {
    title: "Free Consultation",
    description:
      "30-minute strategy call to discuss your goals and answer questions",
    icon: MessageSquare,
  },
];

const officeInfo = [
  {
    label: "Address",
    value: "123 Innovation Drive, Tech City, CA 94103",
    icon: MapPin,
  },
  {
    label: "Phone",
    value: "(555) 123-4567",
    icon: Phone,
  },
  {
    label: "Email",
    value: "contact@webundance.com",
    icon: Mail,
  },
  {
    label: "Office Hours",
    value: "Monday - Friday: 9:00 AM - 6:00 PM PST",
    icon: Clock,
  },
];

const nextSteps = [
  {
    title: "We Respond",
    description:
      "Our team reviews your information and responds with initial thoughts and next steps.",
    timeline: "Within 2 hours",
  },
  {
    title: "Strategy Call",
    description:
      "We schedule a 30-minute call to discuss your business goals and how we can help.",
    timeline: "Within 24 hours",
  },
  {
    title: "Custom Proposal",
    description:
      "You receive a detailed proposal with timeline, pricing, and expected results.",
    timeline: "Within 48 hours",
  },
];
