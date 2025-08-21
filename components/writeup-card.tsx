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
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
        <div className="flex-shrink-0 w-full sm:w-auto">
          <Image
            src={writeup.image || "/writeup.svg"}
            alt={writeup.title}
            width={200}
            height={120}
            className="rounded-lg object-cover w-full sm:w-[200px] h-32 sm:h-[120px]"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
            <Link
              href={`/writeups/${writeup.slug}`}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {writeup.title}
            </Link>
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            By {writeup.author}
            <br />
            {writeup.date}
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            {writeup.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{writeup.description}</p>
        </div>
      </div>
    </div>
  )
}
