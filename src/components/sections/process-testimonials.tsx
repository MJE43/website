import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "I was nervous about the whole process, but they made it so easy. They explained everything clearly and kept me updated every step of the way. I didn't have to worry about anything technical.",
    author: "Maria Rodriguez",
    business: "Rodriguez Plumbing",
    industry: "Plumbing",
    image: "/placeholder.svg?height=100&width=100",
    aspect: "Communication",
  },
  {
    quote:
      "The timeline they gave me was exactly what happened. No delays, no surprises. They delivered exactly when they said they would, which is rare in my experience.",
    author: "Tom Wilson",
    business: "Wilson Electric",
    industry: "Electrical",
    image: "/placeholder.svg?height=100&width=100",
    aspect: "Timeline",
  },
  {
    quote:
      "I loved that I didn't have to learn anything technical. They handled everything and just asked me simple questions about my business. It was actually fun to work with them!",
    author: "Sarah Kim",
    business: "Bella Beauty Salon",
    industry: "Beauty",
    image: "/placeholder.svg?height=100&width=100",
    aspect: "Simplicity",
  },
  {
    quote:
      "Even after the website launched, they've been amazing with support. Whenever I need something changed or have a question, they respond quickly and fix it right away.",
    author: "Mike Johnson",
    business: "Johnson HVAC",
    industry: "HVAC",
    image: "/placeholder.svg?height=100&width=100",
    aspect: "Support",
  },
];

export function ProcessTestimonials() {
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
