'use client'
import { useState } from 'react'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ProgressBar } from '@/components/ui/AgentCard'
import { Search, Plus, Filter, Grid, List, ChevronDown, Calendar, Users, MoreHorizontal, Archive, Edit2, Trash2 } from 'lucide-react'
import Link from 'next/link'

const projects = [
  { id: 1, name: '2026数字中国峰会', status: 'designing', progress: 45, manager: '李明远', created: '2026-03-15', agents: ['planning', 'design'], cover: '#EFF6FF', icon: '#2563EB', desc: '数字中国建设峰会，展览面积8000㎡' },
  { id: 2, name: '国际汽车博览会', status: 'planning', progress: 25, manager: '王芳', created: '2026-03-20', agents: ['planning'], cover: '#FEF3C7', icon: '#F59E0B', desc: '全球汽车品牌联合展会，预计500家参展商' },
  { id: 3, name: '全球科技创新大会', status: 'completed', progress: 100, manager: '张伟', created: '2025-12-01', agents: ['all'], cover: '#F0FDF4', icon: '#10B981', desc: '科技企业年度盛会，已成功举办' },
  { id: 4, name: '智能制造博览会', status: 'constructing', progress: 72, manager: '李明远', created: '2026-01-10', agents: ['planning', 'design', 'rendering', 'construction'], cover: '#ECFDF5', icon: '#84CC16', desc: '智能制造行业专业展，正在施工搭建' },
  { id: 5, name: '国际教育装备展', status: 'listing', progress: 60, manager: '陈静', created: '2026-02-05', agents: ['planning', 'design', 'list'], cover: '#F5F3FF', icon: '#8B5CF6', desc: '教育装备与信息化解决方案展' },
  { id: 6, name: '美食文化节', status: 'promoting', progress: 88, manager: '刘强', created: '2026-01-20', agents: ['all'], cover: '#FFF7ED', icon: '#F97316', desc: '地方特色美食文化推广活动' },
]

const agentColors: Record<string, string> = {
  planning: '#8B5CF6', design: '#EC4899', rendering: '#F97316', list: '#14B8A6', production: '#6366F1', construction: '#84CC16', promotion: '#06B6D4'
}
const agentNames: Record<string, string> = { planning: '策划', design: '设计', rendering: '出图', list: '清单', production: '制作', construction: '施工', promotion: '宣传' }
const statusMap: Record<string, { label: string; variant: any }> = {
  planning: { label: '策划中', variant: 'purple' },
  designing: { label: '设计中', variant: 'pink' },
  listing: { label: '清单中', variant: 'cyan' },
  producing: { label: '制作中', variant: 'indigo' },
  constructing: { label: '施工中', variant: 'lime' },
  promoting: { label: '宣传中', variant: 'sky' },
  completed: { label: '已完成', variant: 'success' },
}

