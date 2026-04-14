'use client'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Image, FileText, Download, Search, CheckCircle2, Clock, Loader, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const tasks = [
  { id: 1, name: '主展厅效果图', type: '效果图', status: 'completed', progress: 100, time: '2小时' },
  { id: 2, name: 'AI创新区施工图', type: '施工图', status: 'rendering', progress: 65, time: '进行中' },
  { id: 3, name: '导视系统图纸', type: '施工图', status: 'pending', progress: 0, time: '等待中' },
  { id: 4, name: '电气布线图', type: '施工图', status: 'pending', progress: 0, time: '等待中' },
]

export default function RenderingWorkspacePage() {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
              <Image size={20} className="text-orange-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">出图智能体工作台</h1>
              <p className="text-sm text-gray-500">渲染任务管理 · 施工图生成</p>
            </div>
          </div>
          <Button size="sm" icon={<Image size={14} />}>新建渲染任务</Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: '已完成', value: 8, color: '#10B981' },
            { label: '渲染中', value: 1, color: '#F59E0B' },
            { label: '待处理', value: 3, color: '#94A3B8' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center">
              <div className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</div>
              <p className="text-xs text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Tasks */}
        <Card>
          <CardBody>
            <h2 className="text-sm font-semibold text-gray-800 mb-4">渲染任务列表</h2>
            <div className="space-y-3">
              {tasks.map(task => (
                <div key={task.id} className="flex items-center gap-4 p-3 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                    {task.status === 'completed' ? <CheckCircle2 size={18} className="text-emerald-600" /> :
                     task.status === 'rendering' ? <Loader size={18} className="text-amber-600 animate-spin" /> :
                     <Clock size={18} className="text-gray-400" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-gray-800">{task.name}</span>
                      <Badge variant="orange" size="sm">{task.type}</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-100 rounded-full h-1.5 max-w-48">
                        <div className="h-1.5 rounded-full bg-orange-500" style={{ width: `${task.progress}%` }} />
                      </div>
                      <span className="text-xs text-gray-400">{task.progress}%</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={task.status === 'completed' ? 'success' : task.status === 'rendering' ? 'warning' : 'default'} dot>
                      {task.status === 'completed' ? '已完成' : task.status === 'rendering' ? '渲染中' : '等待中'}
                    </Badge>
                    {task.status === 'completed' && <Button variant="ghost" size="sm" icon={<Download size={12} />}>下载</Button>}
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        {/* Quick links */}
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: FileText, label: '施工图查看', href: '/rendering/construction-drawings', color: '#F97316' },
            { icon: Search, label: '规范检查报告', href: '/rendering/compliance', color: '#10B981' },
            { icon: Download, label: '导出中心', href: '/rendering/export', color: '#2563EB' },
          ].map(item => (
            <Link key={item.label} href={item.href}>
              <Card hover>
                <CardBody className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: item.color + '15' }}>
                    <item.icon size={18} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{item.label}</p>
                    <p className="text-xs text-gray-400">进入查看</p>
                  </div>
                  <ArrowRight size={14} className="ml-auto text-gray-300" />
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </AppLayout>
  )
}
