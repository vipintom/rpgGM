import { ScrollArea } from "./ui/scroll-area"
    import { Button } from "./ui/button"
    import { PlusCircle } from 'lucide-react'
    import { motion, AnimatePresence } from 'framer-motion'

    const games = [
      "The Enchanted Realm",
      "Cyberpunk Nights",
      "Galactic Odyssey",
      "Vampire's Kiss",
      "Steamy Pirate Adventure",
    ]

    interface SidebarProps {
      isOpen: boolean
    }

    export default function Sidebar({ isOpen }: SidebarProps) {
      return (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 256, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="bg-background border-r overflow-hidden"
            >
              <div className="w-64 p-4">
                <h2 className="text-lg font-semibold mb-4">Your Games</h2>
                <ScrollArea className="h-[calc(100vh-8rem)]">
                  <ul className="space-y-2">
                    {games.map((game, index) => (
                      <li key={index}>
                        <Button variant="ghost" className="w-full justify-start">
                          {game}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
                <Button className="w-full mt-4">
                  <PlusCircle className="mr-2 h-4 w-4" /> New Game
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )
    }
