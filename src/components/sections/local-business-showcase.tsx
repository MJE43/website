import Image from "next/image"
import { MapPin, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Business {
  name: string
  location: string
  services: string
  result: string
  image: string
}

interface LocalBusinessShowcaseProps {
  industry: string
  businesses: Business[]
}

export function LocalBusinessShowcase({ industry, businesses }: LocalBusinessShowcaseProps) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold">Success Stories in {industry}</h3>
        <p className="mt-2 text-muted-foreground">
          See how we've helped {industry.toLowerCase()} businesses grow their customer base
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {businesses.map((business) => (
          <Card key={business.name} className="overflow-hidden">
            <div className="aspect-video bg-muted">
              <Image
                src={business.image || "/placeholder.svg"}
                alt={business.name}
                width={400}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h4 className="text-xl font-bold">{business.name}</h4>
              <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {business.location}
              </div>
              <p className="mt-3 text-muted-foreground">{business.services}</p>
              <div className="mt-4 rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="font-medium text-green-700 dark:text-green-300">{business.result}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
