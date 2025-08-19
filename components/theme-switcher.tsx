"use client"

import { useState, useEffect } from "react"
import { Sun, Moon, Monitor } from "lucide-react"

type Theme = "dark" | "system" | "light"

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("dark")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const root = window.document.documentElement

    // Remove existing theme classes
    root.classList.remove("dark")

    if (theme === "dark") {
      root.classList.add("dark")
    } else if (theme === "light") {
      // Light theme - no dark class needed
    } else {
      // system theme
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      if (systemTheme) {
        root.classList.add("dark")
      }
    }

    localStorage.setItem("theme", theme)
  }, [theme, mounted])

  const cycleTheme = () => {
    const themes: Theme[] = ["dark", "system", "light"]
    const currentIndex = themes.indexOf(theme)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }

  const getIcon = () => {
    switch (theme) {
      case "dark":
        return <Moon className="w-4 h-4" />
      case "light":
        return <Sun className="w-4 h-4" />
      case "system":
        return <Monitor className="w-4 h-4" />
    }
  }

  if (!mounted) {
    return (
      <div className="p-2 rounded-md">
        <div className="w-4 h-4" />
      </div>
    )
  }

  return (
    <button
      onClick={cycleTheme}
      className="p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
      title={`Current theme: ${theme}`}
    >
      {getIcon()}
    </button>
  )
}
