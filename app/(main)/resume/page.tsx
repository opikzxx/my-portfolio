"use client";

import { BookOpen, FileText, Download } from "lucide-react";
import { EDUCATION, EXPERIENCE } from "@/constants";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";

export default function Resume() {
  const handleDownloadCV = () => {
    console.log("Download CV clicked");
  };

  return (
    <article className="animate-fade-up">
      <SectionHeader title="Resume" />
      {/* EXPERIENCE */}
      <section className="mb-10">
        <SectionHeader title="Experience" icon={FileText} />

        <ol className="relative ml-4 flex flex-col gap-6 border-l border-white/5">
          {EXPERIENCE.map((item) => (
            <li
              key={item.title + item.company}
              className="relative pl-6 group transition-all duration-300"
            >
              {/* DOT */}
              <span
                className="absolute -left-[6px] top-2 h-3 w-3 rounded-full 
                bg-[#f0b429] 
                ring-4 ring-[#1e1e1f]
                transition-all duration-300
                group-hover:scale-110 group-hover:shadow-[0_0_10px_rgba(240,180,41,0.6)]"
              />

              {/* CARD */}
              <div
                className="
                bg-[#1e1e1f]/70 backdrop-blur-xl
                border border-white/5
                rounded-xl p-4
                transition-all duration-300
                hover:border-[#f0b429]/30
                hover:shadow-[0_10px_30px_rgba(240,180,41,0.1)]
              "
              >
                <h4 className="text-sm font-semibold text-white">
                  {item.title}
                </h4>

                <p className="text-xs text-[#888] mt-0.5">{item.company}</p>

                <p className="text-xs text-[#f0b429] font-medium mt-1">
                  {item.period} &nbsp;•&nbsp; {item.duration}
                </p>

                <p className="text-xs text-[#666] italic mt-0.5 mb-2">
                  {item.location}
                </p>

                <ul className="flex flex-col gap-1 mt-2">
                  {item.bullets.map((b, i) => (
                    <li key={i} className="text-xs text-[#888] flex gap-2">
                      <span className="text-[#f0b429] mt-0.5 shrink-0">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* EDUCATION */}
      <section className="mb-10">
        <SectionHeader title="Education" icon={BookOpen} />

        <ol className="relative ml-4 flex flex-col gap-6 border-l border-white/5">
          {EDUCATION.map((item) => (
            <li
              key={item.title}
              className="relative pl-6 group transition-all duration-300"
            >
              {/* DOT */}
              <span
                className="absolute -left-[6px] top-2 h-3 w-3 rounded-full 
                bg-[#f0b429] 
                ring-4 ring-[#1e1e1f]
                transition-all duration-300
                group-hover:scale-110 group-hover:shadow-[0_0_10px_rgba(240,180,41,0.6)]"
              />

              {/* CARD */}
              <div
                className="
                bg-[#1e1e1f]/70 backdrop-blur-xl
                border border-white/5
                rounded-xl p-4
                transition-all duration-300
                hover:border-[#f0b429]/30
                hover:shadow-[0_10px_30px_rgba(240,180,41,0.1)]
              "
              >
                <h4 className="text-sm font-semibold text-white mb-1">
                  {item.title}
                </h4>

                <p className="text-xs text-[#888] mb-1">{item.subtitle}</p>

                <span className="text-xs text-[#f0b429] font-medium">
                  {item.period}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* DOWNLOAD BUTTON */}
      <div className="flex justify-center md:justify-start">
        <Button
          onClick={handleDownloadCV}
          icon={<Download className="h-4 w-4" />}
          iconPosition="left"
          className="
            bg-[#f0b429] text-black
            hover:bg-[#ffcc4d]
            transition-all duration-300
            hover:scale-105
            shadow-[0_5px_20px_rgba(240,180,41,0.3)]
          "
        >
          Download CV
        </Button>
      </div>
    </article>
  );
}
