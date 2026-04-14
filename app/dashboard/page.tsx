'use client'
import { useState } from 'react'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { StatsCard } from '@/components/ui/StatsCard'
import { AgentCard, ProgressBar } from '@/components/ui/AgentCard'
import { BarChart2, TrendingUp, CheckCircle2, Clock, AlertCircle, MessageSquare, Palette, Image, ListChecks, Package, HardHat, Megaphone, ArrowRight, Calendar, Users, FileText } from 'lucide-react'
import Link from 'next/link'

const agents = [
  { name: '策划智能体', desc: '需求分析·主题方案·竞品研究', icon: MessageSquare, color: '#8B5CF6', href: '/planning/chat', stats: '本项目已使用 12 次' },
  { name: '设计智能体', desc: '视觉设计·3D建模·效果图渲染', icon: Palette, color: '#EC4899', href: '/design/workspace', stats: '进行中：视觉风格设计' },
  { name: '出图智能体', desc: '施工图生成·规范检查·导出管理', icon: Image, color: '#F97316', href: '/rendering/workspace', stats: '待启动' },
  { name: '清单智能体', desc: '材料清单·设备清单·预算汇总', icon: ListChecks, color: '#14B8A6', href: '/list/workspace', stats: '材料清单已生成' },
  { name: '制作智能体', desc: '供应商管理·采购谈判·订单跟踪', icon: Package, color: '#6366F1', href: '/production/workspace', stats: '待启动' },
  { name: '施工智能体', desc: '进度看板·质量检查·团队管理', icon: HardHat, color: '#84CC16', href: '/construction/workspace', stats: '待启动' },
  { name: '宣传智能体', desc: '素材生成·渠道配置·效果监测', icon: Megaphone, color: '#06B6D4', href: '/promotion/workspace', stats: '待启动' },
]

const recentProjects = [
  { id: 1, name: '2026数字中国峰会', status: 'designing', progress: 45, agent: 'design', update: '2小时前' },
  { id: 2, name: '国际汽车博览会', status: 'planning', progress: 25, agent: 'planning', update: '5小时前' },
  { id: 3, name: '全球科技创新大会', status: 'completed', progress: 100, agent: 'promotion', update: '1天前' },
  { id: 4, name: '智能制造博览会', status: 'constructing', progress: 72, agent: 'construction', update: '1天前' },
]

const tasks = [
  { id: 1, title: '审核视觉风格方案', project: '数字中国峰会', priority: 'high', agent: 'design' },
  { id: 2, title: '确认材料清单规格', project: '数字中国峰会', priority: 'medium', agent: 'list' },
  { id: 3, title: '审批竞品分析报告', project: '国际汽车博览会', priority: 'low', agent: 'planning' },
  { id: 4, title: '确认供应商报价', project: '智能制造博览会', priority: 'high', agent: 'production' },
]

const statusMap: Record<string, string> = {
  designing: '设计中', planning: '策划中', constructing: '施工中', completed: '已完成', promoting: '宣传中'
}
const agentMap: Record<string, string> = {
  planning: '策划', design: '设计', production: '制作', construction: '施工', promotion: '宣传', list: '清单', rendering: '出图'
}
const colorMap: Record<string, string> = {
  planning: 'purple', design: 'pink', constructing: 'lime', completed: 'success', promoting: 'sky'
}

