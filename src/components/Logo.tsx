import React from "react";

import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  large?: boolean;
}

const Logo = ({ className, large, ...props }: LogoProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex_center" onClick={() => navigate("/")}>
      <img
        src="/logo.png"
        alt="lauaayo"
        className={cn(`object-cover cursor-pointer w-20`, className, {
          "w-[300px]": large,
        })}
        {...props}
      />
    </div>
  );
};

export default Logo;
