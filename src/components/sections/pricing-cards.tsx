import Link from "next/link"
import { CheckCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PricingCards() {
  const plans = [
    {
      name: "Starter",
      price: "$2,997",
      description: "Perfect for new local businesses",
      features: [
        "5-page professional website",
        "Mobile-responsive design",
        "Basic SEO optimization",
        "Contact forms",
        "Google My Business setup",
        "1 month of support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "$4,997",
      description: "Most popular for established businesses",
      features: [
        "10-page professional website",
        "Advanced local SEO",
        "Online booking system",
        "Review management setup",
        "Professional photography",
        "Social media integration",
        "3 months of support",
      ],
      cta: "Most Popular",
      popular: true,
    },
    {
      name: "Premium",
      price: "$7,997",
      description: "Complete solution for growing businesses",
      features: [
        "Unlimited pages",
        "E-commerce functionality",
        "Advanced booking system",
        "CRM integration",
        "Monthly SEO reports",
        "Content management",
        "6 months of support",
        "Priority support",
      ],
      cta: "Go Premium",
      popular: false,
    },
  ]

  return (
    <div className="grid gap-8 md:grid-cols-3">
      {plans.map((plan) => (
        <Card
          key={plan.name}
          className={`relative overflow-hidden ${plan.popular ? "border-purple-200 dark:border-purple-800" : ""}`}
        >
          {plan.popular && (
            <div className="absolute left-0 right-0 top-0 bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-center text-sm font-medium text-white">
              <Star className="mr-1 inline h-4 w-4" />
              Most Popular
            </div>
          )}

          <CardHeader className={plan.popular ? "pt-12" : ""}>
            <CardTitle className="text-center">
              <div className="text-2xl font-bold">{plan.name}</div>
              <div className="mt-2 text-3xl font-bold text-gradient">{plan.price}</div>
              <div className="text-sm text-muted-foreground">{plan.description}</div>
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <ul className="space-y-3">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              className={`w-full ${plan.popular ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white" : ""}`}
              variant={plan.popular ? "default" : "outline"}
            >
              <Link href="/contact">{plan.cta}</Link>
            </Button>

            <div className="text-center text-xs text-muted-foreground">No setup fees • 30-day money back guarantee</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
