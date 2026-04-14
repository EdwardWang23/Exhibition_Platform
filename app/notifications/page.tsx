'use client'
import AppLayout from '@/components/layout/AppLayout'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Bell, MessageSquare, CheckCircle2, AlertTriangle, Star, Settings } from 'lucide-react'

const tabs = ['全部', '系统', '任务', '预警', '互动']
const notifications = [
  { id: 1, type: 'task', agent: 'planning', icon: MessageSquare, title: '策划智能体已完成需求分析报告', desc: '2026数字中国峰会需求分析报告已生成并通过审核', time: '5分钟前', unread: true },
  { id: 2, type: 'task', agent: 'design', icon: CheckCircle2, title: '设计智能体完成质检', desc: '视觉风格方案已通过AI质检评分92分', time: '20分钟前', unread: true },
  { id: 3, type: 'warning', agent: 'list', icon: AlertTriangle, title: '材料清单待审核', desc: '设备清单已生成，共23项，请审核确认', time: '1小时前', unread: true },
  { id: 4, type: 'system', agent: 'system', icon: Star, title: '供应商「华展装饰」报价已更新', desc: '展台搭建项目报价更新为¥850,000', time: '2小时前', unread: false },
  { id: 5, type: 'task', agent: 'construction', icon: AlertTriangle, title: '施工进度更新', desc: '智能制造博览会项目完成度达到75%', time: '3小时前', unread: false },
]

const agentColors: Record<string, string> = {
  planning: '#8B5CF6', design: '#EC4899', rendering: '#F97316', list: '#14B8A6', production: '#6366F1', construction: '#84CC16', promotion: '#06B6D4', system: '#64748B'
}

export default function NotificationsPage() {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bell size={24} className="text-gray-500" />
            <h1 className="text-xl font-bold text-gray-800">消息通知</h1>
            <Badge variant="error" size="sm">3条新消息</Badge>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">全部已读</Button>
            <Button variant="ghost" size="sm" icon={<Settings size={14} />} />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-gray-200">
          {tabs.map(tab => (
            <button key={tab}
              className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors -mb-px
                ${tab === '全部' ? 'text-blue-600 border-blue-600' : 'text-gray-500 border-transparent hover:text-gray-700'}`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Notifications list */}
        <Card className="divide-y divide-gray-50">
          {notifications.map(n => (
            <div key={n.id} className={`flex items-start gap-4 p-4 hover:bg-gray-50 transition-colors cursor-pointer ${n.unread ? 'bg-blue-50/30' : ''}`}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: (agentColors[n.agent] || '#64748B') + '15' }}>
                <n.icon size={16} style={{ color: agentColors[n.agent] || '#64748B' }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <p className={`text-sm ${n.unread ? 'font-semibold text-gray-800' : 'font-medium text-gray-700'}`}>{n.title}</p>
                  {n.unread && <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />}
                </div>
                <p className="text-xs text-gray-500 mb-1">{n.desc}</p>
                <div className="flex items-center gap-3">
                  <Badge variant={n.type === 'task' ? 'primary' : n.type === 'warning' ? 'warning' : 'default'} size="sm">
                    {n.type === 'task' ? '任务' : n.type === 'warning' ? '预警' : '系统'}
                  </Badge>
                  <span className="text-xs text-gray-400">{n.time}</span>
                </div>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </AppLayout>
  )
}
