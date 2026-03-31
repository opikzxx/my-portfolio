"use client";

import { Eye } from "lucide-react";
import { PROJECTS, FILTER_CATEGORIES } from "@/constants";
import { cn } from "@/lib/utils";
import { usePortfolioFilter } from "@/hooks/useProtfolioFilter";
import { Project } from "@/types";
import { useState } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import ProjectDialog from "@/components/ui/project-dalog";
import Image from "next/image";

export default function Portfolio() {
  const { filter, filteredProjects, handleFilterChange } =
    usePortfolioFilter(PROJECTS);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <article className="animate-fade-up">
        <SectionHeader title="Portfolio" />

        <div className="flex gap-2 flex-wrap mb-6">
          {FILTER_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className={cn(
                "px-4 py-1.5 rounded-xl text-xs font-medium transition-colors",
                filter === cat
                  ? "bg-[#f0b429] text-black"
                  : "bg-[#2a2a2b] text-[#888] hover:text-white border border-[#383838]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {filteredProjects.map((project) => (
            <li key={project.title}>
              <button
                onClick={() => handleProjectClick(project)}
                className="group block w-full text-left rounded-2xl border border-[#383838] bg-[#2a2a2b] overflow-hidden hover:border-[#f0b429]/40 transition-colors cursor-pointer"
              >
                <div className="aspect-video bg-[#1a1a1b] flex items-center justify-center relative overflow-hidden">
                  {project.images && project.images[0] ? (
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
                      className="object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                    />
                  ) : (
                    <div className="text-3xl opacity-20 group-hover:opacity-40 transition-opacity select-none">
                      📱
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                    <div className="h-8 w-8 rounded-full bg-[#f0b429]/20 flex items-center justify-center">
                      <Eye className="h-4 w-4 text-[#f0b429]" />
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-xs font-semibold text-white truncate">
                    {project.title}
                  </h3>
                  <p className="text-[10px] text-[#f0b429] mt-0.5">
                    {project.category}
                  </p>
                  {/* Tech stack preview */}
                  {project.techStack && project.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.techStack.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="text-[8px] px-1.5 py-0.5 bg-[#1a1a1b] text-gray-400 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 2 && (
                        <span className="text-[8px] px-1.5 py-0.5 bg-[#1a1a1b] text-gray-400 rounded-full">
                          +{project.techStack.length - 2}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </article>

      <ProjectDialog
        project={selectedProject}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </>
  );
}
