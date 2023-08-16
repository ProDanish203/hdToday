"use client"
import { Footer, Header, Loader } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { useEffect, useState } from "react";

export const metadata: Metadata = {
  title: 'HdToday | Watch Free Movies',
  description: 'Watch all your favourite movies free on just one stop.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const clear = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(clear);
  }, [])
  return (
    <html lang="en">
      <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body>
        <Header/>
        {
        !loading ? children : (
          <div className='min-h-[90vh] w-full flex items-center justify-center px-3 py-2'>
            <Loader/>
          </div>
        )
        }
        <Footer/>
      </body>
    </html>
  )
}