export default function DashboardPage() {
  const [chartType, setChartType] = useState<'bar' | 'line'>('bar')

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Welcome */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">上午好，李明远 👋</h1>
            <p className="text-sm text-gray-500 mt-1">今天是2026年4月13日，数字中国峰会项目进展顺利</p>
          </div>
          <div className="hidden md:flex items-center gap-3 text-sm text-gray-500">
            <Calendar size={14} />
            <span>2026年4月13日 周一</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatsCard label="进行中项目" value={3} sub="较上月 +1"
            trend={{ value: 33, up: true }}
            icon={<TrendingUp size={20} />} color="blue" />
          <StatsCard label="本月完成" value={2} sub="目标 4 个"
            icon={<CheckCircle2 size={20} />} color="green" />
          <StatsCard label="待办任务" value={8} sub="今日 3 项紧急"
            icon={<Clock size={20} />} color="orange" />
          <StatsCard label="智能体调用" value={156} sub="本周 23 次"
            trend={{ value: 18, up: true }}
            icon={<BarChart2 size={20} />} color="purple" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Agent shortcuts */}
            <Card>
              <div className="px-5 pt-5 pb-3 flex items-center justify-between">
                <div>
                  <h2 className="text-base font-semibold text-gray-800">智能体入口</h2>
                  <p className="text-xs text-gray-400 mt-0.5">点击进入各智能体工作台</p>
                </div>
              </div>
              <CardBody className="pt-0">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {agents.map(a => (
                    <AgentCard key={a.name} {...a} />
                  ))}
                </div>
              </CardBody>
            </Card>

            {/* Recent projects */}
            <Card>
              <div className="px-5 pt-5 pb-3 flex items-center justify-between">
                <h2 className="text-base font-semibold text-gray-800">最近项目</h2>
                <Link href="/projects" className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  查看全部 <ArrowRight size={14} />
                </Link>
              </div>
              <CardBody className="pt-0">
                <div className="space-y-3">
                  {recentProjects.map(p => (
                    <Link key={p.id} href="/projects/1">
                      <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-semibold text-blue-600">{p.name.charAt(0)}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors">{p.name}</span>
                            <Badge variant={colorMap[p.status] as any} dot>{statusMap[p.status]}</Badge>
                          </div>
                          <ProgressBar value={p.progress} size="sm"
                            color={p.status === 'completed' ? '#10B981' : p.status === 'designing' ? '#EC4899' : p.status === 'constructing' ? '#84CC16' : '#8B5CF6'} />
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-xs text-gray-400">{p.update}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{agentMap[p.agent]}智能体</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardBody>
            </Card>

            {/* Project trend chart */}
            <Card>
              <div className="px-5 pt-5 pb-3 flex items-center justify-between">
                <h2 className="text-base font-semibold text-gray-800">项目数据趋势</h2>
                <div className="flex gap-1 bg-gray-100 p-0.5 rounded-lg">
                  <button onClick={() => setChartType('bar')} className={`px-3 py-1 text-xs rounded-md transition-colors ${chartType === 'bar' ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500 hover:text-gray-700'}`}>柱状图</button>
                  <button onClick={() => setChartType('line')} className={`px-3 py-1 text-xs rounded-md transition-colors ${chartType === 'line' ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500 hover:text-gray-700'}`}>折线图</button>
                </div>
              </div>
              <CardBody className="pt-0">
                <div className="h-52 flex items-end gap-2">
                  {[
                    { month: '10月', planning: 4, design: 3, construction: 2 },
                    { month: '11月', planning: 5, design: 4, construction: 3 },
                    { month: '12月', planning: 3, design: 5, construction: 4 },
                    { month: '1月', planning: 6, design: 3, construction: 3 },
                    { month: '2月', planning: 4, design: 6, construction: 4 },
                    { month: '3月', planning: 5, design: 4, construction: 5 },
                    { month: '4月', planning: 6, design: 5, construction: 4 },
                  ].map(m => (
                    <div key={m.month} className="flex-1 flex flex-col items-center gap-0.5">
                      <div className="w-full flex items-end justify-center gap-0.5 h-40">
                        <div className="w-4 rounded-sm bg-purple-400" style={{ height: `${m.planning * 20}px` }} />
                        <div className="w-4 rounded-sm bg-pink-400" style={{ height: `${m.design * 20}px` }} />
                        <div className="w-4 rounded-sm bg-lime-400" style={{ height: `${m.construction * 20}px` }} />
                      </div>
                      <span className="text-xs text-gray-400 mt-1">{m.month}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <div className="w-3 h-3 rounded-sm bg-purple-400" />
                    <span>策划中</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <div className="w-3 h-3 rounded-sm bg-pink-400" />
                    <span>设计中</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <div className="w-3 h-3 rounded-sm bg-lime-400" />
                    <span>施工中</span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Right sidebar */}
          <div className="space-y-6">
            {/* Tasks */}
            <Card>
              <div className="px-5 pt-5 pb-3 flex items-center justify-between">
                <h2 className="text-base font-semibold text-gray-800">待办任务</h2>
                <Badge variant="primary">{tasks.length} 项</Badge>
              </div>
              <CardBody className="pt-0">
                <div className="space-y-2">
                  {tasks.map(t => (
                    <div key={t.id} className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                      <input type="checkbox" className="mt-0.5 w-3.5 h-3.5 rounded border-gray-300 text-blue-600" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-700">{t.title}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{t.project}</p>
                      </div>
                      <Badge variant={t.priority === 'high' ? 'error' : t.priority === 'medium' ? 'warning' : 'default'} size="sm">
                        {t.priority === 'high' ? '紧急' : t.priority === 'medium' ? '重要' : '一般'}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-3">
                  查看全部任务
                </Button>
              </CardBody>
            </Card>

            {/* Notifications preview */}
            <Card>
              <div className="px-5 pt-5 pb-3 flex items-center justify-between">
                <h2 className="text-base font-semibold text-gray-800">最新消息</h2>
                <Link href="/notifications" className="text-xs text-blue-600 hover:text-blue-700">查看全部</Link>
              </div>
              <CardBody className="pt-0">
                <div className="space-y-3">
                  {[
                    { icon: MessageSquare, color: '#8B5CF6', title: '策划智能体已完成需求分析', time: '5分钟前', msg: '数字中国峰会项目需求分析报告已生成' },
                    { icon: Palette, color: '#EC4899', title: '设计智能体完成质检', time: '20分钟前', msg: '视觉风格方案已通过AI质检评分92分' },
                    { icon: AlertCircle, color: '#F59E0B', title: '材料清单待审核', time: '1小时前', msg: '设备清单已生成，共23项，请审核确认' },
                  ].map((n, i) => (
                    <div key={i} className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: n.color + '15' }}>
                        <n.icon size={14} style={{ color: n.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-medium text-gray-800">{n.title}</p>
                          <p className="text-xs text-gray-400">{n.time}</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{n.msg}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>

            {/* Quick actions */}
            <Card>
              <div className="px-5 pt-5 pb-3">
                <h2 className="text-base font-semibold text-gray-800">快捷操作</h2>
              </div>
              <CardBody className="pt-0">
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { icon: FileText, label: '新建项目', color: '#2563EB' },
                    { icon: Users, label: '团队管理', color: '#8B5CF6' },
                    { icon: BarChart2, label: '数据报表', color: '#10B981' },
                    { icon: AlertCircle, label: '风险预警', color: '#F59E0B' },
                  ].map((a, i) => (
                    <button key={i} className="flex flex-col items-center gap-1.5 p-3 rounded-xl border border-gray-100 hover:bg-gray-50 hover:border-gray-200 transition-colors">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: a.color + '15' }}>
                        <a.icon size={16} style={{ color: a.color }} />
                      </div>
                      <span className="text-xs font-medium text-gray-600">{a.label}</span>
                    </button>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
