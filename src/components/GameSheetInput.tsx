'use client'

    import { useState } from 'react'
    import { Textarea } from "./ui/textarea"
    import { Button } from "./ui/button"
    import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
    import { ScrollArea } from "./ui/scroll-area"
    import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
    import ReactMarkdown from 'react-markdown'
    import remarkGfm from 'remark-gfm'
    import { Save, Upload, Hash } from 'lucide-react'

    export default function GameSheetInput() {
      const [gameSheet, setGameSheet] = useState('')
      const [error, setError] = useState('')

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (gameSheet.trim() === '') {
          setError('Game sheet cannot be empty')
          return
        }
        setError('')
        // TODO: Process the game sheet (send to AI, store in state, etc.)
        console.log('Game sheet submitted:', gameSheet)
      }

      const handleSave = () => {
        localStorage.setItem('gameSheet', gameSheet)
        console.log('Game sheet saved to local storage')
      }

      const handleLoad = () => {
        const savedGameSheet = localStorage.getItem('gameSheet')
        if (savedGameSheet) {
          setGameSheet(savedGameSheet)
          console.log('Game sheet loaded from local storage')
        }
      }

      const handleTagSection = () => {
        const cursorPosition = (document.getElementById('gameSheetInput') as HTMLTextAreaElement).selectionStart
        const textBeforeCursor = gameSheet.substring(0, cursorPosition)
        const textAfterCursor = gameSheet.substring(cursorPosition)
        setGameSheet(`${textBeforeCursor}#section_name\n${textAfterCursor}`)
      }

      return (
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Game Sheet Input</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Tabs defaultValue="edit">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="edit">Edit</TabsTrigger>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                </TabsList>
                <TabsContent value="edit">
                  <Textarea
                    id="gameSheetInput"
                    value={gameSheet}
                    onChange={(e) => setGameSheet(e.target.value)}
                    placeholder="Enter your game sheet here. You can use Markdown for formatting."
                    className="min-h-[300px]"
                  />
                </TabsContent>
                <TabsContent value="preview">
                  <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {gameSheet}
                    </ReactMarkdown>
                  </ScrollArea>
                </TabsContent>
              </Tabs>
              {error && <p className="text-red-500 mt-2">{error}</p>}
              <div className="flex justify-between mt-4">
                <div>
                  <Button type="button" variant="outline" className="mr-2" onClick={handleSave}>
                    <Save className="mr-2 h-4 w-4" /> Save
                  </Button>
                  <Button type="button" variant="outline" className="mr-2" onClick={handleLoad}>
                    <Upload className="mr-2 h-4 w-4" /> Load
                  </Button>
                  <Button type="button" variant="outline" onClick={handleTagSection}>
                    <Hash className="mr-2 h-4 w-4" /> Tag Section
                  </Button>
                </div>
                <Button type="submit">Submit Game Sheet</Button>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              Use Markdown for formatting. Tag sections with #section_name for easier AI parsing.
            </p>
          </CardFooter>
        </Card>
      )
    }
