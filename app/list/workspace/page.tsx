'use client'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ListChecks, Package, Wrench, Users, DollarSign, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const listTypes = [
  { id: 'materials', name: '材料清单', icon: Package, color: '#14B8A6', count: 45, budget: '¥2,350,000', status: 'completed', href: '/list/materials' },
  { id: 'equipment', name: '设备清单', icon: Wrench, color: '#F97316', count: 28, budget: '¥1,850,000', status: 'completed', href: '/list/equipment' },
  { id: 'staff', name: '人员清单', icon: Users, color: '#6366F1', count: 120, budget: '¥680,000', status: 'completed', href: '/list/staff' },
  { id: 'budget', name: '预算汇总', icon: DollarSign, color: '#8B5CF6', count: 0, budget: '¥8,500,000', status: 'completed', href: '/list/budget' },
]

export default function ListWorkspacePage() {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center">
              <ListChecks size={20} className="text-cyan-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">清单智能体工作台</h1>
              <p className="text-sm text-gray-500">数字中国峰会 · 清单生成与预算管理</p>
            </div>
          </div>
          <Badge variant="success" dot>全部完成</Badge>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {listTypes.map(l => (
            <Link key={l.id} href={l.href}>
              <Card hover>
                <CardBody>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: l.color + '15' }}>
                      <l.icon size={22} style={{ color: l.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-sm font-semibold text-gray-800">{l.name}</h3>
                        <Badge variant="success" dot size="sm">已完成</Badge>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-gray-400">{l.count > 0 ? `${l.count}项` : ''}</span>
                        <span className="text-xs font-medium" style={{ color: l.color }}>{l.budget}</span>
                      </div>
                    </div>
                    <ArrowRight size={14} className="text-gray-300 mt-1" />
                  </div>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>

        <Card>
          <CardBody>
            <h2 className="text-sm font-semibold text-gray-800 mb-4">预算概览</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-gray-50">
                <span className="text-sm text-gray-600">材料费</span>
                <span className="text-sm font-medium text-cyan-600">¥2,350,000</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-50">
                <span className="text-sm text-gray-600">设备费</span>
                <span className="text-sm font-medium text-orange-600">¥1,850,000</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-50">
                <span className="text-sm text-gray-600">人员费</span>
                <span className="text-sm font-medium text-indigo-600">¥680,000</span>
              </div>
              <div className="flex items-center justify-between py-3 bg-blue-50 rounded-lg px-3">
                <span className="text-sm font-semibold text-gray-800">预算总计</span>
                <span className="text-lg font-bold text-blue-600">¥4,880,000</span>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </AppLayout>
  )
}
