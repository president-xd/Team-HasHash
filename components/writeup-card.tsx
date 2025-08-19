import Image from "next/image"
import Link from "next/link"

interface Writeup {
  title: string
  author: string
  date: string
  tags: string[]
  description: string
  image: string
  slug: string
}

interface WriteupCardProps {
  writeup: Writeup
}

export function WriteupCard({ writeup }: WriteupCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
      <div className="flex items-start space-x-6">
        <Image
          src={writeup.image || "/writeup.svg"}
          alt={writeup.title}
          width={200}
          height={120}
          className="rounded-lg object-cover"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            <Link href={`/writeups/${writeup.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400">
              {writeup.title}
            </Link>
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            By {writeup.author} 
            <br />
            {writeup.date}
          </p>
          <div className="flex space-x-2 mb-3">
            {writeup.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-700 dark:text-gray-300">{writeup.description}</p>
        </div>
      </div>
    </div>
  )
}
