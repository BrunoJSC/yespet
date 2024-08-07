import { cn } from "@/lib/utils";

export function MaxWrapper({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return <main className={cn("max-w-7xl mx-auto", className)}>{children}</main>;
}
