import { CheckCircle, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ServiceComparison() {
  const comparisons = [
    {
      feature: "Mobile-Friendly Design",
      before: false,
      after: true,
      description: "Works perfectly on all devices",
    },
    {
      feature: "Local SEO Optimization",
      before: false,
      after: true,
      description: "Shows up in local search results",
    },
    {
      feature: "Online Booking System",
      before: false,
      after: true,
      description: "Customers can book 24/7",
    },
    {
      feature: "Professional Photography",
      before: false,
      after: true,
      description: "High-quality images of your work",
    },
    {
      feature: "Customer Reviews Display",
      before: false,
      after: true,
      description: "Social proof builds trust",
    },
    {
      feature: "Fast Loading Speed",
      before: false,
      after: true,
      description: "Loads in under 3 seconds",
    },
    {
      feature: "Contact Forms & CTAs",
      before: false,
      after: true,
      description: "Clear ways for customers to reach you",
    },
    {
      feature: "Security & Backups",
      before: false,
      after: true,
      description: "Protected and backed up daily",
    },
  ]

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Card className="border-red-200 dark:border-red-800">
        <CardHeader className="bg-red-50 dark:bg-red-900/20">
          <CardTitle className="text-center text-red-700 dark:text-red-300">What Most Local Businesses Have</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            {comparisons.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <X className="h-5 w-5 text-red-500" />
                <span className="text-muted-foreground">{item.feature}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <div className="text-center text-red-700 dark:text-red-300">
              <div className="text-2xl font-bold">Missing Out On</div>
              <div className="text-lg">70% of Potential Customers</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200 dark:border-green-800">
        <CardHeader className="bg-green-50 dark:bg-green-900/20">
          <CardTitle className="text-center text-green-700 dark:text-green-300">What You Get With Webundance</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            {comparisons.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 text-green-500" />
                <div>
                  <div className="font-medium">{item.feature}</div>
                  <div className="text-sm text-muted-foreground">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <div className="text-center text-green-700 dark:text-green-300">
              <div className="text-2xl font-bold">Capturing</div>
              <div className="text-lg">3x More Customers</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
