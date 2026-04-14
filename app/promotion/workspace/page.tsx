'use client'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Megaphone, FileText, Share2, BarChart2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function PromotionWorkspacePage() {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center">
              <Megaphone size={20} className="text-sky-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">宣传智能体工作台</h1>
              <p className="text-sm text-gray-500">素材生成 · 渠道配置 · 效果监测</p>
            </div>
          </div>
          <Badge variant="warning">待启动</Badge>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { label: '已生成素材', value: 0, color: '#06B6D4' },
            { label: '已配置渠道', value: 0, color: '#64748B' },
            { label: '监测活动', value: 0, color: '#8B5CF6' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center">
              <div className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</div>
              <p className="text-xs text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: FileText, label: '宣传素材生成', href: '/promotion/content', color: '#06B6D4', desc: 'AI生成文案与视觉素材' },
            { icon: Share2, label: '渠道推荐配置', href: '/promotion/channels', color: '#8B5CF6', desc: 'AI推荐投放渠道' },
            { icon: BarChart2, label: '效果监测看板', href: '/promotion/monitoring', color: '#10B981', desc: '实时数据监控' },
          ].map(item => (
            <Link key={item.label} href={item.href}>
              <Card hover>
                <CardBody className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: item.color + '15' }}>
                    <item.icon size={22} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{item.label}</p>
                    <p className="text-xs text-gray-400">{item.desc}</p>
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
