'use client'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { BarChart2, TrendingUp, Target, CheckCircle2, Zap, Eye, ArrowRight } from 'lucide-react'

const competitors = [
  {
    id: 1, name: '中国国际软件博览会', scale: '★★★★★', area: '12000㎡', exhibitors: 500, visitors: '80000', year: '2025',
    highlight: '政府背景强，政策支持力度大', weakness: '展品更新慢，国际化程度不足',
    strength: ['政府资源', '品牌影响力', '政策支持'], weakness2: ['创新不足', '互动性弱', '票价高'],
    radar: { scale: 95, innovation: 70, brand: 90, service: 85, international: 60, interactive: 65 }
  },
  {
    id: 2, name: '全球数字经济大会', scale: '★★★★☆', area: '8000㎡', exhibitors: 300, visitors: '45000', year: '2025',
    highlight: '国际化程度高，海外展商占比40%', weakness: '本土化运营经验不足',
    strength: ['国际化', '媒体曝光', '嘉宾阵容'], weakness2: ['落地执行', '本地化', '商务对接'],
    radar: { scale: 80, innovation: 85, brand: 82, service: 75, international: 90, interactive: 70 }
  },
  {
    id: 3, name: '智慧城市博览会', scale: '★★★★☆', area: '6000㎡', exhibitors: 250, visitors: '35000', year: '2024',
    highlight: '垂直领域深耕，专业度高', weakness: '规模受限，观众范围窄',
    strength: ['专业度', '垂直深度', '观众质量'], weakness2: ['规模小', '品牌弱', '创新少'],
    radar: { scale: 70, innovation: 75, brand: 70, service: 88, international: 55, interactive: 72 }
  },
]

export default function CompetitorAnalysisPage() {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-800">竞品分析报告</h1>
            <p className="text-sm text-gray-500 mt-0.5">分析同类展会，寻找差异化定位机会</p>
          </div>
          <Button size="sm" icon={<ArrowRight size={14} />}>应用差异化策略</Button>
        </div>

        {/* Summary */}
        <div className="grid sm:grid-cols-4 gap-4">
          {[
            { label: '主要竞品', value: '3个', color: '#64748B' },
            { label: '市场覆盖率', value: '65%', color: '#2563EB' },
            { label: '差异化机会', value: '8项', color: '#10B981' },
            { label: '推荐策略', value: '4条', color: '#F59E0B' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-3">
              <div className="w-2 h-10 rounded-full" style={{ backgroundColor: s.color }} />
              <div>
                <p className="text-xl font-bold text-gray-800">{s.value}</p>
                <p className="text-xs text-gray-500">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2">
            {/* Competitor cards */}
            <div className="space-y-4">
              {competitors.map(c => (
                <Card key={c.id}>
                  <CardBody>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-base font-semibold text-gray-800">{c.name}</h3>
                        <p className="text-xs text-gray-400 mt-0.5">{c.year}年 · {c.scale}规模</p>
                      </div>
                      <Badge variant="orange">规模 {c.area}</Badge>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-3 mb-4">
                      <div className="text-center p-2 bg-gray-50 rounded-lg">
                        <p className="text-lg font-bold text-gray-800">{c.exhibitors}+</p>
                        <p className="text-xs text-gray-400">参展商</p>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded-lg">
                        <p className="text-lg font-bold text-gray-800">{c.visitors}</p>
                        <p className="text-xs text-gray-400">专业观众</p>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded-lg">
                        <p className="text-lg font-bold text-gray-800">{c.year}</p>
                        <p className="text-xs text-gray-400">最近一届</p>
                      </div>
                    </div>
                    {/* Radar chart simulation */}
                    <div className="grid grid-cols-6 gap-1 mb-4">
                      {[
                        { label: '规模', key: 'scale' },
                        { label: '创新', key: 'innovation' },
                        { label: '品牌', key: 'brand' },
                        { label: '服务', key: 'service' },
                        { label: '国际', key: 'international' },
                        { label: '互动', key: 'interactive' },
                      ].map(dim => (
                        <div key={dim.key} className="text-center">
                          <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
                            <div className="h-2 rounded-full bg-purple-400" style={{ width: `${c.radar[dim.key as keyof typeof c.radar]}%` }} />
                          </div>
                          <span className="text-xs text-gray-400">{dim.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="p-3 bg-emerald-50 rounded-xl">
                        <div className="flex items-center gap-2 mb-1.5">
                          <CheckCircle2 size={14} className="text-emerald-600" />
                          <span className="text-xs font-medium text-emerald-800">优势</span>
                        </div>
                        <p className="text-xs text-emerald-700">{c.highlight}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {c.strength.map(s => <Badge key={s} variant="success" size="sm">{s}</Badge>)}
                        </div>
                      </div>
                      <div className="p-3 bg-red-50 rounded-xl">
                        <div className="flex items-center gap-2 mb-1.5">
                          <Zap size={14} className="text-red-600" />
                          <span className="text-xs font-medium text-red-800">劣势</span>
                        </div>
                        <p className="text-xs text-red-700">{c.weakness}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {c.weakness2.map(s => <Badge key={s} variant="error" size="sm">{s}</Badge>)}
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {/* Differentiation opportunities */}
            <Card>
              <CardBody>
                <div className="flex items-center gap-2 mb-3">
                  <Target size={16} className="text-blue-600" />
                  <h3 className="text-sm font-semibold text-gray-800">差异化策略建议</h3>
                </div>
                <div className="space-y-2.5">
                  {[
                    { title: '强化AI+互动体验', desc: '竞品互动性普遍不足(65-72分)，可大幅提升', priority: '高' },
                    { title: '深化商务对接服务', desc: '打造一站式商贸对接平台，提升B端价值', priority: '高' },
                    { title: '降低参与门槛', desc: '优化票价策略，吸引更多中小企业参与', priority: '中' },
                    { title: '加强国际元素', desc: '借鉴全球数字经济大会，提升国际化至75%', priority: '中' },
                    { title: '本土化深度内容', desc: '打造具有中国特色的数字科技议题', priority: '中' },
                  ].map((s, i) => (
                    <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-0.5">
                          <p className="text-xs font-medium text-gray-800">{s.title}</p>
                          <Badge variant={s.priority === '高' ? 'error' : 'warning'} size="sm">{s.priority}</Badge>
                        </div>
                        <p className="text-xs text-gray-500">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp size={16} className="text-emerald-600" />
                  <h3 className="text-sm font-semibold text-gray-800">我们的机会窗口</h3>
                </div>
                <div className="space-y-2">
                  {[
                    { metric: '目标市场增长率', current: '5.2%', target: '15%', color: '#10B981' },
                    { metric: 'AI展品占比目标', current: '30%', target: '50%', color: '#8B5CF6' },
                    { metric: '国际展商占比', current: '20%', target: '35%', color: '#2563EB' },
                    { metric: '观众满意度目标', current: '78%', target: '92%', color: '#F59E0B' },
                  ].map(m => (
                    <div key={m.metric} className="p-2.5 bg-gray-50 rounded-lg">
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-gray-600">{m.metric}</span>
                        <span className="text-xs text-gray-400">{m.current} → {m.target}</span>
                      </div>
                      <div className="h-1.5 bg-gray-200 rounded-full"><div className="h-1.5 rounded-full" style={{ width: `${parseFloat(m.target)}%`, backgroundColor: m.color }} /></div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Button className="w-full" size="sm">生成完整竞品分析报告</Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
