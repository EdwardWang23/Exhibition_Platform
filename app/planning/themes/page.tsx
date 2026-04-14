'use client'
import { useState } from 'react'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { RefreshCw, CheckCircle2, Eye, BarChart2, Zap, Globe, Layers, Star, ThumbsUp } from 'lucide-react'

const proposals = [
  {
    id: 1,
    name: '数字未来·共生共创',
    tagline: 'DIGITAL FUTURE · CO-CREATION',
    desc: '以「共生共创」为核心价值主张，强调数字科技与人类社会的融合发展，展现科技向善的理念',
    color: '#2563EB',
    gradient: 'from-blue-500 to-blue-700',
    tags: ['科技感', '人文关怀', '国际视野'],
    scores: { concept: 92, visual: 88, differentiation: 95, feasibility: 90 },
    advantages: ['价值主张清晰，易于传播', '适合多年龄段受众', '可延展性强，便于历年迭代'],
    rank: 1,
    selected: true,
  },
  {
    id: 2,
    name: '智启新境·链接未来',
    tagline: 'SMART HORIZON · LINK FUTURE',
    desc: '聚焦「智能科技」与「连接」概念，突出技术创新与生态链接，彰显行业引领性',
    color: '#8B5CF6',
    gradient: 'from-purple-500 to-purple-700',
    tags: ['技术创新', '生态链接', '行业引领'],
    scores: { concept: 88, visual: 92, differentiation: 88, feasibility: 85 },
    advantages: ['视觉冲击力强', '与技术主题高度契合', '适合媒体报道'],
    rank: 2,
    selected: false,
  },
  {
    id: 3,
    name: '元启东方·数造世界',
    tagline: 'META EAST · DIGITAL WORLD',
    desc: '融合「东方智慧」与「数字科技」，打造具有中国特色和国际影响力的科技盛会',
    color: '#EC4899',
    gradient: 'from-pink-500 to-pink-700',
    tags: ['中国特色', '元宇宙', '国际影响'],
    scores: { concept: 85, visual: 90, differentiation: 92, feasibility: 82 },
    advantages: ['差异化定位突出', '具有文化底蕴', '社交媒体传播潜力大'],
    rank: 3,
    selected: false,
  },
  {
    id: 4,
    name: '数智共生·创见明天',
    tagline: 'DIGITAL INTELLIGENCE · INNOVATION TOMORROW',
    desc: '强调「数字化」与「智能化」的融合，传递科技创新改变未来的积极信号',
    color: '#10B981',
    gradient: 'from-emerald-500 to-emerald-700',
    tags: ['数字化', '智能化', '创新驱动'],
    scores: { concept: 86, visual: 85, differentiation: 84, feasibility: 93 },
    advantages: ['易于记忆和传播', '落地执行难度低', '受众接受度高'],
    rank: 4,
    selected: false,
  },
]

