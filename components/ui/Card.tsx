export function Card({ children, className = '', hover = false, onClick }: { children: React.ReactNode; className?: string; hover?: boolean; onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-xl border border-gray-100 ${hover ? 'card-hover cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`px-5 pt-5 pb-3 ${className}`}>{children}</div>
}

export function CardBody({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`px-5 pb-5 ${className}`}>{children}</div>
}
