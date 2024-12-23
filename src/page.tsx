'use client'

import { useState, useEffect } from 'react'
import GameSheetInput from './components/GameSheetInput'
import CommandInput from './components/CommandInput'
import GameMasterOutput from './components/GameMasterOutput'
import MatureContentWarning from './components/MatureContentWarning'
import RelationshipTracker from './components/RelationshipTracker'
import CharacterProfile from './components/CharacterProfile'
import CurrentLocation from './components/CurrentLocation'
import Layout from './components/Layout'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth > 768)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Layout>
      <MatureContentWarning />
      <div className={`mx-auto space-y-6 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'max-w-3xl' : 'max-w-4xl'}`}>
        <Tabs defaultValue="game" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="game">Game</TabsTrigger>
            <TabsTrigger value="relationships">Relationships</TabsTrigger>
            <TabsTrigger value="characters">Characters</TabsTrigger>
            <TabsTrigger value="location">Location</TabsTrigger>
          </TabsList>
          <TabsContent value="game">
            <GameSheetInput />
            <GameMasterOutput />
            <CommandInput />
          </TabsContent>
          <TabsContent value="relationships">
            <RelationshipTracker />
          </TabsContent>
          <TabsContent value="characters">
            <CharacterProfile />
          </TabsContent>
          <TabsContent value="location">
            <CurrentLocation 
              location="Downtown Cafe" 
              description="A cozy cafe with soft jazz playing in the background. The aroma of freshly brewed coffee fills the air."
            />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}
