import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  DollarSign,
  Phone,
  Star,
  TrendingUp,
  Users,
  Zap,
  MapPin,
  Clock,
  Target,
  Award,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BeforeAfterSlider } from "@/components/sections/before-after-slider";
import { ResultsFilter } from "@/components/sections/results-filter";
import { MetricsVisualization } from "@/components/sections/metrics-visualization";

export default function ResultsPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedMetric, setSelectedMetric] = useState("revenue");

  const filteredCaseStudies =
    selectedIndustry === "all"
      ? caseStudies
      : caseStudies.filter(
          (study) => study.industry.toLowerCase() === selectedIndustry
        );

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
              <Award className="mr-2 h-4 w-4 text-purple-600" />
              <span className="font-medium">
                Proven Results for Local Businesses
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Real <span className="text-gradient">Results</span> from Real
              Businesses
            </h1>

            <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
              See how we've helped local businesses like yours grow their
              customer base, increase revenue, and dominate their local markets.
            </p>

            <div className="mb-12 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white"
              >
                <Link to="/contact">Get Similar Results</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#case-studies">
                  Explore Case Studies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Aggregate Results */}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {aggregateResults.map((result) => (
                <div key={result.label} className="text-center">
                  <div className="mb-2 inline-flex rounded-full bg-gradient-to-br from-purple-600/10 to-blue-600/10 p-3">
                    <result.icon className="h-6 w-6 text-gradient" />
                  </div>
                  <div className="text-2xl font-bold text-gradient md:text-3xl">
                    {result.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {result.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Metrics */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Results That <span className="text-gradient">Matter</span>
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              We track the metrics that actually impact your bottom line.
            </p>
          </div>

          <div className="mt-16">
            <MetricsVisualization
              selectedMetric={selectedMetric}
              onMetricChange={setSelectedMetric}
            />
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section id="case-studies" className="bg-muted/30 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Featured <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Deep dive into how we transformed these local businesses.
            </p>
          </div>

          <div className="mt-16">
            <ResultsFilter
              selectedIndustry={selectedIndustry}
              onIndustryChange={setSelectedIndustry}
              caseStudies={caseStudies}
            />
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {filteredCaseStudies.slice(0, 4).map((study) => (
              <Card
                key={study.id}
                className="group overflow-hidden transition-all hover:shadow-lg"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.business}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="mb-2 bg-white/20 text-white">
                      {study.industry}
                    </Badge>
                    <h3 className="text-xl font-bold text-white">
                      {study.business}
                    </h3>
                    <p className="text-sm text-white/80">{study.location}</p>
                  </div>
                </div>

                <CardContent className="p-6">
                  <p className="mb-4 text-muted-foreground">
                    {study.challenge}
                  </p>

                  <div className="mb-6 grid grid-cols-2 gap-4">
                    {study.keyMetrics.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-gradient">
                          {metric.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-4 rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="font-medium text-green-700 dark:text-green-300">
                        {study.primaryResult}
                      </span>
                    </div>
                  </div>

                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/results/${study.slug}`}>
                      View Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <a href="#all-results">
                View All Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              See the <span className="text-gradient">Transformation</span>
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Compare the old websites with our beautiful, conversion-focused
              designs.
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {beforeAfterExamples.map((example) => (
              <div key={example.id} className="mx-auto max-w-4xl">
                <div className="mb-8 text-center">
                  <h3 className="text-2xl font-bold">{example.business}</h3>
                  <p className="text-muted-foreground">
                    {example.industry} • {example.location}
                  </p>
                </div>

                <BeforeAfterSlider
                  beforeImage={example.beforeImage}
                  afterImage={example.afterImage}
                  beforeLabel="Old Website"
                  afterLabel="New Website"
                />

                <div className="mt-8 grid gap-6 md:grid-cols-3">
                  {example.improvements.map((improvement, index) => (
                    <div key={index} className="text-center">
                      <div className="mb-2 inline-flex rounded-full bg-gradient-to-br from-purple-600/10 to-blue-600/10 p-3">
                        <improvement.icon className="h-6 w-6 text-gradient" />
                      </div>
                      <h4 className="font-medium">{improvement.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {improvement.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-lg bg-gradient-to-r from-purple-600/10 to-blue-600/10 p-6 text-center">
                  <div className="text-lg font-bold text-gradient">
                    {example.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results by Service */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Results by <span className="text-gradient">Service</span>
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              See the specific impact of each service we provide.
            </p>
          </div>

          <div className="mt-16">
            <Tabs defaultValue="website-design" className="w-full">
              <div className="mb-8 flex justify-center">
                <TabsList className="grid w-full max-w-2xl grid-cols-2 lg:grid-cols-4">
                  <TabsTrigger value="website-design">
                    Website Design
                  </TabsTrigger>
                  <TabsTrigger value="local-seo">Local SEO</TabsTrigger>
                  <TabsTrigger value="booking-system">
                    Booking System
                  </TabsTrigger>
                  <TabsTrigger value="review-management">Reviews</TabsTrigger>
                </TabsList>
              </div>

              {Object.entries(serviceResults).map(([key, service]) => (
                <TabsContent key={key} value={key}>
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {service.results.map((result, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <div className="h-12 w-12 overflow-hidden rounded-full bg-muted">
                              <img
                                src={result.clientImage || "/placeholder.svg"}
                                alt={result.client}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <CardTitle className="text-lg">
                                {result.client}
                              </CardTitle>
                              <p className="text-sm text-muted-foreground">
                                {result.business}
                              </p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="mb-4 text-center">
                            <div className="text-3xl font-bold text-gradient">
                              {result.improvement}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {result.metric}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            "{result.quote}"
                          </p>
                          <div className="mt-4 flex justify-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Success Across <span className="text-gradient">Industries</span>
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              We understand the unique challenges of different local business
              types.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industryBreakdown.map((industry) => (
              <Card key={industry.name} className="text-center">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex rounded-full bg-gradient-to-br from-purple-600/10 to-blue-600/10 p-4">
                    <industry.icon className="h-8 w-8 text-gradient" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{industry.name}</h3>
                  <p className="mb-4 text-muted-foreground">
                    {industry.description}
                  </p>

                  <div className="mb-4 space-y-2">
                    {industry.avgResults.map((result, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-sm text-muted-foreground">
                          {result.metric}
                        </span>
                        <span className="text-sm font-medium text-gradient">
                          {result.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="text-sm text-muted-foreground">
                    Based on {industry.clientCount} clients
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 py-20 text-white md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              We're So Confident, We Guarantee It
            </h2>
            <p className="mt-6 text-xl text-blue-100">
              If you don't see measurable results within 90 days, we'll work for
              free until you do.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {guarantees.map((guarantee) => (
                <div
                  key={guarantee.title}
                  className="rounded-lg bg-white/10 p-6"
                >
                  <div className="mb-4 inline-flex rounded-full bg-white/20 p-3">
                    <guarantee.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{guarantee.title}</h3>
                  <p className="text-sm text-blue-100">
                    {guarantee.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Button
                asChild
                size="lg"
                className="bg-white text-purple-600 hover:bg-white/90"
              >
                <Link to="/contact">Start Your Success Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to Join Our{" "}
              <span className="text-gradient">Success Stories</span>?
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Let's create a case study about your business next.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white"
              >
                <Link to="/contact">Get Your Free Strategy Call</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/process">
                  Learn Our Process
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-8 text-sm text-muted-foreground">
              Free consultation • No obligation • Results guaranteed
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Data
const aggregateResults = [
  { value: "500+", label: "Businesses Helped", icon: Users },
  { value: "300%", label: "Avg. Lead Increase", icon: TrendingUp },
  { value: "$2.5M+", label: "Revenue Generated", icon: DollarSign },
  { value: "4.9/5", label: "Client Satisfaction", icon: Star },
];

const caseStudies = [
  {
    id: 1,
    business: "Rodriguez Plumbing",
    industry: "Plumbing",
    location: "Austin, TX",
    challenge:
      "Struggling to compete with larger plumbing companies and getting lost in search results.",
    primaryResult: "Increased monthly revenue by 180% in 6 months",
    keyMetrics: [
      { value: "180%", label: "Revenue Increase" },
      { value: "250%", label: "More Calls" },
    ],
    image: "/placeholder.svg?height=400&width=600",
    slug: "rodriguez-plumbing",
  },
  {
    id: 2,
    business: "Bright Electric Co.",
    industry: "Electrical",
    location: "Phoenix, AZ",
    challenge:
      "No online presence and relying solely on word-of-mouth referrals.",
    primaryResult: "Went from 0 to 50+ online leads per month",
    keyMetrics: [
      { value: "50+", label: "Monthly Leads" },
      { value: "400%", label: "Business Growth" },
    ],
    image: "/placeholder.svg?height=400&width=600",
    slug: "bright-electric",
  },
  {
    id: 3,
    business: "Bella Beauty Salon",
    industry: "Beauty",
    location: "Miami, FL",
    challenge:
      "High no-show rates and difficulty managing appointments efficiently.",
    primaryResult: "Reduced no-shows by 70% with online booking",
    keyMetrics: [
      { value: "70%", label: "Fewer No-Shows" },
      { value: "300%", label: "Online Bookings" },
    ],
    image: "/placeholder.svg?height=400&width=600",
    slug: "bella-beauty",
  },
  {
    id: 4,
    business: "Wilson HVAC",
    industry: "HVAC",
    location: "Denver, CO",
    challenge: "Seasonal business fluctuations and low customer retention.",
    primaryResult: "Stabilized revenue with 40% repeat customer rate",
    keyMetrics: [
      { value: "40%", label: "Repeat Customers" },
      { value: "150%", label: "Off-Season Revenue" },
    ],
    image: "/placeholder.svg?height=400&width=600",
    slug: "wilson-hvac",
  },
];

const beforeAfterExamples = [
  {
    id: 1,
    business: "Mike's Auto Repair",
    industry: "Automotive",
    location: "Chicago, IL",
    beforeImage: "/placeholder.svg?height=600&width=800",
    afterImage: "/placeholder.svg?height=600&width=800",
    improvements: [
      {
        title: "Mobile Optimized",
        description: "Now works perfectly on all devices",
        icon: Phone,
      },
      {
        title: "Online Booking",
        description: "Customers can schedule appointments 24/7",
        icon: Calendar,
      },
      {
        title: "Local SEO",
        description: "Shows up first for local searches",
        icon: MapPin,
      },
    ],
    result: "200% increase in online appointments within 3 months",
  },
];

const serviceResults = {
  "website-design": {
    results: [
      {
        client: "Sarah Johnson",
        business: "Johnson Plumbing",
        improvement: "300%",
        metric: "More Website Visitors",
        quote: "The new website is beautiful and actually brings in customers!",
        clientImage: "/placeholder.svg?height=100&width=100",
      },
      {
        client: "Mike Rodriguez",
        business: "Rodriguez Electric",
        improvement: "250%",
        metric: "Increase in Calls",
        quote: "We get calls every day now from people who found us online.",
        clientImage: "/placeholder.svg?height=100&width=100",
      },
      {
        client: "Lisa Chen",
        business: "Chen's Hair Studio",
        improvement: "400%",
        metric: "Online Bookings",
        quote: "The booking system has transformed how we manage appointments.",
        clientImage: "/placeholder.svg?height=100&width=100",
      },
    ],
  },
  "local-seo": {
    results: [
      {
        client: "Tom Wilson",
        business: "Wilson HVAC",
        improvement: "500%",
        metric: "Google My Business Views",
        quote:
          "We're now the first result when people search for HVAC in our area.",
        clientImage: "/placeholder.svg?height=100&width=100",
      },
      {
        client: "Maria Garcia",
        business: "Garcia Landscaping",
        improvement: "200%",
        metric: "Local Search Traffic",
        quote: "Local SEO has been a game-changer for our business.",
        clientImage: "/placeholder.svg?height=100&width=100",
      },
      {
        client: "David Kim",
        business: "Kim's Auto Body",
        improvement: "350%",
        metric: "Map Pack Appearances",
        quote: "We show up in the map results for every relevant search now.",
        clientImage: "/placeholder.svg?height=100&width=100",
      },
    ],
  },
  "booking-system": {
    results: [
      {
        client: "Jennifer Lee",
        business: "Zen Spa & Wellness",
        improvement: "80%",
        metric: "Booking Efficiency",
        quote: "The online booking system has eliminated phone tag completely.",
        clientImage: "/placeholder.svg?height=100&width=100",
      },
      {
        client: "Carlos Martinez",
        business: "Martinez Barbershop",
        improvement: "60%",
        metric: "Fewer No-Shows",
        quote: "Automated reminders have dramatically reduced no-shows.",
        clientImage: "/placeholder.svg?height=100&width=100",
      },
      {
        client: "Amy Thompson",
        business: "Thompson Dental",
        improvement: "300%",
        metric: "After-Hours Bookings",
        quote: "Patients love being able to book appointments anytime.",
        clientImage: "/placeholder.svg?height=100&width=100",
      },
    ],
  },
  "review-management": {
    results: [
      {
        client: "Robert Brown",
        business: "Brown's Roofing",
        improvement: "4.8/5",
        metric: "Average Star Rating",
        quote: "Our online reputation has never been better.",
        clientImage: "/placeholder.svg?height=100&width=100",
      },
      {
        client: "Nicole Davis",
        business: "Davis Pet Grooming",
        improvement: "500%",
        metric: "More Reviews",
        quote:
          "The review system makes it easy for happy customers to leave feedback.",
        clientImage: "/placeholder.svg?height=100&width=100",
      },
      {
        client: "James Wilson",
        business: "Wilson's Appliance Repair",
        improvement: "90%",
        metric: "Positive Review Rate",
        quote: "Almost all our reviews are 5 stars now thanks to the system.",
        clientImage: "/placeholder.svg?height=100&width=100",
      },
    ],
  },
};

const industryBreakdown = [
  {
    name: "Plumbing & HVAC",
    description: "Emergency services with high-value jobs",
    icon: Zap,
    clientCount: 85,
    avgResults: [
      { metric: "Lead Increase", value: "+280%" },
      { metric: "Revenue Growth", value: "+190%" },
      { metric: "Call Volume", value: "+350%" },
    ],
  },
  {
    name: "Beauty & Wellness",
    description: "Appointment-based businesses",
    icon: Star,
    clientCount: 120,
    avgResults: [
      { metric: "Online Bookings", value: "+400%" },
      { metric: "No-Show Reduction", value: "-65%" },
      { metric: "Customer Retention", value: "+45%" },
    ],
  },
  {
    name: "Home Services",
    description: "Contractors and repair services",
    icon: Target,
    clientCount: 95,
    avgResults: [
      { metric: "Project Inquiries", value: "+250%" },
      { metric: "Average Job Value", value: "+30%" },
      { metric: "Repeat Customers", value: "+60%" },
    ],
  },
];

const guarantees = [
  {
    title: "Results Guarantee",
    description:
      "See measurable improvement in 90 days or we work for free until you do.",
    icon: TrendingUp,
  },
  {
    title: "Money-Back Promise",
    description:
      "Not satisfied? Get a full refund within 30 days, no questions asked.",
    icon: DollarSign,
  },
  {
    title: "Ongoing Support",
    description:
      "We're here for the long haul with 24/7 support and regular optimizations.",
    icon: Clock,
  },
];
