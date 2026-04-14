export function Badge({ children, variant = 'default', size = 'md', dot = false, className = '' }: {
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'purple' | 'pink' | 'orange' | 'cyan' | 'indigo' | 'lime' | 'sky'
  size?: 'sm' | 'md'
  dot?: boolean
  className?: string
}) {
  const variants: Record<string, string> = {
    default: 'bg-gray-100 text-gray-600',
    primary: 'bg-blue-100 text-blue-700',
    success: 'bg-emerald-100 text-emerald-700',
    warning: 'bg-amber-100 text-amber-700',
    error: 'bg-red-100 text-red-700',
    purple: 'bg-purple-100 text-purple-700',
    pink: 'bg-pink-100 text-pink-700',
    orange: 'bg-orange-100 text-orange-700',
    cyan: 'bg-cyan-100 text-cyan-700',
    indigo: 'bg-indigo-100 text-indigo-700',
    lime: 'bg-lime-100 text-lime-700',
    sky: 'bg-sky-100 text-sky-700',
  }
  const sizes: Record<string, string> = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
  }
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full font-medium ${variants[variant]} ${sizes[size]} ${className}`}>
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
      {children}
    </span>
  )
}
