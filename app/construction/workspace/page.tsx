'use client'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { HardHat, Users, AlertTriangle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ConstructionWorkspacePage() {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-lime-100 flex items-center justify-center">
              <HardHat size={20} className="text-lime-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">施工智能体工作台</h1>
              <p className="text-sm text-gray-500">数字中国峰会 · 施工进度管理</p>
            </div>
          </div>
          <Badge variant="warning">待启动</Badge>
        </div>

        <div className="grid sm:grid-cols-4 gap-4">
          {[
            { label: '施工阶段', value: '筹备中', color: '#84CC16' },
            { label: '团队规模', value: '30人', color: '#64748B' },
            { label: '待解决问题', value: 3, color: '#F59E0B' },
            { label: '整体进度', value: '0%', color: '#94A3B8' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center">
              <div className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</div>
              <p className="text-xs text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: Users, label: '施工进度看板', href: '/construction/progress', color: '#84CC16', desc: '甘特图与看板视图' },
            { icon: AlertTriangle, label: '质量检查报告', href: '/construction/quality', color: '#10B981', desc: '施工质量监控' },
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
