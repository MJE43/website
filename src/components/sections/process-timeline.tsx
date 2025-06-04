"use client"
import { CheckCircle, Clock, Calendar, Rocket, MessageSquare, Palette, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

interface ProcessTimelineProps {
  activeStep: number
  onStepChange: (step: number) => void
}

const timelineSteps = [
  {
    title: "Initial Consultation",
    duration: "Day 1",
    description: "We have a friendly 30-minute call to understand your business and goals.",
    details: [
      "Discuss your business and target customers",
      "Review your current website (if you have one)",
      "Understand your goals and expectations",
      "Explain our process and timeline",
      "Answer all your questions",
    ],
    icon: MessageSquare,
    status: "completed",
  },
  {
    title: "Strategy & Planning",
    duration: "Days 2-3",
    description: "We research your industry and create a custom strategy for your website.",
    details: [
      "Analyze your competitors",
      "Research your target audience",
      "Plan your website structure",
      "Choose the best features for your business",
      "Create a detailed project roadmap",
    ],
    icon: Calendar,
    status: "completed",
  },
  {
    title: "Design Phase",
    duration: "Days 4-10",
    description: "We create beautiful designs that represent your brand and appeal to your customers.",
    details: [
      "Create wireframes and site structure",
      "Design custom mockups for your approval",
      "Incorporate your branding and colors",
      "Design for mobile and desktop",
      "Revise based on your feedback",
    ],
    icon: Palette,
    status: "active",
  },
  {
    title: "Development",
    duration: "Days 11-18",
    description: "We build your website using the latest technology for speed and security.",
    details: [
      "Code your website from scratch",
      "Add booking systems and contact forms",
      "Integrate with Google My Business",
      "Set up analytics and tracking",
      "Test on all devices and browsers",
    ],
    icon: Settings,
    status: "pending",
  },
  {
    title: "Review & Revisions",
    duration: "Days 19-21",
    description: "We show you the completed website and make any final adjustments.",
    details: [
      "Present the completed website",
      "Walk you through all features",
      "Make any requested changes",
      "Test everything one final time",
      "Prepare for launch",
    ],
    icon: CheckCircle,
    status: "pending",
  },
  {
    title: "Launch & Training",
    duration: "Days 22-24",
    description: "We launch your website and train you on how to use it.",
    details: [
      "Launch your website live",
      "Set up hosting and security",
      "Train you on managing content",
      "Set up ongoing monitoring",
      "Celebrate your new website!",
    ],
    icon: Rocket,
    status: "pending",
  },
]

export function ProcessTimeline({ activeStep, onStepChange }: ProcessTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-0.5"></div>

      <div className="space-y-12">
        {timelineSteps.map((step, index) => (
          <div
            key={index}
            className={cn(
              "relative cursor-pointer transition-all",
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
              "md:flex md:items-center",
            )}
            onClick={() => onStepChange(index)}
          >
            {/* Timeline Dot */}
            <div className="absolute left-8 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2">
              <div
                className={cn(
                  "h-4 w-4 rounded-full border-4 border-background transition-all",
                  step.status === "completed"
                    ? "bg-green-500"
                    : step.status === "active"
                      ? "bg-gradient-to-r from-purple-600 to-blue-600"
                      : "bg-muted",
                )}
              ></div>
            </div>

            {/* Content */}
            <div className="ml-16 md:ml-0 md:w-1/2">
              <div className={cn("md:px-8", index % 2 === 0 ? "md:text-right" : "md:text-left")}>
                <Card
                  className={cn(
                    "transition-all",
                    activeStep === index ? "border-purple-200 shadow-lg dark:border-purple-800" : "",
                  )}
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div
                        className={cn(
                          "flex h-10 w-10 items-center justify-center rounded-full",
                          step.status === "completed"
                            ? "bg-green-100 dark:bg-green-900/30"
                            : step.status === "active"
                              ? "bg-gradient-to-br from-purple-600/10 to-blue-600/10"
                              : "bg-muted",
                        )}
                      >
                        <step.icon
                          className={cn(
                            "h-5 w-5",
                            step.status === "completed"
                              ? "text-green-600 dark:text-green-400"
                              : step.status === "active"
                                ? "text-gradient"
                                : "text-muted-foreground",
                          )}
                        />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-purple-600 dark:text-purple-400">{step.duration}</div>
                        <h3 className="text-lg font-bold">{step.title}</h3>
                      </div>
                    </div>

                    <p className="mb-4 text-muted-foreground">{step.description}</p>

                    {activeStep === index && (
                      <div className="space-y-2">
                        <h4 className="font-medium">What happens:</h4>
                        <ul className="space-y-1 text-sm">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-2">
                              <CheckCircle className="mt-0.5 h-3 w-3 flex-shrink-0 text-green-600 dark:text-green-400" />
                              <span className="text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-4 flex items-center gap-2">
                      {step.status === "completed" && (
                        <div className="flex items-center gap-1 text-sm text-green-600 dark:text-green-400">
                          <CheckCircle className="h-4 w-4" />
                          Completed
                        </div>
                      )}
                      {step.status === "active" && (
                        <div className="flex items-center gap-1 text-sm text-purple-600 dark:text-purple-400">
                          <Clock className="h-4 w-4" />
                          In Progress
                        </div>
                      )}
                      {step.status === "pending" && (
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          Upcoming
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
