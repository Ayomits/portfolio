import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "../lib/cn";
import { motion } from "motion/react";

const buttonStyles = cva(
  "flex cursor-pointer justify-center items-center gap-2 py-4 rounded-lg [&>svg]:size-6 transition-all duration-300 hover:scale-110 active:scale-125 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      color: {
        primary: "bg-primary hover:bg-primary-hover active:bg-primary-active",
        secondary:
          "bg-secondary hover:bg-secondary-hover activer:bg-secondary-active",
      },
      size: {
        circle: "rounded-full size-16",
        lg: "h-16 px-14",
      },
    },
    defaultVariants: {
      color: "secondary",
      size: "lg",
    },
  }
);

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonStyles> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size, color, className, ...props }: ButtonProps) => {
    return (
      <button
        className={cn(buttonStyles({ size, color }), className)}
        {...props}
      />
    );
  }
);

export const MButton = motion(Button);
