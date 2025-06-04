import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    question: "How quickly can you start working on my website?",
    answer:
      "We typically start new projects within 1-2 weeks of signing the contract. For urgent projects, we can often begin within a few days. During our consultation call, we'll give you an exact timeline based on our current workload.",
  },
  {
    question: "Do you work with businesses outside of your local area?",
    answer:
      "While we're based in Tech City, CA, we work with local businesses nationwide. All of our communication is done via phone, email, and video calls, so location isn't a barrier to great service.",
  },
  {
    question: "What information do you need to provide a quote?",
    answer:
      "We'll need to know about your business type, current website (if any), your goals, target audience, and any specific features you need. The more details you provide in the contact form, the more accurate our initial quote will be.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes! We understand that cash flow is important for local businesses. We offer flexible payment plans that can be split into 2-4 payments over the project timeline. We'll discuss options during your consultation.",
  },
  {
    question: "What if I need changes after the website is launched?",
    answer:
      "All of our websites come with a 30-day period for minor adjustments after launch. For ongoing changes and updates, we offer affordable maintenance plans starting at $99/month, or you can request changes on an as-needed basis.",
  },
  {
    question: "How do I know if my website is actually bringing in customers?",
    answer:
      "We set up detailed analytics and tracking on every website so you can see exactly how many visitors you're getting, where they're coming from, and how many are contacting you. We also provide monthly reports showing your website's performance.",
  },
];

export function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {faqs.map((faq, index) => (
        <Card key={index} className="overflow-hidden">
          <CardContent className="p-0">
            <button
              className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-muted/50"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-muted-foreground" />
              ) : (
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              )}
            </button>
            {openIndex === index && (
              <div className="border-t border-border px-6 pb-6">
                <p className="pt-4 text-muted-foreground">{faq.answer}</p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
