import * as React from "react"
    import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"

    import { cn } from "../../lib/utils"

    const DropdownMenu = DropdownMenuPrimitive.Root
    const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
    
    const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => (
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          ref={ref}
          sideOffset={sideOffset}
          className={cn(
            "z-50 min-w-[160px] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[side=bottom]:animate-slide-up data-[side=left]:animate-slide-right data-[side=right]:animate-slide-left data-[side=top]:animate-slide-down",
            className
          )}
          {...props}
        />
      </DropdownMenuPrimitive.Portal>
    ))
    DropdownMenuContent.displayName = "DropdownMenuContent"
    
    const DropdownMenuItem = React.forwardRef(({ className, ...props }, ref) => (
      <DropdownMenuPrimitive.Item
        ref={ref}
        className={cn(
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          className
        )}
        {...props}
      />
    ))
    DropdownMenuItem.displayName = "DropdownMenuItem"
    
    const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => (
      <DropdownMenuPrimitive.Separator
        ref={ref}
        className={cn("-mx-1 my-1 h-px bg-border", className)}
        {...props}
      />
    ))
    DropdownMenuSeparator.displayName = "DropdownMenuSeparator"
    
    const DropdownMenuLabel = React.forwardRef(({ className, ...props }, ref) => (
      <DropdownMenuPrimitive.Label
        ref={ref}
        className={cn("px-2 py-1.5 text-sm font-semibold", className)}
        {...props}
      />
    ))
    DropdownMenuLabel.displayName = "DropdownMenuLabel"
    
    export {
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuSeparator,
      DropdownMenuLabel,
    }
