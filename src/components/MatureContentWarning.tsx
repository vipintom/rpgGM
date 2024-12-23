'use client'

    import { useState } from 'react'
    import { motion, AnimatePresence } from 'framer-motion'
    import { AlertTriangle } from 'lucide-react'
    import { Button } from './ui/button'
    import {
      Card,
      CardContent,
      CardDescription,
      CardFooter,
      CardHeader,
      CardTitle,
    } from './ui/card'

    export default function MatureContentWarning() {
      const [isVisible, setIsVisible] = useState(true)

      return (
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50"
            >
              <Card className="w-[350px]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                    Mature Content Warning
                  </CardTitle>
                  <CardDescription>
                    This application contains mature and explicit content.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    By proceeding, you confirm that you are of legal age and consent to view such material.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => setIsVisible(false)} className="w-full">
                    I Understand and Agree
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      )
    }
