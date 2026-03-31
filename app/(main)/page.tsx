"use client";

import Image from "next/image";
import { ABOUT_DESCRIPTION, SERVICES, SKILLS } from "@/constants";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <article className="animate-fade-up">
      <SectionHeader title="About me" />

      {/* DESCRIPTION */}
      <div className="space-y-4 text-sm leading-relaxed text-[#aaa] md:text-base mb-8">
        {ABOUT_DESCRIPTION.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>

      {/* SERVICES */}
      <section className="mb-10">
        <h3 className="text-lg font-semibold text-white mb-5">
          What I&apos;m doing
        </h3>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <Card
              key={title}
              className="group flex items-start gap-4 p-5 
              bg-[#1e1e1f]/70 backdrop-blur-xl
              border border-white/5
              hover:border-[#f0b429]/30
              transition-all duration-300
              hover:shadow-[0_10px_30px_rgba(240,180,41,0.15)]"
            >
              {/* ICON */}
              <div className="shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-8 w-8 text-[#f0b429]" />
              </div>

              {/* TEXT */}
              <div>
                <h4 className="font-semibold text-white text-sm mb-1">
                  {title}
                </h4>
                <p className="text-xs text-[#888] leading-relaxed group-hover:text-[#aaa] transition-colors">
                  {desc}
                </p>
              </div>
            </Card>
          ))}
        </ul>
      </section>

      {/* SKILLS */}
      <section>
        <h3 className="text-lg font-semibold text-white mb-5">Skills</h3>
        <ul
          className="flex gap-4 overflow-x-auto p-2 
        scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#383838]"
        >
          {SKILLS.map(({ name, logo }) => (
            <li key={name} className="shrink-0">
              <div
                className="group h-20 w-20 sm:h-30 sm:w-30 rounded-2xl
                bg-[#1e1e1f]/70 backdrop-blur-xl
                border border-white/5
                flex items-center justify-center p-4
                transition-all duration-300
                hover:border-[#f0b429]/40
                hover:scale-105"
              >
                <Image
                  src={logo}
                  alt={name}
                  width={60}
                  height={60}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
