'use client'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Search, AlertTriangle, CheckCircle2, ArrowRight, Download } from 'lucide-react'

const violations = [
  { id: 1, type: 'fire', name: '消防通道净宽不足', location: '主展厅 · 东北角', severity: 'error', desc: '当前通道净宽1.8m，标准要求不低于2.2m', suggest: '将右侧展台内移40cm' },
  { id: 2, type: 'safety', name: '应急照明配置缺失', location: '元宇宙体验区', severity: 'error', desc: '该区域超过300㎡，需配置应急照明', suggest: '新增6盏应急灯' },
  { id: 3, type: 'layout', name: '展位间距略窄', location: 'B区展位', severity: 'warning', desc: '展位间距2.8m，建议不小于3m', suggest: '调整展位排布或减少1排' },
]

export default function ComplianceReportPage() {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-800">规范检查报告</h1>
            <p className="text-sm text-gray-500">自动检测 · 共发现 3 项问题</p>
          </div>
          <Button size="sm" icon={<Download size={14} />}>导出报告</Button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-xl border border-gray-100 p-4 text-center"><div className="text-2xl font-bold text-emerald-600">95%</div><p className="text-xs text-gray-500">通过率</p></div>
          <div className="bg-white rounded-xl border border-gray-100 p-4 text-center"><div className="text-2xl font-bold text-red-500">2</div><p className="text-xs text-gray-500">严重违规</p></div>
          <div className="bg-white rounded-xl border border-gray-100 p-4 text-center"><div className="text-2xl font-bold text-amber-500">1</div><p className="text-xs text-gray-500">警告项</p></div>
        </div>
        <Card>
          <CardBody>
            <h2 className="text-sm font-semibold text-gray-800 mb-4">违规项列表</h2>
            <div className="space-y-3">
              {violations.map(v => (
                <div key={v.id} className={`border rounded-xl p-4 ${v.severity === 'error' ? 'border-red-200 bg-red-50/30' : 'border-amber-200 bg-amber-50/30'}`}>
                  <div className="flex items-start gap-3">
                    <AlertTriangle size={18} className={v.severity === 'error' ? 'text-red-500' : 'text-amber-500'} />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-gray-800">{v.name}</span>
                        <Badge variant={v.severity === 'error' ? 'error' : 'warning'} size="sm">{v.severity === 'error' ? '严重' : '警告'}</Badge>
                        <Badge variant="default" size="sm">{v.type}</Badge>
                      </div>
                      <p className="text-xs text-gray-500 mb-1">位置：{v.location}</p>
                      <p className="text-xs text-gray-600">{v.desc}</p>
                      <div className="mt-2 p-2 bg-white rounded-lg">
                        <span className="text-xs text-emerald-600 font-medium">✓ 整改建议：</span>
                        <span className="text-xs text-gray-600">{v.suggest}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">定位</Button>
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
