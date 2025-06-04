import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  FileText,
  Lightbulb,
  MessageSquare,
  Palette,
  Phone,
  Rocket,
  Search,
  Settings,
  Target,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { ResponsibilityMatrix } from "@/components/sections/responsibility-matrix";
import { ProcessTestimonials } from "@/components/sections/process-testimonials";

export default function ProcessPage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-20 dark:from-gray-900 dark:to-gray-950 md:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-[30%] top-[10%] h-[800px] w-[800px] rounded-full bg-purple-600/5 blur-3xl"></div>
          <div className="absolute -right-[30%] bottom-[10%] h-[600px] w-[600px] rounded-full bg-blue-600/5 blur-3xl"></div>
        </div>

        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-border bg-background px-4 py-2 text-sm">
              <Lightbulb className="mr-2 h-4 w-4 text-purple-600" />
              <span className="font-medium">Simple, Transparent Process</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              How Does This <span className="text-gradient">Whole Thing</span>{" "}
              Work?
            </h1>

            <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
              We know you're busy running your business. Here's exactly what
              happens when you work with us - no surprises, no confusion, just
              results.
            </p>

            <div className="mb-12 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white"
              >
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#timeline">
                  See the Timeline
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {quickStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-gradient md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              It's Actually <span className="text-gradient">Pretty Simple</span>
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              We've streamlined our process to be as easy as possible for busy
              business owners like you.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {overviewSteps.map((step, index) => (
              <Card
                key={step.title}
                className="group relative overflow-hidden border-border transition-all hover:shadow-lg"
              >
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-purple-600 to-blue-600"></div>
                <CardHeader className="pb-4">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-600/10 to-blue-600/10">
                      <step.icon className="h-6 w-6 text-gradient" />
                    </div>
                    <div className="text-2xl font-bold text-gradient">
                      {index + 1}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                  <div className="mt-4 rounded-lg bg-gradient-to-r from-purple-600/5 to-blue-600/5 p-3">
                    <div className="text-sm font-medium text-purple-700 dark:text-purple-300">
                      Timeline:
                    </div>
                    <div className="text-lg font-bold text-gradient">
                      {step.timeline}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Timeline */}
      <section id="timeline" className="bg-muted/30 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Your <span className="text-gradient">Journey</span> With Us
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              From first contact to launch day and beyond - here's exactly what
              happens and when.
            </p>
          </div>

          <div className="mt-16">
            <ProcessTimeline
              activeStep={activeStep}
              onStepChange={setActiveStep}
            />
          </div>
        </div>
      </section>

      {/* What You Do vs What We Do */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              What You Do vs. <span className="text-gradient">What We Do</span>
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              We handle the heavy lifting so you can focus on running your
              business.
            </p>
          </div>

          <div className="mt-16">
            <ResponsibilityMatrix />
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Behind the <span className="text-gradient">Scenes</span>
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              While you're running your business, here's what our team is doing
              to make your website amazing.
            </p>
          </div>

          <div className="mt-16">
            <Tabs defaultValue="design" className="w-full">
              <div className="mb-8 flex justify-center">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="design">Design</TabsTrigger>
                  <TabsTrigger value="development">Development</TabsTrigger>
                  <TabsTrigger value="optimization">Optimization</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="design">
                <div className="grid gap-8 md:grid-cols-2 lg:gap-16">
                  <div>
                    <h3 className="mb-4 text-2xl font-bold">Design Process</h3>
                    <div className="space-y-4">
                      {designProcess.map((step, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-sm font-bold text-white">
                              {index + 1}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium">{step.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-square overflow-hidden rounded-xl border border-border bg-background">
                      <img
                        src="/placeholder.svg?height=600&width=600"
                        alt="Design process"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 rounded-xl border border-border bg-background p-4 shadow-lg">
                      <Palette className="h-8 w-8 text-purple-600" />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="development">
                <div className="grid gap-8 md:grid-cols-2 lg:gap-16">
                  <div>
                    <h3 className="mb-4 text-2xl font-bold">
                      Development Process
                    </h3>
                    <div className="space-y-4">
                      {developmentProcess.map((step, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-sm font-bold text-white">
                              {index + 1}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium">{step.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-square overflow-hidden rounded-xl border border-border bg-background">
                      <img
                        src="/placeholder.svg?height=600&width=600"
                        alt="Development process"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 rounded-xl border border-border bg-background p-4 shadow-lg">
                      <Settings className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="optimization">
                <div className="grid gap-8 md:grid-cols-2 lg:gap-16">
                  <div>
                    <h3 className="mb-4 text-2xl font-bold">
                      Optimization Process
                    </h3>
                    <div className="space-y-4">
                      {optimizationProcess.map((step, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-sm font-bold text-white">
                              {index + 1}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium">{step.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-square overflow-hidden rounded-xl border border-border bg-background">
                      <img
                        src="/placeholder.svg?height=600&width=600"
                        alt="Optimization process"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 rounded-xl border border-border bg-background p-4 shadow-lg">
                      <Zap className="h-8 w-8 text-yellow-600" />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Common Concerns */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Common <span className="text-gradient">Concerns</span> Answered
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              We get it - working with a web agency can feel overwhelming. Here
              are the most common questions we hear.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {concerns.map((concern) => (
              <Card key={concern.question} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                      <concern.icon className="h-5 w-5 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        {concern.question}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{concern.answer}</p>
                  <div className="mt-4 rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-700 dark:text-green-300">
                        {concern.solution}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Testimonials */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              What Clients Say About{" "}
              <span className="text-gradient">Working With Us</span>
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Don't just take our word for it - here's what business owners say
              about our process.
            </p>
          </div>

          <div className="mt-16">
            <ProcessTestimonials />
          </div>
        </div>
      </section>

      {/* What Happens After Launch */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              What Happens <span className="text-gradient">After Launch</span>?
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Launch day is just the beginning. Here's how we continue to help
              your business grow.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {postLaunchServices.map((service) => (
              <Card key={service.title} className="text-center">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex rounded-full bg-gradient-to-br from-purple-600/10 to-blue-600/10 p-4">
                    <service.icon className="h-8 w-8 text-gradient" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                  <p className="mb-4 text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="text-sm font-medium text-purple-600 dark:text-purple-400">
                    {service.frequency}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link to="/services">
                Learn About Our Support Plans
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-xl">
            <div className="relative px-6 py-12 sm:px-12 sm:py-16 md:px-16 md:py-20 lg:px-20">
              <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>

              <div className="relative mx-auto max-w-2xl text-center text-white">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Ready to Get Started?
                </h2>
                <p className="mt-6 text-xl text-blue-100">
                  Now that you know exactly how it works, let's start building
                  your website that brings in more customers.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <div className="rounded-lg bg-white/10 p-4 text-center">
                    <div className="text-2xl font-bold">Free</div>
                    <div className="text-sm text-blue-100">Consultation</div>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4 text-center">
                    <div className="text-2xl font-bold">No</div>
                    <div className="text-sm text-blue-100">Surprises</div>
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
                    <Link to="/contact">Start Your Project</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white/10"
                  >
                    <a href="tel:+15551234567">
                      <Phone className="mr-2 h-4 w-4" />
                      Call (555) 123-4567
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
const quickStats = [
  { value: "2-4 Weeks", label: "Average Timeline" },
  { value: "3 Steps", label: "Simple Process" },
  { value: "24/7", label: "Support Included" },
  { value: "100%", label: "Satisfaction Rate" },
];

const overviewSteps = [
  {
    title: "Discovery Call",
    description:
      "We learn about your business, goals, and what you need. No technical jargon - just a friendly conversation about how we can help you get more customers.",
    timeline: "30 minutes",
    icon: MessageSquare,
  },
  {
    title: "We Build Everything",
    description:
      "Our team handles all the technical stuff while keeping you updated. You focus on your business while we create your new website.",
    timeline: "2-3 weeks",
    icon: Settings,
  },
  {
    title: "Launch & Grow",
    description:
      "We launch your site and help you start getting more customers. Plus, we provide ongoing support to keep everything running smoothly.",
    timeline: "Ongoing",
    icon: Rocket,
  },
];

const designProcess = [
  {
    title: "Research Your Industry",
    description:
      "We study your competitors and what works best for businesses like yours.",
  },
  {
    title: "Create Wireframes",
    description:
      "We map out the structure and flow of your website before adding any design.",
  },
  {
    title: "Design Mockups",
    description:
      "We create beautiful designs that reflect your brand and appeal to your customers.",
  },
  {
    title: "Get Your Approval",
    description:
      "We show you the designs and make any changes you want before moving forward.",
  },
];

const developmentProcess = [
  {
    title: "Build the Foundation",
    description:
      "We code your website using the latest technologies for speed and security.",
  },
  {
    title: "Add Functionality",
    description:
      "We integrate booking systems, contact forms, and other features you need.",
  },
  {
    title: "Test Everything",
    description:
      "We thoroughly test your site on all devices and browsers to ensure it works perfectly.",
  },
  {
    title: "Prepare for Launch",
    description:
      "We set up hosting, security, and all the technical details for a smooth launch.",
  },
];

const optimizationProcess = [
  {
    title: "Speed Optimization",
    description: "We make sure your site loads lightning-fast on all devices.",
  },
  {
    title: "SEO Setup",
    description: "We optimize your site to rank well in local search results.",
  },
  {
    title: "Mobile Optimization",
    description:
      "We ensure your site works perfectly on smartphones and tablets.",
  },
  {
    title: "Analytics Setup",
    description:
      "We install tracking so you can see how many visitors become customers.",
  },
];

const concerns = [
  {
    question: "What if I don't like the design?",
    answer: "We work with you until you're completely happy with the design.",
    solution: "Unlimited revisions during the design phase",
    icon: Palette,
  },
  {
    question: "What if it takes too long?",
    answer:
      "We stick to our timeline and keep you updated every step of the way.",
    solution: "Clear timeline with regular progress updates",
    icon: Clock,
  },
  {
    question: "What if I need changes later?",
    answer:
      "We provide ongoing support and can make updates whenever you need them.",
    solution: "Flexible support plans starting at $99/month",
    icon: Settings,
  },
  {
    question: "What if it doesn't bring in customers?",
    answer:
      "We build websites specifically designed to convert visitors into customers.",
    solution: "30-day money-back guarantee if you're not satisfied",
    icon: Target,
  },
];

const postLaunchServices = [
  {
    title: "Website Maintenance",
    description:
      "We keep your site updated, secure, and running smoothly so you don't have to worry about it.",
    frequency: "Monthly",
    icon: Settings,
  },
  {
    title: "Performance Monitoring",
    description:
      "We track your website's performance and make improvements to help you get more customers.",
    frequency: "Weekly",
    icon: Search,
  },
  {
    title: "Content Updates",
    description:
      "Need to add new services or update your information? We handle all content changes for you.",
    frequency: "As needed",
    icon: FileText,
  },
];
