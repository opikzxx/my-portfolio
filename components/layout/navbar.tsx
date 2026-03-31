"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { TABS } from "@/constants";

export const Navbar = ({ onNavigate }: { onNavigate?: () => void }) => {
  const pathname = usePathname();

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav
        className="hidden md:flex items-center justify-end rounded-[14px] 
        bg-[#1e1e1f]/80 backdrop-blur-xl 
        border border-white/5 
        px-2 py-2 
        shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
      >
        {TABS.map((tab) => {
          const isActive =
            pathname === tab.href ||
            (tab.href !== "/" && pathname.startsWith(tab.href));

          return (
            <Link key={tab.id} href={tab.href} onClick={onNavigate}>
              <button
                className={cn(
                  "relative px-5 py-2 text-sm font-medium rounded-[10px]",
                  "transition-all duration-300",
                  "hover:scale-105",
                  isActive
                    ? "text-[#f0b429]"
                    : "text-[#888] hover:text-white"
                )}
              >
                {/* Active background */}
                {isActive && (
                  <span className="absolute inset-0 rounded-[10px] bg-[#f0b429]/10 blur-sm" />
                )}

                <span className="relative z-10">{tab.label}</span>
              </button>
            </Link>
          );
        })}
      </nav>

      {/* MOBILE NAVBAR */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden 
        border-t border-white/5 
        bg-[#1e1e1f]/80 backdrop-blur-xl 
        shadow-[0_-10px_30px_rgba(0,0,0,0.3)]"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <div className="flex">
          {TABS.map((tab) => {
            const isActive =
              pathname === tab.href ||
              (tab.href !== "/" && pathname.startsWith(tab.href));

            return (
              <Link key={tab.id} href={tab.href} onClick={onNavigate} className="flex flex-1">
                <button
                  className={cn(
                    "flex flex-1 flex-col items-center justify-center gap-1 py-3",
                    "text-[11px] font-medium transition-all duration-300",
                    "hover:scale-105",
                    isActive ? "text-[#f0b429]" : "text-[#555]"
                  )}
                >
                  {/* Indicator */}
                  <span
                    className={cn(
                      "h-1 w-6 rounded-full transition-all duration-300",
                      isActive
                        ? "bg-[#f0b429] shadow-[0_0_10px_rgba(240,180,41,0.6)]"
                        : "bg-transparent"
                    )}
                  />

                  {/* Label */}
                  <span
                    className={cn(
                      "transition-colors",
                      isActive ? "text-[#f0b429]" : "text-[#666]"
                    )}
                  >
                    {tab.label}
                  </span>
                </button>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};