'use client'
import { useState } from 'react'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Palette, Sliders, CheckCircle2, RotateCcw, ZoomIn, Eye, Download, ArrowRight } from 'lucide-react'

const styles = [
  {
    id: 1, name: '科技蓝', palette: ['#0F172A', '#1E40AF', '#3B82F6', '#60A5FA', '#DBEAFE'],
    fonts: '思源黑体 + DIN', mood: '科技·专业·信任', selected: false,
    preview: 'from-blue-900 via-blue-800 to-blue-600',
  },
  {
    id: 2, name: '极客紫', palette: ['#1E0A3C', '#5B21B6', '#7C3AED', '#A78BFA', '#EDE9FE'],
    fonts: '思源黑体 + Space Grotesk', mood: '创新·前瞻·未来', selected: true,
    preview: 'from-purple-950 via-purple-800 to-purple-600',
  },
  {
    id: 3, name: '清新绿', palette: ['#052E16', '#166534', '#22C55E', '#86EFAC', '#DCFCE7'],
    fonts: '思源黑体 + Montserrat', mood: '生态·可持续·健康', selected: false,
    preview: 'from-green-950 via-green-800 to-green-500',
  },
]

const elements = [
  { name: '主KV', preview: 'bg-gradient-to-br from-purple-900 via-purple-700 to-blue-500', w: '100%', h: '160px' },
  { name: '背景板', preview: 'bg-gradient-to-r from-purple-900 to-blue-800', w: '100%', h: '80px' },
  { name: '导视系统', preview: 'bg-gradient-to-r from-purple-800 to-blue-700', w: '100%', h: '60px' },
  { name: '邀请函', preview: 'bg-gradient-to-br from-purple-900 to-purple-600', w: '80px', h: '120px' },
]

export default function VisualDesignPage() {
  const [selectedStyle, setSelectedStyle] = useState(2)
  const [sliderValue, setSliderValue] = useState(50)

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-800">视觉风格设计</h1>
            <p className="text-sm text-gray-500">数字中国峰会 · 生成并调整品牌视觉方案</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" icon={<RotateCcw size={14} />}>重新生成</Button>
            <Button size="sm" icon={<CheckCircle2 size={14} />}>确认方案</Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {/* Left - Style options */}
          <div className="space-y-4">
            <Card>
              <CardBody>
                <h3 className="text-sm font-semibold text-gray-800 mb-3">色彩方案</h3>
                <div className="space-y-3">
                  {styles.map(s => (
                    <div key={s.id}
                      onClick={() => setSelectedStyle(s.id)}
                      className={`p-3 rounded-xl border-2 cursor-pointer transition-all ${selectedStyle === s.id ? 'border-pink-400 bg-pink-50/30' : 'border-gray-100 hover:border-gray-200'}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-800">{s.name}</span>
                        {selectedStyle === s.id && <CheckCircle2 size={16} className="text-pink-500" />}
                      </div>
                      <div className="flex gap-1 mb-2">
                        {s.palette.map((c, i) => (
                          <div key={i} className="flex-1 h-6 rounded-md" style={{ backgroundColor: c }} />
                        ))}
                      </div>
                      <p className="text-xs text-gray-400">{s.fonts}</p>
                      <Badge variant="purple" size="sm">{s.mood}</Badge>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <div className="flex items-center gap-2 mb-3">
                  <Sliders size={16} className="text-gray-500" />
                  <h3 className="text-sm font-semibold text-gray-800">参数调节</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { label: '科技感', value: sliderValue, set: setSliderValue },
                    { label: '简约度', value: 65, set: () => {} },
                    { label: '亮度', value: 70, set: () => {} },
                  ].map(s => (
                    <div key={s.label}>
                      <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                        <span>{s.label}</span>
                        <span>{s.value}%</span>
                      </div>
                      <input type="range" min="0" max="100" value={s.value} onChange={e => s.set(Number(e.target.value))}
                        className="w-full accent-pink-500" />
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Center - Preview */}
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardBody>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Eye size={16} className="text-gray-500" />
                    <h3 className="text-sm font-semibold text-gray-800">主视觉预览</h3>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm" icon={<ZoomIn size={13} />}>放大</Button>
                    <Button variant="ghost" size="sm" icon={<Download size={13} />}>下载</Button>
                  </div>
                </div>
                {/* Main visual */}
                <div className="rounded-xl overflow-hidden mb-4 relative group">
                  <div className={`h-72 bg-gradient-to-br ${styles.find(s => s.id === selectedStyle)?.preview} relative`}>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                      <div className="text-4xl font-bold mb-2">DIGITAL FUTURE</div>
                      <div className="text-lg tracking-widest opacity-70">2026 · CO-CREATION</div>
                      <div className="mt-4 flex gap-2">
                        {['AI', 'METAVERSE', 'CLOUD', 'IOT'].map(tag => (
                          <span key={tag} className="px-3 py-1 bg-white/20 rounded-full text-xs backdrop-blur">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <Button variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity" size="sm">预览大图</Button>
                  </div>
                </div>
                {/* Elements grid */}
                <div className="grid grid-cols-4 gap-3">
                  {elements.map(el => (
                    <div key={el.name} className="border border-gray-100 rounded-lg overflow-hidden cursor-pointer hover:border-gray-200 transition-colors">
                      <div className={`${el.preview} ${el.h === '160px' ? 'h-16' : el.h === '120px' ? 'h-14' : 'h-8'}`} />
                      <p className="text-xs text-center text-gray-500 py-1.5">{el.name}</p>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>

            {/* Color details */}
            <Card>
              <CardBody>
                <h3 className="text-sm font-semibold text-gray-800 mb-3">色彩规范</h3>
                <div className="grid grid-cols-5 gap-3">
                  {styles.find(s => s.id === selectedStyle)?.palette.map((c, i) => (
                    <div key={i} className="text-center">
                      <div className="w-full aspect-square rounded-xl mb-1.5" style={{ backgroundColor: c }} />
                      <p className="text-xs font-mono text-gray-600">{c}</p>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
