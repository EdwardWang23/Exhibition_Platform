'use client'
import { useState } from 'react'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { MousePointer, Move, RotateCw, Maximize2, Undo2, Redo2, Play, Pause, Layers, Box, Circle, Sun, Camera, Download } from 'lucide-react'

const tools = [
  { icon: MousePointer, label: '选择', shortcut: 'V' },
  { icon: Move, label: '移动', shortcut: 'G' },
  { icon: RotateCw, label: '旋转', shortcut: 'R' },
  { icon: Maximize2, label: '缩放', shortcut: 'S' },
]

const layers = [
  { name: '主展厅', visible: true, locked: false, color: '#3B82F6' },
  { name: 'AI创新区', visible: true, locked: false, color: '#8B5CF6' },
  { name: '元宇宙体验区', visible: true, locked: false, color: '#EC4899' },
  { name: '论坛区', visible: true, locked: false, color: '#10B981' },
  { name: '洽谈区', visible: false, locked: false, color: '#F59E0B' },
]

export default function ThreeDEditorPage() {
  const [activeTool, setActiveTool] = useState('select')
  const [selectedObj, setSelectedObj] = useState<string | null>('主展厅')
  const [rendering, setRendering] = useState(false)

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
              <Layers size={20} className="text-blue-600" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-800">3D场地编辑器</h1>
              <p className="text-xs text-gray-500">数字中国峰会 · WebGL渲染</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" icon={<Undo2 size={13} />}>撤销</Button>
            <Button variant="outline" size="sm" icon={<Redo2 size={13} />}>重做</Button>
            <Button size="sm" icon={<Play size={13} />} onClick={() => setRendering(true)}>渲染</Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-3" style={{ height: 'calc(100vh - 180px)' }}>
          {/* Left panel - model library */}
          <div className="bg-white rounded-xl border border-gray-100 flex flex-col">
            <div className="px-3 py-2 border-b border-gray-100">
              <p className="text-xs font-medium text-gray-700">模型库</p>
            </div>
            <div className="flex-1 overflow-y-auto p-2 space-y-1">
              <p className="text-xs text-gray-400 px-2 py-1">基础几何体</p>
              {[
                { icon: Box, name: '立方体', desc: '展览墙体' },
                { icon: Box, name: '平面', desc: '地面/天花板' },
                { icon: Circle, name: '圆柱', desc: '立柱/展架' },
              ].map((m, i) => (
                <button key={i} className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 text-left">
                  <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <m.icon size={14} className="text-gray-500" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-700">{m.name}</p>
                    <p className="text-xs text-gray-400">{m.desc}</p>
                  </div>
                </button>
              ))}
              <p className="text-xs text-gray-400 px-2 py-1 mt-2">展具模型</p>
              {[
                { name: '标准展位', desc: '9㎡标准展台' },
                { name: '大型展台', desc: '36㎡以上' },
                { name: '岛型展位', desc: '四面开敞' },
              ].map((m, i) => (
                <button key={i} className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 text-left">
                  <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Box size={14} className="text-gray-500" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-700">{m.name}</p>
                    <p className="text-xs text-gray-400">{m.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Center - 3D viewport */}
          <div className="lg:col-span-2 bg-gray-900 rounded-xl overflow-hidden relative flex flex-col">
            {/* Toolbar */}
            <div className="flex items-center justify-center gap-1 p-2 bg-gray-800">
              {tools.map(t => (
                <button key={t.label}
                  onClick={() => setActiveTool(t.label)}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors
                    ${activeTool === t.label ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-700'}`}
                  title={`${t.label} (${t.shortcut})`}>
                  <t.icon size={14} />
                </button>
              ))}
              <div className="w-px h-5 bg-gray-600 mx-1" />
              <button className="w-8 h-8 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 flex items-center justify-center">
                <Camera size={14} />
              </button>
              <button className="w-8 h-8 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 flex items-center justify-center">
                <Sun size={14} />
              </button>
            </div>
            {/* 3D Canvas area */}
            <div className="flex-1 relative">
              {/* Grid background */}
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />
              {/* Simulated 3D scene */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative" style={{ perspective: '800px' }}>
                  {/* Floor */}
                  <div className="w-96 h-64 border-2 border-blue-400/30 rounded-lg transform -rotate-x-12"
                    style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.05), rgba(139,92,246,0.05))' }}>
                    {/* AI zone */}
                    <div className="absolute top-6 left-6 w-36 h-28 border-2 border-purple-400/50 rounded-lg bg-purple-400/10 flex items-center justify-center">
                      <span className="text-xs text-purple-400">AI创新区</span>
                    </div>
                    {/* Meta zone */}
                    <div className="absolute top-6 right-6 w-28 h-28 border-2 border-pink-400/50 rounded-lg bg-pink-400/10 flex items-center justify-center">
                      <span className="text-xs text-pink-400">元宇宙</span>
                    </div>
                    {/* Forum */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 h-20 border-2 border-emerald-400/50 rounded-lg bg-emerald-400/10 flex items-center justify-center">
                      <span className="text-xs text-emerald-400">论坛活动区</span>
                    </div>
                    {/* Entrance */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-6 border-2 border-blue-400/50 rounded bg-blue-400/20 flex items-center justify-center">
                      <span className="text-[10px] text-blue-400">入口</span>
                    </div>
                  </div>
                  {/* Decorative 3D elements */}
                  <div className="absolute top-10 right-0 w-6 h-6 bg-purple-400/40 rounded transform rotate-12" />
                  <div className="absolute bottom-20 left-4 w-4 h-4 bg-blue-400/40 rounded-full" />
                </div>
              </div>
              {/* Bottom info */}
              <div className="absolute bottom-3 left-3 flex items-center gap-3">
                <Badge className="bg-gray-800/80 text-gray-300 border-0 backdrop-blur" size="sm">
                  <MousePointer size={10} /> 正交视图
                </Badge>
                <span className="text-xs text-gray-400">拖拽旋转 · 滚轮缩放</span>
              </div>
              <div className="absolute bottom-3 right-3">
                <Badge className="bg-gray-800/80 text-gray-300 border-0 backdrop-blur" size="sm">
                  8000㎡ · 12:00 PM
                </Badge>
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="flex flex-col gap-3">
            {/* Properties */}
            <Card className="flex-1">
              <CardBody className="p-3">
                <p className="text-xs font-medium text-gray-700 mb-3">属性</p>
                <div className="space-y-2">
                  {selectedObj ? (
                    <>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="p-2 bg-gray-50 rounded-lg">
                          <p className="text-xs text-gray-400">X</p>
                          <p className="text-xs font-mono font-medium text-gray-800">0.00</p>
                        </div>
                        <div className="p-2 bg-gray-50 rounded-lg">
                          <p className="text-xs text-gray-400">Y</p>
                          <p className="text-xs font-mono font-medium text-gray-800">0.00</p>
                        </div>
                        <div className="p-2 bg-gray-50 rounded-lg">
                          <p className="text-xs text-gray-400">Z</p>
                          <p className="text-xs font-mono font-medium text-gray-800">0.00</p>
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        {['宽度', '高度', '深度'].map(prop => (
                          <div key={prop} className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">{prop}</span>
                            <div className="flex items-center gap-1">
                              <input type="number" defaultValue={10} className="w-14 h-6 text-xs text-right px-1 border border-gray-200 rounded" />
                              <span className="text-xs text-gray-400">m</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <p className="text-xs text-gray-400 text-center py-4">选择物体以查看属性</p>
                  )}
                </div>
              </CardBody>
            </Card>

            {/* Layers */}
            <Card className="flex-1">
              <CardBody className="p-3">
                <p className="text-xs font-medium text-gray-700 mb-3">图层</p>
                <div className="space-y-1">
                  {layers.map(l => (
                    <div key={l.name}
                      onClick={() => setSelectedObj(l.name)}
                      className={`flex items-center gap-2 p-1.5 rounded-lg cursor-pointer transition-colors ${selectedObj === l.name ? 'bg-blue-50' : 'hover:bg-gray-50'}`}>
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: l.color }} />
                      <span className="text-xs text-gray-700 flex-1">{l.name}</span>
                      {l.locked && <span className="text-xs text-gray-300">🔒</span>}
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
