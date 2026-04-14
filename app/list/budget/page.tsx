'use client'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Download, AlertTriangle, TrendingUp, DollarSign } from 'lucide-react'

const categories = [
  { name: '材料费', budget: 2800000, actual: 2350000, color: '#14B8A6', items: 45 },
  { name: '设备费', budget: 2200000, actual: 1850000, color: '#F97316', items: 28 },
  { name: '人员费', budget: 800000, actual: 680000, color: '#6366F1', items: 120 },
  { name: '场地费', budget: 1500000, actual: 1400000, color: '#8B5CF6', items: 1 },
  { name: '物流费', budget: 400000, actual: 320000, color: '#EC4899', items: 1 },
  { name: '其他', budget: 800000, actual: 580000, color: '#64748B', items: 1 },
]

export default function BudgetSummaryPage() {
  const totalBudget = categories.reduce((s, c) => s + c.budget, 0)
  const totalActual = categories.reduce((s, c) => s + c.actual, 0)
  const saved = totalBudget - totalActual

  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-5">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">预算汇总</h1>
          <Button size="sm" icon={<Download size={14} />}>导出预算报告</Button>
        </div>

        {/* Overview */}
        <div className="grid sm:grid-cols-4 gap-4">
          <div className="sm:col-span-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-5 text-white">
            <p className="text-sm opacity-70 mb-1">预算总额</p>
            <p className="text-3xl font-bold">¥{totalBudget.toLocaleString()}</p>
            <div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/20">
              <div><p className="text-xs opacity-60">已分配</p><p className="text-lg font-semibold">¥{totalActual.toLocaleString()}</p></div>
              <div><p className="text-xs opacity-60">节省</p><p className="text-lg font-semibold text-emerald-300">¥{saved.toLocaleString()}</p></div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-4">
            <p className="text-xs text-gray-400 mb-1">执行率</p>
            <p className="text-3xl font-bold text-emerald-600">{Math.round(totalActual / totalBudget * 100)}%</p>
            <div className="mt-2 bg-gray-100 rounded-full h-2"><div className="h-2 rounded-full bg-emerald-500" style={{ width: `${totalActual / totalBudget * 100}%` }} /></div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-4">
            <p className="text-xs text-gray-400 mb-1">剩余预算</p>
            <p className="text-3xl font-bold text-blue-600">¥{saved.toLocaleString()}</p>
            <div className="flex items-center gap-1 mt-2 text-xs text-emerald-600">
              <TrendingUp size={12} /> 节余 9.6%
            </div>
          </div>
        </div>

        {/* Breakdown */}
        <Card>
          <CardBody>
            <h2 className="text-sm font-semibold text-gray-800 mb-4">预算明细</h2>
            <div className="space-y-3">
              {categories.map(c => (
                <div key={c.name}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.color }} />
                      <span className="text-sm font-medium text-gray-700">{c.name}</span>
                      <Badge variant="default" size="sm">{c.items}项</Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-gray-400">¥{c.actual.toLocaleString()} / ¥{c.budget.toLocaleString()}</span>
                      <span className="text-sm font-medium" style={{ color: c.color }}>¥{c.actual.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="ml-4 bg-gray-100 rounded-full h-2">
                    <div className="h-2 rounded-full" style={{ width: `${c.actual / c.budget * 100}%`, backgroundColor: c.color }} />
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        {/* Warnings */}
        <Card>
          <CardBody>
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle size={14} className="text-amber-500" />
              <h2 className="text-sm font-semibold text-gray-800">预算预警</h2>
            </div>
            <div className="space-y-2">
              {[
                { msg: '设备费接近预算上限（84%），建议优先租赁方案', level: 'warning' },
                { msg: '材料费节余良好，节省 16%', level: 'info' },
              ].map((w, i) => (
                <div key={i} className={`flex items-start gap-2 p-2.5 rounded-lg ${w.level === 'warning' ? 'bg-amber-50' : 'bg-blue-50'}`}>
                  <AlertTriangle size={14} className={w.level === 'warning' ? 'text-amber-500' : 'text-blue-500'} />
                  <p className={`text-xs ${w.level === 'warning' ? 'text-amber-700' : 'text-blue-700'}`}>{w.msg}</p>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </AppLayout>
  )
}
