'use client'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { CheckCircle2, AlertTriangle, Camera } from 'lucide-react'

const issues = [
  { id: 1, type: '安全', location: 'A区展台', desc: '框架连接处螺栓未拧紧，存在安全隐患', severity: 'high', status: 'pending' },
  { id: 2, type: '质量', location: 'B区地面', desc: '地胶接缝处有明显缝隙', severity: 'medium', status: 'pending' },
  { id: 3, type: '规范', location: '电气线路', desc: '部分线路未穿管保护', severity: 'high', status: 'fixed' },
]

export default function QualityPage() {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-5">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">质量检查报告</h1>
          <Button size="sm" icon={<Camera size={14} />}>新增检查</Button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            { label: '检查通过率', value: '94%', color: '#10B981' },
            { label: '待整改问题', value: 2, color: '#F59E0B' },
            { label: '已完成整改', value: 1, color: '#64748B' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center">
              <div className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</div>
              <p className="text-xs text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>

        <Card>
          <CardBody>
            <h2 className="text-sm font-semibold text-gray-800 mb-4">问题列表</h2>
            <div className="space-y-3">
              {issues.map(issue => (
                <div key={issue.id} className={`border rounded-xl p-4 ${issue.severity === 'high' ? 'border-red-200 bg-red-50/30' : 'border-amber-200 bg-amber-50/30'}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <AlertTriangle size={16} className={issue.severity === 'high' ? 'text-red-500' : 'text-amber-500'} />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant={issue.severity === 'high' ? 'error' : 'warning'} size="sm">{issue.severity === 'high' ? '严重' : '一般'}</Badge>
                          <Badge variant="default" size="sm">{issue.type}</Badge>
                        </div>
                        <p className="text-sm font-medium text-gray-800">{issue.desc}</p>
                        <p className="text-xs text-gray-400 mt-0.5">位置：{issue.location}</p>
                      </div>
                    </div>
                    <Badge variant={issue.status === 'fixed' ? 'success' : 'warning'} dot>{issue.status === 'fixed' ? '已整改' : '待整改'}</Badge>
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
