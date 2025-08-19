import { MemberCard } from "@/components/member-card"
import { Navigation } from "@/components/navigation"
import { members } from "@/data/members"

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Members</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </main>
    </div>
  )
}
