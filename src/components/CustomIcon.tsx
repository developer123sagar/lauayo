import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

type CustomIconProps = {
  icon: IconType;
  className?: string;
  size?: number;
  color?: string;
  onClick?: () => void;
};

export default function CustomIcon({
  icon: IconComponent,
  className,
  color,
  size = 28,
  onClick,
}: CustomIconProps) {
  return (
    <IconComponent
      className={cn(`cursor-pointer`, className, {})}
      color={color}
      size={size}
      onClick={onClick}
    />
  );
}
