import { useEffect, useState } from 'react'
import background from './assets/recul-bbg.jpg'
import Header from './components/Header'
import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import { Hero3 } from './components/Hero3'
import { Footer } from './components/Footer'
import './App.css'
import { url } from 'zod'

export default function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'dark' || savedTheme === 'light') {
      const isDark = savedTheme === 'dark'
      setIsDark(isDark)
      document.documentElement.classList.toggle('dark', isDark)
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDark(prefersDark)
      document.documentElement.classList.toggle('dark', prefersDark)
    }
  }, [])

  const toggleTheme = () => {
    const nextIsDark = !isDark
    setIsDark(nextIsDark)
    localStorage.setItem('theme', nextIsDark ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', nextIsDark)
  }
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat md:p-6"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="mx-auto min-h-[100vh] max-w-[1600px] rounded-[2rem] bg-[var(--bg)]/92 text-[var(--text)] shadow-2xl backdrop-blur-md">
        <Header onToggleTheme={toggleTheme} isDark={isDark} />
        <main>
          <Hero />
          <Hero2 />
          <Hero3 />
        </main>
        <Footer />
      </div>
    </div>
  )
}