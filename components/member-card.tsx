import Image from "next/image"
import { Globe, Mail, Twitter, Github, Linkedin, MessageCircle } from "lucide-react"

interface Member {
  name: string
  role: string
  description: string
  avatar: string
  social: {
    website?: string
    email?: string
    twitter?: string
    github?: string
    linkedin?: string
    discord?: string
  }
}

interface MemberCardProps {
  member: Member
}

export function MemberCard({ member }: MemberCardProps) {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "website":
        return <Globe className="w-4 h-4" />
      case "email":
        return <Mail className="w-4 h-4" />
      case "twitter":
        return <Twitter className="w-4 h-4" />
      case "github":
        return <Github className="w-4 h-4" />
      case "linkedin":
        return <Linkedin className="w-4 h-4" />
      case "discord":
        return <MessageCircle className="w-4 h-4" />
      default:
        return null
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-start space-x-4">
        <Image
          src={member.avatar || "/logo.svg"}
          alt={member.name}
          width={80}
          height={80}
          className="rounded-lg object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <h3 className="font-semibold text-gray-900 dark:text-white">{member.name}</h3>
            <span className="text-sm text-red-600 dark:text-red-400 font-medium">{member.role}</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{member.description}</p>
          <div className="flex space-x-2">
            {Object.entries(member.social).map(
              ([platform, url]) =>
                url && (
                  <a
                    key={platform}
                    href={url}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {getSocialIcon(platform)}
                  </a>
                ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
