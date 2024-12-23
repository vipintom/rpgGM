"use client"

    import * as React from "react"
    import { Moon, Sun } from 'lucide-react'
    import { useState, useEffect } from 'react';

    import { Button } from "./ui/button"
    import {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuTrigger,
    } from "./ui/dropdown-menu"

    export function ModeToggle() {
      const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

      useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.classList.toggle('dark', theme === 'dark');
      }, [theme]);

      const toggleTheme = (newTheme) => {
        setTheme(newTheme);
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => toggleTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => toggleTheme("dark")}>
              Dark
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
