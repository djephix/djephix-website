import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "bg-foreground text-primary-foreground hover:bg-foreground/90",
        "default-outline":
          "bg-transapent text-primary border border-primary hover:bg-primary hover:text-primary-foreground",
        "secondary-outline":
          "bg-transparent text-foreground border border-foreground hover:bg-foreground hover:text-primary-foreground",
        light:
          "bg-primary-foreground text-primary hover:bg-primary-foreground/90",
        "light-outline":
          "bg-transparent text-primary-foreground hover:bg-primary-foreground/90 hover:text-primary border border-primary-foreground",
      },
      size: {
        default: "h-10 px-5 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        // className={cn(buttonVariants({ variant, size, className }))}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
