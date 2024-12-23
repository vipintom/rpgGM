import * as React from "react"
    import { cn } from "../../lib/utils"

    const Button = React.forwardRef(
      ({ className, variant, size, ...props }, ref) => {
        return (
          <button
            className={cn(
              "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
              variant === "ghost" &&
                "bg-transparent hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground",
              variant === "outline" &&
                "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground",
              variant === "secondary" &&
                "bg-secondary hover:bg-secondary/80",
              variant === "destructive" &&
                "bg-destructive hover:bg-destructive/80 text-destructive-foreground",
              variant === "link" && "text-primary underline-offset-4 hover:underline",
              size === "default" && "px-4 py-2",
              size === "sm" && "rounded-md px-3 text-xs",
              size === "lg" && "rounded-md px-8 py-3 text-sm",
              size === "icon" && "h-9 w-9",
              className
            )}
            ref={ref}
            {...props}
          />
        )
      }
    )
    Button.displayName = "Button"

    export { Button }
