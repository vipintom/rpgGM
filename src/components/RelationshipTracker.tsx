'use client'

    import { useState } from 'react'
    import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
    import { Progress } from "./ui/progress"
    import { Badge } from "./ui/badge"
    import { ScrollArea } from "./ui/scroll-area"
    import { motion } from "framer-motion"
    import { Heart, Star } from 'lucide-react'

    interface Relationship {
      name: string
      level: number
      intimacy: number
      status: 'Acquaintance' | 'Friend' | 'Romantic Interest' | 'Lover' | 'Exclusive'
      events: string[]
    }

    const relationships: Relationship[] = [
      {
        name: "Alice",
        level: 75,
        intimacy: 60,
        status: 'Romantic Interest',
        events: ["First Date", "First Kiss"]
      },
      {
        name: "Beth",
        level: 40,
        intimacy: 20,
        status: 'Friend',
        events: ["Coffee Meetup"]
      },
      {
        name: "Carol",
        level: 90,
        intimacy: 85,
        status: 'Lover',
        events: ["First Date", "First Kiss", "Intimate Encounter"]
      }
    ]

    export default function RelationshipTracker() {
      const [selectedRelationship, setSelectedRelationship] = useState<Relationship | null>(null)

      return (
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Relationships</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px]">
              {relationships.map((relationship, index) => (
                <motion.div
                  key={relationship.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-4 p-4 border rounded-lg cursor-pointer hover:bg-accent"
                  onClick={() => setSelectedRelationship(relationship)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">{relationship.name}</h3>
                    <Badge>{relationship.status}</Badge>
                  </div>
                  <div className="flex items-center mb-2">
                    <Heart className="mr-2 h-4 w-4 text-red-500" />
                    <Progress value={relationship.level} className="flex-grow" />
                  </div>
                  <div className="flex items-center">
                    <Star className="mr-2 h-4 w-4 text-yellow-500" />
                    <Progress value={relationship.intimacy} className="flex-grow" />
                  </div>
                </motion.div>
              ))}
            </ScrollArea>
            {selectedRelationship && (
              <div className="mt-4 p-4 border rounded-lg">
                <h3 className="text-lg font-semibold mb-2">{selectedRelationship.name} - Key Events</h3>
                <ul className="list-disc pl-5">
                  {selectedRelationship.events.map((event, index) => (
                    <li key={index}>{event}</li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      )
    }
