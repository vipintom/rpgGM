'use client'

    import { useState } from 'react'
    import { motion } from 'framer-motion'
    import { Textarea } from './ui/textarea'
    import { Button } from './ui/button'
    import { ScrollText } from 'lucide-react'

    export default function GameSheet() {
      const [gameSheet, setGameSheet] = useState('')

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: Process the game sheet (send to AI, store in state, etc.)
        console.log('Game sheet submitted:', gameSheet)
      }

      return (
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <ScrollText className="h-5 w-5" />
            Game Sheet
          </h2>
          <Textarea
            value={gameSheet}
            onChange={(e) => setGameSheet(e.target.value)}
            placeholder="Enter your game sheet here..."
            className="min-h-[200px]"
          />
          <Button type="submit">Submit Game Sheet</Button>
        </motion.form>
      )
    }
