'use client'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Truck, AlertTriangle, CheckCircle2, Clock } from 'lucide-react'

const orders = [
  { id: 'PO-2026-001', supplier: '华展装饰', item: '展台搭建', amount: 850000, status: 'producing', progress: 60, delivery: '2026-05-15', risk: 'medium' },
  { id: 'PO-2026-002', supplier: '光影科技', item: 'AV设备租赁', amount: 680000, status: 'confirmed', progress: 20, delivery: '2026-05-20', risk: 'none' },
  { id: 'PO-2026-003', supplier: '东方阻燃', item: '阻燃材料', amount: 420000, status: 'shipped', progress: 90, delivery: '2026-04-25', risk: 'none' },
  { id: 'PO-2026-004', supplier: '华铝建材', item: '铝合金框架', amount: 102000, status: 'delivered', progress: 100, delivery: '2026-04-10', risk: 'none' },
]

export default function OrdersPage() {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-5">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">订单跟踪</h1>
        </div>

        {/* Risks */}
        <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-xl border border-amber-100">
          <AlertTriangle size={16} className="text-amber-500" />
          <p className="text-sm text-amber-700">1 个订单存在延期风险：华展装饰展台搭建项目进度滞后10%</p>
          <Button variant="outline" size="sm" className="ml-auto">查看详情</Button>
        </div>

        <div className="space-y-4">
          {orders.map(order => (
            <Card key={order.id}>
              <CardBody>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-gray-800">{order.supplier}</span>
                      <span className="text-xs text-gray-400">{order.id}</span>
                    </div>
                    <p className="text-xs text-gray-500">{order.item} · ¥{order.amount.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {order.risk !== 'none' && <Badge variant="warning" size="sm">有风险</Badge>}
                    <Badge variant={
                      order.status === 'delivered' ? 'success' :
                      order.status === 'shipped' ? 'cyan' :
                      order.status === 'producing' ? 'warning' : 'default'
                    } dot>
                      {order.status === 'delivered' ? '已交付' : order.status === 'shipped' ? '运输中' : order.status === 'producing' ? '生产中' : '已确认'}
                    </Badge>
                  </div>
                </div>
                <div className="mb-2">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>执行进度</span>
                    <span>{order.progress}%</span>
                  </div>
                  <div className="bg-gray-100 rounded-full h-2">
                    <div className="h-2 rounded-full bg-indigo-500" style={{ width: `${order.progress}%` }} />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Truck size={12} />
                    <span>预计交付：{order.delivery}</span>
                  </div>
                  <Button variant="ghost" size="sm">查看详情</Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  )
}
