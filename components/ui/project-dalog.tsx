"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { Project } from "@/types";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const ProjectDialog = ({
  project,
  isOpen,
  onClose,
}: {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const total = project.images.length;

  const nextImage = () => setCurrentImageIndex((p) => (p + 1) % total);

  const prevImage = () => setCurrentImageIndex((p) => (p - 1 + total) % total);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="
    w-screen
    h-screen
    max-w-none
    max-h-none
    p-0
    bg-[#141415]
    border-0
    rounded-none

    md:w-[95vw]
    md:h-[90vh]
    md:max-w-[1100px]
    md:rounded-[20px]
    md:border md:border-[#2a2a2b]
    ring-1
    ring-black/20
  "
      >
        {/* Accessibility (wajib) */}
        <DialogTitle className="sr-only">{project.title}</DialogTitle>

        <div className="flex flex-col md:flex-row max-h-[88vh]">
          {/* ════ LEFT · IMAGE PANEL ═════════════════════ */}
          <div className="relative bg-[#1a1a1b] overflow-hidden md:w-[52%] shrink-0 min-h-[200px] md:min-h-0">
            {/* Slider */}
            <div
              className="flex h-full transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]"
              style={{
                width: `${total * 100}%`,
                transform: `translateX(-${(currentImageIndex / total) * 100}%)`,
              }}
            >
              {project.images.map((src, i) => (
                <div
                  key={i}
                  className="relative shrink-0"
                  style={{
                    width: `${100 / total}%`,
                    minHeight: 320,
                  }}
                >
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Counter */}
            <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/55 backdrop-blur border border-white/10 text-white text-[10px] font-mono font-semibold">
              {currentImageIndex + 1} / {total}
            </div>

            {/* Arrows */}
            {total > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center hover:bg-[#f0b429]/20"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center hover:bg-[#f0b429]/20"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}

            {/* Dots */}
            {total > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={cn(
                      "h-1.5 rounded-full transition-all",
                      currentImageIndex === idx
                        ? "w-5 bg-[#f0b429]"
                        : "w-1.5 bg-white/30"
                    )}
                  />
                ))}
              </div>
            )}
          </div>

          {/* ════ RIGHT · CONTENT ═════════════════════ */}
          <div className="flex flex-col flex-1 overflow-hidden">
            {/* HEADER */}
            <div className="flex justify-between px-6 pt-6">
              <div>
                <span className="text-[10px] text-[#f0b429] uppercase">
                  {project.category}
                </span>
                <h2 className="text-2xl font-bold text-white">
                  {project.title}
                </h2>
              </div>
            </div>

            {/* BODY */}
            <div className="flex-1 overflow-y-auto px-6 pb-6 pt-4 space-y-4">
              {/* About */}
              <p className="text-[#9a9aa8] text-sm">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 bg-[#1a1a1b] border border-[#2a2a2b] rounded-full text-[#bbb]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-2 flex-wrap">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    className="px-4 py-2 bg-[#f0b429] text-black rounded-xl text-sm font-semibold"
                  >
                    <ExternalLink className="inline w-4 h-4 mr-1" />
                    Live
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="px-4 py-2 border border-[#2a2a2b] text-[#bbb] rounded-xl text-sm"
                  >
                    <FaGithub className="inline w-4 h-4 mr-1" />
                    GitHub
                  </a>
                )}

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    className="px-4 py-2 border border-[#2a2a2b] text-[#bbb] rounded-xl text-sm"
                  >
                    <Globe className="inline w-4 h-4 mr-1" />
                    Visit
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
