import { WriteupCard } from "@/components/writeup-card"
import { Navigation } from "@/components/navigation"
import { writeups } from "@/data/writeups"

export default function WriteupsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Writeups</h1>

        <div className="space-y-8">
          {writeups.map((writeup, index) => (
            <WriteupCard key={index} writeup={writeup} />
          ))}
        </div>
      </main>
    </div>
  )
}
