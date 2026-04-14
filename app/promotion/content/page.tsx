'use client'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { FileText, Image, Film, Wand2, Eye, Download } from 'lucide-react'

const types = [
  { icon: FileText, label: '宣传文案', desc: '新闻稿/邀请函/社交媒体文案', color: '#06B6D4' },
  { icon: Image, label: '海报图片', desc: '主视觉/宣传海报/Banner', color: '#EC4899' },
  { icon: Film, label: '视频脚本', desc: '宣传片/短视频脚本', color: '#8B5CF6' },
]

export default function ContentGeneratorPage() {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-5">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">宣传素材生成</h1>
        </div>

        {/* Type selection */}
        <Card>
          <CardBody>
            <h2 className="text-sm font-semibold text-gray-800 mb-4">选择素材类型</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {types.map(t => (
                <button key={t.label} className="flex items-center gap-3 p-4 rounded-xl border-2 border-gray-100 hover:border-sky-300 hover:bg-sky-50/30 transition-all text-left">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: t.color + '15' }}>
                    <t.icon size={18} style={{ color: t.color }} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{t.label}</p>
                    <p className="text-xs text-gray-400">{t.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </CardBody>
        </Card>

        {/* Input */}
        <Card>
          <CardBody>
            <h2 className="text-sm font-semibold text-gray-800 mb-3">输入需求</h2>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">宣传主题</label>
                <input placeholder="例如：数字中国峰会开幕邀请" className="w-full h-9 px-3 border border-gray-200 rounded-lg text-sm" />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">核心亮点</label>
                <textarea placeholder="描述展会核心亮点和差异化优势" rows={3} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm resize-none" />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">风格</label>
                <div className="flex gap-2">
                  {['科技感', '专业严谨', '轻松活泼', '高端大气'].map(s => (
                    <button key={s} className="px-3 py-1 text-xs rounded-full border border-gray-200 hover:border-sky-300 hover:bg-sky-50">{s}</button>
                  ))}
                </div>
              </div>
              <Button icon={<Wand2 size={14} />}>生成素材</Button>
            </div>
          </CardBody>
        </Card>

        {/* Preview */}
        <Card>
          <CardBody>
            <div className="text-center py-12 text-gray-400">
              <Wand2 size={40} className="mx-auto mb-3 opacity-30" />
              <p className="text-sm">选择素材类型并填写需求后，AI将为您生成宣传素材</p>
            </div>
          </CardBody>
        </Card>
      </div>
    </AppLayout>
  )
}
