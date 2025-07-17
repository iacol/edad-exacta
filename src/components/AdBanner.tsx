import { cn } from "@/lib/utils";

interface AdBannerProps {
  className?: string;
  position: "top" | "side" | "bottom";
}

export function AdBanner({ className, position }: AdBannerProps) {
  let dimensions = "";
  let label = "";
  
  switch (position) {
    case "top":
      dimensions = "h-[90px] w-full";
      label = "Banner Superior";
      break;
    case "side":
      dimensions = "h-[600px] w-[300px]";
      label = "Banner Lateral";
      break;
    case "bottom":
      dimensions = "h-[90px] w-full";
      label = "Banner Inferior";
      break;
  }
  
  return (
    <div className={cn(
      "ad-placeholder rounded-lg flex items-center justify-center",
      dimensions,
      className
    )}>
      <p className="text-gray-500 font-medium">Espacio para publicidad - {label}</p>
    </div>
  );
}