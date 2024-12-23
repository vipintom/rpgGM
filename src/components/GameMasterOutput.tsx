'use client'

    import { useEffect, useRef, useState } from 'react'
    import { ScrollArea } from "./ui/scroll-area"
    import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
    import ReactMarkdown from 'react-markdown'
    import remarkGfm from 'remark-gfm'

    interface GameMasterResponse {
      text: string
      image?: string
    }

    export default function GameMasterOutput() {
      const [responses, setResponses] = useState<GameMasterResponse[]>([
        { text: "Welcome to the game. The night is dark and full of possibilities. What would you like to do?" }
      ])
      const scrollAreaRef = useRef<HTMLDivElement>(null)

      useEffect(() => {
        if (scrollAreaRef.current) {
          scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
        }
      }, [responses])

      // This function would be called when a new response is received from the AI
      const addResponse = (newResponse: GameMasterResponse) => {
        setResponses(prevResponses => [...prevResponses, newResponse])
      }

      return (
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Game Master</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] w-full rounded-md border p-4" ref={scrollAreaRef}>
              {responses.map((response, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      p: ({ node, ...props }) => <p className="mb-2" {...props} />,
                      strong: ({ node, ...props }) => <span className="font-bold" {...props} />,
                      em: ({ node, ...props }) => <span className="italic" {...props} />,
                      h1: ({ node, ...props }) => <h1 className="text-2xl font-bold mb-2" {...props} />,
                      h2: ({ node, ...props }) => <h2 className="text-xl font-bold mb-2" {...props} />,
                      h3: ({ node, ...props }) => <h3 className="text-lg font-bold mb-2" {...props} />,
                      ul: ({ node, ...props }) => <ul className="list-disc pl-5 mb-2" {...props} />,
                      ol: ({ node, ...props }) => <ol className="list-decimal pl-5 mb-2" {...props} />,
                      li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                      blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-2" {...props} />,
                    }}
                  >
                    {response.text}
                  </ReactMarkdown>
                  {response.image && (
                    <div className="mt-2">
                      <img
                        src={response.image}
                        alt="Scene image"
                        style={{ width: '100%', height: 'auto', maxWidth: '300px' }}
                        className="rounded-md"
                      />
                    </div>
                  )}
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      )
    }
