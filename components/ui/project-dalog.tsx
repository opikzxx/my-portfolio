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
          w-screen h-screen
          max-w-none max-h-none
          p-0
          bg-[#141415]
          border-0 rounded-none
          md:w-[95vw] md:h-[90vh]
          md:max-w-[1100px]
          md:rounded-[20px]
          md:border md:border-[#2a2a2b]
          ring-1 ring-black/20
          flex flex-col
        "
      >
        <DialogTitle className="sr-only">{project.title}</DialogTitle>

        <div className="flex items-center justify-between px-4 pt-4 pb-2 md:hidden">
          <div>
            <span className="text-[10px] text-[#f0b429] uppercase tracking-widest font-semibold">
              {project.category}
            </span>
            <h2 className="text-lg font-bold text-white leading-tight">
              {project.title}
            </h2>
          </div>
        </div>

        <div className="flex flex-col md:flex-row flex-1 min-h-0">
          <div
            className="relative bg-[#1a1a1b] overflow-hidden md:w-[52%] shrink-0
            h-[400px] w-full
            md:h-auto
          "
          >
            {/* Slider track */}
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
                  className="relative shrink-0 h-full"
                  style={{ width: `${100 / total}%` }}
                >
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 52vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>

            {/* Counter pill */}
            <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white text-[10px] font-mono font-semibold">
              {currentImageIndex + 1} / {total}
            </div>

            {/* Prev / Next arrows */}
            {total > 1 && (
              <>
                <button
                  onClick={prevImage}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10
                    w-9 h-9 rounded-full
                    bg-black/50 border border-white/10 text-white
                    flex items-center justify-center
                    hover:bg-[#f0b429]/20 hover:border-[#f0b429]/40
                    active:scale-95 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextImage}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10
                    w-9 h-9 rounded-full
                    bg-black/50 border border-white/10 text-white
                    flex items-center justify-center
                    hover:bg-[#f0b429]/20 hover:border-[#f0b429]/40
                    active:scale-95 transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}

            {/* Dot indicators */}
            {total > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    aria-label={`Go to image ${idx + 1}`}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      currentImageIndex === idx
                        ? "w-5 bg-[#f0b429]"
                        : "w-1.5 bg-white/30 hover:bg-white/50"
                    )}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
            <div className="hidden md:flex items-start justify-between px-6 pt-6 pb-2">
              <div>
                <span className="text-[10px] text-[#f0b429] uppercase tracking-widest font-semibold">
                  {project.category}
                </span>
                <h2 className="text-2xl font-bold text-white mt-0.5">
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto px-4 md:px-6 pb-6 pt-3 md:pt-4 space-y-5">
              {/* Description */}
              <p className="text-[#9a9aa8] text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              {project.techStack?.length > 0 && (
                <div>
                  <p className="text-[10px] text-[#555] uppercase tracking-widest mb-2 font-semibold">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-[#1a1a1b] border border-[#2a2a2b] rounded-full text-[#bbb] hover:border-[#f0b429]/30 hover:text-white transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-2 flex-wrap pt-1">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5
                      bg-[#f0b429] text-black rounded-xl text-sm font-semibold
                      hover:bg-[#e0a820] active:scale-95 transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5
                      border border-[#2a2a2b] text-[#bbb] rounded-xl text-sm
                      hover:border-[#3a3a3b] hover:text-white hover:bg-[#1a1a1b]
                      active:scale-95 transition-all"
                  >
                    <FaGithub className="w-4 h-4" />
                    GitHub
                  </a>
                )}

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5
                      border border-[#2a2a2b] text-[#bbb] rounded-xl text-sm
                      hover:border-[#3a3a3b] hover:text-white hover:bg-[#1a1a1b]
                      active:scale-95 transition-all"
                  >
                    <Globe className="w-4 h-4" />
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
