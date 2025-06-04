import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
}

interface ProjectShowcaseProps {
  projects: Project[];
}

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Card key={project.title} className="group overflow-hidden">
          <div className="relative aspect-video overflow-hidden">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <NavLink
                to={project.link}
                className="inline-flex items-center text-sm font-medium text-white"
              >
                View Project
                <ArrowRight className="ml-1 h-4 w-4" />
              </NavLink>
            </div>
          </div>
          <CardContent className="p-6">
            <div className="mb-2">
              <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                {project.category === "web"
                  ? "Web Development"
                  : project.category === "app"
                  ? "App Development"
                  : "E-commerce"}
              </span>
            </div>
            <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
            <p className="text-muted-foreground">{project.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
