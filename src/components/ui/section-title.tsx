import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  centered = true,
  dark = false,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {subtitle && (
        <span className={cn(
          "text-sm font-medium tracking-wider uppercase mb-2 block",
          dark ? "text-secondary" : "text-primary"
        )}>
          {subtitle}
        </span>
      )}
      <h2 className={cn(
        "text-3xl md:text-4xl font-bold tracking-tight",
        dark ? "text-white" : "text-foreground"
      )}>
        {title}
      </h2>
      <div className={cn(
        "mt-4 h-1 w-16 rounded-full",
        centered && "mx-auto",
        dark ? "bg-secondary" : "bg-primary"
      )} />
    </div>
  );
}
