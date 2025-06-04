import { NavLink } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Code,
  Globe,
  Layers,
  Rocket,
  Search,
  Settings,
  ShoppingCart,
} from "lucide-react";

import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { TestimonialCarousel } from "../components/sections/testimonial-showcase";
import { ProjectShowcase } from "../components/sections/project-showcase";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-gray-950">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-[10%] top-[10%] h-[500px] w-[500px] rounded-full bg-purple-600/5 blur-3xl"></div>
          <div className="absolute -right-[10%] top-[40%] h-[400px] w-[400px] rounded-full bg-blue-600/5 blur-3xl"></div>
        </div>
        <div className="container relative z-10 py-20 md:py-28 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-sm">
              <span className="mr-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-2 py-0.5 text-xs font-semibold text-white">
                New
              </span>
              <span className="text-muted-foreground">
                Introducing my streamlined development process
              </span>
              <ChevronRight className="ml-1 h-4 w-4 text-muted-foreground" />
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              I build <span className="text-gradient">exceptional</span> digital
              experiences
            </h1>
            <p className="mb-10 text-xl text-muted-foreground md:text-2xl">
              Serving small businesses in Tucson and surrounding Arizona areas
              with powerful web solutions that drive local growth and online
              success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white"
              >
                <NavLink to="/contact">Get Your Free Quote</NavLink>
              </Button>
              <Button asChild variant="outline" size="lg">
                <NavLink to="/services">
                  See How I Can Help
                  <ArrowRight className="ml-2 h-4 w-4" />
                </NavLink>
              </Button>
            </div>

            {/* Hero Image */}
            <div className="relative mt-16">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-75 blur-sm"></div>
              <div className="relative overflow-hidden rounded-xl border border-border bg-background shadow-xl">
                <img
                  src="/placeholder.svg?height=600&width=1200"
                  alt="Webundance dashboard example"
                  width={1200}
                  height={600}
                  className="w-full"
                />
              </div>
              <div className="absolute -right-6 -top-6 hidden rotate-12 rounded-lg border border-border bg-background p-4 shadow-lg md:block">
                <Code className="h-8 w-8 text-purple-600" />
              </div>
              <div className="absolute -bottom-4 -left-4 hidden -rotate-6 rounded-lg border border-border bg-background p-4 shadow-lg md:block">
                <Layers className="h-8 w-8 text-blue-600" />
              </div>
            </div>

            {/* Trusted By */}
            <div className="mt-20">
              <p className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Trusted by Local Tucson Businesses
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-8 w-32 bg-muted/50"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Comprehensive Digital{" "}
              <span className="text-gradient">Services</span>
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              I offer end-to-end solutions to help Tucson area businesses thrive
              online and attract more local customers.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group overflow-hidden border-border transition-all hover:shadow-md"
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-purple-600/10 to-blue-600/10 p-3">
                    <service.icon className="h-6 w-6 text-gradient" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                  <p className="mb-4 text-muted-foreground">
                    {service.description}
                  </p>
                  <NavLink
                    to={service.link}
                    className="inline-flex items-center text-sm font-medium text-purple-600 transition-colors hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </NavLink>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative overflow-hidden bg-muted/30 py-20 md:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-[50%] top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/5 blur-3xl"></div>
        </div>
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              My Proven <span className="text-gradient">Process</span>
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Here's how I work with you to create a website that grows your
              business.
            </p>
          </div>

          <div className="relative mt-20">
            <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-border md:block"></div>
            <div className="space-y-16 md:space-y-24">
              {process.map((step, i) => (
                <div
                  key={step.title}
                  className={`relative md:flex ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="mb-8 md:mb-0 md:w-1/2">
                    <div
                      className={`relative z-10 md:px-8 ${
                        i % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <div
                        className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-xl font-bold text-white`}
                      >
                        {i + 1}
                      </div>
                      <h3 className="mb-4 text-2xl font-bold">{step.title}</h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 top-0 flex -translate-x-1/2 transform items-center justify-center md:relative md:left-auto md:top-auto md:w-1/2 md:translate-x-0">
                    <div className="z-10 h-8 w-8 rounded-full border-4 border-background bg-gradient-to-br from-purple-600 to-blue-600"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Explore my portfolio of successful projects that have driven real
              results.
            </p>
          </div>

          <div className="mt-16">
            <Tabs defaultValue="all" className="w-full">
              <div className="mb-8 flex justify-center">
                <TabsList>
                  <TabsTrigger value="all">All Projects</TabsTrigger>
                  <TabsTrigger value="web">Websites</TabsTrigger>
                  <TabsTrigger value="ecommerce">Online Stores</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="all">
                <ProjectShowcase projects={projects} />
              </TabsContent>
              <TabsContent value="web">
                <ProjectShowcase
                  projects={projects.filter((p) => p.category === "web")}
                />
              </TabsContent>
              <TabsContent value="ecommerce">
                <ProjectShowcase
                  projects={projects.filter((p) => p.category === "ecommerce")}
                />
              </TabsContent>
            </Tabs>
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <NavLink to="/results">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 py-20 text-white md:py-28">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              What My <span className="text-gradient">Clients</span> Say
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Don't just take my word for it. Here's what my clients have to say
              about working with me.
            </p>
          </div>

          <div className="mt-16">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              About <span className="text-gradient">Webundance</span>
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Your dedicated web development consultant in Tucson, Arizona.
            </p>
          </div>

          <div className="mt-16 flex justify-center">
            <div className="max-w-lg">
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <div className="aspect-[3/4] bg-muted">
                  <img
                    src="/placeholder.svg?height=400&width=300"
                    alt="Mike, Webundance Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-center text-2xl font-bold mb-2">Mike</h3>
              <p className="text-center text-muted-foreground mb-6">
                Founder & Full-Stack Developer
              </p>
              <p className="text-center text-muted-foreground">
                With years of experience helping small businesses in Tucson
                establish their online presence, I specialize in creating custom
                websites that drive real results. From local plumbers to
                restaurants, I've helped dozens of businesses increase their
                visibility and grow their customer base.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <NavLink to="/about">
                Learn More About My Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Why Choose <span className="text-gradient">Webundance</span>
              </h2>
              <p className="mt-4 text-xl text-muted-foreground">
                As your local Tucson web development specialist, I combine
                technical expertise with creative excellence to deliver
                solutions that exceed expectations.
              </p>

              <div className="mt-8 space-y-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-600/10 to-blue-600/10">
                        <CheckCircle className="h-5 w-5 text-gradient" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">{benefit.title}</h3>
                      <p className="mt-1 text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                >
                  <NavLink to="/contact">Get Started Today</NavLink>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-50 blur-xl"></div>
              <div className="relative aspect-square overflow-hidden rounded-xl border border-border bg-background">
                <img
                  src="/placeholder.svg?height=800&width=800"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-xl border border-border bg-background p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                    <Rocket className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">
                      Project Delivery
                    </div>
                    <div className="text-2xl font-bold">2x Faster</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Latest <span className="text-gradient">Insights</span>
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Stay updated with my latest thoughts on technology, design, and
              digital strategies specifically for Tucson small businesses.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.title} className="overflow-hidden">
                <div className="aspect-video bg-muted">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={600}
                    height={340}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                      {post.category}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {post.date}
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{post.title}</h3>
                  <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
                  <NavLink
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-medium text-purple-600 transition-colors hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                  >
                    Read more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </NavLink>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <NavLink to="/blog">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </NavLink>
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
                  Ready to transform your digital presence?
                </h2>
                <p className="mt-6 text-xl text-blue-100">
                  Let's collaborate to create something extraordinary that
                  drives real results for your Tucson business.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-purple-600 hover:bg-white/90"
                  >
                    <NavLink to="/contact">Schedule Free Consultation</NavLink>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white/10"
                  >
                    <NavLink to="/services">
                      See How I Can Help
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </NavLink>
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
const services = [
  {
    title: "Custom Website Development",
    description:
      "Professional websites designed specifically for your local business. Perfect for plumbers, electricians, restaurants, and service providers who need a strong online presence.",
    icon: Globe,
    link: "/services/web-development",
  },
  {
    title: "Professional Web Design",
    description:
      "Beautiful, mobile-friendly designs that convert visitors into customers. Easy to navigate for your clients and built to showcase your work effectively.",
    icon: Layers,
    link: "/services/web-design",
  },
  {
    title: "Small Business E-commerce",
    description:
      "Simple online stores that are easy to manage and help you sell your products 24/7. Perfect for retail shops, bakeries, and local artisans.",
    icon: ShoppingCart,
    link: "/services/ecommerce",
  },
  {
    title: "SEO & Local Marketing",
    description:
      "Get found by customers in Tucson when they search for your services. Improve your Google rankings and drive more local business through your door.",
    icon: Search,
    link: "/services/seo-marketing",
  },
  {
    title: "Website Maintenance & Support",
    description:
      "Keep your website running smoothly with regular updates, backups, and security monitoring. Focus on your business while I handle the technical details.",
    icon: Settings,
    link: "/services/maintenance",
  },
];

const process = [
  {
    title: "Getting to Know Your Business",
    description:
      "I learn about your business, who your customers are, and what you want your website to accomplish so we can plan the perfect solution.",
  },
  {
    title: "Creating Your Website Design",
    description:
      "I design your website layout and show you exactly how it will look and work before building it, so you can see and approve everything first.",
  },
  {
    title: "Building Your Website",
    description:
      "I build your website and test everything thoroughly to make sure it works perfectly on all devices and browsers before you go live.",
  },
  {
    title: "Launch & Ongoing Support",
    description:
      "I launch your website and provide ongoing help with updates, maintenance, and any questions you have so your site keeps running smoothly.",
  },
];

const projects = [
  {
    title: "Mike's Plumbing Services",
    description:
      "Professional plumbing website featuring service pages, emergency contact forms, and customer testimonials. Increased local leads by 40% in first three months.",
    image: "/placeholder.svg?height=600&width=800",
    category: "web",
    link: "/results/mikes-plumbing",
  },
  {
    title: "Desert Electric Tucson",
    description:
      "Local electrician website with 24/7 emergency services, project gallery, and online scheduling. Improved Google ranking from page 3 to top 5 results.",
    image: "/placeholder.svg?height=600&width=800",
    category: "web",
    link: "/results/desert-electric",
  },
  {
    title: "Tucson Cuts Barber Shop",
    description:
      "Modern barber shop website with online booking system, service menu, and staff profiles. Streamlined appointment scheduling and reduced no-shows by 25%.",
    image: "/placeholder.svg?height=600&width=800",
    category: "web",
    link: "/results/tucson-cuts",
  },
  {
    title: "Sonoran Bistro",
    description:
      "Restaurant website featuring interactive menu, location info, and reservation system. Boosted online orders by 60% during the pandemic.",
    image: "/placeholder.svg?height=600&width=800",
    category: "web",
    link: "/results/sonoran-bistro",
  },
  {
    title: "Desert Bloom Boutique",
    description:
      "Local fashion boutique with integrated e-commerce store, inventory management, and customer loyalty program. Online sales now represent 35% of total revenue.",
    image: "/placeholder.svg?height=600&width=800",
    category: "ecommerce",
    link: "/results/desert-bloom-boutique",
  },
  {
    title: "Arizona Home Services",
    description:
      "General contractor website with project portfolio, service areas, and estimate request forms. Generated 50+ qualified leads in first quarter.",
    image: "/placeholder.svg?height=600&width=800",
    category: "web",
    link: "/results/arizona-home-services",
  },
];

const stats = [
  { value: "25+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "25%", label: "Avg Traffic Increase" },
  { value: "40%", label: "Avg Ranking Boost" },
];

const testimonials = [
  {
    quote:
      "Mike built our plumbing website and we started getting calls from new customers almost immediately. He made everything so easy to understand and manage. Our phone hasn't stopped ringing!",
    author: "Carlos Rodriguez",
    title: "Owner, Rodriguez Plumbing",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "After Mike redesigned our cafe website, we saw a 50% increase in online orders. He really understood what our customers needed and made it simple for them to find us and place orders.",
    author: "Linda Davis",
    title: "Owner, Desert Bloom Cafe",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Best investment I've made for my electrical business. Mike got us to the top of Google searches and now I'm booked solid. He explains everything in plain English - no tech talk.",
    author: "James Wilson",
    title: "Owner, Wilson Electric",
    image: "/placeholder.svg?height=100&width=100",
  },
];

const benefits = [
  {
    title: "Technical Excellence",
    description:
      "I use cutting-edge technologies to build robust, scalable solutions.",
  },
  {
    title: "Creative Approach",
    description:
      "I combine technical skill with creative thinking to solve complex problems in innovative ways.",
  },
  {
    title: "Client-Centered Process",
    description:
      "I prioritize clear communication and collaboration throughout the development process.",
  },
  {
    title: "Long-Term Partnership",
    description:
      "I build lasting relationships with local Tucson businesses, providing ongoing support and strategic guidance.",
  },
];

const blogPosts = [
  {
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt:
      "Explore the emerging technologies and methodologies that are shaping the future of web development.",
    image: "/placeholder.svg?height=340&width=600",
    category: "Technology",
    date: "June 1, 2025",
    slug: "future-web-development-trends",
  },
  {
    title:
      "Designing for Accessibility: Best Practices for Inclusive Web Design",
    excerpt:
      "Learn how to create websites that are accessible to all users, regardless of their abilities or disabilities.",
    image: "/placeholder.svg?height=340&width=600",
    category: "Design",
    date: "May 15, 2025",
    slug: "designing-for-accessibility",
  },
  {
    title: "How AI is Transforming the Digital Landscape",
    excerpt:
      "Discover how artificial intelligence is revolutionizing web development, design, and digital marketing.",
    image: "/placeholder.svg?height=340&width=600",
    category: "Innovation",
    date: "May 3, 2025",
    slug: "ai-transforming-digital-landscape",
  },
];
