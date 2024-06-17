import { cn } from "@/lib/utils";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  labelClass?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type = "text",
  required = true,
  disabled = false,
  className,
  labelClass,
  ...props
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className={cn(
          `
         block
         text-sm 
         font-medium 
         leading-6
        text-gray-900
        `,
          labelClass,
          {}
        )}
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          type={type}
          disabled={disabled}
          required={required}
          className={cn(
            `
            w-full border-black border-2 bg-transparent py-3 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none`,
            className,
            {}
          )}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
