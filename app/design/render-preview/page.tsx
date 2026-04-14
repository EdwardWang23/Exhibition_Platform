'use client'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Download, Share2, ChevronDown, Eye, Sun, Layers, Maximize2 } from 'lucide-react'

const views = [
  { id: 'panorama', label: '全景图', desc: '整体鸟瞰效果' },
  { id: 'top', label: '俯视图', desc: '平面布局视角' },
  { id: 'front', label: '透视图', desc: '主入口视角' },
  { id: 'section', label: '剖面图', desc: '内部结构展示' },
  { id: 'night', label: '夜景图', desc: '夜间灯光效果' },
]

const renders = [
  { id: 1, label: '主展厅全景', view: 'panorama', time: '4月10日', quality: '4K' },
  { id: 2, label: 'AI创新区', view: 'front', time: '4月10日', quality: '4K' },
  { id: 3, label: '元宇宙体验区', view: 'section', time: '4月11日', quality: '2K' },
]

export default function RenderPreviewPage() {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-800">效果图预览</h1>
            <p className="text-sm text-gray-500">数字中国峰会 · 共 12 张效果图</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" icon={<Download size={14} />}>下载全部</Button>
            <Button variant="outline" size="sm" icon={<Share2 size={14} />}>分享</Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-5">
          {/* Main preview */}
          <div className="lg:col-span-3 space-y-4">
            <Card className="overflow-hidden">
              <CardBody className="p-0">
                {/* Main image */}
                <div className="h-96 relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900">
                  {/* Simulated render */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-blue-900/60" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-5xl font-bold mb-4">DIGITAL FUTURE</div>
                        <div className="text-lg opacity-60">2026数字中国峰会 · 全景效果图</div>
                        <div className="mt-6 flex justify-center gap-8">
                          {[
                            { label: '分辨率', value: '4096×2048' },
                            { label: '渲染时间', value: '2小时15分' },
                            { label: '文件大小', value: '48MB' },
                          ].map(item => (
                            <div key={item.label} className="text-center">
                              <p className="text-xs opacity-60">{item.label}</p>
                              <p className="text-sm font-mono font-medium">{item.value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute top-10 left-10 w-24 h-24 border border-purple-400/20 rounded-lg" />
                    <div className="absolute bottom-10 right-10 w-32 h-20 border border-blue-400/20 rounded-lg" />
                    <div className="absolute top-20 right-20 w-4 h-4 bg-purple-400/30 rounded-full" />
                    <div className="absolute bottom-20 left-20 w-3 h-3 bg-blue-400/30 rounded-full" />
                  </div>
                  {/* Controls overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Badge className="bg-white/20 text-white border-0 backdrop-blur">全景图</Badge>
                        <span className="text-white/70 text-sm">主展厅全景 · 2026-04-10</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <button className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <Maximize2 size={14} />
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <Download size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* View switcher */}
            <div className="grid grid-cols-5 gap-2">
              {views.map(v => (
                <button key={v.id}
                  className={`p-3 rounded-xl border-2 transition-all text-center ${v.id === 'panorama' ? 'border-blue-400 bg-blue-50' : 'border-gray-100 hover:border-gray-200'}`}>
                  <div className="w-full h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg mb-2 flex items-center justify-center">
                    <Eye size={16} className="text-gray-400" />
                  </div>
                  <p className={`text-xs font-medium ${v.id === 'panorama' ? 'text-blue-600' : 'text-gray-700'}`}>{v.label}</p>
                  <p className="text-xs text-gray-400">{v.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Right - Renders list */}
          <div className="space-y-4">
            <Card>
              <CardBody>
                <h3 className="text-sm font-semibold text-gray-800 mb-3">渲染参数</h3>
                <div className="space-y-2">
                  {[
                    { label: '光照强度', value: '85%' },
                    { label: '色温', value: '5500K' },
                    { label: '时间段', value: '下午2:00' },
                    { label: '环境反射', value: '高' },
                  ].map(p => (
                    <div key={p.label} className="flex items-center justify-between py-1.5 border-b border-gray-50">
                      <span className="text-xs text-gray-500">{p.label}</span>
                      <span className="text-xs font-medium text-gray-700">{p.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 space-y-1.5">
                  <Button variant="outline" size="sm" className="w-full" icon={<Sun size={13} />}>调整光照</Button>
                  <Button variant="outline" size="sm" className="w-full" icon={<Layers size={13} />}>图层设置</Button>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <h3 className="text-sm font-semibold text-gray-800 mb-3">效果图列表</h3>
                <div className="space-y-2">
                  {renders.map(r => (
                    <div key={r.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <div className="w-14 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Eye size={14} className="text-gray-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-gray-800">{r.label}</p>
                        <p className="text-xs text-gray-400">{r.view} · {r.time}</p>
                      </div>
                      <Badge variant="default" size="sm">{r.quality}</Badge>
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
