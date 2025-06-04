import { CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ResponsibilityMatrix() {
  const responsibilities = [
    {
      task: "Provide business information",
      client: true,
      webundance: false,
      description: "Tell us about your services, hours, contact info",
    },
    {
      task: "Choose colors and style preferences",
      client: true,
      webundance: false,
      description: "Share any brand colors or style preferences you have",
    },
    {
      task: "Provide photos (optional)",
      client: true,
      webundance: false,
      description: "Share photos of your work, team, or location",
    },
    {
      task: "Review and approve designs",
      client: true,
      webundance: false,
      description: "Look at designs and let us know what you think",
    },
    {
      task: "Website design and development",
      client: false,
      webundance: true,
      description: "Create beautiful, functional website from scratch",
    },
    {
      task: "Professional photography",
      client: false,
      webundance: true,
      description: "Arrange professional photos if needed",
    },
    {
      task: "Content writing",
      client: false,
      webundance: true,
      description: "Write compelling copy for your website",
    },
    {
      task: "SEO optimization",
      client: false,
      webundance: true,
      description: "Optimize for local search and Google rankings",
    },
    {
      task: "Technical setup",
      client: false,
      webundance: true,
      description: "Hosting, security, analytics, and all technical aspects",
    },
    {
      task: "Testing and quality assurance",
      client: false,
      webundance: true,
      description: "Test everything to ensure it works perfectly",
    },
    {
      task: "Launch and deployment",
      client: false,
      webundance: true,
      description: "Make your website live and accessible to customers",
    },
    {
      task: "Ongoing maintenance",
      client: false,
      webundance: true,
      description: "Keep your website updated, secure, and running smoothly",
    },
  ]

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader className="bg-blue-50 dark:bg-blue-900/20">
          <CardTitle className="text-center text-blue-700 dark:text-blue-300">What You Do</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            {responsibilities
              .filter((item) => item.client)
              .map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-blue-500" />
                  <div>
                    <div className="font-medium">{item.task}</div>
                    <div className="text-sm text-muted-foreground">{item.description}</div>
                  </div>
                </div>
              ))}
          </div>
          <div className="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="text-center text-blue-700 dark:text-blue-300">
              <div className="text-2xl font-bold">4 Simple Tasks</div>
              <div className="text-sm">That's all you need to do!</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader className="bg-purple-50 dark:bg-purple-900/20">
          <CardTitle className="text-center text-purple-700 dark:text-purple-300">What We Do</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            {responsibilities
              .filter((item) => item.webundance)
              .map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-purple-500" />
                  <div>
                    <div className="font-medium">{item.task}</div>
                    <div className="text-sm text-muted-foreground">{item.description}</div>
                  </div>
                </div>
              ))}
          </div>
          <div className="mt-6 rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <div className="text-center text-purple-700 dark:text-purple-300">
              <div className="text-2xl font-bold">Everything Else</div>
              <div className="text-sm">We handle all the technical stuff</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
