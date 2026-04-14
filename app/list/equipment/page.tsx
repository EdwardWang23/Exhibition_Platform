'use client'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Wrench, Volume2, Lightbulb, Monitor, Check } from 'lucide-react'

const equipment = [
  { category: '音响系统', items: [
    { name: '线阵音箱', brand: 'd&b audiotechnik', model: 'Y-Series', qty: 24, rent: 800, buy: 12000, recommended: 'rent' },
    { name: '返送音箱', brand: 'QSC', model: 'KS212C', qty: 8, rent: 400, buy: 6800, recommended: 'rent' },
    { name: '数字调音台', brand: 'Yamaha', model: 'CL5', qty: 2, rent: 2000, buy: 35000, recommended: 'rent' },
  ]},
  { category: '灯光系统', items: [
    { name: 'LED帕灯', brand: 'Clay Paky', model: 'Alpha Wash Q', qty: 60, rent: 150, buy: 2800, recommended: 'buy' },
    { name: '光束灯', brand: 'Martin', model: 'MAC Aura', qty: 40, rent: 200, buy: 4500, recommended: 'buy' },
  ]},
  { category: '显示系统', items: [
    { name: 'LED大屏', brand: 'NovaStar', model: 'P3.9租赁屏', qty: 120, rent: 300, buy: 5500, recommended: 'rent' },
    { name: '投影机', brand: 'Sony', model: 'VPL-FHZ131', qty: 6, rent: 600, buy: 28000, recommended: 'buy' },
  ]},
]

export default function EquipmentListPage() {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-5">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">设备清单</h1>
          <Button size="sm">导出Excel</Button>
        </div>
        {equipment.map(cat => (
          <Card key={cat.category}>
            <CardBody>
              <div className="flex items-center gap-2 mb-4">
                {cat.category === '音响系统' && <Volume2 size={16} className="text-blue-600" />}
                {cat.category === '灯光系统' && <Lightbulb size={16} className="text-amber-500" />}
                {cat.category === '显示系统' && <Monitor size={16} className="text-purple-600" />}
                <h2 className="text-sm font-semibold text-gray-800">{cat.category}</h2>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left text-xs font-medium text-gray-500 py-2">设备名称</th>
                    <th className="text-left text-xs font-medium text-gray-500 py-2">品牌/型号</th>
                    <th className="text-left text-xs font-medium text-gray-500 py-2">数量</th>
                    <th className="text-left text-xs font-medium text-gray-500 py-2">租赁/3天</th>
                    <th className="text-left text-xs font-medium text-gray-500 py-2">购买</th>
                    <th className="text-left text-xs font-medium text-gray-500 py-2">推荐方案</th>
                  </tr>
                </thead>
                <tbody>
                  {cat.items.map((item, i) => (
                    <tr key={i} className="border-b border-gray-50">
                      <td className="py-2.5 text-sm font-medium text-gray-800">{item.name}</td>
                      <td className="py-2.5 text-sm text-gray-500">{item.brand} {item.model}</td>
                      <td className="py-2.5 text-sm text-gray-800">{item.qty}</td>
                      <td className="py-2.5 text-sm text-gray-600">¥{item.rent * item.qty}/3天</td>
                      <td className="py-2.5 text-sm text-gray-600">¥{item.buy * item.qty}</td>
                      <td className="py-2.5">
                        <Badge variant={item.recommended === 'rent' ? 'cyan' : 'purple'} size="sm">
                          {item.recommended === 'rent' ? '租赁' : '购买'}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardBody>
          </Card>
        ))}
      </div>
    </AppLayout>
  )
}
