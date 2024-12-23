'use client'

    import { useState } from 'react'
    import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
    import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
    import { Badge } from "./ui/badge"
    import { Progress } from "./ui/progress"
    import { Textarea } from "./ui/textarea"
    import { Button } from "./ui/button"
    import { ScrollArea } from "./ui/scroll-area"
    import { motion } from "framer-motion"
    import { Heart, Star, User, Briefcase, Smile, PenTool } from 'lucide-react'

    interface Character {
      name: string
      age: number
      occupation: string
      appearance: string
      personality: string
      relationshipLevel: number
      intimacyLevel: number
      image: string
    }

    const characters: Character[] = [
      {
        name: "Alice",
        age: 28,
        occupation: "Software Engineer",
        appearance: "Tall with long brown hair and green eyes",
        personality: "Intelligent, witty, and slightly introverted",
        relationshipLevel: 75,
        intimacyLevel: 60,
        image: "/placeholder.svg"
      },
      {
        name: "Beth",
        age: 32,
        occupation: "Marketing Manager",
        appearance: "Athletic build with short blonde hair",
        personality: "Outgoing, ambitious, and adventurous",
        relationshipLevel: 40,
        intimacyLevel: 20,
        image: "/placeholder.svg"
      },
      {
        name: "Carol",
        age: 30,
        occupation: "Artist",
        appearance: "Petite with curly red hair and freckles",
        personality: "Creative, free-spirited, and empathetic",
        relationshipLevel: 90,
        intimacyLevel: 85,
        image: "/placeholder.svg"
      }
    ]

    export default function CharacterProfile() {
      const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null)
      const [notes, setNotes] = useState<{ [key: string]: string }>({})

      const handleNoteChange = (name: string, note: string) => {
        setNotes(prevNotes => ({ ...prevNotes, [name]: note }))
      }

      return (
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Character Profiles</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px]">
              {characters.map((character, index) => (
                <motion.div
                  key={character.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-4 p-4 border rounded-lg cursor-pointer hover:bg-accent"
                  onClick={() => setSelectedCharacter(character)}
                >
                  <div className="flex items-center mb-2">
                    <Avatar className="h-10 w-10 mr-2">
                      <AvatarImage src={character.image} alt={character.name} />
                      <AvatarFallback>{character.name[0]}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-semibold">{character.name}</h3>
                  </div>
                  <Badge className="mb-2">{character.occupation}</Badge>
                  <div className="flex items-center mb-2">
                    <Heart className="mr-2 h-4 w-4 text-red-500" />
                    <Progress value={character.relationshipLevel} className="flex-grow" />
                  </div>
                  <div className="flex items-center">
                    <Star className="mr-2 h-4 w-4 text-yellow-500" />
                    <Progress value={character.intimacyLevel} className="flex-grow" />
                  </div>
                </motion.div>
              ))}
            </ScrollArea>
            {selectedCharacter && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 border rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4">{selectedCharacter.name}</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <span>Age: {selectedCharacter.age}</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="mr-2 h-4 w-4" />
                    <span>Occupation: {selectedCharacter.occupation}</span>
                  </div>
                  <div className="flex items-center">
                    <PenTool className="mr-2 h-4 w-4" />
                    <span>Appearance: {selectedCharacter.appearance}</span>
                  </div>
                  <div className="flex items-center">
                    <Smile className="mr-2 h-4 w-4" />
                    <span>Personality: {selectedCharacter.personality}</span>
                  </div>
                </div>
                <Textarea
                  placeholder="Add your notes here..."
                  value={notes[selectedCharacter.name] || ''}
                  onChange={(e) => handleNoteChange(selectedCharacter.name, e.target.value)}
                  className="mb-2"
                />
                <Button onClick={() => console.log('Notes saved:', notes[selectedCharacter.name])}>
                  Save Notes
                </Button>
              </motion.div>
            )}
          </CardContent>
        </Card>
      )
    }
