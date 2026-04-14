'use client'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Package, ShoppingCart, Users, Truck, AlertTriangle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ProductionWorkspacePage() {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
              <Package size={20} className="text-indigo-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">制作智能体工作台</h1>
              <p className="text-sm text-gray-500">供应商管理 · 采购谈判 · 订单跟踪</p>
            </div>
          </div>
          <Badge variant="warning">待启动</Badge>
        </div>

        <div className="grid sm:grid-cols-4 gap-4">
          {[
            { label: '待采购项', value: 15, color: '#F59E0B' },
            { label: '询价中', value: 8, color: '#6366F1' },
            { label: '已下单', value: 5, color: '#10B981' },
            { label: '风险预警', value: 2, color: '#EF4444' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center">
              <div className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</div>
              <p className="text-xs text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: Users, label: '供应商列表', href: '/production/suppliers', color: '#6366F1', desc: '查看和管理合格供应商' },
            { icon: ShoppingCart, label: '采购谈判辅助', href: '/production/negotiation', color: '#10B981', desc: 'AI辅助谈判策略' },
            { icon: Truck, label: '订单跟踪', href: '/production/orders', color: '#F97316', desc: '监控订单执行状态' },
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
