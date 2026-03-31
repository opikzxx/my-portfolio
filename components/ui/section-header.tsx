import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}

export const SectionHeader = ({
  title,
  icon: Icon,
  className,
}: SectionHeaderProps) => {
  if (Icon) {
    return (
      <div className={cn("flex items-center gap-3 mb-5", className)}>
        <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-[#f0b429]/10 border border-[#f0b429]/20">
          <Icon className="h-4 w-4 text-[#f0b429]" />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
    );
  }

  return (
    <header className={cn("mb-6", className)}>
      <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>
      <div className="mt-2 h-0.5 w-10 rounded-full bg-[#f0b429]" />
    </header>
  );
};
