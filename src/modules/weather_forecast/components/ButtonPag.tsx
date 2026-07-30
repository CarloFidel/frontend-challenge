import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string | number;
  variant: "offline" | "fill";
  disabled?: boolean;
}
const ButtonPag = ({ disabled, variant, ...props }: Props) => {
  return (
    <button
      disabled={disabled}
      className={`border flex gap-1 border-border/50 ${variant === "fill" ? "bg-base-500/20" : "bg-background-secondary/40 "} ${disabled && "opacity-30"}  rounded-full  active:bg-background-secondary cursor-pointer transition-all text-xs w-8 h-8 justify-center items-center`}
      {...props}
    ></button>
  );
};

export default ButtonPag;