export default function ProjectsPage() {
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const [statusFilter, setStatusFilter] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = projects.filter(p => {
    const matchStatus = statusFilter === 'all' || p.status === statusFilter
    const matchSearch = !search || p.name.includes(search)
    return matchStatus && matchSearch
  })

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-800">项目管理</h1>
            <p className="text-sm text-gray-500 mt-0.5">管理所有会展项目，全流程跟踪</p>
          </div>
          <Link href="/projects/new">
            <Button icon={<Plus size={14} />}>新建项目</Button>
          </Link>
        </div>

        {/* Filters */}
        <Card>
          <CardBody className="flex items-center gap-3 flex-wrap">
            <div className="relative flex-1 min-w-48">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="搜索项目名称..."
                className="w-full h-9 pl-9 pr-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-400" />
            </div>
            <div className="flex items-center gap-1.5 bg-gray-100 p-0.5 rounded-lg">
              {['all', 'planning', 'designing', 'constructing', 'completed'].map(s => (
                <button key={s} onClick={() => setStatusFilter(s)}
                  className={`px-3 py-1.5 text-xs rounded-md transition-colors font-medium
                    ${statusFilter === s ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500 hover:text-gray-700'}`}>
                  {s === 'all' ? '全部' : statusMap[s]?.label || s}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-1 ml-auto">
              <button onClick={() => setView('grid')}
                className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${view === 'grid' ? 'bg-blue-50 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}>
                <Grid size={16} />
              </button>
              <button onClick={() => setView('list')}
                className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${view === 'list' ? 'bg-blue-50 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}>
                <List size={16} />
              </button>
            </div>
          </CardBody>
        </Card>

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: '全部项目', value: 12, color: '#64748B' },
            { label: '进行中', value: 8, color: '#2563EB' },
            { label: '已完成', value: 4, color: '#10B981' },
            { label: '本周新增', value: 2, color: '#8B5CF6' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-xl border border-gray-100 px-4 py-3 flex items-center gap-3">
              <div className="w-2 h-8 rounded-full" style={{ backgroundColor: s.color }} />
              <div>
                <p className="text-xl font-bold text-gray-800">{s.value}</p>
                <p className="text-xs text-gray-500">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Project grid/list */}
        {view === 'grid' ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(p => (
              <Link key={p.id} href="/projects/1">
                <Card hover>
                  <CardBody className="p-0">
                    {/* Cover */}
                    <div className="h-32 rounded-t-xl relative overflow-hidden" style={{ backgroundColor: p.cover }}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-2xl bg-white/50 flex items-center justify-center">
                          <span className="text-2xl font-bold" style={{ color: p.icon }}>{p.name.charAt(0)}</span>
                        </div>
                      </div>
                      <div className="absolute top-3 right-3">
                        <button className="w-7 h-7 rounded-lg bg-white/80 backdrop-blur flex items-center justify-center text-gray-500 hover:text-gray-700">
                          <MoreHorizontal size={14} />
                        </button>
                      </div>
                    </div>
                    {/* Info */}
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-sm font-semibold text-gray-800">{p.name}</h3>
                        <Badge variant={statusMap[p.status]?.variant} dot size="sm">{statusMap[p.status]?.label}</Badge>
                      </div>
                      <p className="text-xs text-gray-500 mb-3 line-clamp-2">{p.desc}</p>
                      <ProgressBar value={p.progress} size="sm" color={statusMap[p.status]?.variant === 'success' ? '#10B981' : '#2563EB'} />
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
                        <div className="flex items-center gap-1.5 text-xs text-gray-400">
                          <Users size={12} />
                          <span>{p.manager}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-400">
                          <Calendar size={12} />
                          <span>{p.created}</span>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <Card>
            <CardBody className="p-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">项目名称</th>
                    <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">状态</th>
                    <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">负责人</th>
                    <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">进度</th>
                    <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">创建时间</th>
                    <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">操作</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(p => (
                    <tr key={p.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3">
                        <Link href="/projects/1" className="text-sm font-medium text-gray-800 hover:text-blue-600">{p.name}</Link>
                        <p className="text-xs text-gray-400 mt-0.5">{p.desc}</p>
                      </td>
                      <td className="px-4 py-3"><Badge variant={statusMap[p.status]?.variant} dot size="sm">{statusMap[p.status]?.label}</Badge></td>
                      <td className="px-4 py-3 text-sm text-gray-600">{p.manager}</td>
                      <td className="px-4 py-3 w-36">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                            <div className="h-1.5 rounded-full bg-blue-500" style={{ width: `${p.progress}%` }} />
                          </div>
                          <span className="text-xs text-gray-500 w-8">{p.progress}%</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-400">{p.created}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1">
                          <button className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100">
                            <Edit2 size={13} />
                          </button>
                          <button className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100">
                            <Archive size={13} />
                          </button>
                          <button className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50">
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardBody>
          </Card>
        )}
      </div>
    </AppLayout>
  )
}
