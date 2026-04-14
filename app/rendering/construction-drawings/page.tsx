'use client'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ZoomIn, ZoomOut, MessageSquare, Download, Layers, ChevronDown } from 'lucide-react'

const drawings = [
  { id: 'floor', label: '平面图', active: true },
  { id: 'elevation', label: '立面图', active: false },
  { id: 'section', label: '剖面图', active: false },
  { id: 'node', label: '节点图', active: false },
]

const annotations = [
  { id: 1, x: 120, y: 80, text: '主入口宽3.6m', type: 'info' },
  { id: 2, x: 280, y: 150, text: 'AI展区面积400㎡', type: 'info' },
  { id: 3, x: 450, y: 200, text: '承重柱间距9m', type: 'warning' },
]

export default function ConstructionDrawingsPage() {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-800">施工图查看</h1>
            <p className="text-sm text-gray-500">数字中国峰会 · 全套施工图纸</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" icon={<Download size={14} />}>导出PDF</Button>
            <Button size="sm" icon={<MessageSquare size={14} />}>添加标注</Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-5">
          {/* Drawing viewer */}
          <div className="lg:col-span-3 bg-white rounded-xl border border-gray-100 overflow-hidden">
            {/* Toolbar */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100 bg-gray-50">
              <div className="flex items-center gap-1">
                {drawings.map(d => (
                  <button key={d.id}
                    className={`px-3 py-1.5 text-xs rounded-lg transition-colors ${d.active ? 'bg-blue-100 text-blue-600 font-medium' : 'text-gray-500 hover:text-gray-700'}`}>
                    {d.label}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-1">
                <button className="w-7 h-7 rounded flex items-center justify-center text-gray-500 hover:bg-gray-200"><ZoomOut size={14} /></button>
                <span className="text-xs text-gray-400 px-2">100%</span>
                <button className="w-7 h-7 rounded flex items-center justify-center text-gray-500 hover:bg-gray-200"><ZoomIn size={14} /></button>
                <button className="w-7 h-7 rounded flex items-center justify-center text-gray-500 hover:bg-gray-200"><Layers size={14} /></button>
              </div>
            </div>
            {/* Drawing canvas */}
            <div className="h-96 relative overflow-hidden" style={{ background: '#FAFAFA' }}>
              {/* Grid */}
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(#ddd 1px, transparent 1px), linear-gradient(90deg, #ddd 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }} />
              {/* Simulated floor plan */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="600" height="350" viewBox="0 0 600 350">
                  {/* Outer walls */}
                  <rect x="20" y="20" width="560" height="310" fill="none" stroke="#333" strokeWidth="3" />
                  {/* Inner walls */}
                  <line x1="200" y1="20" x2="200" y2="150" stroke="#333" strokeWidth="2" />
                  <line x1="200" y1="150" x2="400" y2="150" stroke="#333" strokeWidth="2" />
                  <line x1="400" y1="20" x2="400" y2="150" stroke="#333" strokeWidth="2" />
                  <line x1="300" y1="150" x2="300" y2="330" stroke="#333" strokeWidth="2" />
                  {/* Labels */}
                  <text x="110" y="90" textAnchor="middle" fill="#666" fontSize="11">AI创新区</text>
                  <text x="300" y="80" textAnchor="middle" fill="#666" fontSize="11">元宇宙体验区</text>
                  <text x="500" y="90" textAnchor="middle" fill="#666" fontSize="11">论坛区</text>
                  <text x="150" y="250" textAnchor="middle" fill="#666" fontSize="11">商务区</text>
                  <text x="450" y="250" textAnchor="middle" fill="#666" fontSize="11">洽谈区</text>
                  <text x="300" y="310" textAnchor="middle" fill="#333" fontSize="9" fontWeight="bold">入口</text>
                  {/* Dimension */}
                  <line x1="20" y1="345" x2="580" y2="345" stroke="#999" strokeWidth="0.5" />
                  <line x1="20" y1="340" x2="20" y2="350" stroke="#999" strokeWidth="0.5" />
                  <line x1="580" y1="340" x2="580" y2="350" stroke="#999" strokeWidth="0.5" />
                  <text x="300" y="348" textAnchor="middle" fill="#999" fontSize="9">80m</text>
                </svg>
              </div>
              {/* Annotations */}
              {annotations.map(a => (
                <div key={a.id} className="absolute" style={{ left: a.x, top: a.y }}>
                  <div className="flex items-center gap-1">
                    <div className="px-2 py-1 bg-blue-600 text-white text-xs rounded shadow-lg">
                      {a.text}
                    </div>
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-blue-600" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Annotations list */}
          <div className="space-y-4">
            <Card>
              <CardBody>
                <h3 className="text-sm font-semibold text-gray-800 mb-3">标注列表</h3>
                <div className="space-y-2">
                  {annotations.map(a => (
                    <div key={a.id} className="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="w-5 h-5 rounded bg-blue-100 text-blue-600 text-xs flex items-center justify-center flex-shrink-0">{a.id}</div>
                      <div>
                        <p className="text-xs text-gray-700">{a.text}</p>
                        <p className="text-xs text-gray-400">位置: ({a.x}, {a.y})</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <h3 className="text-sm font-semibold text-gray-800 mb-3">图层控制</h3>
                <div className="space-y-1.5">
                  {['平面图', '立面图', '电气图', '给排水图', '空调通风'].map(l => (
                    <label key={l} className="flex items-center gap-2 p-1.5 rounded hover:bg-gray-50 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-3.5 h-3.5 rounded border-gray-300 text-blue-600" />
                      <span className="text-xs text-gray-700">{l}</span>
                    </label>
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