export default function ThemeProposalsPage() {
  const [selected, setSelected] = useState(1)
  const [generating, setGenerating] = useState(false)
  const [compareMode, setCompareMode] = useState(false)
  const [compareList, setCompareList] = useState<number[]>([])

  const handleRegenerate = async () => {
    setGenerating(true)
    await new Promise(r => setTimeout(r, 3000))
    setGenerating(false)
  }

  const toggleCompare = (id: number) => {
    setCompareList(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-800">主题方案</h1>
            <p className="text-sm text-gray-500 mt-0.5">AI生成4套候选主题方案，请选择最符合项目定位的方案</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant={compareMode ? 'primary' : 'outline'} size="sm" onClick={() => setCompareMode(!compareMode)}>
              <BarChart2 size={14} />
              {compareMode ? '退出对比' : '方案对比'}
            </Button>
            <Button variant="outline" size="sm" icon={<RefreshCw size={14} />} loading={generating} onClick={handleRegenerate}>
              重新生成
            </Button>
          </div>
        </div>

        {/* Proposals grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {proposals.map(p => (
            <Card key={p.id} hover>
              <CardBody className="p-0">
                {/* Cover */}
                <div className={`h-40 rounded-t-xl bg-gradient-to-br ${p.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <p className="text-xs tracking-widest opacity-60 mb-2">{p.tagline}</p>
                    <h3 className="text-2xl font-bold">{p.name}</h3>
                  </div>
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <Badge className="bg-white/20 text-white border-0 backdrop-blur">候选 {p.rank}</Badge>
                    {p.selected && <Badge className="bg-white text-blue-600 border-0">推荐</Badge>}
                  </div>
                  {compareMode && (
                    <div className="absolute top-3 right-3">
                      <button onClick={() => toggleCompare(p.id)}
                        className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors ${compareList.includes(p.id) ? 'bg-white border-white text-blue-600' : 'border-white/50 text-white hover:border-white'}`}>
                        <CheckCircle2 size={14} />
                      </button>
                    </div>
                  )}
                </div>
                {/* Info */}
                <div className="p-5">
                  <p className="text-sm text-gray-600 mb-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.map(tag => (
                      <Badge key={tag} variant="default" size="sm">{tag}</Badge>
                    ))}
                  </div>
                  {/* Scores */}
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {Object.entries(p.scores).map(([key, val]) => (
                      <div key={key} className="text-center p-2 bg-gray-50 rounded-lg">
                        <p className="text-lg font-bold text-gray-800">{val}</p>
                        <p className="text-xs text-gray-400">
                          {key === 'concept' ? '概念' : key === 'visual' ? '视觉' : key === 'differentiation' ? '差异' : '可行'}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* Advantages */}
                  <div className="space-y-1.5 mb-4">
                    {p.advantages.map((adv, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                        <ThumbsUp size={11} className="text-emerald-500 flex-shrink-0" />
                        {adv}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1" icon={<Eye size={13} />}>预览详情</Button>
                    <Button size="sm" className="flex-1" onClick={() => setSelected(p.id)}>
                      选择方案
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Comparison table */}
        {compareMode && compareList.length > 1 && (
          <Card>
            <CardBody className="p-0">
              <div className="p-5 border-b border-gray-100">
                <h2 className="text-base font-semibold text-gray-800">方案对比分析</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left text-xs font-medium text-gray-500 px-5 py-3 w-32">对比维度</th>
                      {compareList.map(id => {
                        const p = proposals.find(x => x.id === id)!
                        return (
                          <th key={id} className="text-left px-5 py-3">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: p.color }} />
                              <span className="text-sm font-semibold text-gray-800">{p.name}</span>
                            </div>
                          </th>
                        )
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { label: '概念创新', key: 'concept' },
                      { label: '视觉效果', key: 'visual' },
                      { label: '差异化', key: 'differentiation' },
                      { label: '可行性', key: 'feasibility' },
                    ].map(row => (
                      <tr key={row.key} className="border-b border-gray-50">
                        <td className="px-5 py-3 text-sm text-gray-600">{row.label}</td>
                        {compareList.map(id => {
                          const p = proposals.find(x => x.id === id)!
                          const maxVal = Math.max(...compareList.map(cid => proposals.find(x => x.id === cid)!.scores[row.key as keyof typeof p.scores]))
                          const val = p.scores[row.key as keyof typeof p.scores]
                          return (
                            <td key={id} className="px-5 py-3">
                              <div className="flex items-center gap-2">
                                <div className="flex-1 bg-gray-100 rounded-full h-1.5 max-w-32">
                                  <div className="h-1.5 rounded-full" style={{ width: `${val}%`, backgroundColor: val === maxVal ? p.color : '#94A3B8' }} />
                                </div>
                                <span className={`text-sm font-medium ${val === maxVal ? 'text-gray-800' : 'text-gray-500'}`}>{val}</span>
                                {val === maxVal && <Star size={12} className="text-amber-500" fill="#F59E0B" />}
                              </div>
                            </td>
                          )
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardBody>
          </Card>
        )}

        {/* Confirm */}
        <div className="flex items-center justify-between bg-blue-50 rounded-xl px-5 py-4 border border-blue-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
              <CheckCircle2 size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">已选择方案</p>
              <p className="text-xs text-gray-500">{proposals.find(p => p.id === selected)?.name}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">重新选择</Button>
            <Button size="sm">确认并进入下一步</Button>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
