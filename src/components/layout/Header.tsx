import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Process", href: "/process" },
  { name: "Results", href: "/results" },
  { name: "Contact Us", href: "/contact" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 py-3 shadow-md backdrop-blur-md dark:bg-gray-900/90"
          : "bg-transparent py-6"
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-linear-to-br from-purple-600 to-blue-600 text-white">
              <span className="relative z-10 text-xl font-bold">W</span>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)]"></div>
            </div>
            <span className="text-xl font-bold tracking-tight">
              web<span className="text-gradient">undance</span>
            </span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={cn(
                      "group relative px-3 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.name}
                    <span
                      className={cn(
                        "absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-linear-to-r from-purple-600 to-blue-600 transition-transform duration-200 ease-out group-hover:scale-x-100",
                        isActive && "scale-x-100"
                      )}
                    ></span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1">
                Resources
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to="/blog">Blog</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/case-studies">Case Studies</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/resources">Resource Library</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            asChild
            className="bg-linear-to-r from-purple-600 to-blue-600 text-white"
          >
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-white/95 backdrop-blur-md transition-transform duration-300 ease-in-out dark:bg-gray-900/98",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container flex h-full flex-col">
          <div className="flex items-center justify-between py-6">
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-linear-to-br from-purple-600 to-blue-600 text-white">
                <span className="relative z-10 text-xl font-bold">W</span>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)]"></div>
              </div>
              <span className="text-xl font-bold tracking-tight">
                web<span className="text-gradient">undance</span>
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flex-1 space-y-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
                    isActive
                      ? "bg-linear-to-r from-purple-600/10 to-blue-600/10 text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                  {isActive && (
                    <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-linear-to-r from-purple-600 to-blue-600"></span>
                  )}
                </Link>
              );
            })}
            <div className="pt-4">
              <div className="border-t border-gray-200 pt-4 dark:border-gray-800">
                <Link
                  to="/blog"
                  className="block rounded-lg px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  to="/case-studies"
                  className="block rounded-lg px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Case Studies
                </Link>
                <Link
                  to="/resources"
                  className="block rounded-lg px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Resource Library
                </Link>
              </div>
            </div>
          </div>
          <div className="py-6">
            <Button
              asChild
              className="w-full bg-linear-to-r from-purple-600 to-blue-600 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
