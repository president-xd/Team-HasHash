import Image from "next/image"
import { Globe, Twitter, Linkedin } from "lucide-react"

interface Sponsor {
  name: string
  logo: string
  social: {
    website?: string
    twitter?: string
    linkedin?: string
  }
}

interface SponsorCardProps {
  sponsor: Sponsor
}

export function SponsorCard({ sponsor }: SponsorCardProps) {
  return (
    <div className="text-center">
      <div className="mb-4 bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 h-48 flex items-center justify-center">
        <Image
          src={sponsor.logo || "/placeholder.svg"}
          alt={sponsor.name}
          width={300}
          height={150}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{sponsor.name}</h3>
      <div className="flex justify-center space-x-3">
        {sponsor.social.website && (
          <a
            href={sponsor.social.website}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe className="w-4 h-4" />
          </a>
        )}
        {sponsor.social.twitter && (
          <a
            href={sponsor.social.twitter}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-4 h-4" />
          </a>
        )}
        {sponsor.social.linkedin && (
          <a
            href={sponsor.social.linkedin}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  )
}
