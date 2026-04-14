'use client'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Users, Calendar, Download } from 'lucide-react'

const staff = [
  { role: '项目总监', needed: 1, assigned: 1, salary: '2,000/天', skills: '项目管理', status: 'ready' },
  { role: '展台设计师', needed: 4, assigned: 4, salary: '800/天', skills: 'CAD/3DMAX', status: 'ready' },
  { role: '搭建工人', needed: 30, assigned: 25, salary: '350/天', skills: '展台搭建', status: 'partial' },
  { role: 'AV技术员', needed: 8, assigned: 6, salary: '600/天', skills: '音响/灯光', status: 'partial' },
  { role: '接待人员', needed: 20, assigned: 20, salary: '250/天', skills: '客户服务', status: 'ready' },
  { role: '安保人员', needed: 12, assigned: 10, salary: '300/天', skills: '安全管理', status: 'partial' },
]

export default function StaffListPage() {
  const total = staff.reduce((s, t) => s + t.needed, 0)
  const assigned = staff.reduce((s, t) => s + t.assigned, 0)

  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-800">人员清单</h1>
            <p className="text-sm text-gray-500">共 {total} 人 · 已分配 {assigned} 人</p>
          </div>
          <Button size="sm" icon={<Download size={14} />}>导出排班表</Button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border border-gray-100 p-4">
            <p className="text-xs text-gray-400 mb-2">人员到位率</p>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold text-gray-800">{Math.round(assigned / total * 100)}%</span>
            </div>
            <div className="mt-2 bg-gray-100 rounded-full h-2"><div className="h-2 rounded-full bg-indigo-500" style={{ width: `${assigned / total * 100}%` }} /></div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-4">
            <p className="text-xs text-gray-400 mb-2">总人工成本</p>
            <span className="text-3xl font-bold text-indigo-600">¥680,000</span>
            <p className="text-xs text-gray-400 mt-1">3天展期</p>
          </div>
        </div>

        <Card>
          <CardBody className="p-0">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  {['岗位', '需求人数', '已分配', '日薪', '技能要求', '状态'].map(h => (
                    <th key={h} className="text-left text-xs font-medium text-gray-500 px-4 py-3">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {staff.map(s => (
                  <tr key={s.role} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-800">{s.role}</td>
                    <td className="px-4 py-3 text-sm text-gray-800">{s.needed}人</td>
                    <td className="px-4 py-3 text-sm text-gray-800">{s.assigned}人</td>
                    <td className="px-4 py-3 text-sm text-gray-500">¥{s.salary}</td>
                    <td className="px-4 py-3"><Badge variant="default" size="sm">{s.skills}</Badge></td>
                    <td className="px-4 py-3"><Badge variant={s.status === 'ready' ? 'success' : 'warning'} dot>{s.status === 'ready' ? '已到位' : '部分到位'}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>

        {/* Calendar view */}
        <Card>
          <CardBody>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-800">排班日历</h2>
              <div className="flex gap-1 bg-gray-100 p-0.5 rounded-lg">
                {['6月8日', '6月9日', '6月10日'].map(d => (
                  <button key={d} className="px-3 py-1 text-xs rounded-md bg-white shadow-sm text-gray-800 font-medium">{d}</button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {['项目总监', '设计师', '搭建工人', 'AV技术员', '接待', '安保'].map((role, i) => (
                <div key={role} className="p-3 bg-indigo-50 rounded-xl text-center">
                  <p className="text-xs font-medium text-indigo-700">{role}</p>
                  <p className="text-lg font-bold text-indigo-600">{[1, 4, 25, 6, 20, 10][i]}</p>
                  <p className="text-xs text-indigo-400">人</p>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </AppLayout>
  )
}
