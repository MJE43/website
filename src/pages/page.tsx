import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Globe,
  MapPin,
  MessageSquare,
  Phone,
  Search,
  Star,
  TrendingUp,
  Users,
  Wrench,
  Zap,
  Scissors,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ServiceComparison } from "@/components/service-comparison"
import { PricingCards } from "@/components/pricing-cards"
import { LocalBusinessShowcase } from "@/components/local-business-showcase"

export default function ServicesPage() {
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
              <MapPin className="mr-2 h-4 w-4 text-purple-600" />
              <span className="font-medium">Serving Local Businesses Nationwide</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Get More <span className="text-gradient">Local Customers</span> with a Professional Website
            </h1>

            <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
              We help plumbers, electricians, barbershops, and other local businesses grow with websites that actually
              bring in customers.
            </p>

            <div className="mb-12 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <Link href="/contact">Get Your Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#examples">
                  See Examples
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {trustIndicators.map((indicator) => (
                <div key={indicator.label} className="text-center">
                  <div className="text-2xl font-bold text-gradient md:text-3xl">{indicator.value}</div>
                  <div className="text-sm text-muted-foreground">{indicator.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Are You Losing Customers to <span className="text-gradient">Competitors</span>?
              </h2>

              <div className="space-y-6">
                {problems.map((problem) => (
                  <div key={problem.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                        <problem.icon className="h-5 w-5 text-red-600 dark:text-red-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">{problem.title}</h3>
                      <p className="text-muted-foreground">{problem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Here's How We <span className="text-gradient">Help</span>
              </h2>

              <div className="space-y-6">
                {solutions.map((solution) => (
                  <div key={solution.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">{solution.title}</h3>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button asChild className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                  <Link href="/contact">Start Growing Your Business</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Our <span className="text-gradient">Services</span> for Local Businesses
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Everything you need to dominate your local market and grow your business online.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="group overflow-hidden border-border transition-all hover:shadow-lg">
                <CardHeader className="pb-4">
                  <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-purple-600/10 to-blue-600/10 p-3">
                    <service.icon className="h-8 w-8 text-gradient" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-medium text-green-600 dark:text-green-400">What You Get:</h4>
                    <ul className="space-y-1 text-sm">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-3 w-3 flex-shrink-0 text-green-600 dark:text-green-400" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-lg bg-gradient-to-r from-purple-600/10 to-blue-600/10 p-4">
                    <div className="text-sm font-medium text-purple-700 dark:text-purple-300">Expected Results:</div>
                    <div className="text-lg font-bold text-gradient">{service.results}</div>
                  </div>

                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/services/${service.slug}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Examples */}
      <section id="examples" className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Perfect for <span className="text-gradient">Your Industry</span>
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              See how we've helped businesses just like yours succeed online.
            </p>
          </div>

          <div className="mt-16">
            <Tabs defaultValue="plumbing" className="w-full">
              <div className="mb-8 flex justify-center">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="plumbing" className="flex items-center gap-2">
                    <Wrench className="h-4 w-4" />
                    Plumbing
                  </TabsTrigger>
                  <TabsTrigger value="electrical" className="flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    Electrical
                  </TabsTrigger>
                  <TabsTrigger value="beauty" className="flex items-center gap-2">
                    <Scissors className="h-4 w-4" />
                    Beauty
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="plumbing">
                <LocalBusinessShowcase industry="Plumbing" businesses={plumbingExamples} />
              </TabsContent>

              <TabsContent value="electrical">
                <LocalBusinessShowcase industry="Electrical" businesses={electricalExamples} />
              </TabsContent>

              <TabsContent value="beauty">
                <LocalBusinessShowcase industry="Beauty & Barbershops" businesses={beautyExamples} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              See the <span className="text-gradient">Difference</span>
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Compare what most local businesses have vs. what we deliver.
            </p>
          </div>

          <div className="mt-16">
            <ServiceComparison />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Real Results from <span className="text-gradient">Real Businesses</span>
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Here's what local business owners are saying about working with us.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {localTestimonials.map((testimonial) => (
              <Card key={testimonial.author} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="mb-4 text-muted-foreground">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-muted">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                    </div>
                  </div>
                  <div className="mt-4 rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
                    <div className="text-sm font-medium text-green-700 dark:text-green-300">
                      Result: {testimonial.result}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Affordable <span className="text-gradient">Pricing</span> for Local Businesses
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              No hidden fees. No long-term contracts. Just results that pay for themselves.
            </p>
          </div>

          <div className="mt-16">
            <PricingCards />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
              <p className="mt-4 text-xl text-muted-foreground">
                Everything you need to know about our services for local businesses.
              </p>
            </div>

            <div className="mt-16 space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-lg font-medium">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
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
                  Ready to Get More Local Customers?
                </h2>
                <p className="mt-6 text-xl text-blue-100">
                  Join hundreds of local businesses that have grown their customer base with our proven web solutions.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <div className="rounded-lg bg-white/10 p-4 text-center">
                    <div className="text-2xl font-bold">Free</div>
                    <div className="text-sm text-blue-100">Consultation</div>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4 text-center">
                    <div className="text-2xl font-bold">30-Day</div>
                    <div className="text-sm text-blue-100">Money Back</div>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4 text-center">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm text-blue-100">Support</div>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                    <Link href="/contact">Get Your Free Quote</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    <Link href="tel:+15551234567">
                      <Phone className="mr-2 h-4 w-4" />
                      Call (555) 123-4567
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// Data
const trustIndicators = [
  { value: "500+", label: "Local Businesses Served" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "3x", label: "Average Lead Increase" },
  { value: "30 Days", label: "Average Launch Time" },
]

const problems = [
  {
    title: "Customers can't find you online",
    description: "When people search for your services, your competitors show up first.",
    icon: Search,
  },
  {
    title: "Your current website looks unprofessional",
    description: "An outdated website makes customers question your credibility.",
    icon: Globe,
  },
  {
    title: "You're missing out on mobile customers",
    description: "Most people search on their phones, but your site doesn't work well on mobile.",
    icon: Phone,
  },
  {
    title: "No way to capture leads",
    description: "Visitors leave without contacting you because there's no clear way to get in touch.",
    icon: Users,
  },
]

const solutions = [
  {
    title: "Get found on Google",
    description: "We optimize your website so you show up when locals search for your services.",
  },
  {
    title: "Professional, modern design",
    description: "A beautiful website that builds trust and showcases your expertise.",
  },
  {
    title: "Mobile-first approach",
    description: "Your site will look perfect and work flawlessly on all devices.",
  },
  {
    title: "Convert visitors to customers",
    description: "Clear calls-to-action and contact forms that turn visitors into paying customers.",
  },
]

const services = [
  {
    title: "Professional Website Design",
    description:
      "A modern, mobile-friendly website that showcases your services and builds trust with potential customers.",
    icon: Globe,
    slug: "website-design",
    benefits: [
      "Mobile-responsive design",
      "Professional photography integration",
      "Service pages with clear pricing",
      "Customer testimonials section",
      "Contact forms and click-to-call buttons",
    ],
    results: "2-3x more website visitors",
  },
  {
    title: "Local SEO & Google My Business",
    description: "Get found when locals search for your services. We optimize your online presence for local search.",
    icon: MapPin,
    slug: "local-seo",
    benefits: [
      "Google My Business optimization",
      "Local keyword targeting",
      "Online review management",
      "Local directory listings",
      "Google Maps optimization",
    ],
    results: "Show up in top 3 local results",
  },
  {
    title: "Online Booking System",
    description:
      "Let customers book appointments 24/7 with an integrated scheduling system that syncs with your calendar.",
    icon: Calendar,
    slug: "booking-system",
    benefits: [
      "24/7 online appointment booking",
      "Calendar integration",
      "Automated confirmation emails",
      "SMS reminders",
      "Payment processing",
    ],
    results: "30% more bookings",
  },
  {
    title: "Lead Generation Forms",
    description: "Capture more leads with strategically placed contact forms and quote request systems.",
    icon: TrendingUp,
    slug: "lead-generation",
    benefits: [
      "Custom quote request forms",
      "Emergency contact buttons",
      "Lead tracking and analytics",
      "Automated follow-up emails",
      "CRM integration",
    ],
    results: "50% more qualified leads",
  },
  {
    title: "Review Management",
    description:
      "Build trust and credibility with a system that helps you get more positive reviews and manage your reputation.",
    icon: Star,
    slug: "review-management",
    benefits: [
      "Automated review requests",
      "Review monitoring",
      "Response management",
      "Review display on website",
      "Reputation reporting",
    ],
    results: "4.5+ star average rating",
  },
  {
    title: "Social Media Integration",
    description: "Connect with your local community through integrated social media features and content management.",
    icon: MessageSquare,
    slug: "social-media",
    benefits: [
      "Social media feed integration",
      "Share buttons on all content",
      "Social proof displays",
      "Community engagement tools",
      "Local event promotion",
    ],
    results: "3x more social engagement",
  },
]

const plumbingExamples = [
  {
    name: "Mike's Plumbing Services",
    location: "Denver, CO",
    services: "Emergency plumbing, drain cleaning, water heater repair",
    result: "Increased calls by 200% in first month",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Reliable Rooter",
    location: "Austin, TX",
    services: "Residential plumbing, sewer line repair, leak detection",
    result: "Booked solid for 3 months ahead",
    image: "/placeholder.svg?height=300&width=400",
  },
]

const electricalExamples = [
  {
    name: "Bright Electric Co.",
    location: "Phoenix, AZ",
    services: "Electrical repairs, panel upgrades, lighting installation",
    result: "Doubled monthly revenue in 6 months",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Power Pro Electrical",
    location: "Miami, FL",
    services: "Commercial electrical, home automation, EV charging",
    result: "Expanded to 3 new service areas",
    image: "/placeholder.svg?height=300&width=400",
  },
]

const beautyExamples = [
  {
    name: "Classic Cuts Barbershop",
    location: "Chicago, IL",
    services: "Men's haircuts, beard trimming, hot towel shaves",
    result: "Online bookings increased 400%",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Bella Beauty Salon",
    location: "Los Angeles, CA",
    services: "Hair styling, coloring, nail services, facials",
    result: "Reduced no-shows by 60%",
    image: "/placeholder.svg?height=300&width=400",
  },
]

const localTestimonials = [
  {
    quote:
      "Since launching our new website, we've been booked solid. The online booking system alone has been a game-changer for our barbershop.",
    author: "Tony Martinez",
    business: "Tony's Classic Cuts",
    result: "300% increase in online bookings",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "We went from getting 2-3 calls a week to 2-3 calls a day. The local SEO work they did has us showing up first for 'plumber near me' searches.",
    author: "Sarah Johnson",
    business: "Johnson Plumbing",
    result: "10x increase in phone calls",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "The website pays for itself every month. We're getting more high-value electrical jobs than ever before.",
    author: "Mike Rodriguez",
    business: "Rodriguez Electric",
    result: "150% increase in revenue",
    image: "/placeholder.svg?height=100&width=100",
  },
]

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most local business websites are completed within 2-4 weeks. We work efficiently while ensuring quality and your input throughout the process.",
  },
  {
    question: "Do I need to provide content and photos?",
    answer:
      "We can help with both! We offer professional copywriting services and can arrange photography, or you can provide your own materials.",
  },
  {
    question: "Will my website work on mobile phones?",
    answer:
      "All our websites are mobile-first, meaning they're designed to work perfectly on smartphones and tablets where most of your customers will find you.",
  },
  {
    question: "How much does ongoing maintenance cost?",
    answer:
      "Our maintenance plans start at $99/month and include hosting, security updates, backups, and basic content updates. No surprises or hidden fees.",
  },
  {
    question: "Can you help me get more Google reviews?",
    answer:
      "Yes! Our review management system makes it easy to request reviews from happy customers and helps you maintain a strong online reputation.",
  },
  {
    question: "What if I'm not happy with the website?",
    answer:
      "We offer a 30-day money-back guarantee. We'll work with you to make sure you're completely satisfied with your new website.",
  },
]
