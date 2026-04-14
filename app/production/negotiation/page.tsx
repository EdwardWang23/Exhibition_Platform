'use client'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ShoppingCart, Lightbulb, TrendingDown, Copy, FileText } from 'lucide-react'

const quotes = [
  { supplier: '华展装饰', item: '展台搭建', quote: 850000, market: 920000, negotiable: 72000, status: 'good' },
  { supplier: '光影科技', item: 'AV设备租赁', quote: 680000, market: 700000, negotiable: 25000, status: 'fair' },
  { supplier: '东方阻燃', item: '阻燃材料', quote: 420000, market: 450000, negotiable: 35000, status: 'good' },
]

export default function NegotiationPage() {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-5">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">采购谈判辅助</h1>
          <Button size="sm" icon={<FileText size={14} />}>生成谈判记录</Button>
        </div>

        <Card>
          <CardBody>
            <h2 className="text-sm font-semibold text-gray-800 mb-4">报价对比分析</h2>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  {['供应商', '采购项', '报价', '市场价', '可议空间', '状态'].map(h => (
                    <th key={h} className="text-left text-xs font-medium text-gray-500 py-2 mb-2">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {quotes.map(q => (
                  <tr key={q.supplier} className="border-b border-gray-50">
                    <td className="py-3 text-sm font-medium text-gray-800">{q.supplier}</td>
                    <td className="py-3 text-sm text-gray-500">{q.item}</td>
                    <td className="py-3 text-sm font-medium text-emerald-600">¥{q.quote.toLocaleString()}</td>
                    <td className="py-3 text-sm text-gray-500">¥{q.market.toLocaleString()}</td>
                    <td className="py-3 text-sm text-amber-600">¥{q.negotiable.toLocaleString()}</td>
                    <td className="py-3"><Badge variant={q.status === 'good' ? 'success' : 'warning'} size="sm">{q.status === 'good' ? '优' : '中'}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb size={16} className="text-emerald-600" />
              <h2 className="text-sm font-semibold text-gray-800">谈判策略推荐</h2>
            </div>
            <div className="space-y-2">
              {[
                { supplier: '华展装饰', strategy: '当前报价低于市场8%，可直接推进谈判，建议强调长期合作意向争取更多优惠', priority: 'high' },
                { supplier: '光影科技', strategy: '报价接近市场价，建议要求免费增加2名技术人员驻场支持', priority: 'medium' },
                { supplier: '东方阻燃', strategy: '价格优势明显，可争取延长付款账期至验收后30天', priority: 'low' },
              ].map((s, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                  <Copy size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs font-medium text-gray-800">{s.supplier}</span>
                      <Badge variant={s.priority === 'high' ? 'error' : s.priority === 'medium' ? 'warning' : 'default'} size="sm">
                        {s.priority === 'high' ? '高优先' : s.priority === 'medium' ? '中优先' : '低优先'}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600">{s.strategy}</p>
                  </div>
                  <Button variant="ghost" size="sm">复制</Button>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </AppLayout>
  )
}
