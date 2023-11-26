import { HTMLAttributes, ReactNode } from "react";

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: TVariant;
  color?: TColor;
};

const variants: Record<TVariant, Record<TColor, string>> = {
  contained: {
    primary: "bg-primary text-white",
    success: "bg-meta-3 text-white",
    secondary: "bg-black text-white",
    error: "bg-danger text-white",
  },
  outlined: {
    primary: "border border-primary text-primary",
    success: "border border-meta-3 text-meta-3",
    secondary: "border border-black text-black",
    error: "border border-r-meta-1 text-danger",
  },
};

const baseClasses =
  "inline-flex items-center justify-center rounded-md py-4 px-10 text-center font-medium hover:bg-opacity-90 lg:px-8 xl:px-10";

const Button = ({
  children,
  variant = "contained",
  color = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button className={`${baseClasses} ${variants[variant][color]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
