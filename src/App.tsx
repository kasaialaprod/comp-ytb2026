import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import './App.css'

export default function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(prefersDark)
    document.documentElement.classList.toggle('dark', prefersDark)
  }, [])

  const toggleTheme = () => {
    const nextIsDark = !isDark
    setIsDark(nextIsDark)
    document.documentElement.classList.toggle('dark', nextIsDark)
  }
  return (
      <div className="min-h-screen overflow-x-hidden" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Header onToggleTheme={toggleTheme} isDark={isDark} />
      <main>
        <Hero />
      </main>
    </div>
  )
}