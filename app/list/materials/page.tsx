'use client'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Download, Search, Plus, Filter } from 'lucide-react'

const materials = [
  { no: 1, name: '铝合金框架', spec: '40×40mm', material: '6063-T5铝合金', unit: '米', qty: 1200, price: 85, total: 102000, supplier: '华铝建材' },
  { no: 2, name: '阻燃布料', spec: '3m幅宽', material: 'B1级阻燃涤纶', unit: '平方米', qty: 3500, price: 120, total: 420000, supplier: '东方阻燃' },
  { no: 3, name: 'LED灯带', spec: '5050 RGB', material: '硅胶封装', unit: '米', qty: 800, price: 45, total: 36000, supplier: '光影科技' },
  { no: 4, name: '木质基层板', spec: '1220×2440mm', material: 'E0级密度板', unit: '张', qty: 350, price: 180, total: 63000, supplier: '金鼎木业' },
  { no: 5, name: 'PVC地胶', spec: '2mm厚', material: '复合PVC', unit: '平方米', qty: 8000, price: 65, total: 520000, supplier: '地面专家' },
  { no: 6, name: '亚克力板', spec: '5mm透明', material: 'PMMA', unit: '平方米', qty: 150, price: 350, total: 52500, supplier: '晶彩有机玻璃' },
  { no: 7, name: '钢结构立柱', spec: 'Φ100mm', material: 'Q235钢材', unit: '根', qty: 60, price: 680, total: 40800, supplier: '钢之杰' },
  { no: 8, name: '投影幕布', spec: '200英寸', material: '软幕材质', unit: '套', qty: 8, price: 8500, total: 68000, supplier: '视界投影' },
]

export default function MaterialsListPage() {
  const total = materials.reduce((sum, m) => sum + m.total, 0)

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-800">材料清单</h1>
            <p className="text-sm text-gray-500">数字中国峰会 · 共 8 类主材 · ¥2,350,000</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" icon={<Download size={14} />}>导出Excel</Button>
            <Button variant="outline" size="sm" icon={<Plus size={14} />}>添加材料</Button>
          </div>
        </div>

        <Card>
          <CardBody className="p-0">
            {/* Filters */}
            <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-3">
              <div className="relative flex-1 max-w-xs">
                <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input placeholder="搜索材料..." className="w-full h-8 pl-8 pr-3 bg-gray-50 border border-gray-200 rounded-lg text-sm" />
              </div>
              <Button variant="outline" size="sm" icon={<Filter size={12} />}>筛选</Button>
            </div>
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    {['序号', '材料名称', '规格', '材质', '单位', '数量', '单价(¥)', '合计(¥)', '推荐供应商'].map(h => (
                      <th key={h} className="text-left text-xs font-medium text-gray-500 px-4 py-3 whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {materials.map(m => (
                    <tr key={m.no} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-sm text-gray-400">{m.no}</td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-800">{m.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{m.spec}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{m.material}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{m.unit}</td>
                      <td className="px-4 py-3 text-sm text-gray-800 font-medium">{m.qty.toLocaleString()}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{m.price}</td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-800">¥{m.total.toLocaleString()}</td>
                      <td className="px-4 py-3"><Badge variant="cyan" size="sm">{m.supplier}</Badge></td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-blue-50">
                    <td colSpan={7} className="px-4 py-3 text-sm font-semibold text-gray-800 text-right">合计：</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600">¥{total.toLocaleString()}</td>
                    <td />
                  </tr>
                </tfoot>
              </table>
            </div>
          </CardBody>
        </Card>
      </div>
    </AppLayout>
  )
}
