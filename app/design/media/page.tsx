'use client'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Monitor, Film, Smartphone, Eye, Volume2, Zap, Check, X } from 'lucide-react'

const recommendations = [
  {
    id: 1, type: 'video', name: 'AI主题宣传片', duration: '3分钟', desc: '适合开场播放，展现AI科技魅力',
    icon: Film, color: '#8B5CF6', recommended: true,
    tags: ['开场视频', 'AI主题', '4K高清'],
    tools: ['Adobe Premiere', 'After Effects'],
  },
  {
    id: 2, type: 'interactive', name: 'AR互动导航', duration: '持续', desc: '扫码即可使用AR导航导览，提升观众体验',
    icon: Smartphone, color: '#EC4899', recommended: true,
    tags: ['AR', '导览', '互动'],
    tools: ['Unity', 'ARKit/ARCore'],
  },
  {
    id: 3, type: 'display', name: 'LED环形屏幕', duration: '持续', desc: '360度环形屏幕，营造沉浸式环绕视觉',
    icon: Monitor, color: '#2563EB', recommended: false,
    tags: ['LED', '沉浸式', '大型'],
    tools: ['NovaStar', 'LED Studio'],
  },
  {
    id: 4, type: 'sound', name: '环境音效系统', duration: '持续', desc: '分区背景音乐与音效引导，提升空间氛围',
    icon: Volume2, color: '#10B981', recommended: false,
    tags: ['音响', '分区控制', '氛围'],
    tools: ['QSC', 'd&b audiotechnik'],
  },
  {
    id: 5, type: 'interactive', name: '触控互动大屏', duration: '持续', desc: '多指触控查询屏，展商信息实时查询',
    icon: Eye, color: '#F59E0B', recommended: true,
    tags: ['触控', '查询', '信息'],
    tools: ['iMax屏幕', '触控软件'],
  },
]

export default function MediaRecommendationsPage() {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-800">多媒体内容推荐</h1>
            <p className="text-sm text-gray-500">AI推荐展示形式，生成初版内容</p>
          </div>
        </div>

        <Card>
          <CardBody>
            <div className="flex items-center gap-2 mb-4">
              <Zap size={16} className="text-purple-600" />
              <h2 className="text-sm font-semibold text-gray-800">推荐方案</h2>
              <Badge variant="purple" size="sm">5 项</Badge>
            </div>
            <div className="space-y-3">
              {recommendations.map(r => (
                <div key={r.id} className={`border rounded-xl p-4 transition-all ${r.recommended ? 'border-purple-200 bg-purple-50/30' : 'border-gray-100'}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: r.color + '15' }}>
                      <r.icon size={22} style={{ color: r.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-sm font-semibold text-gray-800">{r.name}</h3>
                        {r.recommended && <Badge variant="purple" size="sm">推荐</Badge>}
                        <Badge variant="default" size="sm">{r.type}</Badge>
                      </div>
                      <p className="text-xs text-gray-500 mb-2">{r.desc}</p>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-400">时长：{r.duration}</span>
                        <div className="flex gap-1">
                          {r.tags.map(tag => <Badge key={tag} variant="default" size="sm">{tag}</Badge>)}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-gray-400">推荐工具：</span>
                        {r.tools.map(t => <Badge key={t} variant="cyan" size="sm">{t}</Badge>)}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 flex-shrink-0">
                      <Button size="sm">采用</Button>
                      <Button variant="outline" size="sm">详情</Button>
                    </div>
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
