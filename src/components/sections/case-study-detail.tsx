import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CaseStudyDetailProps {
  study: {
    business: string;
    industry: string;
    location: string;
    challenge: string;
    solution: string;
    results: string[];
    image: string;
  };
}

export function CaseStudyDetail({ study }: CaseStudyDetailProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video bg-muted">
        <img
          src={study.image || "/placeholder.svg"}
          alt={study.business}
          className="h-full w-full object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{study.business}</CardTitle>
          <Badge>{study.industry}</Badge>
        </div>
        <p className="text-muted-foreground">{study.location}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium text-red-600 dark:text-red-400">
            Challenge:
          </h4>
          <p className="text-muted-foreground">{study.challenge}</p>
        </div>
        <div>
          <h4 className="font-medium text-blue-600 dark:text-blue-400">
            Solution:
          </h4>
          <p className="text-muted-foreground">{study.solution}</p>
        </div>
        <div>
          <h4 className="font-medium text-green-600 dark:text-green-400">
            Results:
          </h4>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            {study.results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
