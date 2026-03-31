"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Navbar } from "@/components/layout/navbar";
import { useSidebar } from "@/hooks/useSidebar";
import { Card } from "@/components/ui/card";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isExpanded, toggle, collapse } = useSidebar();

  return (
    <div className="min-h-screen bg-[#111112] relative overflow-hidden">
      {/* glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#f0b429]/10 blur-[120px]" />
        <div className="absolute bottom-[-120px] right-[-100px] w-[300px] h-[300px] bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-6 pb-24 md:px-6 md:py-10 md:pb-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[270px_1fr] lg:grid-cols-[290px_1fr] md:gap-6 md:items-start">
          {/* SIDEBAR */}
          <div className="animate-fade-in-left">
            <Sidebar isExpanded={isExpanded} onToggle={toggle} />
          </div>

          {/* MAIN */}
          <div className="flex flex-col gap-4 min-w-0">
            {/* NAVBAR */}
            <div className="animate-fade-in-up">
              <Navbar onNavigate={collapse} />
            </div>

            {/* CONTENT */}
            <Card
              className="relative p-6 md:p-8 min-h-[500px] min-w-0
              bg-[#1e1e1f]/80 backdrop-blur-xl
              border border-white/5
              shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            >
              <div className="pointer-events-none absolute inset-0 rounded-xl bg-white/[0.02]" />
              <div className="animate-fade-up">{children}</div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
