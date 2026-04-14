'use client'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Download, FileText, Image, File, CheckCircle2, Clock, Loader } from 'lucide-react'

const exports = [
  { id: 1, name: '2026数字中国峰会_效果图集.pdf', type: 'PDF', size: '156MB', status: 'ready', date: '2026-04-10' },
  { id: 2, name: '施工图全套_20260413.dwg', type: 'CAD', size: '48MB', status: 'ready', date: '2026-04-13' },
  { id: 3, name: '材料清单_20260405.xlsx', type: 'Excel', size: '2.4MB', status: 'ready', date: '2026-04-05' },
  { id: 4, name: '视觉规范手册.pdf', type: 'PDF', size: '28MB', status: 'rendering', date: '生成中' },
]

export default function ExportCenterPage() {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-5">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">导出中心</h1>
          <Button size="sm" icon={<Download size={14} />}>批量导出</Button>
        </div>
        <Card>
          <CardBody className="p-0">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left text-xs font-medium text-gray-500 px-4 py-3"><input type="checkbox" className="w-3.5 h-3.5 rounded border-gray-300" /></th>
                  <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">文件名</th>
                  <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">格式</th>
                  <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">大小</th>
                  <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">状态</th>
                  <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">操作</th>
                </tr>
              </thead>
              <tbody>
                {exports.map(e => (
                  <tr key={e.id} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="px-4 py-3"><input type="checkbox" className="w-3.5 h-3.5 rounded border-gray-300" /></td>
                    <td className="px-4 py-3"><span className="text-sm text-gray-800">{e.name}</span></td>
                    <td className="px-4 py-3"><Badge variant="default" size="sm">{e.type}</Badge></td>
                    <td className="px-4 py-3 text-sm text-gray-500">{e.size}</td>
                    <td className="px-4 py-3">
                      <Badge variant={e.status === 'ready' ? 'success' : 'warning'} dot size="sm">
                        {e.status === 'ready' ? '就绪' : '生成中'}
                      </Badge>
                    </td>
                    <td className="px-4 py-3">
                      {e.status === 'ready' ? <Button variant="ghost" size="sm" icon={<Download size={12} />}>下载</Button> : <Loader size={14} className="animate-spin text-amber-500" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </AppLayout>
  )
}
