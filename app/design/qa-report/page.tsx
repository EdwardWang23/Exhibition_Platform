'use client'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { CheckCircle2, AlertTriangle, XCircle, Download, ArrowRight, Sparkles } from 'lucide-react'

const issues = [
  { id: 1, type: 'color', severity: 'warning', title: '主KV色彩饱和度偏高', location: '主视觉预览', desc: '当前色彩饱和度为85%，建议控制在70-80%之间以获得更佳视觉效果', fix: '降低饱和度至75%' },
  { id: 2, type: 'layout', severity: 'info', title: '论坛区导视牌间距不足', location: '3D模型 · 论坛区', desc: '根据人机工程学标准，导视牌间距应不小于3米', fix: '调整导视牌间距至3.5米' },
  { id: 3, type: 'font', severity: 'error', title: '部分字体未嵌入文件', location: '延展物料设计', desc: '检测到4处未嵌入字体，可能影响跨平台显示', fix: '将字体转换为轮廓' },
]

export default function QAReportPage() {
  const passRate = 92
  const severityColors: Record<string, any> = {
    error: { badge: 'error', icon: XCircle, color: '#EF4444' },
    warning: { badge: 'warning', icon: AlertTriangle, color: '#F59E0B' },
    info: { badge: 'cyan', icon: AlertTriangle, color: '#06B6D4' },
  }

  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-800">设计质检报告</h1>
            <p className="text-sm text-gray-500">2026数字中国峰会 · AI自动质检 · 2026-04-13</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" icon={<Download size={14} />}>导出报告</Button>
            <Button size="sm" icon={<ArrowRight size={14} />}>修复问题</Button>
          </div>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white rounded-xl border border-gray-100 p-4 text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-1">{passRate}%</div>
            <p className="text-xs text-gray-500">质检通过率</p>
            <div className="mt-2 bg-gray-100 rounded-full h-1.5"><div className="h-1.5 rounded-full bg-emerald-500" style={{ width: `${passRate}%` }} /></div>
          </div>
          {[
            { label: '已通过', value: 24, color: '#10B981' },
            { label: '警告项', value: 1, color: '#F59E0B' },
            { label: '需修复', value: 1, color: '#EF4444' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center">
              <div className="text-3xl font-bold" style={{ color: s.color }}>{s.value}</div>
              <p className="text-xs text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Issues */}
        <Card>
          <CardBody>
            <h2 className="text-sm font-semibold text-gray-800 mb-4">问题列表</h2>
            <div className="space-y-3">
              {issues.map(issue => {
                const sev = severityColors[issue.severity]
                return (
                  <div key={issue.id} className="border border-gray-100 rounded-xl p-4 hover:border-gray-200 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: sev.color + '15' }}>
                        <sev.icon size={16} style={{ color: sev.color }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-sm font-medium text-gray-800">{issue.title}</h3>
                          <Badge variant={sev.badge} size="sm">
                            {issue.severity === 'error' ? '严重' : issue.severity === 'warning' ? '警告' : '提示'}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-500 mb-2">位置：{issue.location}</p>
                        <p className="text-xs text-gray-600">{issue.desc}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <Badge variant="purple" size="sm">{issue.type}</Badge>
                        <p className="text-xs text-emerald-600 mt-2">✓ {issue.fix}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardBody>
        </Card>

        {/* Passed items */}
        <Card>
          <CardBody>
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 size={16} className="text-emerald-600" />
              <h2 className="text-sm font-semibold text-gray-800">通过项</h2>
              <Badge variant="success" size="sm">24 项</Badge>
            </div>
            <div className="grid sm:grid-cols-4 gap-2">
              {['主KV色彩搭配', '导视系统布局', '字体层级规范', '图片分辨率', '背景对比度', '间距比例', '品牌一致性', '印刷规范'].map(item => (
                <div key={item} className="flex items-center gap-2 p-2 bg-emerald-50 rounded-lg">
                  <CheckCircle2 size={12} className="text-emerald-600 flex-shrink-0" />
                  <span className="text-xs text-emerald-700">{item}</span>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </AppLayout>
  )
}
