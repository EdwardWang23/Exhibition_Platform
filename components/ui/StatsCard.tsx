export function StatsCard({ label, value, sub, trend, icon, color = 'blue' }: {
  label: string
  value: string | number
  sub?: string
  trend?: { value: number; up: boolean }
  icon?: React.ReactNode
  color?: 'blue' | 'green' | 'orange' | 'purple' | 'red' | 'cyan'
}) {
  const colors: Record<string, { bg: string; text: string; icon: string }> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', icon: 'text-blue-400' },
    green: { bg: 'bg-emerald-50', text: 'text-emerald-600', icon: 'text-emerald-400' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', icon: 'text-orange-400' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', icon: 'text-purple-400' },
    red: { bg: 'bg-red-50', text: 'text-red-600', icon: 'text-red-400' },
    cyan: { bg: 'bg-cyan-50', text: 'text-cyan-600', icon: 'text-cyan-400' },
  }
  const c = colors[color]
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 card-hover">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-1">{label}</p>
          <p className="text-2xl font-bold text-gray-800">{value}</p>
          {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
          {trend && (
            <div className={`flex items-center gap-1 mt-1 text-xs font-medium ${trend.up ? 'text-emerald-600' : 'text-red-500'}`}>
              <span>{trend.up ? '↑' : '↓'} {Math.abs(trend.value)}%</span>
              <span className="text-gray-400 font-normal">较上周</span>
            </div>
          )}
        </div>
        {icon && (
          <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center ${c.icon}`}>
            {icon}
          </div>
        )}
      </div>
    </div>
  )
}
