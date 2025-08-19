import { Navigation } from "@/components/navigation"
import { writeups } from "@/data/writeups"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"

interface WriteupPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return writeups.map((writeup) => ({
    slug: writeup.slug,
  }))
}

export default function WriteupPage({ params }: WriteupPageProps) {
  const writeup = writeups.find((w) => w.slug === params.slug)

  if (!writeup) {
    notFound()
  }

  // const challenges = [...] // commented out for safety

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* <Link
          href="/writeups"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Writeups
        </Link> */}

        
        <Link
          href="/writeups"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Writeups
        </Link>

        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-8">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{writeup.title}</h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {writeup.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {writeup.date}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {writeup.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
              {writeup.description && (
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{writeup.description}</p>
              )}
            </header>

            {/* <div className="prose dark:prose-invert max-w-none">
              ...all other content commented out for safety...
            </div> */}
          </div>
        </article>
      </main>
    </div>
  )
}
