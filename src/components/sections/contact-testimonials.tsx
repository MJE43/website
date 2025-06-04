import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "From the first phone call, I knew I was in good hands. They explained everything clearly, responded to my emails quickly, and delivered exactly what they promised. The whole process was stress-free.",
    author: "Maria Rodriguez",
    business: "Rodriguez Plumbing",
    industry: "Plumbing",
    image: "/placeholder.svg?height=100&width=100",
    aspect: "Communication & Service",
  },
  {
    quote:
      "I was nervous about working with a web company, but they made it so easy. They walked me through every step and were always available when I had questions. I felt like a priority, not just another client.",
    author: "Tom Wilson",
    business: "Wilson Electric",
    industry: "Electrical",
    image: "/placeholder.svg?height=100&width=100",
    aspect: "Customer Experience",
  },
  {
    quote:
      "The team at Webundance is incredibly responsive. I never had to wait more than a few hours for a response, and they always followed through on what they said they'd do. True professionals.",
    author: "Sarah Kim",
    business: "Bella Beauty Salon",
    industry: "Beauty",
    image: "/placeholder.svg?height=100&width=100",
    aspect: "Responsiveness",
  },
  {
    quote:
      "What impressed me most was how they took the time to understand my business before proposing solutions. They didn't try to sell me things I didn't need - they focused on what would actually help my business grow.",
    author: "Mike Johnson",
    business: "Johnson HVAC",
    industry: "HVAC",
    image: "/placeholder.svg?height=100&width=100",
    aspect: "Understanding & Expertise",
  },
];

export function ContactTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <div className="mx-auto max-w-4xl">
      <Card className="overflow-hidden border-none bg-transparent shadow-none">
        <CardContent className="p-8">
          <div className="text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600/10 to-blue-600/10">
              <Quote className="h-8 w-8 text-gradient" />
            </div>

            <div className="mb-2 text-sm font-medium text-purple-600 dark:text-purple-400">
              About: {currentTestimonial.aspect}
            </div>

            <blockquote className="mb-8 text-xl italic leading-relaxed">
              "{currentTestimonial.quote}"
            </blockquote>

            <div className="flex flex-col items-center">
              <div className="mb-4 h-16 w-16 overflow-hidden rounded-full">
                <img
                  src={currentTestimonial.image || "/placeholder.svg"}
                  alt={currentTestimonial.author}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-lg font-medium">
                {currentTestimonial.author}
              </div>
              <div className="text-sm text-muted-foreground">
                {currentTestimonial.business}
              </div>
              <div className="mt-2 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 flex items-center justify-center space-x-4">
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full"
          onClick={prevTestimonial}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${
                activeIndex === index
                  ? "w-6 bg-gradient-to-r from-purple-600 to-blue-600"
                  : "bg-muted"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full"
          onClick={nextTestimonial}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
