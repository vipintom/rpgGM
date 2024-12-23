'use client'

    import { useState } from 'react'
    import Header from './Header'
    import Footer from './Footer'
    import Sidebar from './Sidebar'

    export default function Layout({ children }: { children: React.ReactNode }) {
      const [isSidebarOpen, setIsSidebarOpen] = useState(true)

      return (
        <div className="flex flex-col min-h-screen">
          <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
          <div className="flex flex-1">
            <Sidebar isOpen={isSidebarOpen} />
            <main className="flex-1 p-4 transition-all duration-300 ease-in-out">
              {children}
            </main>
          </div>
          <Footer />
        </div>
      )
    }
