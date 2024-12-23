import { ModeToggle } from './ModeToggle'
    import { Button } from "./ui/button"
    import { Menu } from 'lucide-react'

    interface HeaderProps {
      toggleSidebar: () => void
    }

    export default function Header({ toggleSidebar }: HeaderProps) {
      return (
        <header className="bg-background border-b">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" onClick={toggleSidebar} className="mr-4">
                <Menu className="h-6 w-6" />
              </Button>
              <h1 className="text-2xl font-bold">AI Game Master RPG</h1>
            </div>
            <ModeToggle />
          </div>
        </header>
      )
    }
