import * as React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  Check,
  X,
  Menu,
  Sparkles,
  Cpu,
  Layers,
  Shield,
  Zap,
  Globe,
  Code,
  Activity,
  FileText,
  Mail,
  Send,
  LucideProps,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";

export interface IconProps extends LucideProps {
  className?: string;
  size?: number;
}

const defaultStrokeWidth = 1.75;

export const Icons = {
  ArrowRight: (props: IconProps) => <ArrowRight strokeWidth={defaultStrokeWidth} size={16} {...props} />,
  ArrowUpRight: (props: IconProps) => <ArrowUpRight strokeWidth={defaultStrokeWidth} size={16} {...props} />,
  ChevronDown: (props: IconProps) => <ChevronDown strokeWidth={defaultStrokeWidth} size={16} {...props} />,
  ChevronRight: (props: IconProps) => <ChevronRight strokeWidth={defaultStrokeWidth} size={16} {...props} />,
  Check: (props: IconProps) => <Check strokeWidth={defaultStrokeWidth} size={16} {...props} />,
  Close: (props: IconProps) => <X strokeWidth={defaultStrokeWidth} size={18} {...props} />,
  Menu: (props: IconProps) => <Menu strokeWidth={defaultStrokeWidth} size={20} {...props} />,
  Sparkles: (props: IconProps) => <Sparkles strokeWidth={defaultStrokeWidth} size={18} {...props} />,
  Intelligence: (props: IconProps) => <Cpu strokeWidth={defaultStrokeWidth} size={18} {...props} />,
  Architecture: (props: IconProps) => <Layers strokeWidth={defaultStrokeWidth} size={18} {...props} />,
  Security: (props: IconProps) => <Shield strokeWidth={defaultStrokeWidth} size={18} {...props} />,
  Speed: (props: IconProps) => <Zap strokeWidth={defaultStrokeWidth} size={18} {...props} />,
  Global: (props: IconProps) => <Globe strokeWidth={defaultStrokeWidth} size={18} {...props} />,
  Code: (props: IconProps) => <Code strokeWidth={defaultStrokeWidth} size={18} {...props} />,
  Activity: (props: IconProps) => <Activity strokeWidth={defaultStrokeWidth} size={18} {...props} />,
  Document: (props: IconProps) => <FileText strokeWidth={defaultStrokeWidth} size={18} {...props} />,
  Mail: (props: IconProps) => <Mail strokeWidth={defaultStrokeWidth} size={18} {...props} />,
  Send: (props: IconProps) => <Send strokeWidth={defaultStrokeWidth} size={16} {...props} />,
};

export function IconWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center justify-center shrink-0", className)}>
      {children}
    </span>
  );
}
