import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto max-w-5xl px-6 sm:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section
      className={cn("py-12 sm:py-16", className)}
      {...props}
    >
      {children}
    </section>
  );
}

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ eyebrow, title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {eyebrow && (
        <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
          {eyebrow}
        </p>
      )}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] leading-[1.1]">
        {title}
      </h1>
      {description && (
        <p className="text-base sm:text-lg leading-[1.7] text-muted-foreground/90 max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
