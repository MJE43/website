import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ResultsFilterProps {
  selectedIndustry: string;
  onIndustryChange: (industry: string) => void;
  caseStudies: Array<{ industry: string }>;
}

export function ResultsFilter({
  selectedIndustry,
  onIndustryChange,
  caseStudies,
}: ResultsFilterProps) {
  const industries = [
    "all",
    ...Array.from(
      new Set(caseStudies.map((study) => study.industry.toLowerCase()))
    ),
  ];

  const getIndustryLabel = (industry: string) => {
    if (industry === "all") return "All Industries";
    return industry.charAt(0).toUpperCase() + industry.slice(1);
  };

  const getIndustryCount = (industry: string) => {
    if (industry === "all") return caseStudies.length;
    return caseStudies.filter(
      (study) => study.industry.toLowerCase() === industry
    ).length;
  };

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {industries.map((industry) => (
        <Button
          key={industry}
          variant={selectedIndustry === industry ? "default" : "outline"}
          className={
            selectedIndustry === industry
              ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
              : ""
          }
          onClick={() => onIndustryChange(industry)}
        >
          {getIndustryLabel(industry)}
          <Badge variant="secondary" className="ml-2">
            {getIndustryCount(industry)}
          </Badge>
        </Button>
      ))}
    </div>
  );
}
