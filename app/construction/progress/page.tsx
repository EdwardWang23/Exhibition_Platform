'use client'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { BarChart3, Calendar, Plus, CheckCircle2 } from 'lucide-react'

const tasks = [
  { name: '场地清理', team: '清洁组', start: '6月1日', end: '6月2日', progress: 100, status: 'done' },
  { name: '地面处理', team: '工程组', start: '6月2日', end: '6月4日', progress: 100, status: 'done' },
  { name: '框架搭建', team: '搭建组', start: '6月4日', end: '6月8日', progress: 60, status: 'active' },
  { name: '电气布线', team: '电工组', start: '6月5日', end: '6月9日', progress: 30, status: 'active' },
  { name: '墙面装饰', team: '美工组', start: '6月7日', end: '6月10日', progress: 0, status: 'pending' },
  { name: '设备安装', team: 'AV组', start: '6月10日', end: '6月12日', progress: 0, status: 'pending' },
  { name: '调试验收', team: '全部', start: '6月12日', end: '6月14日', progress: 0, status: 'pending' },
]

export default function ProgressBoardPage() {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-800">施工进度看板</h1>
            <p className="text-sm text-gray-500">智能制造博览会 · 整体进度 28%</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">甘特图</Button>
            <Button variant="outline" size="sm">看板</Button>
            <Button size="sm" icon={<Plus size={14} />}>添加任务</Button>
          </div>
        </div>

        {/* Timeline bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 rounded-xl">
          {['6月1日', '6月4日', '6月7日', '6月10日', '6月14日'].map((d, i) => (
            <div key={d} className="flex-1 text-center">
              <div className="text-xs text-gray-500">{d}</div>
              <div className="mt-1 h-1.5 bg-gray-300 rounded-full"><div className="h-1.5 rounded-full bg-lime-400" style={{ width: i * 25 + '%' }} /></div>
            </div>
          ))}
        </div>

        <Card>
          <CardBody className="p-0">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  {['任务名称', '负责团队', '开始时间', '结束时间', '进度', '状态'].map(h => (
                    <th key={h} className="text-left text-xs font-medium text-gray-500 px-4 py-3">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tasks.map((t, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3"><span className="text-sm font-medium text-gray-800">{t.name}</span></td>
                    <td className="px-4 py-3"><Badge variant="lime" size="sm">{t.team}</Badge></td>
                    <td className="px-4 py-3 text-sm text-gray-500">{t.start}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{t.end}</td>
                    <td className="px-4 py-3 w-36">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-100 rounded-full h-1.5"><div className="h-1.5 rounded-full bg-lime-500" style={{ width: `${t.progress}%` }} /></div>
                        <span className="text-xs text-gray-400 w-8">{t.progress}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant={t.status === 'done' ? 'success' : t.status === 'active' ? 'warning' : 'default'} dot>
                        {t.status === 'done' ? '已完成' : t.status === 'active' ? '进行中' : '待开始'}
                      </Badge>
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
