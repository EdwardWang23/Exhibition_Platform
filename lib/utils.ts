import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('zh-CN', { style: 'currency', currency: 'CNY' }).format(value)
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat('zh-CN').format(value)
}

export function formatPercent(value: number): string {
  return `${value}%`
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    'planning': 'bg-purple-100 text-purple-700',
    'designing': 'bg-pink-100 text-pink-700',
    'rendering': 'bg-orange-100 text-orange-700',
    'listing': 'bg-cyan-100 text-cyan-700',
    'producing': 'bg-indigo-100 text-indigo-700',
    'constructing': 'bg-lime-100 text-lime-700',
    'promoting': 'bg-sky-100 text-sky-700',
    'completed': 'bg-emerald-100 text-emerald-700',
    'pending': 'bg-gray-100 text-gray-600',
    'in_progress': 'bg-blue-100 text-blue-700',
    'warning': 'bg-amber-100 text-amber-700',
    'error': 'bg-red-100 text-red-700',
  }
  return colors[status] || colors['pending']
}

export function getAgentColor(agent: string): string {
  const colors: Record<string, string> = {
    'planning': '#8B5CF6',
    'design': '#EC4899',
    'rendering': '#F97316',
    'list': '#14B8A6',
    'production': '#6366F1',
    'construction': '#84CC16',
    'promotion': '#06B6D4',
  }
  return colors[agent] || '#2563EB'
}
