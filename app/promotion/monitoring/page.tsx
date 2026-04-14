'use client'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { TrendingUp, Eye, MousePointer, DollarSign, FileText } from 'lucide-react'

const metrics = [
  { label: '总曝光量', value: '1.2M', trend: 12.5, icon: Eye, color: '#2563EB' },
  { label: '总点击量', value: '45.8K', trend: 8.3, icon: MousePointer, color: '#8B5CF6' },
  { label: '转化数', value: '2,340', trend: 15.2, icon: TrendingUp, color: '#10B981' },
  { label: '总花费', value: '¥28,000', trend: -3.1, icon: DollarSign, color: '#F59E0B' },
]

const channelData = [
  { name: '微信公众号', reach: 50000, click: 1600, conv: 120, roi: 3.2 },
  { name: '抖音', reach: 80000, click: 1440, conv: 86, roi: 2.1 },
  { name: '行业媒体', reach: 15000, click: 765, conv: 58, roi: 4.5 },
]

export default function MonitoringDashboardPage() {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-800">效果监测看板</h1>
            <p className="text-sm text-gray-500">实时数据更新 · 最近7天</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">昨日</Button>
            <Button size="sm">生成效果报告</Button>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid sm:grid-cols-4 gap-4">
          {metrics.map(m => (
            <div key={m.label} className="bg-white rounded-xl border border-gray-100 p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: m.color + '15' }}>
                  <m.icon size={16} style={{ color: m.color }} />
                </div>
                <span className={`text-xs font-medium ${m.trend > 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                  {m.trend > 0 ? '↑' : '↓'} {Math.abs(m.trend)}%
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-800">{m.value}</p>
              <p className="text-xs text-gray-400">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Trend chart */}
        <Card>
          <CardBody>
            <h2 className="text-sm font-semibold text-gray-800 mb-4">曝光趋势</h2>
            <div className="flex items-end gap-1 h-40">
              {[40, 65, 45, 80, 70, 90, 75, 95, 85, 100, 88, 92].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                  <div className="w-full bg-blue-200 rounded-t" style={{ height: `${h}%`, backgroundColor: i === 11 ? '#2563EB' : undefined }} />
                  <span className="text-xs text-gray-400">{['1日', '', '3日', '', '5日', '', '7日', '', '9日', '', '11日', '今日'][i]}</span>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        {/* Channel comparison */}
        <Card>
          <CardBody>
            <h2 className="text-sm font-semibold text-gray-800 mb-4">渠道效果对比</h2>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  {['渠道', '曝光', '点击', '转化', 'ROI'].map(h => (
                    <th key={h} className="text-left text-xs font-medium text-gray-500 py-2">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {channelData.map(c => (
                  <tr key={c.name} className="border-b border-gray-50">
                    <td className="py-3 text-sm font-medium text-gray-800">{c.name}</td>
                    <td className="py-3 text-sm text-gray-600">{c.reach.toLocaleString()}</td>
                    <td className="py-3 text-sm text-gray-600">{c.click.toLocaleString()}</td>
                    <td className="py-3 text-sm text-gray-600">{c.conv}</td>
                    <td className="py-3 text-sm font-medium text-emerald-600">{c.roi}x</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </AppLayout>
  )
}
