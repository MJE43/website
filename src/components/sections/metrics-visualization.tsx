import { TrendingUp, DollarSign, Phone, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface MetricsVisualizationProps {
  selectedMetric: string;
  onMetricChange: (metric: string) => void;
}

const metrics = {
  revenue: {
    title: "Revenue Growth",
    icon: DollarSign,
    data: [
      {
        business: "Rodriguez Plumbing",
        before: "$8,500",
        after: "$23,800",
        increase: "180%",
      },
      {
        business: "Bright Electric",
        before: "$12,000",
        after: "$48,000",
        increase: "300%",
      },
      {
        business: "Wilson HVAC",
        before: "$15,000",
        after: "$37,500",
        increase: "150%",
      },
      {
        business: "Bella Beauty",
        before: "$6,800",
        after: "$17,000",
        increase: "150%",
      },
    ],
    description: "Average monthly revenue before and after our services",
  },
  leads: {
    title: "Lead Generation",
    icon: TrendingUp,
    data: [
      {
        business: "Rodriguez Plumbing",
        before: "12",
        after: "42",
        increase: "250%",
      },
      {
        business: "Bright Electric",
        before: "5",
        after: "35",
        increase: "600%",
      },
      { business: "Wilson HVAC", before: "18", after: "45", increase: "150%" },
      { business: "Bella Beauty", before: "25", after: "75", increase: "200%" },
    ],
    description: "Monthly qualified leads generated",
  },
  calls: {
    title: "Phone Calls",
    icon: Phone,
    data: [
      {
        business: "Rodriguez Plumbing",
        before: "45",
        after: "135",
        increase: "200%",
      },
      {
        business: "Bright Electric",
        before: "20",
        after: "80",
        increase: "300%",
      },
      { business: "Wilson HVAC", before: "60", after: "120", increase: "100%" },
      { business: "Bella Beauty", before: "30", after: "90", increase: "200%" },
    ],
    description: "Monthly phone calls from website visitors",
  },
  bookings: {
    title: "Online Bookings",
    icon: Calendar,
    data: [
      { business: "Bella Beauty", before: "15", after: "85", increase: "467%" },
      { business: "Zen Spa", before: "8", after: "45", increase: "463%" },
      {
        business: "Martinez Barbershop",
        before: "20",
        after: "75",
        increase: "275%",
      },
      {
        business: "Thompson Dental",
        before: "12",
        after: "48",
        increase: "300%",
      },
    ],
    description: "Monthly appointments booked online",
  },
};

export function MetricsVisualization({
  selectedMetric,
  onMetricChange,
}: MetricsVisualizationProps) {
  const currentMetric = metrics[selectedMetric as keyof typeof metrics];

  return (
    <div className="space-y-8">
      {/* Metric Selector */}
      <div className="flex flex-wrap justify-center gap-4">
        {Object.entries(metrics).map(([key, metric]) => (
          <Button
            key={key}
            variant={selectedMetric === key ? "default" : "outline"}
            className={
              selectedMetric === key
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                : ""
            }
            onClick={() => onMetricChange(key)}
          >
            <metric.icon className="mr-2 h-4 w-4" />
            {metric.title}
          </Button>
        ))}
      </div>

      {/* Visualization */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <currentMetric.icon className="h-5 w-5 text-gradient" />
            {currentMetric.title}
          </CardTitle>
          <p className="text-muted-foreground">{currentMetric.description}</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {currentMetric.data.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{item.business}</span>
                  <span className="text-sm font-bold text-gradient">
                    {item.increase} increase
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="text-muted-foreground">Before</span>
                      <span>{item.before}</span>
                    </div>
                    <div className="h-2 rounded-full bg-red-100 dark:bg-red-900/30">
                      <div className="h-2 w-1/3 rounded-full bg-red-500"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="text-muted-foreground">After</span>
                      <span>{item.after}</span>
                    </div>
                    <div className="h-2 rounded-full bg-green-100 dark:bg-green-900/30">
                      <div className="h-2 w-full rounded-full bg-gradient-to-r from-purple-600 to-blue-600"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
