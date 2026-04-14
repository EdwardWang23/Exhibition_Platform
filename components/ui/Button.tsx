import { cn } from '@/lib/utils'

export function Button({
  children, variant = 'primary', size = 'md', icon, loading, className = '', disabled, onClick, ...props
}: {
  children?: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  loading?: boolean
  className?: string
  disabled?: boolean
  onClick?: () => void
  [key: string]: any
}) {
  const variants: Record<string, string> = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white border border-transparent shadow-sm',
    secondary: 'bg-blue-50 hover:bg-blue-100 text-blue-700 border border-transparent',
    outline: 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-600 border border-transparent',
    danger: 'bg-red-600 hover:bg-red-700 text-white border border-transparent shadow-sm',
  }
  const sizes: Record<string, string> = {
    sm: 'h-7 px-2.5 text-xs gap-1.5',
    md: 'h-8 px-3 text-sm gap-2',
    lg: 'h-10 px-4 text-sm gap-2',
  }
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {loading ? (
        <svg className="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      ) : icon}
      {children}
    </button>
  )
}
