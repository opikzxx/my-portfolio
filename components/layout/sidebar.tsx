import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SOCIAL_LINKS, CONTACT_INFO, PROFILE } from "@/constants";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

interface SidebarProps {
  isExpanded: boolean;
  onToggle: () => void;
}

export const Sidebar = ({ isExpanded, onToggle }: SidebarProps) => {
  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-500",
        "md:flex md:flex-col md:sticky md:top-8 md:h-fit py-8",
        "bg-[#1e1e1f]/80 backdrop-blur-xl border border-white/5",
        "shadow-[0_10px_40px_rgba(0,0,0,0.4)]",
        isExpanded ? "pb-6" : ""
      )}
    >
      {/* MOBILE HEADER */}
      <div className="flex items-center gap-4 p-5">
        <div className="relative shrink-0 md:hidden">
          <div className="h-16 w-16 rounded-2xl bg-[#2a2a2b] flex items-center justify-center text-4xl ring-1 ring-white/5">
            {PROFILE.avatar}
          </div>
          <span className="absolute bottom-0.5 right-0.5 h-3 w-3 rounded-full bg-green-400 ring-2 ring-[#1e1e1f] animate-pulse" />
        </div>

        <div className="flex-1 min-w-0 md:hidden">
          <h1 className="text-base font-bold text-white truncate">
            {PROFILE.name}
          </h1>
          <p className="mt-0.5 text-xs text-[#888] bg-[#2a2a2b] inline-block px-2 py-0.5 rounded-full">
            {PROFILE.role}
          </p>
        </div>

        <Button
          onClick={onToggle}
          variant="secondary"
          size="sm"
          className="ml-auto md:hidden hover:scale-105 transition"
        >
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-all duration-300 ease-in-out",
              isExpanded && "rotate-180 scale-110"
            )}
          />
        </Button>
      </div>

      {/* DESKTOP PROFILE */}
      <div className="hidden md:flex flex-col items-center text-center px-6 pb-2">
        <div className="relative mb-4 group">
          <div className="h-28 w-28 rounded-2xl bg-[#2a2a2b] flex items-center justify-center text-5xl ring-1 ring-white/5 transition-all duration-300 group-hover:scale-105 group-hover:ring-[#f0b429]/40">
            {PROFILE.avatar}
          </div>

          {/* glow */}
          <div className="absolute inset-0 rounded-2xl bg-[#f0b429]/10 blur-xl opacity-0 group-hover:opacity-100 transition" />

          <span className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full bg-green-400 ring-2 ring-[#1e1e1f] animate-pulse" />
        </div>

        <h1 className="text-xl font-bold text-white">{PROFILE.name}</h1>
        <p className="mt-2 text-xs text-[#888] bg-[#2a2a2b] px-3 py-1 rounded-full">
          {PROFILE.role}
        </p>
      </div>

      {/* DIVIDER */}
      <div
        className={cn(
          "mx-5 h-px bg-gradient-to-r from-transparent via-[#383838] to-transparent",
          "hidden md:block",
          isExpanded && "!block"
        )}
      />

      {/* CONTACT */}
      <div
        className={cn(
          "px-5 pt-4 flex flex-col gap-3",
          "hidden md:flex",
          isExpanded && "!flex"
        )}
      >
        {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 group p-2 rounded-xl transition-all hover:bg-[#2a2a2b]/60"
          >
            <div className="h-9 w-9 shrink-0 rounded-lg bg-[#2a2a2b] flex items-center justify-center ring-1 ring-white/5 transition group-hover:scale-110 group-hover:ring-[#f0b429]/40">
              <Icon className="h-4 w-4 text-[#f0b429]" />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-semibold tracking-widest text-[#555] uppercase">
                {label}
              </p>
              <p className="text-sm text-[#aaa] truncate group-hover:text-white transition-colors">
                {value}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* DIVIDER */}
      <div
        className={cn(
          "mx-5 mt-4 h-px bg-gradient-to-r from-transparent via-[#383838] to-transparent",
          "hidden md:block",
          isExpanded && "!block"
        )}
      />

      {/* SOCIAL */}
      <div
        className={cn(
          "px-5 pt-4 flex gap-3 justify-center items-center",
          "hidden md:flex",
          isExpanded && "!flex"
        )}
      >
        {SOCIAL_LINKS.map(({ name, icon: Icon, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="h-9 w-9 flex items-center justify-center rounded-lg bg-[#2a2a2b] text-[#666] 
            hover:text-[#f0b429] transition-all duration-300 
            ring-1 ring-white/5 
            hover:scale-110 hover:ring-[#f0b429]/40 hover:shadow-[0_0_15px_rgba(240,180,41,0.3)]"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </Card>
  );
};
