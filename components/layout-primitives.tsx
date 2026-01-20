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
      className={cn("py-14 sm:py-16", className)}
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
        <p className="uppercase text-xs tracking-widest text-muted-foreground">
          {eyebrow}
        </p>
      )}
      <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
        {title}
      </h1>
      {description && (
        <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-3xl">
          {description}
        </p>
      )}
    </div>
  );
}
