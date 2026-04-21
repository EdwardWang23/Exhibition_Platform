'use client'
import { useState } from 'react'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ProgressBar } from '@/components/ui/AgentCard'
import { MessageSquare, Palette, Image, ListChecks, Package, HardHat, Megaphone, Calendar, Users, FileText, Clock, ArrowRight, ChevronRight, CheckCircle2, AlertCircle } from 'lucide-react'
import Link from 'next/link'

const agentModules = [
  { name: '策划智能体', icon: MessageSquare, color: '#8B5CF6', status: 'completed', desc: '需求分析·主题方案·竞品研究', href: '/planning/chat', tasks: 12, done: 12 },
  { name: '设计智能体', icon: Palette, color: '#EC4899', status: 'active', desc: '视觉设计·3D建模·效果图渲染', href: '/design/workspace', tasks: 8, done: 5 },
  { name: '出图智能体', icon: Image, color: '#F97316', status: 'pending', desc: '施工图生成·规范检查·导出管理', href: '/rendering/workspace', tasks: 6, done: 0 },
  { name: '清单智能体', icon: ListChecks, color: '#14B8A6', status: 'completed', desc: '材料清单·设备清单·预算汇总', href: '/list/workspace', tasks: 4, done: 4 },
  { name: '制作智能体', icon: Package, color: '#6366F1', status: 'pending', desc: '供应商管理·采购谈判·订单跟踪', href: '/production/workspace', tasks: 5, done: 0 },
  { name: '施工智能体', icon: HardHat, color: '#84CC16', status: 'pending', desc: '进度看板·质量检查·团队管理', href: '/construction/workspace', tasks: 6, done: 0 },
  { name: '宣传智能体', icon: Megaphone, color: '#06B6D4', status: 'pending', desc: '素材生成·渠道配置·效果监测', href: '/promotion/workspace', tasks: 5, done: 0 },
]

const timeline = [
  { date: '2026-03-15', agent: 'system', title: '项目创建', desc: '项目「2026数字中国峰会」由李明远创建' },
  { date: '2026-03-16', agent: 'planning', title: '策划智能体启动', desc: '开始需求采集与竞品分析' },
  { date: '2026-03-18', agent: 'planning', title: '需求分析完成', desc: '需求分析报告已生成并通过审核' },
  { date: '2026-03-20', agent: 'planning', title: '主题方案确定', desc: '确定「数字未来·共生共创」主题方案' },
  { date: '2026-03-22', agent: 'design', title: '设计智能体启动', desc: '开始视觉风格设计与3D建模' },
  { date: '2026-03-28', agent: 'design', title: '视觉风格确认', desc: '视觉风格方案V2已通过审核' },
  { date: '2026-04-05', agent: 'list', title: '清单生成完成', desc: '材料清单、设备清单、预算汇总已生成' },
  { date: '2026-04-10', agent: 'design', title: '效果图生成', desc: '3D效果图已渲染完成' },
  { date: '2026-04-13', agent: 'design', title: '质检通过', desc: '设计质检报告通过，得分92分' },
]

const documents = [
  { name: '需求分析报告.pdf', size: '2.4MB', date: '2026-03-18', agent: 'planning' },
  { name: '主题方案V1.docx', size: '8.1MB', date: '2026-03-20', agent: 'planning' },
  { name: '视觉风格规范.pdf', size: '15.3MB', date: '2026-03-28', agent: 'design' },
  { name: '3D模型源文件.zip', size: '256MB', date: '2026-04-08', agent: 'design' },
  { name: '材料清单.xlsx', size: '1.2MB', date: '2026-04-05', agent: 'list' },
  { name: '预算汇总报告.pdf', size: '3.7MB', date: '2026-04-05', agent: 'list' },
  { name: '效果图合集.pdf', size: '89MB', date: '2026-04-10', agent: 'design' },
]

const statusAgentColor: Record<string, string> = {
  completed: '#10B981', active: '#2563EB', pending: '#94A3B8'
}

