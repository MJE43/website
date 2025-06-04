import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button"; // adjust if your path differs
import { Input } from "@/components/ui/input"; // same here

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-muted/30">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-purple-600/5 blur-3xl"></div>
        <div className="absolute -bottom-20 right-0 h-60 w-60 rounded-full bg-blue-600/5 blur-3xl"></div>
      </div>

      <div className="container relative">
        {/* CTA Section */}
        <div className="my-12 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 p-8 text-white md:my-24 md:p-12">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              ready to transform your digital presence?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              let's collaborate to create something extraordinary that drives
              real results for your business.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-purple-600 hover:bg-white/90"
              >
                <Link to="/contact">start your project</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <Link to="/process">
                  learn our process
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid gap-12 py-12 md:grid-cols-4 md:gap-8 md:py-16">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                <span className="relative z-10 text-xl font-bold">w</span>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.4)_0%,_transparent_70%)]"></div>
              </div>
              <span className="text-xl font-bold tracking-tight">
                web<span className="text-gradient">undance</span>
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              crafting exceptional digital experiences that drive growth and
              transform businesses.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-muted-foreground" />
                <span className="text-sm">
                  123 innovation drive, tech city, ca 94103
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm">contact@webundance.com</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold">company</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    to="/about"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    about us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    our team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">services</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    to="/services/web-development"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    web development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/app-development"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    app development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/ui-ux-design"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    ui/ux design
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/digital-marketing"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    digital marketing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">resources</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    to="/blog"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/case-studies"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    case studies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resources"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    resource library
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    faq
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold">
              subscribe to our newsletter
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              get the latest insights, articles, and resources delivered to your
              inbox.
            </p>
            <form className="mt-4">
              <div className="flex flex-col gap-2 sm:flex-row">
                <Input
                  type="email"
                  placeholder="enter your email"
                  className="flex-1"
                  aria-label="Email for newsletter"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                >
                  subscribe
                </Button>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                by subscribing, you agree to our privacy policy and consent to
                receive updates.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col items-center justify-between border-t border-border py-8 md:flex-row">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} webundance. all rights reserved.
            </p>
            <Link
              to="/privacy"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              privacy policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              terms of service
            </Link>
          </div>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <a
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">twitter</span>
              {/* ...twitter svg... */}
            </a>
            <a
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">linkedin</span>
              {/* ...linkedin svg... */}
            </a>
            <a
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">github</span>
              {/* ...github svg... */}
            </a>
            <a
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">instagram</span>
              {/* ...instagram svg... */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
