'use client'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ProgressBar } from '@/components/ui/AgentCard'
import { Palette, Eye, Layers, Image, CheckCircle2, Clock, AlertTriangle, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

const steps = [
  { id: 1, name: '需求确认', icon: CheckCircle2, status: 'completed', desc: '已确认需求分析报告', time: '2026-03-18', progress: 100 },
  { id: 2, name: '视觉风格设计', icon: Palette, status: 'active', desc: '正在进行视觉风格设计', time: '进行中', progress: 75 },
  { id: 3, name: '3D建模', icon: Layers, status: 'pending', desc: '等待视觉风格确认后开始', time: '预计 3 天后', progress: 0 },
  { id: 4, name: '效果图渲染', icon: Image, status: 'pending', desc: '等待3D建模完成后开始', time: '预计 5 天后', progress: 0 },
  { id: 5, name: '设计质检', icon: Sparkles, status: 'pending', desc: '所有效果图完成后进行质检', time: '预计 7 天后', progress: 0 },
]

export default function DesignWorkspacePage() {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center">
              <Palette size={20} className="text-pink-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">设计智能体工作台</h1>
              <p className="text-sm text-gray-500">2026数字中国峰会 · 设计全流程管理</p>
            </div>
          </div>
          <Badge variant="pink" dot>设计进行中</Badge>
        </div>

        {/* Progress steps */}
        <Card>
          <CardBody>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-sm font-semibold text-gray-800">设计流程</h2>
              <span className="text-xs text-gray-400">整体进度 15%</span>
            </div>
            <div className="relative">
              <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-100" />
              <div className="absolute top-5 left-0 h-0.5 bg-pink-500" style={{ width: '20%' }} />
              <div className="grid grid-cols-5 gap-2 relative">
                {steps.map((step, i) => (
                  <div key={step.id} className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 relative z-10
                      ${step.status === 'completed' ? 'bg-pink-500 text-white' : step.status === 'active' ? 'bg-pink-100 text-pink-600 ring-4 ring-pink-50' : 'bg-gray-100 text-gray-400'}`}>
                      <step.icon size={18} />
                    </div>
                    <p className={`text-xs font-medium text-center ${step.status === 'active' ? 'text-pink-600' : step.status === 'completed' ? 'text-gray-800' : 'text-gray-400'}`}>
                      {step.name}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5 text-center">{step.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Current step detail */}
        <Card>
          <CardBody>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center">
                  <Palette size={20} className="text-pink-600" />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-gray-800">视觉风格设计</h2>
                  <p className="text-xs text-gray-400">第 2 步 · 预计完成时间 2 天</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Link href="/design/visual"><Button variant="outline" size="sm">进入设计</Button></Link>
              </div>
            </div>
            <ProgressBar value={75} size="md" color="#EC4899" />
            <div className="mt-4 grid sm:grid-cols-3 gap-3">
              {[
                { label: '已完成', value: '3/4', color: '#10B981' },
                { label: '进行中', value: '1/4', color: '#F59E0B' },
                { label: '待启动', value: '0/4', color: '#94A3B8' },
              ].map(s => (
                <div key={s.label} className="p-3 bg-gray-50 rounded-xl flex items-center gap-3">
                  <div className="w-2 h-8 rounded-full" style={{ backgroundColor: s.color }} />
                  <div>
                    <p className="text-sm font-bold text-gray-800">{s.value}</p>
                    <p className="text-xs text-gray-400">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        {/* Tasks */}
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <CardBody>
              <h3 className="text-sm font-semibold text-gray-800 mb-3">待处理任务</h3>
              <div className="space-y-2">
                {[
                  { task: '选择视觉风格方案V2', priority: 'high', time: '紧急' },
                  { task: '确认主KV色调与字体', priority: 'medium', time: '今天' },
                  { task: '审核延展物料设计', priority: 'low', time: '明天' },
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="w-4 h-4 rounded border-2 border-gray-200" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-800">{t.task}</p>
                    </div>
                    <Badge variant={t.priority === 'high' ? 'error' : t.priority === 'medium' ? 'warning' : 'default'} size="sm">{t.time}</Badge>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-sm font-semibold text-gray-800 mb-3">快捷入口</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: Eye, label: '效果图预览', href: '/design/render-preview', color: '#F97316' },
                  { icon: Layers, label: '3D编辑器', href: '/design/3d-editor', color: '#2563EB' },
                  { icon: Image, label: '多媒体推荐', href: '/design/media', color: '#8B5CF6' },
                  { icon: CheckCircle2, label: '质检报告', href: '/design/qa-report', color: '#10B981' },
                ].map(item => (
                  <Link key={item.label} href={item.href}>
                    <div className="flex items-center gap-2 p-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-colors">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: item.color + '15' }}>
                        <item.icon size={15} style={{ color: item.color }} />
                      </div>
                      <span className="text-xs font-medium text-gray-700">{item.label}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </AppLayout>
  )
}