export default function ProjectDetailContent() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto space-y-5">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-white text-lg font-bold">数</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">2026数字中国峰会</h1>
                <p className="text-sm text-gray-500">项目编号：PJ-2026-001 · 数字中国建设峰会</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">编辑项目</Button>
            <Button size="sm">进入工作台</Button>
          </div>
        </div>

        {/* Status cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl border border-gray-100 p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-xs text-gray-500">当前状态</span>
            </div>
            <Badge variant="pink">设计中</Badge>
            <p className="text-xs text-gray-400 mt-1.5">第3个智能体阶段</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span className="text-xs text-gray-500">整体进度</span>
            </div>
            <p className="text-xl font-bold text-gray-800">45%</p>
            <div className="mt-1.5 bg-gray-100 rounded-full h-1.5">
              <div className="h-1.5 rounded-full bg-blue-500" style={{ width: '45%' }} />
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock size={12} className="text-gray-400" />
              <span className="text-xs text-gray-500">计划周期</span>
            </div>
            <p className="text-sm font-semibold text-gray-800">2026-03-15 ~ 2026-06-10</p>
            <p className="text-xs text-gray-400 mt-1.5">剩余88天</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users size={12} className="text-gray-400" />
              <span className="text-xs text-gray-500">项目团队</span>
            </div>
            <p className="text-sm font-semibold text-gray-800">12人</p>
            <div className="flex items-center mt-1.5">
              <div className="flex -space-x-2">
                {['李', '王', '张', '陈', '刘'].map((n, i) => (
                  <div key={i} className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center ring-2 ring-white">
                    <span className="text-white text-[9px]">{n}</span>
                  </div>
                ))}
              </div>
              <span className="text-xs text-gray-400 ml-1">+7</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 border-b border-gray-200">
          {[
            { key: 'overview', label: '总览', icon: FileText },
            { key: 'agents', label: '智能体', icon: MessageSquare },
            { key: 'timeline', label: '时间线', icon: Clock },
            { key: 'documents', label: '文档', icon: FileText },
          ].map(t => (
            <button key={t.key} onClick={() => setActiveTab(t.key)}
              className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors -mb-px
                ${activeTab === t.key ? 'text-blue-600 border-blue-600' : 'text-gray-500 border-transparent hover:text-gray-700'}`}>
              <t.icon size={14} />
              {t.label}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-5">
            {/* Agent modules grid */}
            <Card>
              <div className="px-5 pt-5 pb-3">
                <h2 className="text-base font-semibold text-gray-800">智能体模块</h2>
                <p className="text-xs text-gray-400 mt-0.5">点击进入各智能体工作台</p>
              </div>
              <CardBody className="pt-0">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {agentModules.map(a => (
                    <Link key={a.name} href={a.href}>
                      <div className={`border rounded-xl p-4 card-hover relative overflow-hidden ${a.status === 'active' ? 'border-blue-200 bg-blue-50/30' : 'border-gray-100'}`}>
                        <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-full opacity-5" style={{ backgroundColor: a.color }} />
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: a.color + '15' }}>
                            <a.icon size={18} style={{ color: a.color }} />
                          </div>
                          <div className="flex-1">
                            <span className="text-xs font-semibold text-gray-800">{a.name}</span>
                            <div className="flex items-center gap-1 mt-0.5">
                              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: statusAgentColor[a.status] }} />
                              <span className="text-xs" style={{ color: statusAgentColor[a.status] }}>
                                {a.status === 'completed' ? '已完成' : a.status === 'active' ? '进行中' : '待启动'}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 mb-2">{a.desc}</p>
                        {a.status !== 'pending' && (
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-100 rounded-full h-1">
                              <div className="h-1 rounded-full" style={{ width: `${(a.done / a.tasks) * 100}%`, backgroundColor: a.color }} />
                            </div>
                            <span className="text-xs text-gray-400">{a.done}/{a.tasks}</span>
                          </div>
                        )}
                        {a.status === 'active' && <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-l-xl" style={{ backgroundColor: a.color }} />}
                      </div>
                    </Link>
                  ))}
                </div>
              </CardBody>
            </Card>

            {/* Quick info */}
            <div className="grid lg:grid-cols-2 gap-5">
              <Card>
                <div className="px-5 pt-5 pb-3">
                  <h2 className="text-base font-semibold text-gray-800">基本信息</h2>
                </div>
                <CardBody className="pt-0">
                  <div className="space-y-3">
                    {[
                      { label: '展览面积', value: '8,000㎡' },
                      { label: '预计参展商', value: '200+家' },
                      { label: '预计观众', value: '50,000人次' },
                      { label: '预算总额', value: '¥8,500,000' },
                      { label: '项目类型', value: '科技行业峰会' },
                      { label: '展览地点', value: '北京国际会议中心' },
                    ].map(item => (
                      <div key={item.label} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                        <span className="text-sm text-gray-500">{item.label}</span>
                        <span className="text-sm font-medium text-gray-800">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>

              <Card>
                <div className="px-5 pt-5 pb-3">
                  <h2 className="text-base font-semibold text-gray-800">近期动态</h2>
                </div>
                <CardBody className="pt-0">
                  <div className="space-y-3">
                    {timeline.slice(-4).reverse().map((t, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#EFF6FF' }}>
                          <CheckCircle2 size={14} className="text-blue-500" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-800">{t.title}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{t.desc}</p>
                        </div>
                        <span className="text-xs text-gray-400 flex-shrink-0">{t.date}</span>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'timeline' && (
          <Card>
            <CardBody>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200" />
                <div className="space-y-4">
                  {timeline.map((t, i) => (
                    <div key={i} className="flex items-start gap-4 pl-1">
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center flex-shrink-0 z-10">
                        <div className="w-2 h-2 rounded-full bg-gray-400" />
                      </div>
                      <div className="flex-1 pb-4">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-gray-800">{t.title}</p>
                          <span className="text-xs text-gray-400">{t.date}</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5">{t.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardBody>
          </Card>
        )}

        {activeTab === 'documents' && (
          <Card>
            <CardBody className="p-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">文件名</th>
                    <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">来源智能体</th>
                    <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">大小</th>
                    <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">上传时间</th>
                    <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">操作</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((d, i) => (
                    <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <FileText size={14} className="text-gray-400" />
                          <span className="text-sm text-gray-800">{d.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3"><Badge variant="purple" size="sm">{d.agent}</Badge></td>
                      <td className="px-4 py-3 text-sm text-gray-500">{d.size}</td>
                      <td className="px-4 py-3 text-sm text-gray-400">{d.date}</td>
                      <td className="px-4 py-3">
                        <Button variant="ghost" size="sm">预览</Button>
                        <Button variant="ghost" size="sm">下载</Button>
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
