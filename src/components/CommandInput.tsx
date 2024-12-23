'use client'

    import { useState, useRef, useEffect } from 'react'
    import { Input } from "./ui/input"
    import { Button } from "./ui/button"
    import { Send } from 'lucide-react'

    export default function CommandInput() {
      const [command, setCommand] = useState('')
      const inputRef = useRef<HTMLInputElement>(null)

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (command.trim() !== '') {
          // TODO: Process the command (send to AI, update game state, etc.)
          console.log('Command submitted:', command)
          setCommand('')
        }
      }

      const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
          handleSubmit(e)
        }
      }

      useEffect(() => {
        // Focus the input field when the component mounts
        inputRef.current?.focus()
      }, [])

      return (
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
          <Input
            ref={inputRef}
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="What do you do?"
            className="flex-grow"
            aria-label="Enter your command"
          />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
            <span className="sr-only">Send command</span>
          </Button>
        </form>
      )
    }
