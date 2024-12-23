'use client'

    import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
    import { MapPin } from 'lucide-react'
    import { motion } from "framer-motion"

    interface CurrentLocationProps {
      location: string
      description: string
    }

    export default function CurrentLocation({ location, description }: CurrentLocationProps) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Current Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">{location}</h3>
              <p>{description}</p>
            </CardContent>
          </Card>
        </motion.div>
      )
    }
