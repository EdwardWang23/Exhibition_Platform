'use client'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Users, Target, TrendingUp } from 'lucide-react'

const channels = [
  { name: '微信公众号', icon: '微', color: '#07C160', reach: 50000, ctr: 3.2, cost: 5000, budget: 30, recommended: true },
  { name: '抖音', icon: '抖', color: '#00F2EA', reach: 200000, ctr: 1.8, cost: 15000, budget: 40, recommended: true },
  { name: '行业媒体', icon: '媒', color: '#6366F1', reach: 15000, ctr: 5.1, cost: 8000, budget: 20, recommended: true },
  { name: '朋友圈广告', icon: '朋', color: '#07C160', reach: 30000, ctr: 2.5, cost: 6000, budget: 10, recommended: false },
]

export default function ChannelConfigPage() {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-5">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">渠道推荐配置</h1>
          <Button size="sm">确认投放计划</Button>
        </div>

        {/* Audience */}
        <Card>
          <CardBody>
            <div className="flex items-center gap-2 mb-4">
              <Users size={16} className="text-purple-600" />
              <h2 className="text-sm font-semibold text-gray-800">目标受众画像</h2>
            </div>
            <div className="grid sm:grid-cols-4 gap-3">
              {[
                { label: '年龄分布', value: '25-45岁为主' },
                { label: '职业特征', value: '企业决策者/技术负责人' },
                { label: '兴趣标签', value: '科技/AI/数字化转型' },
                { label: '地域分布', value: '一线城市 60%' },
              ].map(a => (
                <div key={a.label} className="p-3 bg-gray-50 rounded-xl">
                  <p className="text-xs text-gray-400">{a.label}</p>
                  <p className="text-sm font-medium text-gray-800 mt-0.5">{a.value}</p>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        {/* Channels */}
        <Card>
          <CardBody>
            <h2 className="text-sm font-semibold text-gray-800 mb-4">推荐渠道</h2>
            <div className="space-y-3">
              {channels.map(c => (
                <div key={c.name} className={`border rounded-xl p-4 ${c.recommended ? 'border-sky-200 bg-sky-50/30' : 'border-gray-100'}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold" style={{ backgroundColor: c.color }}>
                      {c.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-800">{c.name}</span>
                        {c.recommended && <Badge variant="sky" size="sm">推荐</Badge>}
                      </div>
                      <div className="flex gap-4 mt-1">
                        <span className="text-xs text-gray-400">预估曝光：{c.reach.toLocaleString()}</span>
                        <span className="text-xs text-gray-400">CTR：{c.ctr}%</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-800">¥{c.cost.toLocaleString()}</p>
                      <p className="text-xs text-gray-400">预算占比 {c.budget}%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-100 rounded-full h-1.5"><div className="h-1.5 rounded-full bg-sky-500" style={{ width: `${c.budget * 2}%` }} /></div>
                    <input type="range" min="0" max="50" value={c.budget} className="w-32 accent-sky-500" />
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </AppLayout>
  )
}
