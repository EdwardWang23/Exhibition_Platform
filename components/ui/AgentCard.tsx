import Link from 'next/link'
import { cn } from '@/lib/utils'

export function AgentCard({
  name, description, desc, icon: Icon, color, href, stats, active
}: {
  name: string
  description?: string
  desc?: string
  icon: React.ElementType
  color: string
  href: string
  stats?: string
  active?: boolean
}) {
  const descText = description || desc || ''
  return (
    <Link href={href}>
      <div className={cn(
        'bg-white rounded-xl border p-4 card-hover group relative overflow-hidden',
        active ? 'border-blue-200 shadow-md' : 'border-gray-100'
      )}>
        {/* Glow effect */}
        <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
          style={{ backgroundColor: color }} />
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: color + '15' }}>
            <Icon size={20} style={{ color }} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-gray-800 mb-0.5">{name}</h3>
            <p className="text-xs text-gray-500 line-clamp-2">{descText}</p>
          </div>
        </div>
        {stats && (
          <div className="mt-3 pt-3 border-t border-gray-50">
            <p className="text-xs text-gray-400">{stats}</p>
          </div>
        )}
        {active && (
          <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-l-xl" style={{ backgroundColor: color }} />
        )}
      </div>
    </Link>
  )
}

export function ProgressBar({ value, color, size = 'md', label }: {
  value: number
  color?: string
  size?: 'sm' | 'md' | 'lg'
  label?: string
}) {
  const heights = { sm: 'h-1.5', md: 'h-2', lg: 'h-3' }
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>{label}</span>
          <span>{value}%</span>
        </div>
      )}
      <div className={`w-full bg-gray-100 rounded-full ${heights[size]}`}>
        <div className="rounded-full transition-all duration-500" style={{
          width: `${value}%`,
          height: '100%',
          backgroundColor: color || '#2563EB',
        }} />
      </div>
    </div>
  )
}
